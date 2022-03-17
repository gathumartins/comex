import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function Showcase() {
    const [showCase, setShowCase] = useState(false);
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
        const hideShowCase = () => {
            if (window.scrollY >= 3000) {
                setShowCase(true)
            } else {
                setShowCase(false)
            }
        }
        window.addEventListener('scroll', hideShowCase);
    }
  return (
      <div className={`sticky bottom-0 showCase min-h-12  bg-white py-1 ${showCase ? 'invisible' : 'visible '}`}>
          <Container fluid={"lg"} className="flex justify-between flex-wrap gap-3 items-center">
              <div className="features flex-grow grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                <div className="feature hidden md:inline">
                    <h6>YOU'RE VIEWING</h6>
                    <h3>Nyayo View Suites</h3>
                </div>
                <div className="feature mx-auto">
                    <h6>PRICES FROM</h6>
                    <h3>kshs. 2,000,000</h3>
                </div>
                  <div className="feature hidden md:inline">
                    <h6>COMPLETION DATE</h6>
                    <h3>Q1 2024</h3>
                </div>
                  <div className="feature hidden md:inline">
                    <h6>LOCATION</h6>
                    <h3>NAIROBI WEST</h3>
                </div>
              </div>
              <button className="register my-4 bg-comex-primary text-white text-uppercase p-2 border-2 border-comex-primary mx-auto">Register Interest</button>
          </Container>
      </div>
  )
}

export default Showcase;