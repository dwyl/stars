
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

window.onload = function() {
  var colorThief = new ColorThief();
  var img_base = '/data/img/'
  var faces = document.getElementById('faces');

  var url = 'data/username_id_map.json';
  GET(url, function(json) {
    console.log(Object.keys(json).length);

    var k = Object.keys(json)
    for (var i = 11; i < 21; i++) {
      console.log(i, k[i], json[k[i]]);
      var uid = json[k[i]];
      // console.log(uid);
      var src = img_base + uid + '.jpg';
      append_image(src, uid);
      // make_image(src);
    }

    function append_image(src, id) {
      var img = new Image();
      img.onload = function() {
        console.log("Height: " + this.height);
        var i = document.getElementById(id)
        var c = colorThief.getColor(img)
        // document.body.style.backgroundColor = 'rgb(' + c.join(',') + ')';
        console.log(c);
        var div = document.createElement('div');
        div.style.backgroundColor = 'rgb(' + c.join(',') + ')';
        div.className = 'color';
        document.getElementById('colors').appendChild(div);
        // var div = document.createElement('div');
      }
      img.src = src;
      img.setAttribute('height', '100');
      img.setAttribute('width', '100');
      img.setAttribute('title', id);
      faces.appendChild(img);
      // var elem = document.createElement('img');
      // elem.setAttribute('src', src);
      // elem.setAttribute('height', '100');
      // elem.setAttribute('width', '100');
      // elem.setAttribute('title', id);
      // elem.id = id;
      //
      // var img = document.getElementById(id)
      // img.on('load', function() {
      //   console.log(colorThief.getColor(img));
      // });
      //
    }

    // Object.keys(json).forEach(function (u) {
    //   console.log(colorThief.getColor(src))
    // })
  })
};
