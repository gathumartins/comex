import React from 'react';
import { Container } from 'react-bootstrap';
import Property from './Property';

function Project({ properties}) {
    return (
        <article className="projects relative mt-0 py-[55px]">
            <Container fluid={"lg"} className="min-h-[400px] lg:min-h-[680px]">
                <div className="projectsInn lg:flex justify-between gap-5">
                    <div className="d-flex align-items-center md:max-w-[35%]">
                        <h1 className="text-white text-4xl md:text-5xl lg:text-4xl xl:text-6xl leading-24 font-spartan font-weight-500 text-uppercase inline-block align-middle mb-3">Our<br/> Projects</h1>
                    </div>
                    {properties?.map((property) =>
                        <Property className="flex-grow" key={property.node.id} title={property.node.title} location={property.node.propertyInfo.location} imgSrc={property.node.featuredImage.node.sourceUrl} altTxt={property.node.featuredImage.node.altText} propertyLink={property.node.uri} />

                    )}
                </div>
            </Container>
        </article>
    )
}

export default Project;