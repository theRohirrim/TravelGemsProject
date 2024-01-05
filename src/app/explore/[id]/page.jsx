import Image from 'next/image';
import styles from './singlelocation.module.css'
import { getLocationById } from '@/lib/data';

const SingleLocationPage = async ({ params }) => {
    const id = params.id

    // Get location data by ID
    let location = await getLocationById(id)
    location = location[0]

    return (
        <main className={styles.container}>
            <div className={styles.textContainer}>
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
                <div className={styles.content}>
                    <p>{location.rating}</p>
                    <p>{location.description}</p>
                </div>
            </div>
        </main>
    )
}

export default SingleLocationPage;