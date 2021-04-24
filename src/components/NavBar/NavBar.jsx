import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { BASE_URL } from '../../constants';

import './navBar.scss';

export default function NavBar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`${BASE_URL}/categories`).then((res) => {
      setCategories(res.data.data);
    });
  }, []);

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
