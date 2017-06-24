var fs = require('fs');
var path = require('path');

var BASE_DIR = path.resolve('./', 'data') + '/';
var DWYL_DIR = path.resolve(BASE_DIR, 'dwyl')
var COMBINED = path.resolve(BASE_DIR, 'stargazers.csv');
var UNIQUE = path.resolve(BASE_DIR, 'unique.csv');
// fs.unlinkSync(UNIQUE) // delete the previous file before starting

fs.readFile(COMBINED, 'utf8', function (err, data) {
  var count = {};
  if (err) {
    console.log(err);
    return;
  } else {
    var rows = data.split('\n');
    if(rows.length > 0) {
      rows.forEach(function (row) {
        // console.log(row)
        if (row.length > 0){
          var col = row.split(',');
          // console.log(col[3])
          if (col[3] && col[3].length > 0) {
            // console.log(count[col[3]]);
            if (count[col[3]] === undefined || isNaN(count[col[3]])) {
              count[col[3]] = 1;
            }
            else { count[col[3]] = count[col[3]] + 1; }
          }
        }
      })
      // console.log(count);
      var lines = Object.keys(count)
      .sort((a, b) => count[b] - count[a])
      .map(function (k) {
        return k + ',' + count[k];
      });
      fs.appendFile(UNIQUE, lines.join('\n') + '\n', function (err, data) {
        if (err) {
          console.log(err);
          return;
        }
      });
    }
  }
});
