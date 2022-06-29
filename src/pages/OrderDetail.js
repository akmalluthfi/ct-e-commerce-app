import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import OrderProductItem from '../components/OrderProductItem';
import { getAccTk, getApiKey, getBaseUrl } from '../models/storage';

export default function OrderDetail() {
  const params = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `${getBaseUrl()}/orders/${params.id}`;
        const headers = {
          'Content-Type': 'application/json',
          'x-api-key': getApiKey(),
          'access-token': getAccTk(),
        };

        const response = await axios.get(url, { headers });

        if (!response.data.success) throw new Error(response.data.message);
        setOrder(response.data.order);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  if (!order) return '';

  let subTotalProduct = 0;
  order.products.forEach((product) => {
    subTotalProduct += product.subTotal;
  });

  return (
    <Container>
      <Row className='my-3 align-items-center'>
        <Col xs='auto'>
          <Link to={'/user/order'} className='link-dark'>
            <ArrowLeft size={40} />
          </Link>
        </Col>
        <Col>
          <h1 className='text-center m-0'>Order Details</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card className='mb-3'>
            <Card.Body>
              <Card.Title>
                <h3>General Information</h3>
              </Card.Title>
              <Card.Text as='div'>
                <h5>{order.customer.name}</h5>
                <h5>{order.customer.email}</h5>
                <h5>Address bla bla bla</h5>
                <h5>+62 086 3434 3434</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={8}>
          <Card className='mb-3'>
            <Card.Header>
              <h3 className='m-0'>{order.merchant.name}</h3>
            </Card.Header>
            <Card.Body>
              {order.products.map((orderProduct, i) => (
                <OrderProductItem ordered={orderProduct} key={i} />
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className='mb-3'>
            <Card.Body>
              <Row>
                <Col>
                  <h5 className='m-0'>Sub Total</h5>
                </Col>
                <Col xs='auto'>
                  <h5 className='m-0'>Rp{subTotalProduct}</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 className='m-0'>PPN</h5>
                </Col>
                <Col xs='auto'>
                  <h5 className='m-0'>Rp220</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4 className='m-0 fw-bold text-muted'>Total</h4>
                </Col>
                <Col xs='auto'>
                  <h4 className='m-0 fw-bold'>Rp{order.total}</h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
