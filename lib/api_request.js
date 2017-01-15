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

  Wreck.get('https://api.github.com/orgs/dwyl/repos', function (e, res, payload) {
    console.log(e, payload.toString());

    if (e || !res || res.statusCode !== 200) {
      console.log(" - - - GitHub API Request FAIL >> " + url + "  - - - ");
      // console.log(error, response.headers);
      // console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - -')
      return callback(404);
    } else {
      console.log(e, res, payload);
    }
  });
}

get('mytoken', 'myurl', function (err, data) {
  console.log(err, data);
});

module.exports = get;
