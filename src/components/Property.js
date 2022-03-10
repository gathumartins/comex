import React from 'react';
import {Link} from 'gatsby';

function Property({ title, location, imgSrc, altTxt, propertyLink}) {
  return (
      <div className="projectImg relative">
          <Link to={``}><img src={imgSrc} className="object-contain" alt={altTxt}/></Link>
          <span className="p-3 absolute bg-gradient-to-b from-black/30 to-comex-primary/80 w-full bottom-0">
              <h1 className="text-white text-md">{title} | {location}</h1>
              <div className="mt-3 flex justify-between gap-4 projCapBtm">
                  <Link to={`/properties${propertyLink}`} className="bg-comex-primary text-white text-sm rounded-md p-2">Visit {title}</Link>
              </div>
          </span>
      </div>
  )
}

export default Property;