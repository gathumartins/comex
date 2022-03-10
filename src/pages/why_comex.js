import React from 'react';
import {Helmet} from 'react-helmet';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Connect from '../components/Connect';
import WhyAbout from '../components/WhyAbout';
import Banner from '../components/Banner';
import WhyMivi from '../components/WhyMivi';

function whyComex({data}) {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Comex-{data.wpPage.title}</title>
            </Helmet>
            <Banner banner={data.wpPage.featuredImage.node.sourceUrl} altTxt={data.wpPage.featuredImage.node.altText} slug={data.wpPage.slug} slugLabel={data.wpPage.title}/>
            <WhyAbout />
            <WhyMivi />
            <Connect />
        </Layout>
    );
}
export const query = graphql`
    query{
    wpPage(id: {eq: "cG9zdDoyMw=="}) {
        title
        slug
        uri
        featuredImage {
        node {
            sourceUrl
            altText
        }
        }
    },
    }
    `
export default whyComex;
