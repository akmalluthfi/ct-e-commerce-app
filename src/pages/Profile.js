import { useContext, useRef, useState } from 'react';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { CustomerContext } from '../App';
import { updateProfile } from '../controllers/ProfileController';
import ImageUploading from 'react-images-uploading';
import axios from 'axios';
import { getAccTk } from '../models/storage';

export default function Profile() {
  const customer = useContext(CustomerContext);
  // ref
  const firstName = useRef(null);
  const surName = useRef(null);
  const email = useRef(null);
  const [isLoading, setLoading] = useState(false);
  const [picture, setPicture] = useState(customer.picture_url);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const first_name = firstName.current.value;
    const surname = surName.current.value;
    const emailVal = email.current.value;

    let count = 0;
    if (customer.first_name === first_name) count++;
    if (customer.surname === surname) count++;
    if (customer.email === emailVal) count++;

    // ! validasi

    if (count === 3) {
      // swal data berhasil diubah
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated successfully',
      }).then(() => {
        setLoading(false);
      });
    } else {
      const { success, message } = await updateProfile(
        first_name,
        surname,
        emailVal
      );

      if (!success) {
        firstName.current.value = customer.first_name;
        surName.current.value = customer.surname;
        email.current.value = customer.email;
        Swal.fire({
          icon: 'warning',
          title: message,
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: message,
        });
      }

      setLoading(false);
    }
  };

  const onChange = async (imageList) => {
    console.log(imageList[0]);
    console.log('yay');

    const data = new FormData();
    data.append('picture', imageList[0].file);

    try {
      const url =
        'http://www.localhost:8080/MagangCrosstechno/e-commerce/api/customers/profile/picture';
      const config = {
        headers: {
          'x-api-key':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJjdCJ9.kwlZao8nDQ3By0BdR5ayhgxg8CPxnxvrCoNO8XIgPao',
          'access-token': getAccTk() ?? '',
        },
      };

      const response = await axios.post(url, data, config);

      if (!response.success) return new Error('Gambar gagal diupload');

      setPicture(imageList[0].data_url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className='my-3'>
      <ImageUploading onChange={onChange} dataURLKey='data_url'>
        {({ onImageUpload, dragProps }) => (
          <Form.Group controlId='picture' className='mb-3 text-center'>
            <Form.Label onClick={onImageUpload} {...dragProps}>
              <img
                src={picture}
                alt={`${customer.first_name} ${customer.surname} profile`}
                className='object-fit-cover object-position-center rounded-circle mb-3'
                style={{ width: 150, height: 150, cursor: 'pointer' }}
              />
              <h6 style={{ cursor: 'pointer' }}>Change</h6>
            </Form.Label>
          </Form.Group>
        )}
      </ImageUploading>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='first_name'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='First Name'
            name='first_name'
            defaultValue={customer.first_name}
            ref={firstName}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='last_name'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Last Name'
            name='last_name'
            defaultValue={customer.surname}
            ref={surName}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Email Address'
            name='email'
            defaultValue={customer.email}
            ref={email}
          />
        </Form.Group>
        <Form.Group className='mb-3 text-end'>
          <Button type='submit' className='btn-gunmetal'>
            {isLoading ? (
              <Spinner animation='border' size='sm' className='mx-3' />
            ) : (
              'Submit'
            )}
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

async function handleOnChange(event) {
  console.log('yay');
}
