/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import '../css/EditDetail.css'
import {
    FormGroup,
    Form,
    Label,
    Input,
    Row,
    Col,
    Container
  } from "reactstrap";
import Footer from '../components/Footer'
import {useHistory, useParams} from 'react-router-dom'
import {React, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import product from '../redux/actions/products'


const Edit = () => {
    
    const history = useHistory()
    const dispatch = useDispatch()
    const params = useParams()
    const id = params.id
    const Detailproduct = useSelector((state) => state.products.detail)


    useEffect(() => {
        dispatch(product.ACTION_GET_DETAIL_PRODUCT(id))
    }, [])
    
        
    const [edit, setEdit] = useState({
        image: ' ',
        imagePriview: `${process.env.REACT_APP_API_URL}/${Detailproduct.picture}`,
        product_name: Detailproduct.product_name,
        price: Detailproduct.price,
        category: Detailproduct.categoryID,
        ket: Detailproduct.ket
        })


    console.log(edit)
    console.log(Detailproduct.categoryID)
     useEffect(() => {
         setEdit({
            image: ' ',
            imagePriview: `${process.env.REACT_APP_API_URL}/${Detailproduct.picture}`,
            product_name: Detailproduct.product_name,
            price: Detailproduct.price,
            category: Detailproduct.categoryID,
            ket: Detailproduct.ket
         })
    }, [Detailproduct])
    
    const insertData = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
          })
    }

    const insertFile = (e) => {
        setEdit({
            ...edit,
            image: e.target.files[0],
            imagePriview: URL.createObjectURL(e.target.files[0])
        })
    }

    const editProductDb = (e) => {
        e.preventDefault();
        const formData = new FormData()
        if (edit.image !== ' ') {
            formData.append("image", edit.image)
            formData.append("product_name", edit.product_name)
            formData.append("price", edit.price)
            formData.append("category", edit.category)
            formData.append("ket", edit.ket)
        } else {
            formData.append("product_name", edit.product_name)
            formData.append("price", edit.price)
            formData.append("category", edit.category)
            formData.append("ket", edit.ket)
        }
       
        product.UPDATE_PRODUCT(formData, id).then((response) => {
            alert("succes")
            history.push('/product')
        }).catch((err) => {
            alert('hanya admin')
            console.log(err)
        })
    }

    const deleteProduct = (id) => {
        product.DELETE_PRODUCT(id).then((response) => {
            alert("succes")
            history.push('/product')
        }).catch((err) => {
            alert('hanya admin')
            console.log(err)
        })
    }

    const cproduct = () =>{
        history.push('/product')
    }

    
    return (
        <Container fluid={true}>
        <Row>
            <Col lg="5" className="bg"></Col>
            <Col className="fedit" >
            <div className="edit">
            <div className="edit-title">Edit Product</div>
                    <Form className="f-editproduct" onSubmit={editProductDb}>      
                        <FormGroup>
                            <Label>Picture: </Label>
                            <br />
                            <img className="picture" width={100} height={100} src={edit.imagePriview} />
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
                            value={edit.product_name}
                            // placeholder={Detail.product_name} 
                            onChange={insertData}
                            name="product_name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Price :</Label>
                            <Input 
                            type="number" 
                            placeholder="Input Price" 
                            value={edit.price}
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
                            <option value={edit.category}>{Detailproduct.category}</option>
                            <option value='1'>Coffee</option>
                            <option value='2'>Non-Coffee</option>
                            <option value='3'>Foods</option>
                            <option value='4'>Add-on</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label >Keterangan :</Label>
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
                        <div className="dte" onClick={() => {deleteProduct(id)}}>Delete</div>
                        </Form>
                </div>
            </Col>
            <Footer />
        </Row>
        </Container>
    )
}

export default Edit