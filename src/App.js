import Hero from './components/Hero/Hero';
import './App.css';
import IconLink from './components/Header/IconLink';
import ProductCard from './components/ProductCard/index';


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
      Tuttifrutti Store 🍍
      <Hero />
      <IconLink text="Carrito de la compra" type="cart" onClick={() => {}} />
      <ProductCard {...cardprops}/>
    </div>
  );
}

export default App;
