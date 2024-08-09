import React from 'react';
import './index.css';
import Instagram from '../../svgs/instagram.svg';
import Facebook from '../../svgs/facebook.svg';
import Twitter from '../../svgs/twitter.svg';
import Logo from '../../imgs/logo.png';

const Footer = () => {
    return (
        <div className='footerCont'>
            <div className="footer-section">
                <div className="footer-cell">
                    <h3>Client Services</h3>
                    <div className="item">
                        <div className="item-title">FAQ</div>
                    </div>
                    <div className="item">
                        <div className="item-title">Packaging</div>
                    </div>
                    <div className="item">
                        <div className="item-title">Size Guide</div>
                    </div>
                    <div className="item">
                        <div className="item-title">Customization</div>
                    </div>
                    <div className="item">
                        <div className="item-title">Product Care</div>
                    </div>
                </div>
                <div className="footer-cell socialCont">
                    <h3>FOLLOW US</h3>
                    <div className='socialIconsCont'>
                        <div className="item">
                            <div className="item-title">
                                <img src={Facebook} alt="Facebook Icon" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-title">
                                <img src={Instagram} alt="Instagram Icon" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-title">
                                <img src={Twitter} alt="Twitter Icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-cell">
                    <h3>Legal</h3>
                    <div className="item">
                        <div className="item-title">Terms of Service</div>
                    </div>
                    <div className="item">
                        <div className="item-title">Privacy Policy</div>
                    </div>
                    <div className="item">
                        <div className="item-title">Return Policy</div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <img src={Logo} alt="Instagram Icon" />
                <p>© 2024, All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;