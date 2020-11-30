const express = require('express')
const router = express.Router()

router.post('/new', (req, res) => {
    console.log(req.body)
    res.render('show')
})

module.exports = router