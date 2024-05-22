import { v4 as uuidv4 } from 'uuid';


type ProjectType = {
    readonly category: string;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly imagesrc: string;
    readonly complete: boolean;
    readonly url: string;
}


const projects = {
    "capsnet": {
        id: uuidv4(),
        category: "ml",
        name: 'CapsNet for Morphology Evolution Prediction',
        description: 'Train a capsule based neural network to classify galaxies!',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/GalaxyZoo-CapsNet',
        imagesrc: "/projects/capsnet.png",
    },

    "deepcaps": {
        id: uuidv4(),
        category: "ml",
        name: 'DeepCaps: Deeper Capsule Networks',
        description: 'Construct and compare deeper CapsNets on various classification tasks!',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/DeepCaps_Pytorch',
        imagesrc: "/projects/deepcaps.png",
    },

    "covidgru": {
        id: uuidv4(),
        category: "ml",
        name: 'OpenVaccine:COVID-19 Kaggle Competition',
        description: 'My solution to the COVID-19 mRNA Vaccine Degradation Prediction',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/GRU_covid',
        imagesrc: "/projects/covid.png",
    },

    "textsummarizer": {
        id: uuidv4(),
        category: "ml",
        name: 'Text Summarizer',
        description: 'A transformer model that summarizes given input in PyTorch',
        complete: false,
        url: 'https://github.com/Commit2Cosmos/Text_Summarizer_PyTorch',
        imagesrc: "/projects/summarizer.png",
    },

    "deeplens1": {
        id: uuidv4(),
        category: "ml",
        name: 'DeepLense: Test 1',
        description: 'Solution to Test 1 for prospective GSoC 2024 applicants',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/GSOC24_DeepLense_Test_1',
        imagesrc: "/projects/deeplense.png",
    },

    "deeplens2": {
        id: uuidv4(),
        category: "ml",
        name: 'DeepLense: Test 2',
        description: 'Solution to Test 2 for prospective GSoC 2024 applicants',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/GSOC24_DeepLense_Test_2',
        imagesrc: "/projects/deeplense.png",
    },

    "deeplens3": {
        id: uuidv4(),
        category: "ml",
        name: 'DeepLense: Test 3',
        description: 'Solution to Test 3 for prospective GSoC 2024 applicants',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/GSOC24_DeepLense_Test_3',
        imagesrc: "/projects/deeplense.png",
    },

    "deeplens4": {
        id: uuidv4(),
        category: "ml",
        name: 'DeepLense: Test 4',
        description: 'Solution to Test 4 for prospective GSoC 2024 applicants',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/GSOC24_DeepLense_Test_4',
        imagesrc: "/projects/deeplense.png",
    },

    "deeplens5": {
        id: uuidv4(),
        category: "ml",
        name: 'DeepLense: Test 5',
        description: 'Solution to Test 5 for prospective GSoC 2024 applicants',
        complete: false,
        url: 'https://github.com/Commit2Cosmos/GSOC24_DeepLense_Test_5',
        imagesrc: "/projects/deeplense.png",
    },

    "neetcodeml": {
        id: uuidv4(),
        category: "ml",
        name: 'Beginner PyTorch Networks',
        description: 'Solutions to deep learning related challenges by NeetCode',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/NeetCodeMLSolutions',
        imagesrc: "/projects/neetcode.png",
    },

    "basictorch": {
        id: uuidv4(),
        category: "ml",
        name: 'PyTorch Basics',
        description: 'Implementations of basic neural networks from scratch',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/Pytorch_Small_Projects',
        imagesrc: "/projects/torchh.png",
    },





    "portfolio": {
        id: uuidv4(),
        category: "frontend",
        name: 'Porfolio Website',
        description: 'Summary of my projects and skills made using Next.JS, TailwindCSS and Supabase',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/Porfolio-2.0',
        imagesrc: "/projects/portfolio.png",
    },
    
    "sorting_vis": {
        id: uuidv4(),
        category: "frontend",
        name: 'Sorting Visualizer',
        description: 'A visualization tools for popular sorting algorithms',
        complete: false,
        url: 'https://github.com/Commit2Cosmos/Sorting-Visualizer',
        imagesrc: "/projects/visualizer.png",
    },
    
    "portfolio_old": {
        id: uuidv4(),
        category: "frontend",
        name: 'First Porfolio Website',
        description: 'My old porfolio website',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/Porfolio-2.0',
        imagesrc: "/projects/portfolio_old.png",
    },






    "montecarlo": {
        id: uuidv4(),
        category: "other",
        name: 'Monte Carlo Simulation',
        description: 'Simulation of particles in a box with Python',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/MonteCarloSimulation',
        imagesrc: "/projects/montecarlo.png",
    },

    "pythonleetcode": {
        id: uuidv4(),
        category: "other",
        name: 'Python LeetCode Solutions',
        description: 'Solutions to LeetCode challenges in Python',
        complete: false,
        url: 'https://github.com/Commit2Cosmos/PythonLeetCodeSolutions',
        imagesrc: "/projects/leetcode.png",
    },

    "jsleetcode": {
        id: uuidv4(),
        category: "other",
        name: 'JavaScript LeetCode Solutions',
        description: 'Solutions to LeetCode challenges in JavaScript',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/JavaScriptLeetCodeSolutions',
        imagesrc: "/projects/leetcode.png",
    },

    "rustleetcode": {
        id: uuidv4(),
        category: "other",
        name: 'Rust LeetCode Solutions',
        description: 'Solutions to LeetCode challenges in Rust',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/RustLeetCodeSolutions',
        imagesrc: "/projects/leetcode.png",
    },

    "car": {
        id: uuidv4(),
        category: "other",
        name: 'Self-Driving Car',
        description: 'Teach a car how to drive using CNNs!',
        complete: false,
        url: 'https://github.com/Commit2Cosmos/Car',
        imagesrc: "/projects/car.png",
    },

    "solar": {
        id: uuidv4(),
        category: "other",
        name: 'Solar System Simulation',
        description: 'Simulating the Solar System using various numerical methods',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/SolarSystemSimulation',
        imagesrc: "/projects/solarsystem.png",
    },

    "animations": {
        id: uuidv4(),
        category: "other",
        name: 'Animations with JavaScript',
        description: 'JavaScript animations using canvas',
        complete: true,
        url: 'https://github.com/Commit2Cosmos/JSProjects',
        imagesrc: "/projects/js.png",
    },
}

export default projects;
export type {ProjectType};