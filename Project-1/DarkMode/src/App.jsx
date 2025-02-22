import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';

function App() {
    const [theme, setTheme] = useState('light'); // Define theme state

    return (
        <div className={`container ${theme}`}>
            
        
            <NavBar theme={theme} setTheme={setTheme} /> 
        </div>
    );
}

export default App;
