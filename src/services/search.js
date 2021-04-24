import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api';

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
