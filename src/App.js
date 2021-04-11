import { Route, Switch, Redirect } from 'react-router-dom';

import { UserContext } from './store';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/index';
import Category from './pages/Category';
import CartPage from './pages/CartPage';
import Login from './components/LoginForm/Login';

import Auth from './hooks/auth';
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
  const { user, login, logout, register, loading } = Auth();

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      <div className="App">
        <h3>TuttiFrutti store</h3>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/home">
            {/* home */}
            <ProductList
              title="product list"
              productListMock={productListMock}
            />
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
          <Route exact path="/profile"></Route>
          <Route path="/login" exact>
            {user ? <Redirect to="/profile" /> : <Login />}
          </Route>
          <Route exact path="/category/:category">
            <Category />
          </Route>
        </Switch>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
