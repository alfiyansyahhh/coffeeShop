import {Link} from 'react-router-dom'
import  '../css/Navbar.css'
import Logo from '../coffee 1.png'
import Humberger from '../svg/hamburger-menu.svg'
import { Row, Col } from 'reactstrap';
import React, { useState } from 'react';
import { Collapse, Navbar, Nav, Container} from 'reactstrap';
import {useHistory} from 'react-router-dom'
const chat = 'https://alfiyansyahhh.skom.id/gambar/chat (1) 1.png'
const seacrh = 'https://alfiyansyahhh.skom.id/gambar/Vector (5).png'


const Navbar1 = (props) => {
    const history = useHistory();
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const [search, setSearch] = useState("")
    const level = localStorage.getItem('level')
    const picture = localStorage.getItem('picture')
    
    const changeSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/Product?search=${search}`)
    }

    return(  
    <div className="Navbar">
     <Container fluid={true}>  
        
        <Row>
            <Navbar color="faded" light>
                <Col className="nvbr">
                    <div>
                    <Link to="/" className="l"> <img src={Logo} alt="" /> </Link>
                    <Link to="/" className="ketLogoFooter">Coffee Shop</Link>
                    </div>
                    <img src={Humberger} className="menub d-block d-sm-none" alt="" onClick={toggleNavbar} />
                </Col>
                    {level === '0'?(
                        <Col lg="6" md="6" xs="12"  className="Menu1">
                            <Link className="M1" to="/"> Home</Link>
                            <Link className="M1" to="/Product"> Product</Link>
                            <Link className="M1" to="/Add"> Add-product</Link>
                        </Col>  
                    ):(
                        <Col lg="6" md="6" xs="12"  className="Menu1">
                            <Link className="M1" to="/"> Home</Link>
                            <Link className="M1" to="/Product"> Product</Link>
                            <Link className="M1" to="/Cart"> Your Cart</Link>
                            <Link className="M1" to="/History"> History</Link>
                        </Col>  
                    )} 
                <Col lg="3" md="3" xs="3" className="Menu2">
                    {props.islogin === true?(
                         <div className="nav-user">
                         <form className="testss" onSubmit={handleSubmit}>
                             <img src={seacrh} alt=""/>
                             <input  type="text" onChange={changeSearch} name="search" value={search} />
                         </form>                       
                         <div><img className="chat" src={chat} alt=""/></div>
                         <Link to="/Profile">{picture?(<img className="fprofile" src={`${process.env.REACT_APP_API_URL}/${picture}`} alt=""/>):("loading")}</Link>
                        </div>
                    ):(
                        <div>
                            <Link className="Loginn-nav" to="/Login"> Login</Link>
                            <Link to="/Register"> <button className="Register">Sign Up</button></Link>
                        </div>
                    )}
                </Col>

                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <Link className="M2" to="/"> Home</Link>
                    <Link className="M2" to="/Product"> Product</Link>
                    <Link className="M2" to="/Cart"> Your Cart</Link>
                    <Link className="M2" to="/History"> History</Link>
                    {props.islogin === true?(
                         <div className="nav-user">
                         <form className="testss" onSubmit={handleSubmit}>
                             <img src={seacrh} alt=""/>
                             <input  type="text" onChange={changeSearch} name="search" value={search} />
                         </form>                       
                         <div><img className="chat" src={chat} alt=""/></div>
                         <Link to="/Profile"><img className="fprofile" src={`${process.env.REACT_APP_API_URL}/${picture}`} alt=""/></Link>
                        </div>
                    ):(
                        <div>
                         <Link className="Loginn-nav" to="/Login"> Login</Link>
                        <Link className="Register" to="/Register"> Sign Up</Link>
                        </div>
                    )}
                </Nav>
                
                </Collapse>
            </Navbar>
        </Row> 
     </ Container>
    </div>                      
     
    )
}

export default Navbar1
