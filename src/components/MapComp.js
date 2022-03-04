import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MdLocationOn} from 'react-icons/md';

const Marker = ()=> {
    return(
        <div className=" text-red-500 text-md">
            <MdLocationOn className="w-12 h-12 text-red-500" />
            <p>Comex Ceramics</p>
        </div>
    )
}
function MapComp() {
    const coords = { lat: -1.3171042980271652, lng: 36.908678424081984};
    return (
        <div className="w-full h-[450px]">
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyD5sU4cY1RY-wwg5W4TzLm0cBxakby6Giw'}}
            defaultCenter={coords}
            center={coords}
            defaultZoom={15}
            margin={[50, 50, 50, 50]}
            >
                <Marker lat={coords.lat} lng={coords.lng} />
            </GoogleMapReact>
        </div>
    )
}

export default MapComp;