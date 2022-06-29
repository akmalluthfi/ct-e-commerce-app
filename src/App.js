import MyNavbar from './components/MyNavbar';
import { Outlet } from 'react-router';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getAccTk, getApiKey, getBaseUrl } from './models/storage';
import LoadingPage from './pages/LoadingPage';
import { useLocation, Navigate } from 'react-router-dom';

export const CustomerContext = createContext(null);

export default function App() {
  // buat context untuk menyimpan profile user
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `${getBaseUrl()}/customers/profile`;
        const config = {
          headers: {
            'x-api-key': getApiKey(),
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
