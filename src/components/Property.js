import React from 'react';
import propImg from '../../static/imgs/projectimg.png';

function Property() {
  return (
      <div className="projectImg relative">
          <a href="/"><img src={propImg} className="object-cover" alt="Comex Properties Homes projects" /></a>
          <span className="p-3 absolute bg-gradient-to-b from-black/30 to-comex-primary/80 w-full bottom-0">
              <h1 className="text-white text-md">Nyayo view | Mombasa</h1>
              <div className="mt-3 flex justify-between gap-4 projCapBtm">
                  <a href="/property" className="bg-comex-primary text-white text-sm rounded-md p-2">Visit Nyayo View</a>
              </div>
          </span>
      </div>
  )
}

export default Property;