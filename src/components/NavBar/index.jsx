import React from 'react';
import Logo from '../../imgs/logo.png';
import './index.css';

const NavBar = () => {
    return (
        <div className='navbarCont'>
            <div className="logoCont">
                <img src={Logo} alt="Logo" className='logoImg' />
            </div>
            <div className="nav-items">
                <div>HIGHLIGHTS</div>
                <div>JEWELLERY</div>
                <div>ABOUT US</div>
            </div>
        </div>
    );
};

export default NavBar;