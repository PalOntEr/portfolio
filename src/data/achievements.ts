import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/projects/*.{jpeg,jpg,png,gif,svg}', { eager: true });

export enum ACHIEVEMENT_ENUM {
    NAME = 0,
    IMAGE = 1,
    DESCRIPTION = 2,
    LINK = 3,
    STACK = 4,
    TYPES = 5
}

export const achievementsData = [
    {
        name: "NASA International Space Apps Challenge 2025 - Luxe",
        imgsrc: images["../assets/projects/Luxe.jpg"].default,
        description:
            "First place and global nominee in the NASA International Space Apps Challenge 2025 with 'Luxe', an AI-powered data analysis tool that predicted the possibility of celestial bodies being exoplanets based on data provided byNASA.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7383516554531074048/",
        stack: ["Python", "Flask", "Pandas"],
        types: ["Won Hackathon"],
    },
    {
        name: "Swift Changemakers Hackathon 2025 - Liverpool Challenge",
        imgsrc: images["../assets/projects/Liverpool.jpg"].default,
        description:
            "First place in the Liverpool Challenge of the Swift Changemakers Hackathon 2025 with a solution that helped vendors and customers of Liverpool by providing a mobile application for vendors that combined the online shopping experience and local services.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7330432103630725120/",
        stack: ["Swift", "Firebase"],
        types: ["Won Hackathon"],
    },
    {
        name: "Hack Nation's AI Hackathon 2026 - Unmapped by TrePalDo",
        imgsrc: images["../assets/projects/Unmapped.png"].default,
        description:
            "Participant in the World Bank Youth Summit 2026 with 'Unmapped by TrePalDo', an AI-powered infrastructure that maps real-world skills to jobs and opportunities. Configurable by country, enabling governments and organizations to connect youth with economic pathways using local data.",
        link: "https://projects.hack-nation.ai/#/project/1476d12d-35aa-4e47-8241-714a5e140542",
        stack: ["Python", "FastAPI", "Pandas", "SciKit-Learn"],
        types: ["Participated Hackathon"],
    },
];
