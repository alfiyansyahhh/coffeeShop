import axios from 'axios'
import Get from '../helper/env'
import { token } from '../helper/token'

const Transaction = {

    ACTION_ADD_TRANSACTION : (data) => {
        const headers = {
            token
        }
        console.log(data)
        return new Promise ((resolve, reject) => {
            axios.post(`${Get.API_URL}/transaction`, data, { headers })
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                console.log(err)
                reject(err)
            })
        })
    },
    ACTION_GET_TRANSACTION : () => {
        const headers = {
            token
        }
        return (dispatch) => {
            dispatch({
                type: `${Get.Transaction_Pending}`
            })
            axios.get(`${Get.API_URL}/transactionUser`, { headers })
            .then((response) => {
                dispatch({
                    type: `${Get.Transaction_Fulfilled}`,
                    payload: response.data.data
                })
            }).catch((err) =>{
                dispatch({
                    type: `${Get.Transaction_Rejected}`,
                    payload: "Terjadi Kesalahan"
                })
            })
        }
    },
    ACTION_GET_DETAIL_TRANSACTION : (id) => {
        const headers = {
            token
        }
        return (dispatch) => {
            dispatch({
                type: `${Get.DetailTransaction_Pending}`
            })
            axios.get(`${Get.API_URL}/transaction/${id}`, { headers })
          
            .then((response) => {
                console.log(response)
                dispatch({
                    type: `${Get.DetailTransaction_Fulfilled}`,
                    payload: response.data.data
                })
            }).catch((err) =>{
                dispatch({
                    type: `${Get.DetailTransaction_Rejected}`,
                    payload: "Terjadi Kesalahan"
                })
            })
        }
    },

}

export default Transaction
