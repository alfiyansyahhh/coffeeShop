import Get from '../helper/env'

const initialState = {
   transaction: [],
   load: false,
   error: false,
   errorMessage: 'err',
   Detail: [],
   loadDetail: false,
   errorDetail: false,
   errorDetailMessage: 'err',
}

const transactionReducer = (state=initialState, action) => {
    switch (action.type) {
        case `${Get.Transaction_Pending}`:
            return {...state, loadAll: true }
        case `${Get.Transaction_Fulfilled}`:
            return {...state, transaction: action.payload}
        case `${Get.Transaction_Rejected}`:
            return {...state, loadAll: false, error: true, errorMessage: action.payload}
        
        case `${Get.DetailTransaction_Pending}`:
            return {...state, loadAllDetail: true }
        case `${Get.DetailTransaction_Fulfilled}`:
            return {...state, Detail: action.payload}
        case `${Get.DetailTransaction_Rejected}`:
            return {...state, loadAllDetail: false, errorDetail: true, errorDetailMessage: action.payload}
        
        
        default:
        return state
    }
}

export default transactionReducer