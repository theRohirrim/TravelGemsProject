import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.auth}>AUTHENTICATION</div>
        </div>
    )
}

export default Header;