import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="../Graphic Design/3.png" alt="travel gems logo" />
            </div>
            <div className={styles.auth}>AUTHENTICATION</div>
        </div>
    )
}

export default Header;