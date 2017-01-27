var fs = require('fs');
var path = require('path');
var CWD = process.cwd();

function extract (rawheaders) {
  var next;
  var re = /<(.*?)>/g;
  var headers = rawheaders.split('\n');

  var found = headers.filter(function (line) {
    return line.indexOf('api.github') > -1;
  })
  if(found.length > 0) {
    next = found[0].match(re)[0].replace('<', '').replace('>', '');
  }
  return next;
}

var file = 'test/fixtures/dwyl_repos_rawheaders.txt';
var rawheaders = fs.readFileSync(path.resolve(CWD, file), 'utf8');
console.log(extract(rawheaders))

var file2 = 'test/fixtures/namegen_repos_rawheaders_no_next.txt';
var rawheaders2 = fs.readFileSync(path.resolve(CWD, file2), 'utf8');
console.log(extract(rawheaders2))
