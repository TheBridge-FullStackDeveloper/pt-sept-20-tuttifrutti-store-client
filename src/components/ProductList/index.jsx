import ProductCard from '../ProductCard';

import './styles.scss';

const ProductList = ({ title, productListMock }) => {
  return (
    <section className="productList">
      <div className="productList__productListTitle">
        <h3>{title}</h3>
      </div>
      <div className="productList__box">
        {productListMock.map((card, index) => (
          <ProductCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
