import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';

import CartPage from './pages/CartPage';
import Category from './pages/Category';
import Favorites from './pages/Favorites';
import Home from './pages/home';
import LoginPage from './pages/Login';
import OrderPage from './pages/OrderPage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.jsx';
import ProductList from './components/ProductList/index';
import Register from './components/Register/Register';
import Products from './pages/Products';

import './App.css';

function App() {
  const userContextInput = useUser();

  return (
    <UserContext.Provider value={userContextInput}>
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

            <Route exact path="/list">
              <ProductList />
            </Route>

            <Route exact path="/products">
              <Products />
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

            <Route exact path="/product/:id">
              <ProductPage />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
