import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <img className={styles.logo} src="../Graphic Design/6.png" alt="travel gems logo" />
                <img className= {styles.header} src="../Graphic Design/7.png" alt="travel gems logo" />
            </div>


            <div className={styles.auth}>AUTHENTICATION</div>
        </div>
    )
}

export default Header;