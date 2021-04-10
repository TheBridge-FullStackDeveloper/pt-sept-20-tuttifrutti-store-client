import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer';
import Category from './pages/Category';

import './App.css';

function App() {
  return (
    <div className="App">
      <h3>TuttiFrutti store</h3>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/home">
          {/* home */}
        </Route>
        <Route exact path="/search">
          {/* search component */}
        </Route>
        <Route exact path="/favs">
          {/* go to favorites */}
        </Route>
        <Route exact path="/cart">
          {/* go to shopping cart */}
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
