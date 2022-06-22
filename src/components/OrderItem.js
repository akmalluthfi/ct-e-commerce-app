import { ChevronRight, Bag } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Row, Card, Col, Badge } from 'react-bootstrap';

export default function OrderItem(props) {
  return (
    <Card className='mb-3'>
      <Card.Body>
        <Card.Title className='border-bottom mb-3'>
          <Row className='align-items-center pb-2'>
            <Col xs='auto'>
              <Bag size={26} />
            </Col>
            <Col>
              <h5 className='m-0 fw-bold'>Kelontong Shop</h5>
              <p className='text-muted m-0' style={{ fontSize: 14 }}>
                22 Mei 2022
              </p>
            </Col>
            <Col xs='auto'>
              <Badge bg='success'>Success</Badge>
            </Col>
          </Row>
        </Card.Title>
        <Link to={'v'} className='link-dark text-decoration-none'>
          <Row className='align-items-center'>
            <Col>
              <Card.Subtitle className='text-muted'>Total</Card.Subtitle>
              <Card.Text className='fw-bold'>Rp14.000</Card.Text>
            </Col>
            <Col xs='auto'>
              <ChevronRight size={20} />
            </Col>
          </Row>
        </Link>
      </Card.Body>
    </Card>
  );
}
