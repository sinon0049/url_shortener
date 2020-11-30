const express = require('express')
const Url = require('../../models/url')
const urlGenerator = require('../../url_generator')
const router = express.Router()

router.post('/', (req, res) => {
    let longUrl = req.body.longUrl
    let shortUrl = ''
    let isRepeatedShortUrl = true
    Url.find({ longUrl: longUrl })
    .then(url => {
        if(url.length) {
            console.log('yes')
            console.log(url)
            shortUrl = url[0].shortUrl
            console.log(shortUrl)
        } else {
            console.log('no')
            let newUrl = Object.assign(req.body)
            while(isRepeatedShortUrl) {
                shortUrl = urlGenerator()
                Url.find({ shortUrl: shortUrl })
                .then(url => {
                    if(!url.length) isRepeatedShortUrl = false
                })
                .catch(error => console.log(error))
            }
            newUrl.shortUrl = shortUrl
            Url.create(newUrl)
            .catch(error => console.log(error))
        }
    })
    .then(() => res.render('show', { longUrl, shortUrl }))
    .catch(error => console.log(error))
})

router.get('/:short', (req, res) => {
    const short = req.params.short
    Url.find({ shortUrl: short })
    .then(url => {
        res.redirect(url[0].longUrl)
    })
    .catch(error => console.log(error))
})

module.exports = router