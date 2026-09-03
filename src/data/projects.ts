import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/projects/*.{jpeg,jpg,png,gif,svg}', { eager: true });

export interface ProjectMonograph {
    id: string;
    index: string; // e.g. "01"
    name: string;
    domain: "GPU & Systems" | "Graphics & Games" | "Web & Cloud" | "Tools & Data";
    year: string;
    imgsrc: ImageMetadata;
    description: string;
    link: string;
    stack: string[];
    types: string[];
    technicalDetails: {
        problem: string;
        architecture: string;
        highlight: string;
    };
}

export const projectsData: ProjectMonograph[] = [
    {
        id: "photohub",
        index: "01",
        name: "PhotoHub",
        domain: "GPU & Systems",
        year: "2024",
        imgsrc: images["../assets/projects/PhotoHub.png"].default,
        description: "Hardware-accelerated image, video, and live stream processing engine utilizing custom NVIDIA CUDA kernels.",
        link: "https://github.com/PalOntEr/PhotoHub",
        stack: ["CUDA", "C++", "C#", ".NET"],
        types: ["GPU Engine", "Desktop App"],
        technicalDetails: {
            problem: "CPU-bound image convolution and video filtering suffered from severe throughput degradation at high resolutions.",
            architecture: "Offloaded 2D image matrix transforms directly into GPU global memory, scheduling parallel thread blocks across CUDA streaming multiprocessors.",
            highlight: "Achieved sub-millisecond per-frame filtering on live video feeds with minimal host-device memory copying overhead."
        }
    },
    {
        id: "antdefender",
        index: "02",
        name: "AntDefender",
        domain: "Graphics & Games",
        year: "2024",
        imgsrc: images["../assets/projects/AntDefender.png"].default,
        description: "Custom 3D tower defense game engine authored in C++ with a raw DirectX 11 rendering pipeline.",
        link: "https://github.com/PalOntEr/AntDefender",
        stack: ["C++", "DirectX 11", "HLSL", "Win32"],
        types: ["Graphics Engine", "Videogame"],
        technicalDetails: {
            problem: "Rendering hundreds of animated entities and pathfinding meshes simultaneously without off-the-shelf game engine bloat.",
            architecture: "Implemented custom vertex and pixel shaders in HLSL, dynamic constant buffer updates, and frustum culling for efficient draw-call batching.",
            highlight: "Maintained a rock-solid 60+ FPS under heavy unit loads with zero third-party engine dependencies."
        }
    },
    {
        id: "derby-drift",
        index: "03",
        name: "Derby Drift",
        domain: "Graphics & Games",
        year: "2023",
        imgsrc: images["../assets/projects/DerbyDrift.png"].default,
        description: "Real-time multiplayer web racing game powered by Three.js, custom physics, and authoritative WebSocket game loops.",
        link: "https://github.com/oscarvasquez28/Derby-Drift",
        stack: ["TypeScript", "Three.js", "Node.js", "Express", "TailwindCSS"],
        types: ["WebGL Game", "Multiplayer"],
        technicalDetails: {
            problem: "Synchronizing high-speed vehicle physics and drift trajectories across high-latency browser clients.",
            architecture: "Built server-authoritative physics simulation paired with client-side interpolation and dead reckoning to mask latency jitter.",
            highlight: "Smooth 60 FPS browser rendering with competitive multiplayer room state synchronization."
        }
    },
    {
        id: "contrincantes",
        index: "04",
        name: "Contrincantes",
        domain: "Graphics & Games",
        year: "2023",
        imgsrc: images["../assets/projects/Contrincantes.jpg"].default,
        description: "Multiplayer third-person capture-the-flag shooter engineered in Unreal Engine with custom C++ network gameplay replication.",
        link: "https://www.youtube.com/watch?v=wAEE6pvhMfA",
        stack: ["Unreal Engine", "C++", "Replication Graph"],
        types: ["Videogame", "Multiplayer"],
        technicalDetails: {
            problem: "Deterministic projectile trajectory replication and team-objective synchronization in fast-paced arena combat.",
            architecture: "Structured authoritative gameplay ability pipelines in C++ with custom RPCs and character movement component overrides.",
            highlight: "Delivered responsive netcode and fluid traversal mechanics across distributed sessions."
        }
    },
    {
        id: "csi",
        index: "05",
        name: "Colegio San Pedro de Idiomas",
        domain: "Web & Cloud",
        year: "2024",
        imgsrc: images["../assets/projects/CSI.png"].default,
        description: "Production web platform and administrative portal for an English language institute, containerized on Google Cloud Run.",
        link: "https://csimx.org/",
        stack: ["Astro", "TypeScript", "TailwindCSS", "Google Cloud Run", "Firebase"],
        types: ["Web Platform", "Production"],
        technicalDetails: {
            problem: "Legacy educational portal suffered from slow mobile load times and brittle monolithic hosting.",
            architecture: "Architected a hybrid static generation structure with Astro, deployed via automated CI/CD to Google Cloud Run containers with Firebase auth.",
            highlight: "Achieved near-perfect 98+ Lighthouse scores across performance and accessibility with zero operational server maintenance."
        }
    },
    {
        id: "unmapped",
        index: "06",
        name: "Unmapped by TrePalDo",
        domain: "Tools & Data",
        year: "2023",
        imgsrc: images["../assets/projects/Unmapped.png"].default,
        description: "Labor market intelligence engine mapping real-world youth skillsets to regional economic opportunities for the World Bank Summit.",
        link: "https://github.com/oscarvasquez28/World-Bank-Youth-Summit",
        stack: ["Python", "FastAPI", "Pandas", "SciKit-Learn"],
        types: ["ML Pipeline", "API Service"],
        technicalDetails: {
            problem: "Bridging unstructured resume skill descriptors with formal government occupation codes across developing economies.",
            architecture: "Constructed NLP vector embedding similarity pipelines in Python, exposed via high-throughput asynchronous FastAPI endpoints.",
            highlight: "Selected for presentation at the World Bank Youth Summit for innovative economic pathway mapping."
        }
    },
    {
        id: "medical-365",
        index: "07",
        name: "Medical 365",
        domain: "Web & Cloud",
        year: "2023",
        imgsrc: images["../assets/projects/Medical365.png"].default,
        description: "Enterprise occupational health incident tracking and compliance reporting system for industrial workforce management.",
        link: "https://github.com/oscarvasquez28/Medical-365",
        stack: ["React", "Node.js", "MongoDB", "Express"],
        types: ["Enterprise App", "Full-Stack"],
        technicalDetails: {
            problem: "Manual spreadsheet tracking of workplace incidents led to compliance audit risks and delayed care escalation.",
            architecture: "Designed a role-based access control (RBAC) architecture with automated audit trails and aggregation pipelines in MongoDB.",
            highlight: "Streamlined medical incident reporting cycles with automated compliance export generation."
        }
    },
    {
        id: "database-query-tool",
        index: "08",
        name: "Database Query Inspector",
        domain: "Tools & Data",
        year: "2023",
        imgsrc: images["../assets/projects/DQ.png"].default,
        description: "Introspective database schema explorer and visual query generator built for non-technical enterprise analysts.",
        link: "/portfolio/files/DQ.pdf",
        stack: ["C#", ".NET", "MS SQL Server", "WPF"],
        types: ["Desktop Tool", "Systems"],
        technicalDetails: {
            problem: "Non-engineering operations staff struggled with raw SQL syntax when generating ad-hoc operational reports.",
            architecture: "Built a schema reflection engine in C# that inspects database foreign keys and dynamically constructs sanitized SQL query trees.",
            highlight: "Eliminated ad-hoc query bottlenecks while preventing accidental unindexed table scans."
        }
    },
    {
        id: "math-meet",
        index: "09",
        name: "Math Meet",
        domain: "Web & Cloud",
        year: "2023",
        imgsrc: images["../assets/projects/MathMeet.png"].default,
        description: "Interactive real-time mathematics collaboration platform combining WebRTC peer video with shared whiteboard canvas sync.",
        link: "https://github.com/PalOntEr/MathMeet",
        stack: ["C#", "ASP.NET Core", "React", "SignalR", "WebRTC"],
        types: ["Full-Stack", "Real-Time"],
        technicalDetails: {
            problem: "High-latency canvas synchronization during live tutor video calls caused visual stutter and stroke collision conflicts.",
            architecture: "Implemented low-latency SignalR hub transport for vector stroke streaming alongside peer-to-peer WebRTC media tracks.",
            highlight: "Delivered responsive multi-user vector drawing with concurrent audio/video streaming."
        }
    }
];

