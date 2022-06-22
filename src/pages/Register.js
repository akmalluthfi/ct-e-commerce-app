import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <Container>
      <Row className='align-items-center justify-content-center justify-content-lg-between vh-100'>
        <Col md={6} className='d-none d-md-inline'>
          <img src='/assets/register.svg' alt='register' className='w-100' />
        </Col>
        <Col sm={10} md={6} lg={5}>
          <h1 className='mb-5 fw-bold'>Register</h1>
          <Form>
            <FloatingLabel
              controlId='email'
              label='Enter your email address'
              className='mb-3'
            >
              <Form.Control
                type='email'
                placeholder='name@example.com'
                name='email'
              />
            </FloatingLabel>
            <FloatingLabel
              controlId='password'
              label='Enter your password'
              className='mb-3'
            >
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
              />
            </FloatingLabel>
            <Button type='submit' className='w-100 btn-gunmetal mb-3'>
              Register
            </Button>
          </Form>
          <p className='text-center'>
            Already have an account?
            <Link className='text-decoration-none' to='/login'>
              Login
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
