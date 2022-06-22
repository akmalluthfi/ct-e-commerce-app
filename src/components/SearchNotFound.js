import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function SearchNotFound() {
  return (
    <Col style={{ height: 'calc(100vh - 136px)' }}>
      <Row className='align-items-center h-100'>
        <Col className='text-center'>
          <img
            src='/assets/search-not-found.svg'
            alt='search not found'
            className='mb-3'
            style={{ maxWidth: 320 }}
          />
          <h3>Search Not Found</h3>
        </Col>
      </Row>
    </Col>
  );
}
