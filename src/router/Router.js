import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import History from '../pages/History'
import Detail from '../pages/DetailProduct'
import DetailHistory from '../pages/DetailHistory'
import Product from '../pages/Product'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'
import Edit from '../pages/EditDetail'
import Add from '../pages/Addproduct'
import Guard from './Guard'

const Router = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/Login">
                <Login />
            </Route>
            <Route path="/Register">
                <Register />
            </Route>
            <Guard path="/Product" component={Product} />
            <Guard path="/Profile" component={Profile} />
            <Guard path="/Add" component={Add} />
            <Guard path="/Edit/:id" component={Edit} />
            <Guard path="/detail/:id" component={Detail} />
            <Guard path="/Cart" component={Cart} />
            <Guard path="/History" component={History} />
            <Guard path="/detailHistory/:id" component={DetailHistory} />
            <Guard path="/Product" component={Product} />
        </Switch>
        
    )
}

export default Router