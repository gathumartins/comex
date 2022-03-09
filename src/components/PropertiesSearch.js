import React from 'react';
import { Container} from 'react-bootstrap';
import Property from '../components/Property';

function PropertiesSearch() {
  return (
    <section className="relative searchCont py-14">
      {/*          <Container fluid={'lg'} className="lg:flex justify-between gap-6">
              <div className="searchLeft p-[40px] w-full lg:w-[55.12%] lg:pt-[110px] lg:pb-[63px] lg:pl-[8.34%] lg:pr-[4.7%]">
                  <div className="contact-heading specHeading">
                      <h1>
                          <strong className="font-term">Exclusive</strong>
                          <span className="listingSpan">Listings</span>
                      </h1>

                  </div>
         </div>
              <div className="searchRight relative z-9 flex-grow bg-comex-primary/70 lg:bg-white">
                  <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl lg:text-black">Search Our<span className="lg:text-comex-primary"> Current Listings</span>
                  </h1>
                  <form action="">
                  </form>
         </div>
    </Container> */}
    <Container fluid={'lg'} className="pb-14 grid md:grid-cols-2 lg:grid-cols-3 gap-1 ">
            <Property />
    </Container>
    </section>
  )
}

export default PropertiesSearch