import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <h2>Logo</h2>
            </div>
            <ul className='navbar-links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='about'>About</Link>
                </li>
                <li>
                    <Link to='courses'>Courses</Link>
                </li>
                <li>
                    <Link to='contact'>Contact</Link>
                </li>
            </ul>
            {/* Hamburger */}
            <div className='hamburger-menu'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;