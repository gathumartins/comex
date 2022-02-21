import React from 'react';
import { Container } from 'react-bootstrap';

function Banner() {
    return (
        <header className="md:h-[350px] relative lg:-mt-40">
            <img src="./imgs/banner.jpeg" className="object-cover bottom-0" alt="Comex homes inner Banner" />
            <section className="bg-comex-primary/60 text-white p-2 absolute w-full bottom-9">
                <Container>
                    <p>Home &gt; Inner Page</p>
                </Container>
            </section>
        </header>
    )
}

export default Banner