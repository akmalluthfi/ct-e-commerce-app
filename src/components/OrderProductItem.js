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
      {/* <Col>
      </Col> */}
      <Col>
        <Row className='justify-content-center h-100 flex-column'>
          <Col xs='auto'>
            <h5 className='fw-semibold text-start m-0'>Xiaomi redmi 4x 3/32</h5>
            <h6 className='fw-semibold text-muted'>Rp.23.110</h6>
          </Col>
        </Row>
      </Col>
      <Col xs='auto'>
        <Row className='justify-content-center text-end flex-column h-100'>
          <Col xs='auto'>
            <h5 className='fw-semibold'>Rp12.320</h5>
            <h6 className='text-muted'>Qty: 1</h6>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
