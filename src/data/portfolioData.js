export const portfolioData = {
  personal: {
    name: "Hari Nivedhan P",
    firstName: "Hari",
    lastName: "Nivedhan",
    title: "AI Engineer & Backend Developer",
    titles: ["AI Engineer", "Backend Developer", "ML Enthusiast"],
    location: "Chennai, India",
    phone: "9840450582",
    email: "harinivedhanp@gmail.com",
    github: "https://github.com/hari7niv",
    githubUsername: "hari7niv",
    linkedin: "https://www.linkedin.com/in/hari-nivedhan-bb3041316/",
    linkedinUsername: "hari-nivedhan",
    resumeUrl: "/Hari_Nivedhan_Resume.pdf",
    intro: "I build intelligent systems that solve real-world problems using machine learning, distributed systems, and clean engineering.",
    bioStory: [
      "I am an Information Technology student at Saveetha Engineering College with a strong foundation in core computer science, backend systems, and artificial intelligence.",
      "With 350+ LeetCode problems solved and an Oracle Certified Professional Java SE 21 credential, I specialize in building RAG-style retrieval pipelines, LLM quantization & inference tooling, and high-throughput distributed systems with Spring Boot & Kafka.",
      "My practical experience includes building production-style full-stack features as a MERN Stack Intern at Skill First Labs, benchmarking LLM quantization techniques with PyTorch and bitsandbytes, and architecting distributed event-driven systems."
    ]
  },

  stats: [
    { label: "Projects Completed", value: "6+", subtext: "Featured Systems" },
    { label: "DSA Problems Solved", value: "400+", subtext: "LeetCode Benchmarks" },
    { label: "Academic CGPA", value: "8.4", subtext: "B.Tech IT (Saveetha Engg)" },
    { label: "Java SE 21 Developer", value: "JDK 21", subtext: "Oracle Certified Professional" }
  ],

  education: {
    institution: "Saveetha Engineering College",
    location: "Thandalam, Chennai",
    degree: "B.Tech in Information Technology",
    cgpa: "8.5",
    duration: "2024 – 2028",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems"
    ]
  },

  experience: [
    {
      role: "MERN Stack Intern",
      company: "Skill First Labs",
      period: "July 2025",
      type: "Remote",
      bullets: [
        "Developed and maintained full-stack web application components using the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Built and integrated backend REST APIs with frontend React components for end-to-end feature delivery.",
        "Gained hands-on experience with database design, API development, and client-server architecture in a production-style codebase."
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Client-Server Architecture"]
    }
  ],

  skills: [
    {
      category: "AI & Machine Learning",
      icon: "Brain",
      items: ["PyTorch", "Hugging Face Transformers", "bitsandbytes", "Quantization", "Sentence-Transformers", "BM25S", "LangChain", "Gemini API", "Scikit-learn", "SHAP Explainability"]
    },
    {
      category: "Backend & Distributed Systems",
      icon: "Server",
      items: ["Spring Boot", "Apache Kafka", "Redis", "Fastify", "Socket.io", "BullMQ", "Spring Security", "JWT Authentication", "REST API Design", "Judge0"]
    },
    {
      category: "Programming Languages",
      icon: "Code",
      items: ["Java (JDK 21)", "Python", "TypeScript", "SQL (PostgreSQL / MySQL)", "JavaScript (ES6+)"]
    },
    {
      category: "Developer Tools",
      icon: "Wrench",
      items: ["Docker", "Git", "GitHub", "Maven", "Postman", "Linux"]
    },
    {
      category: "Core CS",
      icon: "Cpu",
      items: ["Data Structures & Algorithms (300+ LeetCode)", "Distributed Systems & Concurrency", "Object-Oriented Programming", "DBMS", "Operating Systems"]
    }
  ],

  projects: [
    {
      id: "model-compression-optimization",
      number: "01",
      title: "Model Compression & Inference Optimization Platform",
      subtitle: "Config-Driven Quantization & Sensitivity-Guided Mixed-Precision Search",
      category: "AI SYSTEMS / LLM INFERENCE",
      featured: true,
      description: "A config-driven LLM quantization benchmarking platform and sensitivity-guided mixed-precision search engine for Qwen3-1.7B across FP16, INT8, and INT4.",
      summary: "Config-driven LLM quantization benchmarking platform in Python & PyTorch running FP16/INT8/INT4 local inference on Qwen3-1.7B with sensitivity-guided mixed-precision search.",
      tech: ["Python", "PyTorch", "Transformers", "bitsandbytes", "Qwen3-1.7B", "CUDA", "Pareto Frontier"],
      techStack: ["Python", "PyTorch", "Transformers", "bitsandbytes", "Qwen3-1.7B", "CUDA", "Pareto Frontier"],
      githubUrl: "https://github.com/hari7niv/Model-Compression-Inference-Optimization-Platform-",
      liveUrl: "https://github.com/hari7niv",
      visual: {
        variant: "abstract-blobs",
        lines: ["LLM QUANTIZATION", "BENCHMARKING", "PARETO SEARCH"],
        caption: "SENSITIVITY-GUIDED MIXED PRECISION"
      },
      highlights: [
        "Built a config-driven LLM quantization benchmarking platform in Python, PyTorch, and Hugging Face Transformers, running FP16/INT8/INT4 local inference on Qwen3-1.7B via bitsandbytes with no code changes required to add new quantization techniques.",
        "Built a benchmarking harness measuring p50/p95/p99 latency, TTFT, throughput, and peak memory, surfacing a counterintuitive, measurement-verified finding: INT8 quantization ran 3.7x slower than FP16 due to outlier-decomposition kernel overhead, despite using more bits than INT4.",
        "Designed a sensitivity-guided mixed-precision search: profiled all 28 transformer blocks via fake-quantization perplexity-delta measurement, then greedily assigned per-block bit-width under a memory budget and applied it as real per-block bitsandbytes layer swaps, not a simulation; evaluated via Pareto-frontier (non-dominated) analysis across latency, memory, and perplexity."
      ],
      caseStudy: {
        problem: "Standard post-training quantization often introduces sharp perplexity degradation or unexpected inference slowdowns due to kernel overheads and outlier activation bottlenecks on local hardware.",
        solution: "Engineered an extensible config-driven benchmarking harness and sensitivity-guided mixed-precision search pipeline profiling all 28 transformer blocks and executing real bitsandbytes layer swaps optimized along the multi-objective Pareto frontier.",
        architecture: [
          "Stage 1 Config-Driven Model Loader: Unified Python & PyTorch abstraction running FP16/INT8/INT4 local inference on Qwen3-1.7B via bitsandbytes with zero code modification.",
          "Stage 2 Precision Benchmarking Harness: Automated profiling engine measuring p50/p95/p99 latency, TTFT (time-to-first-token), token throughput, and CUDA peak memory.",
          "Stage 3 Sensitivity Profiling: Transformer block-level fake-quantization perplexity-delta measurement across all 28 individual transformer blocks.",
          "Stage 4 Greedy Mixed-Precision Assignment: Budget-aware optimization greedily allocating per-block bit-widths based on layer-by-layer sensitivity ranking.",
          "Stage 5 Real Hardware Layer Swap: Physical per-block bitsandbytes layer replacements evaluated on hardware against Pareto-frontier (non-dominated) trade-offs."
        ],
        implementation: "Developed in Python using PyTorch, Hugging Face Transformers, and bitsandbytes with modular configuration architecture.",
        challenges: "Diagnosing and surfacing that INT8 quantization ran 3.7x slower than FP16 due to outlier-decomposition kernel overhead, despite using more bits than INT4.",
        lessons: "Fake-quantization sensitivity search paired with physical layer swaps prevents catastrophic perplexity spikes while achieving optimal latency-memory trade-offs."
      }
    },
    {
      id: "order-processing-system",
      number: "02",
      title: "High-Throughput Order Processing System",
      subtitle: "Multi-Item Inventory Reservation with Kafka Event-Driven Fulfillment",
      category: "DISTRIBUTED SYSTEMS / CONCURRENCY",
      featured: true,
      description: "Enterprise Java/Spring Boot order processing system with multi-item inventory reservation, Kafka asynchronous fulfillment, and benchmarked concurrency strategies.",
      summary: "Enterprise Java/Spring Boot order processing system with multi-item inventory reservation, Kafka asynchronous fulfillment, and benchmarked concurrency strategies.",
      tech: ["Java", "Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Dead-Letter Queues", "Docker"],
      techStack: ["Java", "Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Dead-Letter Queues", "Docker"],
      githubUrl: "https://github.com/hari7niv/High-Throughput-Order-Service",
      liveUrl: "https://github.com/hari7niv",
      visual: {
        variant: "metrics-card",
        kicker: "DISTRIBUTED CONCURRENCY SYSTEM",
        title: "Order Processing System",
        items: ["Multi-Item Inventory Reservation", "Kafka Event-Driven Fulfillment", "Pessimistic, Optimistic & Redis Locking"]
      },
      highlights: [
        "Developed a Java/Spring Boot order processing system with multi-item orders, inventory reservation, and asynchronous fulfillment (custom thread pools, Apache Kafka, retry policies, dead-letter queues, idempotent consumers).",
        "Benchmarked 3 concurrency strategies (optimistic retry, pessimistic locking, Redis distributed locking) under 50+ concurrent requests, achieving 10/10 correct reservations with zero overselling."
      ],
      caseStudy: {
        problem: "High-volume flash sales and concurrent multi-item checkouts trigger race conditions, inventory overselling, and thread pool exhaustion without robust concurrency strategies and event pipelines.",
        solution: "Architected a resilient Java/Spring Boot order processing engine with multi-item reservations, comparing 3 concurrency strategies, coupled with Kafka asynchronous streaming, dead-letter queues, and idempotent consumers.",
        architecture: [
          "Stage 1 Multi-Item Order Ingestion: Spring Boot REST API orchestrating atomic reservation validation across multi-item customer baskets.",
          "Stage 2 Concurrency Control Benchmark: Side-by-side evaluation of optimistic locking with retries, pessimistic DB row locking, and Redis distributed locks (Redlock).",
          "Stage 3 Event-Driven Asynchronous Fulfillment: Apache Kafka message streaming broker backed by custom thread pools for high-throughput fulfillment.",
          "Stage 4 Resilience & Idempotency: Exponential backoff retry policies, dead-letter queues (DLQ), and idempotent consumer deduplication guaranteeing zero duplicate orders."
        ],
        implementation: "Implemented using Java 21, Spring Boot, Apache Kafka, Redis, and PostgreSQL with containerized test harnesses.",
        challenges: "Eliminating race conditions and overselling during 50+ concurrent requests across shared multi-item inventory records with 10/10 reservation accuracy.",
        lessons: "Redis distributed locking combined with consumer idempotency and dead-letter queues provides maximum throughput while strictly preventing inventory overselling."
      }
    },
    {
      id: "clashofcode",
      number: "03",
      title: "ClashOfCode",
      subtitle: "1v1 Competitive Algorithmic Battle Platform with Sandboxed Code Execution",
      category: "FULL STACK / DISTRIBUTED ARCHITECTURE",
      featured: true,
      description: "1v1 competitive DSA battle platform built as a TypeScript monorepo with Fastify REST APIs, real-time Socket.io matchmaking on Redis, and isolated BullMQ Judge0 execution.",
      summary: "1v1 competitive DSA battle platform built as a TypeScript monorepo with Fastify REST APIs, real-time Socket.io matchmaking on Redis, and isolated BullMQ Judge0 execution.",
      tech: ["TypeScript", "Fastify", "Socket.io", "Redis", "BullMQ", "Judge0", "PostgreSQL", "Docker", "Zod"],
      techStack: ["TypeScript", "Fastify", "Socket.io", "Redis", "BullMQ", "Judge0", "PostgreSQL", "Docker", "Zod"],
      githubUrl: "https://github.com/hari7niv/Clash-of-codes",
      liveUrl: "https://github.com/hari7niv",
      visual: {
        variant: "editorial-block",
        kicker: "1V1 COMPETITIVE DSA PLATFORM",
        title: "ClashOfCode",
        footerLeft: "FASTIFY & SOCKET.IO",
        footerRight: "SANDBOXED JUDGE0"
      },
      highlights: [
        "Built a 1v1 competitive DSA battle platform as a TypeScript monorepo of three independently deployable services (stateless Fastify REST API on Postgres, stateful Socket.io match server on Redis, and an isolated BullMQ judge worker), split because each scales, fails, and deploys differently.",
        "Designed a shared package (TypeScript types, Zod schemas, Glicko-2 rating logic) imported by all services, so the REST API and the WebSocket match server share one contract and can’t drift.",
        "Integrated Judge0 for sandboxed execution of untrusted user code through a queue-based worker. The worker talks only to Postgres and returns verdicts to the match server, which is the single source of truth for what each player sees, so the judge never talks to clients.",
        "Built a transactional SQL migration runner that applies versioned migrations in alphabetical order and records them in a schema_migrations table to prevent duplicate application. Dockerized Postgres, Redis, and Judge0, with a mock Judge0 server for local development on Windows."
      ],
      caseStudy: {
        problem: "Live 1v1 algorithmic competitions demand sub-50ms WebSocket state sync, untrusted multi-language code sandboxing, and contract synchronization across multiple microservices without cascading outages.",
        solution: "Engineered a TypeScript monorepo architecture decoupling stateless Fastify APIs, stateful Socket.io game lobbies on Redis, and isolated BullMQ Judge0 sandboxed workers connected via a shared Zod/types package and transactional migrations.",
        architecture: [
          "Stage 1 Shared Monorepo Contract: Centralized package containing TypeScript interfaces, Zod runtime validation schemas, and Glicko-2 matchmaking rating calculations.",
          "Stage 2 Stateless API Service: Fastify REST API backed by PostgreSQL managing auth, match histories, problem catalogs, and user ratings.",
          "Stage 3 Stateful Real-Time Match Server: Socket.io cluster on Redis Pub/Sub coordinating 1v1 live matchmaking, countdown clocks, and authoritative game state.",
          "Stage 4 Sandboxed Judge Worker: BullMQ queue worker dispatching untrusted code to Judge0, persisting execution results to Postgres, and notifying match state.",
          "Stage 5 Database Migration Runner: Custom transactional SQL migration runner executing versioned migrations recorded in schema_migrations table."
        ],
        implementation: "Modern TypeScript monorepo with Fastify, Socket.io, BullMQ, Redis, PostgreSQL, and Judge0 sandboxing.",
        challenges: "Completely isolating untrusted code execution so runaway scripts or compilation delays never talk directly to clients or degrade match latency.",
        lessons: "Treating the match server as the single source of truth while routing worker results only through Postgres maintains strict security and real-time reliability."
      }
    },
    {
      id: "deep-semantic-talent-retrieval",
      number: "04",
      title: "Deep Semantic Talent Retrieval Engine",
      subtitle: "Multi-Stage Hybrid Information Retrieval & Re-ranking Engine",
      category: "AI / INFORMATION RETRIEVAL",
      featured: true,
      description: "A multi-stage hybrid retrieval and ranking system combining dense semantic search (BAAI/bge-small), BM25S lexical search, Reciprocal Rank Fusion, and Cross-Encoder neural re-ranking.",
      summary: "Multi-stage hybrid retrieval pipeline matching candidate profiles to unstructured job descriptions using sparse lexical search (BM25S) and dense vector embeddings (BAAI/bge-small) with Cross-Encoder re-ranking.",
      tech: ["Python", "PyTorch", "Sentence Transformers", "BM25S", "BAAI/bge-small", "MiniLM", "RRF"],
      techStack: ["Python", "PyTorch", "Sentence-Transformers", "BM25S", "BAAI/bge-small", "Cross-Encoder", "MiniLM", "Reciprocal Rank Fusion"],
      githubUrl: "https://github.com/hari7niv/Deep-Semantic-Talent-Retrieval-Engine",
      liveUrl: "https://github.com/hari7niv",
      visual: {
        variant: "abstract-blobs",
        lines: ["DENSE", "SEMANTIC", "RETRIEVAL"],
        caption: "HYBRID RE-RANKING ENGINE"
      },
      highlights: [
        "Built a multi-stage hybrid retrieval pipeline matching candidate profiles to unstructured job descriptions, combining lexical (BM25S) and dense vector (BAAI/bge-small) search via Reciprocal Rank Fusion to boost Stage 1 recall.",
        "Added a Cross-Encoder (MiniLM) re-ranking stage to score full query-document interactions, reducing vocabulary mismatch and improving top-k precision.",
        "Designed a sigmoid-normalized score-fusion layer to blend semantic relevance with recruiter behavioral signals into a unified ranking score."
      ],
      caseStudy: {
        problem: "Traditional lexical search engines suffer from severe vocabulary mismatch when candidate profiles use distinct terminology from unstructured job descriptions.",
        solution: "Engineered a multi-stage hybrid retrieval pipeline combining fast lexical indexing (BM25S) with dense semantic embeddings (BAAI/bge-small) merged via Reciprocal Rank Fusion (RRF) and re-ranked with a Cross-Encoder (MiniLM).",
        architecture: [
          "Stage 1 Sparse Retrieval: BM25S lexical search over candidate profile documents.",
          "Stage 1 Dense Vector Search: Sentence-Transformers using BAAI/bge-small dense embeddings.",
          "Rank Fusion Layer: Reciprocal Rank Fusion (RRF) combining sparse and dense candidate pools to optimize Stage 1 recall.",
          "Stage 2 Cross-Encoder Re-Ranking: MiniLM Cross-Encoder analyzing full query-document semantic interactions.",
          "Score Fusion: Sigmoid-normalized score-fusion layer combining semantic relevance with recruiter behavioral signals into a unified ranking score."
        ],
        implementation: "Implemented entirely in Python and PyTorch using Sentence-Transformers and BM25S algorithms with clean modular pipeline architecture.",
        challenges: "Managing memory and compute overhead of Cross-Encoder re-ranking while maintaining high top-k precision across unstructured text query pairs.",
        lessons: "Dense embeddings provide deep contextual intent, but sparse lexical search remains essential for domain-specific acronyms and strict technical term matching."
      }
    },
    {
      id: "clearscore",
      number: "05",
      title: "ClearScore — AI Loan Platform",
      subtitle: "Full-Stack Microservices Architecture with SHAP Explainable AI",
      category: "AI / FINTECH",
      featured: true,
      description: "AI-powered loan eligibility platform connecting React, Spring Boot, and FastAPI ML inference with SHAP explainability and audit trail.",
      summary: "Full-stack AI-powered loan eligibility platform with a microservices architecture connecting a React frontend, Spring Boot backend gateway, and FastAPI ML inference engine with SHAP explainability.",
      tech: ["React", "Spring Boot", "FastAPI", "XGBoost", "SHAP", "MySQL", "JWT"],
      techStack: ["React", "Spring Boot", "FastAPI", "XGBoost", "MySQL", "JWT", "Spring Security", "SHAP Explainability", "Chart.js"],
      githubUrl: "https://github.com/hari7niv/ClearScore-DevNova",
      liveUrl: "https://github.com/hari7niv",
      visual: {
        variant: "metrics-card",
        kicker: "FINTECH ML INFERENCE ENGINE",
        title: "ClearScore",
        items: ["XGBoost Model Inference", "SHAP Feature Importance", "JWT Security & Audit Gateway"]
      },
      highlights: [
        "Built a full-stack AI-powered loan eligibility platform with a microservices architecture connecting a React frontend, Spring Boot backend, and FastAPI ML inference service.",
        "Implemented JWT authentication and secure REST APIs using Spring Security with SHA-256 password hashing.",
        "Integrated an XGBoost prediction service with SHAP explainability to generate loan approval probabilities and feature-level importance insights.",
        "Designed interactive Chart.js dashboards for prediction visualization, with MySQL-backed audit logging and user-specific prediction history."
      ],
      caseStudy: {
        problem: "Financial decision systems often operate as black boxes, making it difficult for loan applicants and auditors to understand the core factors behind credit decisions.",
        solution: "Architected a microservices platform connecting a React dashboard with a Spring Boot security/audit gateway and a Python FastAPI inference microservice delivering XGBoost predictions paired with SHAP explainability values.",
        architecture: [
          "Frontend UI: Interactive React application featuring dynamic Chart.js dashboards for prediction visual analysis.",
          "Backend Gateway: Java Spring Boot REST API managing JWT authentication, Spring Security, SHA-256 password hashing, and user prediction history.",
          "ML Inference Engine: Dedicated FastAPI microservice running trained XGBoost models and calculating SHAP feature attributions.",
          "Database: Relational MySQL persistence for applicant records, prediction audit logs, and user security credentials."
        ],
        implementation: "Microservices design allowing decoupled execution of Java enterprise services and Python ML workloads.",
        challenges: "Ensuring zero-trust secure communication and low latency between Spring Boot gateway services and FastAPI model endpoints.",
        lessons: "Explainability via SHAP transforms complex gradient boosted trees into transparent, verifiable insights for end users."
      }
    },
    {
      id: "gigscore",
      number: "06",
      title: "GigScore — Performance Analytics",
      subtitle: "Custom Weighted Scoring Algorithm & Trend Visualization",
      category: "BACKEND / ANALYTICS",
      featured: true,
      description: "Performance analytics platform for gig workers using a custom weighted scoring system, Spring Security JWT authentication, and interactive trend dashboards.",
      summary: "Performance analytics platform for gig workers using a custom weighted scoring algorithm to track and rank performance metrics with Spring Security JWT auth and Recharts dashboards.",
      tech: ["Java", "Spring Boot", "MySQL", "Spring Security", "JWT", "Recharts"],
      techStack: ["Java", "Spring Boot", "MySQL", "Spring Security", "JWT Authentication", "Recharts", "REST APIs"],
      githubUrl: "https://github.com/hari7niv/GitScore",
      liveUrl: "https://github.com/hari7niv",
      visual: {
        variant: "editorial-block",
        kicker: "WEIGHTED SCORING ALGORITHM",
        title: "GigScore",
        footerLeft: "SPRING BOOT JDK 21",
        footerRight: "MYSQL PERSISTENCE"
      },
      highlights: [
        "Built a performance analytics platform for gig workers using a custom weighted scoring algorithm to track and rank performance metrics.",
        "Secured backend APIs with Spring Security and stateless JWT authentication, including role-based access control.",
        "Developed an interactive Recharts dashboard visualizing historical earning trends and rating breakdowns."
      ],
      caseStudy: {
        problem: "Gig economy workers need unified, objective metrics to track performance, rating metrics, and historical earnings across platforms.",
        solution: "Built a robust Java Spring Boot system implementing a custom weighted scoring algorithm and stateless JWT authentication with role-based access control.",
        architecture: [
          "Scoring Engine: Custom algorithmic processor applying weighted scoring models to performance indicators.",
          "Backend Framework: Java Spring Boot REST APIs with Spring Security and JWT authentication.",
          "Database Storage: Relational MySQL schema tracking timestamped performance records and rating histories.",
          "Frontend Interface: Interactive dashboard featuring Recharts for visual earning trajectories and rating breakdowns."
        ],
        implementation: "Built using JDK 21 and Spring Boot enterprise standards.",
        challenges: "Formulating a balanced algorithmic scoring model that fairly weights rating consistency and historical earning trends.",
        lessons: "Role-based access control combined with stateless JWT tokens ensures secure, modular backend scalability."
      }
    }
  ],

  certifications: [
    {
      id: "oracle-java-21",
      title: "Oracle Certified Professional: Java SE 21 Developer",
      issuer: "Oracle Corporation",
      year: "Certified",
      icon: "Award",
      link: "https://github.com/hari7niv",
      description: "Industry-standard professional certification validating expert competency in Java SE 21, object-oriented design, concurrency, memory management, and modern language features."
    },
    {
      id: "nptel-python-dsa",
      title: "Programming, Data Structures and Algorithms Using Python",
      issuer: "NPTEL",
      year: "Certified",
      icon: "BookOpen",
      link: "https://github.com/hari7niv",
      description: "Rigorous certification covering fundamental and advanced data structures, algorithmic design strategies, graph theory, and Python implementation."
    }
  ]
};
