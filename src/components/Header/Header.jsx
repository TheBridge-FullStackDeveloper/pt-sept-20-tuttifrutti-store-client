// import { Link } from "react-router-dom";
import frutti from '../../assets/tuttifrutti-2-min.jpg';
import Picture from '../Pictures';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <div>
        <Picture picture={frutti} name={frutti} />
      </div>
      <div>{/* search component */}</div>
      <div>{/* Icon component */}</div>
    </div>
  );
}
