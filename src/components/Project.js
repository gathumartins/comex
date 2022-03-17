import React from 'react';
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
                                <p>STUDIO, 1</p>
                            </li>
                            <li className="flex justify-between">
                                    <p className="flex gap-2 w-[150px]"><img className="h-6 w-6" src={price} alt="featured bed" /> PRICE</p>
                                    <p>FROM KSHS. 2,000,000</p>
                            </li>
                            <li className="flex justify-between">
                                    <p className="flex gap-2 w-[150px]"><img className="h-6 w-6" src={floorplan} alt="featured bed" /> FLOORPLANS</p>
                                 <p><a href="/" download="Floor Plan">View</a></p>
                            </li>
                            </ul>
                            <div className="featuredLinks my-4">
                            <a href="/">Details</a>
                            <a href="/properties">View More</a>
                            </div>
                        </div>
                    </div>
                    <figure className="object-contain">
                        <img className="img-fluid" src="./imgs/projectimg.png" alt="Featured project" />
                    </figure>
                </div>
            </Container>
        </article>
    )
}

export default Project;