/**
 * Spring Core & Boot module – building production REST APIs
 */
const MODULE_SPRING = {
  id: 'spring-core-boot',
  name: 'Spring Core & Boot',
  icon: '🌱',
  description: 'Learn Spring IoC, Boot auto-configuration, REST APIs, Spring Data JPA, profiles, and Actuator — the stack used in most Java backend job descriptions.',
  estimatedHours: 40,
  practiceProject: 'Build a production-ready Task Management REST API with Spring Boot 3, Spring Data JPA, validation, profiles (dev/prod), Actuator health checks, and OpenAPI documentation.',
  topics: [
    {
      id: 'spring-ioc-di',
      title: 'IoC & Dependency Injection',
      difficulty: 'Intermediate',
      estimatedTime: '8 hours',
      interviewFrequency: 'Very High',
      description: 'Inversion of Control, ApplicationContext, @Component/@Service/@Repository, constructor vs field injection, @Autowired, and bean scopes. Core Spring concepts tested in nearly every Java backend interview.',
      tags: ['ioc', 'di', 'beans', 'autowired', 'application-context'],
      resources: [
        { type: 'doc', title: 'Spring Framework – IoC Container', url: 'https://docs.spring.io/spring-framework/reference/core/beans.html' },
        { type: 'doc', title: 'Spring – Dependency Injection', url: 'https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html' },
        { type: 'video', title: 'Java Brains – Spring Framework Tutorial', url: 'https://www.youtube.com/playlist?list=PLsyeobzWxl7oJ-br-n-7nM1GptpaIhfx-' },
        { type: 'video', title: 'Amigoscode – Spring Boot Full Course', url: 'https://www.youtube.com/watch?v=9SGDpanrc8U' },
        { type: 'article', title: 'Baeldung – Introduction to Spring IoC', url: 'https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring' },
        { type: 'article', title: 'Baeldung – Spring Bean Scopes', url: 'https://www.baeldung.com/spring-bean-scopes' },
        { type: 'github', title: 'spring-projects/spring-framework', url: 'https://github.com/spring-projects/spring-framework' }
      ],
      exercises: [
        'Configure beans using @Configuration and @Bean for a DataSource and service layer.',
        'Refactor field injection to constructor injection and explain why it is preferred.',
        'Demonstrate singleton vs prototype scope behavior with a counter bean.',
        'Use @Qualifier to resolve multiple implementations of the same interface.',
        'Create a @ComponentScan configuration excluding certain packages.'
      ],
      miniProjects: [
        'Layered app (controller, service, repository) wired entirely through constructor injection.',
        'Plugin system with multiple PaymentProcessor implementations selected via @Qualifier.',
        'Custom @Scope bean using ObjectFactory for request-scoped-like behavior.'
      ],
      interviewQuestions: [
        'What is Inversion of Control and how does Spring implement it?',
        'Constructor vs setter vs field injection — pros and cons?',
        'Difference between @Component, @Service, @Repository, and @Controller?',
        'What bean scopes does Spring support?',
        'How does @Autowired work internally (by type vs by name)?',
        'What is the difference between BeanFactory and ApplicationContext?'
      ],
      commonMistakes: [
        'Using field injection in production code (hard to test, hides dependencies).',
        'Circular dependency between two singleton beans without refactoring.',
        'Not marking configuration classes with @Configuration (proxy issues with @Bean).',
        'Creating too many @Component classes instead of clear layer boundaries.',
        'Assuming prototype beans injected into singleton are also prototype per injection.'
      ]
    },
    {
      id: 'spring-boot-autoconfig',
      title: 'Spring Boot Auto-configuration',
      difficulty: 'Intermediate',
      estimatedTime: '6 hours',
      interviewFrequency: 'High',
      description: '@SpringBootApplication, auto-configuration magic, starters, conditional beans, application.properties/yml, and the embedded server model. Understand what Boot does so you can debug startup issues.',
      tags: ['spring-boot', 'autoconfig', 'starters', 'embedded-server', 'properties'],
      resources: [
        { type: 'doc', title: 'Spring Boot Reference – Auto-configuration', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.auto-configuration' },
        { type: 'doc', title: 'Spring Boot – Starters List', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.build-systems.starters' },
        { type: 'video', title: 'Amigoscode – Spring Boot Tutorial', url: 'https://www.youtube.com/watch?v=9SGDpanrc8U' },
        { type: 'video', title: 'Java Brains – Spring Boot Quick Start', url: 'https://www.youtube.com/watch?v=vtPkZShivFI' },
        { type: 'article', title: 'Baeldung – Spring Boot Auto-Configuration', url: 'https://www.baeldung.com/spring-boot-auto-configuration' },
        { type: 'article', title: 'Baeldung – Externalized Configuration', url: 'https://www.baeldung.com/properties-with-spring' },
        { type: 'github', title: 'spring-projects/spring-boot', url: 'https://github.com/spring-projects/spring-boot' }
      ],
      exercises: [
        'Create a Spring Boot app from start.spring.io with Web and JPA starters.',
        'Enable debug logging for auto-configuration and interpret the conditions report.',
        'Write a custom @ConditionalOnProperty auto-configuration for a feature flag.',
        'Externalize config to application.yml with nested structure and @ConfigurationProperties.',
        'Exclude a specific auto-configuration class using @SpringBootApplication exclude.'
      ],
      miniProjects: [
        'Custom starter module (my-spring-boot-starter) with auto-config and META-INF/spring imports.',
        'Multi-module Maven project with shared config and Boot parent POM.',
        'Feature toggle service enabled/disabled via application.properties.'
      ],
      interviewQuestions: [
        'What does @SpringBootApplication combine (@Configuration, @EnableAutoConfiguration, @ComponentScan)?',
        'How does Spring Boot auto-configuration decide which beans to create?',
        'What is the difference between @Value and @ConfigurationProperties?',
        'How do Spring Boot starters simplify dependency management?',
        'How would you debug a bean that failed to auto-configure?',
        'Embedded Tomcat vs deploying WAR to external server?'
      ],
      commonMistakes: [
        'Putting @ComponentScan on every class instead of relying on default scanning from main class.',
        'Not using @ConfigurationProperties for grouped config (scattered @Value annotations).',
        'Fighting auto-configuration instead of providing missing @Conditional beans.',
        'Mixing properties files without understanding precedence (env vars > application-{profile}.yml).',
        'Adding spring-boot-starter-web without understanding it pulls embedded Tomcat.'
      ]
    },
    {
      id: 'spring-rest-mvc',
      title: 'REST APIs with Spring MVC',
      difficulty: 'Intermediate',
      estimatedTime: '8 hours',
      interviewFrequency: 'Very High',
      description: '@RestController, request mapping, HTTP methods, DTOs, validation (@Valid), exception handling (@ControllerAdvice), and content negotiation. The bread and butter of Java backend roles.',
      tags: ['rest', 'mvc', 'controller', 'validation', 'controller-advice'],
      resources: [
        { type: 'doc', title: 'Spring Framework – Web MVC', url: 'https://docs.spring.io/spring-framework/reference/web/webmvc.html' },
        { type: 'doc', title: 'Spring – REST Clients and APIs', url: 'https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller.html' },
        { type: 'video', title: 'Amigoscode – Spring Boot REST API', url: 'https://www.youtube.com/watch?v=9SGDpanrc8U' },
        { type: 'video', title: 'Java Brains – Spring MVC Tutorial', url: 'https://www.youtube.com/playlist?list=PLsyeobzWxl7oJ-br-n-7nM1GptpaIhfx-' },
        { type: 'article', title: 'Baeldung – Building a REST API with Spring', url: 'https://www.baeldung.com/building-a-restful-web-service-with-spring-and-java' },
        { type: 'article', title: 'Baeldung – Exception Handling in Spring', url: 'https://www.baeldung.com/exception-handling-for-rest-with-spring' },
        { type: 'github', title: 'eugenp/tutorials – Spring REST', url: 'https://github.com/eugenp/tutorials/tree/master/spring-rest' }
      ],
      exercises: [
        'Build CRUD REST endpoints for a Product resource with proper HTTP status codes.',
        'Add Bean Validation (@NotBlank, @Email, @Size) and return 400 with field errors.',
        'Implement @ControllerAdvice with @ExceptionHandler for ResourceNotFoundException.',
        'Use @PathVariable, @RequestParam, and @RequestBody in a single controller.',
        'Add pagination and sorting with Pageable to a list endpoint.'
      ],
      miniProjects: [
        'Blog API with posts, comments, authors — nested resources and HATEOAS links (optional).',
        'REST API with API versioning (URL path vs header strategy comparison).',
        'File upload/download endpoint with MultipartFile and streaming response.'
      ],
      interviewQuestions: [
        'Difference between @Controller and @RestController?',
        'How do you validate request bodies and return meaningful error responses?',
        'REST principles: idempotency of PUT vs POST vs PATCH?',
        'How does @ControllerAdvice work for global exception handling?',
        'How to implement pagination and filtering in Spring Data REST/MVC?',
        'Difference between ResponseEntity and returning objects directly?'
      ],
      commonMistakes: [
        'Using GET for state-changing operations.',
        'Returning 200 OK for creation instead of 201 Created with Location header.',
        'Exposing JPA entities directly instead of DTOs (lazy loading, over-fetching).',
        'Not handling MethodArgumentNotValidException in global handler.',
        'Inconsistent API error response format across endpoints.'
      ]
    },
    {
      id: 'spring-data-jpa',
      title: 'Spring Data JPA Basics',
      difficulty: 'Advanced',
      estimatedTime: '8 hours',
      interviewFrequency: 'Very High',
      description: 'JpaRepository, entity mapping, derived queries, @Query, transactions (@Transactional), and N+1 problem awareness. Spring Data JPA appears in almost every Java backend job posting.',
      tags: ['spring-data', 'jpa', 'repository', 'transactional', 'queries'],
      resources: [
        { type: 'doc', title: 'Spring Data JPA Reference', url: 'https://docs.spring.io/spring-data/jpa/docs/current/reference/html/' },
        { type: 'doc', title: 'Spring – Transaction Management', url: 'https://docs.spring.io/spring-framework/reference/data-access/transaction.html' },
        { type: 'video', title: 'Amigoscode – Spring Data JPA', url: 'https://www.youtube.com/watch?v=8SGI_XS5OPw' },
        { type: 'video', title: 'Java Brains – Spring Data JPA', url: 'https://www.youtube.com/watch?v=8SGI_XS5OPw' },
        { type: 'article', title: 'Baeldung – Spring Data JPA Tutorial', url: 'https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa' },
        { type: 'article', title: 'Baeldung – Spring @Transactional', url: 'https://www.baeldung.com/transaction-configuration-with-jpa-and-spring' },
        { type: 'github', title: 'eugenp/tutorials – Spring Data JPA', url: 'https://github.com/eugenp/tutorials/tree/master/persistence-modules/spring-data-jpa' }
      ],
      exercises: [
        'Create JpaRepository with derived query methods (findByEmail, findByStatusOrderByCreatedAtDesc).',
        'Write @Query JPQL and native SQL for a complex join with pagination.',
        'Demonstrate @Transactional rollback on RuntimeException vs checked exception.',
        'Enable SQL logging and identify N+1 query with lazy-loaded associations.',
        'Use @EntityGraph or JOIN FETCH to fix N+1 in a single query.'
      ],
      miniProjects: [
        'E-commerce backend with Product, Order, OrderItem entities and repository layer.',
        'Audit trail using @CreatedDate, @LastModifiedDate with JPA Auditing.',
        'Soft delete pattern with @SQLDelete and @Where annotation.'
      ],
      interviewQuestions: [
        'What is the difference between JpaRepository and CrudRepository?',
        'How does Spring Data derive query methods from method names?',
        'Explain @Transactional propagation and isolation levels.',
        'What is the N+1 problem and how do you fix it in JPA?',
        'Difference between save() and saveAndFlush()?',
        'When does @Transactional not work (self-invocation, private methods)?'
      ],
      commonMistakes: [
        'Missing @Transactional on service methods causing LazyInitializationException.',
        'Using open-in-view=true as a band-aid instead of fixing fetch strategy.',
        'Calling repository methods from controllers bypassing service layer.',
        'Not understanding flush vs commit timing in long transactions.',
        'Overusing native queries losing portability and entity management benefits.'
      ]
    },
    {
      id: 'spring-config-profiles',
      title: 'Configuration & Profiles',
      difficulty: 'Intermediate',
      estimatedTime: '5 hours',
      interviewFrequency: 'Medium',
      description: 'Environment-specific configuration, @Profile, externalized secrets, @ConfigurationProperties binding, and logging configuration. Critical for dev/staging/prod deployments.',
      tags: ['profiles', 'configuration', 'properties', 'environment', 'yaml'],
      resources: [
        { type: 'doc', title: 'Spring Boot – Profiles', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.profiles' },
        { type: 'doc', title: 'Spring Boot – Externalized Configuration', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config' },
        { type: 'video', title: 'Amigoscode – Spring Boot Configuration', url: 'https://www.youtube.com/watch?v=9SGDpanrc8U' },
        { type: 'article', title: 'Baeldung – Spring Profiles', url: 'https://www.baeldung.com/spring-profiles' },
        { type: 'article', title: 'Baeldung – @ConfigurationProperties', url: 'https://www.baeldung.com/configuration-properties-in-spring-boot' },
        { type: 'github', title: 'spring-projects/spring-boot – Config Samples', url: 'https://github.com/spring-projects/spring-boot/tree/main/spring-boot-project/spring-boot-samples' }
      ],
      exercises: [
        'Create application-dev.yml and application-prod.yml with different datasource URLs.',
        'Activate profile via spring.profiles.active and environment variable override.',
        'Bind a nested config tree to a @ConfigurationProperties record/class with validation.',
        'Use @Profile("dev") on a bean that mocks external payment gateway.',
        'Configure Logback levels per profile in logback-spring.xml.'
      ],
      miniProjects: [
        'Multi-environment config with Docker Compose overriding DB host via env vars.',
        'Feature flags module reading toggles from config server or local YAML.',
        'Secrets management demo using environment variables (never hardcode passwords).'
      ],
      interviewQuestions: [
        'How do Spring Boot profiles work and how do you activate them?',
        'Property source precedence order in Spring Boot?',
        'Difference between @Value and @ConfigurationProperties?',
        'How do you externalize secrets in production (not in git)?',
        'What is spring.config.import and when is it used?',
        'How to test with a specific profile in @SpringBootTest?'
      ],
      commonMistakes: [
        'Committing production credentials to application-prod.yml in git.',
        'Not validating @ConfigurationProperties (missing @Validated).',
        'Profile-specific beans conflicting when multiple profiles are active.',
        'Hardcoding localhost URLs that break in Docker/Kubernetes.',
        'Using @Value for complex nested config instead of type-safe properties class.'
      ]
    },
    {
      id: 'spring-actuator',
      title: 'Actuator & Production Readiness',
      difficulty: 'Advanced',
      estimatedTime: '5 hours',
      interviewFrequency: 'Medium',
      description: 'Spring Boot Actuator endpoints, health checks, metrics, info, custom endpoints, and securing actuator in production. Shows you understand ops concerns beyond CRUD APIs.',
      tags: ['actuator', 'health', 'metrics', 'monitoring', 'production'],
      resources: [
        { type: 'doc', title: 'Spring Boot Actuator Reference', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html' },
        { type: 'doc', title: 'Spring Boot – Production-Ready Features', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator.endpoints' },
        { type: 'video', title: 'Java Brains – Spring Boot Actuator', url: 'https://www.youtube.com/watch?v=HfG9oXk1n00' },
        { type: 'article', title: 'Baeldung – Spring Boot Actuator', url: 'https://www.baeldung.com/spring-boot-actuators' },
        { type: 'article', title: 'Baeldung – Custom Health Indicator', url: 'https://www.baeldung.com/spring-boot-health-indicators' },
        { type: 'github', title: 'spring-projects/spring-boot – Actuator', url: 'https://github.com/spring-projects/spring-boot/tree/main/spring-boot-project/spring-boot-actuator' }
      ],
      exercises: [
        'Add spring-boot-starter-actuator and explore /actuator/health and /actuator/metrics.',
        'Implement custom HealthIndicator checking external API connectivity.',
        'Expose only health and info endpoints in production via management.endpoints.web.exposure.',
        'Add custom info contributor with app version and build timestamp.',
        'Secure actuator endpoints with Spring Security (role ACTUATOR_ADMIN).'
      ],
      miniProjects: [
        'Production-ready service with liveness/readiness probes for Kubernetes (/actuator/health/liveness).',
        'Custom metrics using Micrometer Counter and Timer for API request tracking.',
        'Dashboard integration exporting metrics to Prometheus format.'
      ],
      interviewQuestions: [
        'What Actuator endpoints are available and which should be exposed in production?',
        'Difference between liveness and readiness probes?',
        'How do you create a custom health check?',
        'How does Micrometer integrate with Actuator metrics?',
        'How to secure /actuator endpoints in production?',
        'What is the difference between /health and custom HealthIndicator?'
      ],
      commonMistakes: [
        'Exposing all actuator endpoints publicly in production (security risk).',
        'Health check passing while app cannot serve traffic (missing readiness logic).',
        'Not setting management.server.port separately from application port.',
        'Ignoring disk space and database health in composite health status.',
        'Logging sensitive info in custom actuator endpoints.'
      ]
    }
  ]
};
