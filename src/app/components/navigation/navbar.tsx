import LogoSVG from "./logosvg"
import Menu from "./menu"


export default function Navbar() {
    return (
        <nav className="fixed w-full h-[4.5rem] my-6 px-32
        flex justify-between
        ">
            <LogoSVG />
            <Menu />
        </nav>
    )
}