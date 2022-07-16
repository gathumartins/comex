import React from 'react';
import { Helmet} from 'react-helmet';
import {Link, graphql} from 'gatsby';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
// import Connect from '../components/Connect';
import MapComp from '../components/MapComp';
import PopRegister from '../components/PopRegister';
// import Property from '../components/Property';
import {EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";
import { HiMail} from 'react-icons/hi';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import PropertyGallery from '../components/PropertyGallery';

function property({data}) {
  const isBrowser = typeof window !== "undefined";
  let ShareLink;
  if(isBrowser) {
    ShareLink = window.location.href;
  }
  let photos=[];
  data.wpCustomProperty.propertyInfo.propertyGallery.forEach(
  (photo)=>{
      photos.push({src:photo.src.sourceUrl, width:photo.width, height:photo.height, title:photo.src.title})
  }
  )
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
      <div className="propShare w-[100%]  md:w-[50%]">
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
          <h1 className="mb-3"><span className="text-xl">PRICES FROM</span> <br /> <span className="text-3xl mt-6">KSHS. {data.wpCustomProperty.propertyInfo.pricing.minPrice.toLocaleString()}</span></h1>
          <ul className="leading-2">
          {/*data.wpCustomProperty.propertyInfo.propertyprops?.map((propInfo, i) => <li key={i}>{propInfo.name}: <span>{propInfo.value}</span></li>)*/}
          </ul>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href={data.wpCustomProperty.propertyInfo.floorPlan.mediaItemUrl} className="bg-black text-comex-primary hover:text-white text-center" target="_blank" rel="noreferrer" download={data.wpCustomProperty.propertyInfo.floorPlan.title}> View Floor Plan</a>
            <a href={data.wpCustomProperty.propertyInfo.profile.mediaItemUrl} className="bg-black text-comex-primary hover:text-white text-center" target="_blank" rel="noreferrer" download={data.wpCustomProperty.propertyInfo.profile.title}> Download Profile</a>
         </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-7">
            <PopRegister properties={data.wpCustomProperty.propertyInfo.beds}/>
            <Link className="bg-black text-comex-primary hover:text-white text-center" to="/schedule">Schedule a Showing</Link>
          </div>
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
        <MapComp pin={data.wpCustomProperty.googleMap.pin} latitude={data.wpCustomProperty.googleMap.coords.latitude} longitude={data.wpCustomProperty.googleMap.coords.longitude} Apikey={data.wpCustomProperty.googleMap.apiKey}/>
      </section>
      {/*    
      <section className="py-14">
        <Container className="text-center mb-16 relative comexHeads">
          <div className="comexLine z-0"></div>
          <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl bg-white z-10 max-w-[240px] md:max-w-[400px] mx-auto">Similar Listings</h1>
        </Container>
        <Container fluid={"lg"} className="flex justify-between gap-4 overflow-y-hidden overflow-x-scroll snap-x similarProp">
          <Property />
          <Property />
          <Property />
          <Property />
        </Container> 
    </section> */}
    {/*<Connect />*/}
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
           floorPlan {
            mediaItemUrl
            title
          }
          beds {
            title
          }
           profile {
            mediaItemUrl
            title
          }
          propertyGallery {
            width
            height
            src {
              sourceUrl
              title
            }
          }
          location
          propertyprops {
            name
            value
          }
          pricing {
            maxPrice
            minPrice
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