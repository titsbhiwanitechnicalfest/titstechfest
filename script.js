/**
 * TIT TECHFEST 2026 - Official Interactive Engine
 * The Technological Institute of Textile & Sciences, Bhiwani
 */

// Event Catalog Data
const EVENTS_DATA = [
  // --- SCHOOL EVENTS: TECHNICAL ---
  {
    id: "sch-science-model",
    title: "Science Model",
    category: "school",
    subCategory: "tech",
    badgeLabel: "School • Technical",
    icon: "fa-atom",
    color: "#00f2fe",
    summary: "Showcase groundbreaking working or static models solving real-world challenges in clean energy, smart automation, robotics, waste recycling, and applied sciences. Present your prototype to an expert jury. Detailed slot timings, display booth numbers, and exhibition hall allocation: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      ""
    ],
    coordinators: [
      { name: "DR. SATISH KHATAK", role: "ASSISTANT PROFESSOR", phone: "+91 98121 79804" },
      { name: "DR. AMIT MADHU", role: "ASSISTANT PROFESSOR, HOD of TC", phone: "+91 92542 42925" }
    ]
  },
  {
    id: "sch-tech-quiz",
    title: "Technical Quiz (Sci-Tech)",
    category: "school",
    subCategory: "tech",
    badgeLabel: "School • Technical",
    icon: "fa-brain",
    color: "#4facfe",
    summary: "Test your wits, logical acumen, and scientific trivia across physics, chemistry, mathematics, emerging technologies, and everyday science in an adrenaline-pumping showdown. Detailed quiz arena, buzzer formats, and schedule: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "First, second, and third prizes for the winning teams.Certificates of participation for all teams.",
    rounds: [
      "",
    ],
    rules: [
      "Eligibility: •Open to 11th and 12th-grade students from participating schools •Each school can register a team of three students for the quiz.",
      "Quiz Format: • There will be short written MCQ test of 30-40 Minutes and top five teams shall participate in the quiz • The quiz will consist of multiple rounds with varying difficulty levels. • Questions will cover a range of Science & Technology topics of 11th and 12th level.",
      "Competition Guidelines: • The quiz will be conducted in a friendly and competitive atmosphere. • Teams will be provided with answer sheets for each round.",
      "Scoring:• Points will be awarded for each correct answer.• In the event of a tie, a tiebreaker round will be conducted.",
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
    summary: "Blend artistic ingenuity with scientific themes. Express future technologies, green planet innovations, artificial intelligence, or smart cities on canvas. Detailed theme announcement, drawing hall allocation, and presentation timings: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      ""
    ],
    coordinators: [
      { name: "DR. ARCHANA SINGH PARMAR", role: "ASSISTANT PROFESSOR", phone: "+91 94681 08572" },
      { name: "DR. MUKTA GOEL", role: "ASSISTANT PROFESSOR", phone: "+91 94672 17271" }
    ]
  },
  {
    id: "sch-debate",
    title: "Debate",
    category: "school",
    subCategory: "tech",
    badgeLabel: "School • Technical",
    icon: "fa-comments",
    color: "#f59e0b",
    summary: "The Debate Competition aims to provide students with a platform to express their views, develop critical thinking, enhance communication skills, and engage in meaningful discussions on contemporary issues related to technology, education, society, and innovation. Students will debate on a given topic by presenting arguments either in favour of or against the motion. The activity will foster intellectual curiosity, healthy competition, and awareness of the opportunities and challenges emerging in today's technology-driven world.",
    eligibility: "Students of Classes XI–XII",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "CR - 1, Old Block, TIT&S, Bhiwani",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      "Topic: “Artificial Intelligence: ABoon or Threat to the Society”",
      "Each participating school must nominate two speakers and one accompanying teacher. Both speakers must be currently enrolled in Classes IX–XII.",
      "Each school must nominate: One speaker to speak FOR the motion. One speaker to speak AGAINST the motion.",
      "The names, classes and other required details of both speakers must be submitted through the official registration form before the specified deadline. Any substitution after registration must be approved by the organising committee before the competition begins.",
      "The competition will follow the conventional debate format, same motion will be debated by all participating schools.",
      "Each school will present two speeches: one in favour of the motion and one opposing it.",
      "Each speaker will be allotted 4 minutes to present their arguments. Rebuttal must be incorporated within the allotted 4-minute speech.",
      "All participating schools will compete in a single round. There will be no separate preliminary or final round.",
      "The speaking order will be determined by the organising committee and communicated to all participating schools before the competition.",
      "For each school, the speaker FOR the motion will speak first, followed by the speaker AGAINST the motion. The next school will then present its two speakers in the same order.",
      "Exceeding the time limit of 4 minutes would result in a penalty of 2 marks. A warning bell will sound at 3 minute and thirty seconds. A final bell will sound at the end of 4 minutes. Speakers are expected to conclude promptly when the final bell sounds.",
      "Speeches must be relevant to the announced motion. Participants should support their arguments with logical reasoning, facts, examples, illustrations and credible evidence.",
      "Speakers are encouraged to address and counter the arguments raised by the opposing side. Participants must use respectful and appropriate language throughout the competition. Personal attacks, derogatory remarks, discriminatory statements and offensive language will not be permitted. Speakers must challenge ideas and arguments rather than attack individuals or institutions.",
      "Mobile phones, internet access and electronic presentations will not be permitted during speeches unless expressly authorised by the organisers.",
      "The audience must maintain silence and refrain from interrupting speakers.",
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
    summary: "Pen down articulate thoughts, visionary ideas, and structured essays on scientific breakthroughs shaping tomorrow. Demonstrate clarity of thought, vocabulary, and analytical reasoning. Detailed topic selections, word limit criteria, and room schedule: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      "Eligibility: The competition is open to students currently studying in Class XI and XII in any recognised school. Participation shall be individual; joint submissions are not permitted.",
      "Registration: The last date for registration is 12 November 2026. Late registrations will not be accepted. Participants must provide accurate personal and school details.",
      "Topics of the Essay: Students can prepare on either of the following topics:\n1.When machines become intelligent, must humans become more humane?\n2.From Ancient Wisdom to Artificial Intelligence: Can India's ethical heritage guide the future?\n3.Can Development and Sustainability go Together?",
      "Mode and Duration: The competition will be conducted in pen-and-paper mode under supervision. The allotted time will be 90 minutes. Participants must adhere strictly to the prescribed reporting time and schedule.",
      "Word Limit and Language: The essay must contain 400–500 words and may be written in either English or Hindi. It must have an appropriate title and demonstrate clarity, coherence and logical organisation.",
      "Stationery and Materials: Stationery and materials will be provided by the organisers. Mobile phones, smartwatches, electronic devices, books, notes, printed material and other whatsoever references are strictly prohibited during the competition.",
      "Discipline and Conduct: Discussion, consultation or communication among participants during the writing session is strictly prohibited. All instructions issued by the invigilators must be followed, and discipline must be maintained throughout the competition.",
      "Originality and Academic Integrity: Each essay must be the participant’s original work, written independently. Plagiarism, copying, impersonation or assistance from any other person shall not be permitted. Violations may result in disqualification.",
      "Evaluation Criteria: Essays will be assessed by a duly constituted panel of judges on relevance to the topic, depth of understanding, originality, critical thinking, logical organisation, language proficiency, grammar, vocabulary, creativity, clarity and overall presentation.",
      "Prizes and Certificates: Prizes and certificates will be awarded to deserving participants as determined by the organising committee. Details regarding awards and the declaration of results will be communicated through appropriate channels.",
      "Compliance with Instructions: Participants must abide by all rules and instructions issued by TIT&S, Bhiwani. The organising committee reserves the right to modify arrangements or rules, if necessary, and its decisions on matters not covered herein shall be final.",
      "Time-bound Submission: Participants must begin writing only after the official commencement of the competition and stop immediately when the allotted 90 minutes expire. Failure to comply with the prescribed time limits or other competition rules may invite appropriate action by the organising committee.",
    ],
    coordinators: [
      { name: "DR. MANOJ KR. NANDA", role: "ASSISTANT PROFESSOR", phone: "+91 96714 77197" },
      { name: "DR. SANJAY KUMAR BHIKARI CHARAN PANDA", role: "ASSISTANT PROFESSOR", phone: "+91 99606 57760" }
    ]
  },

  // --- SCHOOL EVENTS: CULTURAL ---
  {
    id: "sch-hindi-poetry",
    title: "Hindi Poetry",
    category: "school",
    subCategory: "cultural",
    badgeLabel: "School • Cultural",
    icon: "fa-feather-pointed",
    color: "#e056fd",
    summary: "Express emotions, patriotic fervor, literary rhythm, and artistic storytelling through Hindi poetry recitation (काव्य पाठ). Present original compositions or celebrate classical works with expressive modulation, diction, and passion. Detailed time limits, judging criteria, and schedule: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Solo (1 Participant)",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      "Only one participant per school is allowed.",
      "Poetry can be self-composed or from known poets.",
      "Self-composed poetry is preferred.",
      "Language must be Hindi only.",
      "Time limit: 3–4 minutes.",
      "Offensive or inappropriate content is not allowed.",
    ],
    coordinators: [
      { name: "MS. LIMA PATTANAYAK", role: "ASSISTANT PROFESSOR", phone: "+91 98967 96153" },
      { name: "Dr. JASMEET KAUR GHUMAN", role: "ASSISTANT PROFESSOR", phone: "+91 78984 68792" }
    ]
  },
  {
    id: "sch-english-poetry",
    title: "English Poetry",
    category: "school",
    subCategory: "cultural",
    badgeLabel: "School • Cultural",
    icon: "fa-book-open",
    color: "#38ef7d",
    summary: "Captivate the audience with eloquent verses, lyrical cadence, and English poetic recitation. Deliver original compositions or celebrate legendary poetry with poise, intonation, and emotional depth. Detailed time limits, judging criteria, and schedule: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Solo (1 Participant)",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      "Only one participant per school is allowed.",
      "Poetry can be self-composed or from known poets.",
      "Self-composed poetry is preferred.",
      "Language must be English only.",
      "Time limit: 3–4 minutes.",
      "Offensive or inappropriate content is not allowed.",
    ],
    coordinators: [
      { name: "MS. LIMA PATTANAYAK", role: "ASSISTANT PROFESSOR", phone: "+91 98967 96153" },
      { name: "Dr. JASMEET KAUR GHUMAN", role: "ASSISTANT PROFESSOR", phone: "+91 78984 68792" }
    ]
  },
  {
    id: "sch-mono-acting",
    title: "Mono Acting",
    category: "school",
    subCategory: "cultural",
    badgeLabel: "School • Cultural",
    icon: "fa-masks-theater",
    color: "#ff7675",
    summary: "Command the stage as a solo performer! Portray impactful characters, dramatic expressions, and gripping theatrical dialogues. A true test of voice modulation, emotional depth, expressions, and theatrical charisma. Detailed time limits, prop guidelines, and schedule: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Solo (1 Participant)",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      "Only one participant per school is allowed.",
      "The performance may be presented in any language.",
      "Time limit: 4–5 minutes.",
      "Vulgar, offensive, or inappropriate content is strictly prohibited.",
      "Props are allowed if required.",
      "Participants must perform their act live on stage.",
    ],
    coordinators: [
      { name: "MS. LIMA PATTANAYAK", role: "ASSISTANT PROFESSOR", phone: "+91 98967 96153" },
      { name: "Dr. JASMEET KAUR GHUMAN", role: "ASSISTANT PROFESSOR", phone: "+91 78984 68792" }
    ]
  },
  {
    id: "sch-solo-folk-dance",
    title: "Folk Dance (Solo)",
    category: "school",
    subCategory: "cultural",
    badgeLabel: "School • Cultural",
    icon: "fa-drum",
    color: "#f7b731",
    summary: "Celebrate the vibrant folk heritage of India through traditional rhythms, expressive mudras, and colorful regional folk dances (Haryanvi, Rajasthani, Bhangra, Lavani, and more). Showcase rhythm, authentic attire, and cultural grace. Detailed track submission guidelines, time limits, and stage schedule: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Solo (1 Participant)",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      "Only one participant per school is allowed.",
      "Performance must be a solo folk dance.",
      "Any Indian folk dance style is allowed.",
      "Traditional costume is mandatory.",
      "Time limit: 3–4 minutes.",
      "Vulgar songs or steps are strictly prohibited.",
      "Props are allowed if required.",
      "Teams must bring their own music track (USB/Pen Drive).",
    ],
    coordinators: [
      { name: "MS. LIMA PATTANAYAK", role: "ASSISTANT PROFESSOR", phone: "+91 98967 96153" },
      { name: "Dr. JASMEET KAUR GHUMAN", role: "ASSISTANT PROFESSOR", phone: "+91 78984 68792" }
    ]
  },
  {
    id: "sch-singing-dance",
    title: "Group Dance (Folk Dance) ",
    category: "school",
    subCategory: "cultural",
    badgeLabel: "School • Cultural",
    icon: "fa-music",
    color: "#ff2a85",
    summary: "Celebrate the vibrant folk heritage of India through traditional rhythms, expressive mudras, and colorful regional folk dances (Haryanvi, Rajasthani, Bhangra, Lavani, and more). Showcase rhythm, authentic attire, and cultural grace. Detailed track submission guidelines, time limits, and stage schedule: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      "Each team must consist of 4 to 7 members from the same school.",
      "Vulgar songs or inappropriate dance steps are strictly prohibited.",
      "Time limit: 4 to 5 minutes.",
      "The performance should be based on Bollywood style dance.",
      "All participants must maintain decency and cultural values in their performance.",
      "Teams must bring their own music track (USB/Pen Drive).",
      "Participants must report on time and follow all event guidelines.",
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
    summary: "The flagship collegiate engineering innovation arena. Present your working hardware prototypes, IoT systems, AI algorithms, software applications, and textile engineering advancements to industry veterans and academic experts. Detailed booth allocation, power/Wi-Fi slot schedule, and viva sessions: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      ""
    ],
    coordinators: [
      { name: "DR. RAJEEV SHARMA", role: "ASSISTANT PROFESSOR", phone: "+91 90506 10270" },
      { name: "Mr. S.K. Jha", role: "Student Lead", phone: "+91 94161 61480" }
    ]
  },
  {
    id: "clg-startup-pitch",
    title: "Vision Pitch",
    category: "college",
    subCategory: "tech",
    badgeLabel: "College • Entrepreneurship",
    icon: "fa-rocket",
    color: "#f7b731",
    summary: "Step into the Shark Tank! Pitch your innovative business idea, tech solution, MVP, and monetization model to esteemed angel investors, venture mentors, and business incubators. Detailed pitch deck guidelines, investor panel, and presentation slots: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      ""
    ],
    coordinators: [
      { name: "DR. MONIKA SHARMA", role: "ASSISTANT PROFESSOR, HOD OF MBA", phone: "+91 99961 09174" },
      { name: "MS. NEHA NAIN", role: "ASSISTANT PROFESSOR", phone: "+91 99964 55728" }
    ]
  },
  {
    id: "clg-treasure-hunt",
    title: "Treasure Hunt",
    category: "college",
    subCategory: "tech",
    badgeLabel: "College • Adventure",
    icon: "fa-compass",
    color: "#2ecc71",
    summary: "Decrypt ciphers, scan hidden QR markers across the historic TIT&S campus, solve coding riddles, and race against the clock to claim the ultimate bounty. A high-energy test of team coordination, speed, and analytical deduction. Detailed starting hub, scanner app instructions, and flag-off time: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      ""
    ],
    coordinators: [
      { name: "DR. MONIKA SHARMA", role: "ASSOCIATE PROFESSOR", phone: "+91 81998 25002" },
      { name: "DR. NIDHI SHARMA", role: "ASSOCIATE PROFESSOR", phone: "+91 94663 17526" }
    ]
  },
  {
    id: "clg-gaming",
    title: "Online Gaming",
    category: "college",
    subCategory: "tech",
    badgeLabel: "College • E-Sports",
    icon: "fa-gamepad",
    color: "#ff2a85",
    summary: "Clash in intense high-frame-rate battles across popular titles: BGMI Mobile squads, Valorant 5v5 tactical shooter, and FIFA console showdown. Showcase tactical mastery, teamwork, and sharp reflexes. Detailed bracket fixtures, server settings, and match timings: Coming Soon.",
   eligibility: "Coming Soon",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      ""
    ],
    coordinators: [
      { name: "DR. AKHIL KAUSHIK", role: "ASSISTANT PROFESSOR", phone: "+91 94169 10303" },
      { name: "MR. AJIT SINGH", role: "ASSISTANT PROFESSOR", phone: "+91 " }
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
    summary: "Harness modern Generative AI & 3D modeling! Engineer optimal multi-modal prompts, generate high-detail 3D geometry / structural designs, and see live digital manufacturing and additive slicing. Detailed software tools, workstation allocation, and theme prompts: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      ""
    ],
    coordinators: [
      { name: "DR. AMANDEEP KAUR", role: "ASSISTANT PROFESSOR,HOD OF FAE", phone: "+91 89014 55383" },
      { name: "MS NISHA", role: "ASSISTANT PROFESSOR", phone: "+91 90532 14992" }
    ]
  },
  {
    id: "clg-nukkad-natak",
    title: "Nukkad Natak",
    category: "college",
    subCategory: "cultural",
    badgeLabel: "College • Dramatic Arts",
    icon: "fa-masks-theater",
    color: "#f59e0b",
    summary: "Roar on the street circle! Deliver hard-hitting satire, intense dholak beats, and thought-provoking drama addressing tech addiction, cybercrime, and social evolution in an acoustic circle arena. Detailed circle performance order, reporting slots, and acoustic sound guidelines: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      ""
    ],
    coordinators: [
      { name: "DR. GUNJAN BHAYANA", role: "ASSISTANT PROFESSOR", phone: "+91 98178 31001" },
      { name: "DR. SATVIKA", role: "ASSISTANT PROFESSOR", phone: "+91 94169 10404" }
    ]
  },
  {
    id: "clg-food-stall",
    title: "Food Stalls",
    category: "college",
    subCategory: "cultural",
    badgeLabel: "College • Cultural",
    icon: "fa-utensils",
    color: "#ff9f43",
    summary: "Showcase your culinary creativity, entrepreneurial spirit, and food presentation skills! Set up attractive stalls featuring regional delicacies, innovative street snacks, beverages, and desserts. Stalls are evaluated on hygiene, flavor, creative branding, and sales strategy. Detailed stall dimensions, power/water points, and cooking guidelines: Coming Soon.",
    eligibility: "Coming Soon",
    teamSize: "Coming Soon",
    timing: "Coming Soon",
    venue: "Coming Soon",
    prizes: "Coming Soon",
    rounds: [
      "",
    ],
    rules: [
      ""
    ],
    coordinators: [
      { name: "DR. CHARU MANI", role: "ASSISTANT PROFESSOR", phone: "+91 79889 63546" },
      { name: "MS. ANJU", role: "ASSISTANT PROFESSOR", phone: "+91 89300 26571" }
    ]
  }
];

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initParticleCanvas();
  initCountdown();
  updateFilterTabCounts();
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

// Update Filter Tab Badge Counts
function updateFilterTabCounts() {
  const allCount = EVENTS_DATA.length;
  const schoolCount = EVENTS_DATA.filter(e => e.category === "school").length;
  const collegeCount = EVENTS_DATA.filter(e => e.category === "college").length;

  const allTab = document.querySelector('.filter-tab[data-filter="all"]');
  const schoolTab = document.querySelector('.filter-tab[data-filter="school"]');
  const collegeTab = document.querySelector('.filter-tab[data-filter="college"]');

  if (allTab) allTab.innerHTML = `<i class="fa-solid fa-border-all"></i> All Events (${allCount})`;
  if (schoolTab) schoolTab.innerHTML = `<i class="fa-solid fa-school"></i> School Level (${schoolCount})`;
  if (collegeTab) collegeTab.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> College Level (${collegeCount})`;
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
              <strong>${evt.timing || "Coming Soon"}</strong>
            </div>
          </div>
          <div class="meta-spec-item" style="grid-column: 1 / -1;">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <strong>${evt.venue || "Coming Soon"}</strong>
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
    mobileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle("open");
      const icon = mobileBtn.querySelector("i");
      if (icon) {
        if (isOpen) {
          icon.classList.remove("fa-bars-staggered");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars-staggered");
        }
      }
    });

    // Close mobile menu on click of any nav link
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        const icon = mobileBtn.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars-staggered");
        }
      });
    });

    // Close mobile menu when tapping outside
    document.addEventListener("click", (e) => {
      if (navLinks.classList.contains("open") && !navLinks.contains(e.target) && !mobileBtn.contains(e.target)) {
        navLinks.classList.remove("open");
        const icon = mobileBtn.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars-staggered");
        }
      }
    });
  }

  // Navbar scroll background change (throttled with rAF + passive)
  const navbar = document.querySelector(".navbar");
  let scrollTicking = false;
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });
  }

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
    <p class="modal-subtitle"><i class="fa-solid fa-location-dot"></i> Venue: ${evt.venue || "Coming Soon"} | <i class="fa-solid fa-clock"></i> Time: ${evt.timing || "Coming Soon"}</p>

    <div class="event-detail-section">
      <h4><i class="fa-solid fa-circle-info"></i> Event Overview</h4>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${evt.summary}</p>
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

    <div class="modal-form-actions">
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
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSd7rvJTa-CLSbjuWgRPpogAMxNs9OrcGQxs-lZOgGnDRdZXIw/viewform?usp=publish-editor", "_blank");
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

        <div class="ticket-footer-meta">
          <span>📅 Date: 14 November 2026 | 08:30 AM</span>
          <span>📍 TIT&S Bhiwani Campus</span>
        </div>
      </div>

      <div class="modal-form-actions">
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

// 11. Interactive Particle / Neural Background Canvas (Performance Optimized)
function initParticleCanvas() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  // Use lower particle count to eliminate stuttering & keep 60 FPS
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 25 : 42;
  const maxDistance = 120;
  const maxDistanceSq = maxDistance * maxDistance;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize, { passive: true });
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 1.5 + 1;
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
  }, { passive: true });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  }, { passive: true });

  let animationFrameId;
  let isRunning = true;

  // Pause canvas when user switches tab to avoid background CPU/GPU lag
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    } else if (!isRunning) {
      isRunning = true;
      animationFrameId = requestAnimationFrame(animate);
    }
  });

  function animate() {
    if (!isRunning) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDistanceSq) {
          const dist = Math.sqrt(distSq);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${(1 - dist / maxDistance) * 0.6})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      if (mouse.x !== null) {
        const mdx = particles[i].x - mouse.x;
        const mdy = particles[i].y - mouse.y;
        const mdistSq = mdx * mdx + mdy * mdy;
        if (mdistSq < 14400) { // 120 * 120
          const mdist = Math.sqrt(mdistSq);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255, 128, 8, ${(1 - mdist / 120) * 0.8})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  animationFrameId = requestAnimationFrame(animate);
}
