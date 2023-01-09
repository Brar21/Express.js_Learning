const express = require('express')
const path = require('path')
const app = express()
const port = 3000
var exphbs = require('express-handlebars');



app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, "static")))
app.use('/',require(path.join(__dirname,'routes/blogs.js')))
app.listen(port, () => {
    console.log(`Exmaple app list at http://localhost:${port}`)
})