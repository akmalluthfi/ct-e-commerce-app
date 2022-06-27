import { Navbar, Container, Nav } from 'react-bootstrap';
import {
  Search,
  House,
  Cart,
  HouseFill,
  CartFill,
} from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CustomerContext } from '../App';

export default function MyNavbar() {
  const customer = useContext(CustomerContext);

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
          <NavLink to='/' className='text-decoration-none p-2 link-dark'>
            {({ isActive }) =>
              isActive ? <HouseFill size={24} /> : <House size={24} />
            }
          </NavLink>
          <NavLink to='/search' className='text-decoration-none p-2 link-dark'>
            <Search size={24} />
          </NavLink>
          <NavLink to='/cart' className='text-decoration-none p-2 link-dark'>
            {({ isActive }) =>
              isActive ? <CartFill size={24} /> : <Cart size={24} />
            }
          </NavLink>
          <NavLink to='/user/profile' className='text-decoration-none p-2'>
            <img
              src={customer.picture_url}
              alt={`${customer.first_name} ${customer.last_name}'s profile`}
              className='rounded-circle'
              width={24}
              height={24}
            />
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
