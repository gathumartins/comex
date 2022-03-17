import React from 'react';
import {Link} from 'gatsby';
import { Container } from 'react-bootstrap';

function WhyHome({ vidUrl, content, titles}) {
    return (
        <article className="pt-14">
            <section>
                <Container className="text-center mb-10 relative comexHeads">
                    <div className="comexLine z-0"></div>
                    <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl bg-white z-10 max-w-[240px] md:max-w-[400px] mx-auto">Why Comex <span className="text-comex-primary">Homes</span></h1>
                </Container>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 vidWhy">
                <div className="whyCont lg:w-[90%] ml-0 lg:ml-[10%] lg:px-5 text-sm font-spartan leading-7">
                    <ul className="flex justify-between whyList text-md mb-2 lg:text-lg xl:text-2xl">
                    {titles?.map((title, i) => 
                        <li key={i}>
                            <img src={title.icon.sourceUrl} className="mx-auto my-3 w-12" alt={title.icon.altText} />
                            <h1>{title.title}</h1>
                        </li>
                        )}
                    </ul>
                    <div className="mb-2" dangerouslySetInnerHTML={{ __html: content }}></div>
                    <div className="my-3">
                        <Link to="/why_comex" className="bg-comex-primary text-white text-md rounded-lg py-2 text-center inline-block w-[150px]">WHY US</Link>
                    </div>
                </div>
                <iframe className="w-full aspect-video rounded-xl" title="Why Comex Homes Video" src={vidUrl}></iframe>
            </section>
        </article>
    )
}

export default WhyHome