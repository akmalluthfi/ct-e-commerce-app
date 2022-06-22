import { Col, Row } from 'react-bootstrap';

export default function OrderProductItem() {
  return (
    <Row className='align-items-center mb-3'>
      <Col xs='auto'>
        <img
          src='https://source.unsplash.com/random?stuff'
          alt=''
          style={{ width: 100, height: 100 }}
          className='rounded'
        />
      </Col>
      <Col>
        <h5 className='fw-semibold'>Xiaomi redmi 4x 3/32</h5>
        <h6 className='invisible'>...</h6>
      </Col>
      <Col xs='auto' className='text-end'>
        <h5 className='fw-semibold'>Rp12.320</h5>
        <h6 className='text-muted'>Qty: 1</h6>
      </Col>
    </Row>
  );
}
