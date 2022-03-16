import React from 'react';
import { FaStar } from 'react-icons/fa'

function Rating({rating}) {
    let myRating = []
    for(let i=0; i< rating; i++){
      myRating.push(i)  
    }
    return (
        <div className="mx-auto my-3 flex justify-between gap-4 max-w-[150px]">
        {myRating?.map((rating, i) => 
            <FaStar key={i} className="text-comex-primary text-xl" />
        )}
        </div>
    )
}

export default Rating