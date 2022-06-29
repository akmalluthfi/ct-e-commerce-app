import { Col, Card } from 'react-bootstrap';

export default function Category(props) {
  return (
    <Col className='mb-3'>
      <Card className='shadow-sm card-category' role='button'>
        <Card.Body>
          <h3 className='m-0 text-center'>{props.name}</h3>
        </Card.Body>
      </Card>
    </Col>
  );
}
