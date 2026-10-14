// Event details and content for Browser Mania
export const EVENT_DATA = {
  title: "BROWSER MANIA",
  subtitle: "Web Development Competition",
  tagline: "Debug. Build. Dominate.",
  heroPunchline: "A two-round tech showdown where coders break bugs and AI builds games.",
  organization: {
    fest: "DEXTERITY",
    department: "DEPARTMENT OF INFORMATION TECHNOLOGY",
    college: "Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune",
    collegeShort: "MMCOE, Pune",
  },
  date: "29 October 2026",
  dateIso: "2026-10-29T09:00:00+05:30",
  venue: "MMCOE Campus, Karvenagar, Pune",
  mode: "Strictly Offline",
  participationType: "Solo Competition (Individual Participation Only)",
  prizePool: "₹ 15,000",
  registrationFee: "Entry from ₹60",
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc9d5DmHZ_xZMZhkINajU9z2Yttf_A7S3mzvaf1nd6EjyX_Jg/viewform",
  hasPoster: true,
  posterUrl: "/poster.jpeg",

  highlights: [
    { label: "Format", value: "Solo Competition", desc: "Individual participation only. No team collaboration.", icon: "User" },
    { label: "Prize Pool", value: "₹ 15,000", desc: "Cash awards & trophies for top performers.", icon: "Trophy" },
    { label: "Registration Fee", value: "Entry from ₹60", desc: "Budget-friendly student fee.", icon: "Ticket" },
    { label: "Certification", value: "All Participants", desc: "Official MMCOE IT certificate for all valid attendees.", icon: "Award" },
  ],

  prizeBreakdown: [
    {
      place: "1st Prize",
      title: "Champion / Winner",
      amount: "₹ 6,000",
      rawAmount: 6000,
      accent: "gold",
      tag: "WINNER",
      desc: "Top combined score across Round 1 Debugging & Round 2 Game Dev Dash.",
      perks: [
        "₹6,000 Cash Prize",
        "Certificate of Excellence",
        "Champion Tech Honor"
      ]
    },
    {
      place: "2nd Prize",
      title: "1st Runner-Up",
      amount: "₹ 5,000",
      rawAmount: 5000,
      accent: "cyan",
      tag: "RUNNER UP",
      desc: "Second highest combined score with outstanding game mechanics & debugging speed.",
      perks: [
        "₹5,000 Cash Prize",
        "Certificate of Excellence",
        "Jury Commendation"
      ]
    },
    {
      place: "3rd Prize",
      title: "2nd Runner-Up",
      amount: "₹ 4,000",
      rawAmount: 4000,
      accent: "pink",
      tag: "2ND RUNNER UP",
      desc: "Third highest combined score with innovative constraint implementation & code clean-up.",
      perks: [
        "₹4,000 Cash Prize",
        "Certificate of Excellence",
        "Jury Commendation"
      ]
    }
  ],

  rounds: [
    {
      id: "round-1",
      number: "ROUND 01",
      name: "Code Exorcist",
      theme: "Manual Debugging Round",
      duration: "45 minutes",
      accent: "cyan",
      badge: "STRICT NO-AI POLICY",
      summary: "Participants will be provided with an intentionally broken website codebase containing structural, syntax, and layout bugs. Participants must manually analyze and debug the code using standard browser developer tools and text editors.",
      keyRules: [
        {
          title: "Intentionally Broken Codebase",
          desc: "You will receive a web project with hidden CSS glitches, broken JavaScript logic, and malformed HTML markup.",
        },
        {
          title: "Manual Tools Only",
          desc: "Use standard browser developer tools (Chrome DevTools, Firefox Inspector) and your choice of text editor.",
        },
        {
          title: "Strict No-AI Policy",
          desc: "Zero tolerance for AI assistants, LLM tools (ChatGPT, Claude, GitHub Copilot, Gemini) or auto-code extensions.",
          highlight: true,
        },
        {
          title: "Scoring & Qualification",
          desc: "Scored by total verified bugs fixed and structural integrity restored. Top debuggers qualify for Round 2.",
        },
      ],
      allowedTools: ["Standard Browser DevTools", "VS Code / Sublime / Notepad++", "No AI Extensions Allowed"],
      judgingCriteria: ["Verified Bugs Fixed", "Structural & Layout Restoration", "Clean Code Formatting", "Time of Completion"],
    },
    {
      id: "round-2",
      number: "ROUND 02",
      name: "Game Dev Dash",
      theme: "AI-Powered Browser Game Building",
      duration: "90 min dev + 5 min presentation",
      accent: "magenta",
      badge: "AI TOOLS ALLOWED & ENCOURAGED",
      summary: "Qualified participants will draw a chit containing a specific scenario, theme, or game dynamic constraint. Participants must construct a fully functional, playable Browser Game strictly aligned with the drawn constraint.",
      keyRules: [
        {
          title: "Theme Chit Draw",
          desc: "Every shortlisted coder draws a physical chit with a randomized theme, scenario, or game dynamic mechanic.",
        },
        {
          title: "Full Playable Game Required",
          desc: "Build a playable web game (Canvas, DOM, or WebGL) that strictly implements your drawn constraint.",
        },
        {
          title: "AI Power Unleashed",
          desc: "Participants are permitted and encouraged to use modern coding tools, AI agents, and LLMs to accelerate dev within the time limit.",
          highlight: true,
        },
        {
          title: "5-Minute Live Jury Defense",
          desc: "3 minutes live demo + 2 minutes judge Q&A answering architectural and implementation questions.",
        },
      ],
      allowedTools: ["Any AI Assistant (ChatGPT, Claude, Copilot)", "Modern Frameworks & Libraries", "Asset Generators", "Web APIs"],
      judgingCriteria: ["Playability & Game Feel (35%)", "Creative Constraint Implementation (30%)", "Visual Design & UI/UX (20%)", "Live Demo & Judge Q&A (15%)"],
    },
  ],

  schedule: [
    { time: "09:00 AM", title: "Reporting & Check-in", desc: "Mandatory reporting 30 minutes prior. Hardware check and network readiness.", icon: "Clock" },
    { time: "09:45 AM", title: "Briefing & Environment Setup", desc: "Distribution of Round 1 broken repo & security guidelines.", icon: "Terminal" },
    { time: "10:00 AM", title: "Round 1: Code Exorcist", desc: "45-Minute high-pressure manual debugging sprint.", icon: "Bug" },
    { time: "10:45 AM", title: "Round 1 Evaluation & Refreshment", desc: "Automated test verification + judge review. Top candidates shortlisted.", icon: "CheckCircle" },
    { time: "11:30 AM", title: "Round 2: Game Dev Dash Kickoff", desc: "Chit Draw for game themes & 90-minute AI game development rush.", icon: "Gamepad2" },
    { time: "01:00 PM", title: "Code Freeze & Submission", desc: "Submissions lock. Any late commit/submission is strictly disqualified.", icon: "Lock" },
    { time: "01:15 PM", title: "Live Demonstrations & Jury Defense", desc: "5-Minute live demos (3 min gameplay + 2 min Q&A).", icon: "MonitorPlay" },
    { time: "02:30 PM", title: "Awards & Certificate Distribution", desc: "Cash prizes, trophies, and participation certificate issuance via feedback form.", icon: "Trophy" },
  ],

  guidelines: [
    {
      title: "Reporting Time",
      desc: "All participants must reach the venue at least 30 minutes before the competition starts. Late entries risk disqualification.",
      badge: "Mandatory",
    },
    {
      title: "Individual Participation Only",
      desc: "Team participation is strictly not allowed. Every participant competes independently on their own machine.",
      badge: "Solo Only",
    },
    {
      title: "BYOD - Bring Your Own Device",
      desc: "Participants must carry their own laptops, chargers, and any required accessories (mouse, adapters). Charging points will be available.",
      badge: "Hardware",
    },
    {
      title: "Strict Submission Deadlines",
      desc: "Any submission made after the stipulated time limit will not be accepted under any circumstances.",
      badge: "Enforced",
    },
    {
      title: "Certificates Requirement",
      desc: "Participation certificates will be provided to all attendees after the completion and verified submission of the post-event feedback form.",
      badge: "Perk",
    },
    {
      title: "Finality of Decisions",
      desc: "Decisions made by the Judges and Event Coordinators will be final and binding for all participants.",
      badge: "Rules",
    },
  ],

  coordinators: [
    {
      role: "Student Coordinator",
      name: "Nilakshi Patil",
      placeholderTag: "[Coordinator Name 1]",
      phone: "+91 9403723081",
      placeholderPhone: "[Phone Number 1]",
      email: "it.dexterity@mmcoe.edu.in",
    },
    {
      role: "Student Coordinator",
      name: "Shreyash Mandalapure",
      placeholderTag: "[Coordinator Name 2]",
      phone: "+91 9356325030",
      placeholderPhone: "[Phone Number 2]",
      email: "it.dexterity@mmcoe.edu.in",
    },
  ],

  faqs: [
    {
      q: "Can I use AI extensions or ChatGPT in Round 1?",
      a: "STRICTLY NO. Round 1 has a strict zero-AI policy. Any participant detected using ChatGPT, Claude, Copilot, Cursor, or AI browser extensions will face immediate disqualification.",
    },
    {
      q: "What tools and frameworks are allowed in Round 2?",
      a: "In Round 2 (Game Dev Dash), you are encouraged to use ANY AI tools (ChatGPT, Claude, GitHub Copilot, v0, etc.), modern web libraries (Phaser, Three.js, Canvas API, React, Vanilla JS), and open asset repositories to construct your playable game.",
    },
    {
      q: "How will Round 2 themes be assigned?",
      a: "Shortlisted candidates will physically draw a chit from a bowl containing randomized game scenarios, mechanics, or constraints (e.g., 'Retro arcade game where jumping inverts gravity').",
    },
    {
      q: "Will internet and power outlets be provided?",
      a: "Yes, college Wi-Fi and power extensions will be provided. However, participants are advised to ensure their laptops are fully charged before arrival and have backup mobile hotspot ready.",
    },
    {
      q: "Who is eligible to participate?",
      a: "Any college student with a passion for web development and game design is eligible. Entry is strictly solo.",
    },
    {
      q: "When and how do I receive my Certificate of Participation?",
      a: "All active participants will receive an official verifiable digital certificate from the MMCOE Department of Information Technology immediately following the submission of the post-event feedback form.",
    },
  ],

  practiceChits: [
    {
      title: "Gravity Inversion Runner",
      constraint: "Single-button infinite runner where spacebar flips gravity upside down instead of jumping.",
      theme: "Cyberpunk Glitch Neon",
    },
    {
      title: "Audio Waveform Dodger",
      constraint: "Player must dodge obstacles whose speed and height pulse in rhythm with generated retro synth beats.",
      theme: "Retro Arcade 1984",
    },
    {
      title: "Terminal Hacker Maze",
      constraint: "Top-down maze where player uncovers the map by typing terminal commands (e.g. ping, scan, decrypt).",
      theme: "Matrix Green Console",
    },
    {
      title: "Time-Rewind Puzzle",
      constraint: "A 2D platformer where holding 'R' rewinds the character's movement 3 seconds into the past to solve pressure plates.",
      theme: "Chrono Cyber Laboratory",
    },
    {
      title: "Bug Hunter Defense",
      constraint: "Defend your server firewall against falling bug sprites by typing their matching error codes (404, 500, 403).",
      theme: "Server Room Meltdown",
    },
  ],
};
