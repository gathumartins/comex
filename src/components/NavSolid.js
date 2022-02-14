import React from 'react';
import { Container } from 'react-bootstrap';

function NavSolid() {
    return (
        <nav className="bg-white p-2">
            <Container className="align-middle">
                <ul className='flex justify-around font-spartan text-black'>
                    <li className="pt-4"><a href="properties">Properties</a></li>
                    <li className="pt-4"><a href="whyComex">Why Comex</a></li>
                    <li className='order-first'><a href="/"><img src="./imgs/logo.png" alt="Comex Homes logo" className="h-16" /></a></li>
                    <li className="pt-4"><a href="ourProcess">Our Process</a></li>
                    <li className="pt-4"><a href="contactUs">Contact Us</a></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavSolid