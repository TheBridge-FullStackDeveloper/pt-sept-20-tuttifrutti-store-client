import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import ProductList from '../components/ProductList';
import { getSearch } from '../services/search';

export default function SearchPage() {
  const query = new URLSearchParams(useLocation().search);
  const name = query.get('name');

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSearch(name)
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, [name]);

  return (
    <>
      <h2>You searched for "{name}"</h2>
      {loading ? null : <ProductList title={name} productList={products} />}
    </>
  );
}
