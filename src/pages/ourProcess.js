import React from 'react';
import {Link} from 'gatsby';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Connect from '../components/Connect';
import banner from '../../static/imgs/process.jpg';
import Property from '../components/Property';


function ourProcess() {
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
    return (
        <Layout>
            <Banner banner={banner}/>
            <header className="py-10">
                <Container className="text-center relative comexHeads">
                    <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl max-w-[400px] mx-auto">Our Process</h1>
                </Container>
            </header>
            <section className="relative processMain">
                <Container fluid={"lg"} className="gap-4 processTwo">
                    <div className="processTwoInn">
                        <div className="h-full">
                            <div className="text-center inline-block">
                                <img src="./imgs/select.png" className="inline-block h-16" alt="comex homes process selection" />
                            </div>
                            <div className="proInner">
                                <h1 className="text-3xl">Selection</h1>
                                <p className="text-md">Select the project you want to invest in, number of units and typology of the units.</p>
                                <Link to="/schedule" className="viewLink">Schedule Viewing</Link>
                            </div>
                      </div>
                    </div>
                    <div className="processTwoInn">
                        <div className="proInner">
                            <div className="text-center">
                                <img src="./imgs/payment.png" className="inline-block h-16" alt="comex homes process payment" />
                            </div>
                            <div className="w-full">
                                <h1 className="text-3xl">Payment</h1>
                                <p className="text-md">Choose the best payment plan for you. Pay the 20% deposit and start paying in installments.</p>
                                <Link to="/schedule" className="viewLink">Schedule Viewing</Link>
                            </div>
                        </div>
                    </div>
                    <div className="processTwoInn">
                        <div className="h-full">
                            <div className="text-center">
                                <img src="./imgs/update.png" className="inline-block h-16" alt="comex homes process update" />
                            </div>
                            <div className="proInner">
                                <h1 className="text-3xl">Update</h1>
                                <p className="text-md">You are added to an email list where you’ll receive a weekly site update of the project until completion.</p>
                                <Link to="/schedule" className="viewLink">Schedule Viewing</Link>
                            </div>
                        </div>
                    </div>
                    <div className="processTwoInn">
                        <div className="h-full">
                           <div className="text-center">
                                <img src="./imgs/handover.png" className="inline-block h-16" alt="comex homes process handover" />
                           </div>
                            <div className="proInner">
                                <h1 className="text-3xl">Handover</h1>
                                <p className="text-md">After completion of project, we host a Grand Opening ceremony celebrating the completion and handover the unit to you.</p>
                                <Link to="/schedule" className="viewLink">Schedule Viewing</Link>
                            </div>
                        </div>
                    </div>
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

export default ourProcess;
