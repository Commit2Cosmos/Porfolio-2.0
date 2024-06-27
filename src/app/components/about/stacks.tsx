import Image from "next/image"
import stacks from "./stacks_all";


interface StackProps {
    id: string;
    text: string;
    icon_path: string;
    alt: string;
    additional_classes: string;
}


/**
 * A template for rendering a stack component with the associated image.
 *
 * @param {Object} params - An object containing the project details.
 * @param {string} params.project.id - The unique identifier of the stack.
 * @param {string} params.project.text - The name of the stack.
 * @param {string} params.project.icon_path - The path to the icon image.
 * @param {string} params.project.alt - The alternative text for the image.
 * @param {string} params.project.additional_classes - Additional CSS classes for styling.
 * @return {JSX.Element} The rendered stack component.
 */
function Stack({ params }: { params: {stack: StackProps} }): JSX.Element {

    const { text, icon_path, alt, additional_classes } = params.stack;

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


/**
 * Renders a list of stack components.
 *
 * @return {JSX.Element} The list of stack components.
 */
export default function Stacks(): JSX.Element {

    const stacksAll: StackProps[] = Object.values(stacks);

    return (
        <ul className="my-3
        flex flex-wrap justify-center gap-4
        ">
            {stacksAll.map(stack => (
                <li key={stack.id}><Stack params={{stack}} /></li>
            ))}
        </ul>
    )
}