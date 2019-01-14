import axios from 'axios'
const BASE_URL = 'https://localhost:3003/api'

export function getSummary() {
    const requst = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: Request
    }
}