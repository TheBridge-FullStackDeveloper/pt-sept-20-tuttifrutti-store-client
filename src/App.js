import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/index';
import Category from './pages/Category';
import CartPage from "./pages/CartPage";

import './App.css';

const cardprops =  { 
  productName: "pineapple",
  picture: "https://www.complementosdelcafe.com/1784-large_default/acme-taza-verde-flat-white-150ml.jpg",
  price: 1,
  description: "Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro.",
  brand: "tropical",
}

function App() {
  return (
    <div className="App">
      <h3>TuttiFrutti store</h3>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/home">
          {/* home */}
          <ProductCard {...cardprops} />
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
    </div>
  );
}

export default App;
