import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap';

function Connect() {
    const form = useRef();

    const sendConnect = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5yzcttw', 'template_e4u8sy8', form.current, 'user_wyL9szuhcFXTO7PpM4yk0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };
    return (
        <article className="py-14 bg-white">
            <Container fluid={"lg"}>
                <section className="text-2xl mb-4 relative text-center">
                    <h1>can we <span className="text-comex-primary">CONNECT?</span></h1>
                </section>
                <form ref={form} onSubmit={sendConnect} className="md:max-w-[1200px] mx-auto">
                    <div className="md:flex justify-between gap-10">
                        <div className="w-full relative">
                            <input type="text" name="name" id="name" className="peer h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="NAME" required />
                            <label htmlFor="name" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">NAME</label>
                        </div>
                        <div className="w-full mt-10 md:mt-0 relative">
                            <input type="email" name="email" id="email" className="peer h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="EMAIL" required />
                            <label htmlFor="email" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">EMAIL</label>
                        </div>
                    </div>
                    <div className="mt-10 relative">
                        <input type="text" name="message" id="message" className="peer h-12 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="MESSAGE" required/>
                        <label htmlFor="message" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">MESSAGE</label>
                    </div>
                    <div className="text-center my-3">
                        <input type="submit" className="p-2 w-[150px] border-2 border-transparent hover:border-2 hover:border-comex-primary transition-all hover:text-comex-primary subBtn cursor-pointer" value="SUBMIT"/>
                    </div>
                </form>
            </Container>
        </article>
    )
}

export default Connect;