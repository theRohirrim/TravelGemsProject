'use client';

import { useState } from 'react';
import GoogleMapView from './GoogleMapView/GoogleMapView';
import styles from './explorepage.module.css'
import MapAndListButtons from './filterAndView/Map&ListButons/Map&ListButtons';
import MapsNavigation from './filterAndView/mapsNavigation/MapsNavigation';
import LocationList from './locationList/LocationList';

const ExplorePage = ({ locations }) => {
    const [mapView, setMapView] = useState(true)
    return (
        <>
        <MapsNavigation />
        <MapAndListButtons />
        <LocationList locations={locations} />
        <GoogleMapView locations={locations} />
        </>
        )
}

export default ExplorePage;