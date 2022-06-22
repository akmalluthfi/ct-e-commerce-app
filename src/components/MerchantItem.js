import { Card, Col } from 'react-bootstrap';

export default function MerchantItem(props) {
  return (
    <Col>
      <Card className='flex-row p-3'>
        <Col xs='auto'>
          <img
            src='https://source.unsplash.com/random/?shop'
            alt=''
            className='card-img'
          />
        </Col>
        <Col className='ps-3'>
          <h5 className='fw-bold'>Merchant Si A</h5>
          <h6>category</h6>
          <p className='text-success mb-auto'>Open</p>
        </Col>
      </Card>
    </Col>
  );
}
