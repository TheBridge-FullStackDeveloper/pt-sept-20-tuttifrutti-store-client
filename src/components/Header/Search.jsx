import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Search.scss';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Search() {
  const history = useHistory();
  const [product, setProduct] = useState('');

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  const handleClick = async () => {
    // const result = await getSearch(product);
    history.push(`/search?name=${product}`);
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

      <FontAwesomeIcon
        icon={faSearch}
        size="2x"
        className="searchbox__icon searchbox__icon--hover"
        onClick={handleClick}
      />
    </div>
  );
}
