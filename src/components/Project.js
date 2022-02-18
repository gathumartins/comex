import React from 'react';
import { Container } from 'react-bootstrap';

function Project() {
    return (
        <article className="projects relative mt-0 py-14">
            <Container className="projectsInn grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 z-10">
                <div className="d-flex align-items-center">
                    <span className="text-white text-4xl lg:text-5xl xl:text-6xl leading-24 font-spartan font-weight-500 text-uppercase inline-block align-middle">Our Projects</span>
                </div>
                <div className="bg-comex-dark"></div>
                <div className="bg-comex-dark"></div>
                <div className="bg-comex-dark"></div>
                <div className="bg-comex-dark"></div>
                <div className="bg-comex-dark"></div>
            </Container>
        </article>
    )
}

export default Project