import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList/index';
import { BASE_URL } from '../constants';

const INIT_URL = '/products?page=1';

export default function Products() {
  const [productsList, setProductList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    loadMoreProducts();
  }, []);

  function loadMoreProducts() {
    setIsFetching(true);

    axios
      .get(BASE_URL + (nextPage || INIT_URL))
      .then((res) => {
        setProductList((prevProductList) => [
          ...prevProductList,
          ...res.data.data
        ]);

        setNextPage(res.data.nextPage);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const cantLoadMore = productsList.length && !nextPage;

  return (
    <div>
      <ProductList
        title={'Products'}
        productList={productsList}
        isFetching={isFetching}
      />

      {isFetching && <p>Loading more products...</p>}
      {!isFetching && !cantLoadMore && (
        <button onClick={loadMoreProducts}>Load more</button>
      )}
    </div>
  );
}
