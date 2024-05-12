"use client"

import Link from 'next/link'
import paths from 'paths'
import { usePathname } from 'next/navigation'


export default function Menu() {

    const pathname = usePathname()

    return (
        <div className="custom-border shadow-menu-shadow dark:shadow-none backdrop-blur pointer-events-auto
        font-semibold
        flex items-center justify-center
        ">
            <Link className={`navbar-menu-items
            ${pathname === '/' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
            href="/">Home</Link>
            <Link className={`navbar-menu-items
            ${pathname != '/' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
            href={paths.projects}>Projects</Link>
            <Link className="navbar-menu-items" href={paths.contact}>Contact</Link>
        </div>
    )
}