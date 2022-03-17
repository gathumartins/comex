import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Modal} from 'react-bootstrap';
import { MdClose } from 'react-icons/md';

function Showcase({properties}) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [showCase, setShowCase] = useState(false);
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
        const hideShowCase = () => {
            if (window.scrollY >= 2700) {
                setShowCase(true)
            } else {
                setShowCase(false)
            }
        }
        window.addEventListener('scroll', hideShowCase);
    }
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
  return (
      <div className={`sticky bottom-0 showCase min-h-12  bg-white py-1 ${showCase ? 'invisible' : 'visible '}`}>
          <Container fluid={"lg"} className="flex justify-between flex-wrap gap-3 items-center">
              <div className="features flex-grow grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                <div className="feature hidden md:inline">
                    <h6>YOU'RE VIEWING</h6>
                    <h3>{properties.title}</h3>
                </div>
                <div className="feature mx-auto">
                    <h6>PRICES FROM</h6>
                      <h3>kshs. {properties.propertyInfo.pricing.minPrice.toLocaleString()}</h3>
                </div>
                  <div className="feature hidden md:inline">
                    <h6>COMPLETION DATE</h6>
                      <h3>{properties.propertyInfo.completionDate}</h3>
                </div>
                  <div className="feature hidden md:inline">
                    <h6>LOCATION</h6>
                      <h3>{properties.propertyInfo.location}</h3>
                </div>
              </div>
              <button className="register my-4 bg-comex-primary text-white text-uppercase p-2 border-2 border-comex-primary mx-auto" onClick={handleShow}>Register Interest</button>
          </Container>
          <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
              <Modal.Header className="text-center grid grid-cols-1 px-4 sticky">
                  <div className="w-full flex justify-between items-center">
                      <h1 className="flex-grow w-[90%] text-3xl">GET IN TOUCH</h1>
                      <button onClick={handleClose}><span className="hidden">Close</span><MdClose  className="h-8 w-8"/></button>
                  </div>
                  <p className="text-sm mt-3">We're excited to get started on working with you! Please tell us a little more about yourself so we can make the experience bespoke.</p>
              </Modal.Header>
              <Modal.Body className="md:px-[80px]" scrollable="true">
                  <form ref={form} onSubmit={register} className="popUpForm">
                  <div className="mb-3">
                          <label htmlFor="name">Name<sup className="text-red-500">*</sup></label><br/>
                          <input className="form-control mt-2 focus:border-comex-primary" type="text" name="name" id="name" required/>
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
                          <div className="flex space-between items-center gap-2 my-2">
                              <input className="mt-2 w-5 h-5 focus:border-comex-primary" type="checkbox" name="interest" required value="studio" /><span className="mt-2">Studio</span><br />
                          </div>
                          <div className="flex space-between items-center gap-2 my-2">
                              <input className="mt-2 w-5 h-5  focus:border-comex-primary" type="checkbox" name="interest" required value="1 Bedroom" /><span className="mt-2">1 Bedroom</span><br />
                          </div>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="property">Property Interested In<sup className="text-red-500">*</sup></label><br />
                          <select className="form-control mt-2 focus:border-comex-primary" name="property" id="property" required>
                              <option value="" selected disabled hidden>Select</option>
                              <option value="Nyayo View Suite">Nyayo View Suite</option>
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
      </div>
  )
}

export default Showcase;