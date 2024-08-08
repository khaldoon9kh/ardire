import React from 'react';
import NavBar from '../../components/NavBar/index.jsx';
import LandingPage from '../../components/LandingPage/index.jsx';

const HomePage = () => {
    return (
            <div className="homePage">
                <NavBar />
                <LandingPage />
            </div>
        );
};

export default HomePage;