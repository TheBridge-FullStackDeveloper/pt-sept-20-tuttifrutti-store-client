import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList/index';

const BASE_URL = 'http://localhost:4000/api/products/';

export default function Products() {
  const [productsList, setProductList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMoreBeers();
  }, []);

  console.log(productsList);

  function loadMoreBeers() {
    setIsFetching(true);

    axios
      .get(BASE_URL, {
        params: { page: page }
      })
      .then((res) => {
        setProductList((prevBeers) => {
          return [...prevBeers, ...res.data.data];
        });
        setPage((prevPageNumber) => prevPageNumber + 1);
        setHasMore(res.data.count > 0);
        setIsFetching(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div>
      <ProductList
        title={'Products'}
        productList={productsList}
        onClick={loadMoreBeers}
        isFetching={isFetching}
        hasMore={hasMore}
      />
    </div>
  );
}
