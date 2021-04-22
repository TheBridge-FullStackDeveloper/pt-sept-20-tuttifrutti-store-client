import Hero from '../components/Hero/Hero';
import ProductList from '../components/ProductList';

import '../styles/home.scss';

const productList = [
  {
    category: 'bebidas',
    stock: 20,
    productRef: 5676777,
    productName: 'verduras',
    brand: 'alcoli',
    price: 45,
    pictures: [
      'https://www.complementosdelcafe.com/1784-large_default/acme-taza-verde-flat-white-150ml.jpg'
    ],
    description:
      'Lucas ipsum dolor sit amet darth palpatine solo organa luke organa anakin solo padmé calrissian fresca',
    weight: 7,
    weightType: 'kg'
  },

  {
    category: 'alimentos',
    stock: 20,
    productRef: 5676986,
    productName: 'frutas',
    brand: 'alcoli',
    price: 45,
    pictures: [
      'https://st4.depositphotos.com/11095424/26573/i/1600/depositphotos_265730570-stock-photo-star-wars-droid-c3po-golden.jpg'
    ],
    description:
      'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro.',
    weight: 6,
    weightType: 'kg'
  },

  {
    category: 'alimentos',
    stock: 20,
    productRef: 5676986,
    productName: 'frutas',
    brand: 'alcoli',
    price: 45,
    pictures: [
      'https://st4.depositphotos.com/11095424/26573/i/1600/depositphotos_265730570-stock-photo-star-wars-droid-c3po-golden.jpg'
    ],
    description:
      'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro.',
    weight: 6,
    weightType: 'kg'
  }
];

export default function Home() {
  return (
    <main className="homePage">
      <div className="main">
        <Hero />

        <ProductList title="Destacados" productList={productList} />

        <ProductList title="Promociones" productList={productList} />
      </div>
    </main>
  );
}
