import Image from 'next/image'
import styles from './locationcard.module.css'

const LocationCard = ({location}) => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>{location.place_name}</h2>
                <h3>{location.location}</h3>
            </div>
            <div className={styles.imgContainer}>
                {location.img && 
                <Image 
                src={location.img} 
                alt='' 
                fill
                sizes='100px'
                className={styles.img} />
                }
            </div>
            <div className={styles.footer}>
                <p>{location.category}</p>
                <p>{location.description}</p>
            </div>

        </div>
    )
}

export default LocationCard