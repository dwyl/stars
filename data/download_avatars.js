var fs = require('fs');
var path = require('path');
var http = require('https');
var mkdirp = require('mkdirp');

var BASE_DIR = path.resolve('./', 'data') + '/';
var IMG_DIR = path.normalize(BASE_DIR + '/img') + '/';
console.log(IMG_DIR)
mkdirp(IMG_DIR);
var IDS = path.resolve(BASE_DIR, 'username_id_map.json');
var IMG_BASE = 'https://avatars2.githubusercontent.com/u/'
var json = require(IDS);

// console.log(json);
var k = Object.keys(json)
// for (var i = 0; i < 10; i++) {
var i = 0;
var INTERVAL = setInterval(function(){
  console.log(i, k[i], json[k[i]]);
  var uid = json[k[i]];
  var src = IMG_BASE + uid + '?v=3&s=200';
  var filepath = path.normalize(IMG_DIR + uid +'.jpg');
  //

  // save_image(src, filepath);
  download(src, filepath, function(){
    console.log('downloaded:' + filepath);
  })
  if(i < k.length) {
    i++;
  } else {
    clearInterval(INTERVAL);
  }
}, 200);


function save_image (url, filepath) {
  var data = '';
  http.get(url, function(res){
    // console.log(res);
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      fs.writeFileSync(filepath, data);
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

var request = require('request');

function download (uri, filename, callback){
  request.head(uri, function(err, res, body){
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
