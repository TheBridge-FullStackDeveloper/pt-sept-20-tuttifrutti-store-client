import { Link } from 'react-router-dom';

import './Header.scss';

import frutti from '../../assets/logo-final.png';
import Picture from '../Pictures';
import IconLink from './IconLink';
import Search from './Search';

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <Picture picture={frutti} name={frutti} />
        </Link>
      </div>

      <div>
        <Search />
      </div>

      <div className="header__icons">
        <IconLink type="cart" text="Add to Cart" path="/cart" />
        <IconLink type="fav" text="Favourites" path="/favorites" />
        <IconLink type="profile" text="Login" path="/profile" />
      </div>
    </header>
  );
}
