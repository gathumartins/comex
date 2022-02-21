import React from 'react';
import { Container } from 'react-bootstrap';

function WhyMivi() {
    return (
        <article className="relative testBack">
            <div className="py-14 relative bg-comex-primary/90 z-8">
                <Container fluid={'lg'}>
                    <section className="text-center">
                        <h1 className="text-2xl text-black mb-3">SEND MESSAGE</h1>
                        <p className="text-center max-w-[800px] mx-auto text-lg text-white">As Tsavorites, we believe you can invest and realize financial independence. Enabling you to achieve financial independence is our calling, that is why at the heart of TSAVO is a Philosophy we live by called TSAVOISM. </p>
                    </section>
                    <section className="md:flex justify-between gap-4 max-w-[800px] my-8 mx-auto">
                        <div>
                            <h1 className="text-2xl text-black mb-3">O1. MISSION</h1>
                            <p className="max-w-[350px] text-lg text-white">As Tsavorites, we believe you can invest and realize financial independence. </p>
                        </div>
                        <div>
                            <h1 className="text-2xl text-black mb-3">O2. VISION</h1>
                            <p className="max-w-[350px] text-lg text-white">As Tsavorites, we believe you can invest and realize financial independence. </p>
                        </div>
                    </section>
                </Container>
            </div>
        </article>
    )
}

export default WhyMivi