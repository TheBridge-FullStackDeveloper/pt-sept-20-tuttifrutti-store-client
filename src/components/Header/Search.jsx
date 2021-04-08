import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/SearchRounded";

import { useState } from "react";

export default function Search() {
  const [product, setProduct] = useState("");
  const [productList, setProductList] = useState([]);

  console.log(productList)

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  const handleClickSearch = () => {
    const APIURL = `http://something/${product}`;
    setProductList([...productList, { product }]);
    setProduct("");
  };

  return (
    <div>
      <input
        className="searchbox"
        value={product}
        onChange={handleChange}
        placeholder="Search for a product"
        type="text"
      ></input>
      <Fab
        color="primary"
        aria-label="add"
        size="small"
        onClick={handleClickSearch}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
