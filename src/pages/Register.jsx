import {
    FormGroup,
    Form,
    Label,
    Input,
    Row,
    Col,
    div
  } from "reactstrap";
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import Logo from '../coffee 1.png'
import Google from '../png/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import user from '../redux/actions/users'

const Register = () => {
    const [users, setData] = useState({
        username: "",
        email_address:"",
        password: "",
        phone_number: "",
        level:"1"
    })

    const insertData = (e) => {
        setData({
            ...users,
            [e.target.name]: e.target.value
          })
      }

    const history = useHistory();
    const register = (e) => {
        e.preventDefault();
        user.REGISTER(users).then((response) => {
            history.push(`/login`)
        }).catch((err) => {
            alert("username/email sudah terdaftar")
        })
    }

    return(
        <div>  
            <div  className="loginb">
                <div lg="5" className="Bg">
                    
                </div>
                <div className="Main-Login" >
                    
                    <div className="Nav-Login">
                        <div >
                            <Link className="l" to="/"> <img src={Logo} alt="" /> </Link>
                            <Link className="l2" to="/"> Coffee Shop</Link>
                        </div>
                        <div>
                            <Link className="Register" to="/Login"> Login</Link>
                        </div>
                    </div>

                    <div className="bungkusR">
                    <div className="Register-i">Register</div>       
                    <div className="Login">
                        <Form onSubmit={register} className="FLogin">
                                <Col>
                                <FormGroup className="FormGroup">
                                    <Label>Email Adress :</Label>
                                    <Input
                                    className="form-control-alternative"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                    type="email"
                                    name="email_address"
                                    onChange={insertData}
                                    />
                                </FormGroup >
                                <FormGroup className="FormGroup">
                                    <Label>Username :</Label>
                                    <Input
                                    className="form-control-alternative"
                                    id="exampleFormControlInput1"
                                    placeholder="username"
                                    type="text"
                                    name="username"
                                    onChange={insertData}
                                    />
                                </FormGroup >
                                <FormGroup className="FormGroup">
                                    <Label>Password :</Label>
                                    <Input
                                    className="form-control-alternative"
                                    id="exampleFormControlInput1"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    onChange={insertData}
                                    />
                                </FormGroup>
                                <FormGroup className="FormGroup">
                                    <Label>Phone Number :</Label>
                                    <Input
                                    className="form-control-alternative"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter yout phone number"
                                    type="number"
                                    name="phone_number"
                                    onChange={insertData}
                                    />
                                </FormGroup>
                                <br />
                                <button type="submit" className="B-login">Sign Up</button>
                                <button className="B-login-google"><img src={Google} alt="" />        Login with Google</button>
                                </Col>
                        </Form>
                    </div>
                    </div>
                </div>
            </div>
            <Footer /> 
        </div>
    )
}

export default Register