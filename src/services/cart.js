import axios from 'axios';
import { BASE_URL } from '../constants';

export const getCart = async () => {
  try {
    const reponseCart = await axios.get(`${BASE_URL}/cart`, {
      withCredentials: true
    });
    return reponseCart.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeFromCart = async (productId) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/cart/remove/${productId}`,
      {},
      { withCredentials: true }
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
