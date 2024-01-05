import { getUserById } from "@/lib/data"
import styles from './singleuser.module.css'
import Reviews from "@/components/profile/reviews/Reviews"
import SelectView from "@/components/profile/selectView/SelectView"
import Locations from "@/components/profile/Locations/Locations"

const SingleUserPage = async ({ params }) => {
    const id = params.id

    let user = await getUserById(id)
    user = user[0]

    return (
        <main className={styles.container}>
            <h1>{user.username}</h1>
            <h1>profile img</h1>
            <p>{user.email}</p>
            <SelectView />
            <Reviews id={id} />
            <Locations id={id} username={user.username}/>
        </main>
    )
}

export default SingleUserPage;