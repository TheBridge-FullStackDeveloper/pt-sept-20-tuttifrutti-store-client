import { useContext } from 'react';

import Button from '../components/Button';
import { UserContext } from '../context/User';

import '../styles/profile.scss';

export default function Profile() {
  const { logout } = useContext(UserContext);

  return (
    <div className="profilePage">
      <div className="profile">
        <Button text="Logout" onClick={logout} className="button__logout" />
      </div>
    </div>
  );
}
