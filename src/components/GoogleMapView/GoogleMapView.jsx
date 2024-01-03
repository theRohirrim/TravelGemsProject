"use client"
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const GoogleMapView = () => {
    // size of map 
    const containerStyle = {
        width: '100%',
        height: '70vh'
    }

    // starting coords
    const coords = {lat: 53.47263498876383, lng: -2.238328930723361}

    // display map, centered on coords
    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            >  
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={coords}
            zoom={13}>

            </GoogleMap>
            </LoadScript>
        </div>
    );
}
 
export default GoogleMapView;