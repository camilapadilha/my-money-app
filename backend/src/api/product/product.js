const restful = require('node-restful')
const mongoose = restful.mongoose

const product = new mongoose.Schema({
    name: { type: String, required: true },
    valorCompra: { type: Number, required: true }, 
    valorVenda: { type: Number, required: true },
    estoque: { type: Number, required: true },
    descricao: { type: String, required: false }
})

module.exports = restful.model('Product', product)