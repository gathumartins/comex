import React from 'react';
import {Container} from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import contImg from '../../static/imgs/contactimg.png';
import contLogo from '../../static/imgs/logo.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Contact() {
  return (
    <article className="bg-comex-primary lg:flex justify-start">
      <section className="bg-comex-primary p-[40px] w-full lg:w-[55.12%] lg:pt-[110px] lg:pb-[63px] lg:pl-[8.34%] lg:pr-[4.7%]">
    <Container fluid={"lg"}>
          <div className="contact-heading max-w-[400px]">
                <h1>
                  <strong className="font-term">Contact</strong>
                  <span>Us</span>
                </h1>

          </div>
          <ContactForm/>
          <p className="mt-10 text-white max-w-[400px]">Comex Homes does not share or exchange this information with anyone. All information will be kept confidential.</p>
    </Container>
    </section>
    <section className="bg-white w-full lg:w-[44.87%] lg:pt-[64px] lg:pb-[92px] contBtm">
     <div className="relative ml-0 lg:-ml-[9%]">
          <img src={contImg} alt="comex contacts" className="w-full" />
          <div className="lg:absolute lg:-bottom-14 w-[200px] h-[200px] left-[40%] p-12 bg-white shadow-lg contLogo">
          <img src={contLogo} alt="" className="img-fluid" />
          </div>
     </div>
    <Container className="lg:mt-[100px]">
          <div className="max-w-[300px] mx-auto">
            <ul className="flex justify-between my-4 w-[250px] text-black">
              <li>Follow Us</li>
              <li><a href="/" className="hover:text-comex-primary"><span className="hidden">Facebook</span><FaFacebookF /></a></li>
              <li><a href="/" className="hover:text-comex-primary"><span className="hidden">Instagram</span><FaInstagram /></a></li>
              <li><a href="/" className="hover:text-comex-primary"><span className="hidden">Twitter</span><FaTwitter /></a></li>
              <li><a href="/" className="hover:text-comex-primary"><span className="hidden">Linkedin</span><FaLinkedinIn /></a></li>
              <li><a href="/" className="hover:text-comex-primary"><span className="hidden">YouTube</span><FaYoutube /></a></li>
            </ul>
          </div>
    </Container>
    </section>
    </article>
  )
}

export default Contact;