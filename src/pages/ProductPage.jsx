import React, { useState, useEffect } from 'react';

import ProductList from '../components/ProductList/index';
import Pagination from '../components/Pagination/Pagination.jsx';
import axios from 'axios';

const BASE_API_URL = 'http://localhost:4000/api/products/?page=';

function ProductPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await axios.get(BASE_API_URL + `${1}`);
      setProductList(res.data.data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Nuestros Productos</h1>
      <ProductList
        title="Nuestros productos"
        productList={currentProducts}
        loading={loading}
      />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={productList.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ProductPage;
