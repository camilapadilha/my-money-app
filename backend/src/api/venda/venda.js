const restful = require('node-restful')
const mongoose = restful.mongoose
const Product = require('../product/product')

const Client = require('../client/client') 
const Schema = mongoose.Schema


const itensVendaSchema = new mongoose.Schema({
    product: [{
        type: Schema.Types.ObjectId, 
        ref: Product
    }],
    valor: {
        type: Number
    },
    quantidade: {
        type: Number
    }
})

const venda = new mongoose.Schema({
    data: {
        type: Date,
        default: Date.now
        
    },
    client: [{
        type: Schema.Types.ObjectId, 
        ref: Client
    }],
    total: {
        type: Number
    },
    itensVenda: [itensVendaSchema]
})

module.exports = restful.model('Venda', venda)
