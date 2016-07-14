```
var header = require('dat-header')

var el = header({
  create: function () {
    // when user clicks 'create new dat'
  }, 
  download: function (link) {
    // when user wants to download a dat link
  }
})
