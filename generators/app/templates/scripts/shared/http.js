'use strict'
/**
*
* IMPORTANT
*
* This is not necessarily the best way to make API
* requests, but it is one that works in general and
* it separates request code out of actions.
* It will contact a JSON API and pass the resulting promise
* data into a callback to be handled. Import this into
* actions and call it, and alter it as necessary.
*
* Incase you are connecting to various API's there are
* multiple strategies that can be used in order to
* separate the actual request logic from actions.
* One method can be to copy this file for every unique
* connection and setting apiUri and options. Another
* implementation is to simply copy the method and do
* a named export for each unique connection.
*
**/

require('whatwg-fetch')
import methods from './methods'

// Set API URI
var apiUri = 'http://localhost:3000'
// Set options that should persist in every request
var options = {
  headers: {
    'Content-Type': 'application/json'
  }
}

module.exports = (path, callback, data = {}, method = methods.GET, tmpOptions = {}) => {
  var reqOptions = options
  reqOptions.merge(tmpOptions)

  reqOptions.method = method

  if (method !== methods.GET) {
    reqOptions.body = JSON.stringify(data)
  }

  var reqUrl = apiUri + path

  window.fetch(reqUrl, reqOptions).then((response) => {
    response.json().then((data) => {
      callback(response, data)
    })
  })
}
