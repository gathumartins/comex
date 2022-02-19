import React, { useState, useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import NavTrans from './NavTrans';
import NavSolid from './NavSolid';

function Header() {
    const [myHeader, setMyHeader] = useState(false);
    const isBrowser = typeof window !== "undefined"
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (isBrowser) {
            const changemyHeading = () => {
                if (window.scrollY > 80) {
                    setMyHeader(true)
                } else {
                    setMyHeader(false)
                }
            }
            window.addEventListener('scroll', changemyHeading);
        }
    }, [isBrowser])

    return <header className="sticky top-0 z-10">
        <div className="flex justify-between mobileHeader">
            <img src="./imgs/logo.png" alt="comex mobile logo" className="h-10" />
            <button className="menu" onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-comex-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
        <div className="headerlarge">
            {myHeader ? <NavSolid /> : <NavTrans />}
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
                    <li className='p-3 order-first hover:bg-white hover:text-comex-primary'><a href="/" onClick={handleClose} className="text-uppercase">Home</a></li>
                    <li className="p-3 hover:bg-white hover:text-comex-primary"><a href="properties" onClick={handleClose} className="text-uppercase">Properties</a></li>
                    <li className="p-3 hover:bg-white hover:text-comex-primary"><a href="whyComex" onClick={handleClose} className="text-uppercase">Why Comex</a></li>
                    <li className="p-3 hover:bg-white hover:text-comex-primary"><a href="ourProcess" onClick={handleClose} className="text-uppercase">Our Process</a></li>
                    <li className="p-3 hover:bg-white hover:text-comex-primary"><a href="contactUs" onClick={handleClose} className="text-uppercase">Contact Us</a></li>
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    </header>;
}

export default Header;
