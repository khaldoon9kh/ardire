import React from 'react';
import './index.css';
import Earings from '../../imgs/earings.png';
import Bracelets from '../../imgs/bracelets.png';
import Rings from '../../imgs/rings.png';
import Necklaces from '../../imgs/nechlase.png';

const CatSection = () => {
    const catItems = [
        {
            img: Earings,
            title: 'Earings'
        },
        {
            img: Bracelets,
            title: 'Bracelets'
        },
        {
            img: Rings,
            title: 'Rings'
        },
        {
            img: Necklaces,
            title: 'Necklaces'
        }
    ];
    return (
        <div className='categorySec'>
            <div className='catHeaderCont'>
                <h1>Shop by Category</h1>
                <p>Brilliant design and unparalleled craftsmanship.</p>
            </div>
            <div className='catItemsCont'>
            {catItems.map((item, index) => (
                <div className='catItem' key={index}>
                    <img src={item.img} alt={item.title} />
                    <p>{item.title}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default CatSection;