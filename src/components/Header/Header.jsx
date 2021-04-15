// import { Link } from "react-router-dom";
import frutti from '../../assets/tuttifrutti-2-min.jpg';
import Picture from '../Pictures';
import IconLink from './IconLink';
import Search from './Search';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <div>
        <Picture picture={frutti} name={frutti} />
      </div>
      <div>{/* search component */}</div>
      <div>
        <Search />
      </div>
      <div>
        <IconLink type="cart" text="Add to Cart" path="/cart" />
        <IconLink type="fav" text="Favourites" path="/fav" />
        <IconLink type="profile" text="Login" path="/profile" />
      </div>
    </div>
  );
}
