import React from 'react';
import Layout from '../components/Layout';
import Connect from '../components/Connect';
import WhyAbout from '../components/WhyAbout';
import Banner from '../components/Banner';
import WhyMivi from '../components/WhyMivi';

function whyComex() {
    return (
        <Layout>
            <Banner />
            <WhyAbout />
            <WhyMivi />
            <Connect />
        </Layout>
    );
}

export default whyComex;
