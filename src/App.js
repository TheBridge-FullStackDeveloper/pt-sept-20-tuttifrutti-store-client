import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';

import CartPage from './pages/CartPage';
import Category from './pages/Category';
import Favorites from './pages/Favorites';
import Home from './pages/home';
import LoginPage from './pages/Login';
import OrderPage from './pages/OrderPage';
import ProductPage from './pages/ProductPage';
import Profile from './pages/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.jsx';
import Register from './components/Register/Register';
import Products from './pages/Products';
import SearchPage from './pages/SearchPage';
import ProductList from './components/ProductList/index';
import WithAuthentication from './components/hocs/WithAuthentication';
import OrderHistory from './components/OrderHistory/orderhistory';

import './App.css';

function App() {
  const userContextData = useUser();

  return (
    <UserContext.Provider value={userContextData}>
      <div className="App">
        <Header />
        <NavBar />

        <div className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/search">
              <SearchPage />
            </Route>

            <Route exact path="/favorites">
              <WithAuthentication>
                <Favorites />
              </WithAuthentication>
            </Route>

            <Route exact path="/cart">
              <WithAuthentication>
                <CartPage />
              </WithAuthentication>
            </Route>

            <Route exact path="/list">
              <ProductList />
            </Route>

            <Route exact path="/products">
              <Products />
            </Route>

            <Route exact path="/order">
              <WithAuthentication>
                <OrderPage />
              </WithAuthentication>
            </Route>

            <Route exact path="/order-history">
              <WithAuthentication>
                <OrderHistory />
              </WithAuthentication>
            </Route>

            <Route exact path="/profile">
              <WithAuthentication>
                <Profile />
              </WithAuthentication>
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route exact path="/category/:category">
              <Category />
            </Route>

            <Route exact path="/product/:productId">
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
