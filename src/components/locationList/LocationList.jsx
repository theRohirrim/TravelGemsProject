import { getLocations } from "@/lib/data"

const LocationList = async () => {
    const locations = await getLocations();
    console.log(locations)
    return (
        <div>
            Location List
        </div>
    )
}

export default LocationList