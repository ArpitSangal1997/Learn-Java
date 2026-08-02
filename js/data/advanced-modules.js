/* Additional roadmap modules.  The factory keeps every topic consistently
   equipped with real documentation, a video, article, repository, practice,
   project, interview prompts, and pitfalls. */
const topic = (id, title, difficulty, time, frequency, description, tags, links, practice, project, questions, mistakes) => ({
  id, title, difficulty, estimatedTime: time, interviewFrequency: frequency, description, tags,
  resources: links, exercises: practice, miniProjects: project,
  interviewQuestions: questions, commonMistakes: mistakes
});
const R = (doc, video, article, github) => [
  { type: 'doc', title: doc[0], url: doc[1] }, { type: 'video', title: video[0], url: video[1] },
  { type: 'article', title: article[0], url: article[1] }, { type: 'github', title: github[0], url: github[1] }
];
const MODULE_DATA = {
  id: 'data-layer', name: 'Data Layer', icon: '🗄️', estimatedHours: 38,
  description: 'Design reliable persistence with SQL, JPA, Hibernate, transactions, migrations, and performance-aware queries.',
  practiceProject: 'Create a PostgreSQL-backed order service with Flyway migrations, JPA mappings, pagination, optimistic locking, and query profiling.',
  topics: [
    topic('sql-foundations', 'SQL Foundations & Query Design', 'Beginner', '7 hours', 'Very High', 'Write correct, readable SQL for relational data: joins, grouping, subqueries, indexes, and query plans.', ['sql','joins','indexes'], R(['PostgreSQL Tutorial', 'https://www.postgresql.org/docs/current/tutorial.html'], ['SQL Tutorial - freeCodeCamp', 'https://www.youtube.com/watch?v=HXV3zeQKqGY'], ['SQL Joins Explained - Baeldung', 'https://www.baeldung.com/sql/join-where-clause-vs-on'], ['SQL Practice', 'https://github.com/ozencb/postgresql-exercises']), ['Model users, orders and order_items; write INNER and LEFT JOIN reports', 'Use EXPLAIN ANALYZE to compare indexed and non-indexed lookups'], ['Build an analytics query pack for an e-commerce schema'], ['INNER JOIN vs LEFT JOIN?', 'When can an index hurt write performance?'], ['Selecting * in production endpoints', 'Putting non-sargable functions on indexed columns']),
    topic('jpa-hibernate-mapping', 'JPA & Hibernate Mapping', 'Intermediate', '8 hours', 'Very High', 'Map entities, relationships, value objects, inheritance, cascading, fetching, and lifecycle carefully.', ['jpa','hibernate','orm'], R(['Hibernate ORM User Guide', 'https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html'], ['Hibernate and JPA Course - Amigoscode', 'https://www.youtube.com/watch?v=2Z24-V8o0YI'], ['JPA Entity Relationships - Baeldung', 'https://www.baeldung.com/jpa-hibernate-entity-relationships'], ['Spring Petclinic', 'https://github.com/spring-projects/spring-petclinic']), ['Map one-to-many Order ↔ LineItem without accidental deletes', 'Implement a reusable audit embeddable'], ['Map a library domain with authors, books, loans, and value objects'], ['EAGER vs LAZY fetching?', 'What is the owning side of a bidirectional association?'], ['Using CascadeType.ALL everywhere', 'Exposing entities directly from controllers']),
    topic('transactions-locking', 'Transactions & Concurrency Control', 'Advanced', '6 hours', 'High', 'Use ACID boundaries, propagation, isolation and optimistic/pessimistic locking to protect business invariants.', ['transactions','locking','acid'], R(['Spring Transaction Management', 'https://docs.spring.io/spring-framework/reference/data-access/transaction.html'], ['Spring Transactions - Dan Vega', 'https://www.youtube.com/watch?v=5D6yPl_K7H0'], ['Spring @Transactional - Baeldung', 'https://www.baeldung.com/transaction-configuration-with-jpa-and-spring'], ['Hibernate Examples', 'https://github.com/hibernate/hibernate-orm']), ['Implement stock decrement with @Version and retry', 'Demonstrate rollback rules for checked and unchecked exceptions'], ['Build a wallet transfer service with atomic ledger entries'], ['What causes a dirty read?', 'Why can @Transactional fail on self-invocation?'], ['Long-running transactions', 'Assuming every exception triggers rollback']),
    topic('migrations-query-performance', 'Migrations, Pagination & Performance', 'Advanced', '7 hours', 'High', 'Ship schema changes safely and prevent N+1 queries, slow pages, and unbounded result sets.', ['flyway','pagination','n-plus-one'], R(['Flyway Documentation', 'https://documentation.red-gate.com/flyway'], ['Spring Data JPA Pagination - Dan Vega', 'https://www.youtube.com/watch?v=3cyt_9O6yI8'], ['N+1 Problem in Hibernate - Baeldung', 'https://www.baeldung.com/spring-hibernate-n1-problem'], ['Flyway', 'https://github.com/flyway/flyway']), ['Add versioned migrations and a rollback plan', 'Fix an N+1 query with a fetch join or EntityGraph'], ['Production-ready catalog API with keyset pagination'], ['Offset vs keyset pagination?', 'How do you diagnose an N+1 problem?'], ['Editing an applied migration', 'Returning thousands of rows without pagination'])
  ]
};
const MODULE_SECURITY = {
  id: 'spring-security', name: 'Spring Security', icon: '🛡️', estimatedHours: 28,
  description: 'Secure Spring APIs with authentication, authorization, password hashing, JWT/OAuth2, and practical web defenses.',
  practiceProject: 'Secure a multi-role REST API using Spring Security 6, JWT access tokens, refresh-token rotation, method authorization, and CORS rules.',
  topics: [
    topic('security-basics', 'Security Fundamentals & Spring Filter Chain', 'Intermediate', '6 hours', 'Very High', 'Understand the filter chain, SecurityContext, authentication providers, authorization rules, and password encoders.', ['spring-security','authentication'], R(['Spring Security Reference', 'https://docs.spring.io/spring-security/reference/index.html'], ['Spring Security Course - Amigoscode', 'https://www.youtube.com/watch?v=KxqlJblhzfI'], ['Spring Security Basics - Baeldung', 'https://www.baeldung.com/security-spring'], ['Spring Security Samples', 'https://github.com/spring-projects/spring-security-samples']), ['Configure route authorization with requestMatchers', 'Use BCryptPasswordEncoder and verify password matching'], ['Build role-based admin and customer endpoints'], ['Authentication vs authorization?', 'Why is BCrypt salted?'], ['Storing plain-text passwords', 'Disabling CSRF without knowing why']),
    topic('jwt-oauth2', 'JWT & OAuth 2.0 / OpenID Connect', 'Advanced', '8 hours', 'Very High', 'Implement token-based API security and learn when delegated OAuth2/OIDC is safer than inventing auth.', ['jwt','oauth2','oidc'], R(['Spring OAuth2 Resource Server', 'https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html'], ['JWT Authentication - Dan Vega', 'https://www.youtube.com/watch?v=KxqlJblhzfI'], ['JWT Guide - Auth0', 'https://auth0.com/docs/secure/tokens/json-web-tokens'], ['Keycloak', 'https://github.com/keycloak/keycloak']), ['Validate issuer, audience and expiry on a signed JWT', 'Implement short-lived access and rotated refresh tokens'], ['Protect a task API with Keycloak or an OAuth provider'], ['JWT vs session cookies?', 'What is the OAuth2 authorization-code flow?'], ['Putting sensitive data in JWT payloads', 'Skipping audience and issuer validation']),
    topic('api-security', 'API Security & OWASP Defenses', 'Advanced', '7 hours', 'High', 'Defend APIs against injection, broken access control, CORS mistakes, mass assignment, rate abuse, and unsafe error responses.', ['owasp','cors','api-security'], R(['OWASP API Security Top 10', 'https://owasp.org/www-project-api-security/'], ['OWASP Top 10 Explained - Web Dev Simplified', 'https://www.youtube.com/watch?v=2GJ2S8Qz9wI'], ['CORS with Spring - Baeldung', 'https://www.baeldung.com/spring-cors'], ['OWASP Java Encoder', 'https://github.com/OWASP/java-encoder']), ['Write an ownership check for an order endpoint', 'Add validation and safe error responses for malformed input'], ['Harden an existing REST API and document its threat model'], ['Why is CORS not an authentication mechanism?', 'How do you prevent IDOR?'], ['Trusting client-supplied user IDs', 'Using wildcard CORS with credentials'])
  ]
};
const MODULE_DEVOPS = {
  id: 'devops-cloud', name: 'DevOps & Cloud', icon: '☁️', estimatedHours: 32,
  description: 'Package, observe, automate, and deploy Java services with containers, CI/CD, cloud fundamentals, and production signals.',
  practiceProject: 'Containerize a Spring Boot service, add health checks and metrics, automate tests in GitHub Actions, and deploy it with documented rollback steps.',
  topics: [
    topic('docker-java', 'Docker for Java Services', 'Intermediate', '6 hours', 'High', 'Build small, secure images, configure containers, and compose local dependencies.', ['docker','containers'], R(['Docker Get Started', 'https://docs.docker.com/get-started/'], ['Docker for Beginners - TechWorld with Nana', 'https://www.youtube.com/watch?v=3c-iBn73dDE'], ['Dockerizing Spring Boot - Baeldung', 'https://www.baeldung.com/dockerizing-spring-boot-application'], ['Spring Boot Docker Samples', 'https://github.com/spring-guides/gs-spring-boot-docker']), ['Create a multi-stage Dockerfile using a non-root user', 'Compose app + PostgreSQL with environment configuration'], ['Ship a Dockerized URL-shortener service'], ['CMD vs ENTRYPOINT?', 'Why use a multi-stage build?'], ['Baking secrets into images', 'Using latest tags in production']),
    topic('ci-cd', 'CI/CD with GitHub Actions', 'Intermediate', '5 hours', 'High', 'Automate build, test, quality checks, artifact creation, and deployment promotion.', ['github-actions','ci-cd'], R(['GitHub Actions Documentation', 'https://docs.github.com/actions'], ['GitHub Actions Tutorial - freeCodeCamp', 'https://www.youtube.com/watch?v=R8_veQiYBjI'], ['Java with GitHub Actions - GitHub Docs', 'https://docs.github.com/actions/use-cases-and-examples/building-and-testing/building-and-testing-java-with-maven'], ['GitHub Actions Starter Workflows', 'https://github.com/actions/starter-workflows']), ['Create Maven test workflow with dependency caching', 'Add a container image build after tests pass'], ['CI pipeline that publishes a versioned service image'], ['What makes a deployment reversible?', 'How should CI secrets be handled?'], ['Running deploys before tests finish', 'Logging credentials in workflow output']),
    topic('observability-cloud', 'Observability & Cloud Foundations', 'Advanced', '8 hours', 'High', 'Use logs, metrics, traces, health endpoints, and cloud deployment principles to operate services confidently.', ['observability','actuator','cloud'], R(['Spring Boot Actuator', 'https://docs.spring.io/spring-boot/reference/actuator/index.html'], ['Observability Explained - Grafana', 'https://www.youtube.com/watch?v=STKCRSUsyP0'], ['Spring Boot Observability - Baeldung', 'https://www.baeldung.com/spring-boot-actuators'], ['Micrometer', 'https://github.com/micrometer-metrics/micrometer']), ['Expose health, metrics and a custom business counter', 'Add structured logging with correlation IDs'], ['Deploy and observe an API with dashboards and alerts'], ['Metrics vs logs vs traces?', 'What belongs in a liveness check?'], ['Alerting on every transient error', 'Leaking PII in logs'])
  ]
};
const MODULE_SYSTEM_DESIGN = {
  id: 'system-design', name: 'System Design', icon: '🏗️', estimatedHours: 34,
  description: 'Turn product requirements into scalable, resilient backend architecture and communicate the trade-offs clearly.',
  practiceProject: 'Design a production URL shortener: APIs, data model, caching, rate limits, deployment topology, and failure modes.',
  topics: [
    topic('design-foundations', 'Scalability & Reliability Foundations', 'Intermediate', '7 hours', 'Very High', 'Reason about latency, throughput, availability, consistency, load balancing, caching, and capacity estimates.', ['scalability','caching','availability'], R(['Google SRE Workbook', 'https://sre.google/workbook/table-of-contents/'], ['System Design Primer - Gaurav Sen', 'https://www.youtube.com/watch?v=MbjObHmDbZo'], ['System Design Primer', 'https://github.com/donnemartin/system-design-primer'], ['System Design Primer', 'https://github.com/donnemartin/system-design-primer']), ['Estimate storage and QPS for a URL shortener', 'Compare cache-aside and write-through caching'], ['Design a read-heavy news feed'], ['Availability vs consistency?', 'How do you estimate capacity?'], ['Starting with technologies instead of requirements', 'Ignoring failure and back-pressure']),
    topic('distributed-systems', 'Distributed Systems Patterns', 'Advanced', '8 hours', 'High', 'Use idempotency, queues, retries, sagas, outbox, circuit breakers, and eventual consistency deliberately.', ['distributed-systems','saga','outbox'], R(['Microsoft Cloud Design Patterns', 'https://learn.microsoft.com/azure/architecture/patterns/'], ['Distributed Systems - ByteByteGo', 'https://www.youtube.com/watch?v=0QsyrFDgZag'], ['Saga Pattern - microservices.io', 'https://microservices.io/patterns/data/saga.html'], ['Resilience4j', 'https://github.com/resilience4j/resilience4j']), ['Make payment creation idempotent with an idempotency key', 'Sketch an outbox publisher with failure recovery'], ['Design an order workflow with compensating actions'], ['Why are retries dangerous?', 'What is the transactional outbox pattern?'], ['Assuming exactly-once delivery', 'Retrying non-idempotent writes blindly']),
    topic('design-interviews', 'System Design Interviews', 'Expert', '6 hours', 'Very High', 'Practice a repeatable interview framework: clarify, estimate, model APIs/data, propose architecture, and discuss trade-offs.', ['interview','architecture'], R(['System Design Primer Interview Guide', 'https://github.com/donnemartin/system-design-primer#system-design-interview-questions-with-solutions'], ['System Design Interview Framework - Hello Interview', 'https://www.youtube.com/watch?v=i7twT3x5yv8'], ['System Design Interview Guide - ByteByteGo', 'https://bytebytego.com/guides/system-design-interview-guide/'], ['Awesome System Design Resources', 'https://github.com/ashishps1/awesome-system-design-resources']), ['Time-box a 45-minute URL shortener design', 'Write API and data schema for a notification service'], ['Create a personal system-design case-study portfolio'], ['How do you handle an ambiguous requirement?', 'When would you choose SQL over NoSQL?'], ['Giving a single “perfect” architecture', 'Not quantifying assumptions'])
  ]
};
const MODULE_CAPSTONE = {
  id: 'capstone-interview', name: 'Capstone & Interview Prep', icon: '🚀', estimatedHours: 40,
  description: 'Consolidate the roadmap into demonstrable production projects and structured Java backend interview preparation.',
  practiceProject: 'Build and deploy a portfolio-grade multi-service commerce platform with tests, documentation, monitoring, and architecture decisions.',
  topics: [
    topic('portfolio-api', 'Portfolio-Grade Spring Boot API', 'Advanced', '12 hours', 'Very High', 'Plan, build, test, document, and deploy one polished service that proves engineering judgment—not just endpoint creation.', ['portfolio','spring-boot','api'], R(['Spring Boot Reference', 'https://docs.spring.io/spring-boot/documentation.html'], ['Build a Spring Boot API - Amigoscode', 'https://www.youtube.com/watch?v=9SGDpanrc8U'], ['REST API Best Practices - Microsoft', 'https://learn.microsoft.com/azure/architecture/best-practices/api-design'], ['RealWorld Spring Boot Example', 'https://github.com/gothinkster/spring-boot-realworld-example-app']), ['Create an OpenAPI contract and acceptance checklist', 'Add error handling, validation, tests, docs and a Docker image'], ['Build a job-tracker API with auth, PostgreSQL and search'], ['What makes an API production-ready?', 'How do you explain an architectural trade-off?'], ['A portfolio README with no setup instructions', 'Claiming scale characteristics you did not test']),
    topic('java-interview-practice', 'Java Backend Interview Practice', 'Expert', '8 hours', 'Very High', 'Drill core Java, Spring, data, security, troubleshooting, behavioral storytelling, and live design communication.', ['interview','java','spring'], R(['Oracle Java Documentation', 'https://docs.oracle.com/en/java/'], ['Java Interview Questions - Java Brains', 'https://www.youtube.com/watch?v=YtZqZ_6Gh1w'], ['Java Interview Questions - Baeldung', 'https://www.baeldung.com/java-interview-questions'], ['Java Design Patterns', 'https://github.com/iluwatar/java-design-patterns']), ['Explain HashMap and Spring DI aloud in two minutes each', 'Run a mock debugging session from a failing test'], ['Record five mock interviews and improve one answer each day'], [
            // Interview questions grouped by difficulty (Easy / Medium / Hard)
            '--- EASY ---',
            'What is the difference between an Interface and an Abstract Class? When would you use each?',
            'Explain the difference between String, StringBuilder, and StringBuffer.',
            'What is the difference between Runnable and Callable?',
            'Explain Optional and its common use cases.',
            'Describe == vs equals() for objects in Java.',
            'What are the different HTTP methods and typical status codes used in REST APIs?',
            'What is dependency injection and why is it useful?',
            'Explain the purpose of the Java Memory Model at a high level.',

            '--- MEDIUM ---',
            'How do equals() and hashCode() affect HashMap and HashSet? What happens if you override only one of them?',
            'What happens if a key used in hashCode() or equals() is modified after being inserted into a HashMap?',
            'Explain the difference between PUT and PATCH. How do you design an idempotent partial update API?',
            'When should an API return 422 Unprocessable Entity instead of 500 Internal Server Error? How do you support safe retries?',
            'How do you version APIs in a microservices architecture? Compare URL vs header versioning.',
            'Explain the difference between HashMap and ConcurrentHashMap and when to use each.',
            'How do you optimize the performance of a Spring Boot application? Give practical steps.',
            'How do you handle global exceptions in Spring Boot?',
            'Why does @Transactional sometimes not work at runtime? (self-invocation, proxying, visibility etc.)',
            'Explain transaction propagation and common isolation levels in Spring (REQUIRED, REQUIRES_NEW, READ_COMMITTED, REPEATABLE_READ).',
            'How do default methods in interfaces differ from abstract classes? When would you prefer default methods?',

            '--- HARD ---',
            'How would you design exactly-once payment processing using Kafka and Spring Boot? (outbox, idempotency keys, deduplication)',
            'How do transaction propagation and isolation levels affect distributed transactions and when would you use compensating transactions (Saga) vs 2PC?',
            'A production API shows higher P99 latency after deployment. Which metrics and logs do you check first? (traces, GC, thread dumps, DB slow queries, p95 vs p99)',
            'How do you identify thread pool saturation versus JVM GC pressure in a high-QPS Spring Boot application?',
            'If tracing shows most request time is spent in GC, how do you decide between query optimization, indexing, connection pool tuning, or caching?',
            'How do you define and validate P50, P95, and P99 latency SLOs? What trade-offs do you make when optimizing P99?',
            'How would you troubleshoot a production performance issue in a Spring Boot microservice from detection to resolution? Walk through detection, triage, mitigation, and root-cause.',
            'What are Virtual Threads in Java and how do they help high-concurrency applications? What changes in thread pools and blocking libraries?',
            'Explain how the Java Memory Model handles visibility and ordering; what guarantees does volatile provide?',

            '--- CORE JAVA & FEATURES ---',
            'What are the new features introduced in Java 21? (records, pattern matching, virtual threads progress, etc.)',
            'Explain the difference between HashMap and ConcurrentHashMap internals (segment/locks vs lock-free improvements).',
            'How do you use Optional to avoid null checks without overusing it in collections or streams?',

            '--- SPRING & MICROSERVICES ---',
            'How does @Transactional work internally in Spring? Why can it fail on self-invocation?',
            'How do you implement JWT authentication and how does it differ from OAuth2?',
            'How do you design idempotent APIs and safe retry semantics for clients?',
            'How have you integrated Kafka into an application? Outline producers, consumers, partitions, and consumer groups.',

            '--- SYSTEM DESIGN & OPS ---',
            'Design an exactly-once payment processing system using Kafka semantics (outbox, idempotency, consumer-side deduplication).',
            'How would you version APIs and manage deployments in a microservices architecture?',

            // keep two short example prompts that were present earlier
            'How does HashMap resize?',
            'How do you debug a slow production endpoint?'
          ], ['Memorizing answers without reasoning', 'Giving answers with no concrete examples']),
    topic('architecture-case-study', 'Architecture Case Study & Launch', 'Expert', '10 hours', 'High', 'Produce a concise architecture document, operational runbook, demo, and post-launch reflection for a real project.', ['architecture','documentation','launch'], R(['Architecture Decision Records', 'https://adr.github.io/'], ['Architecture Diagrams - C4 Model', 'https://www.youtube.com/watch?v=x2-rSnhpw0g'], ['C4 Model', 'https://c4model.com/'], ['Awesome ADR', 'https://github.com/joelparkerhenderson/architecture-decision-record']), ['Write ADRs for persistence, auth, and deployment choices', 'Create context/container diagrams and a load-test report'], ['Launch a documented backend service with a 30-day improvement backlog'], ['What would you change at 10x traffic?', 'What is your rollback strategy?'], ['Architecture diagrams that omit boundaries', 'No observability or failure-mode plan'])
  ]
};
