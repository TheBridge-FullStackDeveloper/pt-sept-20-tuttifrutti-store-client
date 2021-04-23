import { Link } from 'react-router-dom';

import LoginForm from '../components/LoginForm/LoginForm';

import '../styles/profile.scss';

export default function Profile() {
  return (
    <div className="profilePage">
      <div className="profile">
        <div>
          <LoginForm />
        </div>
        <div className="profile__registerLink">
          <h5>
            Not yet a user of Tutti.Frutti?<Link to="/register"> Register</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}
