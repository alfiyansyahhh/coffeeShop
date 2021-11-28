/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import '../css/Add.css';
import {
  FormGroup,
  Form,
  Label,
  Input,
  Row,
  Col,
  Container,
} from 'reactstrap';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import product from '../redux/actions/products';

const Add = function () {
  const [add, setAdd] = useState({
    image: ' ',
    imagePriview: 'https://pertaniansehat.com/v01/wp-content/uploads/2015/08/default-placeholder.png',
    product_name: '',
    price: '',
    category: '',
    ket: '',
  });

  const history = useHistory();
  const cproduct = () => {
    history.push('/product');
  };

  const insertData = (e) => {
    setAdd({
      ...add,
      [e.target.name]: e.target.value,
    });
  };

  const insertFile = (e) => {
    setAdd({
      ...add,
      image: e.target.files[0],
      imagePriview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const addProductDb = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', add.image);
    formData.append('product_name', add.product_name);
    formData.append('price', add.price);
    formData.append('category', add.category);
    formData.append('ket', add.ket);
    product.INSERT_PRODUCT(formData).then((response) => {
      alert('succes');
      console.log(response);
    }).catch((err) => {
      alert('hanya admin');
      console.log(err);
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col lg="5" className="bg" />
        <Col className="fedit">
          <div className="edit">
            <div className="edit-title">Add Product</div>
            <Form className="f-editproduct" onSubmit={addProductDb}>
              <FormGroup>
                <Label>Picture: </Label>
                <br />
                <img className="picture" width={100} height={100} src={add.imagePriview} />
                <Input
                  onChange={insertFile}
                  type="file"
                  name="image"
                  id="file"
                />
              </FormGroup>
              <FormGroup>
                <Label>Product Name :</Label>
                <Input
                  type="text"
                  placeholder="Input Product Name"
                  onChange={insertData}
                  name="product_name"
                />
              </FormGroup>
              <FormGroup>
                <Label>Price :</Label>
                <Input
                  type="number"
                  placeholder="Input Price"
                  onChange={insertData}
                  name="price"
                />
              </FormGroup>
              <FormGroup>
                <Label>Category :</Label>
                <Input
                  className="selectcategory"
                  type="select"
                  onChange={insertData}
                  name="category"
                >
                  <option value="">Select your option</option>
                  <option value="1">Coffee</option>
                  <option value="2">Non-Coffee</option>
                  <option value="3">Foods</option>
                  <option value="4">Add-on</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Keterangan :</Label>
                <Input
                  className="ketadd"
                  type="textarea"
                  name="ket"
                  placeholder="Input Keterangan"
                  onChange={insertData}
                />
              </FormGroup>

              <button className="tfe" onClick={cproduct}>Close</button>
              <button type="submit" className="sbt">Submit</button>
            </Form>
          </div>
        </Col>
        <Footer />
      </Row>
    </Container>
  );
};

export default Add;
