import Col from 'react-bootstrap/Col';

export default function EmptyCart() {
  return (
    <Col className='text-center py-5 my-5'>
      <img
        src='/assets/empty-cart.svg'
        alt='empty cart'
        className='w-100 mb-3'
      />
      <h3 className='fw-bold'>Your cart is empty</h3>
    </Col>
  );
}
