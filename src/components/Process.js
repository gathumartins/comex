import React from 'react';
import { Container } from 'react-bootstrap';

function Process({ processes}) {

    return (
        <article className="py-14">
            <section>
                <Container className="text-center mb-16 relative comexHeads">
                    <div className="comexLine z-0"></div>
                    <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl bg-white z-10 max-w-[240px] md:max-w-[400px] mx-auto">Our Process</h1>
                </Container>
                <Container fluid={"lg"} className="flex justify-between gap-4 overflow-y-hidden overflow-x-scroll snap-x process">
            {processes?.map((process) => 
                <div key={process.id} className="h-full d-flex flex-column align-items-center align-self-center snap-center min-w-[70%] sm:min-w-[48%] md:win-w-[30%] lg:min-w-[22%] processInn">
                    <img src={process.featuredImage.node.sourceUrl} className="h-16" alt="comex homes process selection" />
                    <br />
                    <div className="w-full">
                        <h1 className="text-3xl">{process.title}</h1>
                        <div className="text-md" dangerouslySetInnerHTML={{ __html: process.content }}></div>
                    </div>
                </div>
            )}
                </Container>
            </section>
        </article>
    )
}

export default Process;