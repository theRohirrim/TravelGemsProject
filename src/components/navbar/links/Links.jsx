'use client';

import { useState } from "react"
import NavLink from "./navlink/NavLink";

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
        title: 'user',
        path: '/user'
    }
]

const Links = () => {
    return (
        <div>
            <div>
            {links.map((link => (
                    <NavLink item={link} key={link.title} />
                )))}
            </div>
        </div>
    )
}

export default Links;