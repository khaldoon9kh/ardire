import React from 'react';
import Logo from '../../imgs/logo.png';
import './index.css';

const NavBar = () => {
    return (
        <div className='navbarCont'>
            <div className="logo">
                <img src={Logo} alt="Logo" className='logoImg' />
            </div>
            <div className="nav-items">
                <div>Highlights</div>
                <div>Jewellery</div>
                <div>About Us</div>
            </div>
        </div>
    );
};

export default NavBar;