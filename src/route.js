const express = require("express")
const questionController = require('./controllers/QuestionController')
const roomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", { page: 'enter-room' }))
route.get('/room/:room', (req, res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("index", { page: 'create-pass' }))

// formato que o formulario da modal tem que passar a info
route.post('/question/:room/:question/:action', questionController.index)
route.post('/create-room', roomController.create)

module.exports = route