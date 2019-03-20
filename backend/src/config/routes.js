const express = require('express')


module.exports = function(server) {
    //Defenir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //ROtas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

    const Client = require('../api/client/clientService')
    Client.register(router, '/clients')
}