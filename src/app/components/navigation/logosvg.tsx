import Image from "next/image";


export default function LogoSVG() {
    return (
        <Image
            src="/ab-logo.svg"
            width={200}
            height={900}
            alt="Picture of the logo"
        />
    )
}