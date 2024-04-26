import LogoSVG from "./logosvg"
import Menu from "./menu"


export default function Navbar() {
    return (
        <nav className="fixed w-full h-[4.5rem] my-6 px-[10%]
        flex justify-between
        ">
            <div className="scale-125">
                <LogoSVG />
            </div>
            <Menu />
        </nav>
    )
}