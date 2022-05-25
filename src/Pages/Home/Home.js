import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import Products from './Products'
import Reviews from './Reviews';
import ShortDiscription from './ShortDiscription';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ShortDiscription></ShortDiscription>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;