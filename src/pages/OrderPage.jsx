import React, { useContext } from 'react';

import { UserContext } from '../context/User';
import OrderCard from '../components/Ordercard';
import LoginForm from '../components/LoginForm/LoginForm';

import '../styles/OrderPage.scss';

export default function OrderPage() {
  const { user } = useContext(UserContext);

  if (user) {
    return (
      <div>
        <h3>MI PEDIDO</h3>

        <div className="productList__box">
          <OrderCard />
        </div>

        <a
          className="buttoncart"
          href="https://www.paypal.com/signin"
          rel="noopener noreferrer"
          target="__blank"
        >
          PAGAR
        </a>
      </div>
    );
  } else {
    return <LoginForm />;
  }
}
