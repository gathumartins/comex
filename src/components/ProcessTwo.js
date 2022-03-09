import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';

function ProcessTwo({ processes}) {
  return (
      <section className="relative processMain">
          <Container fluid={"lg"} className="gap-4 processTwo">
              {
                  processes.map((process) =>
                      <div key={process.id} className="processTwoInn">
                          <div className="h-full">
                              <div className="text-center inline-block">
                                  <img src={process.featuredImage.node.sourceUrl} className="inline-block h-16" alt="comex homes process selection" />
                              </div>
                              <div className="proInner">
                                  <h1 className="text-3xl">{process.title}</h1>
                                  <div className="text-md" dangerouslySetInnerHTML={{__html: process.content}}></div>
                                  <Link to="/schedule" className="viewLink">Schedule Viewing</Link>
                              </div>
                          </div>
                      </div>
                  )
              }
          </Container>
          </section>
  )
}

export default ProcessTwo