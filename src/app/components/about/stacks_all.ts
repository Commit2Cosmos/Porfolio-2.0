import { v4 as uuidv4 } from 'uuid';


export default {
    "ts": {
        id: uuidv4(),
        text: "TypeScript",
        icon_path: "/typescript-svgrepo-com.svg",
        alt: "",
        additional_classes: "group-hover:ts-colour",
    },

    "nextjs": {
        id: uuidv4(),
        text: "Next.js",
        icon_path: "/next-dot-js-svgrepo-com.svg",
        alt: "",
        additional_classes: "group-hover:next-colour",
    },

    "node": {
        id: uuidv4(),
        text: "Node.js",
        icon_path: "/node-js-svgrepo-com.svg",
        alt: "",
        additional_classes: "group-hover:node-colour",
    },

    "git": {
        id: uuidv4(),
        text: "Git",
        icon_path: "/git-svgrepo-com.svg",
        alt: "",
        additional_classes: "group-hover:git-colour",
    },

    "torch": {
        id: uuidv4(),
        text: "PyTorch",
        icon_path: "/pytorch-svgrepo-com.svg",
        alt: "",
        additional_classes: "group-hover:torch-colour",
    },

    "rust": {
        id: uuidv4(),
        text: "Rust",
        icon_path: "/rust-svgrepo-com.svg",
        alt: "",
        additional_classes: "group-hover:rust-colour",
    },

    "postgresql": {
        id: uuidv4(),
        text: "PostgreSQL",
        icon_path: "/postgresql-svgrepo-com.svg",
        alt: "",
        additional_classes: "group-hover:postgresql-colour rounded-none",
    },

    "tailwind": {
        id: uuidv4(),
        text: "TailwindCSS",
        icon_path: "/tailwindcss-svgrepo-com.svg",
        alt: "",
        additional_classes: "group-hover:tailwind-colour",
    },
}


// <Stack text={"TailwindCSS"} icon_path={"/tailwindcss-svgrepo-com.svg"} alt={""} additional_classes={"group-hover:tailwind-colour"} />
// <Stack text={"TensorFlow"} icon_path={"/tensorflow-svgrepo-com.svg"} alt={""} additional_classes={"group-hover:tensor-colour"} />