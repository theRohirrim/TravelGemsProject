'use client';

import { useEffect, useState } from 'react';
import GoogleMapView from './GoogleMapView/GoogleMapView';
import styles from './explorepage.module.css'
import MapAndListButtons from './filterAndView/Map&ListButons/Map&ListButtons';
import MapsNavigation from './filterAndView/mapsNavigation/MapsNavigation';
import LocationList from './locationList/LocationList';
import { useSession } from 'next-auth/react';

const ExplorePage = ({ allLocations }) => {
    const [locations, setLocations] = useState(allLocations)
    const [mapView, setMapView] = useState(true)
    const [filterOptions, setFilterOptions] = useState({})
    const [addLocation, setAddLocation] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState({})
    const [currentUser, setCurrentUser] = useState(null);

    const { data: session, status, user } = useSession();

    useEffect(() => {
        setCurrentUser(user)
    }, [status])

    useEffect(() => {
        let filteredLocations = allLocations
        for (const [key, value] of Object.entries(filterOptions)) {
            // Rating filter
            if (key === 'rating') {
                filteredLocations = filteredLocations.filter((location) => {
                    return location.rating >= value
                })
            }

            // Category filter
            if (key === 'categories') {
                filteredLocations = filteredLocations.filter((location) => {
                    return value.every(r => location.categories.includes(r))
                })
            }

        }

        setLocations(filteredLocations)

    }, [filterOptions])

    return (
        <>
            <MapsNavigation filterOptions={filterOptions} setFilterOptions={setFilterOptions} addLocation={addLocation} setAddLocation={setAddLocation} setSelectedLocation={setSelectedLocation} />
            <MapAndListButtons mapView={mapView} setMapView={setMapView} />
            <div className={`${mapView === true && styles.disabled}`}>
                <LocationList locations={locations} user={currentUser} />
            </div>
            <div className={`${mapView === false && styles.disabled}`}>
                <GoogleMapView locations={locations} addLocation={addLocation} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation}/>
            </div>
        </>
    )
}

export default ExplorePage;