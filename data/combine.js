var fs = require('fs');
var path = require('path');

var BASE_DIR = path.resolve('./', 'data') + '/';
var DWYL_DIR = path.resolve(BASE_DIR, 'dwyl')
var COMBINED = path.resolve(BASE_DIR, 'stargazers.csv');
// read the data/dwyl directory
var dirs = fs.readdirSync(DWYL_DIR);
console.log(dirs.length)

dirs.forEach(function (repo) {
  var filepath = path.resolve(DWYL_DIR, repo, 'stargazers.csv');
  fs.readFile(filepath, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
      return;
    } else {
      var rows = data.split('\n');
      if(rows.length > 0) {
        var lines = rows.map(function (row) {
          var col = row.split(',');
          if(col[0] && col[0].length > 0) {
            return '' + col[0] + ',dwyl,' + repo + ',' + col[1];
          }
          return;
        }).filter(function (n) { return n != undefined }); // remove blanks
        console.log(lines);
        fs.appendFile(COMBINED, lines.join('\n') + '\n', function (err, data) {
          if (err) {
            console.log(err);
            return;
          }
        });
      }
    }
  });
});
