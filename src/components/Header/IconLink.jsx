import "./iconLink.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const icons = {
  fav: faHeart,
  cart: faCartArrowDown,
  search: faSearch,
  profile: faUserCircle,
};

// From Header component we should import this one and pass props: text, icon type and the onclick. Example as follows
export default function IconLink({ text = "Profile", type = "profile", onClick }) {
  return (
    <>
      <div className="iconlink iconlink--hover">
        <FontAwesomeIcon
          icon={icons[type]}
          className="iconlink__icon iconlink--hover"
          onClick={() => { console.log(`I will redirect to ${text} page`)}}
        />
      </div>
      <label class="iconlink__text">{text.toUpperCase()}</label>
    </>
  );
}
