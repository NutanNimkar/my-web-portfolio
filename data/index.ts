export const navItems = [
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Currently building",
    description: "Autonomous Job Search Orchestrator — a modular multi-agent pipeline that handles job discovery, ATS resume tailoring, and deduplication. Smart LLM routing delegates classification to local models (Ollama/Llama 3) and reserves Claude API calls for high-reasoning tasks.",
    className:
      "text-white lg:col-span-5 md:col-span-6 md:row-span-1 p-4 rounded-lg shadow-md bg-[#13132a]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Toronto, open to remote opportunities worldwide.",
    description: "",
    className:
      "text-white lg:col-span-2 md:col-span-3 md:row-span-2 p-4 rounded-lg shadow-md bg-[#13132a]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className:
      "text-white lg:col-span-3 md:col-span-3 md:row-span-2 p-4 rounded-lg shadow-md bg-[#13132a] text-white ", // Added padding, rounded corners, and shadow
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "About Me",
    description:
      "Backend & data engineer with 2+ years building production pipelines, distributed systems, and ML-ready data infrastructure at a health-tech AI company.",
    className:
      "text-white lg:col-span-2 md:col-span-3 md:row-span-1 p-4 rounded-lg shadow-md bg-[#13132a]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "I love building things that scale.",
    description:
      "From fault-tolerant data pipelines processing millions of records daily to observability tools that give teams real-time visibility — I care about systems that hold up in production.",
    className:
      "text-white lg:col-span-3 md:col-span-3 md:row-span-2 p-4 rounded-lg shadow-md bg-[#13132a] relative",
    imgClassName: "",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className:
      "text-white lg:col-span-2 md:col-span-3 md:row-span-1 p-4 rounded-lg shadow-md bg-[#13132a] text-center", // Center-aligned with padding, rounded corners, and shadow
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Autonomous Job Search Orchestrator",
    des: "Production-style agentic backend that automates the full job-search lifecycle. Modular agents handle discovery, ATS scoring, and resume tailoring. Smart LLM routing uses local models (Ollama/Llama 3) for classification and Claude API for high-reasoning tasks. SQLite-backed stateful design prevents duplicate processing.",
    img: "/code.svg",
    iconLists: ["/python.svg", "/psql.svg", "/dall-e.svg"],
    link: "",
    status: "in-progress",
  },
  {
    id: 2,
    title: "AI Agent Workflow for CRM Automation",
    des: "LLM-driven workflow automation system built with the Anthropic Claude API and Salesforce API. Automates manual CRM data updates, tracks edge cases, and generates performance reports to improve data consistency across Salesforce and PostgreSQL.",
    img: "/dall-e.svg",
    iconLists: ["/python.svg", "/psql.svg"],
    link: "",
    status: "private",
  },
  {
    id: 3,
    title: "GoalSeek - Goal Tracking App",
    des: "Achieve your goals with Goalseek, a collaborative app that leverages peer support and progress tracking to help users stay on track and succeed.",
    img: "/Logo.svg",
    iconLists: ["/re.svg", "/exjs.svg", "/njs.svg", "/mdb.svg"],
    link: "https://github.com/NutanNimkar/GoalTrackApp/tree/working-branch",
  },
  {
    id: 4,
    title: "Hotel Booking App",
    des: "Book your stay with HotelApp, a convenient platform that lets users register and reserve rooms across various hotel chains for a seamless booking experience",
    img: "/hotel.svg",
    iconLists: [
      "/java.svg",
      "/spring.svg",
      "/re.svg",
      "/html.svg",
      "/css.svg",
      "psql.svg",
    ],
    link: "https://github.com/NutanNimkar/HotelApp",
  },
  {
    id: 5,
    title: "Reps and Calorie Tracking App",
    des: "Track your fitness journey with our app, a comprehensive tool that helps users monitor exercise reps and calories to stay on top of their health goals.",
    img: "/reps.svg",
    iconLists: ["/mdb.svg", "/exjs.svg", "/re.svg", "/njs.svg"],
    link: "https://github.com/NutanNimkar/RepCalTracker",
  },
  {
    id: 6,
    title: "TradingBot - Discord Bot",
    des: "Get real-time stock predictions with our Discord bot, using historical data to forecast prices and provide insights on whether to buy or not.",
    img: "/dall-e.svg",
    iconLists: [
      "/dis.svg",
      "/python.svg",
      "/scikit-learn.svg",
      "/Pandas.svg",
      "/numpy.svg",
    ],
    link: "https://github.com/NutanNimkar/TradingBot",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer – Backend & Platform Systems",
    company: "Healwell AI",
    period: "Jan 2025 – Present",
    desc: "Built 4 production Dagster pipelines processing millions of clinical records daily across 50+ assets—taking raw data through ingestion, classification, cleaning, and reshaping into NLP-ready datasets. Architected fault-tolerant validation layers to enforce data integrity contracts. Improved production pipeline reliability by 80% with asset-level observability and owned the full infra stack: Terraform, Docker, Kubernetes, and GitHub Actions.",
    tech: "Python, Dagster, Databricks, PySpark, PostgreSQL, Streamlit, Salesforce API, Terraform, Docker, Kubernetes, GitHub Actions",
    className: "md:col-span-2",
    thumbnail: "/code.svg",
  },
  {
    id: 2,
    title: "Software Development Intern",
    company: "Jana Corporation",
    period: "May 2023 – Aug 2023",
    desc: "Resolved 20+ bugs across navigation, exception handling, and UI responsiveness using .NET and React, cutting the active bug backlog by 20%. Shipped a risk analysis full-stack application on an agile team, accelerating the production milestone by 60 days.",
    tech: "React.js, .NET, C#, JavaScript, TypeScript",
    className: "md:col-span-2",
    thumbnail: "/sof.png",
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    company: "Cision",
    period: "Sep 2022 – Dec 2022",
    desc: "Built a reusable notification modal in React, TypeScript, and Java for 75,000+ users, reducing confusion on invalid routes. Implemented automated test coverage and CI-integrated validation workflows, directly improving system release confidence and reliability.",
    className: "md:col-span-2",
    tech: "React.js, TypeScript, Java, Spring Boot, React Testing Library",
    thumbnail: "/code.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/NutanNimkar",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nutannimkar",
  },
];

export const skillsData = {
  aiAndLlms: [
    { name: "Claude API", icon: "/claude.svg", proficiency: 85 },
    { name: "Ollama", icon: "/ollama.svg", proficiency: 75 },
    { name: "Prompt Engineering", icon: "/dall-e.svg", proficiency: 80 },
    { name: "Agent Design", icon: "/code.svg", proficiency: 80 },
  ],
  languages: [
    { name: "Python", icon: "/python.svg", proficiency: 90 },
    { name: "SQL", icon: "/postgresql.svg", proficiency: 85 },
    { name: "Go", icon: "/go.svg", proficiency: 70 },
    { name: "Java", icon: "/java.svg", proficiency: 75 },
  ],
  dataEngineering: [
    { name: "Dagster", icon: "/dagster.svg", proficiency: 85 },
    { name: "Databricks", icon: "/databricks.svg", proficiency: 80 },
    { name: "PySpark", icon: "/apachespark.svg", proficiency: 75 },
    { name: "Streamlit", icon: "/streamlit.svg", proficiency: 80 },
  ],
  infrastructure: [
    { name: "Docker", icon: "/dock.svg", proficiency: 80 },
    { name: "Kubernetes", icon: "/kubernetes.svg", proficiency: 70 },
    { name: "Terraform", icon: "/terraform.svg", proficiency: 75 },
    { name: "GitHub Actions", icon: "/githubactions.svg", proficiency: 80 },
  ],
};
