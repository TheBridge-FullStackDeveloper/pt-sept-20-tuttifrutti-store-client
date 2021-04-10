// import { Link } from "react-router-dom";
import frutti from "../../assets/tuttifrutti-2-min.jpg";
import Picture from "../Pictures";
import IconLink from "./IconLink"
import "./Header.scss";

export default function Header() {


  
  return (
    <div className="header">
      <div>
        <Picture picture={frutti} name={frutti} />
      </div>
      <div>
           {/* search component */}
      </div>
      <div>

      {/* // TODO Fix text props to correspond the icon */}
      
        <IconLink type="cart" text="cart" path="/cart"/>
        <IconLink type="fav" text="cart" path="/fav"/>
        <IconLink type="profile" text="cart" path="/profile"/>
        
      </div>
    </div>
  );
}
