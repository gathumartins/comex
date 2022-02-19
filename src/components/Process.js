import React from 'react';
import { Container } from 'react-bootstrap';

function Process() {
    return (
        <article className="py-10">
            <section>
                <Container className="text-center mb-12 relative comexHeads">
                    <div className="comexLine z-0"></div>
                    <h1 className="text-4xl bg-white z-10 max-w-[400px] mx-auto">Our Process</h1>
                </Container>
                <Container fluid={"lg"} className="flex justify-between gap-4 overflow-y-hidden overflow-x-scroll">
                    <div className="h-full d-flex flex-column align-items-center align-self-center processInn">
                        <img src="./imgs/select.png" className="h-16" alt="comex homes process selection" />
                        <br />
                        <div className="w-full">
                            <h1 className="text-3xl">Selection</h1>
                            <p className="text-md">Select the project you want to invest in, number of units and typology of the units.</p>
                        </div>
                    </div>
                    <div className="h-full d-flex flex-column align-items-center align-self-center processInn">
                        <img src="./imgs/payment.png" className="h-16" alt="comex homes process payment" />
                        <br />
                        <div className="w-full">
                            <h1 className="text-3xl">Payment</h1>
                            <p className="text-md">Choose the best payment plan for you. Pay the 20% deposit and start paying in installments.</p>
                        </div>
                    </div>
                    <div className="h-full d-flex flex-column align-items-center align-self-center processInn">
                        <img src="./imgs/update.png" className="h-16" alt="comex homes process update" />
                        <br />
                        <div className="w-full">
                            <h1 className="text-3xl">Update</h1>
                            <p className="text-md">You are added to an email list where you’ll receive a weekly site update of the project until completion.</p>
                        </div>
                    </div>
                    <div className="h-full d-flex flex-column align-items-center align-self-center processInn">
                        <img src="./imgs/handover.png" className="h-16" alt="comex homes process handover" />
                        <br />
                        <div className="w-full">
                            <h1 className="text-3xl">Handover</h1>
                            <p className="text-md">After completion of project, we host a Grand Opening ceremony celebrating the completion and handover the unit to you.</p>
                        </div>
                    </div>
                    <div className="h-full d-flex flex-column align-items-center align-self-center processInn">
                        <img src="./imgs/handover.png" className="h-16" alt="comex homes process handover" />
                        <br />
                        <div className="w-full">
                            <h1 className="text-3xl">Handover</h1>
                            <p className="text-md">After completion of project, we host a Grand Opening ceremony celebrating the completion and handover the unit to you.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </article>
    )
}

export default Process