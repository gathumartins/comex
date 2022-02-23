import React from 'react';
import Layout from '../components/Layout';
import MapComp from '../components/MapComp';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import banner from '../../static/imgs/contact.jpg';

function contactUs() {
    return (
        <Layout>
            <Banner banner={banner}/>
            <Contact />
            <MapComp />
        </Layout>
    );
}

export default contactUs;
