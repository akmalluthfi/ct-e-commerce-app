import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import EmptyCart from './EmptyCart';
import { getBaseUrl, getApiKey, getAccTk } from '../models/storage';
import axios from 'axios';

export default function Cart() {
  const [carts, setCarts] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `${getBaseUrl()}/customers/carts`;
        const headers = {
          'Content-Type': 'application/json',
          'x-api-key': getApiKey(),
          'access-token': getAccTk(),
        };

        const response = await axios.get(url, { headers });

        if (!response.data.success) throw new Error(response.data.message);
        setCarts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  if (!carts) return;

  // total
  let total = 0;
  carts.forEach((cart) => {
    console.log(cart);
  });

  return (
    <Container>
      <h1 className='my-3'>My Cart</h1>
      <Row className='align-items-start' style={{ marginBottom: '7.5rem' }}>
        <Col xs={12} md={8}>
          {carts.length === 0 ? (
            <EmptyCart />
          ) : (
            carts.map((cart) => <CartItem key={cart.product_id} cart={cart} />)
          )}
        </Col>
        {carts.length === 0 ? (
          ''
        ) : (
          <Col
            xs={12}
            md={4}
            className='p-3 border-top bg-white position-fixed start-0 end-0 bottom-0 position-lg-static'
          >
            <Row className='justify-content-between mb-3'>
              <Col xs='auto'>
                <h5>Total</h5>
              </Col>
              <Col xs='auto'>
                <h5 className='fw-bold'>Rp15.000</h5>
              </Col>
            </Row>
            <Link to={'/checkout'}>
              <Button className='btn-gunmetal w-100'>Checkout</Button>
            </Link>
          </Col>
        )}
      </Row>
    </Container>
  );
}
