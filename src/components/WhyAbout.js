import React from 'react';
import { Container } from 'react-bootstrap';

function WhyAbout() {
    return (
        <article className="py-10">
            <section>
                <Container className="text-center mb-10 relative comexHeads">
                    <h1 className="text-lg sm:text-4xl md:text-2xl lg:text-4xl bg-white z-10 max-w-[400px] mx-auto">Why Comex <span className="text-comex-primary">Homes</span></h1>
                    <p className="max-w-[600px] mx-auto my-3 text-md md:text-lg">We are a real estate investment company based in Nairobi, Kenya. We help people like you achieve financial independence through Affordable Amazing Apartments.</p>
                </Container>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 vidWhy">
                <div className="whyCont lg:w-[90%] ml-0 lg:ml-[10%] text-sm font-spartan leading-7">
                    <p>They say the biggest gift you can give your generation is a
                        good home. Well, we say the most significant gift you can give
                        your family, friend or yourself is a beautiful home; with all the
                        amenities and comforts.</p>
                    <p>Comex Homes is a leading home builder and developer
                        specializing in luxury homes located in Nairobi, Kenya. We
                        offer houses that are built with the best quality materials,
                        modern designs, and trendiest styles. We have been around
                        for more than a decade, so we know what it takes to build an
                        exquisite home.</p>
                    <p>Comex Homes has completed several projects successfully
                        across the country, with more due for completion soon.
                        We provide unmatched services, the best prices, quality
                        construction, and a fast turnaround.</p>

                    <div className="my-3">
                        <a href="/whyComex" className="bg-comex-primary text-white text-md rounded-lg p-3">WHY US</a>
                    </div>
                </div>
                <iframe className="w-full aspect-video rounded-xl whyVid " title="Why Comex Homes Video" src="https://www.youtube-nocookie.com/embed/Vjv7MqbRvtE"></iframe>
            </section>
        </article>
    )
}

export default WhyAbout;