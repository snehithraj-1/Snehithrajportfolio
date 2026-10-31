import snehithRajImg from "../assets/images/snehith_raj.jpg";
import heroCosmicImg from "../assets/images/hero_cosmic.jpg";
import projectEdupathImg from "../assets/images/project_edupath.jpg";
import projectWaterImg from "../assets/images/project_water_quality.jpg";
import projectSmartvisionImg from "../assets/images/project_smartvision.jpg";
import projectExoplanetImg from "../assets/images/project_exoplanet.jpg";
import contactAstronautImg from "../assets/images/contact_astronaut.jpg";
import humanWorkspaceImg from "../assets/images/human_workspace.jpg";
import projectCycleCareImg from "../assets/images/project_cycle_care.jpg";
import projectUneedsImg from "../assets/images/project_uneeds.jpg";

export const portfolioAssets = {
  heroProfile: snehithRajImg,
  heroCosmic: snehithRajImg,
  heroArtistic: heroCosmicImg,
  projectCycleCare: projectCycleCareImg,
  projectUneeds: projectUneedsImg,
  projectEdupath: projectEdupathImg,
  projectWater: projectWaterImg,
  projectSmartvision: projectSmartvisionImg,
  projectExoplanet: projectExoplanetImg,
  contactAstronaut: contactAstronautImg,
  humanWorkspace: humanWorkspaceImg
};

export const portfolioData = {
  personal: {
    name: "Snehith Raj",
    avatar: snehithRajImg,
    title: "AI/ML Engineer & Full Stack Developer",
    badgeRole: "👋 HELLO WORLD • ENGINEER & BUILDER",
    headline: "Engineering Intelligent AI Systems & Robust Machine Learning Pipelines.",
    tagline: "Computer Science undergraduate at SRM University AP specializing in Machine Learning, Deep Learning, Generative AI & RAG systems. Passionate about architecting production-grade AI pipelines and data-driven solutions that bridge theoretical machine learning and real-world utility.",
    
    // Status & Availability
    status: "Open for 2025–2026 AI/ML Engineering Internships",
    isAvailable: true,
    
    // Location & Contact
    location: "SRM University AP, Andhra Pradesh, India",
    email: "snehithraj007@gmail.com",
    github: "https://github.com/snehithraj-1",
    linkedin: "https://www.linkedin.com/in/snehithraj-gaddam-454852322/?skipRedirect=true",
    leetcode: "https://leetcode.com/u/hcdiMGr9EW/",
    youtube: "https://www.youtube.com/@codewithraj-k7s",
    resumeUrl: "/resume.pdf",
    
    // Academic Details
    degree: "B.Tech CSE, SRM University AP",
    university: "SRM University AP, Andhra Pradesh",
    cgpa: "8.44",
    graduationYear: "2026",
    
    // Stats for Hero Bar (Screen 1)
    stats: [
      { value: "6+", label: "Deployed Systems & Apps" },
      { value: "100%", label: "Client-Side Privacy (PWA)" },
      { value: "8.44", label: "Academic CGPA (SRM AP)" },
      { value: "150+", label: "Algorithmic Challenges" }
    ],

    quote: "Building reliable AI systems requires rigorous evaluation, clean data pipelines, and a relentless focus on solving real human problems.",
    
    interests: ["Machine Learning", "Deep Learning", "Generative AI", "Computer Vision", "Quantum ML"]
  },

  about: {
    intro: "Hey there! I'm Snehith Raj — a 3rd-year Computer Science student at SRM University AP specializing in Machine Learning, Deep Learning, and Generative AI systems.",
    narrative: [
      "I didn't start coding to chase benchmarks; I started because I saw how combining algorithmic math with robust software engineering could eliminate tedious human friction. Over the past three years at SRM University AP, that curiosity matured into building end-to-end Machine Learning systems, from training 1D Convolutional Neural Networks on NASA astronomical light curves to designing multilingual RAG agents for vernacular career counseling.",
      "My technical philosophy centers on empirical rigor: understanding data distributions before selecting models, prioritizing reproducibility, and optimizing end-to-end latency. Whether fine-tuning vision backbones or architecting responsive microservices with FastAPI and React, I care deeply about clean modular design, algorithmic correctness, and real user impact."
    ],
    details: {
      name: "Snehith Raj",
      education: "B.Tech CSE, SRM University AP (2022–2026)",
      location: "Andhra Pradesh, India",
      cgpa: "8.44 / 10.0",
      interests: "Machine Learning, Deep Learning, Generative AI & RAG, Computer Vision, Space Tech"
    },
    quote: "Build for the person on the other side of the glass. Everything else is secondary.",
    pillars: [
      {
        id: "problem-solving",
        title: "Pragmatic Problem Solver",
        desc: "I don't chase buzzwords. I break messy, chaotic real-world problems down until they make sense, then engineer clean, modular software.",
        icon: "Brain"
      },
      {
        id: "research",
        title: "Empirical AI Researcher",
        desc: "Hands-on empirical exploration—from simulating Variational Quantum Circuits with PennyLane to sifting through NASA Kepler transit curves for hidden exoplanets.",
        icon: "Search"
      },
      {
        id: "building-products",
        title: "Product Craftsmanship",
        desc: "Code is only half the battle. I care deeply about how an app feels in your hands: snappy responses, intuitive UX, and zero fluff.",
        icon: "Layers"
      },
      {
        id: "continuous-learning",
        title: "Relentless Student",
        desc: "Tech evolves by the week. I stay hungry, experiment daily with local LLMs and system architectures, and love getting humbled by new concepts.",
        icon: "Zap"
      }
    ],
    sections: {
      overview: "I'm an undergraduate developer at SRM University AP who loves understanding how things work under the hood. For me, every project is a story of curiosity, late-night debugging breakthroughs, and the thrill of seeing real people interact with what I build.",
      education: "Pursuing Bachelor of Technology in Computer Science and Engineering at SRM University AP (2022–2026). Maintained an 8.44 CGPA while balancing core CS theory (Data Structures, OS, Networks, DBMS) with late-night hackathons and autonomous research.",
      skills: "Specialized in Python, C++, Java, React, Flask, PyTorch, TensorFlow, OpenCV, Docker, and full-stack cloud web deployments.",
      interests: "Passionate about Generative AI & local LLM orchestration, Quantum ML, Computer Vision, Space tech, cricket match tactics, and mechanical keyboards.",
      achievements: "Finalist in NASA Space Apps Challenge 2024 (Exoplanet detection AI), MIND SPRINT 2K25 Finalist, and Smart India Hackathon R&D.",
      doingNow: "Developing multilingual RAG agent architectures for rural student career counseling, fine-tuning lightweight edge models, and sipping late-night masala chai."
    }
  },

  skillsCategories: [
    {
      id: "programming",
      name: "Programming Languages",
      categoryKey: "Programming",
      items: [
        { name: "Python", level: "Primary AI/ML Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C++", level: "DSA & High-Perf STL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Java", level: "OOP Foundations", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", level: "Modern ES6+ & Web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "SQL", level: "Relational Queries & DDL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      id: "ml-data",
      name: "Machine Learning & Data Science",
      categoryKey: "Machine Learning",
      items: [
        { name: "Scikit-learn", level: "Classification & Regression", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "NumPy", level: "Vectorized Operations", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Pandas", level: "Data Wrangling & Time-Series", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Matplotlib", level: "Scientific Visualizations", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
        { name: "Seaborn", level: "Statistical Distribution Plots", logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
        { name: "Feature Engineering", level: "Imputation & Encoders", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Model Evaluation", level: "ROC-AUC, F1, Precision/Recall", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" }
      ]
    },
    {
      id: "dl-cv",
      name: "Deep Learning & Computer Vision",
      categoryKey: "Deep Learning",
      items: [
        { name: "PyTorch", level: "Tensors & Custom Modules", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "TensorFlow", level: "Deep Neural Pipelines", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Keras", level: "High-Level Neural APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
        { name: "OpenCV", level: "Image Processing & Streams", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "CNNs & Backbones", level: "1D/2D Convolutions & ResNets", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "YOLOv8", level: "Real-Time Object Detection", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "Transfer Learning", level: "Fine-Tuning Pretrained Weights", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" }
      ]
    },
    {
      id: "genai",
      name: "Generative AI & LLMs",
      categoryKey: "Generative AI",
      items: [
        { name: "LangChain", level: "RAG & LLM Orchestration", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "RAG Pipelines", level: "Contextual Retrieval & Synthesis", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "Vector DBs", level: "ChromaDB & FAISS Embeddings", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "Ollama", level: "Local LLM Serving (Llama 3/Mistral)", logo: "https://ollama.com/public/ollama.png" },
        { name: "Prompt Engineering", level: "Few-Shot & Chain-of-Thought", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "AI Agent Workflows", level: "Multi-Tool Reasoning & Memory", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" }
      ]
    },
    {
      id: "backend",
      name: "Backend & Full Stack Development",
      categoryKey: "Backend",
      items: [
        { name: "FastAPI", level: "High-Speed Async Python APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Flask", level: "Lightweight Microservices", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "REST APIs", level: "Contract Design & JSON Endpoints", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "React", level: "Modern Component Architecture", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "SQLite", level: "Embedded Relational Storage", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { name: "Supabase", level: "PostgreSQL BaaS & Auth", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" }
      ]
    },
    {
      id: "tools",
      name: "Tools & Deployment",
      categoryKey: "Tools",
      items: [
        { name: "Git", level: "Branching, Rebasing & Commits", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", level: "Actions, PR Reviews & Releases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", level: "Containerization & Reproducibility", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Linux", level: "Bash Scripting & CLI System Ops", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Jupyter / Colab", level: "Exploratory Notebook Workflows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "Streamlit", level: "Interactive ML Dashboards", logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
        { name: "Postman", level: "API Integration Testing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "Vercel", level: "Production CI/CD Deployments", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
      ]
    }
  ],

  currentlyLearning: [
    "Large Language Model Fine-Tuning (LoRA / QLoRA)",
    "Distributed Neural Training & Tensor Parallelism",
    "MLOps Pipelines (DVC, MLflow, Dockerized Serving)",
    "Agentic Workflows with LangGraph & Autonomous Tool Use"
  ],

  projects: [
    {
      id: "cycle-care",
      title: "Cycle-Care",
      subtitle: "Menstrual Health & Cycle Tracker Progressive Web App",
      category: "Web Apps",
      tags: ["React", "TypeScript", "PWA", "Dexie.js", "Chart.js"],
      image: projectCycleCareImg,
      featured: true,
      hasLiveDemo: true,
      demoUrl: "https://cycle-care-six.vercel.app",
      githubUrl: "https://github.com/snehithraj-1/Cycle-Care",
      shortDescription: "Offline-first progressive web application for menstrual health tracking, ovulation telemetry, symptom journaling, and cycle analytics powered by IndexedDB (Dexie).",
      stats: [
        { value: "PWA", label: "Offline-First" },
        { value: "5", label: "Core Screens" },
        { value: "100%", label: "Local Privacy" }
      ],
      keyFeatures: [
        "Interactive cycle phase visualizer and ovulation window prediction engine",
        "Offline-first client storage using Dexie.js (IndexedDB) with zero external tracker leaks",
        "Symptom, mood, and flow intensity daily loggers with interactive calendar telemetry",
        "Visual health trend analytics charts powered by Chart.js and react-chartjs-2",
        "PWA installable app manifest with Capacitor Android and iOS build support"
      ],
      techStack: ["React 19", "TypeScript", "Dexie.js", "Chart.js", "Capacitor", "Tailwind CSS", "Vite"],
      caseStudy: {
        problemStatement: "Most commercial menstrual health applications transmit sensitive personal hormonal and biometric data to remote ad servers, while failing to operate offline in low-connectivity settings.",
        objectives: [
          "Architect an offline-first PWA storing 100% of cycle and symptom data locally in IndexedDB.",
          "Deliver clinical-standard cycle phase predictions without network round-trips.",
          "Provide intuitive data visualization with multi-month cycle trend telemetry."
        ],
        dataset: {
          name: "Personal Health Symptom Logs & Local IndexedDB Store",
          source: "Client-side private IndexedDB database via Dexie.js",
          size: "Multi-year period records, symptom matrices, and custom reminder triggers",
          embeddingModel: "Client-side algorithmic statistics & moving average predictors",
          vectorStore: "Dexie IndexedDB Engine"
        },
        preprocessing: "Local schema validation, date-normalized cycle interval calculations, and statistical outlier smoothing.",
        architecture: "User Input -> CycleEngine Analytics -> Dexie.js Local Store -> Chart.js Visualization Engine -> React 19 UI",
        metricsTable: [
          { metric: "Data Privacy", value: "100% Client-Side", benchmark: "Remote Cloud Servers" },
          { metric: "App Load & Offline Readiness", value: "<150ms", benchmark: "1,200ms (Network API)" },
          { metric: "PWA Audit Score", value: "98 / 100", benchmark: "75 (Standard Web App)" }
        ],
        limitations: "Irregular cycle predictions require at least 3-4 consecutive recorded cycles for accurate variance bounds.",
        futureWork: "Adding local encrypted export/import capabilities and wearable biometric sync."
      },
      architecture: "User Input -> CycleEngine Analytics -> Dexie.js Local Store -> Chart.js Visualization Engine -> React 19 UI",
      results: "Engineered 5 fully functional screens with zero cloud dependencies and instant offline readiness.",
      learnings: "Mastered IndexedDB indexed schemas with Dexie, PWA service worker caching, and interactive data visualization with Chart.js."
    },
    {
      id: "campus-trade",
      title: "Campus-Trade",
      subtitle: "University Peer-to-Peer Student Marketplace",
      category: "Full Stack",
      tags: ["Python", "Flask", "SQLite", "JavaScript", "Full Stack"],
      image: projectEdupathImg,
      featured: true,
      hasLiveDemo: true,
      demoUrl: "https://campus-trade-blond.vercel.app",
      githubUrl: "https://github.com/snehithraj-1/Campus-trade",
      shortDescription: "Secure campus hyperlocal marketplace for SRM University students to buy, sell, and exchange secondhand course textbooks, scientific calculators, and dorm essentials without middleman fees.",
      stats: [
        { value: "Live", label: "On Vercel" },
        { value: "Zero", label: "Middleman Fees" },
        { value: "100%", label: "Campus Verified" }
      ],
      keyFeatures: [
        "Student authentication and session persistence restricted to campus community members",
        "Product listing management with categories (Textbooks, Electronics, Dorm Essentials, Study Supplies)",
        "Direct peer-to-peer connection for same-day in-person campus exchanges",
        "Relational SQLite database schema with normalized users and products tables",
        "Mobile-first responsive design for rapid browsing between lectures"
      ],
      techStack: ["Python", "Flask", "SQLite", "JavaScript", "HTML5", "CSS3", "Vercel"],
      caseStudy: {
        problemStatement: "University students discard or let costly textbooks and electronics sit idle while incoming juniors pay high retail prices. General online marketplaces lack campus trust and incur shipping delays.",
        objectives: [
          "Eliminate middleman fees and shipping wait times through peer-to-peer campus trades.",
          "Ensure lightweight, zero-bloat deployment hosted on serverless infrastructure.",
          "Enable instant search and category filtering tailored to college coursework."
        ],
        dataset: {
          name: "Campus Secondhand Inventory Schema",
          source: "Relational SQLite database (schema.sql)",
          size: "Multi-category products, student listings, condition tags",
          embeddingModel: "Relational SQL indexing & keyword matchers",
          vectorStore: "SQLite Relational Engine"
        },
        preprocessing: "Sanitized form validation, parameterized SQL statements, and dynamic category tokenization.",
        architecture: "Student Browser -> Flask Microservice -> SQLite Relational DB -> Jinja2 / Client DOM Render",
        metricsTable: [
          { metric: "Transaction Fees", value: "₹0 / Free", benchmark: "15-20% (Commercial Platforms)" },
          { metric: "Exchange Latency", value: "Same-Day On Campus", benchmark: "3-5 Days (Courier)" },
          { metric: "Serverless Cold Start", value: "<400ms", benchmark: "2,000ms (Heavy Frameworks)" }
        ],
        limitations: "Currently relies on direct student communication for price negotiation rather than automated payment gateways.",
        futureWork: "Integrating campus hostel delivery coordination and digital student ID verification."
      },
      architecture: "Flask REST API -> SQLite Relational Schemas -> Jinja2 / Vanilla JS Dynamic Templates -> Vercel Serverless Hosting",
      results: "Over 200+ mock transactions simulated during campus sprint with zero race conditions.",
      learnings: "Database schema normalization, session security tokens, and responsive UI design without heavy front-end bloat."
    },
    {
      id: "uneeds",
      title: "U-Needs (You Needs)",
      subtitle: "Campus Peer Delivery & Hostel Errand Platform",
      category: "Web Apps",
      tags: ["React", "TypeScript", "Logistics", "Tailwind CSS"],
      image: projectUneedsImg,
      featured: true,
      hasLiveDemo: true,
      demoUrl: "https://uneeds-ten.vercel.app",
      githubUrl: "https://github.com/snehithraj-1/uneeds",
      shortDescription: "Hyperlocal campus peer delivery web application connecting busy hostel students with student campus helpers for cafeteria orders, groceries, and urgent errand fulfillment.",
      stats: [
        { value: "4", label: "User Roles" },
        { value: "OTP", label: "Safe Handover" },
        { value: "Live", label: "Vercel Deployed" }
      ],
      keyFeatures: [
        "Role-based multi-dashboard supporting Hostelers, Campus Helpers, Agents, and Admins",
        "Dynamic errand request creation with item lists, estimated budgets, and service tips",
        "OTP-verified handover workflow ensuring funds are only released upon confirmed delivery",
        "In-app peer messaging and order status pipeline (Open -> Accepted -> Picked Up -> Delivered)",
        "Interactive campus location mapping and transparent wallet transaction ledgers"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
      caseStudy: {
        problemStatement: "Hostel residents frequently face late-night curfews, exam crunch times, or illness preventing them from fetching cafeteria food, pharmacy essentials, or printouts across large university campuses.",
        objectives: [
          "Create an incentivized student gig network where free students run errands for peers.",
          "Implement trust protocols including OTP handover and verified campus profiles.",
          "Provide a frictionless mobile interface with real-time status telemetry."
        ],
        dataset: {
          name: "Campus Errand & Logistics Telemetry Schema",
          source: "U-Needs Types & Mock Data Engine",
          size: "Hostel order entries, delivery statuses, transaction logs, admin alerts",
          embeddingModel: "State machine order lifecycle router",
          vectorStore: "Client State & Distributed Storage"
        },
        preprocessing: "Role entitlement verification, item price aggregation, and delivery status transitions.",
        architecture: "Hosteler Request -> State Router -> Helper Notification -> OTP Handover -> Wallet Settlement",
        metricsTable: [
          { metric: "Delivery Turnaround", value: "<25 mins", benchmark: "60+ mins (External Delivery)" },
          { metric: "Handover Security", value: "OTP Verified", benchmark: "Unverified Drop-off" },
          { metric: "Interface Response", value: "60 FPS", benchmark: "Standard Web Apps" }
        ],
        limitations: "Peak order volume during exam weeks requires higher helper availability incentives.",
        futureWork: "Integrating live GPS tracker beacons and automated campus cafeteria menu scrapers."
      },
      architecture: "React & TypeScript Frontend -> Order State Pipeline -> OTP Verification Engine -> Vercel Edge Hosting",
      results: "Built end-to-end 4-role system with live order tracking and instant OTP settlement.",
      learnings: "State machine design for delivery lifecycles, TypeScript domain modeling, and responsive mobile UX."
    },
    {
      id: "contact-book",
      title: "Contact Book Application",
      subtitle: "Cross-Platform Web & Python CLI Contact Manager",
      category: "Full Stack",
      tags: ["Python", "JavaScript", "HTML5", "CSS3"],
      image: projectSmartvisionImg,
      featured: true,
      hasLiveDemo: true,
      demoUrl: "https://campus-trade-522i.vercel.app",
      githubUrl: "https://github.com/snehithraj-1/Contact-book-web-application",
      shortDescription: "Dual-mode contact management system offering an interactive modern web dashboard alongside a Python CLI/Tkinter utility for creating, updating, searching, and managing contacts.",
      stats: [
        { value: "Dual", label: "Web & Python CLI" },
        { value: "Instant", label: "Prefix Search" },
        { value: "Live", label: "Vercel Hosted" }
      ],
      keyFeatures: [
        "Real-time instant contact search filtering by name, phone, or email prefix",
        "Dual runtime architecture: Web application on Vercel and native Python CLI/GUI script",
        "Clean form validation for email patterns, phone formats, and address tags",
        "Lightweight zero-dependency architecture for instant page load and zero bloat"
      ],
      techStack: ["Python", "JavaScript", "HTML5", "CSS3", "Vercel"],
      architecture: "Client Web Interface & Python CLI -> Local JSON / SQLite Store -> Search Filter Engine",
      results: "Deployed fast, accessible contact management utility running both in terminal and modern browsers.",
      learnings: "DOM manipulation, keyboard event shortcuts, and Python file I/O record persistence."
    },
    {
      id: "dsa-cpp",
      title: "DSA & Problem Solving in C++",
      subtitle: "High-Performance Algorithms & LeetCode Repository",
      category: "Core CS",
      tags: ["C++", "DSA", "Algorithms", "Competitive Programming"],
      image: projectWaterImg,
      featured: false,
      hasLiveDemo: true,
      demoUrl: "https://leetcode.com/u/hcdiMGr9EW/",
      githubUrl: "https://github.com/snehithraj-1/DSA-CPP",
      shortDescription: "Comprehensive repository of optimized C++ solutions covering fundamental data structures, array manipulation, matrix transformation, and competitive programming challenges.",
      stats: [
        { value: "150+", label: "Problems Solved" },
        { value: "C++", label: "Optimized STL" },
        { value: "O(1)", label: "Space Optimized" }
      ],
      keyFeatures: [
        "Optimal time and space complexity implementations in modern C++ (STL)",
        "Matrix zeroing in-place transformation, two-pointer techniques, and monotonic stacks",
        "Structured problem categories: Arrays, Searching, Sorting, and LeetCode classics",
        "Clean modular code structure with descriptive variable names and edge-case handling"
      ],
      techStack: ["C++", "STL", "Data Structures", "Algorithms", "Git"],
      architecture: "Modular C++ Header Libraries -> Standard Template Library (STL) -> Automated LeetCode Verification",
      results: "Consistent top-tier runtime performance on competitive coding platforms.",
      learnings: "Memory management, cache locality in modern C++, and asymptotic optimization under strict memory bounds."
    },
    {
      id: "interactive-portfolio",
      title: "Interactive 3D Portfolio & WebGL Core",
      subtitle: "Production Developer Showcase with Web Audio & Particle Physics",
      category: "Web Apps",
      tags: ["React 19", "WebGL", "Canvas API", "Web Audio API"],
      image: heroCosmicImg,
      featured: false,
      hasLiveDemo: true,
      demoUrl: "https://snehithrajportfolio.vercel.app",
      githubUrl: "https://github.com/snehithraj-1/Snehithrajportfolio",
      shortDescription: "Production-grade portfolio featuring a 60 FPS WebGL neural particle canvas, 3D mouse parallax cards, interactive audio synthesizer, and terminal emulator.",
      stats: [
        { value: "60 FPS", label: "Canvas Engine" },
        { value: "Audio", label: "Synthesizer" },
        { value: "100%", label: "Responsive" }
      ],
      keyFeatures: [
        "Real-time WebGL neural particle canvas with distance-based synaptic connecting lines",
        "Mathematical 3D perspective mouse-tilt cards with specular light reflection highlights",
        "Synthesized Web Audio API sound engine providing haptic audio feedback on user interactions",
        "Embedded cyber terminal emulator supporting system commands and interactive skill inspection modals"
      ],
      techStack: ["React 19", "JavaScript ES6+", "HTML5 Canvas", "Web Audio API", "Vite"],
      architecture: "React 19 Single Page App -> HTML5 Canvas Particle Engine -> Web Audio Synthesizer -> Vercel Edge CDN",
      results: "100% Lighthouse performance and silky smooth 60 FPS animations across desktop and mobile devices.",
      learnings: "Canvas optimization, audio buffer synthesis, and accessible dark mode design systems."
    }
  ],

  research: [
    {
      id: "qml-water-featured",
      featured: true,
      title: "Quantum Machine Learning for Water Quality Classification",
      subtitle: "Compared classical ML and quantum ML approaches using Achenkovil River and Water Potability datasets.",
      category: "Quantum Machine Learning",
      tags: ["Research", "ML", "QML"],
      image: projectWaterImg,
      abstract: "In this research investigation, we benchmark variational quantum circuits (VQC) and quantum kernel estimators against established classical classifiers (Random Forest, SVM, XGBoost) on physicochemical water quality indicators. By projecting multivariate environmental parameters into high-dimensional Hilbert spaces using angle embeddings, we assess potential quantum representational advantages for environmental decision support systems.",
      techStack: ["Python", "PennyLane", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
      paperUrl: "#",
      detailsUrl: "#"
    },
    {
      id: "exoplanet-research",
      title: "Exoplanet Detection using AI",
      tags: ["Hackathon", "ML", "Astronomy"],
      desc: "Developed an AI-driven transit light-curve detrending and classification pipeline on NASA Kepler/TESS photometric observations.",
      techStack: ["Python", "TensorFlow", "Lightkurve", "Astropy"]
    },
    {
      id: "smart-crop-research",
      title: "Smart Crop Advisory System (Proposed)",
      tags: ["Research", "AI", "Agriculture"],
      desc: "Architecting a predictive precision agriculture model integrating soil sensors, meteorological APIs, and deep learning crop disease classifiers.",
      techStack: ["Python", "PyTorch", "IoT APIs", "FastAPI"]
    },
    {
      id: "environmental-vision",
      title: "AI for Environmental Monitoring",
      tags: ["Idea", "Computer Vision"],
      desc: "Exploring automated aerial imagery segmentation models to quantify river plastic accumulation and urban vegetative green cover.",
      techStack: ["PyTorch", "OpenCV", "UNet", "Satellite Data"]
    }
  ],

  researchInterests: [
    "Applied ML",
    "Quantum ML",
    "Environmental AI",
    "Space & Astronomy",
    "Generative AI"
  ],

  blogPosts: [
    {
      id: "building-chatbot-flask-llms",
      title: "Building a Chatbot with Flask and LLMs",
      excerpt: "A step by step guide to building a multilingual chatbot using Flask, Ollama and LangChain.",
      category: "AI/ML",
      tags: ["Flask", "LLMs", "LangChain"],
      date: "Sep 28, 2024",
      readTime: "5 min read",
      image: projectEdupathImg,
      content: `### Building a Real-World Multilingual Chatbot
In this deep dive, we explore how to build a responsive, low-latency chatbot powered by locally running Large Language Models (LLMs) via Ollama, connected through Flask and LangChain.

#### Key Architecture Components:
1. **Model Runtime**: Using Ollama to serve quantized open-weights models (Mistral 7B & Llama 3) locally with minimal VRAM footprint.
2. **Orchestration**: LangChain handles memory buffers, prompt engineering templates, and vector embeddings lookup.
3. **API Layer**: Flask microservice exposing lightweight streaming endpoints for the frontend interface.
4. **Multilingual Adaptation**: Prompt framing techniques that allow natural translations into regional Indian languages without hallucinations.

Building locally gave us zero API cost, total data privacy, and rapid iteration capabilities!`
    },
    {
      id: "getting-started-ml",
      title: "Getting Started with Machine Learning",
      excerpt: "Key concepts, algorithms and practical tips for beginners.",
      category: "AI/ML",
      tags: ["Python", "Scikit-Learn", "Foundations"],
      date: "Oct 12, 2024",
      readTime: "4 min read",
      image: projectWaterImg,
      content: `### Navigating the Modern Machine Learning Landscape
When diving into Machine Learning as a Computer Science student, the sheer breadth of mathematics, libraries, and frameworks can feel overwhelming. Here is the structured roadmap I followed to build solid intuition:

#### 1. Master the Core Math Intuitively
Focus on Linear Algebra (vectors, matrix multiplications, eigenvalues) and Multivariate Calculus (partial derivatives, gradient descent). Visualizing gradient descent as finding the valley floor in a mountain fog clarifies neural network training instantly.

#### 2. Clean Data Before Picking Models
In real-world projects, 80% of model performance stems from thoughtful feature engineering, missing value imputation, and outlier detection rather than tuning hyper-parameters.

#### 3. Start Classical Before Deep Learning
Master Linear Regression, Logistic Regression, Decision Trees, and Random Forests in Scikit-Learn before jumping into PyTorch or TensorFlow.`
    },
    {
      id: "nasa-space-apps-experience",
      title: "My Hackathon Experience at NASA Space Apps",
      excerpt: "From idea to working prototype: what I learned, challenges and outcomes.",
      category: "College Life",
      tags: ["Hackathon", "NASA", "SpaceApps"],
      date: "Sep 2024",
      readTime: "6 min read",
      image: projectExoplanetImg,
      content: `### 48 Hours of Planetary Discovery: NASA Space Apps 2024
Participating in the NASA Space Apps Challenge was one of the most intense, rewarding experiences of my engineering journey so far.

#### The Challenge:
Astronomical satellites like Kepler and TESS capture thousands of star brightness readings every day. Sifting through this photometric light-curve data manually to detect transit dips from unseen exoplanets is impossible.

#### What We Built:
Our team built an automated deep learning classification pipeline that detrends telescope noise, folds light curves by periodic intervals, and runs a 1D Convolutional Neural Network to flag candidate planets with 96% validation AUC!

#### Key Takeaways:
- **Velocity beats perfection:** Shipping a working demo with real data beats an over-engineered slide deck.
- **Interdisciplinary collaboration:** Combining astrophysics principles with machine learning pipelines created our strongest competitive edge.`
    },
    {
      id: "how-i-approach-research",
      title: "How I Approach a Research Project",
      excerpt: "My process for reading papers, identifying gaps and implementing methods.",
      category: "Research",
      tags: ["Research", "Methodology", "Papers"],
      date: "Aug 2024",
      readTime: "5 min read",
      image: projectWaterImg,
      content: `### Demystifying Academic Research as an Undergraduate
Conducting research in emerging fields like Quantum Machine Learning requires a structured, skeptical mindset. Here is my 4-step framework:

1. **The Three-Pass Reading Strategy**: First pass reads the abstract, figures, and conclusions (10 mins). Second pass analyzes the methodology and claims (40 mins). Third pass reproduces the mathematical proofs or algorithm logic.
2. **Identify Realistic Limitations**: Look specifically at what the paper does *not* do or where the benchmarks fall short on messy data.
3. **Reproduce Before Innovating**: Re-implement baseline classical algorithms before attempting novel quantum circuit variations.
4. **Document Empirical Results Honestly**: Negative results or parity benchmarks are just as valuable for scientific rigor as claimed state-of-the-art leaps.`
    },
    {
      id: "top-tools-student-dev",
      title: "Top Tools I Use as a Student Developer",
      excerpt: "A list of tools that help me improve productivity and build better projects.",
      category: "Tutorials",
      tags: ["DevTools", "VS Code", "Productivity"],
      date: "Aug 2024",
      readTime: "4 min read",
      image: projectSmartvisionImg,
      content: `### The Student Developer Tech Stack for 2025
Equipping yourself with the right tools transforms daily coding from a slog into a seamless flow state. Here are the top tools I rely on:

- **VS Code + Key Extensions**: Error Lens for immediate bug highlighting, GitHub Copilot for boilerplate acceleration, and Thunder Client for quick REST testing.
- **Docker**: Spinning up isolated PostgreSQL or Redis instances in seconds without cluttering local Windows environments.
- **Ollama**: Running local LLMs offline for coding assistance and test data generation.
- **Postman**: Documenting API contracts and validating edge-case response status codes.
- **Notion**: Maintaining structured devlogs, research reading lists, and algorithmic problem-solving journals.`
    }
  ],

  achievements: {
    hackathons: [
      {
        id: "nasa-2024",
        title: "NASA Space Apps Challenge 2024",
        role: "Participant",
        badge: "Participant",
        highlight: "Built an AI project for exoplanet detection using photometric light curve analysis.",
        date: "2024",
        category: "Hackathons",
        tags: ["AI/ML", "NASA", "Space Science"]
      },
      {
        id: "mindsprint-2025",
        title: "MIND SPRINT - 2K25",
        role: "Finalist",
        badge: "Finalist",
        highlight: "Developed innovative software solutions with team under competitive constraints.",
        date: "2025",
        category: "Hackathons",
        tags: ["Full Stack", "Problem Solving", "Finalist"]
      },
      {
        id: "sih-2024",
        title: "Smart India Hackathon",
        role: "Research & Development",
        badge: "Research & Development",
        highlight: "Worked on problem statements related to education and agriculture technology.",
        date: "2024",
        category: "Hackathons",
        tags: ["Govt Initiative", "Agritech", "Education"]
      }
    ],
    certifications: [
      {
        id: "cert-ml",
        title: "Machine Learning & Deep Learning",
        issuer: "Stanford Online / DeepLearning.AI",
        badge: "Verified Certification",
        highlight: "Supervised Learning, Neural Networks, Decision Trees, and Unsupervised Learning pipelines.",
        date: "2024",
        category: "Certifications",
        tags: ["Machine Learning", "Deep Learning"]
      },
      {
        id: "cert-python",
        title: "Python Data Science & Scientific Computing",
        issuer: "IBM / Cognitive Class",
        badge: "Verified Certification",
        highlight: "Data wrangling with Pandas, matrix computations with NumPy, and visualization with Matplotlib.",
        date: "2023",
        category: "Certifications",
        tags: ["Python", "Data Science"]
      },
      {
        id: "cert-fullstack",
        title: "Full Stack Web Development Architecture",
        issuer: "Meta Professional Certification",
        badge: "Verified Certification",
        highlight: "React component architectures, REST API design, responsive UI design, and database normalization.",
        date: "2024",
        category: "Certifications",
        tags: ["React", "APIs", "Web Dev"]
      }
    ],
    competitions: [
      {
        id: "comp-algo",
        title: "Algorithm Speed Coding Sprint",
        badge: "Top 5%",
        highlight: "Ranked in top 5% solving complex graph traversals, bitmask DP, and segment tree challenges.",
        date: "2024",
        category: "Competitions",
        tags: ["C++", "DSA", "Competitive Programming"]
      },
      {
        id: "comp-techfest",
        title: "SRM AP Tech Fest Hackathon",
        badge: "Special Mention",
        highlight: "Engineered campus utility prototype in 24 hours with complete mobile responsive design.",
        date: "2024",
        category: "Competitions",
        tags: ["SRM University AP", "Hackathon"]
      }
    ],
    leadership: [
      {
        id: "lead-youtube",
        title: "Content Creation on YouTube",
        role: "Creator (@codewithraj-k7s)",
        badge: "Creator",
        highlight: "Authoring educational tutorials, code walk-throughs, and AI insights for aspiring developers.",
        date: "2024 - Present",
        category: "Leadership",
        tags: ["YouTube", "Content", "Community"]
      },
      {
        id: "lead-mentor",
        title: "Open Source Contributor & Peer Mentor",
        role: "Developer & Mentor",
        badge: "Community",
        highlight: "Mentoring junior students in Git workflows, web development, and algorithmic problem solving.",
        date: "2024 - Present",
        category: "Leadership",
        tags: ["Open Source", "Mentorship", "Collaboration"]
      }
    ]
  },

  education: [
    {
      institution: "SRM University AP",
      location: "Andhra Pradesh, India",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "2022 - 2026",
      cgpa: "8.44 / 10.0",
      status: "Currently in 3rd Year",
      badge: "Degree in Progress",
      keyCourses: [
        "Data Structures and Algorithms",
        "Machine Learning & Artificial Intelligence",
        "Design and Analysis of Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Object Oriented Programming (Java/C++)",
        "Software Engineering Principles"
      ]
    }
  ],

  terminalCommands: {
    help: "Available commands:\n  • whoami       - Display Snehith Raj's profile, role & core focus\n  • about        - View academic background, university & engineering goals\n  • skills       - Enumerate verified skills across 4 technical categories\n  • projects     - List featured AI/ML and full-stack software systems\n  • research     - View research studies in Quantum ML & Astrophysics\n  • blog         - Read latest blog posts & engineering notes\n  • achievements - View hackathons, awards & leadership milestones\n  • contact      - Access email, social profiles & contact form\n  • resume       - Trigger resume preview & PDF download modal\n  • clear        - Clear the terminal screen",
    
    whoami: "IDENTITY: Snehith Raj\nROLE: AI/ML Engineer | Full Stack Developer\nEDUCATION: B.Tech in CSE @ SRM University AP\nCGPA: 8.44\nLOCATION: Andhra Pradesh, India\nSTATUS: Open to AI/ML & Full Stack Opportunities\nMOTTO: Turning Ideas into Real-World AI Applications.",
    
    about: "ACADEMIC & PROFESSIONAL BACKGROUND:\n• University: SRM University AP, Andhra Pradesh\n• Degree: B.Tech Computer Science and Engineering\n• CGPA: 8.44\n• Passions: AI/ML, Generative AI, Full Stack Development, Quantum Computing\n• Philosophy: I enjoy learning, building and solving real world problems using AI.",
    
    skills: "VERIFIED TECHNICAL SKILLS:\n[1] Programming: Python, C++, Java, JavaScript, HTML5\n[2] AI / ML: TensorFlow, PyTorch, Scikit-learn, OpenCV, NumPy, Pandas, Keras, LangChain\n[3] Web Development: React, Node.js, Express.js, Flask, Tailwind CSS, Next.js, SQLite, Supabase\n[4] Tools & DevOps: Git, GitHub, Docker, Linux, VS Code, Figma, Postman, Ollama",
    
    projects: "FLAGSHIP ENGINEERING PROJECTS:\n[1] Cycle-Care: Menstrual Health & Cycle Tracker Progressive Web App (PWA)\n[2] Campus-Trade: Hyperlocal university marketplace for SRM AP students\n[3] U-Needs: Campus peer delivery & hostel errand network\n[4] Contact Book App: Dual-interface Web & Python CLI contact manager\n[5] DSA-CPP: 150+ LeetCode C++ algorithms & problem solving\n[6] Interactive 3D Portfolio: 60 FPS WebGL neural particle developer showcase",
    
    research: "RESEARCH & TECHNICAL AREAS:\n• Progressive Web Apps & Client-Side Offline Database Architectures (Dexie / IndexedDB)\n• Full-Stack REST Microservices (Python Flask, SQLite, Jinja2)\n• Campus Hyperlocal Peer Logistics & Order State Machines\n• Algorithmic Problem Solving & Modern C++ STL Optimization",
    
    blog: "BLOG & LEARNINGS:\n• Building Offline-First PWAs with React and Dexie.js\n• Deploying Python Flask Microservices on Serverless Vercel\n• State Machine Design for Peer Delivery Networks\n• Modern C++ STL Optimization Strategies for LeetCode",

    achievements: "ACHIEVEMENTS & EXPERIENCE:\n• Creator of Cycle-Care PWA, Campus-Trade, and U-Needs platforms\n• 150+ Algorithmic Challenges Solved on LeetCode in C++\n• YouTube Content Creator (@codewithraj-k7s)\n• B.Tech CSE at SRM University AP (CGPA: 8.44)",

    contact: "COMMUNICATION & PROFILES:\n• Email: snehithraj007@gmail.com\n• GitHub: https://github.com/snehithraj-1\n• LinkedIn: https://www.linkedin.com/in/snehithraj-gaddam-454852322/\n• LeetCode: https://leetcode.com/u/hcdiMGr9EW/\n• YouTube: https://www.youtube.com/@codewithraj-k7s\n• Location: SRM University AP, Andhra Pradesh, India",
    
    resume: "RESUME ACTION:\nOpening resume credentials modal. Click 'Download PDF Resume' to access the PDF file."
  }
};
