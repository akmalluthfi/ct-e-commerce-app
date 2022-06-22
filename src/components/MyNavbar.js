import { Navbar, Container, Nav } from 'react-bootstrap';
import {
  Search,
  House,
  Cart,
  HouseFill,
  CartFill,
} from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

export default function MyNavbar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href='/'>
          <img
            alt=''
            src='/assets/logo.png'
            height='32'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Nav>
          <NavLink to='/' className='text-decoration-none p-2 nav-item'>
            {({ isActive }) =>
              isActive ? <HouseFill size={24} /> : <House size={24} />
            }
          </NavLink>
          <NavLink to='/search' className='text-decoration-none p-2 nav-item'>
            <Search size={24} />
          </NavLink>
          <NavLink to='/cart' className='text-decoration-none p-2 nav-item'>
            {({ isActive }) =>
              isActive ? <CartFill size={24} /> : <Cart size={24} />
            }
          </NavLink>
          <NavLink to='/user/profile' className='text-decoration-none p-2'>
            <img
              src='https://source.unsplash.com/random/24x24/?profile'
              alt='profile'
              className='rounded-circle'
            />
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
