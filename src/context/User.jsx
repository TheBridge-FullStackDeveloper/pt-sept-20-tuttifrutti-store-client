import React, { useEffect, useState } from 'react';
import {
  getShortProfile,
  postLogin,
  getLogout,
  postRegister
} from '../services/auth';

// User Context
export const UserContext = React.createContext(null);

// User custom hook
export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShortProfile()
      .then((id) => {
        if (id) {
          setUser({ id });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function login(email, password) {
    postLogin(email, password).then((userData) => {
      setUser({ ...(user || {}), ...userData });
    });
  }

  async function register(body) {
    const userData = await postRegister(body);
    setUser(userData);
  }

  async function logout() {
    getLogout().then(() => setUser(null));
  }

  return { user, loading, login, register, logout };
}
