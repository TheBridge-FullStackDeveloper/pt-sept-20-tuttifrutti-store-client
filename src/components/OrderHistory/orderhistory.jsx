import { useState, useEffect } from 'react';
import axios from 'axios';

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

  console.log(orderList);

  return (
    <div>
      <h2>My order history</h2>
      {orderList.map((order, index) => (
        <>
          <h4 key={index}>Order Status: {order.state}</h4>
          <h4 key={index}>Date of Order: {order.createdAt}</h4>
          <h4 key={index}>Products: {order.totalPrice}</h4>
          <h4 key={index}>
            Total Amount:{' '}
            {order.productsQuantity.map((product, index) => (
              <>
                <h4 key={index}>Product: {product.productId.brand}</h4>
                <h4 key={index}>Product: {product.productId.name}</h4>
                <h4 key={index}>Product: {product.productId.pictures[0]}</h4>
              </>
            ))}
          </h4>
        </>
      ))}
    </div>
  );
}
