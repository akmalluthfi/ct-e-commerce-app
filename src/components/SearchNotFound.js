import Col from 'react-bootstrap/Col';

export default function SearchNotFound() {
  return (
    <Col className='text-center py-5'>
      <img
        src='/assets/search-not-found.svg'
        alt='search not found'
        className='w-100 mb-3'
        style={{ maxWidth: 320 }}
      />
      <h3>Search Not Found</h3>
    </Col>
  );
}
