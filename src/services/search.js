import axios from 'axios';
import { BASE_URL } from '../constants';

export const getSearch = async (name) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/search?name=${name}`
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
