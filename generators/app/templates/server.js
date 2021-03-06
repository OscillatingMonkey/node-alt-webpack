'use strict'

var path = require('path')
var express = require('express')

const app = express()

app.use(express.static(__dirname + '/dist'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(8080)
