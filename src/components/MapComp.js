import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MdLocationOn} from 'react-icons/md';

const Marker = ({pin})=> {
    return(
        <div className=" text-red-500 text-md">
            <MdLocationOn className="w-12 h-12 text-red-500" />
            <p className="min-w-[200px] text-lg">{pin}</p>
        </div>
    )
}
function MapComp({ pin, Apikey, latitude, longitude}) {
    const coords = { lat: latitude, lng: longitude};
    return (
        <div className="w-full h-[450px]">
            <GoogleMapReact
                bootstrapURLKeys={{ key:Apikey}}
            defaultCenter={coords}
            center={coords}
            defaultZoom={15}
            margin={[50, 50, 50, 50]}
            >
                <Marker lat={coords.lat} lng={coords.lng}  pin={pin}/>
            </GoogleMapReact>
        </div>
    )
}

export default MapComp;