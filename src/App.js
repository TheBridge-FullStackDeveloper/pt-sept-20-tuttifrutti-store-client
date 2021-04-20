import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';

import Category from './pages/Category';
import CartPage from './pages/CartPage';
import Home from './pages/home';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/index';
import OrderPage from './pages/OrderPage';
import LoginPage from './pages/Login';
import Favorites from './pages/Favorites';

import './App.css';

// const cardprops = {
//   productName: 'pineapple',
//   picture:
//     'https://www.complementosdelcafe.com/1784-large_default/acme-taza-verde-flat-white-150ml.jpg',
//   price: 1,
//   description:
//     'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro.',
//   brand: 'tropical'
// };

function App() {
  const userContextInput = useUser();

  return (
    <UserContext.Provider value={userContextInput}>
      <div className="App">
        <Header />
        <NavBar />

        {/* hemos decidido quitar el título  */}
        {/* <Header />
      <NavBar />
      <Footer /> */}
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              {/* search component */}
            </Route>

            <Route exact path="/favorites">
              <Favorites />
            </Route>

            <Route exact path="/cart">
              <CartPage />
            </Route>

            <Route exact path="/list">
              <ProductList />
            </Route>

            <Route exact path="/order">
              <OrderPage />
            </Route>

            <Route exact path="/profile">
              {/* go to profile */}
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route exact path="/category/:category">
              <Category />
            </Route>
          </Switch>
        </div>

        <Footer />

        {/* <Footer /> */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
