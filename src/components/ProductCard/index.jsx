import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '../Button';
import Picture from '../Pictures';

import { getProductById } from '../../services/products';

import './styles.scss';

export default function ProductCard({
  productName,
  pictures,
  price,
  description,
  brand,
  _id
}) {
  const [stock, setStock] = useState(true);

  function handleAddToCart() {
    axios.put(
      `http://localhost:4000/api/cart/add/${_id}`,
      {},
      { withCredentials: true }
    );
  }

  useEffect(() => {
    getProductById(_id).then((res) => {
      if (res.data.data.stock === 0) setStock(false);
    });
  }, [_id]);

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
          {!stock ? (
            'NO STOCK'
          ) : (
            <Button
              className="productCard__button"
              onClick={handleAddToCart}
              text="Add to Cart"
            />
          )}
        </div>
      </div>
    </div>
  );
}
