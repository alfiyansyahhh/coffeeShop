const Get = {
    API_URL : process.env.REACT_APP_API_URL,
    Users_Pending : 'GET_ALL_USERS_PENDING',
    Users_Fulfilled : 'GET_ALL_USERS_FULFILLED',
    Users_Rejected : 'GET_ALL_USERS_REJECTED',
    User_DetailFulfilled : 'GET_DETAIL_USER_FULFILLED',
    User_DetailRejected : 'GET_DETAIL_USER_REJECTED',
    
    Products_Pending : 'GET_ALL_PRODUCTS_PENDING',
    Products_Fulfilled : 'GET_ALL_PRODUCTS_FULFILLED',
    Products_Rejected : 'GET_ALL_PRODUCTS_REJECTED',
    Product_DetailPending : 'GET_DETAIL_PRODUCT_PENDING',
    Product_DetailFulfilled : 'GET_DETAIL_PRODUCT_FULFILLED',
    Product_DetailRejected : 'GET_DETAIL_PRODUCT_REJECTED',
    
    Cart : 'GET_CART',
    Add_Qty_Cart : 'ADD_QTY_CART',
    Min_Qty_Cart : 'MIN_QTY_CART',
    Delete_Cart : 'DELETE_CART',

    Transaction_Pending : 'GET_TRANSACTIONS_PENDING',
    Transaction_Fulfilled : 'GET_TRANSACTIONS_FULFILLED',
    Transaction_Rejected : 'GET_TRANSACTIONS_REJECTED',
    DetailTransaction_Pending : 'GET_DETAIL_TRANSACTIONS_PENDING',
    DetailTransaction_Fulfilled : 'GET_DETAIL_TRANSACTIONS_FULFILLED',
    DetailTransaction_Rejected : 'GET_DETAIL_TRANSACTIONS_REJECTED',
}

export default Get