import { Card, Col, Row, Form } from 'react-bootstrap';
import { Trash, DashSquare, PlusSquare } from 'react-bootstrap-icons';

export default function CartItem(props) {
  return (
    <Card className='mb-3'>
      <Card.Body>
        <Card.Title className='fw-bold'>Toko Kelontong</Card.Title>
        <Card.Subtitle className='mb-2 text-muted border-bottom'>
          Foods Court
        </Card.Subtitle>
        <Row className='mb-3'>
          <Col xs='auto m-auto'>
            <Form.Check type='checkbox' />
          </Col>
          <Col xs='auto p-0'>
            <Card.Img src='https://source.unsplash.com/random' />
          </Col>
          <Col>
            <h6>{props.name}</h6>
            <p className='fw-bold'>Rp15.000</p>
          </Col>
        </Row>
        <Row className='align-items-center justify-content-end'>
          <Col xs='auto'>
            <PlusSquare size={24} />
          </Col>
          <Col xs='auto' className='p-0'>
            <input type='number' defaultValue={1} className='cart-counter' />
          </Col>
          <Col xs='auto'>
            <DashSquare size={24} />
          </Col>
          <Col xs='auto text-danger'>
            <Trash size={24} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
