import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/projects/*.{jpeg,jpg,png,gif,svg}', { eager: true });

export enum PROJECT_ENUM {
    NAME = 0,
    IMAGE = 1,
    DESCRIPTION = 2,
    LINK = 3,
    STACK = 4,
    TYPES = 5
}

export const projectsData = [
    {
        name: "Colegio San Pedro de Idiomas",
        imgsrc: images["../assets/projects/CSI.png"].default,
        description:
            "Web page for Colegio San Pedro de Idiomas, an English language school. Hosted in Google Cloud.",
        link: "https://csimx.org/",
        stack: [
            "Astro",
            "TypeScript",
            "TailwindCSS",
            "Google Cloud Run",
            "Firebase",
        ],
        types: ["Web Page"],
    },
    {
        name: "Medical 365",
        imgsrc: images["../assets/projects/Medical365.png"].default,
        description:
            "Health incident and employee status management system that helps manage health reports, track employee status, and generate reports.",
        link: "https://github.com/oscarvasquez28/Medical-365",
        stack: ["React", "Node.js", "MongoDB", "Express"],
        types: ["Web Page"],
    },
    {
        name: "Math Meet",
        imgsrc: images["../assets/projects/MathMeet.png"].default,
        description:
            "Video chat application that supports real-time chat and videochat functionality.",
        link: "https://github.com/PalOntEr/MathMeet",
        stack: ["C#", "React", "ASP.NET Core", "MS SQL"],
        types: ["Web Page"],
    },
    {
        name: "Derby Drift",
        imgsrc: images["../assets/projects/DerbyDrift.png"].default,
        description:
            "Online multiplayer web game that features two exciting gamemodes that promise fun and competitive play.",
        link: "https://github.com/oscarvasquez28/Derby-Drift",
        stack: ["TypeScript", "TailwindCSS", "Node.js", "Express", "Three.js"],
        types: ["Videogame"],
    },
    {
        name: "Unmapped by TrePalDo",
        imgsrc: images["../assets/projects/Unmapped.png"].default,
        description:
            "AI-powered infrastructure that maps real-world skills to jobs and opportunities. Configurable by country, enabling governments and organizations to connect youth with economic pathways using local data.",
        link: "https://github.com/oscarvasquez28/World-Bank-Youth-Summit",
        stack: ["Python", "FastAPI", "Pandas", "SciKit-Learn"],
        types: ["Web Page"],
    },
    {
        name: "PhotoHub",
        imgsrc: images["../assets/projects/PhotoHub.png"].default,
        description:
            "A desktop app that facilitates the application of image, video and camera filters using the CUDA cores of an NVIDIA graphics card",
        link: "https://github.com/PalOntEr/PhotoHub",
        stack: ["C#", "C++", "CUDA"],
        types: ["Desktop App"],
    },
    {
        name: "Database User Friendly Query Tool",
        imgsrc: images["../assets/projects/DQ.png"].default,
        description:
            "A custom database tool that shows users the database tables and allows them to filter using a user friendly interface, then generates the SQL query and shows the results.",
        link: "/portfolio/files/DQ.pdf",
        stack: ["C#", "MS SQL"],
        types: ["Desktop App"],
    },
    {
        name: "Contrincantes",
        imgsrc: images["../assets/projects/Contrincantes.jpg"].default,
        description:
            "Capture the flag online multiplayer third person shooter style game with unique visuals and gameplay mechanics",
        link: "https://www.youtube.com/watch?v=wAEE6pvhMfA",
        stack: ["Unreal Engine", "C++"],
        types: ["Videogame"],
    },
    {
        name: "AntDefender",
        imgsrc: images["../assets/projects/AntDefender.png"].default,
        description: "A 3D tower defense game written in C++ using DirectX11.",
        link: "https://github.com/PalOntEr/AntDefender",
        stack: ["C++", "DirectX11"],
        types: ["Videogame"],
    },
];
