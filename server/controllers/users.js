const User = require('../models/User')
const hash = require('object-hash')
const jwt = require('jsonwebtoken')

const signUp = function (req,res) {
  User.create({
    username: req.body.username,
    password: hash(req.body.password)
  }, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

const signIn = function (req,res) {
  User.findOne({
    username: req.body.username
  }, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      if (!result) {
        res.send({msg: 'Username not found'})
      } else {
        if (result.password === hash(req.body.password)) {
          res.send({token: jwt.sign({_id: findOne._id}, process.env.JWT)})
        } else {
          res.status(401).send({msg: 'Password wrong!'})
        }
      }
    }
  })
}
module.exports = {
  signUp,
  signIn
};
