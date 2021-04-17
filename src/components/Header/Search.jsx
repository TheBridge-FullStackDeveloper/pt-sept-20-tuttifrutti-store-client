import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Search.scss';

import { useState } from 'react';

export default function Search() {
  const [product, setProduct] = useState('');

  const handleChange = (event) => {
    setProduct(event.target.value);
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
        className="searchbox__icon searchbox__icon--hover"
      />
    </div>
  );
}
