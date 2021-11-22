/* eslint-disable array-callback-return */
import Get from '../helper/env'

const Cart = {
    ACTION_ADD_CART : (data) => {
        return (dispatch) => {
            dispatch({
                type: `${Get.Cart}`,
                payload: data
            })            
        }
    },

    ACTION_PLUS_QTY : (id) => {
        return (dispatch, getState) => {
            const newCart = getState().cart.cart.map((e) => {
                if (e.id_product == id) {
                    const result = {
                        id_product: e.id_product,
                        picture: e.picture,
                        product_name: e.product_name,
                        price: e.price,
                        category: e.category,
                        categoryID: e.categoryID,
                        ket: e.ket,
                        qty: e.qty + 1
                    }
                    return result
                } else {
                    console.log("iniddia")
                    return e
                } 
            })
            dispatch({
                type: `${Get.Add_Qty_Cart}`,
                payload: newCart
            })
            
        }
    },
    
    ACTION_PLUS_QTYDetail : (id,qty) => {
        return (dispatch, getState) => {
            const newCart = getState().cart.cart.map((e) => {
                if (e.id_product == id) {
                    const result = {
                        id_product: e.id_product,
                        picture: e.picture,
                        product_name: e.product_name,
                        price: e.price,
                        category: e.category,
                        categoryID: e.categoryID,
                        ket: e.ket,
                        qty: e.qty + qty
                    }
                    return result
                }else {
                    console.log("iniddia")
                    return e
                } 
            })
            dispatch({
                type: `${Get.Add_Qty_Cart}`,
                payload: newCart
            })
            
        }
    },
    
    ACTION_MINUS_QTY : (id) => {
        return (dispatch, getState) => {
            const newCart = getState().cart.cart.map((e) => {
                if (e.id_product === id) {
                    const result = {
                        id_product: e.id_product,
                        picture: e.picture,
                        product_name: e.product_name,
                        price: e.price,
                        category: e.category,
                        categoryID: e.categoryID,
                        ket: e.ket,
                        qty: e.qty - 1
                    }
                    return result
                } else {
                    return e
                } 
            })
            dispatch({
                type: `${Get.Min_Qty_Cart}`,
                payload: newCart
            })
            
        }
    },

    ACTION_DELETE_CART : (id) => {
        return (dispatch, getState) => {
            const newCart = getState().cart.cart.filter((e) => {
                if(e.id_product !== id){
                    return e
                }
            })
            dispatch({
                type: `${Get.Delete_Cart}`,
                payload: newCart
            })
        }
    },
}

export default Cart