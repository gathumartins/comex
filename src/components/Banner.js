import React from 'react';
import {Link} from 'gatsby';
import { Container } from 'react-bootstrap';

function Banner({ banner, altTxt, slug, slugLabel}) {
    return (
        <header className="h-[200px] lg:h-[350px] relative lg:-mt-40  transition-all bg-black">
            <img src={banner} className="object-cover h-full" alt={altTxt} />
            <section className="bg-comex-primary/70 text-white p-2 absolute w-full bottom-0">
                <Container>
                <ul className="flex justify-start gap-2 breadcrubs">
                        <li><Link to="/">Home</Link></li>&gt;
                        <li><Link to={slug}>{slugLabel}</Link></li>
                </ul>
                </Container>
            </section>
        </header>
    )
}

export default Banner