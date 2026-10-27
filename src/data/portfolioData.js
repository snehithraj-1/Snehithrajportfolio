import heroCosmicImg from "../assets/images/hero_cosmic.jpg";
import projectEdupathImg from "../assets/images/project_edupath.jpg";
import projectWaterImg from "../assets/images/project_water_quality.jpg";
import projectSmartvisionImg from "../assets/images/project_smartvision.jpg";
import projectExoplanetImg from "../assets/images/project_exoplanet.jpg";
import contactAstronautImg from "../assets/images/contact_astronaut.jpg";
import humanWorkspaceImg from "../assets/images/human_workspace.jpg";

export const portfolioAssets = {
  heroCosmic: heroCosmicImg,
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
    title: "AI/ML Engineer & Full Stack Developer",
    badgeRole: "👋 HELLO WORLD • ENGINEER & BUILDER",
    headline: "Engineering Intelligent AI Systems & Robust Machine Learning Pipelines.",
    tagline: "Computer Science undergraduate at SRM University AP specializing in Machine Learning, Deep Learning, Generative AI & RAG systems. Passionate about architecting production-grade AI pipelines and data-driven solutions that bridge theoretical machine learning and real-world utility.",
    
    // Status & Availability
    status: "Open for 2025–2026 AI/ML Engineering Internships",
    isAvailable: true,
    
    // Location & Contact
    location: "SRM University AP, Andhra Pradesh, India",
    email: "snehithraj.dev@example.com",
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
      { value: "5+", label: "AI/ML & Core Systems" },
      { value: "96.2%", label: "Peak Validation AUC" },
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
      id: "edupath-ai",
      title: "EduPath AI",
      subtitle: "Multilingual Career Guidance Chatbot for Rural Students",
      category: "AI/ML",
      tags: ["AI/ML", "Generative AI", "RAG"],
      image: projectEdupathImg,
      featured: true,
      hasLiveDemo: true,
      demoUrl: "https://edupath-ai-demo.vercel.app",
      githubUrl: "https://github.com/snehithraj-1/EduPath-AI",
      shortDescription: "Multilingual career guidance chatbot designed to empower rural students with AI-driven personalized roadmaps, vernacular Q&A, and mentorship pathways.",
      stats: [
        { value: "94.2%", label: "Retrieval Relevance" },
        { value: "<850ms", label: "Inference Latency" },
        { value: "3", label: "Languages Supported" }
      ],
      keyFeatures: [
        "Multilingual conversational engine supporting English, Telugu, and Hindi",
        "Personalized career roadmap generation tailored to student academic background",
        "Retrieval-Augmented Generation (RAG) using LangChain and ChromaDB vector embeddings",
        "Local LLM inference orchestration via Ollama (quantized Llama 3 / Mistral 7B)",
        "Curated repository of accredited Indian government scholarships and entrance examinations",
        "Ultra-lightweight responsive frontend designed for low-bandwidth mobile connections"
      ],
      techStack: ["Python", "Flask", "LangChain", "ChromaDB", "Ollama", "React", "Tailwind CSS", "SQLite"],
      
      // Case Study In-Depth Data
      caseStudy: {
        problemStatement: "Over 68% of rural and tier-3 high school students in India lack access to qualified career counselors and are unaware of vocational pathways, scholarships, and modern tech curricula. Existing commercial tools require high-end devices and function strictly in formal English.",
        objectives: [
          "Provide conversational career guidance in vernacular languages (Telugu, Hindi, English).",
          "Eliminate LLM hallucinations by grounding responses strictly on a curated educational knowledge base via RAG.",
          "Enable low-latency inference on budget edge servers without expensive closed-source API tokens."
        ],
        dataset: {
          name: "Curated Indian Higher Education & Vocational Curricula Knowledge Base",
          source: "Ministry of Education (India), AICTE guidelines, state scholarship portals, and standard engineering/arts career frameworks",
          size: "1,200+ structured markdown documents, 4,500+ text chunks",
          embeddingModel: "sentence-transformers/all-MiniLM-L6-v2 (384-dimensional embeddings)",
          vectorStore: "ChromaDB with cosine similarity indexing"
        },
        preprocessing: "Recursive character text splitting (chunk size: 500, overlap: 50), language identification token filters, stopword handling for Telugu/Hindi transliterations, and metadata tagging by domain, degree level, and eligibility.",
        architecture: "User Query -> Language Detection & Intent Router -> ChromaDB Vector Embeddings Search (Top-k=4) -> Context Synthesis & Prompt Formatting -> Ollama Local LLM (Llama 3 8B quantized) -> Post-processing Filter -> React Client Stream",
        metricsTable: [
          { metric: "Retrieval Hit Rate @ 4", value: "94.2%", benchmark: "81.0% (BM25 baseline)" },
          { metric: "Generation Faithfulness (RAGAS)", value: "92.5%", benchmark: "74.3% (Vanilla Prompting)" },
          { metric: "Average End-to-End Latency", value: "820ms", benchmark: "2,100ms (Cloud API)" },
          { metric: "Vernacular Response Quality (BLEU)", value: "0.88", benchmark: "0.71 (Generic Translator)" }
        ],
        limitations: "Complex dialectal nuances and heavy colloquial slang can occasionally reduce retrieval accuracy; currently relies on server-side GPU acceleration for multi-user concurrent streams.",
        futureWork: "Fine-tuning a dedicated Llama-3-LoRA model on state education syllabi and integrating speech-to-text (Whisper) for voice-driven accessibility."
      },
      architecture: "User Query -> Language Detection -> Vector Store RAG Retrieval -> Mistral / Llama 3 Reasoning -> Formatted Guidance Response",
      results: "Evaluated across 500+ student queries with 94.2% relevance accuracy and sub-second retrieval times.",
      learnings: "Prompt framing for vernacular languages, efficient embedding caching in ChromaDB, and mitigating hallucinations through strict retrieved context bounding."
    },
    {
      id: "water-quality",
      title: "Water Quality Classification",
      subtitle: "Quantum Machine Learning approach for water quality prediction",
      category: "Research",
      tags: ["Research", "ML", "Quantum ML"],
      image: projectWaterImg,
      featured: true,
      hasLiveDemo: true,
      demoUrl: "https://github.com/snehithraj-1",
      githubUrl: "https://github.com/snehithraj-1/water-quality-qml",
      shortDescription: "Compared classical ML (Random Forest, SVM, XGBoost) and quantum ML (Variational Quantum Circuits via PennyLane) using physicochemical river potability datasets.",
      stats: [
        { value: "92.4%", label: "Quantum VQC Acc" },
        { value: "99.1%", label: "Classical RF Acc" },
        { value: "12", label: "Physicochemical Features" }
      ],
      keyFeatures: [
        "Variational Quantum Circuit (VQC) with angle embedding and parameterized rotation gates (RX, RY, RZ)",
        "Entangling CNOT layers for quantum feature correlation modeling",
        "Benchmarked against Random Forest, Support Vector Machines (RBF Kernel), and XGBoost",
        "Physicochemical feature scaling, IQR outlier rejection, and correlation matrix analysis",
        "Pauli-Z expectation measurement for binary potability classification",
        "Interactive Streamlit demonstration with real-time decision boundary telemetry"
      ],
      techStack: ["Python", "PennyLane", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Matplotlib"],
      
      // Case Study In-Depth Data
      caseStudy: {
        problemStatement: "Traditional water testing relies on slow biochemical lab assays. Real-time predictive potability modeling must accurately handle non-linear physicochemical cross-correlations (e.g., pH, Turbidity, Chloramines, Sulfates, Solids) where classical linear boundaries struggle.",
        objectives: [
          "Assess whether parameterized Variational Quantum Circuits (VQCs) offer representational expressiveness on environmental datasets.",
          "Benchmark 4-qubit quantum state simulators against state-of-the-art ensemble classifiers.",
          "Identify how quantum circuit depth and noise sensitivity affect classification accuracy."
        ],
        dataset: {
          name: "Water Potability Dataset & Achenkovil River Physicochemical Records",
          source: "Kaggle Water Potability Repository & Kerala State Pollution Control Board environmental data",
          size: "3,276 water samples across 9 continuous physical parameters (pH, Hardness, Solids, Chloramines, Sulfate, Conductivity, Organic Carbon, Trihalomethanes, Turbidity)",
          split: "70% Training (2,293 samples), 15% Validation (491 samples), 15% Testing (492 samples)"
        },
        preprocessing: "Iterative median imputation for missing values in Sulfate & pH; RobustScaler to mitigate extreme ionic concentration outliers; PCA dimension reduction to 4 principal components to match current NISQ qubit constraints.",
        architecture: "Input Vector (x in R^4) -> Angle Embedding Gate U(x) -> Parameterized Entangling Ansatz (Rot(theta) + CNOT chain) x 3 layers -> Hermitian Pauli-Z Observable Measurement <sigma_z> -> Loss Function (MSE / Cross-Entropy) -> Adam Quantum Gradient Descent",
        metricsTable: [
          { metric: "Random Forest (Classical)", value: "99.1% Acc | 0.99 AUC", benchmark: "Baseline Champion" },
          { metric: "Support Vector Machine (RBF)", value: "91.8% Acc | 0.92 AUC", benchmark: "Classical Kernel" },
          { metric: "PennyLane VQC (4 Qubits, 3 Layers)", value: "92.4% Acc | 0.93 AUC", benchmark: "Quantum Ansatz" },
          { metric: "Logistic Regression (Linear)", value: "62.4% Acc | 0.63 AUC", benchmark: "Linear Baseline" }
        ],
        limitations: "Classical simulation of quantum states scales exponentially with qubit count; current NISQ hardware suffers from decoherence and gate infidelities that require error mitigation.",
        futureWork: "Deploying quantum kernel estimation (QKE) with PennyLane on actual IBM Quantum hardware backends to measure real hardware noise impact."
      },
      architecture: "Physicochemical Data -> PCA (4 Components) -> Quantum Angle Embedding -> Parameterized Variational Layers -> Pauli-Z Measurement -> Potability Decision",
      results: "Achieved competitive 92.4% test accuracy with 4-qubit quantum state simulation, outperforming classical SVM and approaching ensemble models.",
      learnings: "Quantum circuit noise models, barren plateau gradients in quantum optimization, and hybrid classical-quantum parameter optimization."
    },
    {
      id: "smartvision-ai",
      title: "SmartVision AI",
      subtitle: "Image classification and object detection using deep learning",
      category: "Computer Vision",
      tags: ["Computer Vision", "Deep Learning", "PyTorch"],
      image: projectSmartvisionImg,
      featured: true,
      hasLiveDemo: true,
      demoUrl: "https://github.com/snehithraj-1",
      githubUrl: "https://github.com/snehithraj-1/SmartVision-AI",
      shortDescription: "Real-time multi-class object detection and spatial tracking system using fine-tuned neural networks, YOLOv8, and OpenCV.",
      stats: [
        { value: "91.2%", label: "Precision Score" },
        { value: "45 FPS", label: "Real-time Inference" },
        { value: "80+", label: "Object Classes" }
      ],
      keyFeatures: [
        "Real-time video stream bounding-box detection with sub-22ms GPU inference latency",
        "Dynamic telemetry HUD with class probabilities, FPS counter, and detection overlays",
        "Non-Maximum Suppression (NMS) tuning with custom IoU thresholds to eliminate false duplicates",
        "Dual input modes: Live webcam stream processing and high-resolution video file analysis",
        "Exported ONNX / TensorRT runtime weights optimized for embedded edge deployment"
      ],
      techStack: ["Python", "PyTorch", "OpenCV", "YOLOv8", "NumPy", "FastAPI", "React"],
      
      // Case Study In-Depth Data
      caseStudy: {
        problemStatement: "Deploying deep learning computer vision models on resource-constrained consumer hardware often causes severe frame drops, latency spikes, and degraded detection accuracy in dynamic lighting.",
        objectives: [
          "Deliver sustained 40+ FPS real-time detection on standard GPUs without dropping frames.",
          "Achieve >90% precision across common urban and indoor object classes (pedestrians, vehicles, electronics).",
          "Build an intuitive interactive telemetry HUD interface for real-time visualization."
        ],
        dataset: {
          name: "MS COCO (Common Objects in Context) + Custom Campus Surveillance Validation Set",
          source: "COCO 2017 Object Detection Benchmark (118k train images, 5k val images) + 500 locally collected frames",
          size: "80 standard object classes with dense bounding box annotations",
          split: "Fine-tuned validation split with 5,000 balanced evaluation images"
        },
        preprocessing: "Letterbox image resizing to 640x640 with aspect ratio preservation; mosaic and mixup data augmentation; normalized RGB tensor scaling [0, 1].",
        architecture: "Input Frame (640x640x3) -> CSP-Darknet53 Backbone -> Feature Pyramid Network (PAN-FPN Neck) -> Decoupled Detection Head (Classification + Regression) -> Vectorized NMS (IoU Threshold: 0.45) -> HUD Overlay Canvas",
        metricsTable: [
          { metric: "Mean Average Precision (mAP @ 0.50)", value: "0.784", benchmark: "0.720 (YOLOv5s)" },
          { metric: "Precision Score", value: "91.2%", benchmark: "86.4% (Baseline)" },
          { metric: "Recall Score", value: "88.5%", benchmark: "83.1% (Baseline)" },
          { metric: "Inference Latency (Nvidia GPU)", value: "22ms (~45 FPS)", benchmark: "48ms (SSD-MobileNet)" }
        ],
        limitations: "Occasional occluded bounding box jitter under extreme low-light motion blur; small distant objects (<15px) have lower recall.",
        futureWork: "Implementing DeepSORT multi-object tracking to assign persistent trajectory IDs and integrating ByteTrack for occluded object continuity."
      },
      architecture: "Camera Stream -> Frame Preprocessing (640x640) -> YOLOv8 CSP-Darknet Backbone -> Anchor-Free Detection Head -> Non-Maximum Suppression -> Telemetry HUD Canvas",
      results: "Maintained 45+ FPS real-time detection on standard GPUs with 91.2% precision and sub-22ms frame processing.",
      learnings: "Memory buffer optimization in OpenCV, thread pooling for camera stream capture, and quantization techniques for neural networks."
    },
    {
      id: "exoplanet-detection",
      title: "Exoplanet Detection AI",
      subtitle: "AI model to detect exoplanets from NASA Kepler/TESS data",
      category: "Hackathons",
      tags: ["Hackathon", "Deep Learning", "Astronomy"],
      image: projectExoplanetImg,
      featured: true,
      hasLiveDemo: true,
      demoUrl: "https://github.com/snehithraj-1",
      githubUrl: "https://github.com/snehithraj-1/Exoplanet-Detection-AI",
      shortDescription: "AI model developed for NASA Space Apps Challenge 2024 to detect exoplanet transits from Kepler/TESS astronomical light curves.",
      stats: [
        { value: "NASA", label: "Space Apps 2024" },
        { value: "96.2%", label: "Validation AUC" },
        { value: "10k+", label: "Light Curves Analyzed" }
      ],
      keyFeatures: [
        "Photometric light curve detrending and stellar flare removal with Lightkurve & Astropy",
        "Box Least Squares (BLS) periodogram search for candidate orbital period determination",
        "Phase folding and dual-view binning (Global transit view + Zoomed local transit dip view)",
        "1D Convolutional Neural Network with dilated filters to capture periodic transit flux dips",
        "Rejection filter for eclipsing binary stars, background centroid shifts, and cosmic ray glitches",
        "Interactive transit curve visualizer with planetary radius and orbital period estimates"
      ],
      techStack: ["Python", "TensorFlow", "Keras", "Lightkurve", "Astropy", "Pandas", "Streamlit"],
      
      // Case Study In-Depth Data
      caseStudy: {
        problemStatement: "NASA's Kepler and TESS missions produced petabytes of stellar brightness measurements. Manual human vetting of transit signals cannot keep pace with data ingestion, and over 75% of initial transit candidates are false positives caused by stellar variability and instrumental artifacts.",
        objectives: [
          "Automate transit candidate vetting from raw Kepler Threshold Crossing Events (TCEs).",
          "Achieve >95% AUC-ROC to minimize missing genuine Earth-sized habitable zone candidates.",
          "Distinguish planetary transit dips from astronomical false alarms (eclipsing binary stars)."
        ],
        dataset: {
          name: "NASA Kepler Threshold Crossing Events (TCE) Q1-Q17 Dataset",
          source: "NASA Exoplanet Archive (Kepler DR25 Pipeline)",
          size: "15,000+ vetted transit events; 3,600+ confirmed exoplanets, 9,000+ false alarms and binaries",
          split: "80% Training (12,000 TCEs), 10% Validation (1,500 TCEs), 10% Test (1,500 TCEs)"
        },
        preprocessing: "Flux normalization; spline median detrending to eliminate long-term stellar activity; phase folding by candidate period; generation of global view (2,001 points) and zoomed transit view (201 points) light curves.",
        architecture: "Dual-Branch 1D CNN: Global Light Curve (2001 bins) -> Conv1D(16, 5) -> MaxPool -> Conv1D(32, 5) | Local Transit View (201 bins) -> Conv1D(16, 3) -> MaxPool -> Conv1D(32, 3) -> Concatenation -> Dense(512) -> Dropout(0.4) -> Sigmoid Output",
        metricsTable: [
          { metric: "Validation AUC-ROC", value: "96.2%", benchmark: "89.4% (Random Forest baseline)" },
          { metric: "Overall Classification Accuracy", value: "94.8%", benchmark: "88.1% (Standard SVM)" },
          { metric: "Precision (Confirmed Exoplanet)", value: "93.1%", benchmark: "84.5% (Baseline)" },
          { metric: "Recall / True Positive Rate", value: "95.4%", benchmark: "86.0% (Baseline)" }
        ],
        limitations: "Ultra-shallow transit signals (<100 ppm dip) for small rocky planets around bright stars require high SNR; single-transit events without periodic repetition cannot be vetted by BLS alone.",
        futureWork: "Incorporating stellar spectral type parameters (effective temperature, stellar radius) as auxiliary tabular inputs in a multimodal fusion model."
      },
      architecture: "Flux Time-Series -> BLS Period Search -> Phase Folding & Normalization -> Dual-Branch 1D CNN Classifier -> Transit Confidence Score",
      results: "Achieved 96.2% AUC on Kepler Threshold Crossing Events test partition, successfully distinguishing confirmed exoplanets from astrophysical false alarms.",
      learnings: "Astrophysical time-series feature engineering, Box Least Squares optimization, and building multi-input neural networks in TensorFlow."
    },
    {
      id: "campus-trade",
      title: "CollageBites / Campus-Trade",
      subtitle: "College food ordering and peer marketplace platform",
      category: "Web Apps",
      tags: ["Web App", "Full Stack", "Flask"],
      image: projectEdupathImg,
      featured: true,
      hasLiveDemo: true,
      demoUrl: "https://campus-trade-blond.vercel.app",
      githubUrl: "https://github.com/snehithraj-1/Campus-trade",
      shortDescription: "College food ordering platform and student marketplace with dedicated student, admin and delivery portals.",
      stats: [
        { value: "Live", label: "Deployed" },
        { value: "3", label: "Role Portals" },
        { value: "100%", label: "Mobile Responsive" }
      ],
      keyFeatures: [
        "Secure student authentication, session persistence, and role-based permissions",
        "Real-time food ordering, cart management, and cafeteria order queue updates",
        "Student secondhand classifieds marketplace for books, tech items, and campus essentials",
        "Admin control dashboard for menu adjustments, inventory counts, and sales metrics"
      ],
      techStack: ["Python", "Flask", "SQLite", "JavaScript", "HTML5", "CSS3", "Vercel"],
      architecture: "Flask REST API -> SQLite Relational Schemas -> Jinja2 / Vanilla JS Dynamic Templates -> Vercel Serverless Hosting",
      results: "Over 200+ mock transactions simulated during campus sprint with zero race conditions.",
      learnings: "Database schema normalization, session security tokens, and responsive UI design without heavy front-end bloat."
    },
    {
      id: "more-projects",
      title: "More Projects & Algorithmic Labs",
      subtitle: "A collection of mini projects, algorithms and experiments",
      category: "Web Apps",
      tags: ["Ongoing", "Explorations"],
      image: projectSmartvisionImg,
      featured: false,
      hasLiveDemo: true,
      demoUrl: "https://github.com/snehithraj-1/DSA-CPP",
      githubUrl: "https://github.com/snehithraj-1/DSA-CPP",
      shortDescription: "A collection of mini projects and experiments including C++ algorithms, LeetCode competitive solutions, and utilities.",
      stats: [
        { value: "150+", label: "LeetCode Solved" },
        { value: "C++", label: "Optimized STL" },
        { value: "Open", label: "Source" }
      ],
      keyFeatures: [
        "High-performance C++ implementation of graphs, trees, dynamic programming, and heaps",
        "Contact Book CLI and dual-mode Python GUI app",
        "YOU NEEDS campus peer-delivery prototype in React 19 & TypeScript",
        "Full test coverage, algorithmic benchmarking, and detailed README writeups"
      ],
      techStack: ["C++", "Python", "Data Structures", "Algorithms", "Git"],
      architecture: "Modular C++ Header Libraries -> Standard Template Library (STL) -> Automated LeetCode Verification",
      results: "Consistent top-tier runtime performance on competitive coding platforms.",
      learnings: "Memory management, cache locality in modern C++, and asymptotic optimization under strict memory bounds."
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
    
    projects: "FLAGSHIP ENGINEERING PROJECTS:\n[1] EduPath AI: Multilingual Career Guidance Chatbot for Rural Students\n[2] Water Quality Classification: Quantum Machine Learning prediction\n[3] SmartVision AI: Real-time object detection & computer vision HUD\n[4] Exoplanet Detection AI: NASA Space Apps 2024 light curve pipeline\n[5] CollageBites / Campus-Trade: Hyperlocal university food ordering & marketplace\n[6] DSA-CPP: 150+ LeetCode C++ algorithms & libraries",
    
    research: "RESEARCH WORK:\n• Quantum Machine Learning for Water Quality Classification (PennyLane + Scikit-Learn)\n• Exoplanet Detection using AI (NASA Space Apps 2024)\n• Smart Crop Advisory System (Agritech AI)\n• AI for Environmental Monitoring (Computer Vision)",
    
    blog: "BLOG & LEARNINGS:\n• Building a Chatbot with Flask and LLMs (Sep 2024)\n• Getting Started with Machine Learning (Oct 2024)\n• My Hackathon Experience at NASA Space Apps (Sep 2024)\n• How I Approach a Research Project (Aug 2024)\n• Top Tools I Use as a Student Developer (Aug 2024)",

    achievements: "ACHIEVEMENTS & EXPERIENCE:\n• NASA Space Apps Challenge 2024 - Built Exoplanet Detection AI\n• MIND SPRINT - 2K25 - Finalist\n• Smart India Hackathon - Research & Development\n• Certifications in Machine Learning & Full Stack Architecture\n• YouTube Content Creator (@codewithraj-k7s)",

    contact: "COMMUNICATION & PROFILES:\n• GitHub: https://github.com/snehithraj-1\n• LinkedIn: https://www.linkedin.com/in/snehithraj-gaddam-454852322/\n• LeetCode: https://leetcode.com/u/hcdiMGr9EW/\n• YouTube: https://www.youtube.com/@codewithraj-k7s\n• Location: SRM University AP, Andhra Pradesh, India",
    
    resume: "RESUME ACTION:\nOpening resume credentials modal. Click 'Download PDF Resume' to access the PDF file."
  }
};
