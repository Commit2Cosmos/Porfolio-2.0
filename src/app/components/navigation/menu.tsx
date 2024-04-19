import Link from 'next/link'


export default function Menu() {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/#contact-section">Contact</Link>
        </div>
    )
}