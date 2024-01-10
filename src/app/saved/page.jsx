import { auth } from '@/lib/auth';
import styles from './saved.module.css'
import { getSavedLocations, getUserByEmail } from '@/lib/data';
import LocationList from '@/components/explore/locationList/LocationList';
import SavedLocationWrapper from '@/components/explore/savedLocationWrapper/SavedLocationWrapper';

const SavedPage = async () => {
    // Get logged in user
    const session = await auth()
    let user;

    if (session) {
        user = await getUserByEmail(session.user.email)
        user = JSON.parse(JSON.stringify(user))
    }

    // Get locations by id in savedLocations
    const locations = await getSavedLocations(user.savedLocations);

    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Your Saved Locations</h1>
            </div>
            <SavedLocationWrapper locations={locations} user={user} />
        </main>
    )
}

export default SavedPage;