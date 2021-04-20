import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '../Button';

import './styles.scss';

export default function ProductCard({
  productName,
  picture,
  price,
  description,
  brand
}) {
  const [product, setProduct] = useState([]);

  // function handleAddToCart(){

  //
  //        axios.put(`http://localhost:4000/api/cart/add/:productId?quantity=X`, product)
  //             .then(res => {
  //                 setProduct(res.product);

  //                 console.log(res.product);
  //             });

  // }
  return (
    <section className="productCard">
      {/* {pictures.map((element, index)=> <img key={index}src={element} alt={element}/> )} para varias img */}

      <img className="productCard__cardImg" src={picture} alt={productName} />

      <h3 className="productCard__title">{productName}</h3>
      <p className="productCard__cardBrand">{brand}</p>

      <p className="productCard__cardPrice">
        {price}
        <span>€</span>
      </p>
      {/* TODO: FALTA LOG CONVERSION MONEDA */}

      <p className="productCard__cardDescription">{description}</p>

      {/* <Button onClick={handleAddToCart} text="Add to Cart"/> */}
    </section>
  );
}
