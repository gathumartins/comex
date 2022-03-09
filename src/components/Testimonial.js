import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';
import Test from './Test';

function Testimonial() {
    const data = useStaticQuery(graphql`
       {
        testimonies:allWpTestimony{
            nodes {
            content
            title
            testimonial {
                rating
            }
            id
            }
        }
       }
  `)
    let Testimonials = data.testimonies.nodes
    return (
        <article className="relative testBack">
            <FaQuoteLeft className="absolute z-0 ml-10 mt-10 testQuote text-white" />
            <div className="py-14 relative  testInn bg-gradient-to-br from-comex-primary/30 to-comex-primary/95 z-8">
                <Container fluid={'lg'}>
                    <section className="text-center">
                        <h1 className="text-4xl text-white mb-5">Testimonials</h1>
                    </section>
                    <section className="flex justify-between gap-4 overflow-y-hidden overflow-x-scroll snap-x min-h-[300px] testCont">
                    {Testimonials.map((testimony) => 
                        <Test key={testimony.id} rating={testimony.testimonial.rating} title={testimony.title} content={testimony.content}/>
                        
                        )
                    }
                    </section>
                </Container>
            </div>
        </article>
    )
}

export default Testimonial;