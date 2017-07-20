const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article;
