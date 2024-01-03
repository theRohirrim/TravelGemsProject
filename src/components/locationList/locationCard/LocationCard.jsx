import Image from 'next/image'
import styles from './locationcard.module.css'

const LocationCard = ({location}) => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {location.place_name}
                {location.location}
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
                {location.category}
                {location.description}
            </div>

        </div>
    )
}

export default LocationCard