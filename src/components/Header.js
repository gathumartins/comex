import React, { useState } from 'react';
import { Link } from "gatsby";
import { Offcanvas } from 'react-bootstrap';
import NavSolid from './NavSolid';
import logo from '../../static/imgs/logo.png';

function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <header className="sticky top-0 z-10">
        <div className="flex justify-between mobileHeader">
            <img src={logo} alt="comex mobile logo" className="h-10" />
            <button className="menu" onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-comex-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
        <div className="headerlarge transition-all">
            <NavSolid logo={logo}/>
        </div>
        <Offcanvas show={show} onHide={handleClose} placement={`end`} className="w-full mmenu bg-comex-primary">
            <header className="flex justify-end p-3">
                <button onClick={handleClose} className="bg-comex-light/30 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </header>
            <Offcanvas.Body className="p-0">
                <ul className="text-2xl text-center">
                    <li className='p-3 hover:bg-white hover:text-comex-primary'><Link href="/" onClick={handleClose} className="text-uppercase hover:text-comex-primary">Home</Link></li>
                    <li className="p-3 hover:bg-white hover:text-comex-primary"><Link href="/properties" onClick={handleClose} className="text-uppercase hover:text-comex-primary">Properties</Link></li>
                    <li className="p-3 hover:bg-white hover:text-comex-primary"><Link href="/whycomex" onClick={handleClose} className="text-uppercase hover:text-comex-primary">Why Comex</Link></li>
                    <li className="p-3 hover:bg-white hover:text-comex-primary"><Link href="/ourprocess" onClick={handleClose} className="text-uppercase hover:text-comex-primary">Our Process</Link></li>
                    <li className="p-3 hover:bg-white hover:text-comex-primary"><Link href="/contactus" onClick={handleClose} className="text-uppercase hover:text-comex-primary">Contact Us</Link></li>
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    </header>;
}

export default Header;
