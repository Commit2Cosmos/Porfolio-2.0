import Navbar from "@/navigation/navbar";
import Footer from "@/footer/footer"


export default function ProjectsLayout({
    children,
    }:{
    children: React.ReactNode;
    }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
