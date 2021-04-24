import { Link } from 'react-router-dom';
import { removeFromCart } from '../../services/cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import './ProductOptionCard.scss';

export default function ProductOptionCard({
  picture,
  name,
  productId,
  price,
  quantity,
  deleteFromViewCart
}) {
  const handleRemove = (idToBeRemoved) => {
    removeFromCart(idToBeRemoved).then(() => {
      deleteFromViewCart(idToBeRemoved);
    });
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
          <strong>Quantity:</strong> {quantity}
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
