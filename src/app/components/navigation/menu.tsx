import Link from 'next/link'
import paths from 'paths'


export default function Menu() {

    // TODO: replace with state
    const isActive = true;

    return (
        <div className="font-semibold tracking-tight border-4 border-black rounded-lg shadow-menu-shadow backdrop-blur
        flex items-center justify-center mx-16
        ">
            <Link className={`navbar-menu-items menu-shadow
            ${isActive ? 'bg-black text-white' : ''}`} href="/">Home</Link>
            <Link className="navbar-menu-items" href={paths.projects}>Projects</Link>
            <Link className="navbar-menu-items" href={paths.contact}>Contact</Link>
        </div>
    )
}