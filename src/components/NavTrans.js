import React from 'react';
import { Container } from 'react-bootstrap';

function NavTrans() {
    return (
        <nav className="py-8 backdrop-blur-sm bg-white/40 shadow-lg">
            <Container>
                <ul className='d-flex align-items-center justify-around lg:text-2xl'>
                    <li><a href="properties" className="hover:text-comex-primary text-uppercase">Properties</a></li>
                    <li><a href="whyComex" className="hover:text-comex-primary text-uppercase">Why Comex</a></li>
                    <li><a href="/"><img src="./imgs/logo.png" alt="Comex Homes logo" className="h-24" /></a></li>
                    <li><a href="ourProcess" className="hover:text-comex-primary text-uppercase">Our Process</a></li>
                    <li><a href="contactUs" className="hover:text-comex-primary text-uppercase">Contact Us</a></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavTrans;