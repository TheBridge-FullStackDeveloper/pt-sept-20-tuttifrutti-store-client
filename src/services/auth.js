import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api';

export async function getShortProfile() {
  try {
    const res = await axios.get(`${BASE_URL}/auth/profile`, {
      withCredentials: true
    });

    return res.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function postLogin(email, password) {
  try {
    const res = await axios.post(
      `${BASE_URL}/auth/login`,
      {
        email,
        password
      },

      { withCredentials: true }
    );

    return res.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function logout() {
  try {
    const res = await axios.get(`${BASE_URL}/auth/logout`);
    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
}
