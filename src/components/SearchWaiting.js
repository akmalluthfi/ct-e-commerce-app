import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function SearchWaiting() {
  return (
    <Col style={{ height: 'calc(100vh - 136px)' }}>
      <Row className='align-items-center h-100'>
        <Col className='text-center'>
          <img
            src='/assets/waiting-search.svg'
            alt='waiting to search'
            className='w-100 mb-3'
            style={{ maxWidth: 320 }}
          />
          <h3>Waiting to search!</h3>
        </Col>
      </Row>
    </Col>
  );
}
