import { useRef } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import {
  BoxArrowRight,
  CardChecklist,
  CaretRightFill,
  Person,
} from 'react-bootstrap-icons';
import { Outlet } from 'react-router-dom';
import ProfileMenuItem from '../components/ProfileMenuItem';
import { NavLink } from 'react-router-dom';

export default function User() {
  const btnToggle = useRef(null);

  return (
    <Container>
      <Row className=''>
        <Col xs={12} md={4}>
          <Navbar
            collapseOnSelect={true}
            expand='md'
            onToggle={(toggle) =>
              (btnToggle.current.style.transform = toggle
                ? 'rotate(90deg)'
                : 'rotate(0deg)')
            }
          >
            <Container className='flex-md-column align-items-center align-items-md-start'>
              <Navbar.Brand className='px-3'>Menu</Navbar.Brand>
              <Navbar.Toggle
                aria-controls='profile-nav'
                as='div'
                className='border-0 col text-end p-0'
              >
                <CaretRightFill
                  ref={btnToggle}
                  style={{ transition: 'transform 150ms ease' }}
                  size={26}
                />
              </Navbar.Toggle>
              <Navbar.Collapse className='w-100' id='profile-nav'>
                <Nav className='flex-column w-100' defaultActiveKey='profile'>
                  <NavLink to='profile' className='nav-link'>
                    <ProfileMenuItem
                      name='Profile'
                      icon={
                        <Person size={20} className='align-text-bottom me-2' />
                      }
                    />
                  </NavLink>
                  <NavLink to='order' className='nav-link'>
                    <ProfileMenuItem
                      name='My Orders'
                      icon={
                        <CardChecklist
                          size={20}
                          className='align-text-bottom me-2'
                        />
                      }
                    />
                  </NavLink>
                  <Nav.Link>
                    <ProfileMenuItem
                      name='Logout'
                      icon={
                        <BoxArrowRight
                          size={20}
                          className='align-text-bottom me-2'
                        />
                      }
                      className='text-danger'
                    />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col md={8} className='border'>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
