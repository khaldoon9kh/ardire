import React from 'react';
import NavBar from '../../components/NavBar/index.jsx';
import LandingPage from '../../components/LandingPage/index.jsx';
import CatSection from '../../components/CatSection/index.jsx';
import HighlightSec from '../../components/HighlightSec/index.jsx';
import AboutUsSec from '../../components/AboutUsSec/index.jsx';
import InstaSec from '../../components/InstaSec/index.jsx';
import FeaturesSec from '../../components/FeaturesSec/index.jsx';
import Footer from '../../components/Footer/index.jsx';

const HomePage = () => {
    return (
            <div className="homePage">
                <NavBar />
                <LandingPage />
                <CatSection />
                <HighlightSec />
                <AboutUsSec />
                <InstaSec />
                <FeaturesSec />
                <Footer />
            </div>
        );
};

export default HomePage;