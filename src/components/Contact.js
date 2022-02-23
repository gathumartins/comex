import React from 'react';
import {Container} from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <article className="lg:flex justify-start">
      <section className="bg-comex-primary p-[40px] w-full lg:w-[55.12%] lg:pt-[110px] lg:pb-[63px] lg:pl-[8.34%] lg:pr-[4.7%]">
    <Container fluid={"lg"}>
          <div className="contact-heading">
                <h1>
                  <strong className="font-term text-5xl">Contact</strong><br/>
                  <span className="relative text-2xl">Us</span>
                </h1>

          </div>
          <ContactForm/>
    </Container>
    </section>
      <section className="p-[40px] w-full lg:w-[44.87%] lg:pt-[64px] lg:pb-[92px]">
    <Container fluid={"lg"}>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </Container>
    </section>
    </article>
  )
}

export default Contact;