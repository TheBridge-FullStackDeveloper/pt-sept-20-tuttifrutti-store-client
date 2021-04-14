import axios from 'axios';
//import { useContext } from 'react'
import { useEffect } from 'react';
//import { UserContext } from '../../'
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const PORT = 3001;

// const API_FAVOURITES = {
//   success: true,
//   data: {
//     products: ['6075d37a7027e236b46d20cd']
//   }
// };
const USERMOCK = 'Pepe';
// const PRODUCTID = '6075d37a7027e236b46d20cd';

export default function Favs() {
  const [favourites, setFavourites] = useState([]);

  //const { user } = useContext(UserContext)

  const fetchFavourites = async () => {
    await axios.get(`http://localhost:${PORT}/api/favorites`).then((res) => {
      if (!res.data.data.products | (res.data.count.length === 0)) {
        console.info('Aun no tienes favoritos!');
      } else {
        setFavourites(res.data.data.products);
      }
      console.log('FETCH CONSOLE LOG => ', res.data.data.products);
    });
  };

  const deleteFavourite = async (product) => {
    await axios
      .put(`http://localhost:${PORT}/api/favorites/${product}`)
      .then((res) => {
        setFavourites(res.data.data.products);

        console.log(res.data.data.products);
      });
  };

  const handleRemoveFavourite = (productToBeRemoved) =>
    deleteFavourite(productToBeRemoved);

  useEffect(() => {
    fetchFavourites();
    console.log('favourites del use effect', favourites);
  }, [USERMOCK]);

  if (!USERMOCK) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="favsContainer">
        <div className="favsContainer__welcome">
          <h1>Bienvenid@ a tus favoritos {USERMOCK}!</h1>
        </div>

        <div className="favsContainer__cardsContainer">
          <section className="favsContainer__cardsContainer__individualCard">
            {favourites.map((element, index) => {
              return (
                <div>
                  <p key={element.index}>{element.index}</p>
                  <button
                    className="removeFavourites"
                    onClick={() => handleRemoveFavourite(element.id)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="favsContainer__cardsContainer__individualCard__favouriteIcon"
                    />
                  </button>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    );
  }
}
