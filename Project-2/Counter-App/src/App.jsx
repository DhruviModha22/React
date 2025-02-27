import React, { useState } from 'react';
import './App.css'; // Ensure this file contains the updated styles

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <h1>Welcome to Aesthetic Counter App</h1>
      <h2>{value}</h2>  
      <div>
        <button className="btn" onClick={() => setValue(value + 1)}>Increment</button>
        <button className="btn" disabled={value === 0} onClick={() => setValue(value - 1)}>Decrement</button>
        <button className="btn"disabled={value === 0} onClick={() => setValue(0)}>Reset</button>
      </div>
    </div>
  );
};

export default App;
