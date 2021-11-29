import {
    FormGroup,
    Form,
    Label,
    Input,
    Row,
    Col,
    div
  } from "reactstrap";
import '../css/Login.css'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import Logo from '../coffee 1.png'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import user from '../redux/actions/users'
const Google = 'https://alfiyansyahhh.skom.id/gambar/google-logo-png-suite-everything-you-need-know-about-google-newest-0%202.png'

const Login = () => {

    const [users, setData] = useState({
        username: "",
        password: ""
    })

    const insertData = (e) => {
        setData({
            ...users,
            [e.target.name]: e.target.value
          })
    }

    const history = useHistory();
    const login = (e) => {
        e.preventDefault();
        user.LOGIN(users).then((response) => {
            history.push(`/product`)
        }).catch((err) => {
            alert("username/password salah")
        })
    }

    return(
        <div>  
            <div className="loginb">
                <div className="Bg"></div>
                <div className="Main-Login" >
                    <div className="Nav-Login">
                        <div >
                            <Link className="l" to="/"> <img src={Logo} alt="" /> </Link>
                            <Link className="l2" to="/"> Coffee Shop</Link>
                        </div>
                        <div>
                            <Link className="Register" to="/Register"> Sign Up</Link>
                        </div>
                    </div>

                    <div className="bungkusL">
                    <div className="Login-i">Login</div>
                    <div className="Login">
                        <Form onSubmit={login} className="FLogin">
                            <Col>
                            <FormGroup className="FormGroup">
                                <Label>Email/username :</Label>
                                <Input onChange={insertData}
                                className="form-control-alternative"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                type="text"
                                name="username"
                                />
                            </FormGroup >
                            <FormGroup className="FormGroup">
                                <Label>Password :</Label>
                                <Input onChange={insertData}
                                className="form-control-alternative"
                                id="exampleFormControlInput1"
                                placeholder="password"
                                type="password"
                                name="password"
                                />
                            </FormGroup>
                            <br />
                            <p className="Forgetpass">Forgot password?</p>
                            <button type="submit" className="B-login">Login</button>
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

export default Login