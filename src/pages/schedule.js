import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Schedule from '../components/Schedule';

function schedule() {
    return (
        <Layout>
            <Banner />
            <Schedule />
        </Layout>
    )
}

export default schedule;