import Image from "next/image"
import styles from "./locationCard/LocationCard.module.css"
import { getLocationById } from "@/lib/data"

const LocationCard = async ({id}) => { 
    console.log(id) 

    // Get location data by ID
    let location = await getLocationById(id)
    location = location[0] 
    console.log(location)


    return (
        <main className={styles.container}>
            <section className={styles.imageContainer}> 
            <h1 className={styles.title}>{location.place_name}</h1>
            <div className={styles.imgContainer}>
                {location.img && 
                <Image
                src={location.img} 
                alt='' 
                fill
                className={styles.img} />
                }
            </div>
            </section> 
            <section className={styles.info}>
            <div className={styles.smallInfo}> 
            <div className={styles.categories}>Categories: {location.categories.map((category) => <span className={styles.categoryCard}> {category} </span>)}</div>
            <div className={styles.foundBy.centre}>Found by: {location.created_by}, {location.date_created}</div>
            <div className={styles.rating}>{location.rating} stars out of 5</div> 
            </div>
            <div className={styles.address}> {location.address} </div>

            <div className={styles.description}>{location.description}</div>
            </section>
        </main>
    )
}

export default LocationCard