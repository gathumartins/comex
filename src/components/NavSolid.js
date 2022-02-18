import React from 'react';
import { Container } from 'react-bootstrap';

function NavSolid() {
    return (
        <nav className="backdrop-blur-lg bg-white/80 py-2">
            <Container>
                <ul className='d-flex align-items-center justify-around font-spartan text-black'>
                    <li><a href="properties">Properties</a></li>
                    <li><a href="whyComex">Why Comex</a></li>
                    <li className='order-first'><a href="/"><img src="./imgs/logo.png" alt="Comex Homes logo" className="h-16" /></a></li>
                    <li><a href="ourProcess">Our Process</a></li>
                    <li><a href="contactUs">Contact Us</a></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavSolid;