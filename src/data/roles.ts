export interface Project {
    title: string;
    description: string;
    tags: string[];
    githubLink: string;
    isMain: boolean;
    imageUrl?: string;
    articleLink?: string;
}

export interface SkillCategory {
    title: string;
    items: string[];
    colorClass: string;
}

export interface RoleConfig {
    roleTitle: string;
    about: {
        heading: string;
        description: string;
        philosophyHeading: string;
        philosophyText: string[];
    };
    skills: SkillCategory[];
    projects: Project[];
}

// ---------------------------------------------------------
// 1. MACHINE LEARNING ENGINEER
// ---------------------------------------------------------
export const mlConfig: RoleConfig = {
    roleTitle: "Machine Learning Engineer",
    about: {
        heading: "Architecting Intelligent Systems",
        description: "I am a Machine Learning Engineer specialized in model optimization, quantization, and secure AI deployments. I focus on bridging the gap between heavy academic models and lightning-fast production environments.",
        philosophyHeading: "The 'Efficiency First' Philosophy",
        philosophyText: [
            "In Machine Learning, building an accurate model is only 50% of the battle. The real engineering challenge lies in making it run efficiently on limited hardware without losing precision.",
            "I thrive on accelerating inference times, securing tensor operations, and ensuring AI architectures scale seamlessly."
        ]
    },
    skills: [
        {
            title: "Core AI & Frameworks",
            items: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn"],
            colorClass: "bg-blue-50 text-blue-700 border-blue-100"
        },
        {
            title: "Optimization & Tools",
            items: ["Model Quantization", "ONNX", "TensorRT", "CUDA"],
            colorClass: "bg-slate-50 text-slate-700 border-slate-200"
        },
        {
            title: "Languages",
            items: ["Python", "C++", "SQL"],
            colorClass: "bg-slate-50 text-slate-700 border-slate-200"
        }
    ],
    projects: [
        {
            title: "Raafeli (CPU Turbo)",
            description: "Zero-config Python decorator to speed up Deep Learning models on CPU by up to 300%. Converts heavy FP32 PyTorch models into highly optimized INT8 dynamically without architecture changes.",
            tags: ["Python", "PyTorch", "Optimization", "Quantization"],
            githubLink: "https://github.com/ginganomercy/raafeli",
            isMain: true
        },
        {
            title: "Tensorguard",
            description: "Advanced security and validation framework for AI and Tensor operations. Built to ensure robust machine learning infrastructure and data integrity.",
            tags: ["Python", "Machine Learning", "Security"],
            githubLink: "https://github.com/ginganomercy/tensorguard",
            isMain: true
        },
        {
            title: "DiabeaCheck ML",
            description: "Machine Learning API developed for predicting diabetes risk. Uses a Multi-Layer Perceptron (TensorFlow/Keras) mapped to FastAPI endpoints.",
            tags: ["Python", "FastAPI", "TensorFlow", "Keras"],
            githubLink: "https://github.com/ginganomercy/capstone-diabeacheck-ml",
            isMain: false
        },
        {
            title: "Traffic Dashboard",
            description: "Python-based analytical dashboard utilizing ML techniques for traffic prediction and data visualization.",
            tags: ["Python", "Data Viz", "Analytics"],
            githubLink: "https://github.com/ginganomercy/traffic-dashboard",
            isMain: false
        }
    ]
};

// ---------------------------------------------------------
// 2. BACKEND ENGINEER
// ---------------------------------------------------------
export const backendConfig: RoleConfig = {
    roleTitle: "Backend Engineer",
    about: {
        heading: "Building the invisible engines",
        description: "I am a Backend Engineer focused on crafting highly optimized, scalable, and resilient systems. I design robust APIs and efficient database architectures that power modern applications.",
        philosophyHeading: "The 'Assist King' Philosophy",
        philosophyText: [
            "My engineering mindset is heavily inspired by Mesut Özil. Like a playmaker on the pitch, I thrive in the background. My goal isn't to be the flashy frontend interface, but rather the crucial orchestrator.",
            "I focus on seeing the architectural passes others miss, anticipating system bottlenecks, and setting up the entire product for seamless success."
        ]
    },
    skills: [
        {
            title: "Languages",
            items: ["Python", "PHP", "Java", "SQL"],
            colorClass: "bg-slate-50 text-slate-700 border-slate-200"
        },
        {
            title: "Frameworks",
            items: ["FastAPI", "Laravel", "Spring Boot", "Express"],
            colorClass: "bg-blue-50 text-blue-700 border-blue-100"
        },
        {
            title: "Infrastructure",
            items: ["PostgreSQL", "Docker", "REST APIs", "Linux"],
            colorClass: "bg-slate-50 text-slate-700 border-slate-200"
        }
    ],
    projects: [
        {
            title: "DiabeaCheck API",
            description: "High-performance FastAPI backend serving Machine Learning predictions in real-time with comprehensive input validation and scaling.",
            tags: ["Python", "FastAPI", "REST", "Architecture"],
            githubLink: "https://github.com/ginganomercy/capstone-diabeacheck-ml",
            isMain: true
        },
        {
            title: "Guciravel & Rafurivel",
            description: "Comprehensive backend applications built on Laravel showcasing complex relational database mapping, authentication, and MVC patterns.",
            tags: ["PHP", "Laravel", "MySQL", "MVC"],
            githubLink: "https://github.com/ginganomercy/guciravel",
            isMain: true
        },
        {
            title: "AppZakat",
            description: "Java-based backend service designed for Zakat calculation and management, highlighting object-oriented design and enterprise patterns.",
            tags: ["Java", "OOP", "Backend"],
            githubLink: "https://github.com/ginganomercy/AppZakat",
            isMain: false
        },
        {
            title: "PHP Native Masterclass",
            description: "A deep-dive educational repository focusing on building robust web applications using pure Native PHP without frameworks.",
            tags: ["PHP", "Native", "Web"],
            githubLink: "https://github.com/ginganomercy/php-native-rafly",
            isMain: false
        }
    ]
};

// ---------------------------------------------------------
// 3. FRONTEND ENGINEER
// ---------------------------------------------------------
export const frontendConfig: RoleConfig = {
    roleTitle: "Frontend Engineer",
    about: {
        heading: "Crafting seamless user experiences",
        description: "I am a Frontend & UI Engineer dedicated to building responsive, accessible, and highly interactive web interfaces. I focus on performance optimization and pixel-perfect implementations.",
        philosophyHeading: "The 'Invisible Bridge' Philosophy",
        philosophyText: [
            "A great frontend should feel invisible to the user. It shouldn't just look good; it must bridge the gap between complex backend logic and human interaction effortlessly.",
            "I engineer interfaces that respond instantly, guide users intuitively, and handle state with absolute precision."
        ]
    },
    skills: [
        {
            title: "Web Technologies",
            items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
            colorClass: "bg-blue-50 text-blue-700 border-blue-100"
        },
        {
            title: "Frameworks & Libraries",
            items: ["Astro", "Svelte", "Tailwind CSS", "React"],
            colorClass: "bg-slate-50 text-slate-700 border-slate-200"
        },
        {
            title: "Mobile & Ecosystem",
            items: ["Dart", "Flutter", "Vite", "NPM/Bun"],
            colorClass: "bg-slate-50 text-slate-700 border-slate-200"
        }
    ],
    projects: [
        {
            title: "PBJT Astro Web",
            description: "A blazing-fast, modern web application built with the Astro framework, emphasizing minimal client-side JavaScript and maximum SEO performance.",
            tags: ["Astro", "TypeScript", "Performance"],
            githubLink: "https://github.com/ginganomercy/pbjt-astro-web",
            isMain: true
        },
        {
            title: "Diabeacheck Web Interface",
            description: "Intuitive JavaScript-based frontend dashboard for visualizing medical predictions and interacting seamlessly with the ML backend API.",
            tags: ["JavaScript", "UI/UX", "API Integration"],
            githubLink: "https://github.com/ginganomercy/Diabeacheck-Web",
            isMain: true
        },
        {
            title: "KarsaBahan Mobile",
            description: "Cross-platform mobile application developed using Dart and Flutter, featuring a smooth, native-like user experience.",
            tags: ["Dart", "Flutter", "Mobile App"],
            githubLink: "https://github.com/ginganomercy/KarsaBahan",
            isMain: false
        },
        {
            title: "Ettawa Sense Dashboard",
            description: "Interactive JavaScript dashboard for real-time data monitoring and analytics visualization.",
            tags: ["JavaScript", "Dashboard", "Analytics"],
            githubLink: "https://github.com/ginganomercy/ettawa-sense",
            isMain: false
        }
    ]
};

// ---------------------------------------------------------
// 4. DATA SCIENTIST
// ---------------------------------------------------------
export const dsConfig: RoleConfig = {
    roleTitle: "Data Scientist",
    about: {
        heading: "Turning noise into actionable insights",
        description: "I am a Data Scientist specializing in predictive analytics, natural language processing, and statistical modeling. I transform raw, chaotic data into clear strategic value.",
        philosophyHeading: "The 'Story in the Data' Philosophy",
        philosophyText: [
            "Data without context is just noise. My goal is to interrogate the data until it confesses the truth, finding the hidden narratives that drive decision-making.",
            "I combine rigorous mathematical modeling with domain knowledge to ensure every insight is not just accurate, but impactful."
        ]
    },
    skills: [
        {
            title: "Data Analysis",
            items: ["Pandas", "NumPy", "Jupyter", "SQL"],
            colorClass: "bg-blue-50 text-blue-700 border-blue-100"
        },
        {
            title: "Modeling & NLP",
            items: ["Scikit-Learn", "NLTK", "Predictive Modeling"],
            colorClass: "bg-slate-50 text-slate-700 border-slate-200"
        },
        {
            title: "Visualization",
            items: ["Matplotlib", "Seaborn", "Dashboards"],
            colorClass: "bg-slate-50 text-slate-700 border-slate-200"
        }
    ],
    projects: [
        {
            title: "Predictive Analytics Engine",
            description: "Comprehensive Jupyter Notebook suite containing end-to-end pipelines for data cleaning, exploratory data analysis, and predictive modeling.",
            tags: ["Jupyter", "Python", "Analytics", "EDA"],
            githubLink: "https://github.com/ginganomercy/Predictive_Analytic",
            isMain: true
        },
        {
            title: "Sentiment Analysis NLP",
            description: "Natural Language Processing models designed to analyze textual data streams and accurately classify public sentiment and emotional polarity.",
            tags: ["Python", "NLP", "Machine Learning"],
            githubLink: "https://github.com/ginganomercy/Sentimen_Analytic",
            isMain: true
        },
        {
            title: "Capstone Data Process",
            description: "Extensive data processing and modeling project completed as a capstone, demonstrating advanced data manipulation and algorithmic application.",
            tags: ["Jupyter", "Data Science", "Capstone"],
            githubLink: "https://github.com/ginganomercy/capstonenomercy",
            isMain: false
        },
        {
            title: "Analyst Bike Sharing",
            description: "Data visualization and statistical analysis project uncovering usage patterns and demand forecasting for a bike-sharing network.",
            tags: ["Data Viz", "Forecasting", "Python"],
            githubLink: "https://github.com/ginganomercy/Analyst_Bike_Sharing",
            isMain: false
        }
    ]
};

// ---------------------------------------------------------
// 5. DEVOPS ENGINEER
// ---------------------------------------------------------
export const devOpsConfig: RoleConfig = {
    roleTitle: "DevOps & Infra Engineer",
    about: {
        heading: "Automating robust infrastructure",
        description: "I am a DevOps Engineer focusing on virtualization, CI/CD pipelines, and high-availability infrastructure. I write systems-level code in Go and Rust to build bulletproof server environments.",
        philosophyHeading: "The 'Zero Downtime' Philosophy",
        philosophyText: [
            "Infrastructure should be invisible, resilient, and entirely automated. A successful day in DevOps is a day where absolutely nothing surprises you.",
            "I treat infrastructure as code and heavily prioritize system observability, security, and developer velocity."
        ]
    },
    skills: [
        {
            title: "Systems Programming",
            items: ["Go (Golang)", "Rust", "C++", "Python"],
            colorClass: "bg-blue-50 text-blue-700 border-blue-100"
        },
        {
            title: "Virtualization & Cloud",
            items: ["Proxmox VE", "Docker", "Linux (Debian/Ubuntu)"],
            colorClass: "bg-slate-50 text-slate-700 border-slate-200"
        },
        {
            title: "Networking & IoT",
            items: ["VNC Protocols", "Embedded C++", "Microcontrollers"],
            colorClass: "bg-slate-50 text-slate-700 border-slate-200"
        }
    ],
    projects: [
        {
            title: "ESP ZenState IoT",
            description: "C++ embedded systems project for ESP microcontrollers, featuring stable state-machine logic for IoT deployments.",
            tags: ["C++", "IoT", "Embedded", "Hardware"],
            githubLink: "https://github.com/ginganomercy/esp-zenstate",
            isMain: false
        },
        {
            title: "Cloud-Native PBJT Dashboard & HA Infra",
            description: "Merancang dan membangun ekosistem infrastruktur IT end-to-end dari bare-metal Proxmox VE, klaster High Availability (HA) Docker Swarm, hingga microservices API Gateway (Go/Rust) dan Web Dashboard (React).",
            tags: ["Proxmox", "Docker Swarm", "High Availability", "Go", "Rust", "React"],
            githubLink: "",
            isMain: true,
            imageUrl: "/image/tugas-akhir/image-1.png",
            articleLink: "/projects/tugas-akhir-pbjt"
        }
    ]
};

// ---------------------------------------------------------
// 6. SOFTWARE ENGINEER (GENERAL)
// ---------------------------------------------------------
export const generalConfig: RoleConfig = {
    roleTitle: "Software Engineer",
    about: {
        heading: "Building the invisible engines",
        description: "I am a Software Engineer focused on Python Backend & AI Infrastructures. I craft highly optimized, scalable, and resilient systems that power modern applications.",
        philosophyHeading: "The 'Assist King' Philosophy",
        philosophyText: [
            "My engineering mindset is heavily inspired by Mesut Özil. Like a playmaker on the pitch, I thrive in the background. My goal isn't to be the flashy frontend interface, but rather the crucial orchestrator.",
            "I focus on seeing the architectural passes others miss, anticipating system bottlenecks, and setting up the entire product for seamless success."
        ]
    },
    skills: [
        {
            title: "Languages",
            items: ["Python", "TypeScript", "JavaScript", "SQL", "Go", "Rust"],
            colorClass: "bg-slate-50 text-slate-700 border-slate-200"
        },
        {
            title: "AI & Data",
            items: ["PyTorch", "TensorFlow", "Pandas", "NumPy"],
            colorClass: "bg-blue-50 text-blue-700 border-blue-100"
        },
        {
            title: "Infrastructure",
            items: ["PostgreSQL", "Docker", "Linux", "Git", "REST APIs", "Proxmox"],
            colorClass: "bg-slate-50 text-slate-700 border-slate-200"
        }
    ],
    projects: [
        {
            title: "Raafeli (CPU Turbo)",
            description: "Zero-config Python decorator to speed up Deep Learning models on CPU by up to 300%. Converts heavy FP32 PyTorch models into highly optimized INT8 dynamically without architecture changes.",
            tags: ["Python", "PyTorch", "Optimization", "Quantization"],
            githubLink: "https://github.com/ginganomercy/raafeli",
            isMain: true
        },
        {
            title: "Cloud-Native PBJT Dashboard & HA Infra",
            description: "Merancang ekosistem infrastruktur end-to-end dari bare-metal Proxmox VE, klaster HA Docker Swarm, hingga microservices API (Go/Rust) dan Web Dashboard.",
            tags: ["Proxmox", "Docker Swarm", "High Availability", "Systems Engineering"],
            githubLink: "",
            isMain: true,
            imageUrl: "/image/tugas-akhir/image-1.png",
            articleLink: "/projects/tugas-akhir-pbjt"
        },
        {
            title: "Auratest",
            description: "High-performance testing utility and framework designed to streamline, automate, and accelerate complex verification tasks in software development.",
            tags: ["Testing", "Automation", "Framework"],
            githubLink: "https://github.com/ginganomercy/auratest",
            isMain: false
        },
        {
            title: "DiabeaCheck ML (DBS Capstone)",
            description: "Machine Learning API developed for the DBS Coding Camp Capstone. Uses a Multi-Layer Perceptron (TensorFlow/Keras) and FastAPI to predict diabetes risk based on medical parameters.",
            tags: ["Python", "FastAPI", "TensorFlow", "Machine Learning"],
            githubLink: "https://github.com/ginganomercy/capstone-diabeacheck-ml",
            isMain: false
        }
    ]
};
