const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const routes  = require('./routes')
const port = process.env.PORT || 3000
require('./config/mongoose')

app.engine('hbs', exhbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, (req, res) => {
    console.log(`URL shortener is listening on https://localhost:${port}`)
})