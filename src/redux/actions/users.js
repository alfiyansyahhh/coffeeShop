import axios from 'axios'
import Get from '../helper/env'

const user = {
    
    LOGIN : (data) => {
        return new Promise ((resolve, reject) => {
            axios.post(`${Get.API_URL}/login`, data)
            .then((response) => {
                localStorage.setItem("token", response.data.data.token)
                const users = response.data.data.user
                console.log(users)
                const id = users.id
                const level = users.level
                const picture = users.picture
                localStorage.setItem("idUser", id)
                localStorage.setItem('level', level)
                localStorage.setItem('picture', picture)
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
        const token = localStorage.getItem('token')
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
