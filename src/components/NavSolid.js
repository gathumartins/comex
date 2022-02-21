import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function NavSolid() {
    const [myHeader, setMyHeader] = useState(false);
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
        const changemyHeading = () => {
            if (window.scrollY >= 100) {
                setMyHeader(true)
            } else {
                setMyHeader(false)
            }
        }
        window.addEventListener('scroll', changemyHeading);
    }

    return (
        <nav className={myHeader ? `backdrop-blur-lg bg-white/70 py-2 transition-all` : `py-8 backdrop-blur-sm bg-white/40 shadow-lg transition-all`}>
            <Container>
                <ul className='d-flex align-items-center justify-around font-spartan text-black'>
                    <li><a href="properties" className="hover:text-comex-primary text-uppercase">Properties</a></li>
                    <li><a href="whyComex" className="hover:text-comex-primary text-uppercase">Why Comex</a></li>
                    <li className={myHeader ? `order-first hover:text-comex-primary text-uppercase transition-all` : `order-0 hover:text-comex-primary text-uppercase transition-all`}><a href="/"><img src="./imgs/logo.png" alt="Comex Homes logo" className={myHeader ? `h-16 transition-all` : `h-24 transition-all`} /></a></li>
                    <li><a href="ourProcess" className="hover:text-comex-primary text-uppercase">Our Process</a></li>
                    <li><a href="contactUs" className="hover:text-comex-primary text-uppercase">Contact Us</a></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavSolid;