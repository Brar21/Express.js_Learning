const express = require('express')
const path = require('path')
const app = express()
const port = 4000

app.use(express.static(path.join(__dirname,"public")))
app.get('/hello/:name', (req, res) => {
    res.send('Good morning'+" "+ req.params.name)
    // res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(500)
})
app.get('/about', (req, res) => {
    // res.send('Good morning')
    res.sendFile(path.join(__dirname, 'index.html'))
    res.status(210)
})
app.get('/json', (req, res) => {
    // res.send('Good morning')
    // res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(210)
    res.json({ "varinder": "Brar", "day": "first", "learning": "express.js" })
    res.status(200)
})
app.listen(port, () => {
    console.log(`Exmaple app list at http://localhost:${port}`)
})