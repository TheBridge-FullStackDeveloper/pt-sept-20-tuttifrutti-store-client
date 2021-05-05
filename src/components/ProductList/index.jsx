import ProductCard from '../ProductCard';

import './styles.scss';

const ProductList = ({ title, productList }) => {
  return (
    <section className="productList">
      <div className="productList__productListTitle">
        <h3>{title}</h3>
      </div>

      <div className="productList__box">
        {productList.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
