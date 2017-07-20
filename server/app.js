const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const users = require('./routes/users')
const articles = require('./routes/articles')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/users', users)
app.use('/api/articles', articles)

app.listen(3000, function (err) {
  if (err) {
    console.log("Express Error");
  } else {
    console.log("Express Listening on port 3000");
  }
})

mongoose.connect('mongodb://localhost/hacktivpress-1-zulfikarannur', {
  useMongoClient : true
}, function (err) {
  if (err) {
    console.log("Mongoose Error" + err);
  } else {
    console.log("MongoDB Connected");
  }
})

module.exports = app;
