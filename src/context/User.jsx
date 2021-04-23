import React, { useEffect, useState } from 'react';
import { getShortProfile, postLogin, logout } from '../services/auth';

export const UserContext = React.createContext(null);

export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShortProfile()
      .then((id) => {
        setUser({ id });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function login(email, password) {
    postLogin(email, password).then((email) => {
      if (email) {
        setUser({ ...(user || {}), email });
      }
    });
  }

  async function userLogout() {
    logout().then(() => setUser(null));
  }

  return { user, loading, login, userLogout };
}
