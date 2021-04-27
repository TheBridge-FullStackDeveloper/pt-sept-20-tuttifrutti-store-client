import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';

const BASE_URL = 'http://localhost:4000/api';

export default function ProductsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products/${productId}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        // history.goBack();
      });
  }, [history, productId]);

  return (
    <div className="productList__box">
      <h1>Hola soy product page💥 {product.productName}</h1>

      <ul>
        <p>NOMBRE:{product.productName}</p>
        <p>PRECIO:{product.price}</p>
        <p>FOTOS:{product.pictures}</p>
        <p>DESCRIPCIÓN:{product.description}</p>
      </ul>
    </div>
  );
}
