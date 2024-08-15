import React from 'react';
import './index.css';
import LandingImg from "../../imgs/landingImg.webp"

const CategoryHeader = () => {
    return (
        <div className='landingImgCont'>
            <img src={LandingImg} alt="Landing Image" />
        </div>
    );
};

export default CategoryHeader;