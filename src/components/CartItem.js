import { Card, Col, Row, Form } from 'react-bootstrap';
import { Trash, DashSquare, PlusSquare } from 'react-bootstrap-icons';

export default function CartItem({ cart, quantity }) {
  console.log(cart.merchant);
  return (
    <Card className='mb-3'>
      <Card.Body>
        <Card.Title className='fw-bold'>{cart.merchant.name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted border-bottom'>
          {cart.merchant.category}
        </Card.Subtitle>
        <Row className='mb-3'>
          <Col xs='auto m-auto'>
            <Form.Check type='checkbox' />
          </Col>
          <Col xs='auto p-0'>
            <Card.Img src={cart.product_url} alt={cart.product_name} />
          </Col>
          <Col>
            <h6>{cart.product_name}</h6>
            <p className='fw-bold'>Rp{cart.product_price}</p>
          </Col>
        </Row>
        <Row className='align-items-center justify-content-end'>
          <Col xs='auto'>
            <PlusSquare size={24} role='button' />
          </Col>
          <Col xs='auto' className='p-0'>
            <input
              type='number'
              defaultValue={`${cart.quantity}`}
              className='cart-counter'
            />
          </Col>
          <Col xs='auto'>
            <DashSquare size={24} role='button' />
          </Col>
          <Col xs='auto text-danger'>
            <Trash size={24} role='button' />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
