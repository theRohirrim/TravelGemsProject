"use client"
import { GoogleMap, LoadScript, MarkerF, useLoadScript } from '@react-google-maps/api';
import React from 'react';
import styles from './googleMap.module.css'

const GoogleMapView = ({ locations }) => {
    // size of map 
    const containerStyle = {
        width: '80vw',
        height: '35vh',
        margin: 'auto' 
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      });
      

    // starting coords
    const coords = { lat: 51.51360936836878, lng: -0.08095507300680699 }

    // display map, centered on coords
    return (
        <div className={styles.mapViewerWrapper}>
           
                {isLoaded && <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={coords}
                    zoom={13}>

                    {locations.map(location => (
                        <MarkerF
                            position={{lat: location.latitude, lng: location.longitude}}
                            key={location._id}
                        />
                    ))}
                </GoogleMap>}
    
        </div>
    );
}

export default GoogleMapView;