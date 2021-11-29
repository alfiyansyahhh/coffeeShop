/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'
import {Row, Col, Card} from 'reactstrap';
import transaction from '../redux/actions/transactions'
import '../css/History.css'
import {useHistory} from 'react-router-dom'
import  {numberWithCommas }from "../numberwithcomas";


const History = () => {
    useEffect(() => {
        dispatch(transaction.ACTION_GET_TRANSACTION())
    }, [])
    const Historyc = useSelector((state) => state.transactions.transaction)
    const dispatch = useDispatch()

    const history = useHistory();

    const DetailHistory = (id) => {
        history.push(`/detailHistory/${id}`)
    } 
    
    return(
        <div>
             <Navbar islogin={true} />    
             <div className="bgh">               
                <Col lg="6" className="title-h">
                    Let’s see what you have bought!   
                </Col>
                <Col lg="9" className="cardHistory">
                    <Row>
                    {Historyc.map((e)=>{
                        return(
                            <Col lg="3" md="3" xs="6" >
                                <Card body className="Card-h" onClick={() => DetailHistory(e.id)}>
                                    <div className="cardhb">
                                        <div className="Card-h-i w-25" >{e.id}</div>
                                        <div>
                                            <div className="Card-h-t" >Total: IDR {numberWithCommas(e.total)}</div>
                                            <div className="Card-h-p">Delivered To {e.penerima}</div> 
                                        </div>   
                                    </div>                            
                                </Card>
                            </Col>                              
                        )
                    })}
                    </Row>
                </Col>
             </div>            
             <Footer />
        </div>
    )
}

export default History
