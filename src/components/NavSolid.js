import React from 'react';
import { Link } from "gatsby";
import { Container } from 'react-bootstrap';


function NavSolid({logo}) {
    return (
        <nav className={`bg-white py-2`}>
            <Container>
                <ul className='d-flex align-items-center justify-around font-spartan text-black'>
                    <li><Link to="/"><img src={logo} alt="Comex Homes logo" className={`h-16`} /></Link></li>
                    <li><Link to="/properties" className="hover:text-comex-primary text-uppercase">Properties</Link></li>
                    <li><Link to="/why_comex" className="hover:text-comex-primary text-uppercase">Why Comex</Link></li>
                    <li><Link to="/our_process" className="hover:text-comex-primary text-uppercase">Our Process</Link></li>
                    <li><Link to="/contact_us" className="hover:text-comex-primary text-uppercase">Contact Us</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavSolid;