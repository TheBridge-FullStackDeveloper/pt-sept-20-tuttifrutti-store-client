import { Route, Switch } from 'react-router-dom';

import Category from './pages/Category';
import CartPage from './pages/CartPage';
import Home from './pages/home';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/index';

import OrderPage from './pages/OrderPage';
import Login from './components/LoginForm/Login';

import './App.css';

const productListMock = [
  {
    category: 'bebidas',
    stock: 20,
    productRef: 5676777,
    productName: 'verduras',
    brand: 'alcoli',
    price: 45,
    picture:
      'https://www.complementosdelcafe.com/1784-large_default/acme-taza-verde-flat-white-150ml.jpg',
    description:
      'Lucas ipsum dolor sit amet darth palpatine solo organa luke organa anakin solo padmé calrissian fresca',
    weight: 7,
    weightType: 'kg'
  },

  {
    category: 'alimentos',
    stock: 20,
    productRef: 5676986,
    productName: 'frutas',
    brand: 'alcoli',
    price: 45,
    picture:
      'https://st4.depositphotos.com/11095424/26573/i/1600/depositphotos_265730570-stock-photo-star-wars-droid-c3po-golden.jpg',
    description:
      'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro.',
    weight: 6,
    weightType: 'kg'
  },

  {
    category: 'alimentos',
    stock: 20,
    productRef: 5676986,
    productName: 'frutas',
    brand: 'alcoli',
    price: 45,
    picture:
      'https://st4.depositphotos.com/11095424/26573/i/1600/depositphotos_265730570-stock-photo-star-wars-droid-c3po-golden.jpg',
    description:
      'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro.',
    weight: 6,
    weightType: 'kg'
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      {/* hemos decidido quitar el título  */}
      {/* <Header />
      <NavBar />
      <Footer /> */}
      <Switch>
        <Route exact path="/">
          <Home />

          {/* <ProductList title="product list" productListMock={productListMock} /> */}
        </Route>
        <Route exact path="/search">
          {/* search component */}
        </Route>

        <Route exact path="/favs">
          {/* go to favorites */}
        </Route>

        <Route exact path="/cart">
          <CartPage />
        </Route>

        <Route exact path="/order">
          <OrderPage />
        </Route>

        <Route exact path="/profile">
          {/* go to profile */}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/category/:category">
          <Category />
        </Route>

        <Route exact path="/product/:id">
          <Category />
        </Route>
      </Switch>

      <Footer />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
