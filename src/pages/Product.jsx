import React from 'react';
import Navbar from '../components/Navbar'
import {useState, useEffect} from 'react'
import {Row, Col, Card, CardTitle, CardText, Container} from 'reactstrap';
import  {numberWithCommas }from "../numberwithcomas";
import '../css/Product.css'
import "animate.css"
import Footer from '../components/Footer'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import product from '../redux/actions/products'



const Product = (props) => {
    let Promo = [
        {
            id: 1,
            picture:"https://i.postimg.cc/wjyJ35L3/logom.png",
            name:"HAPPY MOTHER’S DAY!",
            ket:"Get one of our favorite menu for free!",
            color: "green"
        },
        {
            id: 2,
            picture:"https://i.postimg.cc/HWvV5cpM/logog.png",
            name:"Get a cup of coffee for free on sunday morning",
            ket:" Only at 7 to 9 AM",
            color: "yellow"
        },
        {
            id: 3,
            picture:"https://i.postimg.cc/wjyJ35L3/logom.png",
            name:"HAPPY MOTHER’S DAY!",
            ket:"Get one of our favorite menu for free!",
            color: "green"
        },
        {
            id: 4,
            picture:"https://i.postimg.cc/WbDt7N3H/logoh.png",
            name:"HAPPY HALLOWEEN!",
            ket:"Do you like chicken wings? Get 1 free only if you buy pinky promise",
            color: "Brown"
        }
    ]    

    const [data, setData] = useState({
        promo: Promo,
    })
    const dispatch = useDispatch()

    const query = new URLSearchParams(props.location.search)
    const DataProducts = useSelector((state) => state.products)
    const search = query.get("search") 


    useEffect(() => {
        dispatch(product.ACTION_GET_ALL_PRODUCTS())
    }, []) 

    useEffect(() => {
        dispatch(product.ACTION_GET_ALL_PRODUCTS(search))
    }, [search]) 


    const history = useHistory()
    const Detail = (id) => {
        if(id){
            history.push(`/Detail/${id}`) 
        } else {
            alert("coba lagi")
        }    
    }

    return(
        <div>
        <Container fluid={true}>    
            <Row>  
            <Navbar islogin={true}/>
             <Col lg="3">
                <h4 className="Title-promo">Promo Today</h4>
                <p>Coupons will be updated every weeks. Check them out! </p>
                
                <Row className="Promo-card">
                {data.promo.map((e) =>{
                    return(
                        <Col lg="10">
                            <Col body className={`Card-pr ${e.color}`} id={e.id}>
                                <Col lg="3"  className="Card-pr-g" ><img src={e.picture} alt="" /></Col>
                                <Col className="ket-p" > 
                                    <h6>{e.name}</h6>
                                    <p>{e.ket}</p>
                                </Col>
                            </Col> 
                        </Col>            
                    )
                })}
                </Row>

                   <button className="Applay-coupon">Applay coupon</button>
                   <ul className="Terms">
                       <h6>Terms and Condition</h6>
                       <li>1. You can only apply 1 coupon per day</li> 
                       <li>2. It only for dine in</li> 
                       <li>3. Buy 1 get 1 only for new user</li> 
                       <li>4. Should make member card to apply coupon</li>                                             
                    </ul>
                </Col>
                <Col lg="9" md="12" xm="12" className="MainProduct">
                        <div className="Menu-p">
                            <p className="p1">Favorite & Promo</p>
                            <p>Coffee</p>
                            <p>Non Coffee</p>
                            <p>Foods</p>
                            <p>Add-on</p>
                        </div>
                        
                 <div className="Product">                     
                    <Row  className="Product-cards"> 
                     {
                        DataProducts.all ? (
                            DataProducts.all.map((e, i) => ( 
                                <Col lg="3" md="3" xs="6" >
                                    <Card body onClick={() => Detail(e.id_product)} className="Card-p">
                                        <CardTitle className="Card-p-g" ><img src={`${process.env.REACT_APP_API_URL}/${e.picture}`} alt="" /></CardTitle>
                                        <CardText className="Card-p-n">{e.product_name}</CardText>
                                        <CardText className="Card-p-p"> Rp. {numberWithCommas(e.price)}</CardText>
                                    </Card>
                                </Col> 
                            ))
                        ):(
                            DataProducts.all.map((e, i) => (
                                <Col lg="3" md="3" xs="6" >
                                        <Card body className="Card-p">
                                            <CardTitle className="Card-p-g" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAELCAMAAAC77XfeAAAAA1BMVEW3t7eZ6ssfAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeDcYqAAE00FRDAAAAAElFTkSuQmCC" alt="" /></CardTitle>
                                            <CardText className="Card-p-n"></CardText>
                                            <CardText className="Card-p-p"></CardText>
                                        </Card>
                                </Col> ))
                        )
                    }
                     </Row>        
                 </div>
                
                </Col>
            </Row>
           
        </Container>
         <Footer />
         </div>
    )
}

export default Product