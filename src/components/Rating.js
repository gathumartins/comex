import React from 'react';
import { FaStar } from 'react-icons/fa'

function Rating({rating}) {
    for(let i=0; i< rating; i++){
        
    }
    return (
        <div className="mx-auto my-3 flex justify-between gap-4 max-w-[150px]">
            <FaStar className="text-comex-primary text-xl" />
            <FaStar className="text-comex-primary text-xl" />
            <FaStar className="text-comex-primary text-xl" />
            <FaStar className="text-comex-primary text-xl" />
            <FaStar className="text-comex-primary text-xl" />
        </div>
    )
}

export default Rating