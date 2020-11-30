const express = require('express')
const Url = require('../../models/url')
const urlGenerator = require('../../url_generator')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', (req, res) => {
    let long = req.body.longUrl
    let short = ''
    let isRepeatedShortUrl = true
    Url.find()
    .lean()
    .then(urlList => {
        const foundByLongUrl = urlList.find(url => url.longUrl === long)
        if(foundByLongUrl) {
            short = foundByLongUrl.shortUrl
            res.render('show', { long, short })
        } else {
            while(isRepeatedShortUrl) {
                short = urlGenerator()
                if(!urlList.find(url => url.shortUrl === short)) isRepeatedShortUrl = false
            }
            let newUrl = Object.assign(req.body)
            newUrl.shortUrl = short
            Url.create(newUrl)
            res.render('show', { long, short })
        }
    })
    .catch(error => console.log(error))
})

router.get('/:short', (req, res) => {
    const short = req.params.short
    Url.find({ shortUrl: short })
    .then(urlList => {
        res.redirect(urlList[0].longUrl)
    })
    .catch(error => console.log(error))
})

module.exports = router