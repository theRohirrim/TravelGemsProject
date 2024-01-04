import { getUserById } from "@/lib/data"
import styles from './singleuser.module.css'

const SingleUserPage = async ({ params }) => {
    const id = params.id

    // Get user data by ID
    let user = await getUserById(id)
    user = user[0]

    console.log(user)

    return (
        <main className={styles.container}>
            <h1>{user.username}</h1>
            <h2>Email: {user.email}</h2>
            <h2>Password: {user.password}</h2>
        </main>
    )
}

export default SingleUserPage;