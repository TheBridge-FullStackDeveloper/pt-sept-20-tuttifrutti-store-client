import React, { useState, useEffect } from 'react';

import '../styles/Category.scss';

import axios from 'axios';
import { useParams } from 'react-router';

export default function Category() {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/products/category/?category=${category}`)
      .then((res) => {
        setProducts(res.data.data);
      });
  });

  return (
    <div className="product">
      {products.map((p) => (
        <h3 key={p.productRef}>{p.productName}</h3>
      ))}
    </div>
  );
}
