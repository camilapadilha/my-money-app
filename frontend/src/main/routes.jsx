import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboardSemRedux/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'
import Client from '../client/client'
import Product from '../product/product'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Route path='/clients' component={Client} />
        <Route path='/products' component={Product} />
        <Redirect from='*' to='/' />
    </Router>
)