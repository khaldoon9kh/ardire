import React from 'react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import iconicEarings1 from "../../imgs/iconicEarings.png";
import iconicEarings2 from '../../imgs/iconicEarings2.webp';
import iconicEarings3 from '../../imgs/iconicEarings3.webp';

const ProductHeader = () => {
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
        }
    ]

    const productPic = () => {
        return (
            <div className='prodpicCont'>
                {/* <img src={iconicEarings1} alt='Iconic Earings' />
                <img src={iconicEarings2} alt='Iconic Earings' /> */}
                <Swiper 
                navigation={true} 
                modules={[Navigation]} 
                className="productSwiper"
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='prodSlideCont'>
                            <img src={slide.img} alt={slide.title} />
                            <p>{slide.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        );
    }

    const productInfo = () => {
        return (
            <div className='prodInfoCont'>
                <h1>Product Name</h1>
                <p>Product Description</p>
                <button>Add to Cart</button>
            </div>
        );
    }


    return (
        <div className='prodHeaderCont'>
            {productPic()}
            {productInfo()}
        </div>
    );
};

export default ProductHeader;