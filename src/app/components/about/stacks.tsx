import Image from "next/image"


type StackProps = {
    text: string,
    icon_path: string,
    alt: string
}


function Stack(props: StackProps) {

    const { text, icon_path, alt } = props;

    return (
        <div>
            <Image 
            src={ icon_path }
            alt={alt}
            width={50}
            height={100}/>
            <p>{ text }</p>
        </div>
    )
}


export default function Stacks() {
    return (
        <div>
            <Stack text={"TypeScript"} icon_path={"/ab-logo.svg"} alt={""} />
            <Stack text={"Next.js"} icon_path={"/ab-logo.svg"} alt={""} />
            <Stack text={"Node js"} icon_path={"/ab-logo.svg"} alt={""} />
            <Stack text={"Git"} icon_path={"/ab-logo.svg"} alt={""} />
            <Stack text={"PyTorch"} icon_path={"/ab-logo.svg"} alt={""} />
            <Stack text={"PyTorch"} icon_path={"/ab-logo.svg"} alt={""} />
            <Stack text={"PyTorch"} icon_path={"/ab-logo.svg"} alt={""} />
        </div>
    )
}