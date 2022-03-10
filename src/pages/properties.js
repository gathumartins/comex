import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
// import {Container} from 'react-bootstrap';
// import ReactPaginate from 'react-paginate';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Connect from '../components/Connect';
import PropertiesSearch from '../components/PropertiesSearch';

function properties({data}) {
    const properties = data.allWpCustomProperty.edges;
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Comex-{data.wpPage.title}</title>
            </Helmet>
            <Banner banner={data.wpPage.featuredImage.node.sourceUrl} altTxt={data.wpPage.featuredImage.node.altText} slug={data.wpPage.slug} slugLabel={data.wpPage.title} />
            <PropertiesSearch properties={properties}/>
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
        },  
      allWpCustomProperty(sort: {fields: date, order: DESC}) {
    edges {
      node {
        title
        id
        uri
        slug
        content
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        googleMap {
          apiKey
          coords {
            latitude
            longitude
          }
          pin
        }
        propertyInfo {
          location
          pricing {
            maxPrice
            minPrice
          }
          propertyGallery {
            altText
            sourceUrl
          }
          propertyprops {
            name
            value
          }
        }
      }
    }
  }
    }`
export default properties;
