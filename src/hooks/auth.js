import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const API_URL = 'http://localhost:4000/api';

export default function Auth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  function register(email, password, name, surename) {
    axios
      .post(`${API_URL}/auth/register`, { email, password, name, surename })
      .then((res) => {
        console.log(res);
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log('There is an error with the register process:', err);
      });
  }

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

  function logout() {
    setUser(null);
    history.push('/logout');
  }

  function getProfile() {
    axios
      .get(`${API_URL}/auth/profile`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((error) => {
        console.log('Error retrieving profile:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getProfile();
  }, []);

  return {
    user,
    login,
    logout,
    register,
    loading
  };
}
