const express = require('express')
const app = express()

const HelloWorldController = require('./controllers/HelloWorld.controller')
const GetToDoController = require('./controllers/GetToDo.controller')
const CreateToDoController = require('./controllers/CreateToDo.controller')
const UpdateToDoController = require('./controllers/UpdateToDo.controller')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', HelloWorldController)

app.get('/todos', GetToDoController)

app.put('/todos/:id/complete', UpdateToDoController)

app.post('/todo', CreateToDoController)

app.listen(3000, () => {
    console.log('Application running on http://localhost:3000')
})