//import { useContext } from 'react'
//import { UserContext } from '../../'
import { Redirect } from 'react-router-dom';

import Login from '../components/LoginForm/Login';

const user = 'Pepe';

export default function LoginPage() {
  //const { user } = useContext(UserContext)

  if (user) {
    return <Redirect to="/profile" />;
  } else {
    return <Login user={user} />;
  }
}
