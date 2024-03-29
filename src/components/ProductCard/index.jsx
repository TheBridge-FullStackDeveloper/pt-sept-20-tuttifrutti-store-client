import { useState } from 'react';
import axios from 'axios';

import Button from '../Button';
import Picture from '../Pictures';
import { BASE_URL } from '../../constants';

import './styles.scss';

export default function ProductCard({
  productName,
  pictures,
  price,
  description,
  brand
}) {
  const [product, setProduct] = useState([]);

  function handleAddToCart() {
    axios
      .put(`${BASE_URL}/cart/add/${product.productId}?quantity=X`, product)
      .then((res) => {
        setProduct(res.product);

        console.log(res.product);
      });
  }
  return (
    <div className="homePage">
      <div className="productCard">
        <div>
          <Picture
            className="productCard__cardImg"
            picture={pictures[0]}
            name={productName}
          />
        </div>
        <div className="productCard__title">{productName}</div>

        <div className="productCard__cardBrand">{brand}</div>

        <div className="productCard__price">
          {price}
          <span>€</span>
        </div>

        {/* TODO: FALTA LOG CONVERSION MONEDA */}
        <div className="productCard__cardDescription">{description}</div>

        <div>
          <Button
            className="productCard__button"
            onClick={handleAddToCart}
            text="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
}
