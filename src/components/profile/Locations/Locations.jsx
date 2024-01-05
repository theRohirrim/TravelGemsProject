import { getLocationsByUsername } from "@/lib/data";
import styles from "./locations.module.css"

const Locations = async ({ username }) => {
    const locations = await getLocationsByUsername(username)
    
    return (
        <div>
            {locations.map(location => (
                <div key={location._id}>
                    <img className={styles.img} src={location.img} />
                    {location.categories.map(category => (
                        <div>
                            <p>{category}</p>
                        </div>
                    ))}
                    <p>{location.date_created}</p>
                    <p>{location.place_name}</p>
                    <p>{location.description}</p>
                    <p>{location.rating}</p>
                </div>
            ))}
        </div>
    );
}

export default Locations;