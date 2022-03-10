import React from 'react';
import { Container } from 'react-bootstrap';

function WhyMivi({coInfo}) {
    return (
        <article className="relative testBack">
            <div className="py-14 relative bg-comex-primary/90 z-8">
                <Container fluid={'lg'}>
                    <section className="text-center">
                        <h1 className="text-2xl text-black mb-3">{coInfo.message.title}</h1>
                        <p className="text-center max-w-[800px] mx-auto text-lg text-white">{coInfo.message.info}</p>
                    </section>
                    <section className="md:flex justify-between gap-4 max-w-[800px] my-8 mx-auto">
                        <div>
                            <h1 className="text-2xl text-black mb-3">{coInfo.mission.title}</h1>
                            <p className="max-w-[350px] text-lg text-white">{coInfo.mission.info}</p>
                        </div>
                        <div>
                            <h1 className="text-2xl text-black mb-3">{coInfo.vision.title}</h1>
                            <p className="max-w-[350px] text-lg text-white">{coInfo.vision.info} </p>
                        </div>
                    </section>
                </Container>
            </div>
        </article>
    )
}

export default WhyMivi