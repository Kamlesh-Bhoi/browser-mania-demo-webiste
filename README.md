# Browser Mania 2026 - Web Development Competition

An official, cyberpunk/retro-arcade styled event website for **Browser Mania**, held under **Dexterity 2026** by the **Department of Information Technology**, Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune.

## 🌟 Features

- **Cyberpunk / Retro Browser Aesthetic:** Matches the official poster with neon cyan (`#00f0ff`), neon magenta (`#ff007f`), terminal green (`#00ff66`), and dark space slate.
- **Retro Browser Window Chrome:** Top navigation with vintage navigation buttons (`<-- --> ↺`), secure URL pill, CRT Scanlines toggle, and retro 8-bit sound effects (Web Audio API).
- **Live Countdown Timer:** Live countdown to the event day (October 29, 2026).
- **Dual-Stage Battle Arena Deep-Dive:**
  - **Round 1: Code Exorcist** (45 mins manual debugging sprint under strict No-AI policy).
  - **Round 2: Game Dev Dash** (90 mins AI-powered game sprint based on drawn theme chits + 5 mins live jury defense).
- **Interactive Warm-up Arena:**
  - **Bug Exorcist Simulator (Round 1):** Clickable source code to spot and manually fix 3 intentional bugs with real-time feedback.
  - **Theme Chit Roller (Round 2):** Simulate drawing randomized game themes and constraints.
- **Event Day Timeline:** Step-by-step milestone tracking from reporting at 09:00 AM to awards at 02:30 PM.
- **Prizes & Perks:** ₹15,000 Total Prize Pool, trophies, and Certificate of Participation for all attendees.
- **Registration Hub:** Direct Google Form integration, link copy button, entry fee info (Entry from ₹60), and Scan to Register QR code.
- **Student Coordinators:** Contact cards with one-click direct Call and WhatsApp links.
- **FAQ Accordion & Official Poster Lightbox:** Includes full view of the high-res poster and download option.

---

## 🛠️ Tech Stack

- **React 18**
- **Vite**
- **Vanilla CSS** (Cyberpunk design system, responsive layout, CRT scanlines, chamfered clips)
- **Lucide Icons**
- **Web Audio API** (Retro 8-bit synthesizer sound effects with zero audio asset dependencies)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173/` in your browser.

### 3. Production Build
```bash
npm run build
```

---

## ⚙️ Customization

All event text, Google Form links, dates, and coordinator phone numbers are centralized in:
`src/data/eventData.js`

- **Update Google Form Link:** Change `googleFormUrl` in `src/data/eventData.js`.
- **Update Student Coordinators:** Update `coordinators` array with names and mobile numbers.
- **Update Poster:** Replace `public/poster.png` with any new poster design.
