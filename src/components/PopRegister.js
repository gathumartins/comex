import React, { useRef, useState } from 'react';
import {graphql, useStaticQuery } from 'gatsby';
import emailjs from '@emailjs/browser';
import { Modal } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';

function PopRegister({ properties}) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const form = useRef();
    const register = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_75n5cgg', 'template_otttlep', form.current, 'user_wyL9szuhcFXTO7PpM4yk0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    const allProperties = useStaticQuery(graphql`
     {
         allWpCustomProperty {
          edges {
            node {
              title
              id
            }
          }
        },
     }
    `) 
  return (
    <React.Fragment>
          <a href="https://share-eu1.hsforms.com/1PWrim3F1TeieOy8zdLFTFQfblz8" target="_blank" rel="noreferrer"className="bg-black text-comex-primary hover:text-white text-center myBtn hidden">Register Interest</a>
          <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} onClick={handleShow}>
              <Modal.Header className="text-center grid grid-cols-1 px-4 sticky">
                  <div className="w-full flex justify-between items-center">
                      <h1 className="flex-grow w-[90%] text-3xl">GET IN TOUCH</h1>
                      <button onClick={handleClose}><span className="hidden">Close</span><MdClose className="h-8 w-8" /></button>
                  </div>
                  <p className="text-sm mt-3">We're excited to get started on working with you! Please tell us a little more about yourself so we can make the experience bespoke.</p>
              </Modal.Header>
              <Modal.Body className="md:px-[80px]" scrollable="true">
                  <form ref={form} onSubmit={register} className="popUpForm">
                      <div className="mb-3">
                          <label htmlFor="name">Name<sup className="text-red-500">*</sup></label><br />
                          <input className="form-control mt-2 focus:border-comex-primary" type="text" name="name" id="name" required />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="email">Email<sup className="text-red-500">*</sup></label><br />
                          <input className="form-control mt-2 focus:border-comex-primary" type="email" name="email" id="email" required />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="phone">Phone<sup className="text-red-500">*</sup></label><br />
                          <input className="form-control mt-2 focus:border-comex-primary" type="tel" name="phone" id="phone" required />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="interest">What are you interested in?<sup className="text-red-500">*</sup></label><br />
                          {properties?.map((propertyFeat, i) =>
                              <div key={i} className="flex space-between items-center gap-2 my-2">
                                  <input className="mt-2 w-5 h-5 focus:border-comex-primary" type="checkbox" name="interest" required value={propertyFeat.title} /><span className="mt-2">{propertyFeat.title}</span><br />
                              </div>
                          )}
                      </div>
                      <div className="mb-3">
                          <label htmlFor="property">Property Interested In<sup className="text-red-500">*</sup></label><br />
                          <select className="form-control mt-2 focus:border-comex-primary" name="property" id="property" required>
                              <option value="" selected disabled hidden>Select</option>
                              {allProperties.allWpCustomProperty.edges?.map((property) => <option key={property.node.id} value={property.node.title}>{property.node.title}</option>)}
                          </select>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="message">Leave us a message...</label><br />
                          <textarea name="message" id="message" rows="4" className="form-control mt-2 focus:border-comex-primary"></textarea>
                      </div>
                      <input type="submit" value="Submit" className="form-control my-8 bg-comex-primary border-comex-primary hover:bg-transparent hover:text-comex-primary" />
                  </form>
              </Modal.Body>
          </Modal>
    </React.Fragment>
  )
}

export default PopRegister;