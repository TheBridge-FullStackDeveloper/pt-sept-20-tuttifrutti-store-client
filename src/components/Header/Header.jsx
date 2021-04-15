// import { Link } from "react-router-dom";
import frutti from "../../assets/logo-final.png";
import Picture from "../Pictures";
import IconLink from "./IconLink"
import Search from "./Search"
import "./Header.scss";

export default function Header() {


  
  return (
    <div className="header">
      <div>
        <Picture picture={frutti} name={frutti} />
      </div>
      <div>
      <Search/>
      </div>
      <div>

      {/* // TODO Fix text props to correspond the icon */}
      
        <IconLink type="cart" text="cart" path="/cart"/>
        <IconLink type="fav" text="fav" path="/fav"/>
        <IconLink type="profile" text="profile" path="/profile"/>
        
      </div>
    </div>
  );
}
