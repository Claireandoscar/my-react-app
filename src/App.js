import React, { useState } from 'react';
import './App.css';
import Cube from './cube';

function App() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="App">
      <button onClick={handleFlip}>Flip Cube</button>
      <Cube flipped={flipped} />
    </div>
  );
}

export default App;
