import MyNavbar from './components/MyNavbar';
import { Outlet } from 'react-router';

export default function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
