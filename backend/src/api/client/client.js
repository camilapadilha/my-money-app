const restful = require('node-restful')
const mongoose = restful.mongoose

const client = new mongoose.Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    rg: { type: String, required: true },
    endereco: { type: String, required: false },
    bairro: { type: String, required: false },
    numero: { type: String, required: false },
    telefone: { type: String, required: false },
    celular: { type: String, required: false },
    tipoPessoa: { type: String, required: false, 
        enum: ['fisica', 'juridica']}
})

module.exports = restful.model('Client', client)