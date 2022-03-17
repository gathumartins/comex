import React from 'react';
import { Link } from "gatsby";
import { Container } from 'react-bootstrap';
import footlogo from '../../static/imgs/footlogo.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdOutlineEmail, MdLocalPhone } from 'react-icons/md';

function Footer() {
    const year = new Date();
    const yyyy = year.getFullYear();
    return (
        <footer className="pt-14 pb-3 bg-comex-primary">
            <Container fluid={"lg"}>
                <div className="md:flex justify-between footerTop">
                    <div className="w-[100%] md:max-w-[250px] logo">
                        <img src={footlogo} alt="comex footer logo" className="h-16" />
                    </div>
                    <div className="flex-grow">
                        <ul className="sm:flex text-center sm:text-left justify-around gap-4 max-w-[700px] ml-auto">
                            <li><Link to="/properties" className="hover:text-white">PROPERTIES</Link></li>
                            <li><Link to="/why_comex" className="hover:text-white">WHY COMEX</Link></li>
                            <li><Link to="/our_process" className="hover:text-white">OUR PROCESS</Link></li>
                            <li><Link to="/contact_us" className="hover:text-white">CONTACT US</Link></li>
                        </ul>
                        <ul className="text-center md:flex md:text-left justify-start gap-4 max-w-[700px] ml-auto md:pl-7 mt-3 text-white footContacts">
                            <li className="flex justify-start gap-2"><MdOutlineEmail className="h-6 w-6 text-white"/><a className="hover:text-black" href="mailto:info@comexhomes.ke">info@comexhomes.ke</a></li>
                            <li className="flex justify-start gap-2"><MdLocalPhone className="h-6 w-6 text-white" /><a className="hover:text-black" href="tel:+254799111555">0799 111 555</a></li>
                        </ul>
                    </div>
                </div>
                <div className="md:flex justify-between md:flex-row-reverse gap-4 mt-4 footerBtm">

                    <ul className="flex justify-between mx-auto my-4 w-[250px] text-white">
                        <li><a href="https://www.facebook.com/comexhomes" rel="noreferrer" target="_blank" className="hover:text-black"><span className="hidden">Facebook</span><FaFacebookF /></a></li>
                        <li><a href="https://www.instagram.com/comexhomeske/" rel="noreferrer" target="_blank" className="hover:text-black"><span className="hidden">Instagram</span><FaInstagram /></a></li>
                        <li><a href="https://twitter.com/ComexHomes" rel="noreferrer" target="_blank" className="hover:text-black"><span className="hidden">Twitter</span><FaTwitter /></a></li>
                        <li><a href="https://www.linkedin.com/company/comexhomes" rel="noreferrer" target="_blank" className="hover:text-black"><span className="hidden">Linkedin</span><FaLinkedinIn /></a></li>
                        <li><a href="https://www.youtube.com/channel/UC6Dm0R805fzKUROf96u-VpQ" rel="noreferrer" target="_blank" className="hover:text-black"><span className="hidden">YouTube</span><FaYoutube /></a></li>
                    </ul>
                    <p className="flex-grow copy text-white pt-4">&copy; {yyyy} Comex Homes. All Rights Reserved. </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
