// list of people who have starred a dwyl repository
var gs = require('github-scraper');
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');

// constants
var TIMESTAMP = Date.now();
var GURL = 'https://github.com/';
var BASE_DIR = path.resolve('./', 'data') + '/';
console.log('BASE_DIR:', BASE_DIR );
var NEXT_PAGE_LIST = BASE_DIR + '___next_page.txt';
fs.openSync(NEXT_PAGE_LIST, 'a') // "touch" file to ensure it exists

var ORG = 'dwyl/';
gs(ORG, process_org_page);

var INTERVAL = setInterval(function(){
  crawl_next();
}, 500);

function process_org_page(err, data) {
  if(data && data.entries) {
    data.entries.forEach(function (repo) {
      save_next_page(ORG + repo.name);
    })
    if(data.next_page) {
      // gs(data.next_page, process_org_page);
      save_next_page(data.next_page);
    }
  }
  else {
    console.log(data);
  }
}

function crawl_next() {
  fs.readFile(NEXT_PAGE_LIST, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    } else {
      var urls = data.split('\n');
      if(urls.length > 0) {
        var url = urls[0]
        var linesExceptFirst = data.split('\n').slice(1).join('\n');
        fs.writeFile(NEXT_PAGE_LIST, linesExceptFirst);
      } else {
        clearInterval(INTERVAL); // stop cralwing!
        return;
      }
    }
    if(url.indexOf('/dwyl?') > -1) { // org page
      gs(url, process_org_page);
    }
    else {
      stars(url);
    }
  });
}

function stars(url) {
  if(url.indxeOf('https') === -1) {
    var DATA_DIR = path.normalize(BASE_DIR + url); // repository
    mkdirp.sync(DATA_DIR); // ensure the dir exists
  }

  var p = ['stargazers', 'watchers'];
  // console.log('url.indexOf(p[0]) === -1 ', url.indexOf(p[0]))
  if(url.indexOf(p[0]) === -1 && url.indexOf(p[1]) === -1 ) { // url is base repo
    console.log('>>> ' + url)
    p.forEach(function(page) {
      gs(url + '/' + page, process_results); // start crawling stargazers
    })
  }
  else {
    gs(url, process_results);
  }
}

function process_results(err, data) {
  if (err) { return console.log(err); }
  write_lines(data);
  if(data.next_page) {
    // gs(data.next_page, process_results);
    return save_next_page(data.next_page);
  }
}

function save_next_page(url) {
  var lines = fs.readFileSync(NEXT_PAGE_LIST).toString().split('\n');
  if(lines.indexOf(url) === -1) { // ensure no duplicates
    fs.writeFileSync(NEXT_PAGE_LIST, lines.join('\n') + url + '\n');
  }
}


function parse_file(filename) {
  var data = fs.readFileSync(filename).toString();
  return data.split('\n').map(function (row) {
    if(row.length > 1) {
      var username = row.split(',')[1]
      return username;
    }
  });
}


// write lines to file
function write_lines(data) {
  var filepath = path.normalize(BASE_DIR +
    data.url.replace(GURL, '').split('?')[0]) + '.csv'

  fs.openSync(filepath, 'a') // "touch" file to ensure it exists
  var existing = parse_file(filepath);

  var rows = data.entries.map(function(entry) {
    if(existing.indexOf(entry) === -1) {
      return TIMESTAMP + ',' + entry;
    }
  }).filter(function (n) { return n != undefined }); // remove blanks

  if (rows.length > 1) {
    var str = rows.join('\n') + '\n'; // end file with new line
    return fs.appendFile(filepath, str, function (err, res) {
      console.log('wrote ' + data.entries.length + ' lines to: ' + filepath);
    });
  } else {
    console.log('no new faces')
  }
}
