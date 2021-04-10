import './App.css';
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Search from './components/Header/Search'

function App() {
  return (
    <div id="mainContainer">
      <div className="App">Tuttifrutti Store 🍍</div>
      <Search />
      <Hero />
      <Footer />
  </div>
  )
}

export default App;
