import React from 'react';
import NavBar from '../../components/NavBar/index.jsx';
import LandingPage from '../../components/LandingPage/index.jsx';
import CatSection from '../../components/CatSection/index.jsx';
import HighlightSec from '../../components/HighlightSec/index.jsx';
import AboutUsSec from '../../components/AboutUsSec/index.jsx';
import InstaSec from '../../components/InstaSec/index.jsx';

const HomePage = () => {
    return (
            <div className="homePage">
                <NavBar />
                <LandingPage />
                <CatSection />
                <HighlightSec />
                <AboutUsSec />
                <InstaSec />
            </div>
        );
};

export default HomePage;