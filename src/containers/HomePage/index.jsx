import React from 'react';
import NavBar from '../../components/NavBar/index.jsx';
import LandingPage from '../../components/LandingPage/index.jsx';
import CatSection from '../../components/CatSection/index.jsx';

const HomePage = () => {
    return (
            <div className="homePage">
                <NavBar />
                <LandingPage />
                <CatSection />
            </div>
        );
};

export default HomePage;