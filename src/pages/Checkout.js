import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import OrderProductItem from '../components/OrderProductItem';

export default function Checkout() {
  let orderProducts = ['Ayam diPanggang', 'Nasi diKebuli', 'Nasi diGoreng'];

  return (
    <Container>
      <h1>Summary Orders</h1>
      <h5 className='text-muted'>
        Check your item and select your shipping for better experience order
        item.
      </h5>
      <hr />
      <Row>
        <Col xs={12}>
          <Card className='mb-3'>
            <Card.Body>
              <Card.Title>
                <h3>General Information</h3>
              </Card.Title>
              <Card.Text>
                <h5>John Connor</h5>
                <h5>john@gmail.com</h5>
                <h5>Address bla bla bla</h5>
                <h5>+62 086 3434 3434</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={8}>
          <Card className='mb-3'>
            <Card.Header>
              <h3 className='m-0'>Kelontong Shop</h3>
            </Card.Header>
            <Card.Body>
              {orderProducts.map((orderProduct, i) => (
                <OrderProductItem />
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
                  <h5 className='m-0'>Rp15.000</h5>
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
                  <h4 className='m-0 fw-bold'>Rp15.000</h4>
                </Col>
              </Row>
              <Button className='btn-gunmetal w-100 mt-3'>Order</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
