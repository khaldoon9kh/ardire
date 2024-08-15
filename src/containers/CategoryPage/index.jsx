import React from 'react';
import CategoryHeader from '../../components/CategoryHeader/index.jsx';
import CategoryBody from '../../components/Categorybody/index.jsx';
import NavBar from '../../components/NavBar/index.jsx';
import FeaturesSec from '../../components/FeaturesSec/index.jsx';
import Footer from '../../components/Footer/index.jsx';

const CategoryPage = () => {
    return (
            <div className="CategoryPage">
                <NavBar />
                <CategoryHeader />
                <CategoryBody />
                <FeaturesSec />
                <Footer />
            </div>
        );
};

export default CategoryPage;