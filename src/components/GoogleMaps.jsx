import React from 'react'

import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'

export default function GoogleMaps() {

    const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyAgs_LP0_ewyWgaN2z0iOcnFcf3E6M9yvc",})
    const myLatLng = {lat: 52.459804371015686, lng: 4.604318557049102};
    
    if(!isLoaded) return <div>Loading...</div>
    return <Map/>

    function Map() {
        return <GoogleMap
         zoom={14} center={myLatLng} 
         mapContainerClassName='maps-container'
         
         >
            {/* <Marker position={myLatLng}/> */}
            
         </GoogleMap>
    }

}
