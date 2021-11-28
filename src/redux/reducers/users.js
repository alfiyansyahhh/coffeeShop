import Get from '../helper/env'

const initialState = {
    user: [],
    error: false,
    errorMessage: 'err',
}

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case `${Get.User_DetailFulfilled}`:
            return { user: action.payload}
        case `${Get.User_DetailRejected}`:
            return { ...state, error: true, errorMessage: action.payload}    
        default:
        return state
    }
}

export default cartReducer