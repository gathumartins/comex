import React from 'react';
import { Container } from 'react-bootstrap';

function NavSolid() {
    return (
        <nav className="backdrop-blur-lg bg-white/80 py-2">
            <Container>
                <ul className='d-flex align-items-center justify-around font-spartan text-black'>
                    <li><a href="properties" className="hover:text-comex-primary text-uppercase">Properties</a></li>
                    <li><a href="whyComex" className="hover:text-comex-primary text-uppercase">Why Comex</a></li>
                    <li className="order-first hover:text-comex-primary text-uppercase"><a href="/"><img src="./imgs/logo.png" alt="Comex Homes logo" className="h-16" /></a></li>
                    <li><a href="ourProcess" className="hover:text-comex-primary text-uppercase">Our Process</a></li>
                    <li><a href="contactUs" className="hover:text-comex-primary text-uppercase">Contact Us</a></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavSolid;