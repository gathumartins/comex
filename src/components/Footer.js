import React from 'react';
import { Container } from 'react-bootstrap';
import footlogo from '../../static/imgs/footlogo.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Footer() {
    const year = new Date();
    const yyyy = year.getFullYear();
    return (
        <footer className="py-14 bg-comex-primary">
            <Container fluid={"lg"}>
                <div className="md:flex justify-between footerTop">
                    <div className="w-[100%] md:max-w-[250px] logo">
                        <img src={footlogo} alt="comex footer logo" className="h-16" />
                    </div>
                    <div className="flex-grow">
                        <ul className="sm:flex text-center sm:text-left justify-around gap-4 max-w-[700px] ml-auto">
                            <li><a href="/" className="hover:text-white">PROPERTIES</a></li>
                            <li><a href="/" className="hover:text-white">WHY COMEX</a></li>
                            <li><a href="/" className="hover:text-white">OUR PROCESS</a></li>
                            <li><a href="/" className="hover:text-white">CONTACT US</a></li>
                        </ul>
                        <ul className="flex justify-start gap-4 max-w-[700px] ml-auto pl-7 mt-3 text-white">
                            <li>Email : <a className="hover:text-black" href="mailto:buy@comexhomes.com">buy@comexhomes.com</a></li>
                            <li><a className="hover:text-black" href="tel:+254 722 390 393">+254 722 390 393</a></li>
                        </ul>
                    </div>
                </div>
                <div className="md:flex justify-between md:flex-row-reverse gap-4 mt-4 footerBtm">

                    <ul className="flex justify-between mx-auto my-4 w-[250px] text-white">
                        <li><a href="/" className="hover:text-black"><span className="hidden">Facebook</span><FaFacebookF /></a></li>
                        <li><a href="/" className="hover:text-black"><span className="hidden">Instagram</span><FaInstagram /></a></li>
                        <li><a href="/" className="hover:text-black"><span className="hidden">Twitter</span><FaTwitter /></a></li>
                        <li><a href="/" className="hover:text-black"><span className="hidden">Linkedin</span><FaLinkedinIn /></a></li>
                        <li><a href="/" className="hover:text-black"><span className="hidden">YouTube</span><FaYoutube /></a></li>
                    </ul>
                    <p className="flex-grow copy text-white">Accessibility Statement<br />
                        &copy; {yyyy} Comex Homes. All Rights Reserved. The property information herein is derived from various sources that may include, but not be limited to,government records</p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
