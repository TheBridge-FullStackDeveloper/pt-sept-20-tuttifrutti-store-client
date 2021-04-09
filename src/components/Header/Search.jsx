import "./Search.scss";
import IconLink from "./IconLink";

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
    <div className="searchbox ">
      <input
        className="searchbox__input"
        value={product}
        onChange={handleChange}
        placeholder="Search a product"
        type="text"
      ></input>
      <IconLink text="Search" type="search" onClick={handleClickSearch} />
    </div>
  );
}