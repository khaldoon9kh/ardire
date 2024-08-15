import React from 'react';
import './index.css';
import LandingImg from "../../imgs/landingImg.webp"
import iconicEarings1 from "../../imgs/iconicEarings.png";
import iconicEarings2 from '../../imgs/iconicEarings2.webp';
import iconicEarings3 from '../../imgs/iconicEarings3.webp';
import iconicNecklace1 from '../../imgs/iconicNecklace1.webp';
import iconicNecklace2 from '../../imgs/iconicNecklace2.webp';
import iconicNecklace3 from '../../imgs/iconicNecklace3.webp';
import iconicRing1 from '../../imgs/iconicRing1.png';
import iconicRing2 from '../../imgs/iconicRing2.webp';   
import iconicRing3 from '../../imgs/iconicRing3.webp';
import Earingsv2 from '../../imgs/Earingsv2.webp';
import ADD1 from '../../imgs/advertize1.webp';
import ADD2 from '../../imgs/advertize2.webp';

const CategoryBody = () => {
    
    const slides = [
        {
            img: iconicEarings1,
            title: 'Iconic Earings',
            materialType: 'Gold',
            price: 99.99,
            order: 1
        },
        {
            img: iconicEarings2,
            title: 'Iconic Earings',
            materialType: 'Silver',
            price: 79.99,
            order: 2
        },
        {
            img: iconicEarings3,
            title: 'Iconic Earings',
            materialType: 'Rose Gold',
            price: 89.99,
            order: 3
        },
        {
            img: iconicNecklace1,
            title: 'Iconic Necklace',
            materialType: 'Gold',
            price: 149.99,
            order: 4
        },
        {
            img: iconicNecklace2,
            title: 'Iconic Necklace',
            materialType: 'Silver',
            price: 129.99,
            order: 5
        },
        {
            img: iconicNecklace3,
            title: 'Iconic Necklace',
            materialType: 'Rose Gold',
            price: 139.99,
            order: 6
        },
        {
            img: iconicRing1,
            title: 'Iconic Ring',
            materialType: 'Gold',
            price: 199.99,
            order: 7
        },
        {
            img: iconicRing2,
            title: 'Iconic Ring',
            materialType: 'Silver',
            price: 179.99,
            order: 8
        },
        {
            img: iconicRing3,
            title: 'Iconic Ring',
            materialType: 'Rose Gold',
            price: 189.99,
            order: 9
        },
        {
            img: Earingsv2,
            title: 'Iconic Earings',
            materialType: 'Gold',
            price: 109.99,
            order: 10
        },
        {
            img: iconicEarings3,
            title: 'Iconic Earings',
            materialType: 'Rose Gold',
            price: 89.99,
            order: 11
        },
        {
            img: iconicNecklace1,
            title: 'Iconic Necklace',
            materialType: 'Gold',
            price: 149.99,
            order: 12
        },
        {
            img: iconicNecklace2,
            title: 'Iconic Necklace',
            materialType: 'Silver',
            price: 129.99,
            order: 13
        },
        {
            img: iconicEarings3,
            title: 'Iconic Earings',
            materialType: 'Rose Gold',
            price: 89.99,
            order: 14
        },
        {
            img: iconicNecklace1,
            title: 'Iconic Necklace',
            materialType: 'Gold',
            price: 149.99,
            order: 15
        },
        {
            img: iconicNecklace2,
            title: 'Iconic Necklace',
            materialType: 'Silver',
            price: 129.99,
            order: 16
        }
    ]

    const advertismentSlides = [
        {
            img:ADD1,
            id:"add1",
        },
        {
            img:ADD2,
            id:"add2",
        }
    ]

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

    const productCell = (slide) => {
        return (
            <div className='productCell'>
                <img src={slide.img} alt={slide.title} />
                <h3>{slide.title}</h3>
                <p className='materialText'>{slide.materialType}</p>
                <p className='prodPriceText'>${slide.price}</p>
            </div>
        )
    }

    const advertisCell = (index) => {

        const ad = index > 4 ?  advertismentSlides[1] : advertismentSlides[0];

        return (
            <div className="addcertiseCont">
                <img src={ad.img} alt="Bell Icon" />
            </div>
        )
    }

    return (
        <div className='categoryBodyCont'>
            {sortByComponent()}
            <div className='productCells'>
                {slides.map((slide, index) => {
                    if (index === 4 || index === 12) {
                        return (
                            <>
                                {advertisCell(index)}
                                {productCell(slide)}
                            </>
                        );
                    }
                    return productCell(slide);
                })}
            </div>
        </div>
    );
};

export default CategoryBody;