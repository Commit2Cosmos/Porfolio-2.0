import Menu from "./menu"
import ThemeSwitch from "./theme_switch"
import Image from "next/image"


export default function Navbar() {
    return (
        <nav className="fixed w-full h-[4.5rem] my-6 px-[10%] z-50 pointer-events-none
        flex justify-between
        ">
            <div className="scale-125 z-20">
                <Image
                    src="/ab-logo.svg"
                    width={100}
                    height={200}
                    alt="Picture of the logo"
                    className="w-full h-full dark:whitish-colour"
                />
            </div>
            <div className="flex items-stretch gap-10">
                <ThemeSwitch />
                <Menu />
            </div>
        </nav>
    )
}