var fs = require('fs');
var path = require('path');
var CWD = process.cwd();

var test = require('tape');
var dir  = __dirname.split('/')[__dirname.split('/').length-1];
var file = dir + __filename.replace(__dirname, '') + " > ";

var extract = require('../lib/extract_next_page_from_headers.js');

test(file + 'extract "next" page from API Response Headers', function (t) {
  var expected = 'https://api.github.com/organizations/11708465/repos?page=2';
  var file = 'test/fixtures/dwyl_repos_rawheaders.txt';
  var rawheaders = fs.readFileSync(path.resolve(CWD, file), 'utf8');
  var headers = rawheaders.split('\n');
  var actual = extract(headers);
  t.equal(expected, actual, "Next page is: " + actual);
  t.end()
});

test(file + 'no next page in response headers', function (t) {
  var expected = undefined;
  var file = 'test/fixtures/namegen_repos_rawheaders_no_next.txt';
  var rawheaders = fs.readFileSync(path.resolve(CWD, file), 'utf8');
  var headers = rawheaders.split('\n');
  var actual = extract(headers);
  t.equal(expected, actual, 'Next page is: ' + actual + ' (as expected)');
  t.end()
});
