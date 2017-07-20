const Article = require('../models/Article')

const postArticle = function (req,res) {
  Article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.decoded._id
  }, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

const getArticles = function (req,res) {
  Article.find()
  .populate('author', 'username')
  .exec(function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

module.exports = {
  postArticle,
  getArticles
};
