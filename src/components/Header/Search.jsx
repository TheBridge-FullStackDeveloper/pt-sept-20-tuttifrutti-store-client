import "./Search.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Search() {
  const [product, setProduct] = useState("");

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  const handleClickSearch = () => {
    const APIURL = `http://category/${product}`;
    console.log(APIURL);
    setProduct("");
  };

  return (
    <div className="searchbox">
      <input
        className="searchbox__input"
        value={product}
        onChange={handleChange}
        placeholder="Search a product"
        type="text"
      ></input>
      <FontAwesomeIcon icon={faSearch} onClick={handleClickSearch} className='searchbox__icon searchbox__icon--hover'/>
    </div>
  );
}