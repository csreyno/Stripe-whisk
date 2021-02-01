import { useState } from 'react';
import './App.css';
import StripeContainer from './components/StripeContainer';
import whisk from './assets/whisk.jpg';

function App() {
  const [showItem, setShowItem] = useState(false)

  return (
    <div className="App">
      <h1>The Whisk Store</h1> 
      {showItem ? <StripeContainer/> : <>  <div id="over"><img className="image" src = {whisk} alt = "Whisk" /></div><h3>$10.00</h3><button onClick={() => setShowItem(true)}>Purchase Whisk</button></>}
    </div>
  );
  }

export default App;
