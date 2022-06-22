import { Container, Row, Col } from 'react-bootstrap';

export default function OrderEmpty() {
  return (
    <Container style={{ height: 'calc(100vh - 58px - 56px - 32px)' }}>
      <Row className='align-content-center h-100'>
        <Col className='text-center'>
          <img
            src='/assets/no-order.svg'
            alt='No Order'
            className='w-100 mb-3'
            style={{ maxWidth: 320 }}
          />
          <h1>No Orders Yet</h1>
          <h5>Browser products and start order.</h5>
        </Col>
      </Row>
    </Container>
  );
}
