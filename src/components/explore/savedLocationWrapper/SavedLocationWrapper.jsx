'use client'
import { useState } from "react"
import LocationList from "../locationList/LocationList"

const SavedLocationWrapper = ({locations, user}) => {
    const [pageLocations, setPageLocations] = useState(locations)

    return (
        <LocationList locations={pageLocations} user={user} setPageLocations={setPageLocations} />
    )
}

export default SavedLocationWrapper