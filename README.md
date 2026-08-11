# Abrish Gul — Corporate Freelancer Portfolio Website

A modern, responsive, corporate-style freelancer portfolio website created for **Abrish Gul**, a Computer Science student at **PMAS ARID AGRICULTURE UNIVERSITY**, AI Engineer, Data Entry Specialist, and AI Website & Automation Developer.

Designed to attract Fiverr clients seeking Data Entry, Excel Management, AI Websites, Custom AI Agents, and Business Automation solutions.

---

## 🌟 Key Features

### 👤 Personal Information & Brand Identity
- **Name**: Abrish Gul
- **Professional Titles**: CS Student | AI Engineer | Data Entry Specialist | AI Website & Automation Developer
- **Academic Background**: PMAS ARID Agriculture University
- **Status**: Active Freelance Professional on Fiverr

### 🎨 Design & Visual Aesthetic
- **Primary Color Scheme**: Corporate Dark & Light Teal with high contrast, elegant typography, and generous spatial rhythm.
- **Dark Mode / Light Mode**: Native theme toggle using CSS classes and localStorage state persistence.
- **Custom Interactive Pointer**: Custom animated glowing cursor follower with magnetic hover state feedback for interactive controls.
- **Fully Responsive**: Desktop-first precision with mobile-first fluid breakpoints (`sm:`, `md:`, `lg:`).

---

## 🚀 Website Sections

1. **Header & Sticky Navbar**: Dynamic branding, quick navigation links, dark/light theme switch, printable CV viewer, and "Hire Me" quick CTA.
2. **Home (Hero) Section**:
   - Rotating animated professional titles.
   - Professional corporate headshot portrait.
   - Action buttons: *Hire Me*, *Download CV*, *View Portfolio*.
   - Stat counters (Completed Tasks, Accuracy Rate, Satisfaction, Delivery Time).
3. **About Me Section**:
   - Professional bio detailing PMAS ARID CS studies and freelance services.
   - Specialization pillars card.
4. **Services Section (12 Services)**:
   - Interactive category filter tabs and live search bar.
   - Cards covering Data Entry, Data Cleaning, Data Formatting, PDF to Excel Conversion, Copy-Paste Tasks, Microsoft Excel Work, Customer Database Management, AI Website Development, Custom AI Agents, Business Automation Solutions, AI Chatbots, and AI Video Generation.
5. **Skills Section (13 Skills)**:
   - Animated progress bars with proficiency badges across Microsoft Excel, Data Entry, Cleaning, Formatting, PDF Conversion, Database Management, Web Development, HTML, CSS, JavaScript, AI Tools, AI Agents, and Automation.
6. **Strengths Section**:
   - Core qualities: *Accuracy*, *Attention to Detail*, *Fast Delivery*, *Organization*, *Confidentiality*, and *Professional Communication*.
7. **Portfolio Section**:
   - Case studies detailing Problem, Work Done, Tools Used, and Measured Results.
   - Interactive live Data Cleaning demonstration component.
   - Mandatory portfolio disclaimer badge.
8. **Interactive Fiverr Quote Estimator**:
   - Custom calculator allowing prospective clients to estimate turnaround times and pricing based on task volume and complexity.
9. **Testimonials Section**:
   - Verified Fiverr client reviews with star ratings, client photos, and service tags.
10. **Contact Section**:
    - Direct email copy button (`abrishgulabrish@gmail.com`).
    - Fiverr profile link (`Abrish Gul`).
    - Social links and interactive direct inquiry message form.
11. **Printable Curriculum Vitae (CV Modal)**:
    - Clean modal layout formatted for printing or saving directly as a PDF resume.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations & Interactivity**: Custom CSS Keyframes, Motion Hooks, and React State Handlers
- **Dev Tooling**: ESLint, TypeScript Compiler (`tsc`), Esbuild

---

## 📁 Project Directory Structure

```
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── metadata.json
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── vite-env.d.ts
│   ├── types.ts
│   ├── assets/
│   │   └── images/
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   └── components/
│       ├── CustomCursor.tsx
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Skills.tsx
│       ├── Strengths.tsx
│       ├── Portfolio.tsx
│       ├── InteractiveDataCleaning.tsx
│       ├── QuoteCalculator.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       ├── ResumeModal.tsx
│       └── Footer.tsx
```

---

## 💻 Local Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:3000`.

3. **Production Build**:
   ```bash
   npm run build
   ```

4. **Lint Code**:
   ```bash
   npm run lint
   ```

---

## 📄 License

Created for **Abrish Gul** portfolio showcase.
