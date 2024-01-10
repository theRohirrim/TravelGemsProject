'use client'

import { handleSaveLocation, saveLocationAction } from '@/lib/action';
import styles from './saveLocation.module.css';
import { useState } from 'react';

const SaveLocation = ({id, user}) => {
    const [isSaved, setIsSaved] = useState(user?.savedLocations.includes(id))
    const [error, setError] = useState(false)

    const handleSaveLocation = async (id, user) => {
        try {
            await saveLocationAction(id, user.email);
            setIsSaved((prev) => {return !prev})
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    return (
        <div className={styles.container}>
            <button onClick={() => handleSaveLocation(id, user)} className={`${styles.button} ${isSaved && styles.active}`}>
                Save Location
            </button>
            {error && "Try again later"}
        </div>
    )
}

export default SaveLocation;