const port = 3003

const bodyParser = require('body-parser')
//sempre que fizer o require ele retorna o mesmo objeto
const express = require('express')
//sempre que chamar o método do express ele vai retornar um novo servidor
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

//em toda requisição que chegar é usado o bodyparser quando for urlencoded
server.use(bodyParser.urlencoded({ extended: true }))
//faz o parser quando for json
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())
server.listen(port, function() {
    console.log(`BACEND is running on port ${port}.`)
})

module.exports = server