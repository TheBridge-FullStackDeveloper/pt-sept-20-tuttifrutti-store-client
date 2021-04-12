import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export default function Auth() {
  const [user, setUser] = useState(null);

  function login(email, password) {
    axios
      .post(`${API_URL}/auth/login`, { email, password })
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log('There is a login error:', err);
      });
  }

  return {
    user,
    login
  };
}
