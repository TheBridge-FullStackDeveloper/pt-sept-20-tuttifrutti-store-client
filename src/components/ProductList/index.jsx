import ProductCard from '../ProductCard';

import './styles.scss';

const ProductList = ({ title, productList, onClick, isFetching, hasMore }) => {
  return (
    <section className="productList">
      <div className="productList__productListTitle">
        <h3>{title}</h3>
      </div>
      <div className="productList__box">
        {productList.map((card, index) => {
          if (productList.length === index + 1) {
            return <ProductCard key={index} {...card} />;
          } else {
            return <ProductCard key={index} {...card} />;
          }
        })}
      </div>
      {isFetching && <p>Loading more products...</p>}
      {!isFetching && hasMore && <button onClick={onClick}>Load more</button>}
    </section>
  );
};

export default ProductList;
