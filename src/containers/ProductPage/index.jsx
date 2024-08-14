import React from 'react';
import NavBar from '../../components/NavBar/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import ProductHeader from '../../components/ProductHeader/index.jsx';

const ProductPage = () => {
    return (
            <div className="homePage">
                <NavBar />
                <ProductHeader />
                <Footer />
            </div>
        );
};

export default ProductPage;