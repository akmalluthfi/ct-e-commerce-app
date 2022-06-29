import axios from 'axios';
import Swal from 'sweetalert2';
import { getApiKey, getBaseUrl, setAccTk } from '../models/storage';

export default async function LoginController(email, password) {
  try {
    const url = `${getBaseUrl}/customers/login`;

    const config = {
      headers: {
        'x-api-key': getApiKey(),
      },
    };

    const response = await axios.post(url, { email, password }, config);
    if (!response.data.success) throw new Error(response.data.message);
    // jika success
    // simpan access token di localStorange
    const isSet = setAccTk(response.data.access_token);
    // ada kemungkinan user sudah login, karena dilocalstorange masih ada
    if (!isSet) throw new Error('Something wrong!, Please try again later');
    // lalu redirect ke halaman home
    Swal.fire({
      icon: 'success',
      title: 'Login Successfuly',
    }).then((result) => {
      // redirect ke home
      window.location.replace('/');
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error,
    });
  }
}
