const express = require('express')
const home = require('./module/home')
const router = express.Router()

router.use('/', home)

module.exports = router