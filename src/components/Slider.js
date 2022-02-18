import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function Slider() {
    return (
        <Carousel fade className="md:-mt-40 z-0">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./imgs/sliderone.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Container className="lg:d-flex justify-around text-comex-primary">
                        <h3 className="text-2xl lg:text-4xl flex-grow lg:text-left lg:ml-12">#1 REAL ESTATE TEAM IN THE NATION</h3>
                        <p className="text-xl lg:w-[250px] lg:text-left lg:mr-12">RANKED BY REAL TRENDS FEATURED IN KENYA.</p>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./imgs/slidertwo.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <Container className="lg:flex justify-around text-comex-primary">
                        <h3 className="text-2xl lg:text-4xl flex-grow lg:text-left lg:ml-12">#1 REAL ESTATE TEAM IN THE NATION</h3>
                        <p className="text-xl lg:w-[250px] lg:text-left lg:mr-12">RANKED BY REAL TRENDS FEATURED IN KENYA.</p>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./imgs/sliderthree.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <Container className="lg:flex justify-around text-comex-primary">
                        <h3 className="text-2xl lg:text-4xl flex-grow lg:text-left lg:ml-12">#1 REAL ESTATE TEAM IN THE NATION</h3>
                        <p className="text-xl lg:w-[250px] lg:text-left lg:mr-12">RANKED BY REAL TRENDS FEATURED IN KENYA.</p>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider