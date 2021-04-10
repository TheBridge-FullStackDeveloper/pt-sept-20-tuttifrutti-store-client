import React, { useState, useEffect } from 'react'
// import {Link} from "react-router-dom"


// import axios from "axios"
import { useParams } from 'react-router';

const productsMock =
[{
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

export default function Category() {
   
   
    const [products, setProducts] = useState([]);

    const {category}= useParams();
    

    // useEffect(() => {
    //     const fecthData = async () => {
    //         await axios.get(`http://localhost:4000/products/category/${category}`)
    //             .then(res => {
    //                 setProducts(res.data);
                    
    //                 console.log(category);
    //             });
    //     };
    //     fecthData();
    // }, []);


    useEffect(()=>{
        setProducts(productsMock)
    },[])
    
    return (
        <div className="product">
          { products.map((p, entry)=><h3>{p.productName}</h3>) }
          
        </div>
    )
}