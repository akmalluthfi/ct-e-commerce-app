import axios from 'axios';
import { getAccTk } from '../models/storage';

export async function updateProfile(first_name, surname, email) {
  try {
    const url =
      'http://localhost:8080/MagangCrosstechno/e-commerce/api/customers/profile';

    const config = {
      headers: {
        'x-api-key':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJjdCJ9.kwlZao8nDQ3By0BdR5ayhgxg8CPxnxvrCoNO8XIgPao',
        'access-token': getAccTk() ?? '',
      },
    };

    const { data } = await axios.put(
      url,
      { first_name, surname, email },
      config
    );

    if (!data.success) return { success: data.success, message: data.message };
  } catch (error) {
    console.log(error);
  }
}

export function updateProfilePicture() {}
