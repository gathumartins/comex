import React from 'react';
import { Container } from 'react-bootstrap';

function WhyAbout({ vidUrl, whySub, content}) {
    return (
        <article className="py-10">
            <section>
                <Container className="text-center mb-10 relative comexHeads">
                    <h1 className="text-lg sm:text-4xl md:text-2xl lg:text-4xl bg-white z-10 max-w-[400px] mx-auto">Why Comex <span className="text-comex-primary">Homes</span></h1>
                    <p className="max-w-[600px] mx-auto my-3 text-md md:text-lg">{whySub}.</p>
                </Container>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 vidWhy">
                <div className="whyCont lg:w-[90%] ml-0 lg:ml-[10%] text-sm font-spartan leading-7">
                    <div className="mb-2" dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
                <iframe className="w-full aspect-video rounded-xl whyVid " title="Why Comex Homes Video" src={vidUrl}></iframe>
            </section>
        </article>
    )
}

export default WhyAbout;