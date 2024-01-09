import Image from 'next/image'
import styles from './locationcard.module.css'
import Link from 'next/link'
import SaveLocation from '@/components/saveLocation/SaveLocation'

const LocationCard = ({location, user}) => {

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full h-48 object-cover' src={location.img} alt="" /></figure>

            <div className="card-body rounded-b-lg bg-indigo-400">
                    <Link href={`/explore/${location._id}`}>
                        <h2 className="card-title text-sm absolute top-3 left-3 right-3 text-gray-800 bg-white bg-opacity-75 p-4 rounded-lg">{location.place_name}</h2>   
                    </Link>
                <p>{location.description}</p>
                <p>{location.rating} rating</p>
                <div className={styles.footer}>
                    <div className={styles.categories}>
                    {location.categories.map(category => (
                                <p key={category} className="badge badge-neutral">
                                    <em>{category} </em>
                                </p>
                            ))}
                    </div>
                    {user && <SaveLocation />}
                </div>
            </div>
        </div>
    )
}

export default LocationCard