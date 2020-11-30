const express = require('express')
const Url = require('../../models/url')
const urlGenerator = require('../../url_generator')
const router = express.Router()

router.post('/', (req, res) => {
    let longUrl = req.body.longUrl
    let shortUrl = ''
    let isRepeatedShortUrl = true
    Url.find()
    .lean()
    .then(urlList => {
        if(urlList.find(url => url.longUrl === longUrl)) {
            shortUrl = urlList[0].shortUrl
            res.render('show', { longUrl, shortUrl })
            if(!undefined) console.log('yes')
        } else {
            while(isRepeatedShortUrl) {
                shortUrl = urlGenerator()
                if(!urlList.find(url => url.shortUrl === shortUrl)) isRepeatedShortUrl = false
            }
            let newUrl = Object.assign(req.body)
            newUrl.shortUrl = shortUrl
            Url.create(newUrl)
            res.render('show', {longUrl, shortUrl})
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