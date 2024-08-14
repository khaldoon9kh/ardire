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
                            {/* <p>{slide.title}</p> */}
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
                <div className='prodAddressCont'
                >
                    <p>Home / Earings / Iconic Earings</p>
                </div>

                <h1 className='prodTitle'>
                    Juste un Clou Ring
                </h1>
                <p className='prodDesc'>
                    Juste un Clou ring, white gold (750/1000), set with 77 brilliant-cut diamonds totaling 0.59 carat. Width: 1.8 mm (for size 52).
                </p>
                <p className='sizeLink'>Size Guide</p>
                <div className='sizeCont'>
                    <div className='priceCont'>
                        <p>$3,000</p>
                    </div>
                    <div className='selectSizeCont'>
                        <select>
                            <option value={null}>Select Size</option>
                            <option value="52">52 MM</option>
                            <option value="54">54 MM</option>
                            <option value="56">56 MM</option>
                        </select>
                    </div>
                </div>
                <div className='btnCont'>
                    <button>
                        Add to Cart
                    </button>
                </div>
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