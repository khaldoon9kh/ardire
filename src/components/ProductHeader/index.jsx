import React, {useEffect, useState} from 'react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ShoppingBag from '../../svgs/shoppingBag.svg';
import FeaturesSec from '../FeaturesSec/index.jsx';
import iconicEarings1 from "../../imgs/iconicEarings.png";
import iconicEarings2 from '../../imgs/iconicEarings2.webp';
import iconicEarings3 from '../../imgs/iconicEarings3.webp';
import descImage from '../../imgs/discriptionImg.webp';
import iconicNecklace1 from '../../imgs/iconicNecklace1.webp';
import iconicNecklace2 from '../../imgs/iconicNecklace2.webp';
import iconicNecklace3 from '../../imgs/iconicNecklace3.webp';
import iconicRing1 from '../../imgs/iconicRing1.png';
import iconicRing2 from '../../imgs/iconicRing2.webp';   
import iconicRing3 from '../../imgs/iconicRing3.webp';
import Earingsv2 from '../../imgs/Earingsv2.webp';


const ProductHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const youMayLikeSlides = [
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

    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
        };
    
        if (isModalOpen) {
            // Disable scrolling when the dialog is open
            document.body.style.overflow = 'hidden';
            window.addEventListener('scroll', handleScroll, { passive: false });
        } else {
            // Re-enable scrolling when the dialog is closed
            document.body.style.overflow = 'auto';
            window.removeEventListener('scroll', handleScroll);
        }
    
        return () => {
            // Clean up the event listener when the component unmounts or isModalOpen changes
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isModalOpen]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    const productPic = () => {
        return (
            <div className='prodpicCont'>
                <Swiper 
                navigation={true} 
                modules={[Navigation]} 
                className="productSwiper"
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
                // pagination={{ clickable: true }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className='prodSlideCont'>
                                <img 
                                    src={slide.img} 
                                    alt={slide.title} 
                                    onClick={handleOpenModal}
                                />
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
                <p className='prodDescP'>
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
                        <p>
                            Add to Bag
                        </p>
                        <img src={ShoppingBag} alt='Shopping Bag' />
                    </button>
                </div>
            </div>
        );
    }

    const productDesc = () => {
        return (
            <div className='prodDes'>
                <div className='descTextCont'>
                    <h1>Product Description</h1>
                    <p>
                        A trio of contrasting diamond flowers blossom upon our Wild Flower ring, arrayed in stylish asymmetry. Freed from tradition, the three different styles of flower bloom with a wild touch, unique down to each delicate diamond petal.
                    </p>
                    <p>
                        The Wild Flower collection is an invitation to escape into a garden that grows just for you. From individual blooms to floral clusters and blossoms laid out in a row, each Wild Flower jewel is a statement of delicacy and of empowerment, designed to be worn in profusion.
                    </p>
                    <p>
                        A joyful Wild Flower diamond ring with a total weight of approximately 0.86 carats.
                    </p>
                </div>
                <div className='descImgCont'>
                    <img src={descImage} alt='Description Image' />
                </div>
            </div>
        );
    }

    const youMayLike = () => {
        return (
            <div className='youMayLikeCont'>
                <h1>You May Also Like</h1>
                <div className='youMayLikeItems'>
                    <Swiper 
                    navigation={true} 
                    modules={[Navigation]} 
                    className="productSwiper"
                    slidesPerView={3}
                    spaceBetween={50}
                    loop={true}
                    
                    >
                        {youMayLikeSlides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className='prodSlideCont'>
                                    <img src={slide.img} alt={slide.title} />
                                    <p>{slide.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        );
    }

    // const handleCloseModal = () => {
        
    //     const dialog = document.querySelector('.zoomImgDialog');
    //     dialog.close();
    // }

    const zoomInImg = () => {
        return (
            <div className='zoomInImgCont'>
                <div 
                    className='zoomInHeader'
                    onClick={handleCloseModal}
                    
                >
                    <p>X</p>
                </div>
                <div className='zoomInSwiper'>
                    <Swiper 
                    navigation={true} 
                    modules={[Navigation, Pagination]} 
                    className="productSwiper"
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className='zoomSlideCont'>
                                    <img src={slide.img} alt={slide.title} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        );
    }


    return (
        <div className='prodHeaderCont'>
            {isModalOpen && (
                <dialog className='zoomImgDialog' open>
                    {zoomInImg()}
                </dialog>
            )}
            <div className='prodHeader'>
                {productPic()}
                {productInfo()}
            </div>
            <div className='prodDescCont'>
                {productDesc()}
            </div>
            <div className='youMayLike'>
                {youMayLike()}
            </div>
            <FeaturesSec />
        </div>
    );
};

export default ProductHeader;