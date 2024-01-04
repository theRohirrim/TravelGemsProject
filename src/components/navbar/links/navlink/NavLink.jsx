'use client';

const { default: Link } = require("next/link");
const { usePathname } = require("next/navigation");
import styles from './navlink.module.css'
import { FaSearch , FaBookmark, FaUser } from 'react-icons/fa';
import { IoGitNetwork  } from 'react-icons/io5'
const iconMapping = {
    explore: <FaSearch />,
    network: <IoGitNetwork  />,
    saved: <FaBookmark />,
    user: <FaUser />,
};

const NavLink = ({ item }) => {
    const pathName = usePathname();

    console.log('path: ', pathName, '& item.path: ', item.path)

    return (
        <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {item.icon && iconMapping[item.icon]} 
            <span>{item.title}</span>
        </Link>
    );
};

export default NavLink;
