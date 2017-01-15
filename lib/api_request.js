'use strict';

var Wreck = require('wreck');


/**
 * url_validator does exactly what its name suggests validates a url
 * @param {String} token - a GitHub OAuth2 Token
 * @param {String} url - a (hopefully) valid GitHub url
 * @param {Function} callback - the callback we should call after scraping
 * we are simply testing for presence of a callback and its typeof 'function'
 * @returns {String} - returns the validated url or throws error!
 */
function get (token, url, callback) {

  var opts = {
    headers: { 'user-agent': 'starbot' }
  };

  Wreck.get('https://api.github.com/orgs/dwyl/repos', opts,
  function (e, res, payload) {
    if (e || !res || res.statusCode !== 200) {
      console.log(" - - - GitHub API Request FAIL >> " + url + "  - - - ");
      // console.log(error, response.headers);
      // console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - -')
      return callback(404);
    } else {
      console.log(e, res, JSON.parse(payload.toString()).length );
      callback(e, JSON.parse(payload.toString()));
    }
  });
}

var fs = require('fs');

get('mytoken', 'myurl', function (err, json) {
  // console.log(err, json);
  var str = JSON.stringify(json, null, 2);
  fs.writeFile('./test/fixtures/sample_repos.json', str, function (err, data) {
    console.log(err, data);
  });
});

module.exports = get;
