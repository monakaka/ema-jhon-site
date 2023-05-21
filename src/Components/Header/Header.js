import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <div className='header'>
                <img src={logo} alt='Missing'></img>
                <div>
                    <a href="/Order">Order</a>
                    <a href="/Order Review">Order Review</a>
                    <a href="/Manage Inventory">Manage Inventory</a>
                    <a href="/Login">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;