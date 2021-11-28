import Get from '../helper/env'

const initialState = {
    all: [],
    loadAll: false,
    errorAll: false,
    errorAllMessage: 'err',
    detail: [],
    qty: 1,
    loadDetail: false,
    errorDetail: false,
    errorDetailMessage: 'err',
}

const productsReducer = (state=initialState, action) => {
    switch (action.type) {
        case `${Get.Products_Pending}`:
            return {...state, loadAll: true}
        case `${Get.Products_Fulfilled}`:
            return {...state, loadAll: false, all: action.payload}
        case `${Get.Products_Rejected}`:
            return {...state, loadAll: false, errorAll: true, errorAllMessage: action.payload}
        
        case `${Get.Product_DetailPending}`:
            return {...state, loadDetail: true }
        case `${Get.Product_DetailFulfilled}`:
            return {...state, loadDetails: false, detail: action.payload}
        case `${Get.Product_DetailRejected}`:
            return {...state, loadDetail: false, errorDetail: true, errorDetailMessage: action.payload}
        case "TAMBAH" :
            return {...state, qty: state.qty + 1}
        case "KURANG" :
            return {...state, qty: state.qty - 1}
        case "RESET" :
            return {...state, qty: 1}
        case "RESETDETAIL" :
            return {...state, detail: []}
       
        case `${Get.Products_SearchPending}`:
            return {...state, loadDetail: true }
        case `${Get.Products_SearchFulfilled}`:
            return {...state, loadDetails: false, all: action.payload}
        case `${Get.Products_SearchRejected}`:
            return {...state, loadDetail: false, errorDetail: true, errorDetailMessage: action.payload}
    
        default:
        return state
    }
}

export default productsReducer