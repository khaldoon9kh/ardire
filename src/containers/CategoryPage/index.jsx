import React from 'react';
import CategoryHeader from '../../components/CategoryHeader/index.jsx';
import NavBar from '../../components/NavBar/index.jsx';
import Footer from '../../components/Footer/index.jsx';

const CategoryPage = () => {
    return (
            <div className="homePage">
                <NavBar />
                <CategoryHeader />
                <Footer />
            </div>
        );
};

export default CategoryPage;