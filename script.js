/**
 * TIT TECHFEST 2026 - Official Interactive Engine
 * The Technological Institute of Textile & Sciences, Bhiwani
 */

// Event Catalog Data
const EVENTS_DATA = [
  // --- SCHOOL EVENTS: TECHNICAL ---
  {
    id: "sch-science-model",
    title: "Science Model Exhibition",
    category: "school",
    subCategory: "tech",
    badgeLabel: "School • Technical",
    icon: "fa-atom",
    color: "#00f2fe",
    summary: "Showcase groundbreaking working or static models solving real-world challenges in clean energy, smart automation, robotics, and applied sciences.",
    eligibility: "Classes ",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "Trophies + Certificates",
    rounds: [
      "Round 1: ",
      "Round 2: "
    ],
    rules: [
      "Working or still models must be accompanied by an informative chart/display banner.",
      "Dangerous chemicals, open fire, or hazardous materials are strictly prohibited.",
      "Power supply sockets (220V) will be provided upon prior request in the registration form.",
      "Jury decisions regarding innovation, functionality, and presentation are final."
    ],
    coordinators: [
      { name: "DR. SATISH KHATAK", role: "ASSISTANT PROFESSOR", phone: "+91 98121 79804" },
      { name: "DR. AMIT MADHU", role: "ASSISTANT PROFESSOR, HOD of TC", phone: "+91 92542 42925" }
    ]
  },
  {
    id: "sch-tech-quiz",
    title: "Technical Quiz",
    category: "school",
    subCategory: "tech",
    badgeLabel: "School • Technical",
    icon: "fa-brain",
    color: "#4facfe",
    summary: "Test your wits, logical acumen, and scientific trivia in an adrenaline-pumping multi-round quiz showdown.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      "Round 1: ",
      "Round 2: "
    ],
    rules: [
      "No electronic gadgets or smartphones are allowed inside the quiz hall.",
      "Each question in the buzzer round carries +10 for correct and -5 for incorrect answers.",
      "Tie-breaker questions will be administered if scores are tied."
    ],
    coordinators: [
      { name: "DR. ANU KATHURIA", role: "ASSISTANT PROFESSOR", phone: "+91 83687 47838" },
      { name: "Dr. SANCHITA", role: "ASSISTANT PROFESSOR", phone: "+91 97807 82063" }
    ]
  },
  {
    id: "sch-poster-making",
    title: "Poster Making",
    category: "school",
    subCategory: "tech",
    badgeLabel: "School • Technical",
    icon: "fa-palette",
    color: "#a78bfa",
    summary: "Blend artistic ingenuity with scientific themes. Express future technologies, green planet innovations, or smart cities on canvas.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      ""
    ],
    rules: [
      "Standard drawing sheets will be provided by the institute.",
      "Participants must bring their own colors, brushes, and sketching tools.",
      "Themes will be announced 15 minutes prior (e.g., AI for Climate Action, Future of Space Exploration).",
      "Plagiarism or pre-drawn artwork will lead to immediate disqualification."
    ],
    coordinators: [
      { name: "DR. ARCHANA SINGH PARMAR", role: "ASSISTANT PROFESSOR", phone: "+91 94681 08572" },
      { name: "DR. MUKTA GOEL", role: "ASSISTANT PROFESSOR", phone: "+91 94672 17271" }
    ]
  },
  {
    id: "sch-debate",
    title: "Techno-Debate (War of Words)",
    category: "school",
    subCategory: "tech",
    badgeLabel: "School • Technical",
    icon: "fa-comments",
    color: "#f59e0b",
    summary: "Engage in intellectual combat on ethics, artificial intelligence, robotics, and the socio-economic impacts of next-gen technology.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      "Round 1: ",
      "Round 2: "
    ],
    rules: [
      "Topic: 'Artificial General Intelligence: A Boon or Existential Threat to Humanity?'",
      "Medium of expression: English or Hindi.",
      "No offensive or unparliamentary language will be tolerated.",
      "Evaluation on arguments, factual validity, diction, and rebuttal poise."
    ],
    coordinators: [
      { name: "MS. URSHITA BANSAL", role: "ASSISTANT PROFESSOR", phone: "+91 87083 56882" },
      { name: "DR. YASHNA MARKS", role: "ASSISTANT PROFESSOR", phone: "+91 83070 14918" }
    ]
  },
  {
    id: "sch-essay-writing",
    title: "Essay Writing",
    category: "school",
    subCategory: "tech",
    badgeLabel: "School • Technical",
    icon: "fa-feather",
    color: "#2ecc71",
    summary: "Pen down articulate thoughts, visionary ideas, and structured essays on scientific breakthroughs shaping tomorrow.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      ""
    ],
    rules: [
      "Topics will be provided on the spot related to Indian Space Milestones & Renewable Energy.",
      "Evaluation criteria: Depth of knowledge, structure, original thoughts, and vocabulary.",
      "Use of electronic gadgets or dictionaries is strictly prohibited."
    ],
    coordinators: [
      { name: "DR. MANOJ KR. NANDA", role: "ASSISTANT PROFESSOR", phone: "+91 96714 77197" },
      { name: "DR. SANJAY KUMAR BHIKARI CHARAN PANDA", role: "ASSISTANT PROFESSOR", phone: "+91 99606 57760" }
    ]
  },

  // --- SCHOOL EVENTS: CULTURAL ---
  {
    id: "sch-dancing",
    title: "School Dancing Showcase",
    category: "school",
    subCategory: "cultural",
    badgeLabel: "School • Cultural",
    icon: "fa-person-chalkboard",
    color: "#ff2a85",
    summary: "Set the stage on fire with rhythmic grace, storytelling, and high-energy choreography spanning classical, contemporary, and folk dance.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      ""
    ],
    rules: [
      "Audio tracks must be submitted in MP3 format on a USB drive at the registration desk by 10:00 AM.",
      "Props are allowed; inflammable items or colors thrown on stage are not permitted.",
      "Judging criteria: Choreography, rhythm, expressions, costume, and synchronization."
    ],
    coordinators: [
      { name: "MS. LIMA PATTANAYAK", role: "ASSISTANT PROFESSOR", phone: "+91 98967 96153" },
      { name: "Dr. JASMEET KAUR GHUMAN", role: "ASSISTANT PROFESSOR", phone: "+91 78984 68792" }
    ]
  },
  {
    id: "sch-singing",
    title: "School Singing Melody",
    category: "school",
    subCategory: "cultural",
    badgeLabel: "School • Cultural",
    icon: "fa-microphone",
    color: "#ff6b35",
    summary: "Enthrall the audience with vocal brilliance, melody, and rhythm across Indian classical, semi-classical, Bollywood, and Western genres.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      ""
    ],
    rules: [
      "Participants may sing with a backing karaoke track or with acoustic accompaniment (keyboard/guitar).",
      "Karaoke tracks must be submitted at the sound desk prior to the event.",
      "Judged on Sur, Taal, voice modulation, clarity, and overall stage presence."
    ],
    coordinators: [
     { name: "MS. LIMA PATTANAYAK", role: "ASSISTANT PROFESSOR", phone: "+91 98967 96153" },
      { name: "Dr. JASMEET KAUR GHUMAN", role: "ASSISTANT PROFESSOR", phone: "+91 78984 68792" }
    ]
  },

  // --- COLLEGE EVENTS: TECHNICAL & INNOVATION ---
  {
    id: "clg-project-display",
    title: "Project Display",
    category: "college",
    subCategory: "tech",
    badgeLabel: "College • Flagship Tech",
    icon: "fa-microchip",
    color: "#00f2fe",
    summary: "The pinnacle engineering innovation arena. Present your working hardware prototypes, IoT systems, AI algorithms, software apps, and textile engineering advancements.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      "Round 1: ",
      "Round 2: "
    ],
    rules: [
      "Working prototype or simulation demo is mandatory.",
      "Teams must bring their own laptops and project hardware. Power connection and Wi-Fi will be arranged.",
      "Evaluation on novelty, technical complexity, feasibility, industrial application, and pitch."
    ],
    coordinators: [
      { name: "Prof. (Dr.) Rajesh Kumar", role: "Faculty Convener", phone: "+91 94164 XXXXX" },
      { name: "Aditya Soni", role: "Student Lead", phone: "+91 98128 XXXXX" }
    ]
  },
  {
    id: "clg-startup-pitch",
    title: "Startup Vision Pitch",
    category: "college",
    subCategory: "tech",
    badgeLabel: "College • Entrepreneurship",
    icon: "fa-rocket",
    color: "#f7b731",
    summary: "Step into the Shark Tank! Pitch your innovative business idea, tech solution, MVP, and monetization model to esteemed angel investors and mentors.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      ""
    ],
    rules: [
      "Pitch deck must cover Problem, Solution, Market Size, Tech Stack, Revenue Model, and Team.",
      "Submit presentation in PPTX or PDF format prior to the event.",
      "Judged on market readiness, scalability, innovation, financial viability, and defense."
    ],
    coordinators: [
      { name: "DR. MONIKA SHARMA", role: "ASSISTANT PROFESSOR, HOD OF MBA", phone: "+91 99961 09174" },
      { name: "MS. NEHA NAIN", role: "ASSISTANT PROFESSOR", phone: "+91 99964 55728" }
    ]
  },
  {
    id: "clg-treasure-hunt",
    title: "Tech Treasure Hunt",
    category: "college",
    subCategory: "tech",
    badgeLabel: "College • Adventure",
    icon: "fa-compass",
    color: "#2ecc71",
    summary: "Decrypt ciphers, scan hidden QR markers across the historic TIT&S campus, solve coding riddles, and race against the clock to claim the ultimate bounty.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      "Stage 1: ",
      "Stage 2: ",
      "Stage 3: "
    ],
    rules: [
      "Each team must have at least one smartphone with internet and QR scanner.",
      "Damage to college infrastructure or entering prohibited faculty zones results in immediate elimination.",
      "Fastest team to verify all checkpoints with correct keys wins."
    ],
    coordinators: [
      { name: "DR. MONIKA SHARMA", role: "ASSOCIATE PROFESSOR", phone: "+91 81998 25002" },
      { name: "DR. NIDHI SHARMA", role: "ASSOCIATE PROFESSOR", phone: "+91 94663 17526" }
    ]
  },
  {
    id: "clg-gaming",
    title: "LAN Gaming Arena",
    category: "college",
    subCategory: "tech",
    badgeLabel: "College • E-Sports",
    icon: "fa-gamepad",
    color: "#ff2a85",
    summary: "Clash in intense high-frame-rate battles across popular titles: BGMI Mobile squads, Valorant 5v5 tactical shooter, and FIFA console showdown.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      "",
      ""
    ],
    rules: [
      "Participants can bring personal gaming peripherals (mice, headphones, controllers).",
      "Use of any third-party hacks, scripts, or emulator exploitation results in lifetime ban.",
      "Official tournament rules and maps will be shared in the briefing at 11:00 AM."
    ],
    coordinators: [
      { name: "DR. AKHIL KAUSHIK", role: "ASSISTANT PROFESSOR", phone: "+91 94169 10303" },
      { name: "", role: "", phone: "+91 " }
    ]
  },
  {
    id: "clg-prompt-to-print",
    title: "Prompt to Print",
    category: "college",
    subCategory: "tech",
    badgeLabel: "College • Generative Tech",
    icon: "fa-wand-magic-sparkles",
    color: "#00f2fe",
    summary: "Harness modern Generative AI & 3D modeling! Engineer optimal multi-modal prompts, generate high-detail 3D geometry / structural designs, and see live digital manufacturing.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      "Round 1: ",
      "Round 2: "
    ],
    rules: [
      "Open-source generative tools & CAD slicers will be accessible on workstation terminals.",
      "Judged on prompt nuance, structural viability, aesthetic elegance, and manufacturing feasibility."
    ],
    coordinators: [
      { name: "DR. AMANDEEP KAUR", role: "ASSISTANT PROFESSOR,HOD OF FAE", phone: "+91 89014 55383" },
      { name: "DR. AMANDEEP KAUR", role: "ASSISTANT PROFESSOR", phone: "+91 90532 14992" }
    ]
  },
  {
    id: "clg-nukkad-natak",
    title: "Nukkad Natak (Street Play)",
    category: "college",
    subCategory: "cultural",
    badgeLabel: "College • Dramatic Arts",
    icon: "fa-masks-theater",
    color: "#f59e0b",
    summary: "Roar on the street circle! Deliver hard-hitting satire, intense dholak beats, and thought-provoking drama addressing tech addiction, cybercrime, and social evolution.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      ""
    ],
    rules: [
      "Performance must strictly be in an acoustic circle (no electronic microphones or speakers).",
      "Traditional dholak, dafli, harmonica, and acoustic instruments are encouraged.",
      "Vulgarity, direct religious defamation, or personal political slurs are strictly prohibited."
    ],
    coordinators: [
      { name: "DR. GUNJAN BHAYANA", role: "ASSISTANT PROFESSOR", phone: "+91 98178 31001" },
      { name: "DR. SATVIKA", role: "ASSISTANT PROFESSOR", phone: "+91 94169 10404" }
    ]
  },
  {
    id: "clg-dance",
    title: "Solo & Group Dance Battle",
    category: "college",
    subCategory: "cultural",
    badgeLabel: "College • Cultural",
    icon: "fa-fire",
    color: "#ff6b35",
    summary: "Unleash untamed rhythm, explosive footwork, and gravity-defying synchronized moves. Compete in Solo Showdown and Group Crew Battles.",
    eligibility: "",
    teamSize: "",
    timing: "",
    venue: "",
    prizes: "",
    rounds: [
      "",
      ""
    ],
    rules: [
      "Styles allowed: Western, Hip-Hop, Bollywood, Contemporary, Classical fusion.",
      "Submit music tracks at the audio console before 01:00 PM.",
      "Judged on synchronization, choreography, energy, facial expressions, and costumes."
    ],
    coordinators: [
      { name: "MS. LIMA PATTANAYAK", role: "ASSISTANT PROFESSOR", phone: "+91 98967 96153" },
      { name: "Dr. JASMEET KAUR GHUMAN", role: "ASSISTANT PROFESSOR", phone: "+91 78984 68792" }
    ]
  }
];

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initParticleCanvas();
  initCountdown();
  renderEvents("all");
  setupEventListeners();
  populateRegistrationEventSelect();
  initFaqAccordion();
});

// 1. Live Countdown Timer to 14 Nov 2026, 09:00 AM IST
function initCountdown() {
  const festDate = new Date("2026-11-14T09:00:00+05:30").getTime();
  
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateTimer() {
    const now = new Date().getTime();
    const distance = festDate - now;

    if (distance <= 0) {
      if (daysEl) daysEl.innerText = "00";
      if (hoursEl) hoursEl.innerText = "00";
      if (minutesEl) minutesEl.innerText = "00";
      if (secondsEl) secondsEl.innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.innerText = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.innerText = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// 2. Render Events Grid with Filters
function renderEvents(filterType = "all", searchQuery = "") {
  const grid = document.getElementById("events-grid");
  if (!grid) return;

  const q = searchQuery.toLowerCase().trim();

  const filtered = EVENTS_DATA.filter(evt => {
    // Filter matching
    let matchesCategory = true;
    if (filterType === "school") {
      matchesCategory = evt.category === "school";
    } else if (filterType === "college") {
      matchesCategory = evt.category === "college";
    } else if (filterType === "tech") {
      matchesCategory = evt.subCategory === "tech";
    } else if (filterType === "cultural") {
      matchesCategory = evt.subCategory === "cultural";
    }

    // Search matching
    let matchesSearch = true;
    if (q) {
      matchesSearch = evt.title.toLowerCase().includes(q) ||
                      evt.summary.toLowerCase().includes(q) ||
                      evt.venue.toLowerCase().includes(q);
    }

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <i class="fa-solid fa-satellite-dish" style="font-size: 3rem; color: var(--accent-orange); margin-bottom: 16px;"></i>
        <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 8px;">No Events Found</h3>
        <p style="color: var(--text-muted);">Try adjusting your search criteria or choose another category filter above.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(evt => {
    const isSchool = evt.category === "school";
    const badgeClass = isSchool ? "event-tag-school" : "event-tag-college";
    const subBadgeClass = evt.subCategory === "tech" ? "event-tag-tech" : "event-tag-cultural";

    return `
      <div class="event-card" data-id="${evt.id}">
        <div class="event-badge-row">
          <span class="${badgeClass}">${isSchool ? "🏫 School Level" : "🎓 College Level"}</span>
          <span class="${subBadgeClass}">${evt.subCategory === "tech" ? "⚡ Technical" : "🎭 Cultural"}</span>
        </div>

        <div class="event-icon-circle" style="color: ${evt.color};">
          <i class="fa-solid ${evt.icon}"></i>
        </div>

        <h3 class="event-title">${evt.title}</h3>
        <p class="event-summary">${evt.summary}</p>

        <div class="event-meta-info">
          <div class="meta-spec-item">
            <i class="fa-solid fa-users"></i>
            <div>
              <strong>${evt.teamSize}</strong>
            </div>
          </div>
          <div class="meta-spec-item">
            <i class="fa-solid fa-clock"></i>
            <div>
              <strong>${evt.timing}</strong>
            </div>
          </div>
          <div class="meta-spec-item" style="grid-column: 1 / -1;">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <strong>${evt.venue}</strong>
            </div>
          </div>
        </div>

        <div class="event-card-actions">
          <button class="btn-card-details" onclick="openEventDetailsModal('${evt.id}')">
            <i class="fa-solid fa-circle-info"></i> Details & Rules
          </button>
          <button class="btn-card-register" onclick="openRegistrationModal('${evt.id}')">
            <i class="fa-solid fa-id-card"></i> Register
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// 3. Setup event listeners
function setupEventListeners() {
  // Filter tabs
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      const searchVal = document.getElementById("event-search-input")?.value || "";
      renderEvents(filter, searchVal);
    });
  });

  // Search input
  const searchInput = document.getElementById("event-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeTab = document.querySelector(".filter-tab.active");
      const filter = activeTab ? activeTab.getAttribute("data-filter") : "all";
      renderEvents(filter, e.target.value);
    });
  }

  // Mobile menu toggle
  const mobileBtn = document.getElementById("mobile-menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    // Close mobile menu on click
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // Navbar scroll background change
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you! Your query has been received. Our team will contact you shortly.");
      contactForm.reset();
    });
  }

  // Registration Form Submission
  const regForm = document.getElementById("registration-form");
  if (regForm) {
    regForm.addEventListener("submit", handleRegistrationSubmit);
  }
}

// 4. Populate Registration Dropdown
function populateRegistrationEventSelect() {
  const select = document.getElementById("reg-event");
  if (!select) return;

  select.innerHTML = `
    <option value="" disabled selected>-- Select an Event to Register --</option>
    <optgroup label="School Level Events">
      ${EVENTS_DATA.filter(e => e.category === "school").map(e => `<option value="${e.id}">School: ${e.title}</option>`).join("")}
    </optgroup>
    <optgroup label="College Level Events">
      ${EVENTS_DATA.filter(e => e.category === "college").map(e => `<option value="${e.id}">College: ${e.title}</option>`).join("")}
    </optgroup>
  `;
}

// 5. Open Event Details Modal
window.openEventDetailsModal = function(eventId) {
  const evt = EVENTS_DATA.find(e => e.id === eventId);
  if (!evt) return;

  const modal = document.getElementById("event-detail-modal");
  const content = document.getElementById("event-detail-body");
  if (!modal || !content) return;

  const isSchool = evt.category === "school";

  content.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
      <span class="${isSchool ? 'event-tag-school' : 'event-tag-college'}">${isSchool ? '🏫 School Level' : '🎓 College Level'}</span>
      <span class="meta-pill highlight" style="padding: 4px 14px; font-size: 0.85rem;"><i class="fa-solid fa-trophy"></i> Prize: ${evt.prizes}</span>
    </div>

    <h2 class="modal-title">${evt.title}</h2>
    <p class="modal-subtitle"><i class="fa-solid fa-location-dot"></i> Venue: ${evt.venue} | <i class="fa-solid fa-clock"></i> Time: ${evt.timing}</p>

    <div class="event-detail-section">
      <h4><i class="fa-solid fa-circle-info"></i> Event Overview</h4>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${evt.summary}</p>
    </div>

    <div class="event-detail-section">
      <h4><i class="fa-solid fa-list-check"></i> Competition Structure & Rounds</h4>
      <ul>
        ${evt.rounds.map(r => `<li>${r}</li>`).join("")}
      </ul>
    </div>

    <div class="event-detail-section">
      <h4><i class="fa-solid fa-gavel"></i> Guidelines & Rules</h4>
      <ul>
        ${evt.rules.map(r => `<li>${r}</li>`).join("")}
      </ul>
    </div>

    <div class="event-detail-section">
      <h4><i class="fa-solid fa-user-tie"></i> Event Coordinators & Contacts</h4>
      ${evt.coordinators.map(c => `
        <div class="coordinator-card">
          <div>
            <strong style="color: #fff; font-size: 0.95rem;">${c.name}</strong>
            <span style="color: var(--text-muted); font-size: 0.82rem; display: block;">${c.role}</span>
          </div>
          <a href="tel:${c.phone}" style="color: var(--accent-cyan); font-weight: 600; text-decoration: none; font-size: 0.9rem;">
            <i class="fa-solid fa-phone"></i> ${c.phone}
          </a>
        </div>
      `).join("")}
    </div>

    <div style="margin-top: 30px; display: flex; gap: 15px; justify-content: flex-end;">
      <button class="btn-secondary" onclick="closeModal('event-detail-modal')">Close</button>
      <button class="btn-primary" onclick="closeModal('event-detail-modal'); openRegistrationModal('${evt.id}');">
        <i class="fa-solid fa-id-card"></i> Proceed to Register
      </button>
    </div>
  `;

  modal.classList.add("open");
};

// 6. Open Registration Modal / Link
window.openRegistrationModal = function(arg = "") {
  if (arg && typeof arg.preventDefault === "function") {
    arg.preventDefault();
  }
  window.open("https://www.youtube.com", "_blank");
};

// 7. Close Modals
window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("open");
  }
};

// Close modal on click outside
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("open");
  }
});

// 8. Handle Registration Submit & Generate Pass
function handleRegistrationSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("reg-name")?.value.trim();
  const email = document.getElementById("reg-email")?.value.trim();
  const phone = document.getElementById("reg-phone")?.value.trim();
  const institution = document.getElementById("reg-institution")?.value.trim();
  const eventId = document.getElementById("reg-event")?.value;
  const teamCount = document.getElementById("reg-team-size")?.value || "1";

  if (!name || !email || !phone || !institution || !eventId) {
    alert("Please fill all mandatory fields.");
    return;
  }

  const evt = EVENTS_DATA.find(e => e.id === eventId);
  const regId = "TIT-TF26-" + Math.floor(100000 + Math.random() * 900000);

  // Close registration modal
  closeModal("registration-modal");

  // Populate ticket pass
  const ticketModal = document.getElementById("ticket-modal");
  const ticketBody = document.getElementById("ticket-body");

  if (ticketModal && ticketBody) {
    ticketBody.innerHTML = `
      <div class="ticket-wrapper" id="printable-pass">
        <div class="ticket-header">
          <div style="display: flex; align-items: center; gap: 14px;">
            <img src="assets/clg-logo.jpg" alt="TIT&S" style="width: 44px; height: 44px; border-radius: 50%; border: 2px solid #e5a93b; background: #fff;" />
            <div>
              <h3 style="font-size: 1.15rem; color: #fff; font-family: var(--font-heading); line-height: 1.2;">TIT TECHFEST 2026</h3>
              <p style="font-size: 0.76rem; color: var(--accent-cyan); text-transform: uppercase;">Official Participant Pass</p>
            </div>
          </div>
          <span style="background: rgba(0, 242, 254, 0.15); border: 1px solid var(--accent-cyan); color: #00f2fe; padding: 4px 12px; border-radius: 8px; font-weight: 700; font-size: 0.85rem;">
            CONFIRMED
          </span>
        </div>

        <div class="ticket-grid">
          <div>
            <div class="ticket-item">
              <span class="ticket-item-label">Participant / Lead Name</span>
              <p class="ticket-item-val">${name}</p>
            </div>
            <div class="ticket-item">
              <span class="ticket-item-label">Registered Event</span>
              <p class="ticket-item-val" style="color: #ffc837;">${evt ? evt.title : "Event"}</p>
            </div>
            <div class="ticket-item">
              <span class="ticket-item-label">Institution / School / College</span>
              <p class="ticket-item-val" style="font-size: 0.95rem;">${institution}</p>
            </div>
            <div style="display: flex; gap: 20px;">
              <div class="ticket-item">
                <span class="ticket-item-label">Team Members</span>
                <p class="ticket-item-val">${teamCount} Person(s)</p>
              </div>
              <div class="ticket-item">
                <span class="ticket-item-label">Venue</span>
                <p class="ticket-item-val">${evt ? evt.venue : "TIT&S Campus"}</p>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div class="ticket-qr-area">
              <div style="background: #fff; padding: 6px; border-radius: 8px; text-align: center;">
                <svg width="120" height="120" viewBox="0 0 100 100">
                  <path d="M10,10 h30 v30 h-30 z M60,10 h30 v30 h-30 z M10,60 h30 v30 h-30 z" fill="#111" />
                  <path d="M16,16 h18 v18 h-18 z M66,16 h18 v18 h-18 z M16,66 h18 v18 h-18 z" fill="#fff" />
                  <path d="M20,20 h10 v10 h-10 z M70,20 h10 v10 h-10 z M20,70 h10 v10 h-10 z" fill="#111" />
                  <rect x="45" y="10" width="8" height="25" fill="#111" />
                  <rect x="10" y="45" width="25" height="8" fill="#111" />
                  <rect x="45" y="45" width="10" height="10" fill="#111" />
                  <rect x="60" y="60" width="30" height="8" fill="#111" />
                  <rect x="75" y="70" width="15" height="20" fill="#111" />
                  <rect x="60" y="80" width="10" height="10" fill="#111" />
                </svg>
              </div>
              <span style="font-size: 0.72rem; color: #333; font-weight: 700; margin-top: 6px;">SCAN AT DESK</span>
            </div>
            <p style="margin-top: 10px; font-family: monospace; font-size: 0.85rem; color: #00f2fe; font-weight: 700;">
              ${regId}
            </p>
          </div>
        </div>

        <div style="margin-top: 20px; border-top: 1px dashed rgba(255, 255, 255, 0.15); padding-top: 14px; display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--text-dim);">
          <span>📅 Date: 14 November 2026 | 08:30 AM</span>
          <span>📍 TIT&S Bhiwani Campus</span>
        </div>
      </div>

      <div style="margin-top: 25px; display: flex; gap: 14px; justify-content: flex-end;">
        <button class="btn-secondary" onclick="closeModal('ticket-modal')">Close</button>
        <button class="btn-primary" onclick="window.print()">
          <i class="fa-solid fa-print"></i> Print / Save Pass
        </button>
      </div>
    `;

    ticketModal.classList.add("open");
  }

  // Trigger confetti if available or show celebration
  showToast("🎉 Registration Successful! Your Official Event Pass has been generated.");
  document.getElementById("registration-form")?.reset();
}

// 9. FAQ Accordion Toggle
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach(i => i.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });
}

// 10. Notification Toast
function showToast(message) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent-cyan); font-size: 1.2rem;"></i> <span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4500);
}

// 11. Interactive Particle / Neural Background Canvas
function initParticleCanvas() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const particleCount = 65;
  const maxDistance = 140;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.75;
      this.vy = (Math.random() - 0.5) * 0.75;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.4 ? "#00f2fe" : "#ff8008";
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let mouse = { x: null, y: null };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${1 - dist / maxDistance * 0.8})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      if (mouse.x !== null) {
        const mdx = particles[i].x - mouse.x;
        const mdy = particles[i].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255, 128, 8, ${1 - mdist / 120})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}
