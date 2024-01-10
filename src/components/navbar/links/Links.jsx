"use client";
import NavLink from "./navlink/NavLink";
import styles from "./links.module.css"
import { useSession } from 'next-auth/react';

const Links = () => {
    const { data: session } = useSession();
    console.log(session)
    const profilePath = session ? `/user/${session.user.id}` : '/login';
    const links = [
        {
            title: 'Explore',
            path: '/explore',
            icon: 'explore',
        },
        {
            title: 'Network',
            path: '/network',
            icon: 'network',
        },
        {
            title: 'Saved',
            path: '/saved',
            icon: 'saved',
        },
        {
            title: 'Profile',
            path: profilePath,
            icon: 'user',
        }
    ];

    return (
        <div className={styles.links}>
            {links.map(link => (
                <NavLink item={link} key={link.title} />
            ))}
        </div>
    );
}

export default Links;
