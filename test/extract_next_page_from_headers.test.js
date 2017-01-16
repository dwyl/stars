var fs = require('fs');
var path = require('path');
var file = 'test/fixtures/dwyl_repos_rawheaders.txt';
var CWD = process.cwd();
// console.log('CWD:', CWD)
var fixture = fs.readFileSync(path.resolve(CWD, file), 'utf8');
console.log(fixture);
var headers = fixture.split('\n');
console.log(headers.length);

var found = headers.filter(function (line) {
  return line.indexOf('api.github') > -1;
})
// [ '\'<https://api.github.com/organizations/11708465/repos?page=2>; rel="next", <https://api.github.com/organizations/11708465/repos?page=7>; rel="last"\',' ]
console.log(found[0]);
var re = /<(.*?)>/g;

var one = found[0].match(re);
console.log(one);
