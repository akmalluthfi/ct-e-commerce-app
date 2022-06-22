import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Container>
      <Row className='align-items-center justify-content-center justify-content-lg-between vh-100'>
        <Col md={6} className='d-none d-md-inline'>
          <img src='/assets/login.svg' alt='login' className='w-100' />
        </Col>
        <Col sm={10} md={6} lg={5}>
          <h1 className='mb-5 fw-bold'>Login</h1>
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
              Login
            </Button>
          </Form>
          <p className='text-center'>
            Don't have an account?
            <Link className='text-decoration-none' to='/register'>
              Register
            </Link>
          </p>
          <p className='text-center'>
            <Link className='text-decoration-none' to='/forgot-password'>
              Forgot your password?
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
