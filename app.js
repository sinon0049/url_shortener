const express = require('express')
const exhbs = require('express-handlebars')
const app = express()
const routes  = require('./routes')
const port = 3000

app.engine('hbs', exhbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(routes)

app.listen(port, (req, res) => {
    console.log(`URL shortener is listening on https://localhost:${port}`)
})