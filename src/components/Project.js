import React from 'react';
import {Link} from 'gatsby';
import { Container } from 'react-bootstrap';
import beds from '../../static/imgs/beds.webp';
import price from '../../static/imgs/price.webp';
import floorplan from '../../static/imgs/floorplan.webp';

function Project({ properties}) {
    return (
        <article className="projects relative mt-0 py-[50px]">
            <Container fluid={"lg"} className="min-h-[250px] max-w-[1200px] mx-auto">
                <div className="projectsInn grid grid-cols-1 sm:grid-cols-2 flex-col-reverse">
                    <div className="flex justify-around items-center">
                        <div className="featuredInn">
                            <h1 className="text-4xl mb-3">NYAYO VIEW SUITES</h1>
                            <h2 className="text-2xl mb-3">NAIROBI WEST</h2>
                            <ul className="featList">
                            <li className="flex justify-between">
                                <p className="flex gap-2 w-[150px]"><img className="h-6 w-6" src={beds} alt="featured bed" /> BEDS</p>
                                    <p>{properties.propertyInfo.beds?.map((bed, i) => <span key={i}>{bed.title+ ", "}</span>)}</p>
                            </li>
                            <li className="flex justify-between">
                                    <p className="flex gap-2 w-[150px]"><img className="h-6 w-6" src={price} alt="featured bed" /> PRICE</p>
                                    <p>FROM KSHS. {properties.propertyInfo.pricing.minPrice.toLocaleString()}</p>
                            </li>
                            <li className="flex justify-between">
                                    <p className="flex gap-2 w-[150px]"><img className="h-6 w-6" src={floorplan} alt="featured bed" /> FLOORPLANS</p>
                                    <p><a href={properties.propertyInfo.floorPlan.mediaItemUrl} download={properties.propertyInfo.floorPlan.title} rel="noreferrer" target="_blank">View</a></p>
                            </li>
                            </ul>
                            <div className="featuredLinks my-4">
                                <Link to={`/properties${properties.uri}`} className="cursor-pointer">Details</Link>
                            <Link to="/properties" className="cursor-pointer">View More</Link>
                            </div>
                        </div>
                    </div>
                    <figure className="object-contain">
                        <img className="img-fluid" src={properties.featuredImage.node.sourceUrl} alt={properties.featuredImage.node.altText} />
                    </figure>
                </div>
            </Container>
        </article>
    )
}

export default Project;