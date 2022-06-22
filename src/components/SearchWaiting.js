import Col from 'react-bootstrap/Col';

export default function SearchWaiting() {
  return (
    <Col className='text-center py-5'>
      <img
        src='/assets/waiting-search.svg'
        alt='waiting to search'
        className='w-100 mb-3'
        style={{ maxWidth: 320 }}
      />
      <h3>Waiting to search!</h3>
    </Col>
  );
}
