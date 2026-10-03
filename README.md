# Assignment 6 - React Counter Application

An interactive counter application built with React and Vite showcasing state management with the `useState` hook.

## 🚀 Live Demo
- **Live URL:** [https://Avdgq2577.github.io/Assignment-6-ReactCounter/](https://Avdgq2577.github.io/Assignment-6-ReactCounter/)
- **Repository:** [https://github.com/Avdgq2577/Assignment-6-ReactCounter](https://github.com/Avdgq2577/Assignment-6-ReactCounter)

---

## 📌 Features
- **State Management:** Powered by React's `useState` hook.
- **Increment Action:** Increases the count value by 1 with instant re-rendering.
- **Decrement Action:** Decreases the count value by 1.
- **Reset Action:** Resets the counter state back to initial `0`.
- **Responsive Controls:** Intuitive, centered button group with modern hover effects.

---

## 🛠️ Tech Stack
- **React (v19):** Functional component, `useState` hook, and event handlers.
- **Vite:** Fast, modern frontend build tool.
- **CSS3:** Flexbox centering, badge counter display, and interactive buttons.

---

## 📂 Project Structure
```text
Assignment-6-ReactCounter/
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow for GitHub Pages
├── src/
│   ├── App.css           # Counter card, typography, and button styling
│   ├── App.jsx           # Counter logic and state handlers
│   └── main.jsx          # React DOM root entry point
├── index.html            # Vite HTML template
├── vite.config.js        # Vite build configuration (base: './')
├── package.json          # Project dependencies & scripts
└── README.md             # Project documentation
```

---

## 💻 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Avdgq2577/Assignment-6-ReactCounter.git
   ```

2. **Navigate to the directory:**
   ```bash
   cd Assignment-6-ReactCounter
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment
Automated via **GitHub Actions** (`.github/workflows/deploy.yml`) on every push to `main`.
