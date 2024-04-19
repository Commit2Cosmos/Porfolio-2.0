import Navbar from "@/navigation/navbar";
import LandingMain from "@/main_page/landingMain/landingMain"
import About from "@/main_page/about/about"
import Contact from "@/contact/contact"
import Footer from "@/footer/footer"



export default function Landing() {
    return (
        <>
            <Navbar />
            <main>
                <LandingMain />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
