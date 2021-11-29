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
const defaultg = 'https://alfiyansyahhh.skom.id/gambar/images.jpg'; 

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
    
  const [edit, setEdit] = useState({
    picture: ' ',
    imagePriview: `${process.env.REACT_APP_API_URL}/${Datauser.picture}`,
    display_name: Datauser.display_name,
    first_name: Datauser.first_name,
    last_name:Datauser.last_name,
    ttgl:Datauser.ttgl,
    email_address:Datauser.email_address,
    phone_number:Datauser.phone_number,
    delivery_address:Datauser.delivery_address
  })

  const insertData = (e) => {
    setEdit({
        ...edit,
        [e.target.name]: e.target.value
    })
  }

  const insertFile = (e) => {
    setEdit({
        ...edit,
        picture: e.target.files[0],
        imagePriview: URL.createObjectURL(e.target.files[0])
    })
  }

  console.log(edit)
  const updateUser = (e) => {
      e.preventDefault();
      const formData = new FormData()
      formData.append("picture", edit.picture)
      formData.append("display_name", edit.display_name)
      formData.append("first_name", edit.first_name)
      formData.append("last_name", edit.last_name)
      formData.append("ttgl", edit.ttgl)
      formData.append("email_address", edit.email_address)
      formData.append("phone_number", edit.phone_number)
      formData.append("delivery_address", edit.delivery_address)
     
      user.ACTION_UPDATE_USER(formData, id).then((response) => {
          alert("succes")
      }).catch((err) => {
          alert('gagal')
          console.log(err)
      })
  }

  return (
    <div>
      <Navbar islogin />
      <div className="bgp">
        <div className="title-p">User Profile</div>
        <Row className="pr">
          <Col lg="4">
            <Card className="card-profile">
                <form>
                    <img className="pprofile" src={edit.imagePriview} />          
                    <input 
                    onChange={insertFile}
                    type="file"
                    name="image"
                    id="file"
                    />
                </form>           
              <p className="displayName">{edit.display_name}</p>
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
                      onChange={insertData}
                      value={edit.email_address}
                      name="email_address"
                      disabled={disabledc}
                    />
                  </p>
                </Col>
                <Col lg="6" xs="12">
                  <p className="mobilep">
                    Mobile number :
                    <input
                      className="constactsp"
                      onChange={insertData}
                      value={edit.phone_number}
                      name="phone_number"
                      disabled={disabledc}
                    />
                  </p>
                </Col>
                <Col lg="6" xs="12">
                  <p className="alamatp">
                    Delivery adress :
                    <input
                      className="constactsp"
                      value={edit.delivery_address}
                      onChange={insertData}
                      name="delivery_address"
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
                      onChange={insertData} 
                      value={edit.display_name}
                      name="display_name"
                      disabled={disabledd}
                    />
                  </p>
                </Col>
                <Col lg="4">
                  <p className="alamatp">
                    DD/MM/YY :
                    <input
                      className="constactsp"
                      value={edit.ttgl}
                      onChange={insertData} 
                      name="ttgl"
                      disabled={disabledd}
                    />
                  </p>
                </Col>
                <Col lg="7">
                  <p className="alamatp">
                    First Name :
                    <input
                      className="constactsp"
                      value={edit.first_name}
                      onChange={insertData} 
                      name="first_name"
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
                      value={edit.last_name}
                      onChange={insertData} 
                      name="last_name"
                      disabled={disabledd}
                    />
                  </p>
                </Col>
              </Row>

            </Card>

          </Col>
          <Col lg="4">
            <form className="tombol" onSubmit={updateUser}>
              <b className="titles">Do you want to save the change?</b>
              <button type="submit" className="save">Save Change</button>
              <div className="cancel">cancel</div>
              <div className="edit2">Edit password</div>
              <div className="logout" onClick={logout}>Logout</div>
            </form>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
