import { Container } from 'react-bootstrap';
import OrderItem from '../components/OrderItem';
import OrderEmpty from './OrderEmpty';

export default function Order() {
  return (
    <Container className='my-3'>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      {/* <OrderEmpty /> */}
    </Container>
  );
}
