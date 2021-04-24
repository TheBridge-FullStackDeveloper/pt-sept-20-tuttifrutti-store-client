import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api';

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
