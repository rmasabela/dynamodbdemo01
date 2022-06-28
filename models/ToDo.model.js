const DynamoDBSchema = require('@aws/dynamodb-data-mapper').DynamoDbSchema
const DynamoDBTable = require('@aws/dynamodb-data-mapper').DynamoDBTable

class ToDo {}

Object.defineProperties(ToDo.prototype, {
   [DynamoDBTable]: { value: 'todos' },
   [DynamoDBSchema]: {
      value: {
         uuid: {
            type: 'String',
            keyType: 'HASH'
         },
         name: { type: 'String'},
         complete: { type: 'Boolean'}
      }
   }
})

module.exports = ToDo