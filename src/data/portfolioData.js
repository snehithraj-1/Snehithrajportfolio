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
    title: "Full Stack Developer & AI Engineer | B.Tech CSE @ SRM AP",
    badgeRole: "👋 HELLO WORLD • DEVELOPER & BUILDER",
    headline: "Engineering Practical Web Applications & Intelligent Systems.",
    tagline: "Computer Science undergraduate at SRM University AP passionate about building full-stack web applications, progressive web apps, and machine learning solutions that solve practical human problems.",
    
    // Status & Availability
    status: "Open for 2025–2026 Software & AI Engineering Roles",
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
      { value: "8.44", label: "Academic CGPA (SRM AP)" },
      { value: "2026", label: "B.Tech CSE Batch" },
      { value: "1", label: "Flagship GitHub Project" },
      { value: "60 FPS", label: "Canvas Physics Engine" }
    ],

    quote: "Building reliable software requires clean modular architecture, practical engineering, and a relentless focus on solving real user problems.",
    
    interests: ["Full Stack Web", "React & Modern JS", "Python & Backend APIs", "Machine Learning", "Data Structures & Algorithms"]
  },

  about: {
    intro: "Hey there! I'm Snehith Raj — a 3rd-year Computer Science undergraduate student at SRM University AP passionate about Full Stack Web Development, modern JavaScript/React, Python, and Machine Learning.",
    narrative: [
      "I love building software that solves practical daily problems. Over the past three years at SRM University AP, that curiosity has focused on engineering responsive, high-performance web applications and mastering core computer science foundations—starting with my open-source Interactive 3D Developer Portfolio published on GitHub.",
      "My development philosophy centers on clean modular architecture, responsive 60 FPS performance, and intuitive user experiences. Whether developing interactive canvas physics engines, structuring modern component systems in React, or tackling algorithmic problem solving on LeetCode in Java and C++, I care deeply about writing clean, maintainable code that delivers real value."
    ],
    details: {
      name: "Snehith Raj",
      education: "B.Tech CSE, SRM University AP (2022–2026)",
      location: "Andhra Pradesh, India",
      cgpa: "8.44 / 10.0",
      interests: "Full Stack Web Development, React, Python, Machine Learning, DSA"
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
        id: "systems-builder",
        title: "Full-Stack & Systems Builder",
        desc: "Hands-on engineering across the entire stack—from relational schemas and backend REST services to responsive 60fps React frontends.",
        icon: "Layers"
      },
      {
        id: "building-products",
        title: "Product Craftsmanship",
        desc: "Code is only half the battle. I care deeply about how an app feels in your hands: snappy responses, intuitive UX, and zero unnecessary fluff.",
        icon: "Layers"
      },
      {
        id: "continuous-learning",
        title: "Relentless Learner",
        desc: "Technology evolves rapidly. I stay curious, sharpen my algorithmic problem solving daily on LeetCode, and continuously explore modern developer tooling.",
        icon: "Zap"
      }
    ],
    sections: {
      overview: "I'm a computer science undergraduate at SRM University AP who loves understanding how things work under the hood and turning ideas into production applications.",
      education: "Pursuing Bachelor of Technology in Computer Science and Engineering at SRM University AP (2022–2026). Maintained an 8.44 CGPA while balancing core CS theory (Data Structures, OS, Networks, DBMS) with hackathons and software projects.",
      skills: "Specialized in Python, Java, C++, JavaScript, React, HTML5 Canvas, Web Audio API, Tailwind CSS, Git, and Vercel cloud deployments.",
      interests: "Passionate about Full Stack Web, interactive canvas physics, local LLMs, algorithmic problem solving, and modern developer tools.",
      achievements: "Shortlisted in NASA International Space Apps Challenge 2025 (Galactic Problem Solver), participant in CMR HACKFEST 3.0 (Team Vision-Crew), and SYNAPSE 2K25 AI/ML Hackathon.",
      doingNow: "Engineering modern interactive web applications with React & Vite, building developer tooling, and practicing algorithmic problem solving on LeetCode."
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
        { name: "MongoDB", level: "Certified Associate Developer (Credly)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
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
      id: "snehithraj-portfolio",
      title: "Interactive 3D Developer Portfolio",
      subtitle: "Production Developer Showcase with HTML5 Canvas Physics & Web Audio",
      category: "Web Apps",
      tags: ["React 19", "JavaScript", "HTML5 Canvas", "Web Audio API", "Vite", "Tailwind CSS"],
      image: snehithRajImg,
      featured: true,
      hasLiveDemo: true,
      demoUrl: "https://snehithrajportfolio.vercel.app",
      githubUrl: "https://github.com/snehithraj-1/Snehithrajportfolio",
      shortDescription: "Production-grade developer portfolio engineered with a 60 FPS HTML5 neural particle canvas, synthesized Web Audio sound engine, keyboard-driven command palette (⌘K), and interactive developer terminal.",
      stats: [
        { value: "60 FPS", label: "Canvas Physics" },
        { value: "Live", label: "Vercel Deployed" },
        { value: "100%", label: "Open Source" }
      ],
      keyFeatures: [
        "Real-time HTML5 neural particle canvas with distance-based synaptic connecting lines and interactive cursor physics",
        "Synthesized Web Audio API sound engine generating real-time micro-feedback without external audio files",
        "Kinetic 3D mouse parallax cards with dynamic specular light glare and titanium styling",
        "Keyboard-driven developer productivity tooling including ⌘K Command Palette and interactive CLI Terminal Emulator",
        "Smooth inertia momentum scrolling via Lenis, responsive CSS architecture, and zero cumulative layout shift"
      ],
      techStack: ["React 19", "JavaScript ES6+", "HTML5 Canvas", "Web Audio API", "Vite", "Tailwind CSS", "Framer Motion", "Lenis"],
      caseStudy: {
        problemStatement: "Most developer portfolios rely on generic templates, static layouts, and heavy external libraries that cause lag and layout jank, failing to demonstrate real frontend engineering competence.",
        objectives: [
          "Engineer a silky 60 FPS particle physics canvas running in pure vanilla HTML5 Canvas without heavy Three.js dependencies.",
          "Design a synthesized Web Audio engine delivering instant tactile feedback with zero network latency.",
          "Deliver an agency-grade, keyboard-accessible dark interface with smooth momentum scrolling and responsive bento grids."
        ],
        dataset: {
          name: "Canvas Physics & Synaptic Nodes Engine",
          source: "Custom HTML5 Canvas & Web Audio API synthesizers",
          size: "Real-time physics vector math, dynamic node matrices, and spatial distance calculations",
          embeddingModel: "Euclidean distance proximity matrix & velocity damping algorithms",
          vectorStore: "Local GPU-accelerated 2D Context"
        },
        preprocessing: "Dynamic DPI device-pixel-ratio scaling, requestAnimationFrame loop optimization, and off-screen particle garbage collection.",
        architecture: "User Mouse Telemetry -> HTML5 Vector Physics Loop -> Web Audio Synthesizer -> React 19 UI DOM Reconciliation",
        metricsTable: [
          { metric: "Frame Rate", value: "60 FPS Steady", benchmark: "30-45 FPS (Heavy 3D Libs)" },
          { metric: "Lighthouse Performance", value: "98 / 100", benchmark: "70-80 (Standard Templates)" },
          { metric: "Audio Latency", value: "0ms (Synthesized)", benchmark: "150-300ms (Audio File Fetch)" }
        ],
        limitations: "Particle count is intelligently throttled on mobile devices to prevent excessive battery drain.",
        futureWork: "Adding custom GLSL fragment shader backgrounds and interactive WebAssembly physics modules."
      },
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
        id: "nasa-space-apps-2025",
        title: "NASA International Space Apps Challenge 2025",
        role: "Shortlisted • Galactic Problem Solver",
        badge: "Shortlisted (Galactic Problem Solver)",
        highlight: "Shortlisted in NASA's flagship global hackathon for outstanding participation in developing solutions to complex challenges faced on Earth and in space.",
        date: "October 4–5, 2025",
        organizer: "NASA (in partnership with ESA, ISRO, JAXA, CSA)",
        recipient: "snehithraj gaddam",
        category: "Hackathons",
        tags: ["NASA", "Space Apps", "Shortlisted", "Galactic Problem Solver", "AI/ML"]
      },
      {
        id: "cmr-hackfest-3",
        title: "CMR HACKFEST 3.0 (36-Hour National Level)",
        role: "National Hackathon Participant (Team Vision-Crew)",
        badge: "36-Hour National Hackathon",
        highlight: "Competed in the 36-hour national-level hackathon organized by CMR College of Engineering & Technology, representing SRM University AP with Team 'Vision-Crew'.",
        date: "January 9–10, 2026",
        organizer: "CMR College of Engineering & Technology (UGC Autonomous), Hyderabad",
        recipient: "Gaddam Snehith Raj (Team Vision-Crew, SRM University AP)",
        category: "Hackathons",
        tags: ["36-Hour Hackathon", "National Level", "Vision-Crew", "SRM University AP"]
      },
      {
        id: "synapse-2k25",
        title: "SYNAPSE 2K25 — AI & ML Hackathon",
        role: "Hackathon Participant",
        badge: "AI & Machine Learning",
        highlight: "Actively participated in the intelligent systems hackathon organized by the Department of AIML at Mohan Babu University in association with Hubexus Solutions & IEEE CIS Chapter.",
        date: "October 17–18, 2025",
        organizer: "Mohan Babu University (AIML Dept) & Hubexus Solutions",
        recipient: "Gaddam Snehith Raj (Hubexus ID: HUB-LMS/AIML-2510-0130)",
        category: "Hackathons",
        tags: ["AI/ML", "Mohan Babu University", "Hubexus", "IEEE CIS", "Synapse 2K25"]
      }
    ],
    certifications: [
      {
        id: "cert-mongodb",
        title: "MongoDB Associate Developer",
        issuer: "MongoDB (Credly Verified)",
        badge: "Associate Developer",
        highlight: "Official industry certification covering document data modeling, CRUD operations, aggregation framework, indexing strategies, and database optimization.",
        date: "01 May 2026",
        verifyUrl: "https://www.credly.com/go/1C7PTLWN",
        category: "Certifications",
        tags: ["MongoDB", "NoSQL", "Credly", "Database Modeling", "Aggregation"]
      },
      {
        id: "cert-java-duke",
        title: "Java Programming: Solving Problems with Software",
        issuer: "Duke University (Coursera)",
        badge: "Duke University Verified",
        highlight: "Software engineering course by Duke University covering algorithms, Java syntax, CSV structured data parsing, perimeter analysis, and automated test design.",
        date: "22 Oct 2026",
        verifyUrl: "https://coursera.org/verify/S6UVEK4C9OE1",
        category: "Certifications",
        tags: ["Java", "Duke University", "Coursera", "Problem Solving", "Software Engineering"]
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
    help: "Available commands:\n  • whoami         - Display Snehith Raj's profile, role & core focus\n  • about          - View academic background, university & engineering goals\n  • skills         - Enumerate verified skills across 4 technical categories\n  • projects       - View featured GitHub repository & deployed showcase\n  • certificates   - View verified MongoDB & Duke University credentials\n  • coursework     - View core computer science subjects & theory\n  • achievements   - View verified hackathons & certification credentials\n  • contact        - Access email, social profiles & contact form\n  • resume         - Trigger resume preview & PDF download modal\n  • clear          - Clear the terminal screen",
    
    whoami: "IDENTITY: Snehith Raj\nROLE: Full Stack Developer & AI Engineer\nEDUCATION: B.Tech CSE @ SRM University AP\nCGPA: 8.44\nLOCATION: Andhra Pradesh, India\nSTATUS: Open to 2025–2026 Engineering Roles\nMOTTO: Engineering Practical Web Applications & Intelligent Systems.",
    
    about: "ACADEMIC & PROFESSIONAL BACKGROUND:\n• University: SRM University AP, Andhra Pradesh\n• Degree: B.Tech Computer Science and Engineering\n• CGPA: 8.44\n• Passions: Full Stack Web Development, Modern React, Python, Machine Learning, DSA\n• Philosophy: Clean modular architecture and relentless focus on building practical software.",
    
    skills: "VERIFIED TECHNICAL SKILLS:\n[1] Programming: Python, C++, Java, JavaScript, SQL\n[2] Frontend & Core Web: React 19, HTML5 Canvas Physics, Web Audio API, Tailwind CSS, Vite\n[3] Backend & Data: MongoDB, Python, Flask, SQLite, RESTful APIs, Git & GitHub\n[4] Problem Solving: Data Structures & Algorithms on LeetCode",
    
    projects: "VERIFIED GITHUB PROJECT:\n[1] Snehithrajportfolio: Interactive 3D Developer Portfolio (React 19, HTML5 Canvas Physics, Web Audio API, Vite)\n    Repo: https://github.com/snehithraj-1/Snehithrajportfolio\n    Live: https://snehithrajportfolio.vercel.app\n\nUPCOMING IN PIPELINE:\n• Full-Stack & Intelligent Web Applications in active development at github.com/snehithraj-1",
    
    certificates: "VERIFIED INDUSTRY CERTIFICATIONS:\n[1] MongoDB Associate Developer (Issued by MongoDB • Credly Verified)\n    Verification: https://www.credly.com/go/1C7PTLWN\n[2] Java Programming: Solving Problems with Software (Duke University • Coursera)\n    Verification: https://coursera.org/verify/S6UVEK4C9OE1",

    coursework: "CORE COMPUTER SCIENCE FOUNDATIONS:\n• Data Structures and Algorithms (Searching Techniques, Graphs, Trees)\n• Database Management Systems (Relational Normalization & SQL)\n• Operating Systems & Process Management\n• Computer Networks & Protocol Stacks\n• Object-Oriented Software Engineering Principles",

    research: "CORE COMPUTER SCIENCE FOUNDATIONS:\n• Data Structures and Algorithms (Searching Techniques, Graphs, Trees)\n• Database Management Systems (Relational Normalization & SQL)\n• Operating Systems & Process Management\n• Computer Networks & Protocol Stacks",

    blog: "ENGINEERING NOTES:\n• Building 60 FPS HTML5 Canvas Physics Engines in Pure Vanilla JS\n• Synthesizing Low-Latency Web Audio Feedback Without External Assets\n• Modular React 19 Component Architecture for High-Performance SPAs",

    achievements: "MILESTONES & CREDENTIALS:\n• NASA International Space Apps Challenge 2025 (Shortlisted • Galactic Problem Solver)\n• CMR HACKFEST 3.0 (36-Hour National Hackathon, Team Vision-Crew)\n• SYNAPSE 2K25 (AI/ML Hackathon, Mohan Babu University & Hubexus)\n• MongoDB Certified Associate Developer (Credly Verified)\n• Duke University Java Programming Certified (Coursera Verified)\n• Flagship Open Source Project: Snehithrajportfolio\n• B.Tech CSE at SRM University AP (CGPA: 8.44)",

    contact: "COMMUNICATION & PROFILES:\n• Email: snehithraj007@gmail.com\n• GitHub: https://github.com/snehithraj-1\n• LinkedIn: https://www.linkedin.com/in/snehithraj-gaddam-454852322/\n• LeetCode: https://leetcode.com/u/hcdiMGr9EW/\n• YouTube: https://www.youtube.com/@codewithraj-k7s\n• Location: SRM University AP, Andhra Pradesh, India",
    
    resume: "RESUME ACTION:\nOpening resume credentials modal. Click 'Download PDF Resume' to access the PDF file."
  }
};
