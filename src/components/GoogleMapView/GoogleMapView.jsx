"use client"
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React, { useState } from 'react';
import Image from 'next/image'
import style from "./googleMap.module.css"
const GoogleMapView = ({ locations }) => {
  const containerStyle = {
    width: '80vw',
    height: '35vh',
    margin: 'auto',
  };

    function stringLimit(str,limit){
        if (str.length <= limit){
            return str
        } else {
            return str.slice(0, limit)
        }
    }
  const coords = { lat: 51.51360936836878, lng: -0.08095507300680699 };

  const [selectLocation, setLocation] = useState("");

  const handleMarkerClick = (location) => {
    setLocation(location)
  };

  const handleInfoWindowClose = () => {
    setLocation("");
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={coords} zoom={13}>
          {locations.map((location) => (
            <Marker
              position={{ lat: location.latitude, lng: location.longitude }}
              key={location._id}
              onClick={() => handleMarkerClick(location)}
            />
          ))}

          {selectLocation && (
            <InfoWindow
              position={{
                lat: selectLocation.latitude,
                lng: selectLocation.longitude,
              }}
              onCloseClick={handleInfoWindowClose}
            >
              <div className={style.popupWrapper}>
              <Image 
                src={selectLocation.img} 
                alt='' 
                  width={100}
                  height={100}
                />
                <div className={style.popText}>

                <h4>{selectLocation.place_name}</h4>
                <p>{selectLocation.category}</p>
                <p> {`${stringLimit(selectLocation.description, 100)}...`}</p>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
