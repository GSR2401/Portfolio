export const profile = {
  name: "Shreyas Reddy Gaddampally",
  tagline: "Building reliable AI and distributed systems.",
  bio: [
    "I am a software engineer and recent Master of Science in Computer Science graduate from Stony Brook University, focused on building reliable AI, backend, and distributed systems. I work across the full lifecycle of data-intensive software: designing APIs and distributed services, improving performance, deploying cloud infrastructure, and measuring reliability through production observability.",
    //"At EchoStar, I re-architected an AI retrieval layer and migrated more than 500,000 embeddings to Amazon S3 Vectors with Bedrock, reducing retrieval cost by 60% while maintaining 750 ms p95 latency. At Stony Brook's PoliTech Labs, I built distributed analytics and Spring Boot services that improved throughput by 3× and API performance by 40%. My projects explore consensus, fault tolerance, AI retrieval, local multimodal memory, job automation, and large-scale data visualization using technologies such as Go, Python, Kubernetes, RAG, FAISS, Paxos, PBFT, and Raft.",
    //"I am currently a Visiting Scholar at Stony Brook University, evaluating retrieval-augmented generation approaches for spatial and geographic data. I am especially interested in AI infrastructure, LLM inference and serving, agent memory, distributed storage, and dependable systems that remain observable and correct under real-world failures.",
  ],
  location: "Sunnyvale, California, United States",
  currentlyExploring:
    "AI infrastructure, LLM inference serving, agent memory, distributed storage, and reliable distributed systems.",
};

export const socials = {
  email: "shreyasreddy.gaddampally@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreyasreddy-gaddampally",
  github: "https://github.com/GSR2401",
};

export const projects = [
  {
    id: "shardvault",
    title: "ShardVault",
    description:
      "A sharded banking system in Go that stays correct even when replicas fail or act maliciously — using PBFT for Byzantine-fault-tolerant consensus within each shard, Two-Phase Commit for atomic cross-shard transfers, write-ahead logging for recovery, and cryptographic signatures for transaction authentication.",
    tags: [
      "Go",
      "PBFT",
      "Two-Phase Commit",
      "Distributed Systems",
      "Sharding",
      "RPC",
    ],
    link: "https://github.com/GSR2401/ShardVault---Byzantine-Fault-Tolerant-Distributed-Banking",
    demoLink: null,
    featured: true,
  },
  {
    id: "traffic-lens",
    title: "TrafficLens",
    description:
      "An interactive traffic-accident analysis platform pairing a Flask/Pandas REST API with a React frontend of coordinated maps, time-series views, sunburst charts, and parallel-coordinates plots. Users filter by geography, time, weather, and visibility while every visualization updates in sync.",
    tags: ["React", "Flask", "Pandas", "REST APIs", "Data Visualization"],
    link: "https://github.com/GSR2401/Traffic-Lens",
    demoLink: "https://youtu.be/sLerU2EOjVk",
    featured: true,
  },
  {
    id: "private-recall",
    title: "PrivateRecall",
    description:
      "A privacy-first multimodal \"second brain\" that keeps personal memory entirely on-device — captioning screenshots with BLIP, transcribing voice notes with Whisper, and indexing everything locally with FAISS and SQLite. A Streamlit interface supports natural-language search and weekly reflections, with optional local summarization through Ollama and nothing ever leaving the device.",
    tags: ["Python", "BLIP", "Whisper", "FAISS", "Streamlit", "Ollama"],
    link: "https://github.com/GSR2401/PrivateRecall",
    demoLink: null,
    featured: true,
  },
  {
    id: "jobhunt-ai",
    title: "JobHunt AI",
    description:
      "An automated LinkedIn job-discovery pipeline that searches 5 role categories across 17 U.S. cities without requiring a login, deduplicates listings, and writes new opportunities straight to a Google Sheet every 4 hours via GitHub Actions. Runs 85 configured search combinations per cycle — a documented sample run processed 312 listings in about 342 seconds.",
    tags: [
      "Python",
      "Playwright",
      "Google Sheets API",
      "GitHub Actions",
      "Web Automation",
    ],
    link: "https://github.com/GSR2401/linkedin-job-bot",
    demoLink: null,
    featured: true,
  },
  {
    id: "webweave-ai",
    title: "WebWeaveAI",
    description:
      "A retrieval-augmented generation system that turns any set of webpages into a conversational knowledge base — crawling pages to Markdown, indexing them in ChromaDB, and answering natural-language questions using OpenAI models or a fully local Ollama model. Delivers a complete URL-to-answer pipeline with persistent vector storage and semantic retrieval.",
    tags: ["Python", "RAG", "ChromaDB", "LlamaIndex", "OpenAI", "Ollama"],
    link: "https://github.com/GSR2401/WebWeaveAI",
    demoLink: null,
    featured: true,
  },
  {
    id: "paxos-2pc-banking",
    title: "Distributed Banking System — Paxos & 2PC",
    description:
      "A configurable multi-cluster banking system in Go using Paxos for replica consensus and Two-Phase Commit for atomic cross-shard transfers, with quorum-based operation during replica failures and full rollback/recovery support.",
    tags: ["Go", "Paxos", "Two-Phase Commit", "RPC"],
    link: "https://github.com/GSR2401/Distributed-Banking-System---Paxos-2PC-Implementation",
    demoLink: null,
    featured: false,
  },
  {
    id: "linear-pbft-consensus",
    title: "Linear PBFT Consensus",
    description:
      "A from-scratch PBFT consensus implementation in Go across 7 RPC-connected replicas, with linear transaction ordering, RSA/threshold-signature authentication, an optimistic fast path, and automatic view changes when the primary goes unresponsive.",
    tags: ["Go", "PBFT", "Byzantine Fault Tolerance", "RPC"],
    link: "https://github.com/GSR2401/Linear-Pbft-Consensus",
    demoLink: null,
    featured: false,
  },
  {
    id: "raft-kv-store",
    title: "Fault-Tolerant Raft Key-Value Store",
    description:
      "A concurrent distributed key-value store in Go built on Raft — leader election, replicated logs, snapshots, log compaction, and dynamic shard rebalancing — passing test suites covering partitions, crashes, restarts, and linearizability.",
    tags: ["Go", "Raft", "Leader Election", "Sharding"],
    link: "https://github.com/GSR2401/FaultTolerant-raft-key-value-store",
    demoLink: null,
    featured: false,
  },
];

export const experience = [
  {
    id: "visiting-scholar-sbu",
    role: "Visiting Scholar",
    org: "Stony Brook University, Department of Computer Science",
    location: "Stony Brook, New York",
    dates: "Jul 2026 — Present",
    bullets: [
      "Full-time, research position under Professor Fusheng Wang, running experiments evaluating retrieval-augmented generation approaches on spatial and geographic data.",
      "Analyze experimental results and compare retrieval strategies for geographic information retrieval use cases.",
    ],
  },
  {
    id: "echostar-swe-intern",
    role: "Software Engineer Intern",
    org: "EchoStar Corporation — Boost Mobile 5G",
    location: "Littleton, Colorado",
    dates: "May 2025 — Aug 2025",
    bullets: [
      "Cut RAG retrieval cost by 60% (~$15K annualized savings) while holding 750 ms p95 latency by re-architecting a backend retrieval layer and migrating 500,000+ embeddings to Amazon S3 Vectors with Amazon Bedrock.",
      "Shipped production full-stack tooling in Python, TypeScript, Go, and React, giving self-service access to 20,000+ reports and cutting operational overhead 70%+ through Docker and CI-based deployments.",
      "Implemented service telemetry and observability supporting 99.9% uptime using CloudWatch metrics, structured logging, alerting, and operational dashboards across AWS EC2 and Lambda.",
    ],
  },
  {
    id: "politech-labs-ra",
    role: "Graduate Research Assistant — PoliTech Labs",
    org: "Stony Brook University",
    location: "Stony Brook, New York",
    dates: "Aug 2024 — May 2026",
    bullets: [
      "Improved REST API query performance by 40% across 100,000+ records by designing Spring Boot services with optimized PostgreSQL indexing, caching, and transactional consistency.",
      "Built a distributed analytics platform in Java, Spring Boot, and PostgreSQL, achieving 3× throughput across 20,000+ records on high-performance computing clusters.",
      "Built Grafana dashboards for latency, throughput, errors, and p50/p90/p99 performance, and automated regression testing and CI/CD gates with GitHub Actions.",
    ],
  },
  {
    id: "vnr-research-assistant",
    role: "Research Assistant",
    org: "VNR Vignana Jyothi Institute of Engineering and Technology (JNTUH)",
    location: "Hyderabad, India",
    dates: "Jan 2023 — May 2024",
    bullets: [
      "Built an end-to-end ML/computer-vision platform for low-light traffic monitoring — CCTV ingestion, annotation, YOLOv8x training, evaluation, and real-time inference across 8 networked cameras — improving accuracy 13% over the evaluated state-of-the-art baseline on 1,100+ anomalies.",
      "Engineered an automotive-vision workflow combining a modified UNet-GAN, OpenCV, and license-plate recognition, achieving 25.77 PSNR on BacklitNet and processing backlit road footage through enhancement and downstream inference.",
    ],
  },
];

export const education = [
  {
    id: "stony-brook-ms",
    role: "Master of Science in Computer Science",
    org: "Stony Brook University",
    location: "Stony Brook, New York",
    dates: "Aug 2024 — May 2026",
    coursework:
      "Distributed Systems, Theory of Databases, Machine Learning, Artificial Intelligence, Computer Vision, Data Visualization, Operating Systems",
    roles: [
      {
        title: "Research Assistant — Prof. Robert Kelly",
        detail: "Supported CSE 416: Software Engineering.",
      },
      {
        title: "Teaching Assistant — Prof. Anita Wasilewska",
        detail: "Supported CSE 581: Computer Science Fundamentals: Theory.",
      },
      {
        title: "Teaching Assistant — Prof. Eleanor Morrison",
        detail:
          "Supported CSE 312: Legal, Social, and Ethical Issues in Information Systems.",
      },
    ],
  },
  {
    id: "vnr-btech",
    role: "Bachelor of Technology in Computer Science and Engineering",
    org: "VNR Vignana Jyothi Institute of Engineering and Technology (JNTUH)",
    location: "Hyderabad, India",
    dates: "Aug 2020 — May 2024",
    coursework:
      "Programming Through C, Data Structures, Object-Oriented Programming Through C++, Software Engineering, Design and Analysis of Algorithms, Database Management Systems, Java Programming, Compiler Design, Operating Systems, Computer Networks, Data Mining, Artificial Intelligence, Linux Programming, Machine Learning, Web Technologies, Internet of Things",
    roles: [
      {
        title: "Research Assistant — Under Prof Dr. Pasupuleti Venkata Siva Kumar",
        detail: "Design and Analysis of Algorithms research.",
      },
      {
        title: "Research Assistant — Under Prof Dr. Malige Gangappa",
        detail: "Deep Learning and Artifical Intelligence research.",
      },
    ],
  },
];

export const publications = [
  {
    title:
      "Vehicle and Driver Based Distraction Detection Methods: An Implementation Review",
    venue: "Journal of Emerging Technologies and Innovative Research (JETIR)",
    date: "Dec 2023",
    link: "https://www.jetir.org/view?paper=JETIR2312282",
  },
  {
    title:
      "Reinforcing Visual Content Integrity through Image Restoration and AI Recognition",
    venue: "International Journal for Multidisciplinary Research (IJFMR)",
    date: "Aug 2024",
    link: "https://www.ijfmr.com/research-paper.php?id=24054",
  },
];

export const writingIntro =
  "Writing about long-running agent memory, context compaction, AI infrastructure, and distributed systems.";

export const writing = [
  {
    title: "Long-Running AI Agents Should Not Treat Every Message Equally",
    venue: "Medium",
    date: "Jul 2026",
    link: "https://medium.com/p/03eb4f1657a7?postPublishedType=initial",
  },
];

export const skills = [
  { name: "Go", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "Kotlin", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "SQL", category: "Languages" },

  { name: "Retrieval-Augmented Generation", category: "AI / Agents" },
  { name: "LLM APIs", category: "AI / Agents" },
  { name: "Local LLMs", category: "AI / Agents" },
  { name: "Multimodal AI", category: "AI / Agents" },
  { name: "Embeddings", category: "AI / Agents" },
  { name: "Semantic Search", category: "AI / Agents" },
  { name: "Vector Databases", category: "AI / Agents" },
  { name: "LlamaIndex", category: "AI / Agents" },
  { name: "Ollama", category: "AI / Agents" },
  { name: "FAISS", category: "AI / Agents" },
  { name: "ChromaDB", category: "AI / Agents" },
  { name: "SentenceTransformers", category: "AI / Agents" },
  { name: "BLIP", category: "AI / Agents" },
  { name: "Whisper", category: "AI / Agents" },
  { name: "PyTorch", category: "AI / Agents" },
  { name: "TensorFlow", category: "AI / Agents" },
  { name: "OpenCV", category: "AI / Agents" },
  { name: "YOLOv8", category: "AI / Agents" },

  { name: "Paxos", category: "Distributed Systems" },
  { name: "PBFT", category: "Distributed Systems" },
  { name: "Raft", category: "Distributed Systems" },
  { name: "Two-Phase Commit", category: "Distributed Systems" },
  { name: "Consensus", category: "Distributed Systems" },
  { name: "Replication", category: "Distributed Systems" },
  { name: "Sharding", category: "Distributed Systems" },
  { name: "Leader Election", category: "Distributed Systems" },
  { name: "Write-Ahead Logging", category: "Distributed Systems" },
  { name: "Checkpointing", category: "Distributed Systems" },
  { name: "Fault Tolerance", category: "Distributed Systems" },
  { name: "Concurrency", category: "Distributed Systems" },
  { name: "Linearizability", category: "Distributed Systems" },

  { name: "React", category: "Frontend" },
  { name: "Streamlit", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Interactive Data Visualization", category: "Frontend" },

  { name: "Spring Boot", category: "Backend and Data" },
  { name: "FastAPI", category: "Backend and Data" },
  { name: "Flask", category: "Backend and Data" },
  { name: "Django", category: "Backend and Data" },
  { name: "Node.js", category: "Backend and Data" },
  { name: "REST APIs", category: "Backend and Data" },
  { name: "GraphQL", category: "Backend and Data" },
  { name: "gRPC", category: "Backend and Data" },
  { name: "RPC", category: "Backend and Data" },
  { name: "PostgreSQL", category: "Backend and Data" },
  { name: "MySQL", category: "Backend and Data" },
  { name: "SQLite", category: "Backend and Data" },
  { name: "MongoDB", category: "Backend and Data" },
  { name: "DynamoDB", category: "Backend and Data" },
  { name: "Redis", category: "Backend and Data" },
  { name: "Cassandra", category: "Backend and Data" },

  { name: "AWS EC2", category: "Cloud and Infrastructure" },
  { name: "AWS Lambda", category: "Cloud and Infrastructure" },
  { name: "Amazon S3", category: "Cloud and Infrastructure" },
  { name: "Amazon Bedrock", category: "Cloud and Infrastructure" },
  { name: "Amazon S3 Vectors", category: "Cloud and Infrastructure" },
  { name: "CloudWatch", category: "Cloud and Infrastructure" },
  { name: "Docker", category: "Cloud and Infrastructure" },
  { name: "Kubernetes", category: "Cloud and Infrastructure" },
  { name: "GitHub Actions", category: "Cloud and Infrastructure" },
  { name: "CI/CD", category: "Cloud and Infrastructure" },
  { name: "Linux", category: "Cloud and Infrastructure" },

  { name: "Prometheus", category: "Observability and Testing" },
  { name: "Grafana", category: "Observability and Testing" },
  { name: "CloudWatch Metrics", category: "Observability and Testing" },
  { name: "Structured Logging", category: "Observability and Testing" },
  { name: "Alerting", category: "Observability and Testing" },
  { name: "Latency Percentiles", category: "Observability and Testing" },
  { name: "Automated Testing", category: "Observability and Testing" },
  { name: "Regression Testing", category: "Observability and Testing" },
];
