import LocationCard from "./locationCard/LocationCard"
import styles from "./locationlist.module.css"

const LocationList = async ({locations}) => {
    return (
        <div className={styles.container}>
        {locations.map((location) => (
            <div className={styles.card}>
            <LocationCard key={location.place_name} location={location} />
            </div>
        ))}
        </div>
    )
}

export default LocationList