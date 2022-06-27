const express = require('express')
const GetToDoController = require('../controllers/GetToDo.controller')
const CreateToDoController = require('../controllers/CreateToDo.controller')
const UpdateToDoController = require('../controllers/UpdateToDo.controller')

const router = new express.Router()

router.get('/todos', GetToDoController)
router.put('/todos/:id/complete', UpdateToDoController)
router.post('/todo', CreateToDoController)

module.exports = router