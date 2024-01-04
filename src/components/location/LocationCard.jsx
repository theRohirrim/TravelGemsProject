import Image from "next/image"
import styles from "../../app/[id]/singlelocation.module.css"
import { getLocationById } from "@/lib/data"

const LocationCard = async ({id}) => { 
    console.log(id) 

    // Get location data by ID
    let location = await getLocationById(id)
    location = location[0] 
    for (let key in location) { 
        console.log(key)
    }


    return (
        <main className={styles.container}>
            <div className={styles.imgContainer}>
                {location.img && 
                <Image
                src={location.img} 
                alt='' 
                fill
                className={styles.img} />
                }
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{location.place_name}</h1>
                <div className={styles.content}>{location.description} 
                {location.created_by}</div>
            </div>
                <div> hello {location.categories}</div>
                <div>{location.address}</div>
                <div>{location.rating}</div> 
        </main>
    )
}

export default LocationCard