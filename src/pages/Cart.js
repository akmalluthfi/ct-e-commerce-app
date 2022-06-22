import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import EmptyCart from './EmptyCart';

export default function Cart() {
  const carts = ['Sepeda motor ajaib', 'Motor-Motoran', 'Gule paling enak'];

  return (
    <Container>
      <h1 className='my-3'>My Cart</h1>
      <Row className='align-items-start' style={{ marginBottom: '7.5rem' }}>
        <Col xs={12} md={8}>
          {carts.map((item, i) => (
            <CartItem name={item} key={i} />
          ))}
        </Col>
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
      </Row>
    </Container>
  );
}
