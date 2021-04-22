import { useState } from 'react';
import Picture from '../Pictures';
import axios from 'axios';

import Button from '../Button';

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
      .put(
        `http://localhost:4000/api/cart/add/${product.productId}?quantity=X`,
        product
      )
      .then((res) => {
        setProduct(res.product);

        console.log(res.product);
      });
  }
  return (
    <div classname="homePage">
      <div className="productCard">
        <div>
          <Picture
            className="productCard__cardImg"
            picture={pictures[0]}
            name={productName}
          />
        </div>
        <div className="productCard__title">{productName}</div>

        <img
          className="productCard__cardImg"
          src={pictures[0]}
          alt={productName}
        />
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
