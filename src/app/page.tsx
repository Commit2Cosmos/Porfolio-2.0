import Navbar from "@/navigation/navbar";
import Footer from "@/footer/footer"
import LandingMain from "@/landingMain/landingMain"
import About from "@/about/about"
import Contact from "@/contact/contact"



export default function Landing() {
    return (
        <main>
            <Navbar />
            <LandingMain />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}
