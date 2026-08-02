/**
 * Module 6: Testing – unit, integration, and containerized tests
 */
const MODULE_TESTING = {
  id: 'testing',
  name: 'Testing',
  icon: '🧪',
  description: 'Master JUnit 5, Mockito, Spring Boot Test, and Testcontainers to write reliable, interview-ready test suites for Java backend services.',
  estimatedHours: 18,
  practiceProject: 'Build a fully tested REST API with unit tests (Mockito), slice tests (@WebMvcTest / @DataJpaTest), integration tests (@SpringBootTest), and PostgreSQL Testcontainers — targeting 80%+ coverage on service and controller layers.',
  topics: [
    {
      id: 'junit-5-fundamentals',
      title: 'JUnit 5 Fundamentals',
      difficulty: 'Beginner',
      estimatedTime: '4 hours',
      interviewFrequency: 'Very High',
      description: 'Learn JUnit 5 annotations (@Test, @BeforeEach, @ParameterizedTest), assertions, lifecycle hooks, and test organization. This is the foundation every Java backend interview assumes you know.',
      tags: ['junit5', 'unit-testing', 'assertions', 'parameterized-tests', 'test-lifecycle'],
      resources: [
        {
          type: 'doc',
          title: 'JUnit 5 User Guide',
          url: 'https://junit.org/junit5/docs/current/user-guide/'
        },
        {
          type: 'article',
          title: 'Baeldung – Introduction to JUnit 5',
          url: 'https://www.baeldung.com/junit-5'
        },
        {
          type: 'article',
          title: 'Baeldung – JUnit 5 Parameterized Tests',
          url: 'https://www.baeldung.com/parameterized-tests-junit-5'
        },
        {
          type: 'video',
          title: 'Java Brains – JUnit 5 Tutorial',
          url: 'https://www.youtube.com/watch?v=vZm0lH0F3Mk'
        },
        {
          type: 'github',
          title: 'junit-team/junit5',
          url: 'https://github.com/junit-team/junit5'
        }
      ],
      exercises: [
        'Write parameterized tests for a String utility class using @CsvSource and @MethodSource.',
        'Test exception throwing with assertThrows and verify the exact exception message.',
        'Use @Nested to group related tests for a Calculator class (addition, subtraction, edge cases).',
        'Implement @DisplayName annotations to produce readable test reports.',
        'Create a test suite with @Tag("fast") and @Tag("slow") and run only fast tests via Maven profiles.'
      ],
      miniProjects: [
        'Test-driven development (TDD) of a BankAccount class: deposit, withdraw, overdraft rules, and balance history.',
        'Build a test suite for a DateParser utility covering leap years, time zones, and invalid input formats.'
      ],
      interviewQuestions: [
        'What are the differences between JUnit 4 and JUnit 5?',
        'Explain the JUnit 5 test lifecycle: @BeforeAll, @BeforeEach, @AfterEach, @AfterAll.',
        'How do parameterized tests reduce duplication? Give an example with @CsvSource.',
        'What is the difference between assertEquals and assertSame?',
        'How do you disable or conditionally run tests in JUnit 5?',
        'What is assertTimeout and when would you use it?'
      ],
      commonMistakes: [
        'Using JUnit 4 imports (@Before, @Test from org.junit) instead of JUnit 5 (org.junit.jupiter).',
        'Making @BeforeAll methods non-static — they must be static unless using @TestInstance(Lifecycle.PER_CLASS).',
        'Testing multiple behaviors in one @Test method instead of one assertion focus per test.',
        'Not naming tests descriptively — use methodName_stateUnderTest_expectedBehavior pattern.',
        'Relying on test execution order without @Order when tests share mutable state.'
      ]
    },
    {
      id: 'mockito-unit-testing',
      title: 'Mockito & Unit Testing',
      difficulty: 'Intermediate',
      estimatedTime: '5 hours',
      interviewFrequency: 'Very High',
      description: 'Isolate units under test with Mockito mocks, stubs, spies, and verify interactions. Learn @Mock, @InjectMocks, argument captors, and when to mock vs. use real collaborators.',
      tags: ['mockito', 'mocking', 'unit-testing', 'dependency-injection', 'test-doubles'],
      resources: [
        {
          type: 'doc',
          title: 'Mockito Official Documentation',
          url: 'https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html'
        },
        {
          type: 'article',
          title: 'Baeldung – Mockito Series',
          url: 'https://www.baeldung.com/mockito-series'
        },
        {
          type: 'article',
          title: 'Baeldung – Mockito ArgumentCaptor',
          url: 'https://www.baeldung.com/mockito-argumentcaptor'
        },
        {
          type: 'video',
          title: 'Amigoscode – Mockito Tutorial',
          url: 'https://www.youtube.com/watch?v=9rD6LrA8Q24'
        },
        {
          type: 'github',
          title: 'mockito/mockito',
          url: 'https://github.com/mockito/mockito'
        }
      ],
      exercises: [
        'Mock a UserRepository and test UserService.createUser() without touching the database.',
        'Use ArgumentCaptor to verify the exact Order object passed to a payment gateway.',
        'Test that a service calls emailClient.send() exactly once on successful registration.',
        'Use when().thenThrow() to simulate repository failures and assert proper exception handling.',
        'Compare @Mock vs @Spy behavior when partial mocking of a real object is needed.'
      ],
      miniProjects: [
        'Unit-test an OrderService with mocked ProductRepository, PaymentClient, and InventoryService — cover happy path, out-of-stock, and payment failure.',
        'Test a NotificationService that publishes events: verify Kafka/Rabbit template interactions without a running broker.'
      ],
      interviewQuestions: [
        'What is the difference between mock, stub, fake, and spy?',
        'Explain @Mock, @InjectMocks, and MockitoExtension in JUnit 5.',
        'When should you use verify() vs. assert on return values?',
        'What is ArgumentCaptor and why is it useful?',
        'How do you mock static methods and final classes in modern Mockito?',
        'What are common pitfalls of over-mocking in unit tests?'
      ],
      commonMistakes: [
        'Mocking the class under test instead of its dependencies.',
        'Using verify() on every interaction when return-value assertions are sufficient.',
        'Not using @ExtendWith(MockitoExtension.class) and manually calling MockitoAnnotations.openMocks().',
        'Stubbing void methods incorrectly — use doThrow().when() instead of when().thenThrow() for voids.',
        'Testing implementation details (private methods) instead of public behavior.'
      ]
    },
    {
      id: 'spring-boot-integration-testing',
      title: 'Integration Testing with Spring Boot Test',
      difficulty: 'Advanced',
      estimatedTime: '5 hours',
      interviewFrequency: 'High',
      description: 'Use @SpringBootTest, @WebMvcTest, @DataJpaTest, MockMvc, and TestRestTemplate to test Spring layers efficiently. Learn test slicing to keep integration tests fast and focused.',
      tags: ['spring-boot-test', 'mockmvc', 'test-slices', 'integration-testing', 'testresttemplate'],
      resources: [
        {
          type: 'doc',
          title: 'Spring Boot – Testing Features',
          url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing'
        },
        {
          type: 'article',
          title: 'Baeldung – Spring Boot Testing',
          url: 'https://www.baeldung.com/spring-boot-testing'
        },
        {
          type: 'article',
          title: 'Baeldung – Spring MockMvc Tutorial',
          url: 'https://www.baeldung.com/spring-mvc-test-exercise'
        },
        {
          type: 'video',
          title: 'Java Brains – Spring Boot Unit Testing',
          url: 'https://www.youtube.com/watch?v=W_wVoqR1SMM'
        },
        {
          type: 'github',
          title: 'spring-projects/spring-boot – spring-boot-test',
          url: 'https://github.com/spring-projects/spring-boot/tree/main/spring-boot-project/spring-boot-test'
        }
      ],
      exercises: [
        'Write @WebMvcTest for a ProductController: test GET /products/{id} returns 200 and correct JSON.',
        'Use @DataJpaTest with H2 to verify custom @Query methods on a JPA repository.',
        'Configure @SpringBootTest with RANDOM_PORT and TestRestTemplate for end-to-end API tests.',
        'Test validation errors: POST invalid payload and assert 400 with field error messages.',
        'Use @MockBean to replace an external PaymentClient in a @SpringBootTest.'
      ],
      miniProjects: [
        'Integration-test a CRUD REST API: controller → service → repository with H2 and @Transactional rollback.',
        'Test Spring Security: verify protected endpoints return 401/403 and authenticated requests succeed with @WithMockUser.'
      ],
      interviewQuestions: [
        'What is the difference between @WebMvcTest, @DataJpaTest, and @SpringBootTest?',
        'How does @MockBean differ from @Mock in Spring tests?',
        'Explain MockMvc and when to prefer it over TestRestTemplate.',
        'How do you test @Transactional service methods and ensure rollback in tests?',
        'What is @Sql used for in Spring integration tests?',
        'How do you run tests with a specific Spring profile (e.g., test)?'
      ],
      commonMistakes: [
        'Using @SpringBootTest for every test — loads full context and slows the suite dramatically.',
        'Forgetting @AutoConfigureMockMvc when using MockMvc in @SpringBootTest.',
        'Sharing mutable test data across tests without @Transactional rollback or @DirtiesContext.',
        'Not separating unit tests (Mockito only) from slice/integration tests in CI pipelines.',
        'Hardcoding server ports instead of using RANDOM_PORT or @LocalServerPort.'
      ]
    },
    {
      id: 'testcontainers',
      title: 'Testcontainers',
      difficulty: 'Advanced',
      estimatedTime: '4 hours',
      interviewFrequency: 'High',
      description: 'Spin up real PostgreSQL, Redis, Kafka, and other services in Docker during tests. Testcontainers gives production-like integration tests without shared staging environments.',
      tags: ['testcontainers', 'docker', 'integration-testing', 'postgresql', 'kafka'],
      resources: [
        {
          type: 'doc',
          title: 'Testcontainers Java Documentation',
          url: 'https://java.testcontainers.org/'
        },
        {
          type: 'article',
          title: 'Baeldung – Testcontainers with Spring Boot',
          url: 'https://www.baeldung.com/spring-boot-testcontainers'
        },
        {
          type: 'article',
          title: 'Baeldung – Testcontainers PostgreSQL Module',
          url: 'https://www.baeldung.com/testcontainers-postgresql'
        },
        {
          type: 'video',
          title: 'Testcontainers – Getting Started (Official)',
          url: 'https://www.youtube.com/watch?v=HAu1H8qG6sY'
        },
        {
          type: 'github',
          title: 'testcontainers/testcontainers-java',
          url: 'https://github.com/testcontainers/testcontainers-java'
        }
      ],
      exercises: [
        'Configure PostgreSQLContainer with @ServiceConnection (Spring Boot 3.1+) for JPA integration tests.',
        'Write a test that starts RedisContainer and verifies cache read/write through Spring Cache abstraction.',
        'Use @Testcontainers and @Container static fields for reusable container lifecycle across test classes.',
        'Run Flyway/Liquibase migrations against a Testcontainers database before tests execute.',
        'Test Kafka producer/consumer flow with KafkaContainer and spring-kafka-test.'
      ],
      miniProjects: [
        'Replace H2 with PostgreSQL Testcontainers for all repository tests — catch PostgreSQL-specific SQL issues.',
        'Build an integration test suite for a microservice that depends on Postgres + Redis + Kafka using Testcontainers Compose modules.'
      ],
      interviewQuestions: [
        'Why use Testcontainers instead of H2 or embedded databases?',
        'How does @ServiceConnection simplify Spring Boot 3 Testcontainers setup?',
        'What are strategies to speed up Testcontainers test suites in CI?',
        'How do you reuse containers across test classes vs. per-class lifecycle?',
        'What happens if Docker is not running on a developer machine — how do you handle it?',
        'Compare Testcontainers vs. in-memory fakes for Kafka and Redis testing.'
      ],
      commonMistakes: [
        'Starting a new container per test method — use static @Container with JVM reuse or singleton pattern.',
        'Not enabling Testcontainers reuse in ~/.testcontainers.properties for local development speed.',
        'Hardcoding host/port instead of using container.getJdbcUrl() or dynamic property sources.',
        'Committing tests that require Docker without documenting it in README and CI setup.',
        'Ignoring Ryuk container cleanup issues on Windows/WSL — ensure Docker socket is accessible.'
      ]
    }
  ]
};
