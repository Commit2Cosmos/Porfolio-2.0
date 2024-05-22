import Image from "next/image"
import stacks from "./stacks_all";


interface StackProps {
    id: string;
    text: string;
    icon_path: string;
    alt: string;
    additional_classes: string;
}


function Stack({ params }: { params: {project: StackProps} }) {

    const { text, icon_path, alt, additional_classes } = params.project;

    return (
        <div className={`h-15 border-2 border-black dark:border-white rounded-3xl py-0.5 pr-3 pl-1 group
        flex items-center justify-center gap-1
        `}>
            <Image
            src={ `/stacks/${icon_path}` }
            alt={alt}
            width={50}
            height={0}
            className={`p-2 rounded-full ${additional_classes} duration-100 dark:white-colour`}/>
            <p>{ text }</p>
        </div>
    )
}


export default function Stacks() {

    const stacksAll: StackProps[] = Object.values(stacks);

    return (
        <ul className="my-3
        flex flex-wrap justify-center gap-4
        ">
            {stacksAll.map(project => (
                <li key={project.id}><Stack params={{project}} /></li>
            ))}
        </ul>
    )
}