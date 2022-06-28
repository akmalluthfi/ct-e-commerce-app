import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import OrderItem from '../components/OrderItem';
import OrderEmpty from './OrderEmpty';

export default function Order() {
  const [orders, setOrder] = useState(null);

  useEffect(() => {
    const fetch = () => {
      // const url =
    };
  }, []);

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
