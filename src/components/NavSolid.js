import React, { useState } from 'react';
import { Container } from 'react-bootstrap';


function NavSolid({logo}) {
    const [myHeader, setMyHeader] = useState(false);
    const isBrowser = typeof window !== "undefined";
    const navTrans = 70;
    if (isBrowser) {
        const changemyHeading = () => {
            if (window.scrollY > navTrans) {
                setMyHeader(true)
            } else {
                setMyHeader(false)
            }
        }
        window.addEventListener('scroll', changemyHeading);
    }

    return (
        <nav className={myHeader ? `backdrop-blur-lg bg-white/70 py-2 transition-all` : `py-8 backdrop-blur-sm bg-gradient-to-b from-white to-white/5 shadow-lg transition-all`}>
            <Container>
                <ul className='d-flex align-items-center justify-around font-spartan text-black'>
                    <li><a href="properties" className="hover:text-comex-primary text-uppercase">Properties</a></li>
                    <li><a href="whyComex" className="hover:text-comex-primary text-uppercase">Why Comex</a></li>
                    <li className={myHeader ? `order-first hover:text-comex-primary text-uppercase transition-all` : `order-0 hover:text-comex-primary text-uppercase transition-all`}><a href="/"><img src={logo} alt="Comex Homes logo" className={myHeader ? `h-16 transition-all` : `h-24 transition-all`} /></a></li>
                    <li><a href="ourProcess" className="hover:text-comex-primary text-uppercase">Our Process</a></li>
                    <li><a href="contactUs" className="hover:text-comex-primary text-uppercase">Contact Us</a></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavSolid;