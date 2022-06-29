import axios from 'axios';
import Swal from 'sweetalert2';
import { getApiKey, getBaseUrl } from '../models/storage';

export default async function RegisterController(email, password) {
  try {
    const url = `${getBaseUrl()}/customers/register`;
    const data = { email, password };
    const config = {
      headers: {
        'x-api-key': getApiKey(),
      },
    };

    const response = await axios.post(url, data, config);
    if (response.status !== 200) throw new Error(response.statusText);
    if (!response.data.success) throw new Error(response.data.message);

    // jika berhasil,
    // tampilkan alert
    Swal.fire({
      icon: 'success',
      title: 'Register Successfuly, Verification link sent!',
      text: `We emailed a confirmation link to ${email} check your email for a link to sign in`,
      confirmButtonColor: '#233643',
      confirmButtonText: 'Ok',
    }).then((result) => {
      // redirect ke login
      window.location.replace('/login');
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: error,
      text: "if you don't feel registered please select forgot password",
    });
  }
}
