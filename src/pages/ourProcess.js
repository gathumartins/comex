import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Connect from '../components/Connect';
import banner from '../../static/imgs/process.jpg';


function ourProcess() {
    return (
        <Layout>
            <Banner banner={banner}/>
            <header className="py-10">
                <Container className="text-center relative comexHeads">
                    <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl max-w-[400px] mx-auto">Our Process</h1>
                </Container>
            </header>
            <section className="relative processMain">
                <Container fluid={"lg"} className="gap-4 processTwo">
                    <div className="processTwoInn">
                        <div className="h-full">
                            <div className="text-center inline-block">
                                <img src="./imgs/select.png" className="inline-block h-16" alt="comex homes process selection" />
                            </div>
                            <div className="proInner">
                                <h1 className="text-3xl">Selection</h1>
                                <p className="text-md">Select the project you want to invest in, number of units and typology of the units.</p>
                                <a href="/" className="viewLink">Schedule Viewing</a>
                            </div>
                      </div>
                    </div>
                    <div className="processTwoInn">
                        <div className="proInner">
                            <div className="text-center">
                                <img src="./imgs/payment.png" className="inline-block h-16" alt="comex homes process payment" />
                            </div>
                            <div className="w-full">
                                <h1 className="text-3xl">Payment</h1>
                                <p className="text-md">Choose the best payment plan for you. Pay the 20% deposit and start paying in installments.</p>
                                <a href="/" className="viewLink">Schedule Viewing</a>
                            </div>
                        </div>
                    </div>
                    <div className="processTwoInn">
                        <div className="h-full">
                            <div className="text-center">
                                <img src="./imgs/update.png" className="inline-block h-16" alt="comex homes process update" />
                            </div>
                            <div className="proInner">
                                <h1 className="text-3xl">Update</h1>
                                <p className="text-md">You are added to an email list where you’ll receive a weekly site update of the project until completion.</p>
                                <a href="/" className="viewLink">Schedule Viewing</a>
                            </div>
                        </div>
                    </div>
                    <div className="processTwoInn">
                        <div className="h-full">
                           <div className="text-center">
                                <img src="./imgs/handover.png" className="inline-block h-16" alt="comex homes process handover" />
                           </div>
                            <div className="proInner">
                                <h1 className="text-3xl">Handover</h1>
                                <p className="text-md">After completion of project, we host a Grand Opening ceremony celebrating the completion and handover the unit to you.</p>
                                <a href="/" className="viewLink">Schedule Viewing</a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <Connect />
        </Layout>
    );
}

export default ourProcess;
