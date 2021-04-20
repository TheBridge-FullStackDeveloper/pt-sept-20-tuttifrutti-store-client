import { useContext } from 'react';
import { UserContext } from '../context/User';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/LoginForm/LoginForm';

// const user = 'Pepe';

export default function LoginPage() {
  const { user } = useContext(UserContext);

  if (user) {
    return <Redirect to="/profile" />;
  } else {
    // TODO: Add more content to complete login view
    return <LoginForm user={user} />;
  }
}
