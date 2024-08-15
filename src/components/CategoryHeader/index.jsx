import React from 'react';
import './index.css';
import LandingImg from "../../imgs/landingImg.webp"

const CategoryHeader = () => {
    return (
        <div className='categoryHeaderCont'>
            <img src={LandingImg} alt="Landing Image" />
            <div className="category-header-text">
                <h1>Rings</h1>
                <p>Shop spectacular diamond rings at Graff. Each set with a unique design incorporating exceptionally rare diamonds & gemstones in unique settings.
                </p>
            </div>
        </div>
    );
};

export default CategoryHeader;