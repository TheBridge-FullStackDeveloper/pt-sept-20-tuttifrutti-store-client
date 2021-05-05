import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { removeFromCart, updateCart } from '../../services/cart';
import { getProductById } from '../../services/products';

import './ProductOptionCard.scss';

export default function ProductOptionCard({
  picture,
  name,
  productId,
  price,
  quantity,
  updateCartFront
}) {
  const [stock, setStock] = useState(true);

  const handleRemove = (idToBeRemoved) => {
    removeFromCart(idToBeRemoved).then(() => {
      updateCartFront(idToBeRemoved, quantity - 1);
      // updateCart(idToBeRemoved, quantity - 1);
    });
  };

  useEffect(() => {
    const id = setTimeout(() => {
      getProductById(productId)
        .then((res) => {
          const stock = res.data.data.stock;
          if (stock === 0) {
            setStock(false);
            throw new Error(`no stock for ${res.data.data._id}`);
          }
          updateCart(productId, quantity);
        })
        .catch((error) => console.error(error));
    }, 500);

    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  const changeQuantity = (event) => {
    const newQuantity = event.target.value <= 0 ? 1 : event.target.value;
    updateCartFront(productId, newQuantity);
  };

  return (
    <div className="cart_container_singleProduct" key={productId}>
      <Link to={`/product/${productId}`}>
        <img className="cart_image" src={picture} alt={name}></img>
      </Link>
      <div className="cart_info">
        <div>
          <strong>Product:</strong> {name}
        </div>
        <div>
          <strong>Price:</strong> {price}€
        </div>
        <div>
          {!stock ? (
            <h3>NO STOCK</h3>
          ) : (
            <>
              <label htmlFor="quantity">
                <strong>Quantity:</strong>
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={changeQuantity}
              />
            </>
          )}
        </div>
      </div>
      <button
        className="cart_removeButton"
        onClick={() => handleRemove(productId)}
      >
        <FontAwesomeIcon icon={faCartPlus} className="cart_removeButton" />
      </button>
    </div>
  );
}
