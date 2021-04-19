import ProductCard from '../ProductCard';

import './styles.scss';

const ProductList = ({ title, productList, loading, productListMock }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="productList">
      <div className="productList__productListTitle">
        <h3>{title}</h3>
      </div>
      <div className="productList__box">
        {productList
          ? productList.map((card, index) => (
              <ProductCard key={index} {...card} />
            ))
          : productListMock.map((card, index) => (
              <ProductCard key={index} {...card} />
            ))}
      </div>
    </section>
  );
};

export default ProductList;
