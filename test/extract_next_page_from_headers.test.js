var fs = require('fs');
var path = require('path');
var file = 'test/fixtures/dwyl_repos_rawheaders.txt';
var CWD = process.cwd();

function extract (filepath) {
  var next;
  var fixture = fs.readFileSync(path.resolve(CWD, filepath), 'utf8');
  var re = /<(.*?)>/g;
  // console.log(fixture);
  var headers = fixture.split('\n');
  var found = headers.filter(function (line) {
    return line.indexOf('api.github') > -1;
  })
  if(found.length > 0) {
    next = found[0].match(re)[0].replace('<', '').replace('>', '');
  }
  return next;
}

console.log(extract(file))

var file2 = 'test/fixtures/namegen_repos_rawheaders_no_next.txt';
console.log(extract(file2))
