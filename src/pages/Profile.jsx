import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/User';

import LoginForm from '../components/LoginForm/LoginForm';
import Button from '../components/Button';

import '../styles/profile.scss';

export default function Profile() {
  const { user, userLogout } = useContext(UserContext);

  return (
    <div className="profilePage">
      {user.email ? (
        <div className="profile">
          <Button
            text="Logout"
            onClick={userLogout}
            className="button__logout"
          />
        </div>
      ) : (
        <div className="profile">
          <div>
            <LoginForm />
          </div>
          <div className="profile__registerLink">
            <h5>
              Not yet a user of Tutti.Frutti?
              <Link to="/register"> Register</Link>
            </h5>
          </div>
        </div>
      )}
    </div>
  );
}
