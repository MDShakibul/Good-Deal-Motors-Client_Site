import React from 'react';
import Banner from './Banner';
import Products from './Products'
import Purchases from './Purchases';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Purchases></Purchases>
        </div>
    );
};

export default Home;