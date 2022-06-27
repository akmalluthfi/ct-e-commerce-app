import { useState, useRef } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from 'react-bootstrap';
import validateEmail from '../helpers/validateEmail';
import validatePassword from '../helpers/validatePassword';
import { Link } from 'react-router-dom';
import LoginController from '../controllers/LoginController';

export default function Login() {
  const inputEmail = useRef('');
  const [emailValidate, setEmailValidate] = useState({
    isInvalid: false,
    msg: 'please provide an email',
  });
  const inputPassword = useRef('');
  const [passwordValidate, setPasswordValidate] = useState({
    isInvalid: false,
    msg: 'please input your password',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // validasi email
    const email = inputEmail.current.value;
    const emailValidated = validateEmail(email);
    if (emailValidated.isInvalid) return setEmailValidate(emailValidated);
    // validasi password
    const password = inputPassword.current.value;
    const passwordValidated = validatePassword(password);
    if (passwordValidated.isInvalid)
      return setPasswordValidate(passwordValidated);

    // call api login
    LoginController(email, password);
  };

  return (
    <Container>
      <Row className='align-items-center justify-content-center justify-content-lg-between vh-100'>
        <Col md={6} className='d-none d-md-inline'>
          <img src='/assets/login.svg' alt='login' className='w-100' />
        </Col>
        <Col sm={10} md={6} lg={5}>
          <h1 className='mb-5 fw-bold'>Login</h1>
          <Form noValidate onSubmit={handleSubmit}>
            <FloatingLabel
              controlId='email'
              label='Enter your email address'
              className='mb-3'
            >
              <Form.Control
                required
                type='email'
                placeholder='name@example.com'
                name='email'
                isInvalid={emailValidate.isInvalid}
                ref={inputEmail}
                onChange={() => setEmailValidate({ isInvalid: false, msg: '' })}
              />
              <Form.Control.Feedback type='invalid'>
                {emailValidate.msg}
              </Form.Control.Feedback>
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
                isInvalid={passwordValidate.isInvalid}
                ref={inputPassword}
                onChange={() =>
                  setPasswordValidate({ isInvalid: false, msg: '' })
                }
              />
              <Form.Control.Feedback type='invalid'>
                {passwordValidate.msg}
              </Form.Control.Feedback>
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
