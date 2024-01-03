import Image from 'next/image'
import styles from './locationcard.module.css'
import Link from 'next/link'

const LocationCard = ({location}) => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href={`/${location._id}`}>
                    <h2>{location.place_name}</h2>
                    <h3>{location.location}</h3>
                </Link>
            </div>
            <div className={styles.imgContainer}>
                {location.img && 
                <Image 
                src={location.img} 
                alt='' 
                fill
                size=''
                unoptimized={true}
                priority
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