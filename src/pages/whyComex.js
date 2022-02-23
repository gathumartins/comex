import React from 'react';
import Layout from '../components/Layout';
import Connect from '../components/Connect';
import WhyAbout from '../components/WhyAbout';
import Banner from '../components/Banner';
import WhyMivi from '../components/WhyMivi';
import banner from '../../static/imgs/whyus.jpg';

function whyComex() {
    return (
        <Layout>
            <Banner banner={banner} />
            <WhyAbout />
            <WhyMivi />
            <Connect />
        </Layout>
    );
}

export default whyComex;
