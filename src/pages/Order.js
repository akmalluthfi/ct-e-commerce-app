import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import OrderItem from '../components/OrderItem';
import OrderEmpty from './OrderEmpty';
import { getAccTk, getApiKey, getBaseUrl } from '../models/storage';
import axios from 'axios';

export default function Order() {
  const [orders, setOrder] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `${getBaseUrl()}/orders`;
        const headers = {
          'x-api-key': getApiKey(),
          'access-token': getAccTk(),
        };

        const response = await axios.get(url, { headers });
        if (!response.data.success) throw new Error(response.data.message);
        setOrder(response.data.orders);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <Container className='my-3'>
      {orders === null || orders.length === 0 ? (
        <OrderEmpty />
      ) : (
        orders.map((order) => <OrderItem key={order.id} order={order} />)
      )}
    </Container>
  );
}
