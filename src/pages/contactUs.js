import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MapComp from '../components/MapComp';
import Banner from '../components/Banner';
import Contact from '../components/Contact';

function contactus({data}) {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Comex-{data.wpPage.title}</title>
            </Helmet>
            <Banner banner={data.wpPage.featuredImage.node.sourceUrl} altTxt={data.wpPage.featuredImage.node.altText} slug={data.wpPage.slug} slugLabel={data.wpPage.title} />
            <Contact />
            <MapComp />
        </Layout>
    );
}
export const query = graphql`
    query{
    wpPage(id: {eq: "cG9zdDoyOQ=="}) {
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
export default contactus;
