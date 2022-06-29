import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

// Pages
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Search from './pages/Search';
import User from './pages/User';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Order from './pages/Order';
import OrderDetail from './pages/OrderDetail';
import Checkout from './pages/Checkout';

// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { getAccTk } from './models/storage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={
          <RequireAuth>
            <App />
          </RequireAuth>
        }
      >
        <Route
          path='/'
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path='/search'
          element={
            <RequireAuth>
              <Search />
            </RequireAuth>
          }
        />
        <Route
          path='/user'
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        >
          <Route
            path=''
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path='profile'
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path='order'
            element={
              <RequireAuth>
                <Order />
              </RequireAuth>
            }
          />
        </Route>
        <Route
          path='/cart'
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path='/user/order/:id'
          element={
            <RequireAuth>
              <OrderDetail />
            </RequireAuth>
          }
        />
        <Route
          path='/checkout'
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
      </Route>
      <Route
        path='/login'
        element={
          <MustGuest>
            <Login />
          </MustGuest>
        }
      />
      <Route
        path='/register'
        element={
          <MustGuest>
            <Register />
          </MustGuest>
        }
      />
      <Route
        path='/forgot-password'
        element={
          <MustGuest>
            <ForgotPassword />
          </MustGuest>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  // {/* </React.StrictMode> */}
);

function RequireAuth({ children }) {
  const auth = getAccTk();
  const location = useLocation();
  // jika belum login
  if (!auth) return <Navigate to='/login' state={{ from: location }} replace />;
  return children;
}

function MustGuest({ children }) {
  const auth = getAccTk();
  if (auth) return window.history.back();
  return children;
}
