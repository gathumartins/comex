import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Connect from '../components/Connect';
import banner from '../../static/imgs/process.jpg';


function ourProcess() {
    return (
        <Layout>
            <Banner banner={banner}/>
            <Connect />
        </Layout>
    );
}

export default ourProcess;
