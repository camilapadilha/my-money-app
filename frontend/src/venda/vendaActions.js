import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/vendas`)
    return {
        type: 'VENDA_FETCHED',
        payload: request
    }
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('vendaForm')
    ]
}