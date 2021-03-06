const fs = require('fs')

const controller = (request, response) => {
   const id = request.params.id

   const findTodoById = (todos, id) => {
       for (let i = 0; i < todos.length; i++) {
           if (todos[i].id === parseInt(id)) {
               return i
           }
       }
       return -1
   }

   fs.readFile('./store/todos.json', 'utf-8', (err, data) => {
       if (err) {
           return response.status(500).send('Sorry, something went wrong.')
       }
       
       let todos = JSON.parse(data)
       const todoIndex = findTodoById(todos, id)

       if (todoIndex === -1) {
           return response.status(404).send('Sorry, not found.')
       }
       
       todos[todoIndex].complete = true

       fs.writeFile('./store/todos.json', JSON.stringify(todos), () => {
           return response.json({'status': 'ok'})
       })
   })
}

module.exports = controller