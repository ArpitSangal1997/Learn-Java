# Java Backend Learning Dashboard

A polished, browser-only learning companion for the Java backend roadmap. It uses semantic HTML, modern CSS, and vanilla JavaScript—there is no build step, framework, server, or account required.

## Run and deploy

Open `index.html` in a modern browser. Progress, XP, notes, favorites, streaks, preferences, and analytics are stored in that browser's Local Storage.

To publish: push this directory to GitHub, then choose **Settings → Pages → Deploy from a branch** and select the branch/root folder containing these files. Every path is relative, so it works directly on GitHub Pages.

Keyboard shortcuts: `/` focuses search; `d`, `r`, `a`, `h`, `f`, `n`, and `s` open Dashboard, Roadmap, Analytics, Achievements, Favorites, Notes, and Settings.

## Project map

```text
index.html                 Landing page
dashboard.html             Learning overview
roadmap.html               Expandable curriculum and resources
analytics.html             Canvas charts and learning signals
achievements.html          Progress milestones
favorites.html / notes.html / settings.html
css/                       Theme, layout, and components
js/data/                   Curated module/topic content
js/storage.js              Local Storage persistence
js/pages.js                Page-specific renderers
```

The roadmap covers Core Java, JVM & Concurrency, Spring Core & Boot, Data Layer, Spring Security, Testing, Microservices, DevOps & Cloud, System Design, and Capstone & Interview Preparation. Each topic carries resources, exercises, project ideas, interview questions, common mistakes, notes, favorites, and completion tracking.
