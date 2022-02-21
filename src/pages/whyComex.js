import React from 'react';
import Layout from '../components/Layout';
import Connect from '../components/Connect';
import WhyAbout from '../components/WhyAbout';
import Slider from '../components/Slider';

function whyComex() {
    return (
        <Layout>
            <Slider />
            <WhyAbout />
            <Connect />
        </Layout>
    );
}

export default whyComex;
