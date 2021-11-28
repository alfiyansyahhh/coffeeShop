import Get from '../helper/env'

const initialState = {
    cart: []
}

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case `${Get.Cart}`:
            return { cart: [...state.cart, action.payload]}
        case `${Get.Delete_Cart}`:
            return { cart: action.payload }
        case `${Get.Add_Qty_Cart}`:
            return { cart: action.payload }
        case `${Get.Min_Qty_Cart}`:
            return { cart: action.payload }
        case `RESET_CART`:
            return { cart: [] }    
        default:
        return state
    }
}

export default cartReducer