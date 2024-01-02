import Links from './links/Links'
import styles from "./navbar.module.css"

const NavBar = () => {
    return (
        <div className={styles.container}>
            <Links />
        </div>
    )
}

export default NavBar