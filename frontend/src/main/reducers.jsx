import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import ClientReducer from '../client/clientReducer'
import ProductReducer from '../product/productReducer'
import VendaReducer from '../venda/vendaReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    client: ClientReducer,
    product: ProductReducer,
    venda: VendaReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer