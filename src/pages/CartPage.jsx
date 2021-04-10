
import React, { useState, useEffect } from "react";

const productSavedMock = [{
    category: "alimentos",
    stock: 20,
    productRef: 5676986,
    productName: "frutas",
    brand: "alcoli",
    price: 45,
    pictures:"picture",
    description:"fruta fresca",
    weight: 6,
    weightType: "kg",
}, {
    category: "bebidas",
    stock: 20,
    productRef: 5676777,
    productName: "verduras",
    brand: "alcoli",
    price: 45,
    pictures:"picture",
    description:"verdura fresca",
    weight: 7,
    weightType: "kg",
}];

export default function CartPage(){

    const [productSaved, setProductSaved] = useState(productSavedMock);

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
        <div>
        <h3>MI CARRITO</h3>
       <div>
       <button>COMPRAR AHORA</button>
       </div>
       <div>
           {productSaved.map((p,entry)=><h3>{p.productName}</h3>)}
       </div>
        </div>

    );
}