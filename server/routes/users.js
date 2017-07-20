const router = require('express').Router()
const controller = require('../controllers/users')

router.post('/signup', controller.signUp)
router.post('/signin', controller.signIn)

module.exports = router;
