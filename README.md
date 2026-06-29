# Anubhav Pandey - Personal Portfolio Website

A premium, modern, fully responsive, and glassmorphism-styled personal portfolio website built using **React (Vite)**, **Tailwind CSS v4**, **AOS animations**, and **Typed.js** for Anubhav Pandey, a final-year B.Tech Computer Science student and Aspiring Java Full Stack Developer.

---

## 🚀 Live Demo & Setup

This portfolio is modular, production-ready, and optimized for fast page loads and deployment.

### Prerequisites

- Node.js (v18.0 or higher recommended)
- npm (v9.0 or higher)

### Installation & Local Run

1. Clone or navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Generate the PDF resume (optional - runs out of the box):
   ```bash
   node generate-resume.js
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the application.

5. Create a production build:
   ```bash
   npm run build
   ```

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core**: [React.js](https://react.dev/) + [Vite](https://vitejs.dev/) (Client-side Rendering)
- **Styling & Theme**: [Tailwind CSS v4](https://tailwindcss.com/) (Native CSS theme configuration, glassmorphism UI variables)
- **Icons**: [Lucide React](https://lucide.dev/) (Vector crisp icons)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) (Element transitions on scroll)
- **Text Typing**: [Typed.js](https://github.com/mattboldt/typed.js) (Hero animated typewriter effect)
- **Submit Celebrations**: [Canvas Confetti](https://github.com/catdad/canvas-confetti) (Vibrant confetti on form submission)
- **Resume Generator**: [PDFKit](https://pdfkit.org/) (Constructing professional resume PDF programmatically)

---

## 📂 Project Structure

```
portfolio/
├── index.html                  # SEO Config & Google Fonts imports
├── package.json                # Project script configuration & node dependencies
├── vite.config.js              # Vite config with @tailwindcss/vite plugin
├── generate-resume.js          # Node script to draw and compile the resume PDF
├── README.md                   # Project documentation
├── src/
│   ├── main.jsx                # App bootstrap imports
│   ├── App.jsx                 # Theme toggle, state coordination, and scrolling
│   ├── index.css               # Tailwind directives, animations & glassmorphism variables
│   ├── assets/
│   │   ├── profile.jpg         # Profile picture of Anubhav
│   │   ├── chat.png            # Real-time chat app mockup
│   │   ├── parking.png         # Smart parking system mockup
│   │   └── resume.pdf          # Programmatically generated resume PDF
│   └── components/
│       ├── Preloader.jsx       # Elegant site preloading screen
│       ├── Navbar.jsx          # Glassmorphic floating nav with scroll progress bar
│       ├── Hero.jsx            # Typing intro, profile presentation, resume downloads
│       ├── About.jsx           # Bio, career objective, and specialized training info
│       ├── Skills.jsx          # Grids detailing languages, frontend, tools, concepts
│       ├── Projects.jsx        # Project showcases with custom screenshots & links
│       ├── Education.jsx       # Vertical timeline detailing GLA University and schools
│       ├── Certifications.jsx  # Credentials grid linking to verify badges
│       ├── GithubStats.jsx     # LeetCode statistics and GitHub pulse metrics
│       └── Contact.jsx         # Validation form with confetti feedback
```

---

## ✨ Features Implemented

1. **Dark/Light Mode**: Smooth, persistent CSS variable-driven toggle saving state in `localStorage`.
2. **Glassmorphism UI**: Backdrop blur panels, glowing drop-shadows, and elegant layout gradients.
3. **Scroll Progress Bar**: A thin gradient progress bar tracking reading depth at the top of the viewport.
4. **Typing Animation**: Interactive Typed.js introducing full stack profiles in the Hero.
5. **Interactive Counters**: Highlights for LeetCode solved count, projects count, and tools.
6. **Timeline Nodes**: Vertical nodes charting academic achievements at GLA University and Deva Public School.
7. **Form Validation**: Comprehensive name, email, and message checks with responsive visual error hints.
8. **Confetti Drop**: Celebration effects on the Contact card upon successful form submit.
9. **SEO Optimized**: Fully integrated with semantic markup, ARIA tags, and responsive layouts.
