import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../components/LoginForm/LoginForm';
import ProductOptionCard from '../components/ProductOptionCard/ProductOptionCard';
import { UserContext } from '../context/User';

import { getCart, createOrder } from '../services/cart';

import '../styles/CartPage.scss';

export default function CartPage() {
  const [cart, setCart] = useState(null);
  const { user } = useContext(UserContext);

  const updateCartFront = (id, quantity) => {
    const itemsWithUpdatedQuantity = cart.map((item) => {
      if (item.productId._id === id) {
        return {
          ...item,
          quantity
        };
      }
      return item;
    });
    const newRemovedCart = itemsWithUpdatedQuantity.filter((item) => {
      if (item.productId._id === id && item.quantity === 0) {
        return false;
      }
      return true;
    });
    setCart(newRemovedCart);
  };

  const createOrderButton = () => {
    createOrder()
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (user) {
      getCart().then((res) => {
        setCart(res?.productsQuantity);
      });
    }
  }, [user]);

  if (user) {
    return (
      <div className="cartPage">
        <h3 className="cartPage_welcome">My Cart</h3>

        <div className="cartPage_container">
          {cart
            ? cart.map((p) => (
                <div key={p._id} className="cart_container_singleProduct">
                  <ProductOptionCard
                    picture={p.productId.pictures[0]}
                    name={p.productId.productName}
                    productId={p.productId._id}
                    updateCartFront={updateCartFront}
                    price={p.productId.price}
                    quantity={p.quantity}
                  />
                </div>
              ))
            : null}
        </div>
        <Link to="/order">
          <button className="cartPage_buttonBuy" onClick={createOrderButton}>
            Order now ✌️
          </button>
        </Link>
      </div>
    );
  } else {
    return <LoginForm />;
  }
}
