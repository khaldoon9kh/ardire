import React from 'react';
import Logo from '../../../imgs/logo.png';
import './index.css';

const NavAdmin = () => {
    return (
        <div className='navbarCont'>
            <div className="logoCont">
                <img src={Logo} alt="Logo" className='logoImg' />
            </div>
            <div className="nav-items">
                <button className="logoutBtn">Logout</button>
                <div className="userIcon"></div>
            </div>
        </div>
    );
};

export default NavAdmin;