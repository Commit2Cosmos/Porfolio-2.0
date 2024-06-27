import Link from "next/link"
import Menu from "./menu"
import ThemeSwitch from "./theme_switch"
import Image from "next/image"


/**
 * Renders the navigation bar component, containing the logo, the menu and a darkmode switch button.
 *
 * @return {JSX.Element} The JSX element representing the navigation bar.
 */
export default function Navbar(): JSX.Element {
    return (
        <nav className="fixed w-full h-[4.5rem] my-6 px-[5%] lg:px-[10%] z-50 pointer-events-none
        flex justify-end">
            <Link className="absolute w-20 h-full z-20 left-[10%] top-0 pointer-events-auto" href="/">
                <Image
                    src="/ab-logo.svg"
                    fill={true}
                    alt="Picture of the logo"
                    className="w-full h-full dark:whitish-colour scale-125"
                />
            </Link>
            <div className="h-full w-fit flex gap-10">
                <ThemeSwitch />
                <Menu />
            </div>
        </nav>
    )
}