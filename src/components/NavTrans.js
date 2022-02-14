import React from 'react';
import { Container } from 'react-bootstrap';

function NavTrans() {
    return (
        <nav className="py-8">
            <Container>
                <ul className='flex justify-around align-middle '>
                    <li><a href="properties">Properties</a></li>
                    <li><a href="whyComex">Why Comex</a></li>
                    <li><a href="/"><img src="./imgs/logo.png" alt="Comex Homes logo" className="h-24" /></a></li>
                    <li><a href="ourProcess">Our Process</a></li>
                    <li><a href="contactUs">Contact Us</a></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavTrans;