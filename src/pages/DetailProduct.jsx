import Navbar from '../components/Navbar'
import {  Row, Col} from 'reactstrap';
import  { numberWithCommas }from "../numberwithcomas";
import '../css/Detail.css'
import Footer from '../components/Footer'
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import product from '../redux/actions/products'
import cart from '../redux/actions/cart'
import "animate.css"


const Detail = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const id = params.id
    const Detailproduct = useSelector((state) => state.products.detail)
    const Cart = useSelector((state) => state.cart.cart)
    const qty = useSelector((state) => state.products.qty)    
    const level = localStorage.getItem('level')

    console.log(id)
    
    useEffect(() => {
        dispatch(product.ACTION_GET_DETAIL_PRODUCT(id)) 
    }, [])
    
    useEffect(() => {
        return () => {
            dispatch(product.ACTION_RESET())
            dispatch(product.ACTION_RESET_DETAIL_PRODUCT())
        }
    }, [])

    const history = useHistory()
    
    const edit = (id) => {
        history.push(`/Edit/${id}`)
    }

    const Tambah = () => {
        dispatch(product.ACTION_TAMBAH())
    }
    const Kurang = () => {
        if (qty <= 1) {
            history.push('/product') 
        } else {
            dispatch(product.ACTION_KURANG(qty))  
        }  
    }

    const DataCart = {
        ...Detailproduct, qty
    }

    const cekCart = (data) => {
        const find = Cart.find((e) => {
            if(e.id_product === data.id_product){
                return e
            }
        })
        return find
    }

    const AddtoCart= (data) => {
        if (cekCart(data) === undefined) {
            dispatch(cart.ACTION_ADD_CART(data)) 
            history.push(`/Cart`)
        } else {
            dispatch(cart.ACTION_PLUS_QTYDetail(id,data.qty));
            history.push(`/Cart`)
        }
        
    }

    return(
        <div className="detail" fluid={true}>      
            <Row>
                <Navbar islogin={true} />
                <Col className="left">
                    {Detailproduct.picture?(
                    <>
                        <img className="Card-d-g" src={`${process.env.REACT_APP_API_URL}/${Detailproduct.picture}`} alt=""/>
                        <h3 className="Card-d-n">{ Detailproduct.product_name}</h3>
                        <p className="Card-d-p">Rp. {numberWithCommas(Detailproduct.price)}</p>
                    </>
                    ):(<div className="bl"><img className="animate__animated animate__bounceInDown loader" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAELCAMAAAC77XfeAAAAA1BMVEW3t7eZ6ssfAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeDcYqAAE00FRDAAAAAElFTkSuQmCC" alt=""/></div>)}
                    
                    
                    {level === '0' ?(
                         <div className="Tombol-d">
                            <button onClick={() => edit(Detailproduct.id_product)} className="askstaff">Edit Product</button>
                        </div>
                    ):(
                        <div className="Tombol-d">
                            <button className="addcart" onClick={() => AddtoCart(DataCart)}>Add To Cart</button>
                            <button className="askstaff">Ask a Staff</button>
                        </div>
                    )}
                </Col>
                                 
                <Col>
                    <div className='Card-detail'>
                        <p className="info-deliv">Delivery only on Monday to friday at  1 - 7 pm</p>
                        <p className="ket-detail">{Detailproduct.ket}</p>
                        <div className="size">
                            <p className="ket-size">Choose a size</p>
                            <div className="size2">
                                <p className="r">R</p>
                                <p className="r">L</p>
                                <p className="r">XL</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h6 className="test22">Choose Delivery Methods</h6>
                        <div className="ChooseDelive">
                            <p className="to-d">Dine in</p>
                            <p className="to-d">Door Delivery</p>
                            <p className="to-d">Pick up</p>
                        </div>
                    </div>                   
                </Col>
                
            </Row>

            <div className="addc">
                <Row className="addc2">
                    <Col lg="2"><img className="Card-d-g-k" src={`${process.env.REACT_APP_API_URL}/${Detailproduct.picture}`} alt=""/></Col>
                    <Col lg="5">
                        <div className="Card-d-n-k">{Detailproduct.product_name}</div>
                        <div className="Card-d-s-k">x{qty} (Reguler)</div>
                    </Col>    
                    <Col lg="4" className="m-qty">
                        <button className="tmbl-q" onClick={Kurang}>-</button>
                        <div className="Card-d-q-k">
                            {qty}
                        </div>
                        <button className="tmbl-q" onClick={Tambah}>+</button>
                    </Col>
                </Row>  
           
                <Row className="addc3">
                    CHECKOUT
                </Row>
            </div>
            <div className="test6"></div>
            <Footer />
        </div>
    )
}

export default Detail