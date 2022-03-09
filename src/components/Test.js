import React from 'react';
import Rating from './Rating';

function Test({rating, title, content}) {
    return (
        <div className="min-w-[100%] md:min-w-[48%] px-5 md:px-10 snap-center">
            <div className="w-full min-h-[200px] bg-black text-white text-md md:text-sm lg:text-md leading-7 font-spartan p-4">
               <Rating rating={rating}/>
                <p className="mb-2" dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
            <h1 className="ml-8 mt-3 text-white">{title}</h1>
        </div>
    )
}

export default Test;