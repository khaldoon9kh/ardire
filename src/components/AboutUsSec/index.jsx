import React from 'react';
import './index.css';
import AboutUsImg from "../../imgs/aboutUs.webp"

const AboutUsSec = () => {
    return (
        <div className='aboutUSCont'>
            <div className='aboutUsImg'>
                <img src={AboutUsImg} alt="AboutUS Image" />
            </div>
            <div className='aboutUsText'>
                <h1>THE DUALISM OF MILAN</h1>
                <p>Pomellato embarks on a captivating creative journey, drawing inspiration from Milan.
                    <br/>
                    It was here, in 1967, that the brand first took root and now the Maison unveils its fifth high jewelry collection – a tribute to the city's indomitable spirit and mesmerizing duality.
                </p>
            </div>
        </div>
    );
};

export default AboutUsSec;