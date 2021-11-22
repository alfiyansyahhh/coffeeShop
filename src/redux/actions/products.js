import axios from 'axios'
import Get from '../helper/env'
import { token } from '../helper/token'

const product = {
    
    INSERT_PRODUCT : (data) => {
        const headers = {
            "Content-Type" : "multipart/from-data",
            token
        }
        return new Promise ((resolve, reject) => {
            axios.post(`${Get.API_URL}/product`, data, { headers } )
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    
    UPDATE_PRODUCT : (data, id) => {
        const headers = {
            "Content-Type" : "multipart/from-data",
            token
        }
        return new Promise ((resolve, reject) => {
            axios.put(`${Get.API_URL}/product/${id}`, data, { headers } )
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },

    DELETE_PRODUCT : (id) => {
        const headers = {
            token
        }
        return new Promise ((resolve, reject) => {
            axios.delete(`${Get.API_URL}/product/${id}`, { headers } )
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
        
    ACTION_GET_ALL_PRODUCTS : (search) => {
        return (dispatch) => {
            dispatch({
                type: `${Get.Products_Pending}`
            })
            if(search === null || search === undefined){
                axios.get(`${Get.API_URL}/product`)
                .then((response) => {
                    console.log(response)
                    dispatch({
                        type: `${Get.Products_Fulfilled}`,
                        payload: response.data.data.data
                    })
                }).catch((err) =>{
                    dispatch({
                        type: `${Get.Products_Rejected}`,
                        payload: "Terjadi Kesalahan"
                    })
                })
            } else{
                axios.get(`${Get.API_URL}/product?search=${search}`)
                .then((response) => {
                    console.log(response)
                    dispatch({
                        type: `${Get.Products_Fulfilled}`,
                        payload: response.data.data.data
                    })
                }).catch((err) =>{
                    dispatch({
                        type: `${Get.Products_Rejected}`,
                        payload: "Terjadi Kesalahan"
                    })
                }) 
            }
        }
    },
    
    ACTION_GET_DETAIL_PRODUCT : (id) => {
        const headers = {
            token
        }
        return (dispatch) => {
            dispatch({
                type: `${Get.Product_DetailPending}`
            })
            if(id !== undefined){
                axios.get(`${Get.API_URL}/product/${id}`, { headers })
                .then((response) => {
                    dispatch({
                        type: `${Get.Product_DetailFulfilled}`,
                        payload: response.data.data
                    })
                }).catch((err) =>{
                    dispatch({
                        type: `${Get.Product_DetailRejected}`,
                        payload: "Terjadi Kesalahan"
                    })
                })
            }
           
        }
    },
    ACTION_RESET_DETAIL_PRODUCT : () => {
        return(dispatch) =>{
            dispatch({
                type: "RESETDETAIL"
            })  
        }
    },

    ACTION_TAMBAH : () => {
        return (dispatch) => {
            dispatch({
                type: "TAMBAH",
            })
        }
    },
    
    ACTION_KURANG : (qty) => {
        return (dispatch) => {
            dispatch({
                type: "KURANG",
                patload: qty
            })            
        }
    },

    ACTION_RESET : () => {
        return (dispatch) => {
            dispatch({
                type: "RESET"
            })            
        }
    }
}

export default product

