import ProjectsLayout from "./children_layout"
import projects from "./projects"
import Image from "next/image";


interface ProjectType {
    readonly category: string;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly imagesrc: string;
    readonly complete: boolean;
    readonly url: URL;
}


function Project({ params }: { params: {project: ProjectType} }) {
    const project = params.project
    return (
        <li key={project.id} className="h-[22rem] relative flex justify-center items-center">
            <Image
                src={project.imagesrc}
                fill={true}
                alt={project.description}
                objectFit="cover"
            />
        </li>
    )
}


export default function Page({ params }: { params: {category: string}}) {
    const selectedProjects: ProjectType[] = Object.values(projects).filter(c => c.category == params.category);
    
    return (
        <ProjectsLayout>
            <main className="min-h-screen
            flex justify-center">
                <ul className="w-10/12 my-10 outline-all
                grid grid-cols-3 gap-6">
                    {selectedProjects.map(project => (
                        <Project params={{project}} />
                    ))}
                </ul>
            </main>
        </ProjectsLayout>
    )
}