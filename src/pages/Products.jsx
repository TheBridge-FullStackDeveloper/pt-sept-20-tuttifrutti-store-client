import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList/index';

const BASE_URL = 'http://localhost:4000/api/products/';

export default function Products() {
  const [productsList, setProductList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [moreProducts, setMoreProducts] = useState(true);

  useEffect(() => {
    loadMoreProducts();
  }, []);

  function loadMoreProducts() {
    setIsFetching(true);

    axios
      .get(BASE_URL, {
        params: { page: page }
      })
      .then((res) => {
        setProductList((prevProductList) => {
          return [...prevProductList, ...res.data.data];
        });
        setPage((prevPageNumber) => prevPageNumber + 1);
        setMoreProducts(res.data.count > 0);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <ProductList
        title={'Products'}
        productList={productsList}
        onClick={loadMoreProducts}
        isFetching={isFetching}
        moreProducts={moreProducts}
      />
    </div>
  );
}
