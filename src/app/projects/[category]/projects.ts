import { v4 as uuidv4 } from 'uuid';

export default {
    "capsnet": {
        id: uuidv4(),
        category: "ml",
        name: 'CapsNet for Morphology Evolution Prediction',
        description: 'Train a capsule based neural network to classify galaxies!',
        complete: true,
        url: new URL('https://github.com/Commit2Cosmos/GalaxyZoo-CapsNet'),
        imagesrc: "/projects/capsnet2.png",
    },

    "deepcaps": {
        id: uuidv4(),
        category: "ml",
        name: 'DeepCaps: Deeper Capsule Networks',
        description: 'Construct and compare deeper CapsNets on various classification tasks!',
        complete: true,
        url: new URL('https://github.com/Commit2Cosmos/DeepCaps_Pytorch'),
        imagesrc: "/projects/deepcaps.png",
    },

    "basic_torch": {
        id: uuidv4(),
        category: "ml",
        name: 'Beginner PyTorch Networks',
        description: 'Implementing basic neural networks from scratch!',
        complete: true,
        url: new URL('https://github.com/Commit2Cosmos/Pytorch_Small_Projects'),
        imagesrc: "/projects/torchh.png",
    },

    "sorting_vis": {
        id: uuidv4(),
        category: "frontend",
        name: 'Sorting Visualizer',
        description: 'A visualization tools for popular sorting algorithms',
        complete: false,
        url: new URL('https://github.com/Commit2Cosmos/Sorting-Visualizer'),
        imagesrc: "/projects/visualizer.png",
    },

    "montecarlo": {
        id: uuidv4(),
        category: "other",
        name: 'Monte Carlo Simulation',
        description: 'Simulation of particles in a box with Python',
        complete: true,
        url: new URL('https://github.com/Commit2Cosmos/MonteCarloSimulation'),
        imagesrc: "/projects/montecarlo.png",
    },

    "car": {
        id: uuidv4(),
        category: "other",
        name: 'Self-Driving Car',
        description: 'Teach a car how to drive using CNNs!',
        complete: false,
        url: new URL('https://github.com/Commit2Cosmos/Car'),
        imagesrc: "/projects/car.png",
    },

    "solar": {
        id: uuidv4(),
        category: "other",
        name: 'Solar System Simulation',
        description: 'Simulating the Solar System using various numerical methods',
        complete: true,
        url: new URL('https://github.com/Commit2Cosmos/SolarSystemSimulation'),
        imagesrc: "/projects/solarsystem.png",
    },

    "animations": {
        id: uuidv4(),
        category: "other",
        name: 'Animations with JavaScript',
        description: 'JavaScript animations using canvas',
        complete: true,
        url: new URL('https://github.com/Commit2Cosmos/JSProjects'),
        imagesrc: "/projects/js.png",
    }
}