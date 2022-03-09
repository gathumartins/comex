import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/Layout"
import Slider from "../components/Slider";
import Project from "../components/Project"
import WhyHome from "../components/WhyHome";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";
import Connect from "../components/Connect";

// markup
const IndexPage = () => {
  const process = useStaticQuery(graphql`
            {
        allWpCustomProcess {
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
        }
        }
    `)

  let processes = process.allWpCustomProcess.nodes;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Comex-Home</title>
      </Helmet>
      <main className="relative">
        <Slider />
        <Project />
        <WhyHome />
        <Process processes={processes}/>
        <Testimonial />
        <Connect />
      </main>
    </Layout>
  )
}

export default IndexPage
