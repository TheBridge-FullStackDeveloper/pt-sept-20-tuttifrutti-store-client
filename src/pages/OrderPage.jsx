import React, { useState, useEffect, useContext } from 'react';

import { UserContext } from '../context/User';
import '../styles/OrderPage.scss';
import OrderCard from '../components/Ordercard';
import '../components/Ordercard/styles.scss';
import LoginForm from '../components/LoginForm/LoginForm';

const productOrderMock = [
  {
    category: 'alimentos',
    stock: 20,
    productRef: 5676986,
    productName: 'frutas',
    brand: 'alcoli',
    price: 45,
    pictures: 'picture',
    description: 'fruta fresca',
    weight: 6,
    weightType: 'kg'
  },

  {
    category: 'turismo',
    stock: 20,
    productRef: 567444,
    productName: 'deportivo',
    brand: 'Ferrari',
    price: 60,
    pictures: 'coche',
    description: 'fast',
    weight: 1400,
    weightType: 'kg'
  },

  {
    category: 'viaje',
    stock: 2,
    productRef: 394774,
    productName: 'Italia',
    brand: 'Peroni',
    price: 200,
    pictures: 'picture',
    description: 'cerveza',
    weight: 6,
    weightType: 'kg'
  }
];

export default function OrderPage() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);

  // useEffect(() => {
  //     const fecthData = async () => {
  //         await axios.get("http://localhost:4000/products/cart")
  //             .then(res => {
  //                 setCategories(res.data);

  //                 console.log(productSaved);
  //             });
  //     };
  //      fecthData();
  // }, []);

  useEffect(() => {
    setProducts(productOrderMock);
  }, []);

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
          target="__blank"
          rel="noopener noreferrer"
        >
          PAGAR
        </a>
      </div>
    );
  } else {
    // TODO: Add more content to complete login view
    return <LoginForm user={user} />;
  }
}
