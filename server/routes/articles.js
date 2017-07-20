const router = require('express').Router()
const jwtVerify = require('../helpers/jwtVerify')
const controller = require('../controllers/articles')

router.post('/', jwtVerify.userVerify, controller.postArticle)
router.get('/', controller.getArticles)

module.exports = router;
