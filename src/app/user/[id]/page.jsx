import { getLocationsByUsername, getReviewsById, getUserById } from "@/lib/data"
import styles from './singleuser.module.css'
import Locations from "@/components/profile/Locations/Locations"
import Reviews from "@/components/profile/reviews/Reviews"

const SingleUserPage = async ({ params }) => {
    const id = params.id

    let user = await getUserById(id)
    user = user[0]
    const userReviews = await getReviewsById(id)
    const locations = await getLocationsByUsername(user.username)

    return (
        <main className={styles.container}>
            <h1>{user.username}</h1>
            <h1>profile img</h1>
            <p>{user.email}</p>
            <Reviews userReviews={userReviews} /> 
            <Locations locations={locations} />
        </main>
    )
}

export default SingleUserPage;