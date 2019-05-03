const Venda = require('./venda')
const errorHandle = require('../common/errorHandler')

Venda.methods(['get', 'post', 'put', 'delete'])
Venda.updateOptions({new: true, runValidators: true})
Venda.after('post', errorHandle).after('put', errorHandle)

Venda.route('count', (req, res, next) => {
    Venda.count((error, value) => {
        if(error) {
            res.status(500).json({error: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = Venda