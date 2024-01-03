"use client"
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import React from 'react';

const GoogleMapView = ({ locations }) => {
    // size of map 
    const containerStyle = {
        width: '100%',
        height: '70vh'
    }


    // starting coords
    const coords = { lat: 51.51360936836878, lng: -0.08095507300680699 }

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

                    {locations.map(location => (
                        <MarkerF
                            position={{lat: location.latitude, lng: location.longitude}}
                        />
                    ))}
        
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default GoogleMapView;