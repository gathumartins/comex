import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Connect from '../components/Connect';
import Property from '../components/Property';
import ProcessTwo from '../components/ProcessTwo';


function ourprocess({data}) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    let processes = data.allWpCustomProcess.nodes;
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Comex-{data.wpPage.title}</title>
            </Helmet>
            <Banner banner={data.wpPage.featuredImage.node.sourceUrl} altTxt={data.wpPage.featuredImage.node.altText} slug={data.wpPage.slug} slugLabel={data.wpPage.title} />
            <header className="py-10">
                <Container className="text-center relative comexHeads">
                    <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl max-w-[400px] mx-auto">Our Process</h1>
                </Container>
            </header>
            <section className="relative processMain">
                <Container fluid={"lg"} className="gap-4 processTwo">
                    <ProcessTwo processes={processes}/>
                </Container>
            </section>
            <section className="py-14">
                <header className="py-10">
                    <Container className="text-center relative comexHeads">
                        <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl max-w-[400px] mx-auto">Featured Projects</h1>
                    </Container>
                </header>
                <Container fluid={"lg"}>
                    <Carousel 
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={1000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                     className="py-4">
                       
                    <div className="px-2">
                            <Property />
                    </div>

                        <div className="px-2">
                            <Property />
                        </div>

                        <div className="px-2">
                            <Property />
                        </div>

                        <div className="px-2">
                            <Property />
                        </div>
                    </Carousel>
                    
                </Container>
                <Container className="text-center mt-12 relative comexHeads">
                    <div className="comexLinetwo z-0"></div>
                    <a href="/properties" className="text-md text-white bg-comex-primary color:white z-10 max-w-[300px] mx-auto p-2 rounded">View all Property</a>
                </Container>
            </section>
            <Connect />
        </Layout>
    );
}
export const query = graphql`
query{
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
        }
        wpPage(id: {eq: "cG9zdDoyNg=="}) {
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
    }
`
export default ourprocess;
