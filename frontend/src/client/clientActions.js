import axios from 'axios'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/clients`)
    return {
         type: 'CLIENT_FETCHED',
         payload: request
    }
}

export function init() {
    return [
        selectTab('tabList'),
        showTabs('tabList'),
        getList()
    ]
}