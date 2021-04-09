import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import "./navBar.scss"

// import axios from "axios"

const categoriesMock = [{name:"alimentos"},{name:"bebidas"}]

export default function NavBar() {
   
 

const [categories, setCategories] = useState(categoriesMock);
    // useEffect(() => {
    //     const fecthData = async () => {
    //         await axios.get("http://localhost:4000/products/categories")
    //             .then(res => {
    //                 setCategories(res.data);
                    
    //                 console.log(categories);
    //             });
    //     };
    //      fecthData();
    // }, []);
    useEffect(()=>{
        setCategories(categoriesMock);

    },[])

    return (
        <div className="category">
            <div >
                <ul className="list">
                    {categories.map((category, index) =><Link key={index} to={`/category/${category.name}`}><li key={index}>{category.name}</li></Link>)}
                </ul>
            </div>
        </div>
    )
}
