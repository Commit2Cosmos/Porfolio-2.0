import Navbar from "@/navigation/navbar";
import LandingMain from "@/landingMain/landingMain"
import About from "@/about/about"
import Contact from "@/contact/contact"



export default function Landing() {
    return (
        <>
            <Navbar />
            <main className="">
                <LandingMain />
                <About />
                <Contact />
            </main>
        </>
    );
}
