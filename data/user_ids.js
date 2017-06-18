var fs = require('fs');
var path = require('path');

var BASE_DIR = path.resolve('./', 'data') + '/';
var UNIQUE = path.resolve(BASE_DIR, 'unique.csv');
var PEOPLE_DIR = path.resolve(BASE_DIR, 'people');
var IDS = path.resolve(BASE_DIR, 'username_id_map.json');

// get list of people:
var people = fs.readFileSync(UNIQUE).toString().split('\n');
// console.log(people.length);
var obj = {};
people.forEach(function (p) {
  if(p.length > 0) {
    var u = p.split(',')[0];
    var profile = read_profile(u);
    if (profile && profile.uid) {
      obj[u] = profile.uid;
    }
  }
});
// console.log(obj, Object.keys(obj).length);
fs.writeFileSync(IDS, JSON.stringify(obj, null, 2));

function read_profile (u) {
  try {
    var data = fs.readFileSync(path.resolve(PEOPLE_DIR, u + '.json')).toString();
    // console.log(data);
    return JSON.parse(data);
  } catch (e) {
    // console.log(e);
    return false;
  }
}
