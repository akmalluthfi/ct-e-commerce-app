import { Container, Form, Button } from 'react-bootstrap';

export default function Profile() {
  return (
    <Container className='my-3'>
      <Form.Group controlId='picture' className='mb-3 text-center'>
        <Form.Label>
          <img
            src='https://source.unsplash.com/random/?person'
            alt=''
            className='object-fit-cover object-position-center rounded-circle mb-3'
            style={{ width: 150, height: 150, cursor: 'pointer' }}
          />
          <h6 style={{ cursor: 'pointer' }}>Change</h6>
        </Form.Label>
        <Form.Control type='file' size='sm' className='d-none' name='picture' />
      </Form.Group>
      <Form>
        <Form.Group className='mb-3' controlId='first_name'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='First Name'
            name='first_name'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='last_name'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type='text' placeholder='Last Name' name='last_name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='text' placeholder='Email Address' name='email' />
        </Form.Group>
        <Form.Group className='mb-3 text-end'>
          <Button type='submit' className='btn-gunmetal '>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
