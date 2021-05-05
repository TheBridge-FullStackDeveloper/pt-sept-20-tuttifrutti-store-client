import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api';

export const getProductById = async (productId) => {
  return await axios.get(`${BASE_URL}/products/${productId}`);
};
