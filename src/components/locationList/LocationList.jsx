import { getLocations } from "@/lib/data"
import LocationCard from "./locationCard/LocationCard"

const LocationList = async ({locations}) => {
    return (
        <>
        {locations.map((location) => (
            <LocationCard location={location} />
        ))}
        </>
    )
}

export default LocationList