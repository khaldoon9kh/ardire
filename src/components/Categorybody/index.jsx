import React from 'react';
import './index.css';
import LandingImg from "../../imgs/landingImg.webp"

const CategoryBody = () => {

    const sortByComponent = () => {
        return (
            <div className="sortByComponent">
                <h1>Sort By:</h1>
                <div className="sortByOptions">
                    <p>Price: Low to High</p>
                    <p>Price: High to Low</p>
                    <p>Alphabetical: A-Z</p>
                    <p>Alphabetical: Z-A</p>
                </div>
            </div>
        )
    }



    return (
        <div className='categoryBodyCont'>
            {sortByComponent()}
        </div>
    );
};

export default CategoryBody;