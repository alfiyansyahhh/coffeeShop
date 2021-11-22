/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useHistory } from 'react-router-dom';
import {
  Row, Col, Card, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../css/profiile.css';
import user from '../redux/actions/users';
import pen from '../png/penedit.svg';
import defaultg from '../png/images.jpg'; 

const Profile = function () {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  const dispatch = useDispatch();
  const Datauser = useSelector((state) => state.users.user);
  const id = localStorage.getItem('idUser');
  const [disabledc, setDisabledc] = useState(true);
  const [disabledd, setDisabledd] = useState(true);

  const handleClickContact = () => {
    setDisabledc(!disabledc);
  };

  const handleClickDetail = () => {
    setDisabledd(!disabledd);
  };

  useEffect(() => {
    dispatch(user.ACTION_GET_USER_DETAIL(id));
  }, []);

  return (
    <div>
      <Navbar islogin />
      <div className="bgp">
        <div className="title-p">User Profile</div>
        <Row className="pr">
          <Col lg="4">
            <Card className="card-profile">
              {Datauser.picture === '' ? (
                <img className="pprofile" src={defaultg} />
              ) : (
                <img className="pprofile" src={`${process.env.REACT_APP_API_URL}/${Datauser.picture}`} />
              )}

              <img className="pen" src={pen} />
              <p className="displayName">{Datauser.display_name}</p>
            </Card>
          </Col>
          <Col lg="8">
            <Card className="card-contact">
              <div className="ketprt">
                <p>Contacts</p>
                <img onClick={handleClickContact} className="pen2" src={pen} />
              </div>

              <Row className="prp">
                <Col lg="6" xs="12">
                  <p className="emailp">
                    Email address :
                    <input
                      className="constactsp"
                      value={Datauser.email_address}
                      name="alamat"
                      disabled={disabledc}
                    />
                  </p>
                </Col>
                <Col lg="6" xs="12">
                  <p className="mobilep">
                    Mobile number :
                    <input
                      className="constactsp"
                      value={Datauser.phone_number}
                      name="alamat"
                      disabled={disabledc}
                    />
                  </p>
                </Col>
                <Col lg="6" xs="12">
                  <p className="alamatp">
                    Delivery adress :
                    <input
                      className="constactsp"
                      value={Datauser.delivery_address}
                      name="alamat"
                      disabled={disabledc}
                    />
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg="8">
            <Card className="card-detail">
              <div className="ketprt">
                <p>details</p>
                <img onClick={handleClickDetail} className="pen2" src={pen} />
              </div>
              <Row className="detail-m">
                <Col lg="7" xs="12">
                  <p className="alamatp">
                    Display Name :
                    <input
                      className="constactsp"
                      value={Datauser.display_name}
                      name="alamat"
                      disabled={disabledd}
                    />
                  </p>
                </Col>
                <Col lg="4">
                  <p className="alamatp">
                    DD/MM/YY :
                    <input
                      className="constactsp"
                      value={Datauser.ttgl}
                      name="alamat"
                      disabled={disabledd}
                    />
                  </p>
                </Col>
                <Col lg="7">
                  <p className="alamatp">
                    First Name :
                    <input
                      className="constactsp"
                      value={Datauser.first_name}
                      name="alamat"
                      disabled={disabledd}
                    />
                  </p>
                </Col>
                <Col lg="4">
                  <Form>
                    <FormGroup className="gender" tag="fieldset">
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" value="male" name="gender" />
                          {' '}
                          <div>
                            Male
                          </div>
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" value="female" name="gender" />

                          <div>
                            Female
                          </div>
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </Form>
                </Col>
                <Col lg="7">
                  <p className="alamatp">
                    Last Name:
                    <input
                      className="constactsp"
                      value={Datauser.last_name}
                      name="alamat"
                      disabled={disabledd}
                    />
                  </p>
                </Col>
              </Row>

            </Card>

          </Col>
          <Col lg="4">
            <div className="tombol">
              <b className="titles">Do you want to save the change?</b>
              <div className="save">Save Change</div>
              <div className="cancel">cancel</div>
              <div className="edit2">Edit password</div>
              <div className="logout" onClick={logout}>Logout</div>
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
