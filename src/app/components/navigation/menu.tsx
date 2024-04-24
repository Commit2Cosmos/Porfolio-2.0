import Link from 'next/link'
import paths from 'paths'


export default function Menu() {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href={paths.projects}>Projects</Link>
            <Link href={paths.contact}>Contact</Link>
        </div>
    )
}