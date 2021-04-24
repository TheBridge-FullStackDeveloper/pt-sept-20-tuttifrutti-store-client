import axios from 'axios';
import { BASE_URL } from '../constants';

export const getFavoritesPopulated = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/favorites/all`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteFavorite = async (productId) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/favorites/remove/${productId}`,
      {},
      { withCredentials: true }
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addFavorite = async (productId) => {
  try {
    const response = await axios.put(`${BASE_URL}/favorites/add/${productId}`, {
      withCredentials: true
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
