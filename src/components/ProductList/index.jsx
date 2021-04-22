import ProductCard from '../ProductCard';

import './styles.scss';

const ProductList = ({ title, productList }) => {
  return (
    <section className="productList">
      <div className="productList__productListTitle">
        {title && <h3>{title}</h3>}
      </div>
      <div className="productList__box">
        {productList.map((card, index) => (
          <ProductCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
