import { useEffect, useState } from 'react';
import './styles.scss';

const products = [
  {
    category: 'alimentos',
    stock: 20,
    id: 5676986,
    productName: 'frutas',
    brand: 'alcoli',
    price: 45,
    pictures: 'picture',
    description: 'fruta fresca',
    weight: 6,
    weightType: 'kg'
  },

  {
    category: 'turismo',
    stock: 20,
    id: 567444,
    productName: 'deportivo',
    brand: 'Ferrari',
    price: 60,
    pictures: 'coche',
    description: 'fast',
    weight: 1400,
    weightType: 'kg'
  },

  {
    category: 'viaje',
    stock: 2,
    id: 394774,
    productName: 'Italia',
    brand: 'Peroni',
    price: 200,
    pictures: 'picture',
    description: 'cerveza',
    weight: 6,
    weightType: 'kg'
  }
];

export default function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(products);
  }, []);

  function handleDelete(id) {
    const newCart = cart.filter((cartElement) => cartElement.id !== id);
    setCart(newCart);
  }

  const total = cart.reduce((acc, next) => {
    return acc + next.price;
  }, 0);

  return (
    <div className="App">
      <h1>Carrito</h1>

      {cart.map(({ id, price }) => (
        <div key={id}>
          <p>{price}€</p>
          <button onClick={() => handleDelete(id)}>Eliminar</button>
        </div>
      ))}

      <h2>Total: {total}€</h2>
    </div>
  );
}
