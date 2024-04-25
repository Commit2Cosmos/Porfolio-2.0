import Image from "next/image";


export default function LogoSVG() {
    return (
        <Image
            src="/ab-logo.svg"
            width={200}
            height={200}
            alt="Picture of the logo"
            className="scale-125"
        />
    )
}