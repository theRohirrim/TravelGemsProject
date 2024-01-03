'use client';

import { useState } from "react"
import NavLink from "./navlink/NavLink";
import styles from "./links.module.css"


const links = [
    {
        title: 'Explore',
        path: '/',
        icon: 'explore', // Specify the icon key
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
        title: 'User',
        path: '/user',
        icon: 'user',
    }
];

const Links = () => {
    return (
        <div className={styles.links}>
        {links.map((link => (
                <NavLink item={link} key={link.title} />
            )))}
        </div>
    )
}

export default Links;