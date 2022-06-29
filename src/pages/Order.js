import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import OrderItem from '../components/OrderItem';
import OrderEmpty from './OrderEmpty';
import { getAccTk, getApiKey, getBaseUrl } from '../models/storage';

export default function Order() {
  const [orders, setOrder] = useState(null);

  useEffect(() => {
    const fetch = () => {
      const url = `${getBaseUrl()}/orders`;
      const headers = {
        'x-api-key': getApiKey(),
        'access-token': getAccTk(),
      };
    };

    fetch();
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
