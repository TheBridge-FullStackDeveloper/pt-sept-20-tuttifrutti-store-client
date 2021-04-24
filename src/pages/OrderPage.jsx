import React from 'react';

import OrderCard from '../components/Ordercard';

import '../styles/OrderPage.scss';

export default function OrderPage() {
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
}
