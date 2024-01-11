"use client"
import { GoogleMap, Marker, InfoWindow, useLoadScript, MarkerF } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import style from "./googleMap.module.css"
import Link from 'next/link';
import { LiaLocationArrowSolid } from "react-icons/lia"


const GoogleMapView = ({ locations, addLocation,setAddLocation, selectedLocation, setSelectedLocation }) => {
    const [mapCoords, setMapCoords] = useState({ lat: 51.507351, lng: -0.127758 })
    const [coordinates, setCoordinates] = useState({});
    const [selectLocation, setSelectLocation] = useState("");
    const [distance, setDistance] = useState(0);
    const [geoLocation, setGeoLocation] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
            setGeoLocation(true)
        })
        calculateDistance(coordinates.lat, coordinates.lng, selectLocation.latitude, selectLocation.longitude)
        if (selectLocation) setAddLocation(false)
    }, [selectLocation]);


    useEffect(() => {
        navigator.permissions.query({ name: "geolocation" }).then(result => {
            if (result.state === "granted") {
                setMapCoords(coordinates)
            }
        })
    }, [geoLocation]);

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const earthRadius = 6371; // in kilometers

        const degToRad = (deg) => {
            return deg * (Math.PI / 180);
        };

        const dLat = degToRad(lat2 - lat1);
        const dLon = degToRad(lon2 - lon1);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        const distance = earthRadius * c;
        setDistance(distance.toFixed(1))
    };

    const containerStyle = {
        width: '80vw',
        height: '45vh',
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

    const handleDirectionsClick = () => {
        window.open('https://www.google.com/maps/dir/?api=1&origin=' +
            coordinates.lat + ',' + coordinates.lng + '&destination='
            + selectLocation.latitude
            + ',' + selectLocation.longitude + '&travelmode=driving')
    }

    const handleMapClick = (e) => {
        setSelectedLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() })
    }

    return (
        <div>
            {isLoaded && <GoogleMap
                onClick={handleMapClick}
                mapContainerStyle={containerStyle}
                center={mapCoords}
                zoom={12}
            >
                {locations.map((location) => (
                    <Marker
                        position={{ lat: location.latitude, lng: location.longitude }}
                        key={location._id}
                        onClick={() => handleMarkerClick(location)}
                        icon={{
                            url: "/travel_icon.svg",
                            scaledSize: {
                                width: 40,
                                height: 40
                            }
                        }}
                        animation={2}
                    />
                ))}

                {addLocation && <MarkerF
                    position={selectedLocation}
                    icon={{
                        url: "/travel_icon.svg",
                        scaledSize: {
                            width: 40,
                            height: 40
                        }
                    }}>
                    <InfoWindow onCloseClick={() => setAddLocation(false)}>
                        <Link href={`/add?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lng}`}>
                            <p>Add new travel gem</p>
                        </Link>
                    </InfoWindow>
                </MarkerF>}

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

                                <Link href={`/explore/${selectLocation._id}`}>
                                    <h4>{selectLocation.place_name}</h4>
                                </Link>
                                <p>{selectLocation.category}</p>
                                <p> {`${stringLimit(selectLocation.description, 100)}...`}</p>
                               {geoLocation && <p className={style.directions} onClick={handleDirectionsClick}>
                                    <LiaLocationArrowSolid /> {distance} mi</p>}
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
