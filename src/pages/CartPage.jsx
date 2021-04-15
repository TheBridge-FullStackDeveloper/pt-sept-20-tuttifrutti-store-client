
import React, { useState, useEffect } from "react";

import ProductOptionCard from "../components/ProductOptionCard/ProductOptionCard"

// import Button from "../components/Button/index"

import "../styles/CartPage.scss"

const productSavedMock= [
    {
      category: 'alimentos',
      stock: 20,
      productRef: 5676986,
      productName: 'frutas',
      brand: 'alcoli',
      price: 45,
      pictures: 'picture',
      description: 'fruta fresca',
      weight: 6,
      weightType: 'kg'
    },
    {
      category: 'bebidas',
      stock: 20,
      productRef: 5676777,
      productName: 'verduras',
      brand: 'alcoli',
      price: 45,
      pictures: 'picture',
      description: 'verdura fresca',
      weight: 7,
      weightType: 'kg'
    }
  ];

export default function CartPage(){

    const [productSaved, setProductSaved] = useState([]);

    // useEffect(() => {
    //     const fecthData = async () => {
    //         await axios.get("http://localhost:4000/products/cart")
    //             .then(res => {
    //                 setCategories(res.data);
  
    //                 console.log(productSaved);
    //             });
    //     };
    //      fecthData();
    // }, []);

    useEffect(() => {
      setProductSaved(productSavedMock);
    }, []);


    return (
        <div className="cartPage">
        <h3>My Cart</h3>
       <div>
         {/* aqui debería ir el button comprar ahora, utilizando el componente Button¿? */}
         {/* <Button text={COMPRAR AHORA}/> */}

       <button>COMPRAR AHORA</button>
       </div>
       <div className="productSavedCart">
           {/* {productSaved.map((p)=><h3 key={p.ref}>{p.productName}</h3>)} */}

           {productSaved.map((p)=><div key={p.productRef}><ProductOptionCard picture={p.pictures} name={p.productName} productId={p.productRef} onClickDelete={()=>{}} price ={p.price} /></div>)}
       </div>
        </div>

    );
}