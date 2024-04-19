import Button from "@/button"


export default function LandingMain() {
    return (
        <section>
            <p>Hi, I am</p>
            <h1>Anton Belov</h1>
            <h3>Physicist by degree, developer by choice</h3>
            <Button text={"Resume"} btnClass={""} />
            <Button text={"Contact"} btnClass={""} />
        </section>
    )
}