import '../css/Footer.css'
import {  Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom'
import Logo from '../coffee 1.png'
import fb from '../png/fb.png'
import twt from '../png/twt.png'
import ig from '../png/ig.png'
const Footer = () => { 
    return(
            <div className="Footer">
                <Row className="Footer2">
                    <Col className="logo-f">
                        <div className="logoFooter">
                        <Link to="/"> <img src={Logo} alt="" /> </Link>
                        <Link className="ketLogoFooter" to="/"> Coffee Shop</Link>
                        </div>
                      
                        <p className="ket-f" >Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                        <div className="sosmed">
                            <img src={fb} alt="" />
                            <img src={twt} alt="" />
                            <img src={ig} alt="" />
                        </div>
                    </Col>  

                    <Col className="Menu-f">
                        <ul>
                            <li  className="list-group-item">Product</li>
                            <li  className="list-group-item">Download</li>
                            <li  className="list-group-item">Pricing</li>
                            <li  className="list-group-item">Locations</li>
                            <li  className="list-group-item">Countries</li>
                            <li  className="list-group-item">Blog</li>
                        </ul>
                        <ul>
                            <li  className="list-group-item">Engage</li>
                            <li  className="list-group-item">Coffe Shop?</li>
                            <li  className="list-group-item">FAQ</li>
                            <li  className="list-group-item">Abaout Us</li>
                            <li  className="list-group-item">Privacy Policy</li>
                            <li  className="list-group-item">Terms of Service</li>
                        </ul>
                    </Col>      
                </Row>   
            </div>
    )
}

export default Footer