const Article = require('../models/Article')
const ObjectId = require('mongodb').ObjectId

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

const getArticle = function (req,res) {
  Article.findOne({
    _id: ObjectId(req.params.id)
  })
  .populate('author', 'username')
  .exec(function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

const deleteArticle = function (req,res) {
  Article.findOne({
    author: req.decoded._id,
    _id: ObjectId(req.params.id)
  }, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      if (!result) {
        res.send({msg: 'Article or author not found'})
      } else {
        result.remove(function (err,deleted) {
          if (err) {
            res.status(500).send(err)
          } else {
            res.send("Article deleted" + deleted)
          }
        })
      }
    }
  })
}

const updateArticle = function (req,res) {
  Article.update({
    author: req.decoded._id,
    _id: ObjectId(req.params.id)
  }, req.body, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

module.exports = {
  postArticle,
  getArticles,
  getArticle,
  deleteArticle,
  updateArticle
};
