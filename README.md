# ⚡ Snehith Raj - Professional AI/ML & Full Stack Developer Portfolio

A modern, responsive, high-performance developer portfolio website for **Snehith Raj**, an aspiring **AI/ML Engineer and Full Stack Developer** studying Computer Science and Engineering at **SRM University AP, Andhra Pradesh**.

Built with **React, TypeScript/JavaScript, Vite, and modern CSS**, featuring an interactive synaptic neural canvas, terminal command-line emulator, project case studies, 6 categorized technical skills matrices, research overviews, education milestones, light/dark mode theme toggle, and print/downloadable CV integration.

---

## 🌟 Key Features

1. **Header & Navigation** (`Navbar.jsx`):
   - Accessible navigation across Home, About, Skills, Projects, Education, Experience, Research, and Contact.
   - Smooth scrolling with active section indicator.
   - Light/Dark mode theme switch (`ThemeToggle.jsx`) with `localStorage` state persistence.
   - Prominent resume button triggering printable credentials modal and PDF download.
   - Fully responsive mobile drawer navigation menu.

2. **Hero Section** (`Hero.jsx`):
   - Clear value proposition: *"Building Intelligent Solutions Through AI and Software Engineering."*
   - Configurable availability status pill (`Open to AI/ML & Full Stack Opportunities`).
   - Direct CTA buttons: *Explore My Projects* & *Download Resume*.
   - Direct profile links: GitHub, LinkedIn, Email.
   - Embedded interactive developer terminal emulator.

3. **About Me** (`About.jsx`):
   - Narrative on academic foundation at SRM University AP.
   - Technical interests spanning Artificial Intelligence, Machine Learning, Full Stack Systems, and Generative AI.
   - Problem-solving philosophy, current learning objectives, and professional career goals.

4. **Technical Skills Matrix** (`SkillsMatrix.jsx`):
   - Organized strictly into the 6 core candidate categories:
     1. *Programming Languages* (Python, Java, C++, JavaScript, TypeScript)
     2. *Frontend Development* (HTML, CSS, React, Tailwind CSS)
     3. *Backend Development* (Node.js, Express.js, Flask, REST APIs)
     4. *AI and Machine Learning* (NumPy, Pandas, Scikit-learn, TensorFlow, OpenCV, Generative AI)
     5. *Databases* (PostgreSQL, SQLite, Supabase)
     6. *Tools and Platforms* (Git, GitHub, Docker, VS Code, Vercel)
   - Real-time search filter and category chip selector.
   - Clean tags and badges—**no fabricated percentage bars or unverified metrics**.

5. **Featured Projects** (`Projects.jsx`):
   - 5 editable projects:
     1. **EduPath AI** (AI-powered career guidance application with Flask, SQLite, and LLMs)
     2. **CollageBites** (Full-stack campus food-ordering application with multi-role workflows)
     3. **SmartVision AI** (Computer vision and convolutional image classification pipeline)
     4. **Quantum Machine Learning for Water Quality Classification** (Comparative study on Variational Quantum Classifiers)
     5. **Exoplanet AI** (Photometric transit light-curve machine learning classification)
   - Filterable by project category.
   - Each project card provides problem solved, tech stack badges, key features, GitHub link, and a **"Detailed Case Study"** modal trigger.

6. **Comprehensive Project Case Studies** (`ProjectDetailsModal.jsx`):
   - Covers: Problem Statement, Motivation & Objectives, Architecture Overview, Technologies, Features, Challenges & Solutions, Lessons Learned, Future Scope, and AI/ML modeling specifics (Datasets, Preprocessing, Evaluation).

7. **Education & Coursework** (`Education.jsx`):
   - Degree: *Bachelor of Technology (B.Tech) in Computer Science and Engineering*
   - Institution: *SRM University AP, Andhra Pradesh*
   - Relevant Coursework: Data Structures, Machine Learning, OS, DBMS, Networks, Software Engineering, AI.

8. **Milestones & Achievements** (`Experience.jsx`):
   - Honest, verifiable timeline of practical engineering projects, exploratory research initiatives, hackathons, and technical sprints.

9. **Scientific ML & Research** (`Research.jsx`):
   - Dedicated showcase for scientific studies:
     - Quantum Machine Learning for Water Quality Classification
     - Exoplanet Transit Light Curve Identification with Astronomical ML
   - Transparently labeled with *Research Study* / *In Progress* badges.

10. **Interactive CLI Shell** (`TerminalEmulator.jsx`):
    - Interactive terminal supporting commands: `whoami`, `about`, `skills`, `projects`, `education`, `research`, `contact`, `resume`, `clear`.

11. **Contact Section** (`Contact.jsx`):
    - Client-side validated form (Name, Email, Subject, Message).
    - One-click copy-to-clipboard for email address with visual toast.
    - Honest fallback launching user's email client directly if no backend mailer is connected.

12. **Curriculum Vitae Modal** (`ResumeModal.jsx`):
    - Printable CV preview with one-click print styling and PDF download link pointing to `public/resume.pdf`.

---

## 🛠️ Technology Stack

- **Frontend**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Modern CSS Design System (`src/index.css`) with CSS custom properties, neon accents, dark & light theme modes.
- **Typography**: Google Fonts (*Outfit*, *Space Grotesk*, *JetBrains Mono*)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand icons
- **Effects**: HTML5 Canvas Synaptic Background (`NeuralCanvas.jsx`) + Canvas Confetti
- **Deployment**: [Vercel](https://vercel.com/) ready with `vercel.json` SPA rewrite rules.

---

## 📁 Directory Structure

```
├── public/
│   ├── favicon.svg              # Browser tab icon
│   ├── icons.svg                # Vector symbols
│   ├── resume.pdf               # Downloadable resume PDF
│   ├── robots.txt               # SEO crawler directives
│   └── sitemap.xml              # Search engine sitemap
├── src/
│   ├── components/
│   │   ├── About.jsx            # Academic bio, interests & goals
│   │   ├── Contact.jsx          # Validated contact form & direct channels
│   │   ├── Education.jsx        # SRM University AP degree & coursework
│   │   ├── Experience.jsx       # Practical milestones & initiatives
│   │   ├── Footer.jsx           # Dynamic year, navigation & links
│   │   ├── Hero.jsx             # Hero landing, CTAs & terminal preview
│   │   ├── Icons.jsx            # SVG GitHub and LinkedIn icons
│   │   ├── Navbar.jsx           # Responsive header, theme switch & resume button
│   │   ├── NeuralCanvas.jsx     # Synaptic background animation
│   │   ├── ProjectDetailsModal.jsx # Comprehensive project case study dialog
│   │   ├── Projects.jsx         # 5 featured projects with category filter
│   │   ├── Research.jsx         # Quantum ML and astrophysics research
│   │   ├── ResumeModal.jsx      # Printable CV preview & PDF downloader
│   │   ├── SkillsMatrix.jsx     # 6 categorized skill groups with live search
│   │   ├── TerminalEmulator.jsx # Interactive developer command terminal
│   │   └── ThemeToggle.jsx      # Light/Dark mode theme switcher
│   ├── data/
│   │   └── portfolioData.js     # 💡 Single central configuration file for all content
│   ├── App.jsx                  # Main application structure
│   ├── index.css                # Global CSS tokens, dark & light themes, layout utilities
│   └── main.jsx                 # React root renderer
├── index.html                   # HTML entry point with complete SEO & OpenGraph tags
├── package.json
├── vercel.json                  # SPA routing configuration for Vercel
└── vite.config.js
```

---

## ⚙️ How to Customize Your Content

All content is cleanly separated from presentation inside **`src/data/portfolioData.js`**.

### 1. Update Personal & Contact Links
Open `src/data/portfolioData.js` and edit the `personal` object:
```javascript
personal: {
  name: "Snehith Raj",
  email: "your.real.email@gmail.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  location: "Andhra Pradesh, India",
  status: "Open to AI/ML & Full Stack Opportunities",
  ...
}
```

### 2. Update Your Resume PDF
Place your real resume file at:
📂 **`public/resume.pdf`**
Any visitor clicking "Download Resume" in the Navbar, Hero, or Resume Modal will immediately download this PDF file.

### 3. Add or Modify Projects
In `src/data/portfolioData.js`, add or edit entries in the `projects` array:
- Specify `title`, `category`, `shortDescription`, `problemSolved`, `techStack`.
- Update `githubUrl` and `demoUrl`.
- Fill in `caseStudy` fields (overview, problem statement, architecture, AI/ML specifics, challenges, future scope).

### 4. Update Coursework & Skills
Modify `education.coursework` or `skills` in `src/data/portfolioData.js`. All changes instantly reflect in the UI and the interactive terminal CLI.

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

3. **Check for lint errors**:
   ```bash
   npm run lint
   ```

4. **Create a production build**:
   ```bash
   npm run build
   ```

5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to Vercel

The project is pre-configured with `vercel.json` for one-click deployment:

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Snehith Raj portfolio"
   git push origin main
   ```

2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Select **Vite** as the framework preset (Build Command: `npm run build`, Output Directory: `dist`).
5. Click **Deploy**. Your portfolio will be live with full SSL, global CDN, and automatic continuous deployment.

---

## 📄 License

MIT License. Crafted with clean architecture for **Snehith Raj**.
