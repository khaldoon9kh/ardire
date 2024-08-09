import React from 'react';
import './index.css';
import AboutUsImg from "../../imgs/aboutUs.webp"

const FeaturesSec = () => {
    return (
        <div className="features-section">
            <div className="feature-cell">
                <div className="icon">Icon 1</div>
                <h3>Title 1</h3>
                <p>Paragraph 1</p>
            </div>
            <div className="feature-cell">
                <div className="icon">Icon 2</div>
                <h3>Title 2</h3>
                <p>Paragraph 2</p>
            </div>
            <div className="feature-cell">
                <div className="icon">Icon 3</div>
                <h3>Title 3</h3>
                <p>Paragraph 3</p>
            </div>
            <div className="feature-cell">
                <div className="icon">Icon 4</div>
                <h3>Title 4</h3>
                <p>Paragraph 4</p>
            </div>
        </div>
    );
};

export default FeaturesSec;