# Nishaniyaan (نشانیاں) — 100vh Dajjal Timeline Presentation

**Nishaniyaan** is an academic 100vh presentation website cataloging and contextualizing the Signs of the Day of Judgment (*Ashrat as-Sa'ah*), organized around **Al-Masih ad-Dajjal and the 439 Days Timeline**. Grounded in the Noble Qur'an, authentic Sunnah, and classical scholarship.

---

## 🌟 Key Features

- **Pure 100vh Presentation Architecture**: Full viewport slide deck engine (`presentation.css`) with CSS scroll-snap. Zero website navbar clutter.
- **7-Phase Dajjal Timeline**: Centralized chronological narrative built around the trial of Al-Masih ad-Dajjal (including the 40 Prophetic Days = 439 Days calculation).
- **Floating Presentation Controls**: Top home icon, centered 12-chapter pill navigation, dark/light theme switcher, bottom slide badge with jump dropdown, and right-hand progress dots.
- **Verification Badge System**: 9 explicit verification badges (🟢 Authentic Qur'an, 🟢 Sahih, 🟡 Hasan, 🟠 Weak, 🔴 Fabricated, ⚪ Scholarly Opinion, 🔵 Historical Record, 🟣 Contemporary Observation, ⚫ Unverified Report).
- **Glassmorphism & Hover Magnification**: Glass cards (`glass-card`) with 1.5x hover scaling (`hover-magnify`).
- **Keyboard Navigation**: Native support for `↑`/`↓`/`PageUp`/`PageDown` slide scrolling and `1`–`9` direct slide jumping.

---

## 🤖 AI-First Repository Architecture

This repository uses an **AI-First Architecture** for maximum efficiency with AI coding assistants.

### How It Works
- `AGENTS.md` - Main brain (table of contents & entry point)
- `.agent/` - AI Operating System with layered memory system:
  - `system.yaml`: Project configuration & chapter registry
  - `memory.yaml`: Persistent project memory & decision log
  - `architecture.yaml`: Technical architecture rules
  - `rules.yaml`: Coding, design, and content rules
  - `tasks.yaml`: Task tracking and status
  - `workflow.yaml`: Execution workflow definitions
  - `context.yaml`: Active workspace state
  - `decisions.md`: Architectural decision log
  - `glossary.md`: Domain terminology
  - `prompts/`: Reusable agent prompt templates (`update-content.md`, `add-chapter.md`, `fix-ui.md`, `deploy.md`, `test.md`)

### For AI Agents
Start by reading `AGENTS.md` for instructions before performing any task.

---

## 📂 Repository Structure

```
Nishaniyaan/
├── AGENTS.md                   (Main AI brain & instructions)
├── README.md                   (Project documentation)
├── index.html                  (Homepage slide deck: 7-Phase Timeline & 12-Chapter Grid)
├── chapter-01.html             (Ch 01: Introduction & Timeline Overview)
├── chapter-02.html             (Ch 02: Phase 1 — Before Dajjal / Minor Signs)
├── chapter-03.html             (Ch 03: Phase 2 — Just Before Dajjal / Near Signs)
├── chapter-04.html             (Ch 04: Phase 3 — The 439 Days of Dajjal ⭐ MAIN)
├── chapter-05.html             (Ch 05: Phase 4 — Arrival of Imam Mahdi)
├── chapter-06.html             (Ch 06: Phase 5 — Descent of Isa AS)
├── chapter-07.html             (Ch 07: Phase 6 — After Death of Dajjal)
├── chapter-08.html             (Ch 08: Phase 7 — After Dajjal to Qiyamah)
├── chapter-09.html             (Ch 09: Qur'anic Foundations)
├── chapter-10.html             (Ch 10: Authentic Hadith Collections)
├── chapter-11.html             (Ch 11: Research & Methodology)
├── chapter-12.html             (Ch 12: Bibliography & Appendices)
├── .agent/                     (AI Operating System & Memory)
│   ├── system.yaml
│   ├── memory.yaml
│   ├── architecture.yaml
│   ├── rules.yaml
│   ├── tasks.yaml
│   ├── workflow.yaml
│   ├── context.yaml
│   ├── decisions.md
│   ├── glossary.md
│   └── prompts/
├── assets/
│   ├── css/
│   │   └── presentation.css   (100vh Scroll-Snap & Glassmorphism CSS Engine)
│   ├── js/
│   │   ├── presentation.js   (Dots, Jump Menu, Keyboard Nav, IntersectionObserver)
│   │   └── theme.js          (Dark/Light Toggle Engine with localStorage)
│   └── data/                 (Structured JSON Content Repositories)
├── sitemap.xml                 (SEO Sitemap)
└── robots.txt                  (Search Engine Directives)
```

---

## 🚀 Deployment

- **Repository**: [https://github.com/amirhashmilive/nishaniyaan](https://github.com/amirhashmilive/nishaniyaan)
- **Live Presentation**: [https://amirhashmilive.github.io/nishaniyaan/](https://amirhashmilive.github.io/nishaniyaan/)
