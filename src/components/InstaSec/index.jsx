import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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

const InstaSec = () => {

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
        <div className='InstaSec'>
            <div className='catHeaderCont'>
                <h1>Shop @Ardire</h1>
            </div>
            <div className='sliderCont'>
            <Swiper 
                navigation={true} 
                modules={[Navigation]} 
                className="mySwiper"
                slidesPerView={4}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='instaslideCont'>
                            <img src={slide.img} alt={slide.title} />
                            <p>{slide.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
};

export default InstaSec;