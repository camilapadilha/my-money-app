const Product = require('./product')
const errorHandle = require('../common/errorHandler')

Product.methods(['get', 'post', 'put', 'delete'])
Product.updateOptions({new: true, runValidators: true})
Product.after('post', errorHandle).after('put', errorHandle)

Product.route('cout', (req, res, next) => {
    Product.cout((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({ value })
        }
    })
})

module.exports = Product