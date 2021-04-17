//import axios from 'axios';

//import { useContext } from 'react'
import { useEffect } from 'react';
//import { UserContext } from '../../'
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import '../styles/Favorites.scss';

//const PORT = 4000;
const USERMOCK = 'lola';

const RESAPI = {
  success: true,
  count: 4,
  data: {
    products: [
      {
        pictures: [
          'http://placeimg.com/640/480/food',
          'http://placeimg.com/640/480/food',
          'http://placeimg.com/640/480/food'
        ],
        _id: '6078761225b326635dce9c60',
        category: 'sports',
        stock: 10113,
        productRef: '998736f7-8cef-4aa1-ac6b-3a9a1658869f',
        productName: 'pants',
        brand: "prosacco - o'connell",
        price: 740,
        description:
          'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
        weight: 46161.92,
        weightType: 'kg',
        __v: 0,
        createdAt: '2021-04-15T17:21:22.317Z',
        updatedAt: '2021-04-15T17:21:22.317Z'
      },
      {
        pictures: [
          'http://placeimg.com/640/480/food',
          'http://placeimg.com/640/480/food',
          'http://placeimg.com/640/480/food'
        ],
        _id: '6078761225b326635dce9bb1',
        category: 'industrial',
        stock: 14104,
        productRef: '2013034f-302d-4f28-a279-876fb35ab402',
        productName: 'mouse',
        brand: 'kilback and sons',
        price: 436,
        description:
          'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
        weight: 49325.51,
        weightType: 'kg',
        __v: 0,
        createdAt: '2021-04-15T17:21:22.307Z',
        updatedAt: '2021-04-15T17:21:22.307Z'
      },
      {
        pictures: [
          'http://placeimg.com/640/480/food',
          'http://placeimg.com/640/480/food',
          'http://placeimg.com/640/480/food'
        ],
        _id: '6078761225b326635dce9c16',
        category: 'games',
        stock: 37473,
        productRef: '1351ea59-5515-4801-9e26-3d674f4e8182',
        productName: 'table',
        brand: 'lang, huels and abbott',
        price: 532,
        description:
          'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
        weight: 51449.84,
        weightType: 'g',
        __v: 0,
        createdAt: '2021-04-15T17:21:22.313Z',
        updatedAt: '2021-04-15T17:21:22.313Z'
      },
      {
        pictures: [
          'http://placeimg.com/640/480/food',
          'http://placeimg.com/640/480/food',
          'http://placeimg.com/640/480/food'
        ],
        _id: '6078761225b326635dce9bc0',
        category: 'jewelery',
        stock: 44056,
        productRef: 'd3793c38-ca5a-42c3-b00f-056f930953c8',
        productName: 'shirt',
        brand: 'veum, mckenzie and blick',
        price: 127,
        description:
          'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
        weight: 60287.07,
        weightType: 'g',
        __v: 0,
        createdAt: '2021-04-15T17:21:22.308Z',
        updatedAt: '2021-04-15T17:21:22.308Z'
      }
    ]
  }
};

export default function Favorites() {
  //const { user } = useContext(UserContext)

  const [favourites, setFavourites] = useState([]);

  // const fetchFavourites = async () => {
  //   await axios.get(`http://localhost:${PORT}/api/favorites/all`).then((res) => {
  //     if (!res.data.data.products | (res.data.count.length === 0)) {
  //       console.info('Aun no tienes favoritos!');
  //     } else {
  //       setFavourites(res.data.data.products);
  //     }
  //   });
  // };

  // const deleteFavourite = async (productId) => {
  //   await axios
  //     .put(`http://localhost:${PORT}/api/favorites/${productId}`)
  //     .then((res) => {
  //       setFavourites(res.data.data.products);

  //       console.log(res.data.data.products);
  //     });
  // };

  const deleteFavouriteFromList = (id) => {
    const newRemovedFavourites = favourites.filter((item) => item._id !== id);
    setFavourites(newRemovedFavourites);
  };

  const handleRemoveFavourite = (idToBeRemoved) => {
    //deleteFavourite(idToBeRemoved)
    deleteFavouriteFromList(idToBeRemoved);
  };

  useEffect(() => {
    //fetchFavourites();
    setFavourites(RESAPI.data.products);
  }, [USERMOCK]);

  if (!USERMOCK) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="favsPage">
        <div>
          <div className="favsPage_welcome">
            Welcome to your favourites {USERMOCK} 😎!
          </div>
        </div>
        <div className="favsPage_container">
          {favourites.map((element, id) => {
            return (
              <div className="favsPage_container_singleProduct" key={id}>
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
                  onClick={() => handleRemoveFavourite(element._id)}
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
