# Content Brief — Shreyas Reddy Gaddampally

This document mirrors `src/data/content.js` and contains the finalized portfolio content.

---

## 1. Profile (Hero + About)

**Name:** Shreyas Reddy Gaddampally

**Tagline:** Building reliable AI and distributed systems

**Bio:**

I am a software engineer and recent Master of Science in Computer Science graduate from Stony Brook University, focused on building reliable AI, backend, and distributed systems. I work across the full lifecycle of data-intensive software: designing APIs and distributed services, improving performance, deploying cloud infrastructure, and measuring reliability through production observability.

At EchoStar, I re-architected an AI retrieval layer and migrated more than 500,000 embeddings to Amazon S3 Vectors with Bedrock, reducing retrieval cost by 60% while maintaining 750 ms p95 latency. At Stony Brook's PoliTech Labs, I built distributed analytics and Spring Boot services that improved throughput by 3× and API performance by 40%. My projects explore consensus, fault tolerance, AI retrieval, local multimodal memory, job automation, and large-scale data visualization using technologies such as Go, Python, Kubernetes, RAG, FAISS, Paxos, PBFT, and Raft.

I am currently a Visiting Scholar at Stony Brook University, evaluating retrieval-augmented generation approaches for spatial and geographic data. I am especially interested in AI infrastructure, LLM inference and serving, agent memory, distributed storage, and dependable systems that remain observable and correct under real-world failures.

**Location:** Sunnyvale, California, United States

**Currently exploring:** AI infrastructure, LLM inference serving, agent memory, distributed storage, and reliable distributed systems.

---

## 2. Socials

**Email:** shreyasreddy.gaddampally@gmail.com

**LinkedIn URL:** https://www.linkedin.com/in/shreyasreddy-gaddampally

**GitHub URL:** https://github.com/GSR2401

---

## 3. Projects

Display all eight projects in the application. Show the first five as **Featured Projects** and the remaining three under **More Projects**.

### Featured Project 1

- **Title:** ShardVault
- **What problem does it solve / why does it exist?** Distributed financial systems must execute transactions consistently across multiple data shards while remaining correct when replicas fail or behave maliciously.
- **What did you build?** Built a sharded banking system in Go using PBFT for Byzantine-fault-tolerant consensus, Two-Phase Commit for cross-shard atomicity, write-ahead logging for recovery, and cryptographic signatures for transaction authentication.
- **What was the result?** Supported atomic intra-shard and cross-shard transactions with ordered execution, retries, rollback, persistent state, and Byzantine fault tolerance within each replica cluster.
- **Tags/stack:** Go, PBFT, Two-Phase Commit, Distributed Systems, Sharding, RPC, SQLite, WAL, RSA, Threshold Signatures
- **GitHub link:** https://github.com/GSR2401/ShardVault---Byzantine-Fault-Tolerant-Distributed-Banking
- **Live demo link:** SKIP

### Featured Project 2

- **Title:** TrafficLens
- **What problem does it solve / why does it exist?** Large traffic-accident datasets are difficult to explore because patterns span geography, time, weather, visibility, severity, and other interacting dimensions.
- **What did you build?** Built an interactive traffic-analysis platform with a Flask and Pandas REST API and a React frontend containing coordinated maps, time-series views, sunburst charts, parallel coordinates, radial summaries, and multidimensional filters.
- **What was the result?** Enabled users to filter accident data by geography, time, weather, visibility, and numeric ranges while reflecting selections across coordinated visualizations and aggregated summaries.
- **Tags/stack:** React, JavaScript, Python, Flask, Pandas, REST APIs, Data Visualization, Flask-Caching, Interactive Analytics
- **GitHub link:** https://github.com/GSR2401/Traffic-Lens
- **Live demo link:** https://youtu.be/sLerU2EOjVk

### Featured Project 3

- **Title:** PrivateRecall
- **What problem does it solve / why does it exist?** Personal memory applications often require users to upload sensitive screenshots, recordings, and notes to external cloud services.
- **What did you build?** Built a privacy-first multimodal “second brain” that captions screenshots with BLIP, transcribes voice notes with Whisper, creates embeddings with SentenceTransformers, and stores them locally using FAISS and SQLite for natural-language retrieval.
- **What was the result?** Enabled users to privately ingest, search, and summarize visual and audio memories entirely on-device, with a Streamlit interface for recall and weekly reflections and optional local summaries through Ollama.
- **Tags/stack:** Python, BLIP, Whisper, SentenceTransformers, FAISS, SQLite, Streamlit, Ollama, Multimodal AI, Vector Search
- **GitHub link:** https://github.com/GSR2401/PrivateRecall
- **Live demo link:** SKIP

### Featured Project 4

- **Title:** JobHunt AI
- **What problem does it solve / why does it exist?** Job seekers repeatedly search across roles and locations, remove duplicate listings, and manually transfer new opportunities into application trackers.
- **What did you build?** Built an automated LinkedIn job-discovery system that searches five role categories across 17 U.S. cities, deduplicates listings, writes new opportunities to Google Sheets, and executes every four hours through GitHub Actions without requiring a LinkedIn login.
- **What was the result?** Automated 85 configured role-and-location searches per run and created a centralized application tracker; the repository documents an example run that processed 312 listings in approximately 342 seconds.
- **Tags/stack:** Python, Playwright, Google Sheets API, GitHub Actions, YAML, Web Automation, Data Deduplication
- **GitHub link:** https://github.com/GSR2401/linkedin-job-bot
- **Live demo link:** SKIP

### Featured Project 5

- **Title:** WebWeaveAI
- **What problem does it solve / why does it exist?** Information distributed across websites is difficult to search conversationally without manually copying and organizing the content.
- **What did you build?** Built a retrieval-augmented generation system that crawls webpages into Markdown, parses and indexes the content in ChromaDB, and answers natural-language questions using OpenAI models or a local Ollama model.
- **What was the result?** Delivered an end-to-end URL-to-answer pipeline supporting web crawling, persistent vector indexing, semantic retrieval, and conversational question answering with cloud-hosted or local models.
- **Tags/stack:** Python, RAG, Crawl4AI, Playwright, LlamaIndex, ChromaDB, Hugging Face Embeddings, OpenAI, Ollama
- **GitHub link:** https://github.com/GSR2401/WebWeaveAI
- **Live demo link:** SKIP


### Additional Project 1

- **Title:** Distributed Banking System — Paxos and 2PC
- **What problem does it solve / why does it exist?** Sharded financial systems need consensus within each shard and atomic coordination when a transaction modifies accounts located in different clusters.
- **What did you build?** Built a configurable multi-cluster banking system in Go using Paxos for replica consensus, Two-Phase Commit for cross-shard transactions, SQLite persistence, client-level locking, and RPC communication.
- **What was the result?** Supported consistent intra-shard and atomic cross-shard transfers, quorum-based operation during replica failures, rollback on aborted transactions, and replica recovery through committed-history synchronization.
- **Tags/stack:** Go, Paxos, Two-Phase Commit, RPC, SQLite, Distributed Transactions, Sharding, Concurrency, Fault Tolerance
- **GitHub link:** https://github.com/GSR2401/Distributed-Banking-System---Paxos-2PC-Implementation
- **Live demo link:** SKIP

### Additional Project 2

- **Title:** Linear PBFT Consensus
- **What problem does it solve / why does it exist?** Distributed replicas must agree on one transaction order even when some servers behave incorrectly or the current primary becomes unavailable.
- **What did you build?** Implemented a PBFT-based consensus system in Go with seven RPC-connected replicas, linear transaction ordering, RSA authentication, threshold signatures, an optimistic fast path, and automatic view changes.
- **What was the result?** Enabled non-faulty replicas to execute transactions in the same sequence while tolerating Byzantine replicas and automatically replacing an unresponsive primary.
- **Tags/stack:** Go, PBFT, Byzantine Fault Tolerance, RPC, RSA, Threshold Signatures, Shamir Secret Sharing, View Change
- **GitHub link:** https://github.com/GSR2401/Linear-Pbft-Consensus
- **Live demo link:** SKIP

### Additional Project 3

- **Title:** Fault-Tolerant Raft Key-Value Store
- **What problem does it solve / why does it exist?** A distributed key-value service must remain consistent through leader failures, network partitions, server restarts, unreliable communication, and changing shard assignments.
- **What did you build?** Built a concurrent distributed key-value store in Go using Raft leader election, replicated logs, persistent state, snapshots, log compaction, and dynamically rebalanced shards across replica groups.
- **What was the result?** Passed the repository's documented test suites covering elections, log agreement, partitions, unreliable networks, crashes, restarts, snapshots, concurrent clients, shard reconfiguration, and linearizability checks.
- **Tags/stack:** Go, Raft, Distributed Key-Value Store, Leader Election, Log Replication, Snapshots, Sharding, Linearizability, Concurrency
- **GitHub link:** https://github.com/GSR2401/FaultTolerant-raft-key-value-store
- **Live demo link:** SKIP

---

## 4. Experience

### Visiting Scholar

- **Organization:** Stony Brook University, Department of Computer Science
- **Location:** Stony Brook, New York
- **Dates:** July 2026 – Present
- **Type:** Full-time research, non-salaried visiting position
- **Supervisor:** Professor Fusheng Wang
- **Bullets:**
  - Run experiments evaluating retrieval-augmented generation approaches on spatial and geographic data.
  - Analyze experimental results and compare retrieval strategies for geographic information retrieval use cases.

### Software Engineer Intern

- **Company:** EchoStar Corporation — Boost Mobile 5G
- **Location:** Littleton, Colorado, United States
- **Dates:** May 2025 – August 2025
- **Bullets:**
  - Cut RAG retrieval cost by 60%, representing approximately $15,000 in annualized savings, while maintaining 750 ms p95 latency by re-architecting a backend retrieval layer and migrating more than 500,000 embeddings to Amazon S3 Vectors with Amazon Bedrock.
  - Shipped production full-stack tooling in Python, TypeScript, Go, and React, delivering self-service access to more than 20,000 reports and reducing operational overhead by over 70% through Docker and CI-based deployments.
  - Implemented service telemetry and observability supporting 99.9% uptime using CloudWatch metrics, structured logging, alerting, and operational dashboards across AWS EC2 and Lambda.

### Graduate Research Assistant — PoliTech Labs

- **Organization:** Stony Brook University
- **Location:** Stony Brook, New York
- **Dates:** August 2024 – May 2026
- **Bullets:**
  - Improved REST API query performance by 40% across more than 100,000 records by designing Spring Boot services with optimized PostgreSQL indexing, caching, and transactional consistency.
  - Built a distributed analytics platform in Java, Spring Boot, and PostgreSQL, achieving 3× throughput across more than 20,000 records on high-performance computing clusters.
  - Built Grafana dashboards for latency, throughput, errors, and p50/p90/p99 performance, and automated regression testing and CI/CD gates with GitHub Actions.

### Research Assistant

- **Organization:** VNR Vignana Jyothi Institute of Engineering and Technology, affiliated with JNTUH
- **Location:** Hyderabad, India
- **Dates:** January 2023 – May 2024
- **Bullets:**
  - Built an end-to-end machine-learning and computer-vision platform for low-light traffic monitoring, covering CCTV data ingestion, annotation, YOLOv8x training, evaluation, and real-time inference across eight networked cameras; improved accuracy by 13% over the evaluated state-of-the-art baseline on more than 1,100 anomalies.
  - Engineered an automotive-vision workflow combining a modified UNet-GAN, OpenCV, and license-plate recognition, achieving 25.77 PSNR on BacklitNet and processing backlit road footage through enhancement and downstream inference.

---

## 5. Education

### Master of Science in Computer Science

- **Institution:** Stony Brook University
- **Location:** Stony Brook, New York
- **Dates:** August 2024 – May 2026
- **Relevant coursework:** Distributed Systems, Theory of Databases, Machine Learning, Artificial Intelligence, Computer Vision, Data Visualization, Operating Systems

#### Academic Roles

- **Research Assistant — Professor Robert Kelly**  
  Supported CSE 416: Software Engineering.

- **Teaching Assistant — Professor Anita Wasilewska**  
  Supported CSE 581: Computer Science Fundamentals: Theory.

- **Teaching Assistant — Professor Eleanor Morrison**  
  Supported CSE 312: Legal, Social, and Ethical Issues in Information Systems.

### Bachelor of Technology in Computer Science and Engineering

- **Institution:** VNR Vignana Jyothi Institute of Engineering and Technology, affiliated with JNTUH
- **Location:** Hyderabad, India
- **Dates:** August 2020 – May 2024
- **Relevant coursework:** Programming Through C, Data Structures, Object-Oriented Programming Through C++, Software Engineering, Design and Analysis of Algorithms, Database Management Systems, Java Programming, Compiler Design, Operating Systems, Computer Networks, Data Mining, Artificial Intelligence, Linux Programming, Machine Learning, Web Technologies, Internet of Things

#### Academic Roles

- **Research Assistant — Dr. Pasupuleti Venkata Siva Kumar**  
  Conducted research related to Design and Analysis of Algorithms.

- **Research Assistant — Dr. Malige Gangappa**  
  Conducted research in deep learning, image processing, image restoration, AI-generated image recognition, and driver-distraction detection.

#### Publications

- **Vehicle and Driver Based Distraction Detection Methods: An Implementation Review**  
  Journal of Emerging Technologies and Innovative Research, December 2023  
  https://www.jetir.org/view?paper=JETIR2312282

- **Reinforcing Visual Content Integrity through Image Restoration and AI Recognition**  
  International Journal for Multidisciplinary Research, August 2024  
  https://www.ijfmr.com/research-paper.php?id=24054

---

## 6. Skills

- **Languages:** Go, Python, Java, Kotlin, C++, JavaScript, TypeScript, SQL
- **AI / Agents:** Retrieval-Augmented Generation, LLM APIs, Local LLMs, Multimodal AI, Embeddings, Semantic Search, Vector Databases, LlamaIndex, Ollama, FAISS, ChromaDB, SentenceTransformers, BLIP, Whisper, PyTorch, TensorFlow, OpenCV, YOLOv8
- **Distributed Systems:** Paxos, PBFT, Raft, Two-Phase Commit, Consensus, Replication, Sharding, Leader Election, Write-Ahead Logging, Checkpointing, Fault Tolerance, Concurrency, Linearizability
- **Frontend:** React, Streamlit, HTML, CSS, JavaScript, TypeScript, Interactive Data Visualization
- **Backend and Data:** Spring Boot, FastAPI, Flask, Django, Node.js, REST APIs, GraphQL, gRPC, RPC, PostgreSQL, MySQL, SQLite, MongoDB, DynamoDB, Redis, Cassandra
- **Cloud and Infrastructure:** AWS EC2, AWS Lambda, Amazon S3, Amazon Bedrock, Amazon S3 Vectors, CloudWatch, Docker, Kubernetes, GitHub Actions, CI/CD, Linux
- **Observability and Testing:** Prometheus, Grafana, CloudWatch Metrics, Structured Logging, Alerting, Latency Percentiles, Automated Testing, Regression Testing

---

## 7. Site Assets

**Favicon:** Use a minimal `SR` initials mark with a subtle connected-node motif in the existing accent colors.

**Profile photo:**
- [ ] Yes — add a profile photo.
- [x] No — keep the Hero and About sections text-only.

**SEO description:** Portfolio of Shreyas Reddy Gaddampally, building reliable AI, backend, and distributed systems.

**Social preview (OG) image:**
- [x] Yes — create a branded card using the name, tagline, and a subtle distributed-node pattern.
- [ ] No / later

---

## 8. Optional Upgrades

- [x] **Currently exploring line:** AI infrastructure, LLM inference serving, agent memory, distributed storage, and reliable distributed systems.
- [ ] **Certifications / courses list:** Exclude for now; the academic coursework is already represented under Education.
- [x] **Flagship project case study:** Use PrivateRecall for a deeper case study covering the privacy problem, local multimodal ingestion, embedding pipeline, retrieval architecture, and design trade-offs.
- [ ] **Testimonials/quotes:** Exclude until real, publishable testimonials are available.
- [x] **Blog/writing section:** Include technical writing about long-running agent memory, context compaction, AI infrastructure, and distributed systems. Existing Medium article: https://medium.com/p/03eb4f1657a7?postPublishedType=initial

---

## 9. Display Guidance

- Lead with the AI and distributed-systems identity rather than presenting the site as a generic full-stack portfolio.
- Display the five featured projects as full cards with problem, implementation, result, stack, and links.
- Display the remaining three projects as compact cards under “More Projects.”
- Keep professional experience ahead of education.
- Keep academic teaching and research roles grouped under the corresponding degree unless a separate academic-experience timeline is introduced.
- Do not include a resume section, resume button, resume download, or resume link anywhere in the application.

---

## Completion Status

- [x] Profile and About
- [x] Social links
- [x] Projects — eight total, with five featured
- [x] Work and research experience
- [x] Education and publications
- [x] Skills
- [x] Site assets
- [x] Optional upgrades
- [x] Resume section removed