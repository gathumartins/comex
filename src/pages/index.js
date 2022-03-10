import * as React from "react";
import { Helmet } from "react-helmet";
import {  graphql } from 'gatsby';
import Layout from "../components/Layout"
import Slider from "../components/Slider";
import Project from "../components/Project"
import WhyHome from "../components/WhyHome";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";
import Connect from "../components/Connect";

// markup
const indexpage = ({data}) => {

  let processes = data.allWpCustomProcess.nodes;
  const properties = data.allWpCustomProperty.edges;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Comex-Home</title>
      </Helmet>
      <main className="relative">
        <Slider bigCap={data.wpPage.homeSlider.bigCaption} smallCap={data.wpPage.homeSlider.smallCaption} images={data.wpPage.homeSlider.images}/>
        <Project properties={properties}/>
        <WhyHome vidUrl={data.wpPage.whyComex.video} content={data.wpPage.content} titles={data.wpPage.whyComex.titles}/>
        <Process processes={processes}/>
        <Testimonial />
        <Connect />
      </main>
    </Layout>
  )
}

export const query = graphql `
query{
      wpPage(id: {eq: "cG9zdDoxMA=="}) {
          whyComex {
            video
            titles {
              title
              icon {
                altText
                sourceUrl
              }
            }
          }
          content
          homeSlider {
            bigCaption
            smallCaption
            images {
              image {
                altText
                sourceUrl
              }
            }
          }
      },
        allWpCustomProcess(sort: {order: DESC, fields: date}){
            nodes {
            content
            id
            title
            featuredImage {
                node {
                sourceUrl
                }
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
        }
`
export default indexpage
