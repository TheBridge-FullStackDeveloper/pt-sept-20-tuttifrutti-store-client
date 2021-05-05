import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api';

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

export const createOrder = async () => {
  return await axios.post(`${BASE_URL}/orders`, {}, { withCredentials: true });
};

export const removeFromCart = async (productId, quantity = 1) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/cart/remove/${productId}?quantity=${quantity}`,
      {},
      { withCredentials: true }
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateCart = async (productId, quantity) => {
  return await axios.put(
    `${BASE_URL}/cart/update/${productId}?quantity=${quantity}`,
    {},
    { withCredentials: true }
  );
};
