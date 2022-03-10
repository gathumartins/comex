import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function Slider({bigCap, smallCap, images}) {
    return (
        <Carousel fade className="md:-mt-40 z-0">
         {images?.map((slide, i) =>
             <Carousel.Item key={i}>
                <img className="d-block w-full" src={slide.image.sourceUrl} alt={slide.image.altText} />
                <Carousel.Caption>
                    <Container className="lg:flex justify-around text-comex-primary">
                        <h3 className="text-md md:text-2xl lg:text-3xl xl:text-4xl flex-grow lg:text-left lg:ml-12">{bigCap}</h3>
                        <p className="text-sm md:text-xl lg:w-[300px] lg:text-left lg:mr-12">{smallCap}</p>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
            
            )}
        </Carousel>
    )
}

export default Slider