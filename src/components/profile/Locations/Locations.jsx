import styles from "./locations.module.css"
import Link from "next/link";
import { GoDot } from "react-icons/go";
import { FaGem } from "react-icons/fa";

const Locations = ({ locations }) => {

    return (
        <div>
            {locations.map(location => (
                <div className={styles.locationCard} key={location._id}>
                    <h1 className={styles.header}>
                        <Link href={`/explore/${location._id}`}>{location.place_name}</Link>
                    </h1>
                    <div><img className={styles.img} src={location.img} /></div>
                    <div className={styles.locationDetails} >
                        <p className={styles.rating}> <FaGem />{location.rating}</p>
                        <p>{location.description}</p>
                        {location.categories.map(category => (
                            <p className={styles.categories} key={category}>
                                <GoDot /><em className={styles.category}>{category} </em>
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Locations;