import React from 'react';
import { Container } from 'react-bootstrap';
import Property from '../components/Property';

function Project() {
    return (
        <article className="projects relative mt-0 py-[55px]">
            <Container fluid={"lg"} className="min-h-[680px]">
                <div className="projectsInn grid md:grid-cols-2 lg:grid-cols-3 gap-1 z-10">
                    <div className="d-flex align-items-center">
                        <h1 className="text-white text-4xl md:text-5xl lg:text-4xl xl:text-6xl leading-24 font-spartan font-weight-500 text-uppercase inline-block align-middle mb-3">Our<br/> Projects</h1>
                    </div>
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                </div>
            </Container>
        </article>
    )
}

export default Project;