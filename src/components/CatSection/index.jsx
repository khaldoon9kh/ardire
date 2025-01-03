import React from 'react';
import './index.css';
import Earings from '../../imgs/earings.png';
import Bracelets from '../../imgs/bracelets.png';
import Rings from '../../imgs/rings.png';
import Necklaces from '../../imgs/nechlase.png';
import { Link } from 'react-router-dom';

const CatSection = () => {
    const catItems = [
        {
            img: Earings,
            title: 'EARINGS'
        },
        {
            img: Bracelets,
            title: 'BRACELETS'
        },
        {
            img: Rings,
            title: 'RINGS'
        },
        {
            img: Necklaces,
            title: 'NECKLACES'
        }
    ];
    return (
        <div className='categorySec'>
            <div className='landingcatHeaderCont'>
                <h1>Shop by Category</h1>
                <p>Brilliant design and unparalleled craftsmanship.</p>
            </div>
            <div className='landingcatItemsCont'>
            {catItems.map((item, index) => (
                <div className='landingcatItem' key={index}>
                    <Link to="/category">
                        <img src={item.img} alt={item.title} />
                        <p>{item.title}</p>
                    </Link>
                </div>
            ))}
            </div>
        </div>
    );
};

export default CatSection;