const express = require('express')
const app = express()
const cors = require('cors')
const courses = require('./data.json')
const chefs = require('./chefData.json')
const port = 5000
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hey! Foodie Server Running')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/chefs', (req, res) => {
    res.send(chefs)
})
app.get('/chefs/:id', (req, res) => {
    const chef = chefs.find(c => c.id === parseInt(req.params.id))
    if (!chef) res.status(404).send({})
    res.send(chef)
})
app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send({})
    res.send(course)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})