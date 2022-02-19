import React from 'react';
import { FaStar } from 'react-icons/fa'

function Rating() {
    return (
        <div className="mx-auto my-1 flex justify-between gap-4 max-w-[150px]">
            <FaStar className="text-comex-primary text-xl" />
            <FaStar className="text-comex-primary text-xl" />
            <FaStar className="text-comex-primary text-xl" />
            <FaStar className="text-comex-primary text-xl" />
            <FaStar className="text-comex-primary text-xl" />
        </div>
    )
}

export default Rating