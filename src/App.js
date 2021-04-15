import { Route, Switch } from 'react-router-dom';

import Category from './pages/Category';
import CartPage from "./pages/CartPage";
import Home from "./pages/home"
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer';

import './App.css';

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
          <Home/>
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

        <Route exact path="/profile">
          {/* go to profile */}
        </Route>
        <Route exact path="/category/:category">
          <Category />
        </Route>
      </Switch>

      <Footer />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
