import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/products`)
    return {
        type: 'PRODUCT_FETCHED',
        payload: request
    }
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('productForm')
    ]
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/products/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}

export function showDelete(product) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('productForm', product)
    ]
}

export function showUpdate(product) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('productForm', product)
    ]
}