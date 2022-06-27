import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
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
import { getDecodedAccTk } from './models/storage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AuthContext = React.createContext({ auth: false });

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<App />}>
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
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

function AuthProvider({ children }) {
  const accTk = getDecodedAccTk();
  let props = accTk ? { ...accTk, auth: true } : { auth: false };
  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>;
}

function RequireAuth({ children }) {
  const state = React.useContext(AuthContext);
  const location = useLocation();
  // jika belum login
  if (!state.auth)
    return <Navigate to='/login' state={{ from: location }} replace />;
  return children;
}

function MustGuest({ children }) {
  const state = React.useContext(AuthContext);
  if (state.auth) return window.history.back();
  return children;
}
