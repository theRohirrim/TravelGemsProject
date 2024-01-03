import { getLocations } from "@/lib/data"

const LocationList = async ({locations}) => {
    return (
        <>
        {locations.map((location) => (
        <div key={location.place_name}>
            <h2>{location.place_name}</h2>
        </div>
        ))}
        </>
    )
}

export default LocationList