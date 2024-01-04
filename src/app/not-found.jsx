const { default: Link } = require("next/link")
import styles from './page.module.css'

const NotFound = () => {
    return (
        <main className={styles.notFoundContainer}>
            <h2>Not Found</h2>
            <p>Sorry, the page you are looking for does not exist</p>
            <Link href="/">Return Home</Link>
        </main>
    )
}

export default NotFound