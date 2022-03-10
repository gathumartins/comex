import React from 'react';
import { Helmet} from 'react-helmet';
import {Link, graphql} from 'gatsby';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Connect from '../components/Connect';
import MapComp from '../components/MapComp';
// import Property from '../components/Property';
import {EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";
import { HiMail} from 'react-icons/hi';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { photos } from "../data/photo";
import PropertyGallery from '../components/PropertyGallery';

function property({data}) {
  const isBrowser = typeof window !== "undefined";
  let ShareLink;
  if(isBrowser) {
    ShareLink = window.location.href;
  }
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Comex-{data.wpCustomProperty.title}</title>
      </Helmet>
      <Banner banner={data.wpCustomProperty.propertyInfo.bannerImage.sourceUrl} altTxt={data.wpCustomProperty.propertyInfo.bannerImage.altText} slug={data.wpCustomProperty.slug} slugLabel={data.wpCustomProperty.title} />
    <section className="relative propertyTop py-14 gap-2">
    <Container fluid={"lg"} className="min-h-[300px] propLeft">
          <div dangerouslySetInnerHTML={{ __html: data.wpCustomProperty.content }}></div>
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
        <h1 className="text-3xl mb-3">KES: {data.wpCustomProperty.propertyInfo.pricing.minPrice} - KES: {data.wpCustomProperty.propertyInfo.pricing.maxPrice}</h1>
          <ul className="leading-2">
          {data.wpCustomProperty.propertyInfo.propertyprops?.map((propInfo, i) => <li key={i}>{propInfo.name}: <span>{propInfo.value}</span></li>)}
          </ul>
          <a href="https://test.comexhomes.ke/wp-content/uploads/2022/03/Comex-Homes-Nyayo-View-Suites.pdf" target="_blank" rel="noreferrer" className="bg-black text-comex-primary hover:text-white" download> Download Profile</a>
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
export const query = graphql`
    query($databaseId: Int!) {
      wpCustomProperty(databaseId: {eq: $databaseId}) {
        id
        title
        slug
        uri
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        googleMap {
          apiKey
          pin
          coords {
            latitude
            longitude
          }
        }
        propertyInfo {
          location
          propertyprops {
            name
            value
          }
          pricing {
            maxPrice
            minPrice
          }
          propertyGallery {
            altText
            sourceUrl
          }
          bannerImage {
          altText
          sourceUrl
        }
        }
        databaseId
      }
    }
    `
export default property;