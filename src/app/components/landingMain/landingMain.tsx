import Button from "@/button"
import Link from 'next/link'


export default function LandingMain() {
    return (
        <section>
            <p>Hi, I am</p>
            <h1>Anton Belov</h1>
            <h3>Physicist by degree, developer by choice</h3>
            <Button text={"Resume"} btnClass={""} />
            <Link href="/#contact-section">Contact</Link>
        </section>
    )
}