import React, { useState, useEffect } from 'react';

import '../styles/Category.scss';
// import {Link} from "react-router-dom"

import axios from 'axios';
import { useParams } from 'react-router';

const productsMock = [
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

export default function Category() {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/products/category/?category=${category}`)
      .then((res) => {
        setProducts(res.data.data);

        console.log(category);
      });
  });

  // useEffect(() => {
  //   setProducts(productsMock);
  // }, []);

  return (
    <div className="product">
      {products.map((p) => (
        <h3 key={p.productRef}>{p.productName}</h3>
      ))}
    </div>
  );
}
