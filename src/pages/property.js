import React from 'react';
import {Link} from 'gatsby';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Connect from '../components/Connect';
import banner from '../../static/imgs/property.jpg';
import MapComp from '../components/MapComp';
// import Property from '../components/Property';
import {EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";
import { HiMail} from 'react-icons/hi';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { photos } from "../data/photo";
import PropertyGallery from '../components/PropertyGallery';

function property() {
  const isBrowser = typeof window !== "undefined";
  let ShareLink;
  if(isBrowser) {
    ShareLink = window.location.href;
    console.log(ShareLink);
  }
  return (
    <Layout>
    <Banner banner={banner}/>
    <section className="relative propertyTop py-14 gap-2">
    <Container fluid={"lg"} className="min-h-[300px] propLeft">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum sit est, repudiandae fugiat quaerat quis dignissimos nostrum error natus voluptates saepe. Eligendi repellendus, illo atque consequatur dolorem odit praesentium vero animi eius, corrupti fugiat maiores autem consequuntur obcaecati sit, officiis possimus debitis iusto. Dicta, quis ad? Consequatur hic dignissimos facilis nihil aliquam quidem itaque modi voluptatum maxime nemo? Excepturi nesciunt, quibusdam nostrum itaque illum dolorem dolor inventore deleniti aperiam! Voluptas sapiente eaque laudantium culpa, et unde in non fugit atque at modi facilis soluta saepe provident reiciendis qui mollitia nemo fuga? Porro exercitationem fuga amet nam ut dolore. Suscipit.</p>
      <div className="propBtm md:flex justify-between gap-6">
      <div className="propLinks w-[100%] md:w-[50%] py-7">
              <Link to="/contactUs">Request More Info</Link>
          <Link to="/schedule">Schedule a Showing</Link>
      </div>
      <div className="propShare w-[100%]  md:w-[50%] p-7">
      <h3>Share this Listing</h3>
      <ul className="flex justify-between gap-2 max-w-[250px] my-3">
                <li><EmailShareButton url={ShareLink}><HiMail className="w-6 h-6"/></EmailShareButton></li>
                <li><FacebookShareButton url={ShareLink}><FaFacebookF className="w-6 h-6"/></FacebookShareButton></li>
                <li><LinkedinShareButton url={ShareLink}><FaLinkedinIn className="w-6 h-6"/></LinkedinShareButton></li>
                <li><TwitterShareButton  url={ShareLink}><FaTwitter className="w-6 h-6"/></TwitterShareButton></li>
                <li><WhatsappShareButton url={ShareLink}><FaWhatsapp className="w-6 h-6"/></WhatsappShareButton></li>
      </ul>
      </div>
      </div>
    </Container>
    <div className="propRight min-h-[300px] bg-comex-primary text-white">
          <h1 className="text-4xl mb-3">KES: 990,000</h1>
          <ul className="leading-2">
            <li>Listing ID: <span>A11048073</span></li>
            <li>Beds: <span>8</span></li>
            <li>Baths: <span>7</span></li>
            <li>Living Area Sq.Ft.: <span>6,458</span></li>
            <li>Lot Square Feet: <span>13,072</span></li>
            <li>Property Type: <span>Residential</span></li>
            <li>Property Sub Type: <span>Single Family Residence</span></li>
            <li>Subdivision: <span>BEACH VIEW SUB</span></li>
            <li>Waterfront: <span>Yes</span></li>
          </ul>
          <a href="/"> Virtual Tour</a>
    </div>
    </section>
    <Container fluid={"lg"} className="pt-14">
        <PropertyGallery photos={photos} />
    </Container>
    <section className="pt-14">
        <Container className="text-center mb-16 relative comexHeads">
          <div className="comexLine z-0"></div>
          <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl bg-white z-10 max-w-[240px] md:max-w-[400px] mx-auto">Mapped Location</h1>
        </Container>
        <MapComp/>
      </section>
      <section className="py-14">
        <Container className="text-center mb-16 relative comexHeads">
          <div className="comexLine z-0"></div>
          <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl bg-white z-10 max-w-[240px] md:max-w-[400px] mx-auto">Similar Listings</h1>
        </Container>
        {/* <Container fluid={"lg"} className="flex justify-between gap-4 overflow-y-hidden overflow-x-scroll snap-x similarProp">
          <Property />
          <Property />
          <Property />
          <Property />
        </Container> */}
      </section>
    <Connect />
    </Layout>
  )
}

export default property;