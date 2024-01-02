'use client';

import { useState } from "react"
import NavLink from "./navlink/NavLink";
import styles from "./links.module.css"

const links = [
    {
        title: 'Explore',
        path: '/'
    },
    {
        title: 'Network',
        path: '/network'
    },
    {
        title: 'Saved',
        path: '/saved'
    },
    {
        title: 'User',
        path: '/user'
    }
]

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