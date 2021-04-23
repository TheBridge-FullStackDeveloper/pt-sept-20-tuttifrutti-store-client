import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api';

export async function getShortProfile() {
  const res = await axios.get(`${BASE_URL}/auth/profile`, {
    withCredentials: true
  });

  return res.data.data;
}

export async function postLogin(email, password) {
  const res = await axios.post(
    `${BASE_URL}/auth/login`,
    {
      email,
      password
    },

    { withCredentials: true }
  );

  return res.data.data;
}

export async function postRegister(body) {
  const res = await axios.post(`${BASE_URL}/auth/register`, body, {
    withCredentials: true
  });

  return res.data.data;
}

export async function getLogout() {
  return axios.get(`${BASE_URL}/auth/logout`, {
    withCredentials: true
  });
}
