import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Connect from '../components/Connect';
import banner from '../../static/imgs/properties.jpg';

function properties() {
    return (
        <Layout>
            <Banner banner={banner}/>
            <Connect />
        </Layout>
    );
}

export default properties;
