import Image from "next/image";


export default function LogoSVG() {
    return (
        <Image
            src="/ab-logo.svg"
            width={100}
            height={200}
            alt="Picture of the logo"
            className="w-full h-full"
        />
    )
}