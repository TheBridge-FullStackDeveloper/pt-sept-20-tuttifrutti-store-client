import { Route, Switch } from 'react-router-dom';

import Category from './pages/Category';
import CartPage from './pages/CartPage';
import Home from './pages/home';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import OrderPage from './pages/OrderPage';
import Favorites from './pages/Favorites';
import ProductPage from './pages/ProductPage';
import Profile from './pages/Profile';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

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

          <Route exact path="/order">
            <OrderPage />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route exact path="/category/:category">
            <Category />
          </Route>

          <Route exact path="/product/:id">
            <ProductPage />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
