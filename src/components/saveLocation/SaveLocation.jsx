'use client'

import { saveLocationAction } from '@/lib/action';
import styles from './saveLocation.module.css';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const SaveLocation = ({id, user, setPageLocations}) => {
    const [isSaved, setIsSaved] = useState(user?.savedLocations.includes(id))
    const [error, setError] = useState(false)
    
    let pathname = usePathname()

    const handleSaveLocation = async (id, user) => {
        try {
            await saveLocationAction(id, user.email);
            setIsSaved((prev) => {return !prev})
            if (setPageLocations) {
                // setPageLocations((prev) => {
                //     return prev.filter(function(e) { return e._id !== id })
                // })
            }
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