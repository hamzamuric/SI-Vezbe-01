const express = require('express')

const app = express()
const PORT = 3000

const list = []

app.use(express.json())

app.get('/', (req, res) => {
    res.json(list)
})

app.post('/', (req, res) => {
    const article = req.body
    list.push(article)
    res.status(201).json(article)
})

app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`)
})