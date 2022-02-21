import React from 'react';
import { Container } from 'react-bootstrap';

function Project() {
    return (
        <article className="projects relative mt-0 py-14">
            <Container fluid={"lg"}>
                <div className="projectsInn grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 z-10">
                    <div className="d-flex align-items-center">
                        <span className="text-white text-6xl md:text-5xl lg:text-5xl xl:text-6xl leading-24 font-spartan font-weight-500 text-uppercase inline-block align-middle">Our Projects</span>
                    </div>
                    <figure className="relative projectImg">
                        <a href="/"><img src="./imgs/projectimg.png" className="object-cover" alt="Comex Properties Homes projects" /></a>
                        <figcaption className="absolute bottom-0 p-3 bg-gradient-to-b from-black/30 to-comex-primary/80 w-full">
                            <h1 className="text-white text-md">Nyayo view | Mombasa</h1>
                            <div className="mt-3 flex justify-between gap-4 projCapBtm">
                                <a href="/" className="bg-comex-primary text-white text-sm rounded-md p-2">Visit Nyayo View</a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="relative projectImg">
                        <img src="./imgs/projectimg.png" className="object-cover" alt="Comex Properties Homes projects" />
                        <figcaption className="absolute bottom-0 p-3 bg-gradient-to-b from-black/30 to-comex-primary/80 w-full">
                            <h1 className="text-white text-md">Nyayo view | Mombasa</h1>
                            <div className="mt-3 flex justify-between gap-4 projCapBtm">
                                <a href="/" className="bg-comex-primary text-white text-sm rounded-md p-2">Visit Nyayo View</a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="relative projectImg">
                        <img src="./imgs/projectimg.png" className="object-cover" alt="Comex Properties Homes projects" />
                        <figcaption className="absolute bottom-0 p-3 bg-gradient-to-b from-black/30 to-comex-primary/80 w-full">
                            <h1 className="text-white text-md">Nyayo view | Mombasa</h1>
                            <div className="mt-3 flex justify-between gap-4 projCapBtm">
                                <a href="/" className="bg-comex-primary text-white text-sm rounded-md p-2">Visit Nyayo View</a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="relative projectImg">
                        <img src="./imgs/projectimg.png" className="object-cover" alt="Comex Properties Homes projects" />
                        <figcaption className="absolute bottom-0 p-3 bg-gradient-to-b from-black/30 to-comex-primary/80 w-full">
                            <h1 className="text-white text-md">Nyayo view | Mombasa</h1>
                            <div className="mt-3 flex justify-between gap-4 projCapBtm">
                                <a href="/" className="bg-comex-primary text-white text-sm rounded-md p-2">Visit Nyayo View</a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="relative projectImg">
                        <img src="./imgs/projectimg.png" className="object-cover" alt="Comex Properties Homes projects" />
                        <figcaption className="absolute bottom-0 p-3 bg-gradient-to-b from-black/30 to-comex-primary/80 w-full">
                            <h1 className="text-white text-md">Nyayo view | Mombasa</h1>
                            <div className="mt-3 flex justify-between gap-4 projCapBtm">
                                <a href="/" className="bg-comex-primary text-white text-sm rounded-md p-2">Visit Nyayo View</a>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </Container>
        </article>
    )
}

export default Project;