const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extened:false}))

app.listen(3000, function (err) {
  if (err) {
    console.log("Express Error");
  } else {
    console.log("Express Listening on port 3000");
  }
})

module.exports = app;
