'use client'

import { handleSaveLocation, saveLocationAction } from '@/lib/action';
import styles from './saveLocation.module.css';

const SaveLocation = ({id, user}) => {

    const handleSaveLocation = async (id, user) => {
        await saveLocationAction(id, user.email);
    }

    return (
        <button onClick={() => handleSaveLocation(id, user)} className={`${styles.button} ${user?.savedLocations.includes(id) && styles.active}`}>
            Save Location
        </button>
    )
}

export default SaveLocation;