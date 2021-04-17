import { Link } from 'react-router-dom';

import './iconLink.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const icons = {
  fav: faHeart,
  cart: faCartArrowDown,
  search: faSearch,
  profile: faUserCircle
};

export default function IconLink({ text = '', type = '', path = '' }) {
  return (
    <div className="iconBox">
      <div className="iconlink iconlink--hover" data-title={text}>
        <Link to={path}>
          <FontAwesomeIcon
            icon={icons[type]}
            className="iconlink__icon iconlink--hover"
          />
        </Link>
      </div>
    </div>
  );
}
