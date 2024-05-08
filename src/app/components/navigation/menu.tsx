import Link from 'next/link'
import paths from 'paths'


export default function Menu() {

    // TODO: replace with state
    const isActive = true;

    return (
        <div className="custom-border shadow-menu-shadow backdrop-blur pointer-events-auto
        font-semibold
        flex items-center justify-center
        ">
            <Link className={`navbar-menu-items
            ${isActive ? 'bg-black text-white' : ''}`} href="/">Home</Link>
            <Link className="navbar-menu-items" href={paths.projects}>Projects</Link>
            <Link className="navbar-menu-items" href={paths.contact}>Contact</Link>
        </div>
    )
}