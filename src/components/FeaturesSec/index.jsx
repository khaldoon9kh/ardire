import React from 'react';
import './index.css';
import Bell from '../../svgs/hotelBell.svg';
import Shipping from '../../svgs/shipping.svg';
import Card from '../../svgs/secureCard.svg';

const FeaturesSec = () => {
    return (
        <div className="features-section">
            <div className="feature-cell">
                <div className="icon">
                    <img src={Bell} alt="Bell Icon" />
                </div>
                <h3>At Your Service</h3>
                <p>Our client care expert are always here to help.</p>
            </div>
            <div className="feature-cell">
                <div className="icon">
                    <img src={Shipping} alt="Shipping Icon" />
                </div>
                <h3>Complimentary Shipping</h3>
                <p>We offer complimentary shipping to your address.</p>
            </div>
            <div className="feature-cell">
                <div className="icon">
                    <img src={Card} alt="Card Icon" />
                </div>
                <h3>Secure Payment</h3>
                <p>Your payment is secured with us.</p>
            </div>
        </div>
    );
};

export default FeaturesSec;