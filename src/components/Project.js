import React from 'react';
import { Container } from 'react-bootstrap';

function Project() {
    return (
        <article className="projects relative mt-0 py-14">
            <Container className="projectsInn grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 z-10">
                <div className="bg-comex-dark"></div>
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