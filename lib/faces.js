
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
  // var img_base = '/data/img/';          // get avatar from localhost
  var img_base = 'https://avatars2.githubusercontent.com/u/';
  var faces = document.getElementById('faces');
  var people = {};

  var url = 'data/username_id_map.json';
  GET(url, function(json) {
    // console.log(Object.keys(json).length);

    var k = Object.keys(json)
    for (var i = 0; i < 4000; i++) {
      console.log(i, k[i], json[k[i]]);
      var uid = json[k[i]];
      people[uid] = {
        uid: uid,
        u: k[i],
        index: i // used for sorting later
      }
      append_image(uid);
    }
  })

  setTimeout(function(){
    var sorted = Object.keys(people).map(function (p) {
      return people[p];
    })
    .sort(function (p1, p2) {
      if(!p1 || !p1.hsl) {
        return p2;
      }
      if(!p2 || !p2.hsl) {
        return p1;
      }
      return p2.hsl[0] - p1.hsl[0];
    })
    var myNode = document.getElementById("faces");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    } // https://stackoverflow.com/a/3955238/1148249
    sorted.forEach(function (p) {
      append_image(p.uid); // a "Virtual DOM" *could* be useful here...
    });
  }, 60000)

  function append_image(uid) {
    // var src = img_base + uid + '.jpg';          // get avatar from localhost
    var src = img_base + uid + '?v=3&s=200'; // GET images from GitHub
    var img = new Image();
    img.onload = function() {
      try{
        var c = colorThief.getColor(img)
        people[uid]['rgb'] = c;
        people[uid].hsl = rgbToHsl(c);
      } catch (e) {
        console.log(e);
      }
      // console.log(people[uid]);
    }
    img.src = src;
    img.setAttribute('height', '30');
    img.setAttribute('width', '30');
    img.setAttribute('title', uid);
    faces.appendChild(img);
  }
};

function rgbToHsl(c) { // https://stackoverflow.com/a/11923973/1148249
  var r = c[0]/255, g = c[1]/255, b = c[2]/255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if(max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max){
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return new Array(h * 360, s * 100, l * 100);
}
