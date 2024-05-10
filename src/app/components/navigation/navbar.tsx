import LogoSVG from "./logosvg"
import Menu from "./menu"
import ThemeSwitch from "./theme_switch"


export default function Navbar() {
    return (
        <nav className="fixed w-full h-[4.5rem] my-6 px-[10%] z-50 pointer-events-none
        flex justify-between
        ">
            <div className="scale-125 z-20">
                <LogoSVG />
            </div>
            <div className="flex items-stretch gap-10">
                <ThemeSwitch />
                <Menu />
            </div>
        </nav>
    )
}