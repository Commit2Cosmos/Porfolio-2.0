import Image from "next/image"


type StackProps = {
    text: string,
    icon_path: string,
    alt: string
}


function Stack(props: StackProps) {

    const { text, icon_path, alt } = props;

    return (
        <div className="h-15 border-2 border-black rounded-3xl py-0.5 pr-3 pl-2
        flex items-center justify-center gap-1
        ">
            <Image
            src={ icon_path }
            alt={alt}
            width={50}
            height={100}
            className="p-1"/>
            <p>{ text }</p>
        </div>
    )
}


export default function Stacks() {
    return (
        <div className="my-3
        flex flex-wrap justify-center gap-4
        ">
            <Stack text={"TypeScript"} icon_path={"/typescript-16-svgrepo-com.svg"} alt={""} />
            <Stack text={"Next.js"} icon_path={"/next-dot-js-svgrepo-com.svg"} alt={""} />
            <Stack text={"Node.js"} icon_path={"/node-js-svgrepo-com.svg"} alt={""} />
            <Stack text={"Git"} icon_path={"/git-svgrepo-com.svg"} alt={""} />
            <Stack text={"PyTorch"} icon_path={"/pytorch-svgrepo-com.svg"} alt={""} />
            <Stack text={"TensorFlow"} icon_path={"/tensorflow-svgrepo-com.svg"} alt={""} />
            <Stack text={"Rust"} icon_path={"/rust-svgrepo-com.svg"} alt={""} />
            <Stack text={"PostgreSQL"} icon_path={"/postgresql-svgrepo-com.svg"} alt={""} />
            <Stack text={"TailwindCSS"} icon_path={"/tailwindcss-svgrepo-com.svg"} alt={""} />
        </div>
    )
}