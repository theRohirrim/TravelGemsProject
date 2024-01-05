import Link from 'next/link';
import styles from './header.module.css'
import { handleLogout } from '@/lib/action';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="../Graphic Design/3.png" alt="travel gems logo" />
            </div>
            <div className={styles.auth}>
                <Link href="/login">Log In</Link>
                <form action={handleLogout}>
                    <button className={styles.logout}>Log Out</button>
                </form>
            </div>
        </div>
    )
}

export default Header;