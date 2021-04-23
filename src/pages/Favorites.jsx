//import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../context/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import LoginForm from '../components/LoginForm/LoginForm';

import { deleteFavorite, getFavoritesPopulated } from '../services/favorites';

import '../styles/Favorites.scss';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(UserContext);

  const deleteFavoriteFromList = (id) => {
    const newRemovedFavorites = favorites.filter((item) => item._id !== id);
    setFavorites(newRemovedFavorites);
  };

  const handleRemoveFavorite = (idToBeRemoved) => {
    deleteFavoriteFromList(idToBeRemoved);
    deleteFavorite(idToBeRemoved);
  };

  useEffect(() => {
    if (user) {
      getFavoritesPopulated().then((res) => setFavorites(res.products));
    }
  }, [user]);

  if (!user) {
    return <LoginForm />;
  } else {
    return (
      <div className="favsPage">
        <div>
          <div className="favsPage_welcome">
            Welcome to your favorites {user.name || user.email} 😎!
          </div>
        </div>
        <div className="favsPage_container">
          {favorites.map((element) => {
            return (
              <div
                className="favsPage_container_singleProduct"
                key={element._id}
              >
                <img
                  className="favsPage_image"
                  src={element.pictures[0]}
                  alt={element.productName}
                ></img>
                <div className="favsPage_info">
                  <div>Product: {element.productName}</div>
                  <div>Price: {element.price}€</div>
                </div>
                <button
                  className="favsPage_removeButton"
                  onClick={() => handleRemoveFavorite(element._id)}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="favsPage_removeButton"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
