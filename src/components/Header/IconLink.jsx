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
  profile: faUserCircle,
};

// From Header component we should import this one and pass props: text, icon type and the onclick. Example as follows
export default function IconLink({ text = '', type = '', onClick }) {
 // TODO Change into a Link component after React Router is merged
  return (
    <div className="iconlink iconlink--hover" data-title={text}>
      <FontAwesomeIcon
        icon={icons[type]}
        className="iconlink__icon iconlink--hover"
        onClick={onClick}
      />
    </div>
  );
}
