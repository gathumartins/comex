import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Connect from '../components/Connect';
import PropertiesSearch from '../components/PropertiesSearch';
import banner from '../../static/imgs/properties.jpg';

function properties() {
    return (
        <Layout>
            <Banner banner={banner}/>
            <PropertiesSearch/>
            <section className="py-14">
            <Container fluid={"lg"}>
            </Container>
            </section>
            <Connect />
        </Layout>
    );
}

export default properties;
