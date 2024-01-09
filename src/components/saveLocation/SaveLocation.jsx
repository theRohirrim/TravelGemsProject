import { handleSaveLocation } from '@/lib/action';
import styles from './saveLocation.module.css'

const SaveLocation = ({id, user}) => {
    
    return (
        <form action={handleSaveLocation(id, user)}>
            <button className={`${styles.button} ${user?.savedLocations.includes(id) && styles.active}`}>
                Save Location
            </button>
        </form>
    )
}

export default SaveLocation;