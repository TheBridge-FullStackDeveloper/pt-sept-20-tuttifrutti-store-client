import { Route, Switch, Redirect } from 'react-router-dom';
import { UserContext, useUser } from './context/User';

import Loader from 'react-loader-spinner';

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
import ProductList from './components/ProductList/index';
import SearchPage from './pages/SearchPage';

import './App.css';

function App() {
  const { userContextInput, loading, user } = useUser();

  return (
    <UserContext.Provider value={{ userContextInput, loading, user }}>
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
              {loading ? (
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={2000}
                />
              ) : (
                <>{user ? <Profile /> : <Redirect to="/login" />}</>
              )}
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
