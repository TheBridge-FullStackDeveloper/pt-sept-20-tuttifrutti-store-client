import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import { BASE_URL } from '../constants';

import '../styles/Category.scss';

export default function Category() {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products/category/?category=${category}`)
      .then((res) => {
        setProducts(res.data.data);
      });
  }, [category]);

  return (
    <div className="product">
      {products.map((p) => (
        <h3 key={p.productRef}>{p.productName}</h3>
      ))}
    </div>
  );
}
