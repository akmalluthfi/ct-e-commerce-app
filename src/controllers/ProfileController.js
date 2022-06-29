import axios from 'axios';
import { getAccTk, getApiKey, getBaseUrl } from '../models/storage';

export async function updateProfile(first_name, surname, email) {
  try {
    const url = `${getBaseUrl()}/customers/profile`;

    const config = {
      headers: {
        'x-api-key': getApiKey(),
        'access-token': getAccTk() ?? '',
      },
    };

    const { data } = await axios.put(
      url,
      { first_name, surname, email },
      config
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}

export function updateProfilePicture() {}
