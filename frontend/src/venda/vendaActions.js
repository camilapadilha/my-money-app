import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { showTabs, selectTab } from '../common/tab/tabActions'
import { initialize } from 'redux-form'


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

export function create(values) {
    return submit(values, 'post')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/vendas/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}