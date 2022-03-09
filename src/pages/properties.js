import React from 'react';
// import {Container} from 'react-bootstrap';
// import ReactPaginate from 'react-paginate';

import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Connect from '../components/Connect';
import PropertiesSearch from '../components/PropertiesSearch';
import banner from '../../static/imgs/properties.jpg';

function properties({data}) {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Comex-{data.wpPage.title}</title>
            </Helmet>
            <Banner banner={data.wpPage.featuredImage.node.sourceUrl} altTxt={data.wpPage.featuredImage.node.altText} slug={data.wpPage.slug} slugLabel={data.wpPage.title} />
            <PropertiesSearch/>
            {/* <section className="py-14">
            <Container fluid={"lg"}>
            </Container>
            </section>*/}
            <Connect />
        </Layout>
    );
}
export const query = graphql`
    query{
    wpPage(id: {eq: "cG9zdDoxOA=="}) {
        title
        slug
        uri
        featuredImage {
        node {
            sourceUrl
            altText
        }
        }
    }
    }`
export default properties;
