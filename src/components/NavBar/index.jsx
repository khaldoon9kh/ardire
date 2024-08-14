import React from 'react';
import Logo from '../../imgs/logo.png';
import './index.css';
import { useLanguageContext } from "../../context/languageContext";

const NavBar = () => {
    const { t } = useLanguageContext();
    return (
        <div className='navbarCont'>
            <div className="logoCont">
                <img src={Logo} alt="Logo" className='logoImg' />
            </div>
            <div className="nav-items">
                <div>{t("nav.HIGHLIGHTS")}</div>
                <div>{t("nav.JEWELLERY")}</div>
                <div>{t("nav.ABOUTUS")}</div>
            </div>
        </div>
    );
};

export default NavBar;