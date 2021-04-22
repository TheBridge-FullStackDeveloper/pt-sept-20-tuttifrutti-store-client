import './styles.scss';

export default function ProductCard({
  productName,
  pictures,
  price,
  description,
  brand
}) {
  return (
    <section className="productCard">
      {/* {pictures.map((element, index)=> <img key={index}src={element} alt={element}/> )} para varias img */}

      <img
        className="productCard__cardImg"
        src={pictures[0]}
        alt={productName}
      />

      <h3 className="productCard__title">{productName}</h3>
      <p className="productCard__cardBrand">{brand}</p>

      <p className="productCard__cardPrice">
        {price}
        <span>€</span>
      </p>
      {/* TODO: FALTA LOG CONVERSION MONEDA */}

      <p className="productCard__cardDescription">{description}</p>
    </section>
  );
}
