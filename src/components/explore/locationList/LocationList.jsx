'use client'

import { useSession } from "next-auth/react"
import LocationCard from "./locationCard/LocationCard"
import styles from "./locationlist.module.css"
import { useEffect } from "react"

const LocationList = ({locations}) => {
    const { data: session, status, user } = useSession();

    useEffect(() => {
        console.log("LOCATION LIST", user)
    }, [status])
    
    return (
        <div className={styles.container}>
        {locations.map((location) => (
            <div key={location._id} className={styles.card}>
            <LocationCard key={location.place_name} location={location} />
            </div>
        ))}
        </div>
    )
}

export default LocationList