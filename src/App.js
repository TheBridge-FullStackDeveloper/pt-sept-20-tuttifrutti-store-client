import './App.css';
import IconLink from './components/Header/IconLink'

function App() {
  return (
    <IconLink text='Add to Cart' type = 'cart' onClick={()=>{console.info('this will redirect somewhere')}}/>
  )}

export default App;
