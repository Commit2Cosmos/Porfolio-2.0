import Image from "next/image"


type StackProps = {
    text: string,
    icon_path: string,
    alt: string,
    additional_classes: string
}


function Stack(props: StackProps) {

    const { text, icon_path, alt } = props;

    return (
        <div className={`h-15 border-2 border-black rounded-3xl py-0.5 pr-3 pl-1 group
        flex items-center justify-center gap-1
        `}>
            <Image
            src={ icon_path }
            alt={alt}
            width={50}
            height={100}
            className={`p-2 rounded-full ${props.additional_classes} duration-200`}/>
            <p>{ text }</p>
        </div>
    )
}


export default function Stacks() {
    return (
        <div className="my-3
        flex flex-wrap justify-center gap-4
        ">
            <Stack text={"TypeScript"} icon_path={"/typescript-svgrepo-com.svg"} alt={""} additional_classes={"group-hover:ts-colour"} />
            <Stack text={"Next.js"} icon_path={"/next-dot-js-svgrepo-com.svg"} alt={""} additional_classes={"group-hover:next-colour"} />
            <Stack text={"Node.js"} icon_path={"/node-js-svgrepo-com.svg"} alt={""} additional_classes={"group-hover:node-colour"} />
            <Stack text={"Git"} icon_path={"/git-svgrepo-com.svg"} alt={""} additional_classes={"group-hover:git-colour"} />
            <Stack text={"PyTorch"} icon_path={"/pytorch-svgrepo-com.svg"} alt={""} additional_classes={"group-hover:torch-colour"} />
            <Stack text={"TensorFlow"} icon_path={"/tensorflow-svgrepo-com.svg"} alt={""} additional_classes={"group-hover:tensor-colour"} />
            <Stack text={"Rust"} icon_path={"/rust-svgrepo-com.svg"} alt={""} additional_classes={"group-hover:rust-colour"} />
            <Stack text={"PostgreSQL"} icon_path={"/postgresql-svgrepo-com.svg"} alt={""} additional_classes="rounded-none group-hover:postgresql-colour" />
            <Stack text={"TailwindCSS"} icon_path={"/tailwindcss-svgrepo-com.svg"} alt={""} additional_classes={"group-hover:tailwind-colour"} />
        </div>
    )
}