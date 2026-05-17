import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>("../assets/stack/*.{svg,png,jpg,jpeg}", { eager: true });

export enum STACK_ENUM {
    SVG = 0,
    DESCRIPTION = 1,
    CATEGORY = 2,
}

export const stackData = [
    {
        name: "C#",
        imgsrc: images["../assets/stack/csharp-original.svg"].default,
        description: "Programming Language used for game development, web development, and more.",
        category: "Languages"
    },
    {
        name: "C++",
        imgsrc: images["../assets/stack/cplusplus-original.svg"].default,
        description: "Low-level programming language used for performance-critical applications, game development, and system programming.",
        category: "Languages"
    },
    {
        name: "CUDA",
        imgsrc: images["../assets/stack/cuda-original.svg"].default,
        description: "Parallel computing platform and programming model developed by NVIDIA for GPU programming.",
        category: "Systems & Engines"
    },
    {
        name: "MS SQL",
        imgsrc: images["../assets/stack/microsoftsqlserver-original.svg"].default,
        description: "Relational database management system developed by Microsoft, used for storing and managing data in various applications.",
        category: "Databases"
    },
    {
        name: "MS SQL Server",
        imgsrc: images["../assets/stack/microsoftsqlserver-original.svg"].default,
        description: "Relational database management system developed by Microsoft, used for storing and managing data in various applications.",
        category: "Databases"
    },
    {
        name: "React",
        imgsrc: images["../assets/stack/react-original.svg"].default,
        description: "JavaScript library for building user interfaces.",
        category: "Frontend & Styling"
    },
    {
        name: "Node.js",
        imgsrc: images["../assets/stack/nodejs-original.svg"].default,
        description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
        category: "Backend & Frameworks"
    },
    {
        name: "MongoDB",
        imgsrc: images["../assets/stack/mongodb-original.svg"].default,
        description: "Document-oriented database management system.",
        category: "Databases"
    },
    {
        name: "TypeScript",
        imgsrc: images["../assets/stack/typescript-original.svg"].default,
        description: "Typed superset of JavaScript that compiles to plain JavaScript.",
        category: "Languages"
    },
    {
        name: "Three.js",
        imgsrc: images["../assets/stack/threejs-original.svg"].default,
        description: "JavaScript 3D library for creating and displaying animated 3D computer graphics in a web browser.",
        category: "Frontend & Styling"
    },
    {
        name: "TailwindCSS",
        imgsrc: images["../assets/stack/tailwindcss-original.svg"].default,
        description: "Utility-first CSS framework for rapidly building custom user interfaces.",
        category: "Frontend & Styling"
    },
    {
        name: "ASP.NET Core",
        imgsrc: images["../assets/stack/dotnetcore-original.svg"].default,
        description: "Free and open-source web framework developed by Microsoft.",
        category: "Backend & Frameworks"
    },
    {
        name: "Astro",
        imgsrc: images["../assets/stack/astro-original.svg"].default,
        description: "Static site generator for building fast, content-focused websites.",
        category: "Backend & Frameworks"
    },
    {
        name: "Python",
        imgsrc: images["../assets/stack/python-original.svg"].default,
        description: "High-level programming language known for its simplicity and readability.",
        category: "Languages"
    },
    {
        name: "DirectX11",
        imgsrc: images["../assets/stack/directx-original.svg"].default,
        description: "Collection of APIs for handling tasks related to multimedia, especially game programming and video.",
        category: "Systems & Engines"
    },
    {
        name: "DirectX 11",
        imgsrc: images["../assets/stack/directx-original.svg"].default,
        description: "Collection of APIs for handling tasks related to multimedia, especially game programming and video.",
        category: "Systems & Engines"
    },
    {
        name: "Firebase",
        imgsrc: images["../assets/stack/firebase-original.svg"].default,
        description: "Cloud-based platform for building web and mobile applications.",
        category: "Cloud & DevOps"
    },
    {
        name: "Google Cloud Run",
        imgsrc: images["../assets/stack/googlecloud-original.svg"].default,
        description: "Fully managed containerized application platform by Google.",
        category: "Cloud & DevOps"
    },
    {
        name: "Google Cloud",
        imgsrc: images["../assets/stack/googlecloud-original.svg"].default,
        description: "Cloud computing platform by Google.",
        category: "Cloud & DevOps"
    },
    {
        name: "Unreal Engine",
        imgsrc: images["../assets/stack/unrealengine-original.svg"].default,
        description: "Powerful game engine for creating high-quality interactive content.",
        category: "Systems & Engines"
    },
    {
        name: "Pandas",
        imgsrc: images["../assets/stack/pandas-original.svg"].default,
        description: "Data analysis and manipulation library for Python.",
        category: "Data Science & AI"
    },
    {
        name: "FastAPI",
        imgsrc: images["../assets/stack/fastapi-original.svg"].default,
        description: "Modern, fast (high-performance) web framework for building APIs with Python.",
        category: "Backend & Frameworks"
    },
    {
        name: "SciKit-Learn",
        imgsrc: images["../assets/stack/scikitlearn-original.svg"].default,
        description: "Machine learning library for Python.",
        category: "Data Science & AI"
    },
    {
        name: "Express",
        imgsrc: images["../assets/stack/express-original.svg"].default,
        description: "Fast, unopinionated, minimalist web framework for Node.js.",
        category: "Backend & Frameworks"
    },
    {
        name: "Flask",
        imgsrc: images["../assets/stack/flask-original.svg"].default,
        description: "Lightweight web application framework for Python.",
        category: "Backend & Frameworks"
    },
    {
        name: "Swift",
        imgsrc: images["../assets/stack/swift-original.svg"].default,
        description: "General-purpose programming language developed by Apple.",
        category: "Languages"
    },
    {
        name: "JavaScript",
        imgsrc: images["../assets/stack/javascript-original.svg"].default,
        description: "Programming language primarily used for creating interactive web pages.",
        category: "Languages"
    },
    {
        name: "HTML5",
        imgsrc: images["../assets/stack/html5-original.svg"].default,
        description: "Markup language for structuring and presenting content on the World Wide Web.",
        category: "Languages"
    },
    {
        name: "MySQL",
        imgsrc: images["../assets/stack/mysql-original.svg"].default,
        description: "Open-source relational database management system.",
        category: "Databases"
    },
    {
        name: "SQLite",
        imgsrc: images["../assets/stack/sqlite-original.svg"].default,
        description: "Lightweight, serverless database engine.",
        category: "Databases"
    },
    {
        name: "Docker",
        imgsrc: images["../assets/stack/docker-plain.svg"].default,
        description: "Platform for developing, shipping, and running applications in containers.",
        category: "Cloud & DevOps"
    },
    {
        name: "AWS",
        imgsrc: images["../assets/stack/amazonwebservices-original-wordmark.svg"].default,
        description: "Cloud computing platform by Amazon.",
        category: "Cloud & DevOps"
    },
    {
        name: "Figma",
        imgsrc: images["../assets/stack/figma-original.svg"].default,
        description: "Collaborative interface design tool.",
        category: "Tools & Design"
    },
    {
        name: "Postman",
        imgsrc: images["../assets/stack/postman-original.svg"].default,
        description: "API development and testing platform.",
        category: "Tools & Design"
    },
    {
        name: "Swagger",
        imgsrc: images["../assets/stack/swagger-original.svg"].default,
        description: "Platform for designing, building, documenting, and consuming RESTful web services.",
        category: "Tools & Design"
    },
    {
        name: "NPM",
        imgsrc: images["../assets/stack/npm-original.svg"].default,
        description: "Package manager for Node.js.",
        category: "Tools & Design"
    },
    {
        name: "GitHub",
        imgsrc: images["../assets/stack/github-original.svg"].default,
        description: "Web-based hosting service for version control using Git.",
        category: "Version Control Systems"
    },
    {
        name: "Git",
        imgsrc: images["../assets/stack/git-original.svg"].default,
        description: "Distributed version control system.",
        category: "Version Control Systems"
    },
    {
        name: "Bitbucket",
        imgsrc: images["../assets/stack/bitbucket-original.svg"].default,
        description: "Web-based version control repository management tool.",
        category: "Version Control Systems"
    },
    {
        name: "SourceTree",
        imgsrc: images["../assets/stack/sourcetree-original.svg"].default,
        description: "Git client for Windows and Mac.",
        category: "Version Control Systems"
    },
    {
        name: "VS Code",
        imgsrc: images["../assets/stack/vscode-original.svg"].default,
        description: "Source-code editor developed by Microsoft.",
        category: "Development Environments"
    },
    {
        name: "Visual Studio",
        imgsrc: images["../assets/stack/visualstudio-original.svg"].default,
        description: "Integrated development environment (IDE) developed by Microsoft.",
        category: "Development Environments"
    },
    {
        name: "Xcode",
        imgsrc: images["../assets/stack/xcode-original.svg"].default,
        description: "Integrated development environment (IDE) for macOS.",
        category: "Development Environments"
    },
    {
        name: "Unity",
        imgsrc: images["../assets/stack/unity-original.svg"].default,
        description: "Multi-platform game engine.",
        category: "Systems & Engines"
    },
    {
        name: "OpenGL",
        imgsrc: images["../assets/stack/opengl-plain.svg"].default,
        description: "API for rendering 2D and 3D vector graphics.",
        category: "Systems & Engines"
    },
    {
        name: "Linux",
        imgsrc: images["../assets/stack/linux-original.svg"].default,
        description: "Open-source operating system.",
        category: "Systems & Engines"
    },
    {
        name: "Ubuntu",
        imgsrc: images["../assets/stack/ubuntu-original.svg"].default,
        description: "Popular Linux distribution.",
        category: "Systems & Engines"
    },
    {
        name: "Windows",
        imgsrc: images["../assets/stack/windows11-original.svg"].default,
        description: "Operating system developed by Microsoft.",
        category: "Systems & Engines"
    },
    {
        name: "Arduino",
        imgsrc: images["../assets/stack/arduino-original.svg"].default,
        description: "Open-source electronics platform.",
        category: "Systems & Engines"
    },
];