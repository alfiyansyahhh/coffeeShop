/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Row, Col, Card, CardTitle, CardText, Container, Form, FormGroup, Label, Input,
} from 'reactstrap';
import Navbar from '../components/Navbar';
import { numberWithCommas } from '../numberwithcomas';
import Footer from '../components/Footer';
import cart from '../redux/actions/cart';
import user from '../redux/actions/users';
import transaction from '../redux/actions/transactions';
import '../css/Cart.css';
import card from '../png/card.svg';
import bank from '../png/bank.svg';
import cash from '../png/cash.svg';

const Cart = function () {
  const Cart = useSelector((state) => state.cart.cart);
  const Datauser = useSelector((state) => state.users.user);
  const [disabled, setDisabled] = useState(true);

  function handleGameClick() {
    setDisabled(!disabled);
  }
  const dispatch = useDispatch();

  const id = localStorage.getItem('idUser');

  useEffect(() => {
    dispatch(user.ACTION_GET_USER_DETAIL(id));
  }, []);

  let Subtotal = 0;
  let Tax = 0;
  let Total = 0;
  const shipping_cost = 15000;
  Cart.forEach((e) => {
    Subtotal += e.price * e.qty;
    Tax = Subtotal * 10 / 100;
    Total = Subtotal + Tax + shipping_cost;
  });


  const Del = (id) => {
    dispatch(cart.ACTION_DELETE_CART(id));
  };

  const plus = (id) => {
    dispatch(cart.ACTION_PLUS_QTY(id));
  };
  const minus = (id, qty) => {
    console.log('qty', qty);
    if (qty === 1) {
      dispatch(cart.ACTION_DELETE_CART(id));
    } else {
      dispatch(cart.ACTION_MINUS_QTY(id));
    }
  };

  const [data, setData] = useState({
    id_user: id,
    penerima: Datauser.display_name,
    alamat: Datauser.delivery_address,
    phone_number: Datauser.phone_number,
    payment: '',
    shipping_cost,
    subtotal: Subtotal,
    tax: Tax,
    total: Total,
    details: Cart.map((e) => e),
  });

  const insertData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setData({
      ...data,
      shipping_cost,
      subtotal: Subtotal,
      tax: Tax,
      total: Total,
      details: Cart.map((e) => e),
    });
  }, [Datauser, shipping_cost, Subtotal, Tax, Total]);

  const pay = (e) => {
    e.preventDefault();
    console.log(data)
    transaction.ACTION_ADD_TRANSACTION(data).then((response) => {
      alert('succes');
      dispatch(cart.ACTION_RESET_CART())
    }).catch((err) => {
      alert('MAAF SEDANG ADA GANGUGAN');
      console.log(err);
    });
  };

  return (
    <Container fluid>
      <Row>
        <Navbar islogin />
        <div className="cart">
          <Row className="or">
            <Col lg="6" xs="12" className="kiriOrder">
              <div className="cekc">Checkout your item now!</div>

              <Card className="card-order">
                <CardTitle className="titleOrder"> Order Summary</CardTitle>
                <CardText className="order">
                  {Cart.map((e) => (
                    <Row className="sda">
                      <Col><img className="gambarCart" src={`${process.env.REACT_APP_API_URL}/${e.picture}`} alt="" /></Col>
                      <Col>
                        <p className="nama">{e.product_name}</p>
                        <div className="qtyt">
                          <p className="qty">
                            x
                            {e.qty}
                          </p>
                          <p className="minus" onClick={() => minus(e.id_product, e.qty)}>-</p>
                          <p className="plus" onClick={() => plus(e.id_product)}>+</p>
                        </div>
                        <div className="bawah">
                          <p className="harga">
                            Rp.
                            {numberWithCommas(e.price * e.qty)}
                          </p>
                          <p className="del" onClick={() => Del(e.id_product)}>delete</p>
                        </div>
                      </Col>
                    </Row>

                  ))}
                </CardText>
                <CardText className="Asdsd">
                  <Row className="sub">
                    <Col lg="6" xs="6">SUBTOTAL</Col>
                    <Col lg="6" xs="6" className="kananhar">
                      Rp.
                      {numberWithCommas(Subtotal)}
                    </Col>
                    <Col lg="6" xs="6"> TAX & FEES</Col>
                    <Col lg="6" xs="6" className="kananhar">
                      Rp.
                      {numberWithCommas(Tax)}
                    </Col>
                    <Col lg="6" xs="6">SHIPPING</Col>
                    <Col lg="6" xs="6" className="kananhar">Rp. 15,000</Col>
                    <Col lg="6" xs="6"><strong>TOTAL</strong></Col>
                    <Col lg="6" xs="6" className="kananhar">
                      <strong>
                        Rp.
                        {numberWithCommas(Total)}
                      </strong>
                    </Col>
                  </Row>
                </CardText>
              </Card>
            </Col>
            <Col lg="6" xs="12" className="kanan">
              <Row className="rowkanan">
                <Col lg="12">
                  <div className="atascart">
                    <div>Address details</div>
                    <div onClick={handleGameClick}>edit</div>
                  </div>
                  <Card className="address-cart">
                    <CardText>
                      <strong>Delivery</strong>
                      {' '}
                      to
                      <input
                        onChange={insertData}
                        className="typing-penerima"
                        value={data.penerima}
                        name="penerima"
                        disabled={disabled}
                        placeholder="penerima"
                      />
                      {' '}
                      Street
                    </CardText>
                    <CardText>
                      <input
                        onChange={insertData}
                        className="typing-container"
                        value={data.alamat}
                        name="alamat"
                        disabled={disabled}
                        placeholder="alamat penerima"
                      />
                    </CardText>
                    <CardText>
                      <input
                        onChange={insertData}
                        className="typing-container"
                        value={data.phone_number}
                        name="phone_number"
                        disabled={disabled}
                        placeholder="phone number"
                      />
                    </CardText>
                  </Card>
                </Col>
                <Col lg="12">
                  <div className="titlepay">Payment method</div>
                  <Card className="payment-method">
                    <Form className="paymentform" onChange={insertData}>
                      <FormGroup tag="fieldset">
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" value="1" name="payment" />
                            {' '}
                            <div className="titlecardss">
                              <img src={card} />
                              {' '}
                              Card
                            </div>
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" value="2" name="payment" />

                            <div className="titlecardss">
                              <img src={bank} />
                              {' '}
                              Bank account
                            </div>
                          </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                          <Label check>
                            <Input type="radio" value="3" name="payment" />

                            <div className="titlecardss">
                              <img src={cash} />
                              {' '}
                              Cash on delivery
                            </div>
                          </Label>
                        </FormGroup>
                      </FormGroup>
                    </Form>
                  </Card>
                </Col>
                <Col lg="12">
                  <form onSubmit={pay}>
                  <button className="submitpay" type="submit">
                    confirm and pay
                  </button>
                  </form>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <Footer />
      </Row>
    </Container>
  );
};

export default Cart;
