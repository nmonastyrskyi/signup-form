# Modern Signup Form

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![tailwind-variants](https://img.shields.io/badge/tailwind--variants-FFD700?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-ec5990?style=for-the-badge&logo=react-hook-form&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-0E1116?style=for-the-badge&logo=zod&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

## Description 
A modern, accessible signup form built with React and TypeScript. 

## Demo
<br/>
<div align="center">
  <h3>
    <a href="https://nmonastyrskyi.github.io/signup-form/">
      Live Demo
    </a>
  </h3>
</div>

## Features
- 🎨 Modern UI with tailwind-variants and TailwindCSS
- ✅ Form validation with React Hook Form and Zod
- ♿️ Accessible components (ARIA compliant)
- 🛠 Proper ESLint configuration
- 🎨 CSS Properties (CSS Variables) for theming
- 🖌 Smart SVG colorization
- 📦 SVGR with SVGO for optimized SVGs
- 🧩 Granular field components composition
- 🔧 Polymorphic props typing for Button component
- ✨ Email error message animation
- 🌟 Easter egg: Click the star below the signup button to open the stars configuration (only in the `custom-stars` branch)

## Project Structure
The project follows a feature-based structure with a flat hierarchy based on the [bulletproof React architecture](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md). Form is extracted into a separate feature folder. While it's not necessary at may be an overkill for a small project like this, it's a good practice to follow for larger projects and I did it for demonstration purposes:
```
src/
├── App.tsx
├── assets/
├── utils/
├── components/
│   └── ui/
├── features/
│   └── form/
```

## Tech Stack
- React `19.0`
- TypeScript `5.7`
- Vite `6.0`
- TailwindCSS `3.4`
- React Hook Form `7.54`
- Zod `3.24`
- tailwind-variants `0.3`

## Getting Started

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/nmonastyrskyi/signup-form.git
    ```
2. Navigate to the project directory:
    ```sh
    cd signup-form
    ```
3. Install the dependencies:
    ```sh
    pnpm install
    ```
    or with npm:
    ```sh
    npm install
    ```
    or with yarn:
    ```sh
    yarn install
    ```
4. Start the development server:
    ```sh
    pnpm dev
    ```
    or with npm:
    ```sh
    npm run dev
    ```
    or with yarn:
    ```sh
    yarn dev
    ```
5. Open `http://localhost:5173/signup-form/` in your browser

## 🌟 Easter Egg 
Check out the `custom-stars` branch and try to find the hidden Easter egg!
