'use client';

import { useEffect, useState } from 'react';
import GoogleMapView from './GoogleMapView/GoogleMapView';
import styles from './explorepage.module.css'
import MapAndListButtons from './filterAndView/Map&ListButons/Map&ListButtons';
import MapsNavigation from './filterAndView/mapsNavigation/MapsNavigation';
import LocationList from './locationList/LocationList';

const ExplorePage = ({ allLocations }) => {
    const [locations, setLocations] = useState(allLocations)
    const [mapView, setMapView] = useState(true)
    const [filterOptions, setFilterOptions] = useState({})

    useEffect(() => {
        Object.entries(filterOptions)
        setLocations(locations.filter(
            
        ))
    }, [filterOptions])

    const filteredArray = yourArray.filter(obj => obj.categories.includes("sports"));


    return (
        <>
        <MapsNavigation filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
        <MapAndListButtons mapView={mapView} setMapView={setMapView}/>
        <div className={`${mapView === true && styles.disabled}`}>
        <LocationList locations={locations} />
        </div>
        <div className={`${mapView === false && styles.disabled}`}>
        <GoogleMapView locations={locations} />
        </div>
        </>
        )
}

export default ExplorePage;