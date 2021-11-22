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
        // case "SUBTOTAL":
        //     return { ...state ,subtotal: action.payload }
        // case "TAX":
        //     return { ...state ,tax: action.payload }
        // case "SHIPPING":
        //     return { ...state ,shipping: action.payload }
        // case "TOTAL":
        //     return { ...state ,total: action.payload }
    
        default:
        return state
    }
}

export default cartReducer