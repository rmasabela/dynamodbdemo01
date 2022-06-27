const express = require('express')
const app = express()

const HelloWorldController = require('./controllers/HelloWorld.controller')
const ToDoRouter = require('./routes/ToDo.routes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', HelloWorldController)
app.use(ToDoRouter)

app.listen(3000, () => {
    console.log('Application running on http://localhost:3000')
})