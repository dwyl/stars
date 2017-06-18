
function GET(url, callback) {
  console.log('GET url:', url)
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var json = JSON.parse(xhr.responseText);
      callback(json);
    } // else { console.log(xhr) } // how NOT to do error handling ...
  }
  xhr.send(null);
}

var img_base = 'https://avatars2.githubusercontent.com/u/'

var url = 'data/username_id_map.json';
GET(url, function(json) {
  console.log(Object.keys(json).length);
  var faces = document.getElementById('faces');
  Object.keys(json).forEach(function (u) {
    var elem = document.createElement('img');
    elem.setAttribute('src', img_base + json[u] + '?v=3&s=10');
    elem.setAttribute('height', '10');
    elem.setAttribute('width', '10');
    elem.setAttribute('alt', u);
    faces.appendChild(elem);
  })
})
