var fs = require('fs');
var path = require('path');
var file = 'test/fixtures/dwyl_repos_rawheaders.txt';
var CWD = process.cwd();
// console.log('CWD:', CWD)
var fixture = fs.readFileSync(path.resolve(CWD, file), 'utf8');
console.log(fixture);
var headers = fixture.split('\n');
console.log(headers.length);
