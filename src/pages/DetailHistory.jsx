/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import {  useEffect } from 'react';
import {
  Row, Col
} from 'reactstrap';
import transaction from '../redux/actions/transactions';
import '../css/DetailHistory.css';
import { useParams, useHistory } from 'react-router-dom';
import  {numberWithCommas }from "../numberwithcomas";

const DetailHistory = function () {
  const params = useParams();
  const dispatch = useDispatch();
  const { id } = params;
  
  useEffect(() => {
    dispatch(transaction.ACTION_GET_DETAIL_TRANSACTION(id));
  }, []);

  const HistoryD = useSelector((state) => state.transactions.Detail);
  const history = useHistory();
  const back = () => {
    history.push('/history');
  };

  return (
    <div>
      <Navbar islogin />
      <div className="bgh">
        <Col lg="6" className="title-h">
          Let’s see what you have bought!
        </Col>
        <Col lg="9" className="cardHistory">

          <Row>
            <div className="back2">
              <p onClick={back}>BACK</p>
            </div>
            {HistoryD.map((e) => (
              <Col lg="3" md="3" xs="6">
                <div body className="Card-h">
                  <div className="detailCh">
                    <div className="Card-his-g mt-2"><img src={`${process.env.REACT_APP_API_URL}/${e.picture}`} alt="" /></div>
                    <div className="ms-3  w-100">
                      <div className="Card-his-n">{e.product_name}</div>
                      <div className="Card-his-p">
                        Rp.
                        {numberWithCommas(e.price)}
                        {' '}
                        <b className="Card-his-q ms-3">
                          x
                          {e.qty}
                        </b>
                      </div>
                    </div>

                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </div>
      <Footer />
    </div>
  );
};

export default DetailHistory;
