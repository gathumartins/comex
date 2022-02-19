import React from 'react';
import { Container } from 'react-bootstrap';

function WhyHome() {
    return (
        <article className="py-10">
            <section>
                <Container className="text-center mb-10 relative comexHeads">
                    <div className="comexLine z-0"></div>
                    <h1 className="text-4xl bg-white z-10 max-w-[400px] mx-auto">Why Comex <span className="text-comex-primary">Homes</span></h1>
                </Container>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="whyCont lg:w-[90%] ml-[10%] text-sm font-spartan leading-7">
                    <ul className="flex justify-between whyList text-2xl">
                        <li>
                            <img src="./imgs/build.png" className="mx-auto my-3 w-12" alt="Comex Homes Build Icon" />
                            <h1>WE BUILD.</h1>
                        </li>
                        <li>
                            <img src="./imgs/sell.png" className="mx-auto my-3 w-12" alt="Comex Sell Build Icon" />
                            <h1>WE SELL.</h1>
                        </li>
                        <li><img src="./imgs/manage.png" className="mx-auto my-3 w-12" alt="Comex Manage Build Icon" />
                            <h1>WE MANAGE</h1>
                        </li>
                    </ul>
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
                <iframe className="w-full aspect-video rounded-lg whyVid" title="Why Comex Homes Video" src="https://www.youtube.com/embed/Vjv7MqbRvtE"></iframe>
            </section>
        </article>
    )
}

export default WhyHome