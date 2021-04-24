import axios from 'axios';
import { BASE_URL } from '../constants';

export async function getShortProfile() {
  const res = await axios.get(`${BASE_URL}/auth/short-profile`, {
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

export async function putRegister(body) {
  const res = await axios.put(`${BASE_URL}/users/modify`, body, {
    withCredentials: true
  });

  return res.data.data;
}
