import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Schedule from '../components/Schedule';
import banner from '../../static/imgs/booking.jpg';

function schedule() {
    return (
        <Layout>
            <Banner banner={banner}/>
            <Schedule />
        </Layout>
    )
}

export default schedule;