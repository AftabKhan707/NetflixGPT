NetflixGPT 🎬

A Netflix-style movie discovery app built with React + Vite, Firebase Auth, and an LLM movie assistant that suggests titles from your query. It features infinite scrolling with IntersectionObserver, virtualized rendering for performance, and a modern component architecture.

✨ Features

React + Vite frontend with fast HMR and production builds.

Firebase Authentication (sign-up/sign-in/sign-out, persistent sessions).

LLM movie assistant: integrates a GPT API to suggest movies from natural-language prompts.

Infinite scroll powered by IntersectionObserver and virtualization (windowed lists) to keep the DOM light and scrolling smooth.

State management with Redux Toolkit (global user/session and movie data).

Routing with React Router, including protected routes for authenticated pages.

Tailwind CSS utility styling for a responsive UI.

Environment-based config via Vite (import.meta.env).

SPA fallback configured for Firebase Hosting (rewrites to /index.html).

Production deploys to Firebase Hosting (optional GitHub Action CI/CD ready).

🧠 How the GPT suggestions work

The app sends your prompt to a GPT API, parses the output, and maps suggested titles to metadata from the movie catalog API (e.g., posters, ratings). (Store your API key in .env and never commit it.)

Security tip: If you plan to ship publicly, proxy GPT requests through a tiny server so your API key is never exposed in the browser.

🗂️ Tech Stack

Frontend: React 18, Vite

Styles: Tailwind CSS

State: Redux Toolkit

Auth/Hosting: Firebase

Router: React Router

LLM: GPT API (OpenAI or compatible)

Performance: IntersectionObserver + list virtualization

🚀 Getting Started
# 1) Clone and install
git clone https://github.com/AftabKhan707/NetflixGPT
cd NetflixGPT
npm install

# 2) Add environment variables
cp .env.example .env
# then edit .env with your keys

# 3) Run dev
npm run dev

# 4) Build
npm run build

# 5) Preview production build
npm run preview

.env.example
# Vite only exposes vars prefixed with VITE_
VITE_OPENAI_API_KEY=your_gpt_key_here
VITE_MOVIE_API_KEY=your_movie_api_key_here
VITE_FIREBASE_API_KEY=xxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=xxxx
VITE_FIREBASE_STORAGE_BUCKET=xxxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxx
VITE_FIREBASE_APP_ID=xxxx

🔒 Firebase Auth Setup

Create a Firebase project.

Enable Email/Password (or your preferred provider) in Authentication.

Copy credentials into .env.

Ensure Hosting rewrites are set to SPA fallback.

📦 Deploy (Firebase Hosting)
# install CLI and login once
npm i -g firebase-tools
firebase login

# link project (replace with your Firebase project id)
firebase use newnetflix-a789c

# build and deploy
npm run build
firebase deploy --only hosting


Tip: firebase init hosting:github adds a GitHub Action to auto-deploy on push/merge.

📁 Folder Structure
src/
  components/
  hooks/
  utils/
        store.js/ 
  App.jsx



🗺️ Roadmap

Watchlist & user preferences

Server proxy for GPT calls

Unit tests (React Testing Library + Vitest)

📬 Contact

PRs & issues welcome!