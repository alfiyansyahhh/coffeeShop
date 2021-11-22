import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {  Row, Col, Card, Button,  CardTitle, CardText} from 'reactstrap';
import '../css/Home.css'
import md1 from '../svg/md1.svg'
import md2 from '../svg/md2.svg'
import md3 from '../svg/md3.svg'
import team from '../png/team.png'
import ceklis from '../png/ceklis.png'
import f1 from '../png/image 22.png'
import f2  from '../png/image 27.png'
import f3 from '../png/image 30.png'
import ceklis2 from '../png/Vector (3).png'
import map from '../svg/map.svg'
import partner from '../svg/partner.svg'
import robert from '../png/Ellipse 175.png'
import bintang from '../png/Vector (4).png'
import cristy from '../png/Ellipse 175 (1).png'
import kim from '../png/Ellipse 175 (2).png'


const Home = () => {
    
    const token = localStorage.getItem('token')
    
    return(
        <div className="Home">
        {token ?(
           <Navbar islogin={true}/>
        ):(
           <Navbar islogin={false}/>
        )}

            <div className="Jumbotron">
                <div className="Jumbotron2">
                    <h1>Start Your Day with Coffee and Good Meals</h1>
                    <p>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile</p>
                    <div className="GetStart">Get started </div>  
                </div>
            </div>
            <div className="Middle"> 
                 <div className="MenuMiddle">
                     <div className="Md" >
                        <img src={md1} alt="" />
                        <strong> 90+</strong> 
                     </div>
                     <p> Staff</p> 
                     <div className="Md" >
                        <img  src={md2} alt="" />
                        <strong> 30+</strong> 
                     </div>
                     <p> Stores</p>  
                     <div className="Md" >
                        <img src={md3} alt="" />
                        <strong> 80+</strong> 
                     </div>
                     <p>Customers</p>  
                </div>
            </div>
            <br />
            <br />
            
            <div className="Second2">
                <Row className="Second">
                    <Col lg="6" md="12">
                        <img className="team"src={team} alt="" />
                    </Col>
                    <Col className="Sright">
                        <div className="Sright2">
                            <h1>
                                We Provide Good Coffee and Healthy Meals
                            </h1>
                            <br />
                            <div className="ket">
                                You can explore the menu that we provide with fun and have their own taste and make your day better.
                            </div>
                            <br />
                            <li> <img src={ceklis} alt="" /> <p>High quality beans</p></li>
                            <li> <img src={ceklis} alt="" /> <p>Healty meals. you can request the ingredients</p></li>
                            <li> <img src={ceklis} alt="" /> <p>Chat with our staff to get better experience for ordering</p></li>
                            <li> <img src={ceklis} alt="" /> <p>Free member card with a minimum purchase of IDR 200.000</p></li>
                        </div>    
                    </Col >
                </Row> 
            </div>
            <br />
            <br />
            <br />
            <h1>Here is People’s Favorite </h1>
            <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
             

            <div className="Favorite">
                <Row className="Favorite-card">
                    <Col lg="4" xs="4" >
                        <Card body className="Card-f">
                        <CardTitle className="Card-g"> <img  src={f1} alt="" /> </CardTitle>
                        <CardText><img  src={ceklis2} alt="" />    HazelnutSyrup</CardText>
                        <CardText><img  src={ceklis2} alt="" />    Wanilla Cream</CardText>
                        <CardText><img  src={ceklis2} alt="" />    Ice / Hot</CardText>
                        <CardText><img  src={ceklis2} alt="" />    Sliced Banana </CardText>
                        <strong>Rp.10,000</strong>
                        <br />
                        <Button>Order Now</Button>
                        </Card>
                    </Col>
                    <Col lg="4" xs="4" >
                        <Card className="Card-f" body>
                        <CardTitle className="Card-g"><img  src={f2} alt="" /></CardTitle>
                        <CardText><img  src={ceklis2} alt="" />    1 Shot of Coffee</CardText>
                        <CardText><img  src={ceklis2} alt="" />    Vanilla Cream</CardText>
                        <CardText><img  src={ceklis2} alt="" />    Chocolate Biscuits</CardText>
                        <CardText><img  src={ceklis2} alt="" />    Strawberry Syrup</CardText>
                        <strong>Rp.10,000</strong>
                        <br />
                        <Button>Order Now</Button>
                        </Card>
                    </Col>
                    <Col  lg="4" xs="4">
                        <Card className="Card-f" body>
                        <CardTitle className="Card-g"><img  src={f3} alt="" /></CardTitle>
                        <CardText><img  src={ceklis2} alt="" />    Wings</CardText>
                        <CardText><img  src={ceklis2} alt="" />    Drum Sticks</CardText>
                        <CardText><img  src={ceklis2} alt="" />    Mayonaise and Lemon</CardText>
                        <CardText><img  src={ceklis2} alt="" />    Hot Fried</CardText>
                        <strong>Rp.10,000</strong>
                        <br />
                        <Button>Order Now</Button>
                        </Card>
                    </Col>
                    {/* </div> */}
                </Row>
            </div>

            <br />
            <br />
            <br />

            <div className="Store">
            <Row className="Store2">
                <Col lg="8"><h1>Visit Our Store in the Spot on the Map Below</h1></Col>
                <Col lg="8"><p>See our store in every city on the spot and spen your good day there. See you soon!</p></Col>
                <img className="map" src={map} alt="" />
            </Row>
            </div>

            <br />
            <br />
            <br />

            <div className="OurPartner">
                <Row className="Partner">
                    <Col lg="8">
                    <h1> Our Partner</h1>  
                    </Col>      
                    <img  src={partner} alt="" />  
                </Row>   
            </div>

            <br />
            <br />
            <br />

            <h1>Loved by Thousands of Happy Customer</h1>
            <p>These are the stories of our customers who have visited us with great pleasure.</p>
            
            <div className="Custumer">
                <Row className="Custumer-card">
                    <Col lg="4" xs="4" >
                        <Card className="C-card" body>
                        <CardTitle className="card-f"> 
                            <img  src={robert} alt="" /> 
                            <div className="test3">
                                 <p>4.5</p><img  src={bintang} alt="" /> 
                            </div>
                        </CardTitle>
                        <CardText className="card-f-name"><h6>Viezh Robert</h6><p>Warsaw, Poland</p></CardText>
                        <CardText>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!"</CardText>
                        </Card>
                    </Col>
                    <Col  lg="4" xs="4" >
                        <Card className="C-card" body>
                        <CardTitle className="card-f">
                            <img  src={cristy} alt="" /> 
                            <div className="test3">
                                <p>4.5</p><img  src={bintang} alt="" />
                            </div>
                        </CardTitle>
                        <CardText className="card-f-name"><h6>Yessica Christy</h6> <p>Shanxi, China</p></CardText>
                        <CardText>“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte and yup, the best in town!"</CardText>
                        </Card>
                    </Col>
                    <Col  lg="4" xs="4">
                        <Card className="C-card" body>
                        <CardTitle className="card-f">
                            <img  src={kim} alt="" />
                            <div className="test3">
                                <p>4.5</p><img  src={bintang} alt="" />
                            </div>
                            </CardTitle>
                        <CardText className="card-f-name"><h6>Kim Young Jou</h6> <p>Seoul, South Korea</p></CardText>
                        <CardText>“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, the best in town!"</CardText>
                        </Card>
                    </Col>
                    {/* </div> */}
                </Row>
            </div>
            <br />
            <br />

            <div className="Promo">
            <Row className="Promo2">
                <Col lg="6"><h1>Check our promo today!</h1><p>Let's see the deals and pick yours!</p></Col>
                <Col lg="3"><div className="SeePromo">See Promo </div></Col>    
            </Row>
            </div>
            <div className="test"> </div>
            <Footer />


        </div>
    )
}

export default Home