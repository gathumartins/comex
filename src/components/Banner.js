import React from 'react';
import { Container } from 'react-bootstrap';

function Banner({banner}) {
    return (
        <header className="h-[200px] lg:h-[350px] relative lg:-mt-40  transition-all bg-black">
            <img src={banner} className="object-cover h-full" alt="Comex homes inner Banner" />
            <section className="bg-comex-primary/60 text-white p-2 absolute w-full bottom-0">
                <Container>
                    <p>Home &gt; Inner Page</p>
                </Container>
            </section>
        </header>
    )
}

export default Banner