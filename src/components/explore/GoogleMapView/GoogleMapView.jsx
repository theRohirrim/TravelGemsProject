"use client"
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import style from "./googleMap.module.css"
import Link from 'next/link';

const GoogleMapView = ({ locations }) => {
    const [coordinates, setCoordinates] = useState({});
    const [selectLocation, setSelectLocation] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
    }, []);

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

    const handleMarkerClick = (location) => {
        setSelectLocation(location)
    };

    const handleInfoWindowClose = () => {
        setSelectLocation("");
    };

    return (
        <div>
            {isLoaded && <GoogleMap mapContainerStyle={containerStyle} center={coordinates} zoom={12}>
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
