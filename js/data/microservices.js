/**
 * Module 7: Microservices – architecture, Spring Cloud, messaging, resilience
 */
const MODULE_MICROSERVICES = {
  id: 'microservices',
  name: 'Microservices',
  icon: '🔗',
  description: 'Design and build distributed Java backends with Spring Cloud, service discovery, API gateways, Kafka event-driven patterns, and resilience4j circuit breakers.',
  estimatedHours: 28,
  practiceProject: 'Build a 3-service e-commerce system (Order, Inventory, Payment) with Eureka discovery, Spring Cloud Gateway, Kafka events for order fulfillment, and Resilience4j circuit breakers — deploy locally with Docker Compose.',
  topics: [
    {
      id: 'microservices-architecture-principles',
      title: 'Microservices Architecture Principles',
      difficulty: 'Intermediate',
      estimatedTime: '5 hours',
      interviewFrequency: 'Very High',
      description: 'Understand when microservices beat monoliths, bounded contexts, database-per-service, synchronous vs. asynchronous communication, and distributed system trade-offs interviewers love to probe.',
      tags: ['microservices', 'ddd', 'bounded-context', 'distributed-systems', 'architecture'],
      resources: [
        {
          type: 'article',
          title: 'Martin Fowler – Microservices',
          url: 'https://martinfowler.com/articles/microservices.html'
        },
        {
          type: 'doc',
          title: 'Spring – Microservices Architecture',
          url: 'https://spring.io/microservices'
        },
        {
          type: 'article',
          title: 'Baeldung – Microservices with Spring Boot',
          url: 'https://www.baeldung.com/spring-boot-microservices'
        },
        {
          type: 'video',
          title: 'Java Brains – Microservices Tutorial Series',
          url: 'https://www.youtube.com/playlist?list=PLqq-6xqYnllQK0M1sAhuQNR140h91dxmS'
        },
        {
          type: 'github',
          title: 'eugenp/spring-microservices',
          url: 'https://github.com/eugenp/tutorials/tree/master/spring-boot-modules/spring-boot-microservices'
        }
      ],
      exercises: [
        'Draw a context map for an e-commerce system: identify bounded contexts and their relationships.',
        'List 5 reasons to split a monolith and 5 reasons to keep it — write a decision document for a sample app.',
        'Compare synchronous REST vs. async messaging for an Order → Inventory stock reservation flow.',
        'Identify which data belongs in which service when splitting a shared MySQL schema.',
        'Document failure modes: what happens when Inventory service is down during checkout?'
      ],
      miniProjects: [
        'Decompose a monolithic Spring Boot app (Users, Orders, Products) into three services with separate databases.',
        'Write an Architecture Decision Record (ADR) comparing monolith vs. microservices for a startup MVP.'
      ],
      interviewQuestions: [
        'What are the advantages and disadvantages of microservices vs. monolith?',
        'Explain the database-per-service pattern and its challenges.',
        'What is a bounded context in DDD and how does it relate to microservices?',
        'How do you handle distributed transactions without 2PC?',
        'What is the Saga pattern and when do you use orchestration vs. choreography?',
        'How do you version APIs in a microservices environment?'
      ],
      commonMistakes: [
        'Splitting services too early before understanding domain boundaries — creating a distributed monolith.',
        'Sharing databases between services, coupling schemas and deployment cycles.',
        'Ignoring operational complexity: logging, tracing, deployment, and monitoring from day one.',
        'Using synchronous chains (A→B→C→D) that multiply latency and failure blast radius.',
        'Assuming microservices automatically improve scalability — bottlenecks often remain in shared resources.'
      ]
    },
    {
      id: 'spring-cloud-service-discovery',
      title: 'Spring Cloud & Service Discovery',
      difficulty: 'Advanced',
      estimatedTime: '6 hours',
      interviewFrequency: 'High',
      description: 'Register and discover services with Eureka, configure with Spring Cloud Config, and use OpenFeign for declarative REST clients between microservices.',
      tags: ['spring-cloud', 'eureka', 'feign', 'config-server', 'service-discovery'],
      resources: [
        {
          type: 'doc',
          title: 'Spring Cloud Netflix Eureka',
          url: 'https://docs.spring.io/spring-cloud-netflix/docs/current/reference/html/#service-discovery-eureka-clients'
        },
        {
          type: 'article',
          title: 'Baeldung – Spring Cloud Eureka',
          url: 'https://www.baeldung.com/eureka-microservices'
        },
        {
          type: 'article',
          title: 'Baeldung – Spring Cloud OpenFeign',
          url: 'https://www.baeldung.com/spring-cloud-openfeign'
        },
        {
          type: 'video',
          title: 'Amigoscode – Spring Cloud Microservices',
          url: 'https://www.youtube.com/watch?v=mPPhcU7oQbM'
        },
        {
          type: 'github',
          title: 'spring-cloud/spring-cloud-netflix',
          url: 'https://github.com/spring-cloud/spring-cloud-netflix'
        }
      ],
      exercises: [
        'Set up a Eureka Server and register two Spring Boot microservices as clients.',
        'Create an OpenFeign client for OrderService to call InventoryService by service name.',
        'Configure Spring Cloud Config Server with Git-backed properties and refresh endpoints.',
        'Implement client-side load balancing with @LoadBalanced RestTemplate or Feign + Eureka.',
        'Handle service unavailability: configure Feign fallback or error decoder.'
      ],
      miniProjects: [
        'Build Order and Inventory services that discover each other via Eureka — no hardcoded URLs.',
        'Centralize configuration (DB URLs, feature flags) in Config Server; demonstrate @RefreshScope update without restart.'
      ],
      interviewQuestions: [
        'How does Eureka service discovery work? Client-side vs. server-side load balancing?',
        'What happens when a Eureka client misses heartbeats?',
        'Compare Eureka, Consul, and Kubernetes-native service discovery.',
        'What is Spring Cloud Config and how does it differ from Spring Boot application.yml?',
        'How does OpenFeign simplify inter-service communication?',
        'What are common Eureka production tuning parameters (renewal, registry fetch)?'
      ],
      commonMistakes: [
        'Running Eureka in development without understanding self-preservation mode and false UP instances.',
        'Hardcoding service URLs in Feign clients instead of using service IDs.',
        'Not externalizing config — duplicating properties across every microservice repo.',
        'Forgetting to add spring-cloud-starter-loadbalancer after Netflix Ribbon removal.',
        'Registering multiple instances incorrectly — same app name but wrong port/health check config.'
      ]
    },
    {
      id: 'api-gateway-pattern',
      title: 'API Gateway Pattern',
      difficulty: 'Advanced',
      estimatedTime: '5 hours',
      interviewFrequency: 'High',
      description: 'Route, aggregate, authenticate, and rate-limit traffic with Spring Cloud Gateway. The gateway is the single entry point interviewers expect you to design for microservice frontends.',
      tags: ['api-gateway', 'spring-cloud-gateway', 'routing', 'filters', 'rate-limiting'],
      resources: [
        {
          type: 'doc',
          title: 'Spring Cloud Gateway Reference',
          url: 'https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/'
        },
        {
          type: 'article',
          title: 'Baeldung – Spring Cloud Gateway',
          url: 'https://www.baeldung.com/spring-cloud-gateway'
        },
        {
          type: 'article',
          title: 'Baeldung – Gateway Rate Limiting',
          url: 'https://www.baeldung.com/spring-cloud-gateway-rate-limiting'
        },
        {
          type: 'video',
          title: 'Java Brains – Spring Cloud Gateway',
          url: 'https://www.youtube.com/watch?v=KfineD8Bfkk'
        },
        {
          type: 'github',
          title: 'spring-cloud/spring-cloud-gateway',
          url: 'https://github.com/spring-cloud/spring-cloud-gateway'
        }
      ],
      exercises: [
        'Configure routes: /api/orders/** → order-service, /api/products/** → product-service.',
        'Add a global filter that injects X-Request-Id for distributed tracing correlation.',
        'Implement JWT validation filter at the gateway — reject unauthenticated requests before backend.',
        'Configure Redis-based rate limiting: 100 requests/minute per API key.',
        'Rewrite paths: external /store/v1/items maps to internal /items on catalog service.'
      ],
      miniProjects: [
        'Build an API Gateway that aggregates Product + Inventory responses for a product detail page (single call from frontend).',
        'Add circuit breaker (Resilience4j) at gateway level when routing to a flaky downstream service.'
      ],
      interviewQuestions: [
        'What problems does an API Gateway solve in microservices?',
        'Compare Spring Cloud Gateway vs. Zuul vs. Kong/NGINX.',
        'Where should authentication happen — gateway or individual services?',
        'Explain GatewayFilter vs. GlobalFilter and order of execution.',
        'How do you handle CORS at the gateway vs. per-service?',
        'What is the BFF (Backend for Frontend) pattern and how does it relate to gateways?'
      ],
      commonMistakes: [
        'Putting business logic in the gateway — it should route, cross-cut, and aggregate, not own domain rules.',
        'Duplicating JWT validation logic inconsistently between gateway and services.',
        'Not configuring timeouts — gateway waits indefinitely on slow downstream services.',
        'Exposing internal service paths directly without path rewriting or security boundaries.',
        'Omitting request/response logging and correlation IDs for debugging production issues.'
      ]
    },
    {
      id: 'event-driven-kafka',
      title: 'Event-Driven with Kafka',
      difficulty: 'Advanced',
      estimatedTime: '6 hours',
      interviewFrequency: 'Very High',
      description: 'Build loosely coupled microservices with Apache Kafka: producers, consumers, topics, partitions, consumer groups, and Spring Kafka for event-driven order processing and notifications.',
      tags: ['kafka', 'event-driven', 'spring-kafka', 'messaging', 'async'],
      resources: [
        {
          type: 'doc',
          title: 'Apache Kafka Documentation',
          url: 'https://kafka.apache.org/documentation/'
        },
        {
          type: 'article',
          title: 'Baeldung – Spring Kafka',
          url: 'https://www.baeldung.com/spring-kafka'
        },
        {
          type: 'article',
          title: 'Baeldung – Kafka Consumer Groups',
          url: 'https://www.baeldung.com/kafka-consumer-groups'
        },
        {
          type: 'video',
          title: 'Confluent – Apache Kafka Fundamentals',
          url: 'https://www.youtube.com/watch?v=aj9CDZm0Glc'
        },
        {
          type: 'github',
          title: 'spring-projects/spring-kafka',
          url: 'https://github.com/spring-projects/spring-kafka'
        }
      ],
      exercises: [
        'Publish OrderCreated events from Order Service; Inventory Service consumes and reserves stock.',
        'Configure consumer group with 3 instances — observe partition assignment and parallel consumption.',
        'Implement idempotent consumer: handle duplicate OrderCreated events safely.',
        'Use @KafkaListener with manual acknowledgment and error handler / dead-letter topic.',
        'Serialize events as JSON with Jackson; define shared event schema for order.events topic.'
      ],
      miniProjects: [
        'Event-driven order flow: Order → Payment → Shipping via Kafka topics with choreography (no central orchestrator).',
        'Add an audit/logging service that consumes all domain events from multiple topics for observability.'
      ],
      interviewQuestions: [
        'Explain Kafka topics, partitions, offsets, and consumer groups.',
        'How do you guarantee at-least-once vs. exactly-once delivery?',
        'What is the difference between Kafka and traditional message queues (RabbitMQ)?',
        'How do you handle poison messages and dead-letter queues in Kafka?',
        'When would you use event sourcing vs. simple event notification?',
        'How does Kafka achieve scalability and fault tolerance?'
      ],
      commonMistakes: [
        'Using Kafka for synchronous request/response — wrong tool; use REST or request-reply pattern sparingly.',
        'Not designing partition keys — related events scattered across partitions break ordering guarantees.',
        'Ignoring consumer lag monitoring until production backlog alerts fire.',
        'Sharing overly large messages on Kafka instead of store-by-reference (S3 + event with URL).',
        'Assuming exactly-once without understanding transactional producers and idempotent consumers.'
      ]
    },
    {
      id: 'resilience-circuit-breaker',
      title: 'Resilience Patterns (Circuit Breaker)',
      difficulty: 'Expert',
      estimatedTime: '6 hours',
      interviewFrequency: 'High',
      description: 'Protect distributed systems with circuit breakers, retries, bulkheads, and timeouts using Resilience4j. Essential for production microservices and senior backend interviews.',
      tags: ['resilience4j', 'circuit-breaker', 'retry', 'bulkhead', 'fault-tolerance'],
      resources: [
        {
          type: 'doc',
          title: 'Resilience4j Documentation',
          url: 'https://resilience4j.readme.io/docs'
        },
        {
          type: 'article',
          title: 'Baeldung – Resilience4j with Spring Boot',
          url: 'https://www.baeldung.com/resilience4j'
        },
        {
          type: 'article',
          title: 'Baeldung – Circuit Breaker Pattern',
          url: 'https://www.baeldung.com/cs/circuit-breaker-pattern'
        },
        {
          type: 'video',
          title: 'Java Brains – Circuit Breaker Pattern',
          url: 'https://www.youtube.com/watch?v=6ULyxGibmx8'
        },
        {
          type: 'github',
          title: 'resilience4j/resilience4j',
          url: 'https://github.com/resilience4j/resilience4j'
        }
      ],
      exercises: [
        'Wrap PaymentClient calls with @CircuitBreaker — configure failureRateThreshold and waitDurationInOpenState.',
        'Implement fallback method that returns cached payment status when circuit is OPEN.',
        'Add @Retry with exponential backoff for transient network errors (max 3 attempts).',
        'Configure @Bulkhead to limit concurrent calls to InventoryService (max 10 threads).',
        'Expose circuit breaker metrics via Actuator and Prometheus for Grafana dashboards.'
      ],
      miniProjects: [
        'Chaos-test a microservice: simulate Payment service latency; verify circuit opens and fallback activates.',
        'Combine Timeout + CircuitBreaker + Retry on Feign client — document why order matters (retry before or after breaker).'
      ],
      interviewQuestions: [
        'Explain circuit breaker states: CLOSED, OPEN, HALF-OPEN.',
        'What is the difference between retry and circuit breaker? When use both?',
        'What is a bulkhead pattern and how does Resilience4j implement it?',
        'How do you avoid retry storms in cascading failures?',
        'Compare Hystrix (deprecated) vs. Resilience4j.',
        'How do you test resilience patterns without production incidents?'
      ],
      commonMistakes: [
        'Retrying non-idempotent operations (POST payment) without idempotency keys — causes duplicate charges.',
        'Setting circuit breaker thresholds too aggressive — flapping OPEN/CLOSED under normal variance.',
        'Using fallback that returns success when downstream failed — masks errors and corrupts data.',
        'Applying circuit breaker on in-process calls instead of external/network boundaries.',
        'Not combining timeouts with circuit breakers — threads block until breaker counts failures.'
      ]
    }
  ]
};
