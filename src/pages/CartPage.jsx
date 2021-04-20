import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/User';
import LoginForm from '../components/LoginForm/LoginForm';

import ProductOptionCard from '../components/ProductOptionCard/ProductOptionCard';

import '../styles/CartPage.scss';

const productSavedMock = [
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
    category: 'bebidas',
    stock: 20,
    productRef: 5676777,
    productName: 'verduras',
    brand: 'alcoli',
    price: 45,
    pictures: 'picture',
    description: 'verdura fresca',
    weight: 7,
    weightType: 'kg'
  }
];

export default function CartPage() {
  const [productSaved, setProductSaved] = useState([]);
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
    setProductSaved(productSavedMock);
  }, []);

  if (user) {
    return (
      <div className="cartPage">
        <h3>My Cart</h3>

        <Link to="/order">COMPRAR AHORA</Link>

        <div className="productSavedCart">
          {productSaved.map((p) => (
            <div key={p.productRef}>
              <ProductOptionCard
                picture={p.pictures}
                name={p.productName}
                productId={p.productRef}
                onClickDelete={() => {}}
                price={p.price}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    // TODO: Add more content to complete login view
    return <LoginForm user={user} />;
  }
}
