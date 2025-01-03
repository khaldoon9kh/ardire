import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css';
import iconicEarings1 from "../../imgs/iconicEarings.png";
import iconicEarings2 from '../../imgs/iconicEarings2.webp';
import iconicEarings3 from '../../imgs/iconicEarings3.webp';
import iconicNecklace1 from '../../imgs/iconicNecklace1.webp';
import iconicNecklace2 from '../../imgs/iconicNecklace2.webp';
import iconicNecklace3 from '../../imgs/iconicNecklace3.webp';
import iconicRing1 from '../../imgs/iconicRing1.png';
import iconicRing2 from '../../imgs/iconicRing2.webp';   
import iconicRing3 from '../../imgs/iconicRing3.webp';
import Earingsv2 from '../../imgs/Earingsv2.webp' 
import { click } from '@testing-library/user-event/dist/click';
import { Link } from 'react-router-dom';

const HighlightSec = () => {

    const slides = [
        {
            img: iconicEarings1,
            title: 'Iconic Earings',
        },
        {
            img: iconicEarings2,
            title: 'Iconic Earings',
        },
        {
            img: iconicEarings3,
            title: 'Iconic Earings',
        },
        {
            img: iconicNecklace1,
            title: 'Iconic Necklace',
        },
        {
            img: iconicNecklace2,
            title: 'Iconic Necklace',
        },
        {
            img: iconicNecklace3,
            title: 'Iconic Necklace',
        },
        {
            img: iconicRing1,
            title: 'Iconic Ring',
        },
        {
            img: iconicRing2,
            title: 'Iconic Ring',
        },
        {
            img: iconicRing3,
            title: 'Iconic Ring',
        },
        {
            img: Earingsv2,
            title: 'Iconic Earings',
        },
    ]

    return (
        <div className='highlightSec'>
            <div className='highlightHeaderCont'>
                <h1>The Ardire Icons</h1>
                <p>Modern jewels that defy the decades</p>
            </div>
            <div className='sliderCont'>
            <Swiper 
                navigation={true} 
                modules={[Navigation, Pagination]} 
                className="mySwiper"
                slidesPerView={window.innerWidth < 768 ? 1 : 3} // Change value to 1 for mobile devices
                loop={true}
                pagination={{ clickable: true, dynamicBullets: true }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='slideCont'>
                            <Link to="/product">
                                <img src={slide.img} alt={slide.title} />
                                <p>{slide.title}</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
};

export default HighlightSec;