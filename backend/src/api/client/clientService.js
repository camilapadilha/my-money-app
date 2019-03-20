const Client = require('./client')
const errorHandle = require('../common/errorHandler')

Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators: true})
Client.after('post', errorHandle).after('put', errorHandle)

Client.route('cout', (req, res, next) => {
    Client.cout((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = Client