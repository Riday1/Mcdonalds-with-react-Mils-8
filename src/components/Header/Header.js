import React from 'react';
import './Header.css';
import logo from '../../img/macdonals.png'



const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='header-info'>
                <a href="/allmeal">All Meal</a>
                <a href="/Launch">Launch</a>
                <a href="/dinner">Dinner</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;