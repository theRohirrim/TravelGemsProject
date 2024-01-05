import { getLocationsByUsername } from "@/lib/data";
import styles from "./locations.module.css"
import Link from "next/link";
import { GoDot } from "react-icons/go";

const Locations = async ({ username }) => {
    const locations = await getLocationsByUsername(username)

    return (
        <div>
            {locations.map(location => (
                <div className={styles.locationCard} key={location._id}>
                    <div><img className={styles.img} src={location.img} /></div>
                    <div className={styles.locationDetails}>

                        <strong>
                            <Link href={`/explore/${location._id}`}>{location.place_name}</Link>
                            {location.rating}
                        </strong>


                        <p>{location.description}</p>
                        {location.categories.map(category => (
                            <p className={styles.categories}>
                                <GoDot /><em className={styles.category}>{category} </em>
                            </p>
                        ))}
                        <p>preview of location reviews...?</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Locations;