import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss';

import axios from 'axios';

export default function NavBar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/api/categories').then((res) => {
      setCategories(res.data.data);

      console.log(categories);
    });
  });

  return (
    <nav className="category">
      <div>
        <ul className="list">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
