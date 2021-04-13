import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OrderProductsMock = [
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

export default function OrderPage() {
  const [OrderProductSaved, setOrderProductSaved] = useState(OrderProductsMock);

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
    setOrderProductSaved(OrderProductsMock);
  }, []);

  return (
    <div>
      <h3>ORDER</h3>
    </div>
  );
}
