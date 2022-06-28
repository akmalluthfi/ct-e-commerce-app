import MyNavbar from './components/MyNavbar';
import { Outlet } from 'react-router';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getAccTk } from './models/storage';
import LoadingPage from './pages/LoadingPage';

export const CustomerContext = createContext(null);

export default function App() {
  // buat context untuk menyimpan profile user
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url =
          'http://localhost:8080/MagangCrosstechno/e-commerce/api/customers/profile';
        const config = {
          headers: {
            'x-api-key':
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJjdCJ9.kwlZao8nDQ3By0BdR5ayhgxg8CPxnxvrCoNO8XIgPao',
            'access-token': getAccTk() ?? '',
          },
        };
        const response = await axios.get(url, config);

        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  if (!data) return <LoadingPage />;

  return (
    <CustomerContext.Provider value={{ data, setData }}>
      <header>
        <MyNavbar />
      </header>
      <main>
        <Outlet />
      </main>
    </CustomerContext.Provider>
  );
}
