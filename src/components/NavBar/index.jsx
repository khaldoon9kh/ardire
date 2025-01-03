import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../imgs/logo.png';
import './index.css';
import { useLanguageContext } from "../../context/languageContext";

const NavBar = () => {
    const { t } = useLanguageContext();
    return (
        <div className='navbarCont'>
            <div className="logoCont">
            <Link to="/">
                <img src={Logo} alt="Logo" className='logoImg' />
            </Link>
            </div>
            <div className="nav-items">
                <div><Link to="/">{t("nav.HIGHLIGHTS")}</Link></div>
                <div><Link to="/product">{t("nav.JEWELLERY")}</Link></div>
                <div><Link to="/category">{t("nav.ABOUTUS")}</Link></div>
            </div>
        </div>
    );
};

export default NavBar;