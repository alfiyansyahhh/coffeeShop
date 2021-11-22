import axios from 'axios'
import Get from '../helper/env'
import { token } from '../helper/token'

const user = {
    
    LOGIN : (data) => {
        return new Promise ((resolve, reject) => {
            axios.post(`${Get.API_URL}/login`, data)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },

    REGISTER : (data) => {
        return new Promise ((resolve, reject) => {
            axios.post(`${Get.API_URL}/register`, data)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },

    ACTION_GET_USER_DETAIL : (id) => {
        const headers = {
            token
        }
        return (dispatch) => {
            axios.get(`${Get.API_URL}/users/${id}`, { headers })
            .then((response) => {
                dispatch({
                    type: `${Get.User_DetailFulfilled}`,
                    payload: response.data.data
                })
            }).catch((err) =>{
                dispatch({
                    type: `${Get.User_DetailRejected}`,
                    payload: "Terjadi Kesalahan"
                })
            })
        }
    }
}

export default user
