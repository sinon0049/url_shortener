const express = require('express')
const home = require('./module/home')
const url = require('./module/url')
const router = express.Router()

router.use('/', home)
router.use('/url', url)

module.exports = router