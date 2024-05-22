import Link from "next/link";
import ProjectsLayout from "./children_layout"
import projects, {ProjectType} from "./projects"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";



function Project({ params }: { params: {project: ProjectType} }) {
    const project = params.project
    return (
        <li className="h-96 p-5 bg-primary border-inactive-button-grey dark:border-primary border-2 relative
        flex flex-wrap justify-center items-center content-center gap-2
        group
        ">
            <Image
                src={project.imagesrc}
                fill={true}
                alt={project.description}
                className="z-10"
                style={{objectFit:"cover"}}
            />
            <div className="z-20 absolute w-full h-full bg-black opacity-0 dark:opacity-20 group-hover:opacity-60 duration-300"></div>
            <div className="z-20 text-primary duration-300 h-full w-full group-hover:opacity-100 opacity-0
            flex flex-col items-center justify-center gap-2
            ">
                <h4 className="text-center font-medium custom-drop-shadow">{project.name}</h4>
                <p className="text-center mx-8 custom-drop-shadow">{project.description}</p>
                <Link href={project.url}>
                    <button className="px-4 py-2 landing-btn rounded-lg bg-orange-xtra custom-drop-shadow
                    flex items-center
                    "><p>See more</p> <FaArrowRight className="ml-1"/></button>
                </Link>
            </div>
        </li>
    )
}


export default function ProjectsPage({ params }: { params: {category: string}}) {
    const selectedProjects: ProjectType[] = Object.values(projects).filter(c => c.category == params.category);
    
    return (
        <ProjectsLayout>
            <main className="min-h-screen
            flex justify-center">
                <ul className="w-10/12 my-32
                grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedProjects.map(project => (
                        <Project key={project.id} params={{project}} />
                    ))}
                </ul>
            </main>
        </ProjectsLayout>
    )
}