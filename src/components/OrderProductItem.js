import { Col, Row } from 'react-bootstrap';

export default function OrderProductItem({ ordered }) {
  return (
    <Row className='align-items-center mb-3'>
      <Col xs='auto'>
        <img
          src={ordered.product_url}
          alt={ordered.name}
          style={{ width: 100, height: 100 }}
          className='rounded object-fit-cover object-position-center'
        />
      </Col>
      <Col>
        <Row className='justify-content-center h-100 flex-column'>
          <Col xs='auto'>
            <h5 className='fw-semibold text-start m-0'>{ordered.name}</h5>
            <h6 className='fw-semibold text-muted'>Rp{ordered.price}</h6>
          </Col>
        </Row>
      </Col>
      <Col xs='auto'>
        <Row className='justify-content-center text-end flex-column h-100'>
          <Col xs='auto'>
            <h5 className='fw-semibold'>Rp{ordered.subTotal}</h5>
            <h6 className='text-muted'>Qty: {ordered.quantity}</h6>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
