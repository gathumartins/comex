import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap';

function Schedule() {
    const form = useRef();

    const scheduleVisit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3kwn7ln', 'template_yd4xwm1', form.current, 'user_wyL9szuhcFXTO7PpM4yk0')
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
                <section className="text-2xl mb-10 text-center">
                    <h1>SCHEDULE A <span className="text-comex-primary">SHOWING</span></h1>
                </section>
                <form ref={form} onSubmit={scheduleVisit} className="md:max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                        <div className="w-full relative">
                            <input type="text" name="fisrtName" id="fisrtName" className="peer mb-8 h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="FIRST NAME" required/>
                            <label htmlFor="fisrtName" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">FIRST NAME</label>
                        </div>
                        <div className="w-full relative">
                            <input type="text" name="lastName" id="lastName" className="peer mb-8 h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="LAST NAME" required/>
                            <label htmlFor="lastName" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">LAST NAME</label>
                        </div>
                        <div className="w-full relative">
                            <input type="email" name="email" id="email" className="peer mb-8 h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="EMAIL ADDRESS" required/>
                            <label htmlFor="email" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">EMAIL ADDRESS</label>
                        </div>
                        <div className="w-full relative">
                            <input type="tel" name="phone" id="phone" className="peer mb-8 h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="PHONE" required/>
                            <label htmlFor="phone" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">PHONE</label>
                        </div>
                        <div className="w-full relative">
                            <input type="date" name="preferedDate" id="preferedDate" className="peer mb-8 h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="PREFERRED DATE" required/>
                            <label htmlFor="preferedDate" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">PREFERRED DATE</label>
                        </div>

                        <div className="w-full relative">
                            <input type="time" name="preferedTime" id="preferedTime" className="peer mb-8 h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="PREFERRED TIME" required/>
                            <label htmlFor="preferedTime" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">PREFERRED TIME</label>
                        </div>
                        <div className="w-full relative">
                            <input type="date" name="alternativeDate" id="alternativeDate" className="peer mb-8 h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="ALTERNATIVE DATE" required/>
                            <label htmlFor="alternativeDate" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">ALTERNATIVE DATE</label>
                        </div>

                        <div className="w-full relative">
                            <input type="time" name="alternativeTime" id="alternativeTime" className="peer mb-8 h-10 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="ALTERNATIVE TIME" required/>
                            <label htmlFor="alternativeTime" className="absolute left-0 -top-3 transition-all text-comex-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-comex-primary peer-focus:text-sm">ALTERNATIVE TIME</label>
                        </div>
                    </div>
                    <div className="relative">
                        <input type="text" name="message" id="message" className="peer mb-8 h-12 w-full border-b-2 border-black focus:outline-none focus:border-comex-primary placeholder-transparent" placeholder="MESSAGE" required/>
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