const restful = require('node-restful')
const mongoose = restful.mongoose

const client = new mongoose.Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    rg: { type: String, required: true }
})

module.exports = restful.model('Client', client)