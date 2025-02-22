import React from 'react';
import './NavBar.css';
import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

const NavBar = ({ theme, setTheme }) => {  // Destructure props

    const toggle_mode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light'); // Properly update state
    };

    return (
        <div className='navbar'>
            <img src={theme === 'light' ? logo_light : logo_dark} alt="logo" className='logo' height='80px'/>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
            </ul>

            <div className='search-box'>
                <input type="text" placeholder='Search' />
                <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="search icon" />
            </div>

            {/* Ensure onClick is correctly bound */}
            <img 
                onClick={toggle_mode}  
                src={theme === 'light' ? toggle_light:toggle_dark} 
                alt="toggle mode" 
                className='toggle-icon' 
            />
        </div>
    );
};

export default NavBar;
