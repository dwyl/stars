'use strict';

/**
 * extract next and last page links from raw headers of response
 * Note: I know this is an inefficient way performing this extraction
 * it's deliberate to give someone *else* the chance to learn
 * how to refactor "live" code - let me know if you're interested
 * see: https://github.com/dwyl/stars/issues/12
 * @param {String} rawheaders - the raw http response headers
 */
 module.exports = function extract (rawheaders) {
   var next;
   var re = /<(.*?)>/g;
   var headers = rawheaders.split('\n');

   var found = headers.filter(function (line) {
     return line.indexOf('api.github') > -1;
   })

   if (found.length > 0) {
     next = found[0].match(re)[0].replace('<', '').replace('>', '');
   }
   return next;
 }
