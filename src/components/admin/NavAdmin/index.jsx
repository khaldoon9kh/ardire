import React from 'react';
import Logo from '../../../imgs/logo.png';
import './index.css';

const NavAdmin = () => {
    return (
        <div className='adminnavbarCont'>
            <div className="adminlogoCont">
                <img src={Logo} alt="Logo" className='adminlogoImg' />
            </div>
            <div className="adminnav-items">
                <button className="adminlogoutBtn">Logout</button>
                <div className="adminuserIcon"></div>
            </div>
        </div>
    );
};

export default NavAdmin;