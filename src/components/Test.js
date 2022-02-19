import React from 'react';
import Rating from './Rating';

function Test() {
    return (
        <div className="min-w-[100%] md:min-w-[48%] md:px-10 snap-center">
            <div className="w-full h-[250px] bg-black text-white text-md md:text-sm lg:text-md leading-7 font-spartan p-4">
                <Rating />
                <p className="mb-2">Thank you to the entire team, it was an incredibly smooth and positive experience, and we are blessed to have found you all.</p>
                <p className="mb-2">A special Thank you to Judy, you were so amazing to work with and we really appreciate your hospitality when we came to visit.</p>
            </div>
            <h1 className="ml-8 mt-3 text-white">Mark K. Wairumu</h1>
        </div>
    )
}

export default Test;