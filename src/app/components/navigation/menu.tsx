"use client"

import Link from 'next/link'
import paths from 'paths'
import { usePathname } from 'next/navigation'


/**
 * Renders the menu component with a quick link to form, and Home and Projects pages.
 *
 * @return {JSX.Element} The JSX element representing the menu component.
 */
export default function Menu(): JSX.Element {

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