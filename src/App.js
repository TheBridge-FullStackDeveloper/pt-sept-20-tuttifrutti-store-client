import Hero from './components/Hero/Hero';

import './App.css';
import IconLink from './components/Header/IconLink';

function App() {
  return (
    <div className="App">
      Tuttifrutti Store 🍍
      <Hero />
      <IconLink text="Carrito de la compra" type="cart" onClick={() => {}} />
    </div>
  );
}

export default App;
