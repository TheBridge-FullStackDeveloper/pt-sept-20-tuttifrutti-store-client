import { React, useState, useEffect } from 'react';
import axios from 'axios';

import { transformDate } from '../../constants/transformDate';

const PRODUCTS_URL = 'http://localhost:4000/api/orders';

export default function OrderHistory() {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  function loadOrders() {
    axios.get(PRODUCTS_URL, { withCredentials: true }).then((res) => {
      setOrderList(res.data.data.userOrders);
    });
  }

  return (
    <div>
      <h2>My order history</h2>
      {orderList.map((order, index) => (
        <div key={index}>
          <h4>Order Status: {order.state}</h4>
          <h4>Date of Order: {transformDate(order.createdAt)}</h4>
          <h4>State: {order.state}</h4>
          <h4>Total Amount: {order.totalPrice}</h4>
          <h4>
            Products:
            {order.productsQuantity.map((product, index) => (
              <div key={index}>
                <h4>Brand: {product.productId.brand}</h4>
                <h4>Name: {product.productId.productName}</h4>
                <h4>{product.productId.pictures[0]}</h4>
              </div>
            ))}
          </h4>
        </div>
      ))}
    </div>
  );
}
