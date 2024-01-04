"use client"
import { GoogleMap, Marker, InfoWindow, useLoadScript, MarkerF } from '@react-google-maps/api';
import React, { useState } from 'react';
import Image from 'next/image'
import style from "./googleMap.module.css"
import Link from 'next/link';

const GoogleMapView = ({ locations, addLocation, setAddLocation, selectedLocation, setSelectedLocation }) => {
    const containerStyle = {
        width: '80vw',
        height: '35vh',
        margin: 'auto',
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    });

    function stringLimit(str, limit) {
        if (str.length <= limit) {
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


    const handleMapClick = (e) => {
        setSelectedLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() })
    }

    return (
        <div>
            {isLoaded &&
                <GoogleMap
                    onClick={handleMapClick}
                    mapContainerStyle={containerStyle}
                    center={coords}
                    zoom={13}>
                    {locations.map((location) => (
                        <Marker
                            position={{ lat: location.latitude, lng: location.longitude }}
                            key={location._id}
                            onClick={() => handleMarkerClick(location)}
                        />
                    ))}

                    {addLocation && <>
                        <MarkerF position={selectedLocation}>
                        <InfoWindow visible={true}>
                        <Link  href={`/add?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lng}`}>
                            <p>Add new travel gem</p>
                        </Link>
                        </InfoWindow>
                        </MarkerF>
                    </>}

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

                                    <Link href={`/${selectLocation._id}`}>
                                        <h4>{selectLocation.place_name}</h4>
                                    </Link>
                                    <p>{selectLocation.category}</p>
                                    <p> {`${stringLimit(selectLocation.description, 100)}...`}</p>
                                </div>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            }
        </div>
    );
};

export default GoogleMapView;
