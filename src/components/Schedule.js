import React from 'react';
import { Container } from 'react-bootstrap';

function Schedule() {
    return (
        <article className="py-14 bg-white">
            <Container fluid={"lg"}>
                <section className="text-2xl mb-4 text-center">
                    <h1>SCHEDULE A <span className="text-comex-primary">SHOWING</span></h1>
                </section>
                <form action="" className="md:max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="w-full relative">
                            <input type="text" name="fisrtName" id="fisrtName" className="peer h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="FIRST NAME" />
                            <label htmlFor="name" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">FIRST NAME</label>
                        </div>
                        <div className="w-full relative">
                            <input type="text" name="lastName" id="lastName" className="peer h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="LAST NAME" />
                            <label htmlFor="name" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">LAST NAME</label>
                        </div>
                        <div className="w-full mt-10 md:mt-0 relative">
                            <input type="email" name="email" id="email" className="peer h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="EMAIL ADDRESS" />
                            <label htmlFor="email" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">EMAIL ADDRESS</label>
                        </div>
                        <div className="w-full mt-10 md:mt-0 relative">
                            <input type="email" name="phone" id="phone" className="peer h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="PHONE" />
                            <label htmlFor="email" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">PHONE</label>
                        </div>
                    </div>
                    <div className="mt-10 relative">
                        <input type="text" name="message" id="message" className="peer h-12 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="MESSAGE" />
                        <label htmlFor="message" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">MESSAGE</label>
                    </div>
                    <div className="text-center my-3">
                        <button type="submit" className="p-2 w-[150px] border-2 border-transparent hover:border-2 hover:border-comex-primary transition-all hover:text-comex-primary subBtn cursor-pointer">SEND MESSAGE</button>
                    </div>
                </form>
            </Container>
        </article>
    )
}

export default Schedule;