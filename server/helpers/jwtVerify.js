const jwt = require('jsonwebtoken')

const userVerify = function (req,res,next) {
  jwt.verify(req.headers.token, process.env.JWT, function (err,decoded) {
    if (err) {
      res.status(401).send(err)
    } else {
      req.decoded = decoded
      next()
    }
  })
}

module.exports = {
  userVerify
};
