import React from 'react';

function ContactForm() {
  return (
    <article>
          <form action="" className="mt-10 md:max-w-[1200px] mx-auto">
              <div className="md:flex justify-between gap-10">
                  <div className="w-full relative">
                      <input type="text" name="firstName" id="firstName" className="peer mb-10 bg-transparent h-10 w-full border-b-2 border-black focus:outline-none focus:border-white placeholder-transparent" placeholder="FIRST NAME" />
                      <label htmlFor="name" className="absolute left-0 -top-3 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-white peer-focus:text-sm">FIRST NAME</label>
                  </div>
                  <div className="w-full relative">
                  <input type="text" name="lastName" id="lastName" className="peer mb-10 bg-transparent h-10 w-full border-b-2 border-black focus:outline-none focus:border-white placeholder-transparent" placeholder="LAST NAME" />
                  <label htmlFor="name" className="absolute left-0 -top-3 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-white peer-focus:text-sm">LAST NAME</label>
                  </div>
              </div>
              <div className="md:flex justify-between gap-10">
                  <div className="w-full relative">
                      <input type="tel" name="phone" id="phone" className="peer mb-10 bg-transparent h-10 w-full border-b-2 border-black focus:outline-none focus:border-white placeholder-transparent" placeholder="PHONE NUMBER" />
                      <label htmlFor="name" className="absolute left-0 -top-3 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-white peer-focus:text-sm">PHONE NUMBER</label>
                  </div>
                  <div className="w-full relative">
                      <input type="email" name="email" id="email" className="peer mb-10 bg-transparent h-10 w-full border-b-2 border-black focus:outline-none focus:border-white placeholder-transparent" placeholder="EMAIL" />
                      <label htmlFor="name" className="absolute left-0 -top-3 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-white peer-focus:text-sm">EMAIL</label>
                  </div>
              </div>
              <div className="relative">
                  <input type="text" name="message" id="message" className="peer mb-10  bg-transparent h-12 w-full border-b-2 border-black focus:outline-none focus:border-white placeholder-transparent" placeholder="MESSAGE" />
                  <label htmlFor="message" className="absolute left-0 -top-3 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-white peer-focus:text-sm">MESSAGE</label>
              </div>
              <div className="text-center my-3">
                  <button type="submit" className="p-2 w-[150px] border-2 border-transparent hover:border-2 hover:border-white transition-all hover:text-white subBtn cursor-pointer">SUBMIT</button>
              </div>
          </form>
    </article>
  )
}

export default ContactForm;