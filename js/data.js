// Auto-generated learning content. Edit gen_data.py and regenerate rather than hand-editing this file.
const MODULES = [
  {
    "id": "core-java",
    "num": "01",
    "name": "Core Java Mastery",
    "icon": "code",
    "color": "#7B61FF",
    "description": "The foundation everything else stands on. Most 'senior' gaps trace back to shaky fundamentals here.",
    "project": "Build a mini in-memory key-value store with your own hash bucket implementation.",
    "docs": {
      "type": "docs",
      "label": "Oracle Java Tutorials",
      "url": "https://docs.oracle.com/javase/tutorial/"
    },
    "repo": {
      "type": "repo",
      "label": "openjdk/jdk (source, for the curious)",
      "url": "https://github.com/openjdk/jdk"
    },
    "topics": [
      {
        "id": "core-01",
        "title": "OOP Principles in Depth",
        "difficulty": "Beginner",
        "hours": 3,
        "frequency": "High",
        "xp": 10,
        "exercise": "Model a Vehicle hierarchy, then refactor one inheritance relationship into composition and explain why it's better.",
        "mistakes": [
          "Treating inheritance as the default instead of composition",
          "Confusing abstraction (hiding complexity) with encapsulation (hiding state)"
        ],
        "questions": [
          "Why does the 'Square extends Rectangle' inheritance model break LSP?",
          "When would you choose composition over inheritance in a real service class?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: java oop principles explained",
            "url": "https://www.youtube.com/results?search_query=java+oop+principles+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: java oop",
            "url": "https://www.baeldung.com/?s=java+oop"
          },
          {
            "type": "docs",
            "label": "Oracle: Object-Oriented Programming Concepts",
            "url": "https://docs.oracle.com/javase/tutorial/java/concepts/"
          }
        ]
      },
      {
        "id": "core-02",
        "title": "Collections Framework Internals",
        "difficulty": "Intermediate",
        "hours": 5,
        "frequency": "High",
        "xp": 25,
        "exercise": "Implement a simplified HashMap from scratch using an array of buckets with linked-list collision handling.",
        "mistakes": [
          "Using a mutable object as a HashMap key without a stable hashCode()",
          "Assuming ArrayList.remove(int) and remove(Object) behave the same for Integer lists"
        ],
        "questions": [
          "Walk through what happens internally when you call HashMap.put() and a collision occurs.",
          "Why is the default HashMap load factor 0.75, and what's the tradeoff?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: hashmap internals java",
            "url": "https://www.youtube.com/results?search_query=hashmap+internals+java"
          },
          {
            "type": "article",
            "label": "Baeldung: java hashmap",
            "url": "https://www.baeldung.com/?s=java+hashmap"
          },
          {
            "type": "docs",
            "label": "Oracle: Collections Trail",
            "url": "https://docs.oracle.com/javase/tutorial/collections/"
          }
        ]
      },
      {
        "id": "core-03",
        "title": "Generics & Bounded Wildcards",
        "difficulty": "Intermediate",
        "hours": 3,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Write a generic Box<T> class, then a method using <? extends T> and one using <? super T>, and explain when each applies.",
        "mistakes": [
          "Using raw types to 'avoid generics errors' instead of fixing the actual type issue",
          "Confusing PECS (Producer Extends, Consumer Super) direction"
        ],
        "questions": [
          "Explain PECS with a concrete example.",
          "Why is List<Object> not a supertype of List<String>?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: java generics wildcards explained",
            "url": "https://www.youtube.com/results?search_query=java+generics+wildcards+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: java generics",
            "url": "https://www.baeldung.com/?s=java+generics"
          }
        ]
      },
      {
        "id": "core-04",
        "title": "Exception Handling & Custom Exceptions",
        "difficulty": "Beginner",
        "hours": 2,
        "frequency": "Medium",
        "xp": 10,
        "exercise": "Design a custom checked and unchecked exception for a banking domain and justify each choice.",
        "mistakes": [
          "Catching generic Exception to silence errors instead of handling specific ones",
          "Overusing checked exceptions for recoverable business logic, forcing ugly try/catch everywhere"
        ],
        "questions": [
          "When would you deliberately choose an unchecked exception over a checked one?",
          "What happens to an exception thrown inside a finally block?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: java exception handling best practices",
            "url": "https://www.youtube.com/results?search_query=java+exception+handling+best+practices"
          },
          {
            "type": "article",
            "label": "Baeldung: java exceptions",
            "url": "https://www.baeldung.com/?s=java+exceptions"
          }
        ]
      },
      {
        "id": "core-05",
        "title": "Java 8+ Streams, Lambdas, Optional",
        "difficulty": "Intermediate",
        "hours": 4,
        "frequency": "High",
        "xp": 25,
        "exercise": "Rewrite 5 nested for-loops from an old project as Stream pipelines, then profile which one got slower.",
        "mistakes": [
          "Using Optional as a method parameter or class field instead of only as a return type",
          "Chaining streams so long they become unreadable, worse than the loop they replaced"
        ],
        "questions": [
          "What's the actual cost of a Stream vs a plain for-loop for a small collection?",
          "Why shouldn't Optional be used as a field type?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: java streams deep dive",
            "url": "https://www.youtube.com/results?search_query=java+streams+deep+dive"
          },
          {
            "type": "article",
            "label": "Baeldung: java 8 streams",
            "url": "https://www.baeldung.com/?s=java+8+streams"
          },
          {
            "type": "docs",
            "label": "Oracle: Lambda Expressions",
            "url": "https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html"
          }
        ]
      },
      {
        "id": "core-06",
        "title": "Multithreading Fundamentals",
        "difficulty": "Intermediate",
        "hours": 4,
        "frequency": "High",
        "xp": 25,
        "exercise": "Build a producer-consumer pipeline using wait()/notify(), then rebuild it using BlockingQueue and compare.",
        "mistakes": [
          "Forgetting that wait() must be called inside a synchronized block",
          "Assuming Thread.sleep() releases a held lock (it doesn't)"
        ],
        "questions": [
          "What's the difference between synchronized and a ReentrantLock?",
          "Explain a race condition you've caused or fixed."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: java multithreading tutorial",
            "url": "https://www.youtube.com/results?search_query=java+multithreading+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: java multithreading",
            "url": "https://www.baeldung.com/?s=java+multithreading"
          }
        ]
      },
      {
        "id": "core-07",
        "title": "String Pool & Immutability",
        "difficulty": "Beginner",
        "hours": 1.5,
        "frequency": "Medium",
        "xp": 10,
        "exercise": "Prove with code that String is immutable, and demonstrate the difference between == and .equals() for pooled vs new strings.",
        "mistakes": [
          "Comparing strings with == instead of .equals()",
          "Not understanding why String concatenation in a loop is expensive (StringBuilder exists for a reason)"
        ],
        "questions": [
          "Why is String immutable in Java, by design?",
          "What's the memory difference between new String(\"x\") and \"x\"?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: java string pool explained",
            "url": "https://www.youtube.com/results?search_query=java+string+pool+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: java string pool",
            "url": "https://www.baeldung.com/?s=java+string+pool"
          }
        ]
      },
      {
        "id": "core-08",
        "title": "equals(), hashCode(), Comparable vs Comparator",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "High",
        "xp": 25,
        "exercise": "Implement a Person class with a correct equals/hashCode contract, then break a HashSet by violating it on purpose.",
        "mistakes": [
          "Overriding equals() without overriding hashCode()",
          "Using mutable fields in hashCode() for objects stored in hash-based collections"
        ],
        "questions": [
          "State the equals/hashCode contract precisely.",
          "When would you use Comparator over making a class Comparable?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: equals hashcode contract java",
            "url": "https://www.youtube.com/results?search_query=equals+hashcode+contract+java"
          },
          {
            "type": "article",
            "label": "Baeldung: java equals hashcode",
            "url": "https://www.baeldung.com/?s=java+equals+hashcode"
          }
        ]
      }
    ],
    "topicCount": 8,
    "totalHours": 24.5,
    "totalXp": 155
  },
  {
    "id": "jvm-concurrency",
    "num": "02",
    "name": "JVM & Concurrency Internals",
    "icon": "cpu",
    "color": "#5B8DEF",
    "description": "This is where 'I use Spring Boot' turns into 'I understand what's running underneath it.'",
    "project": "Build a thread-pool-backed task scheduler and tune it under simulated load; graph throughput vs pool size.",
    "docs": {
      "type": "docs",
      "label": "JCIP companion site",
      "url": "https://jcip.net/"
    },
    "repo": {
      "type": "repo",
      "label": "openjdk/jdk",
      "url": "https://github.com/openjdk/jdk"
    },
    "topics": [
      {
        "id": "jvm-01",
        "title": "JVM Memory Model & GC Algorithms",
        "difficulty": "Advanced",
        "hours": 5,
        "frequency": "High",
        "xp": 50,
        "exercise": "Run the same app with -XX:+UseG1GC and -XX:+UseParallelGC, capture GC logs, and compare pause times.",
        "mistakes": [
          "Assuming more heap always means better performance",
          "Not distinguishing stack memory (per-thread) from heap memory (shared)"
        ],
        "questions": [
          "Explain generational garbage collection and why most objects die young.",
          "What triggers a full GC, and why is it expensive?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: jvm memory model garbage collection",
            "url": "https://www.youtube.com/results?search_query=jvm+memory+model+garbage+collection"
          },
          {
            "type": "article",
            "label": "Baeldung: jvm garbage collection",
            "url": "https://www.baeldung.com/?s=jvm+garbage+collection"
          }
        ]
      },
      {
        "id": "jvm-02",
        "title": "Class Loading & Classloader Hierarchy",
        "difficulty": "Advanced",
        "hours": 2,
        "frequency": "Low",
        "xp": 50,
        "exercise": "Write code that loads a class with a custom classloader and explain the delegation model.",
        "mistakes": [
          "Assuming all classes load at JVM startup instead of lazily on first use",
          "Not knowing why two classes loaded by different classloaders are 'different' even with identical bytecode"
        ],
        "questions": [
          "Explain parent-first classloader delegation.",
          "Why can two versions of the same library coexist in one JVM?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: java classloader explained",
            "url": "https://www.youtube.com/results?search_query=java+classloader+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: java classloader",
            "url": "https://www.baeldung.com/?s=java+classloader"
          }
        ]
      },
      {
        "id": "jvm-03",
        "title": "ExecutorService & Thread Pool Tuning",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "High",
        "xp": 50,
        "exercise": "Configure a ThreadPoolExecutor with custom core/max size and a bounded queue; simulate saturation and observe RejectedExecutionException.",
        "mistakes": [
          "Using Executors.newFixedThreadPool() in production without understanding its unbounded queue risk",
          "Not shutting down an ExecutorService, leaking threads"
        ],
        "questions": [
          "Walk through what happens when a ThreadPoolExecutor's queue fills up.",
          "Why is Executors.newCachedThreadPool() dangerous under high load?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: java executorservice thread pool tuning",
            "url": "https://www.youtube.com/results?search_query=java+executorservice+thread+pool+tuning"
          },
          {
            "type": "article",
            "label": "Baeldung: java executorservice",
            "url": "https://www.baeldung.com/?s=java+executorservice"
          }
        ]
      },
      {
        "id": "jvm-04",
        "title": "CompletableFuture & Async Pipelines",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "Medium",
        "xp": 50,
        "exercise": "Chain 3 async calls (simulate with Thread.sleep) using thenCompose/thenCombine and handle failures with exceptionally().",
        "mistakes": [
          "Blocking on .get() immediately after creating a CompletableFuture, defeating the purpose of async",
          "Not handling exceptions, causing silent failures"
        ],
        "questions": [
          "Difference between thenApply and thenCompose?",
          "How do you combine two independent async calls and wait for both?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: completablefuture java tutorial",
            "url": "https://www.youtube.com/results?search_query=completablefuture+java+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: completablefuture",
            "url": "https://www.baeldung.com/?s=completablefuture"
          }
        ]
      },
      {
        "id": "jvm-05",
        "title": "Concurrent Collections",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Replace a synchronized HashMap with ConcurrentHashMap in a multi-threaded counter app and benchmark the difference.",
        "mistakes": [
          "Assuming ConcurrentHashMap makes compound operations (check-then-act) atomic",
          "Using Collections.synchronizedList() then iterating without manual synchronization"
        ],
        "questions": [
          "Why is iterating a synchronized collection still not thread-safe?",
          "What does ConcurrentHashMap actually lock internally?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: concurrenthashmap internals",
            "url": "https://www.youtube.com/results?search_query=concurrenthashmap+internals"
          },
          {
            "type": "article",
            "label": "Baeldung: concurrent collections java",
            "url": "https://www.baeldung.com/?s=concurrent+collections+java"
          }
        ]
      },
      {
        "id": "jvm-06",
        "title": "Locks, Volatile, and Happens-Before",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "Medium",
        "xp": 50,
        "exercise": "Write a double-checked locking singleton, first broken (no volatile), then fixed, and explain the reordering bug.",
        "mistakes": [
          "Using double-checked locking without volatile",
          "Assuming volatile makes compound operations atomic (it only guarantees visibility, not atomicity)"
        ],
        "questions": [
          "What does volatile actually guarantee?",
          "Explain happens-before in your own words with an example."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: java memory model happens before",
            "url": "https://www.youtube.com/results?search_query=java+memory+model+happens+before"
          },
          {
            "type": "article",
            "label": "Baeldung: java volatile",
            "url": "https://www.baeldung.com/?s=java+volatile"
          }
        ]
      },
      {
        "id": "jvm-07",
        "title": "Core Design Patterns",
        "difficulty": "Intermediate",
        "hours": 4,
        "frequency": "High",
        "xp": 25,
        "exercise": "Implement Strategy and Observer patterns to replace a large if/else block in a payment-processing example.",
        "mistakes": [
          "Applying patterns because they're 'best practice' rather than because they solve a real problem you have",
          "Overusing Singleton, creating hidden global state that makes testing hard"
        ],
        "questions": [
          "When is Singleton actually a bad idea?",
          "How does Strategy differ from just passing a lambda?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: java design patterns tutorial",
            "url": "https://www.youtube.com/results?search_query=java+design+patterns+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: java design patterns",
            "url": "https://www.baeldung.com/?s=java+design+patterns"
          },
          {
            "type": "repo",
            "label": "iluwatar/java-design-patterns",
            "url": "https://github.com/iluwatar/java-design-patterns"
          }
        ]
      },
      {
        "id": "jvm-08",
        "title": "Maven/Gradle Build Lifecycle",
        "difficulty": "Beginner",
        "hours": 2,
        "frequency": "Medium",
        "xp": 10,
        "exercise": "Convert a Maven project to Gradle (or vice versa) and explain each phase in the build lifecycle you preserved.",
        "mistakes": [
          "Not understanding the difference between compile, provided, and runtime scope dependencies",
          "Committing build artifacts (target/, build/) to git"
        ],
        "questions": [
          "What's the difference between mvn install and mvn deploy?",
          "Why would a dependency conflict cause different behavior at runtime vs compile time?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: maven build lifecycle explained",
            "url": "https://www.youtube.com/results?search_query=maven+build+lifecycle+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: maven tutorial",
            "url": "https://www.baeldung.com/?s=maven+tutorial"
          }
        ]
      }
    ],
    "topicCount": 8,
    "totalHours": 24,
    "totalXp": 310
  },
  {
    "id": "spring-core",
    "num": "03",
    "name": "Spring Core & Boot Foundations",
    "icon": "leaf",
    "color": "#2DD4A7",
    "description": "The framework layer \u2014 but the goal is to understand what Spring is doing for you, not just its annotations.",
    "project": "Build a small REST API for a library system: books, members, loans, with proper layering (controller/service/repository).",
    "docs": {
      "type": "docs",
      "label": "Spring Boot Reference Docs",
      "url": "https://docs.spring.io/spring-boot/"
    },
    "repo": {
      "type": "repo",
      "label": "spring-projects/spring-boot",
      "url": "https://github.com/spring-projects/spring-boot"
    },
    "topics": [
      {
        "id": "spr-01",
        "title": "IoC Container & Dependency Injection",
        "difficulty": "Beginner",
        "hours": 3,
        "frequency": "High",
        "xp": 10,
        "exercise": "Build the same small service three ways: manual instantiation, constructor injection, and field injection \u2014 then argue which is best and why.",
        "mistakes": [
          "Using field injection (@Autowired on a field) in production code instead of constructor injection",
          "Not understanding that Spring manages singleton beans by default, causing shared-state bugs"
        ],
        "questions": [
          "Why is constructor injection preferred over field injection?",
          "What's the difference between a BeanFactory and an ApplicationContext?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring dependency injection explained",
            "url": "https://www.youtube.com/results?search_query=spring+dependency+injection+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: spring dependency injection",
            "url": "https://www.baeldung.com/?s=spring+dependency+injection"
          },
          {
            "type": "docs",
            "label": "Spring: IoC Container",
            "url": "https://docs.spring.io/spring-framework/reference/core/beans.html"
          }
        ]
      },
      {
        "id": "spr-02",
        "title": "Bean Lifecycle, Scopes, @PostConstruct/@PreDestroy",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Create a bean with singleton and prototype scope, inject both into a controller, and demonstrate the behavioral difference.",
        "mistakes": [
          "Injecting a prototype-scoped bean into a singleton and expecting a new instance each call (it won't happen without a proxy)",
          "Doing expensive work in a constructor instead of @PostConstruct"
        ],
        "questions": [
          "Walk through the full bean lifecycle from instantiation to destruction.",
          "Why does injecting a prototype bean into a singleton not work as most people expect?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring bean lifecycle scopes",
            "url": "https://www.youtube.com/results?search_query=spring+bean+lifecycle+scopes"
          },
          {
            "type": "article",
            "label": "Baeldung: spring bean scopes",
            "url": "https://www.baeldung.com/?s=spring+bean+scopes"
          }
        ]
      },
      {
        "id": "spr-03",
        "title": "Spring Boot Autoconfiguration Internals",
        "difficulty": "Advanced",
        "hours": 4,
        "frequency": "High",
        "xp": 50,
        "exercise": "Write a tiny custom @Conditional autoconfiguration class that activates only when a property is set.",
        "mistakes": [
          "Treating autoconfiguration as magic instead of understanding it's just conditional @Bean registration",
          "Not knowing how to debug why an autoconfiguration didn't apply (--debug flag, conditions report)"
        ],
        "questions": [
          "How does @SpringBootApplication trigger autoconfiguration under the hood?",
          "How would you debug why a specific autoconfiguration class isn't being applied?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring boot autoconfiguration explained",
            "url": "https://www.youtube.com/results?search_query=spring+boot+autoconfiguration+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: spring boot autoconfiguration",
            "url": "https://www.baeldung.com/?s=spring+boot+autoconfiguration"
          }
        ]
      },
      {
        "id": "spr-04",
        "title": "REST Controller Design & HTTP Semantics",
        "difficulty": "Beginner",
        "hours": 3,
        "frequency": "High",
        "xp": 10,
        "exercise": "Design a REST API for orders that correctly uses status codes (201, 204, 404, 409) instead of always returning 200.",
        "mistakes": [
          "Returning 200 OK for every response, including errors, with error info buried in the body",
          "Using GET for operations that mutate state"
        ],
        "questions": [
          "When should an API return 409 Conflict vs 400 Bad Request?",
          "Why does PUT need to be idempotent, and what breaks if it isn't?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: rest api design best practices",
            "url": "https://www.youtube.com/results?search_query=rest+api+design+best+practices"
          },
          {
            "type": "article",
            "label": "Baeldung: rest api design",
            "url": "https://www.baeldung.com/?s=rest+api+design"
          }
        ]
      },
      {
        "id": "spr-05",
        "title": "Request Validation with Bean Validation",
        "difficulty": "Beginner",
        "hours": 2,
        "frequency": "Medium",
        "xp": 10,
        "exercise": "Add @Valid with custom constraint annotations to a signup DTO, including a cross-field password-confirmation check.",
        "mistakes": [
          "Validating only at the DTO level and trusting that data is 'clean' by the time it reaches the service layer",
          "Writing a custom validator that duplicates logic already available in standard annotations"
        ],
        "questions": [
          "How do you write a custom cross-field validation constraint?",
          "Where should business-rule validation live vs input-format validation?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring boot bean validation",
            "url": "https://www.youtube.com/results?search_query=spring+boot+bean+validation"
          },
          {
            "type": "article",
            "label": "Baeldung: spring boot validation",
            "url": "https://www.baeldung.com/?s=spring+boot+validation"
          }
        ]
      },
      {
        "id": "spr-06",
        "title": "Global Exception Handling with @ControllerAdvice",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Build a centralized error handler returning a consistent JSON error shape for validation errors, 404s, and unhandled exceptions.",
        "mistakes": [
          "Handling exceptions inline in every controller instead of centralizing them",
          "Leaking internal stack traces or exception messages to API clients"
        ],
        "questions": [
          "How does @ExceptionHandler resolve which method handles a given exception?",
          "What should a well-designed API error response body contain?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring boot global exception handling",
            "url": "https://www.youtube.com/results?search_query=spring+boot+global+exception+handling"
          },
          {
            "type": "article",
            "label": "Baeldung: spring boot exception handling",
            "url": "https://www.baeldung.com/?s=spring+boot+exception+handling"
          }
        ]
      },
      {
        "id": "spr-07",
        "title": "Profiles & Externalized Configuration",
        "difficulty": "Beginner",
        "hours": 2,
        "frequency": "Medium",
        "xp": 10,
        "exercise": "Set up dev/staging/prod profiles with different datasource configs, and override one value via an environment variable.",
        "mistakes": [
          "Hardcoding environment-specific values instead of externalizing them",
          "Committing real secrets into application.yml"
        ],
        "questions": [
          "What's Spring's property resolution precedence order?",
          "How would you inject a secret without committing it to source control?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring boot profiles configuration",
            "url": "https://www.youtube.com/results?search_query=spring+boot+profiles+configuration"
          },
          {
            "type": "article",
            "label": "Baeldung: spring boot profiles",
            "url": "https://www.baeldung.com/?s=spring+boot+profiles"
          }
        ]
      },
      {
        "id": "spr-08",
        "title": "Spring Boot Actuator",
        "difficulty": "Beginner",
        "hours": 1.5,
        "frequency": "Medium",
        "xp": 10,
        "exercise": "Enable Actuator, expose a custom health indicator that checks a downstream dependency, and secure the endpoints.",
        "mistakes": [
          "Exposing all Actuator endpoints publicly in production, including /env and /heapdump",
          "Not writing a custom health check for critical dependencies (DB, downstream services)"
        ],
        "questions": [
          "Why shouldn't /actuator/env be publicly exposed?",
          "How would you write a custom HealthIndicator?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring boot actuator tutorial",
            "url": "https://www.youtube.com/results?search_query=spring+boot+actuator+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: spring boot actuator",
            "url": "https://www.baeldung.com/?s=spring+boot+actuator"
          }
        ]
      }
    ],
    "topicCount": 8,
    "totalHours": 19.5,
    "totalXp": 150
  },
  {
    "id": "data-layer",
    "num": "04",
    "name": "Data Layer Mastery",
    "icon": "database",
    "color": "#F5A623",
    "description": "This is where most production incidents actually come from \u2014 N+1 queries and bad transaction boundaries.",
    "project": "Take a slow JPA-based reporting endpoint and optimize it: fix N+1s, add indexes, add caching, measure before/after.",
    "docs": {
      "type": "docs",
      "label": "Spring Data JPA Reference",
      "url": "https://docs.spring.io/spring-data/jpa/reference/"
    },
    "repo": {
      "type": "repo",
      "label": "spring-projects/spring-data-jpa",
      "url": "https://github.com/spring-projects/spring-data-jpa"
    },
    "topics": [
      {
        "id": "dat-01",
        "title": "JDBC Fundamentals",
        "difficulty": "Beginner",
        "hours": 2,
        "frequency": "Low",
        "xp": 10,
        "exercise": "Write a raw JDBC CRUD app with no ORM, manually managing Connection/PreparedStatement/ResultSet, before touching JPA.",
        "mistakes": [
          "Not closing Connections/ResultSets, leaking connections",
          "Building SQL with string concatenation instead of PreparedStatement (SQL injection risk)"
        ],
        "questions": [
          "Why does PreparedStatement prevent SQL injection where string concatenation doesn't?",
          "What does try-with-resources actually do for a JDBC Connection?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: jdbc tutorial java",
            "url": "https://www.youtube.com/results?search_query=jdbc+tutorial+java"
          },
          {
            "type": "article",
            "label": "Baeldung: jdbc tutorial",
            "url": "https://www.baeldung.com/?s=jdbc+tutorial"
          }
        ]
      },
      {
        "id": "dat-02",
        "title": "JPA & Hibernate Internals",
        "difficulty": "Advanced",
        "hours": 5,
        "frequency": "High",
        "xp": 50,
        "exercise": "Enable Hibernate SQL logging and trace exactly what queries get generated for a simple parent-child entity save.",
        "mistakes": [
          "Not understanding the persistence context / first-level cache, causing confusing 'stale data' bugs",
          "Mismatching entity lifecycle expectations (detached vs managed) after a transaction closes"
        ],
        "questions": [
          "What's the difference between the first-level and second-level cache in Hibernate?",
          "Why does calling a getter on a lazy field outside a transaction throw LazyInitializationException?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: hibernate internals explained",
            "url": "https://www.youtube.com/results?search_query=hibernate+internals+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: hibernate internals",
            "url": "https://www.baeldung.com/?s=hibernate+internals"
          }
        ]
      },
      {
        "id": "dat-03",
        "title": "Spring Data JPA Repositories",
        "difficulty": "Beginner",
        "hours": 2,
        "frequency": "High",
        "xp": 10,
        "exercise": "Build repositories using method-name query derivation, @Query with JPQL, and a native SQL query \u2014 compare readability.",
        "mistakes": [
          "Writing overly complex derived query method names instead of switching to @Query",
          "Not knowing Spring Data JPA generates a query at startup, so a typo fails fast (good) \u2014 but few realize this"
        ],
        "questions": [
          "When would you choose @Query over method-name derivation?",
          "How does Spring Data JPA know what SQL to generate from a method name?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring data jpa tutorial",
            "url": "https://www.youtube.com/results?search_query=spring+data+jpa+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: spring data jpa",
            "url": "https://www.baeldung.com/?s=spring+data+jpa"
          }
        ]
      },
      {
        "id": "dat-04",
        "title": "Transaction Management & Propagation",
        "difficulty": "Advanced",
        "hours": 4,
        "frequency": "High",
        "xp": 50,
        "exercise": "Write two service methods calling each other with different @Transactional propagation levels (REQUIRED vs REQUIRES_NEW) and observe rollback behavior.",
        "mistakes": [
          "Calling a @Transactional method from within the same class and expecting the proxy to intercept it (it won't)",
          "Not understanding that a runtime exception rolls back by default but a checked exception doesn't"
        ],
        "questions": [
          "Why doesn't @Transactional work when called from within the same class?",
          "Explain REQUIRES_NEW vs REQUIRED with a real scenario."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring transactional propagation explained",
            "url": "https://www.youtube.com/results?search_query=spring+transactional+propagation+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: spring transaction management",
            "url": "https://www.baeldung.com/?s=spring+transaction+management"
          }
        ]
      },
      {
        "id": "dat-05",
        "title": "The N+1 Problem & Fetch Strategies",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "High",
        "xp": 50,
        "exercise": "Reproduce an N+1 query bug with a lazy @OneToMany, then fix it three different ways: JOIN FETCH, @EntityGraph, and batch fetching.",
        "mistakes": [
          "Defaulting everything to EAGER fetch to 'avoid N+1', which just moves the problem and over-fetches",
          "Not profiling actual query counts, so the N+1 goes unnoticed until production load"
        ],
        "questions": [
          "What causes the N+1 problem, concretely?",
          "Compare JOIN FETCH vs @EntityGraph vs batch fetch size as fixes."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: n+1 problem hibernate fix",
            "url": "https://www.youtube.com/results?search_query=n+1+problem+hibernate+fix"
          },
          {
            "type": "article",
            "label": "Baeldung: n+1 query problem",
            "url": "https://www.baeldung.com/?s=n+1+query+problem"
          }
        ]
      },
      {
        "id": "dat-06",
        "title": "SQL Query Tuning & Indexing",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "Medium",
        "xp": 50,
        "exercise": "Take a slow query, run EXPLAIN ANALYZE, add the right index, and show the execution plan change.",
        "mistakes": [
          "Adding indexes on every column 'just in case', which slows down writes",
          "Not understanding when an index is ignored (e.g. leading wildcard LIKE '%x')"
        ],
        "questions": [
          "When would the query planner ignore an existing index?",
          "What's the tradeoff of adding an index you rarely query on?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: sql query optimization indexing",
            "url": "https://www.youtube.com/results?search_query=sql+query+optimization+indexing"
          },
          {
            "type": "article",
            "label": "Baeldung: sql indexing",
            "url": "https://www.baeldung.com/?s=sql+indexing"
          }
        ]
      },
      {
        "id": "dat-07",
        "title": "Redis for Caching",
        "difficulty": "Intermediate",
        "hours": 3,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Add Spring Cache with a Redis backend to a read-heavy endpoint, and implement manual cache eviction on writes.",
        "mistakes": [
          "Caching without an eviction/invalidation strategy, serving stale data indefinitely",
          "Caching objects that change per-request context (e.g. user-specific data) with a shared key"
        ],
        "questions": [
          "What's the cache-aside pattern, and where does cache invalidation happen?",
          "How do you handle cache stampede on a popular key?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring boot redis caching",
            "url": "https://www.youtube.com/results?search_query=spring+boot+redis+caching"
          },
          {
            "type": "article",
            "label": "Baeldung: spring boot redis",
            "url": "https://www.baeldung.com/?s=spring+boot+redis"
          }
        ]
      },
      {
        "id": "dat-08",
        "title": "Connection Pooling with HikariCP",
        "difficulty": "Intermediate",
        "hours": 1.5,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Deliberately misconfigure pool size too small under load and observe connection timeout errors, then tune it correctly.",
        "mistakes": [
          "Setting max pool size arbitrarily high, exhausting DB connection limits under concurrent load",
          "Not setting a connection timeout, causing threads to hang indefinitely"
        ],
        "questions": [
          "How do you determine the right connection pool size for a service?",
          "What happens when all pooled connections are in use and a new request comes in?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: hikaricp connection pool tuning",
            "url": "https://www.youtube.com/results?search_query=hikaricp+connection+pool+tuning"
          },
          {
            "type": "article",
            "label": "Baeldung: hikaricp",
            "url": "https://www.baeldung.com/?s=hikaricp"
          }
        ]
      }
    ],
    "topicCount": 8,
    "totalHours": 23.5,
    "totalXp": 270
  },
  {
    "id": "security",
    "num": "05",
    "name": "Security",
    "icon": "shield",
    "color": "#FF6B6B",
    "description": "Getting this wrong is how companies end up in breach-notification emails.",
    "project": "Secure a REST API with JWT auth, role-based endpoints, and refresh-token rotation.",
    "docs": {
      "type": "docs",
      "label": "Spring Security Reference",
      "url": "https://docs.spring.io/spring-security/reference/"
    },
    "repo": {
      "type": "repo",
      "label": "spring-projects/spring-security",
      "url": "https://github.com/spring-projects/spring-security"
    },
    "topics": [
      {
        "id": "sec-01",
        "title": "Spring Security Filter Chain",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "High",
        "xp": 50,
        "exercise": "Draw and then reproduce in code a custom filter inserted into the chain that logs every request's auth status.",
        "mistakes": [
          "Not understanding filter ordering, causing a custom filter to run before/after authentication unexpectedly",
          "Disabling CSRF globally without understanding what it protects"
        ],
        "questions": [
          "Walk through the Spring Security filter chain for a single authenticated request.",
          "Where would you insert a custom filter to validate an API key before authentication runs?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring security filter chain explained",
            "url": "https://www.youtube.com/results?search_query=spring+security+filter+chain+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: spring security filter chain",
            "url": "https://www.baeldung.com/?s=spring+security+filter+chain"
          }
        ]
      },
      {
        "id": "sec-02",
        "title": "Authentication vs Authorization",
        "difficulty": "Beginner",
        "hours": 1,
        "frequency": "High",
        "xp": 10,
        "exercise": "Write one paragraph, in your own words, distinguishing the two, then map each to a specific HTTP status code (401 vs 403).",
        "mistakes": [
          "Returning 401 when the real problem is insufficient permissions (should be 403)",
          "Conflating 'logged in' with 'allowed to do this specific action'"
        ],
        "questions": [
          "What's the practical difference between 401 and 403?",
          "Give an example where a user is authenticated but not authorized."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: authentication vs authorization",
            "url": "https://www.youtube.com/results?search_query=authentication+vs+authorization"
          },
          {
            "type": "article",
            "label": "Baeldung: authentication vs authorization",
            "url": "https://www.baeldung.com/?s=authentication+vs+authorization"
          }
        ]
      },
      {
        "id": "sec-03",
        "title": "JWT Implementation from Scratch",
        "difficulty": "Advanced",
        "hours": 4,
        "frequency": "High",
        "xp": 50,
        "exercise": "Implement JWT issuing and validation manually (not just an annotation) \u2014 header, payload, signature \u2014 and explain each part.",
        "mistakes": [
          "Storing sensitive data in the JWT payload, forgetting it's only encoded, not encrypted",
          "Not implementing token expiration or refresh, or storing JWTs insecurely in localStorage"
        ],
        "questions": [
          "Why is a JWT not encrypted by default \u2014 what does that mean for what you put in it?",
          "How would you implement token revocation with stateless JWTs?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: jwt authentication spring boot",
            "url": "https://www.youtube.com/results?search_query=jwt+authentication+spring+boot"
          },
          {
            "type": "article",
            "label": "Baeldung: jwt spring boot",
            "url": "https://www.baeldung.com/?s=jwt+spring+boot"
          }
        ]
      },
      {
        "id": "sec-04",
        "title": "OAuth2 & OpenID Connect Flows",
        "difficulty": "Advanced",
        "hours": 4,
        "frequency": "Medium",
        "xp": 50,
        "exercise": "Implement 'Login with Google' using Spring Security OAuth2 client, and trace the full authorization code flow.",
        "mistakes": [
          "Confusing OAuth2 (authorization) with OpenID Connect (authentication) \u2014 they solve different problems",
          "Using the implicit grant flow in a new project (deprecated for good reasons)"
        ],
        "questions": [
          "Walk through the OAuth2 authorization code flow step by step.",
          "What does OpenID Connect add on top of OAuth2?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: oauth2 openid connect explained",
            "url": "https://www.youtube.com/results?search_query=oauth2+openid+connect+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: oauth2 spring security",
            "url": "https://www.baeldung.com/?s=oauth2+spring+security"
          }
        ]
      },
      {
        "id": "sec-05",
        "title": "Role-Based & Method-Level Security",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Secure service methods directly with @PreAuthorize using SpEL expressions referencing the current user's roles and the resource owner.",
        "mistakes": [
          "Doing authorization checks only at the controller layer, missing internal service-to-service calls",
          "Hardcoding role checks as if/else instead of using method security annotations"
        ],
        "questions": [
          "What's the advantage of method-level security over controller-only checks?",
          "Write a @PreAuthorize expression that only lets a user access their own resource."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring security method level authorization",
            "url": "https://www.youtube.com/results?search_query=spring+security+method+level+authorization"
          },
          {
            "type": "article",
            "label": "Baeldung: spring security preauthorize",
            "url": "https://www.baeldung.com/?s=spring+security+preauthorize"
          }
        ]
      },
      {
        "id": "sec-06",
        "title": "API Rate Limiting",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Implement a token-bucket rate limiter as a Spring filter, and load-test it to prove it actually throttles.",
        "mistakes": [
          "Rate limiting only at the app layer with no shared state, so it doesn't work across multiple instances",
          "Returning a generic error instead of 429 Too Many Requests with a Retry-After header"
        ],
        "questions": [
          "How would you rate-limit consistently across multiple service instances?",
          "Explain the token bucket algorithm."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: api rate limiting algorithms",
            "url": "https://www.youtube.com/results?search_query=api+rate+limiting+algorithms"
          },
          {
            "type": "article",
            "label": "Baeldung: rate limiting",
            "url": "https://www.baeldung.com/?s=rate+limiting"
          }
        ]
      },
      {
        "id": "sec-07",
        "title": "CORS & CSRF",
        "difficulty": "Beginner",
        "hours": 1.5,
        "frequency": "Medium",
        "xp": 10,
        "exercise": "Deliberately trigger a CORS error from a local frontend calling your API, then fix it correctly (not with a wildcard).",
        "mistakes": [
          "Setting Access-Control-Allow-Origin: * on an endpoint that also accepts credentials",
          "Disabling CSRF protection for a session-cookie-based app without understanding the risk"
        ],
        "questions": [
          "Why is CORS a browser-enforced concept, not a server security boundary by itself?",
          "When is it actually safe to disable CSRF protection?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: cors csrf explained",
            "url": "https://www.youtube.com/results?search_query=cors+csrf+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: cors vs csrf",
            "url": "https://www.baeldung.com/?s=cors+vs+csrf"
          }
        ]
      }
    ],
    "topicCount": 7,
    "totalHours": 17.5,
    "totalXp": 220
  },
  {
    "id": "testing",
    "num": "06",
    "name": "Testing & Quality",
    "icon": "check-circle",
    "color": "#2DD4A7",
    "description": "The skill that separates 'it works on my machine' from 'I trust this in production.'",
    "project": "Take an existing untested service class and bring it to 90%+ meaningful coverage with unit + integration tests.",
    "docs": {
      "type": "docs",
      "label": "JUnit 5 User Guide",
      "url": "https://junit.org/junit5/docs/current/user-guide/"
    },
    "repo": {
      "type": "repo",
      "label": "testcontainers/testcontainers-java",
      "url": "https://github.com/testcontainers/testcontainers-java"
    },
    "topics": [
      {
        "id": "tst-01",
        "title": "JUnit 5 Fundamentals",
        "difficulty": "Beginner",
        "hours": 2,
        "frequency": "High",
        "xp": 10,
        "exercise": "Write a full test class using @BeforeEach, @ParameterizedTest, and @Nested to organize related test cases.",
        "mistakes": [
          "Writing one giant test method that checks 10 unrelated things, hiding which assertion actually failed",
          "Not using @ParameterizedTest for input variations, causing copy-pasted near-duplicate tests"
        ],
        "questions": [
          "What's the test lifecycle order with @BeforeAll/@BeforeEach?",
          "When would you use @Nested test classes?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: junit 5 tutorial",
            "url": "https://www.youtube.com/results?search_query=junit+5+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: junit 5",
            "url": "https://www.baeldung.com/?s=junit+5"
          }
        ]
      },
      {
        "id": "tst-02",
        "title": "Mockito & Effective Mocking",
        "difficulty": "Intermediate",
        "hours": 3,
        "frequency": "High",
        "xp": 25,
        "exercise": "Test a service class by mocking its repository dependency, then identify one place you're over-mocking and fix it.",
        "mistakes": [
          "Mocking everything, including simple value objects that don't need mocking, making tests brittle",
          "Verifying implementation details (exact call order/count) instead of behavior, breaking tests on harmless refactors"
        ],
        "questions": [
          "What's the difference between a mock and a stub, conceptually?",
          "When is mocking a code smell rather than a tool?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: mockito tutorial java",
            "url": "https://www.youtube.com/results?search_query=mockito+tutorial+java"
          },
          {
            "type": "article",
            "label": "Baeldung: mockito",
            "url": "https://www.baeldung.com/?s=mockito"
          }
        ]
      },
      {
        "id": "tst-03",
        "title": "Integration Testing with @SpringBootTest",
        "difficulty": "Intermediate",
        "hours": 3,
        "frequency": "High",
        "xp": 25,
        "exercise": "Write an integration test that spins up the full Spring context and hits a real endpoint with MockMvc or WebTestClient.",
        "mistakes": [
          "Using @SpringBootTest for every test, making the suite slow when a slice test (@WebMvcTest) would do",
          "Not resetting shared state (DB, caches) between integration tests, causing flaky ordering-dependent failures"
        ],
        "questions": [
          "When would you use @WebMvcTest instead of @SpringBootTest?",
          "How do you keep integration tests independent of execution order?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring boot integration testing",
            "url": "https://www.youtube.com/results?search_query=spring+boot+integration+testing"
          },
          {
            "type": "article",
            "label": "Baeldung: spring boot test",
            "url": "https://www.baeldung.com/?s=spring+boot+test"
          }
        ]
      },
      {
        "id": "tst-04",
        "title": "Testcontainers for Real DB Tests",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "Medium",
        "xp": 50,
        "exercise": "Replace an in-memory H2 test database with a real Postgres Testcontainer and fix any behavior differences you find.",
        "mistakes": [
          "Testing against H2 when production runs Postgres, missing DB-specific behavior differences",
          "Not reusing containers across test classes, making the suite unnecessarily slow"
        ],
        "questions": [
          "Why can testing against H2 give false confidence?",
          "How do you speed up a test suite that starts a new container per test class?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: testcontainers spring boot tutorial",
            "url": "https://www.youtube.com/results?search_query=testcontainers+spring+boot+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: testcontainers",
            "url": "https://www.baeldung.com/?s=testcontainers"
          },
          {
            "type": "repo",
            "label": "testcontainers/testcontainers-java",
            "url": "https://github.com/testcontainers/testcontainers-java"
          }
        ]
      },
      {
        "id": "tst-05",
        "title": "Contract Testing Basics",
        "difficulty": "Advanced",
        "hours": 2,
        "frequency": "Low",
        "xp": 50,
        "exercise": "Write a simple consumer-driven contract test between two mock services using Pact (or document the pattern if tooling is unavailable).",
        "mistakes": [
          "Relying only on end-to-end tests to catch breaking API changes between services (too slow, too late)",
          "Not versioning contracts, so a provider change silently breaks a consumer"
        ],
        "questions": [
          "What problem does contract testing solve that integration testing doesn't?",
          "What's the difference between consumer-driven and provider-driven contracts?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: contract testing pact tutorial",
            "url": "https://www.youtube.com/results?search_query=contract+testing+pact+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: consumer driven contract testing",
            "url": "https://www.baeldung.com/?s=consumer+driven+contract+testing"
          }
        ]
      },
      {
        "id": "tst-06",
        "title": "Code Coverage & Static Analysis",
        "difficulty": "Beginner",
        "hours": 1.5,
        "frequency": "Medium",
        "xp": 10,
        "exercise": "Run JaCoCo on a project, find the least-covered class, and add tests for its actual risky branches (not just to hit a number).",
        "mistakes": [
          "Chasing a coverage percentage instead of testing meaningful behavior and edge cases",
          "Ignoring static analysis warnings until there are hundreds, making them impossible to triage"
        ],
        "questions": [
          "Why can 100% coverage still mean a badly-tested codebase?",
          "What's the value of running static analysis in CI vs locally?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: jacoco sonarqube tutorial",
            "url": "https://www.youtube.com/results?search_query=jacoco+sonarqube+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: code coverage java",
            "url": "https://www.baeldung.com/?s=code+coverage+java"
          }
        ]
      },
      {
        "id": "tst-07",
        "title": "TDD Workflow on a Real Feature",
        "difficulty": "Intermediate",
        "hours": 3,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Build one new feature strictly red-green-refactor: write the failing test first, every time, for a session.",
        "mistakes": [
          "Writing the implementation first and tests after, calling it TDD",
          "Skipping the refactor step, leaving the passing-but-ugly first draft in place"
        ],
        "questions": [
          "What's the actual value of writing the test before the code, beyond habit?",
          "Where does TDD struggle (e.g. exploratory or UI-heavy code)?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: tdd java tutorial",
            "url": "https://www.youtube.com/results?search_query=tdd+java+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: test driven development",
            "url": "https://www.baeldung.com/?s=test+driven+development"
          }
        ]
      }
    ],
    "topicCount": 7,
    "totalHours": 17.5,
    "totalXp": 195
  },
  {
    "id": "microservices",
    "num": "07",
    "name": "Microservices Architecture",
    "icon": "network",
    "color": "#7B61FF",
    "description": "The architecture layer where most job descriptions live \u2014 and where most candidates only know the buzzwords.",
    "project": "Build a 3-service system (order, inventory, notification) with service discovery, a gateway, and async events via Kafka.",
    "docs": {
      "type": "docs",
      "label": "Spring Cloud",
      "url": "https://spring.io/projects/spring-cloud"
    },
    "repo": {
      "type": "repo",
      "label": "microservices-io / patterns catalog",
      "url": "https://github.com/microservice-patterns"
    },
    "topics": [
      {
        "id": "mic-01",
        "title": "Monolith vs Microservices Tradeoffs",
        "difficulty": "Beginner",
        "hours": 2,
        "frequency": "High",
        "xp": 10,
        "exercise": "Write a one-page decision memo: would you split a specific hypothetical app into microservices? Argue both sides, then decide.",
        "mistakes": [
          "Adopting microservices because it's trendy, without the organizational scale that justifies the operational cost",
          "Underestimating the complexity of distributed transactions and network failures a monolith never had to deal with"
        ],
        "questions": [
          "What real problem do microservices solve that a well-structured monolith doesn't?",
          "What's the biggest operational cost microservices introduce?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: monolith vs microservices",
            "url": "https://www.youtube.com/results?search_query=monolith+vs+microservices"
          },
          {
            "type": "article",
            "label": "Baeldung: monolith vs microservices",
            "url": "https://www.baeldung.com/?s=monolith+vs+microservices"
          }
        ]
      },
      {
        "id": "mic-02",
        "title": "Service Decomposition Strategies",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "High",
        "xp": 50,
        "exercise": "Take a monolithic e-commerce domain model and split it into services using DDD bounded contexts \u2014 justify each boundary.",
        "mistakes": [
          "Splitting services by technical layer (e.g. 'the database service') instead of by business capability",
          "Creating services so fine-grained that every request fans out into a dozen calls"
        ],
        "questions": [
          "What's a bounded context, and how does it guide service boundaries?",
          "How do you know a microservice is too small?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: ddd bounded context microservices",
            "url": "https://www.youtube.com/results?search_query=ddd+bounded+context+microservices"
          },
          {
            "type": "article",
            "label": "Baeldung: service decomposition ddd",
            "url": "https://www.baeldung.com/?s=service+decomposition+ddd"
          }
        ]
      },
      {
        "id": "mic-03",
        "title": "REST vs gRPC vs Async Messaging",
        "difficulty": "Intermediate",
        "hours": 3,
        "frequency": "High",
        "xp": 25,
        "exercise": "Implement the same service-to-service call three ways \u2014 REST, gRPC, and via a message queue \u2014 and compare latency and coupling.",
        "mistakes": [
          "Defaulting to synchronous REST for everything, creating tight coupling and cascading failures",
          "Choosing gRPC without considering the debugging/tooling cost vs its performance benefit"
        ],
        "questions": [
          "When would you choose async messaging over a direct REST call between services?",
          "What's the main tradeoff gRPC makes for its performance gains?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: rest vs grpc vs kafka comparison",
            "url": "https://www.youtube.com/results?search_query=rest+vs+grpc+vs+kafka+comparison"
          },
          {
            "type": "article",
            "label": "Baeldung: rest vs grpc",
            "url": "https://www.baeldung.com/?s=rest+vs+grpc"
          }
        ]
      },
      {
        "id": "mic-04",
        "title": "Service Discovery (Eureka / Consul)",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Register two service instances with Eureka and have a third service call them by logical name, load-balanced.",
        "mistakes": [
          "Hardcoding service URLs/ports instead of using discovery, breaking on any redeploy",
          "Not handling the case where the discovery server itself is temporarily unavailable"
        ],
        "questions": [
          "What problem does service discovery solve in a dynamic (auto-scaling) environment?",
          "What happens to existing traffic if the discovery server goes down?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring cloud eureka service discovery",
            "url": "https://www.youtube.com/results?search_query=spring+cloud+eureka+service+discovery"
          },
          {
            "type": "article",
            "label": "Baeldung: spring cloud eureka",
            "url": "https://www.baeldung.com/?s=spring+cloud+eureka"
          }
        ]
      },
      {
        "id": "mic-05",
        "title": "API Gateway Patterns",
        "difficulty": "Intermediate",
        "hours": 3,
        "frequency": "High",
        "xp": 25,
        "exercise": "Set up Spring Cloud Gateway routing to two backend services, with a global filter that adds a correlation ID header.",
        "mistakes": [
          "Putting business logic in the gateway, turning it into a hidden second application layer",
          "Not handling gateway timeouts distinctly from backend service timeouts"
        ],
        "questions": [
          "What responsibilities belong in an API Gateway vs the services behind it?",
          "How would you add cross-cutting logging/auth at the gateway level?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring cloud gateway tutorial",
            "url": "https://www.youtube.com/results?search_query=spring+cloud+gateway+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: spring cloud gateway",
            "url": "https://www.baeldung.com/?s=spring+cloud+gateway"
          }
        ]
      },
      {
        "id": "mic-06",
        "title": "Centralized Configuration (Spring Cloud Config)",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Set up a config server backed by a git repo, and demonstrate a config refresh without redeploying the service.",
        "mistakes": [
          "Storing secrets in plain text in the config repo",
          "Not planning for config server unavailability at service startup"
        ],
        "questions": [
          "How does a service get its config refreshed without a restart?",
          "What's the fallback behavior if the config server is down when a service starts?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring cloud config server",
            "url": "https://www.youtube.com/results?search_query=spring+cloud+config+server"
          },
          {
            "type": "article",
            "label": "Baeldung: spring cloud config",
            "url": "https://www.baeldung.com/?s=spring+cloud+config"
          }
        ]
      },
      {
        "id": "mic-07",
        "title": "Resilience Patterns (Resilience4j)",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "High",
        "xp": 50,
        "exercise": "Wrap a flaky downstream call with a circuit breaker, retry, and fallback \u2014 then simulate the downstream failing and watch the breaker open.",
        "mistakes": [
          "Adding retries without backoff, hammering an already-struggling downstream service harder",
          "Setting a circuit breaker threshold so loose it never actually trips before cascading failure"
        ],
        "questions": [
          "Walk through the states of a circuit breaker: closed, open, half-open.",
          "Why can retries without backoff make an outage worse?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: resilience4j circuit breaker tutorial",
            "url": "https://www.youtube.com/results?search_query=resilience4j+circuit+breaker+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: resilience4j",
            "url": "https://www.baeldung.com/?s=resilience4j"
          },
          {
            "type": "repo",
            "label": "resilience4j/resilience4j",
            "url": "https://github.com/resilience4j/resilience4j"
          }
        ]
      },
      {
        "id": "mic-08",
        "title": "Distributed Tracing (OpenTelemetry / Zipkin)",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "Medium",
        "xp": 50,
        "exercise": "Instrument a 3-service call chain with OpenTelemetry and view the full trace in a local Zipkin/Jaeger instance.",
        "mistakes": [
          "Not propagating trace/correlation IDs across service boundaries, making a slow request impossible to diagnose",
          "Adding tracing only after an incident, instead of by default"
        ],
        "questions": [
          "Why does a trace ID need to be propagated through every hop, including async messages?",
          "How would you find which service in a chain caused a latency spike?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: opentelemetry distributed tracing java",
            "url": "https://www.youtube.com/results?search_query=opentelemetry+distributed+tracing+java"
          },
          {
            "type": "article",
            "label": "Baeldung: distributed tracing",
            "url": "https://www.baeldung.com/?s=distributed+tracing"
          }
        ]
      },
      {
        "id": "mic-09",
        "title": "Event-Driven Architecture with Kafka/RabbitMQ",
        "difficulty": "Advanced",
        "hours": 4,
        "frequency": "High",
        "xp": 50,
        "exercise": "Build a producer/consumer pair with Kafka, then intentionally cause and handle a duplicate message (idempotency).",
        "mistakes": [
          "Assuming exactly-once delivery by default without designing for idempotency",
          "Not handling poison messages, causing a consumer to crash-loop forever on one bad message"
        ],
        "questions": [
          "Why do most messaging systems guarantee at-least-once, not exactly-once, delivery?",
          "How do you design a consumer to be idempotent?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: kafka spring boot tutorial",
            "url": "https://www.youtube.com/results?search_query=kafka+spring+boot+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: kafka spring boot",
            "url": "https://www.baeldung.com/?s=kafka+spring+boot"
          },
          {
            "type": "repo",
            "label": "apache/kafka",
            "url": "https://github.com/apache/kafka"
          }
        ]
      },
      {
        "id": "mic-10",
        "title": "Saga Pattern for Distributed Transactions",
        "difficulty": "Expert",
        "hours": 4,
        "frequency": "Medium",
        "xp": 100,
        "exercise": "Design a saga (choreography or orchestration) for an order flow spanning payment, inventory, and shipping \u2014 including compensating actions.",
        "mistakes": [
          "Trying to use a traditional two-phase-commit distributed transaction across microservices (rarely practical at scale)",
          "Designing the happy path only, without compensating transactions for partial failures"
        ],
        "questions": [
          "What's the difference between choreography-based and orchestration-based sagas?",
          "How do you handle a step in a saga that fails after two prior steps already succeeded?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: saga pattern microservices explained",
            "url": "https://www.youtube.com/results?search_query=saga+pattern+microservices+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: saga pattern",
            "url": "https://www.baeldung.com/?s=saga+pattern"
          }
        ]
      },
      {
        "id": "mic-11",
        "title": "CQRS & Event Sourcing Basics",
        "difficulty": "Expert",
        "hours": 3,
        "frequency": "Low",
        "xp": 100,
        "exercise": "Sketch (and partially implement) a CQRS split for one feature: separate write model and read model, kept in sync via an event.",
        "mistakes": [
          "Applying CQRS everywhere 'because it's scalable', adding huge complexity to simple CRUD features that didn't need it",
          "Confusing event sourcing (storing state as an event log) with just publishing domain events (a much smaller commitment)"
        ],
        "questions": [
          "What's the actual problem CQRS solves that a single model doesn't?",
          "What's the tradeoff of event sourcing regarding querying current state?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: cqrs event sourcing explained",
            "url": "https://www.youtube.com/results?search_query=cqrs+event+sourcing+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: cqrs pattern",
            "url": "https://www.baeldung.com/?s=cqrs+pattern"
          }
        ]
      }
    ],
    "topicCount": 11,
    "totalHours": 32,
    "totalXp": 510
  },
  {
    "id": "devops-cloud",
    "num": "08",
    "name": "DevOps & Cloud Readiness",
    "icon": "cloud",
    "color": "#5B8DEF",
    "description": "Knowing Java isn't enough if you can't ship, deploy, and monitor what you built.",
    "project": "Containerize a multi-service app with Docker Compose, add a CI pipeline, and deploy it to a free-tier cloud VM.",
    "docs": {
      "type": "docs",
      "label": "Docker Get Started",
      "url": "https://docs.docker.com/get-started/"
    },
    "repo": {
      "type": "repo",
      "label": "docker/awesome-compose",
      "url": "https://github.com/docker/awesome-compose"
    },
    "topics": [
      {
        "id": "dev-01",
        "title": "Docker Fundamentals & Multi-Stage Builds",
        "difficulty": "Intermediate",
        "hours": 3,
        "frequency": "High",
        "xp": 25,
        "exercise": "Write a multi-stage Dockerfile for a Spring Boot app that builds with Maven and runs from a slim JRE image.",
        "mistakes": [
          "Shipping the full JDK + build tools in the runtime image instead of a multi-stage build",
          "Not using a .dockerignore, bloating build context with target/ and .git"
        ],
        "questions": [
          "Why does a multi-stage build produce a smaller, safer final image?",
          "What's the risk of running a container as root?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: docker multistage build java",
            "url": "https://www.youtube.com/results?search_query=docker+multistage+build+java"
          },
          {
            "type": "article",
            "label": "Baeldung: docker java multistage",
            "url": "https://www.baeldung.com/?s=docker+java+multistage"
          }
        ]
      },
      {
        "id": "dev-02",
        "title": "Docker Compose for Local Multi-Service Dev",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Write a docker-compose.yml running your app, a Postgres DB, and Redis together with proper service dependencies.",
        "mistakes": [
          "Not using depends_on with health checks, so the app container starts before the DB is actually ready",
          "Hardcoding container-internal hostnames as if they were localhost"
        ],
        "questions": [
          "How does service-to-service networking work inside Docker Compose?",
          "Why isn't depends_on alone enough to guarantee a dependency is ready?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: docker compose tutorial",
            "url": "https://www.youtube.com/results?search_query=docker+compose+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: docker compose",
            "url": "https://www.baeldung.com/?s=docker+compose"
          }
        ]
      },
      {
        "id": "dev-03",
        "title": "Kubernetes Core Concepts",
        "difficulty": "Advanced",
        "hours": 4,
        "frequency": "High",
        "xp": 50,
        "exercise": "Deploy the same containerized app to a local Kubernetes cluster (minikube/kind) with a Deployment and a Service.",
        "mistakes": [
          "Confusing a Pod with a container \u2014 a Pod can hold multiple containers",
          "Not setting resource requests/limits, letting one pod starve others on the same node"
        ],
        "questions": [
          "What's the difference between a Deployment and a ReplicaSet?",
          "Why do resource requests/limits matter for scheduling?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: kubernetes tutorial for beginners",
            "url": "https://www.youtube.com/results?search_query=kubernetes+tutorial+for+beginners"
          },
          {
            "type": "article",
            "label": "Baeldung: kubernetes basics",
            "url": "https://www.baeldung.com/?s=kubernetes+basics"
          }
        ]
      },
      {
        "id": "dev-04",
        "title": "CI/CD Pipeline (GitHub Actions)",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "High",
        "xp": 25,
        "exercise": "Build a GitHub Actions workflow that runs tests, builds a Docker image, and pushes it on every merge to main.",
        "mistakes": [
          "Not caching dependencies, making every CI run painfully slow",
          "Deploying straight from CI without a staging/approval gate for production"
        ],
        "questions": [
          "What's the difference between continuous delivery and continuous deployment?",
          "How would you speed up a slow CI pipeline?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: github actions ci cd java",
            "url": "https://www.youtube.com/results?search_query=github+actions+ci+cd+java"
          },
          {
            "type": "article",
            "label": "Baeldung: github actions spring boot",
            "url": "https://www.baeldung.com/?s=github+actions+spring+boot"
          }
        ]
      },
      {
        "id": "dev-05",
        "title": "AWS Basics: EC2, RDS, S3, IAM",
        "difficulty": "Intermediate",
        "hours": 3,
        "frequency": "High",
        "xp": 25,
        "exercise": "Deploy a Spring Boot app to an EC2 instance connected to an RDS database, with an IAM role instead of hardcoded credentials.",
        "mistakes": [
          "Hardcoding AWS access keys in application config instead of using IAM roles",
          "Leaving an S3 bucket public without understanding the access policy implications"
        ],
        "questions": [
          "Why is an IAM role preferred over static access keys for an app running on EC2?",
          "What's the principle of least privilege, applied to IAM policies?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: aws ec2 rds spring boot deploy",
            "url": "https://www.youtube.com/results?search_query=aws+ec2+rds+spring+boot+deploy"
          },
          {
            "type": "article",
            "label": "Baeldung: aws spring boot deployment",
            "url": "https://www.baeldung.com/?s=aws+spring+boot+deployment"
          }
        ]
      },
      {
        "id": "dev-06",
        "title": "Monitoring with Prometheus + Grafana",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "Medium",
        "xp": 50,
        "exercise": "Expose custom metrics from a Spring Boot app via Micrometer, scrape them with Prometheus, and build one Grafana dashboard.",
        "mistakes": [
          "Only monitoring infrastructure metrics (CPU/memory) and ignoring application-level metrics (request latency, error rate)",
          "Setting alert thresholds so tight they generate constant noise, teaching people to ignore alerts"
        ],
        "questions": [
          "What's the difference between a counter, gauge, and histogram metric?",
          "How would you design an alert that avoids being noisy?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: prometheus grafana spring boot",
            "url": "https://www.youtube.com/results?search_query=prometheus+grafana+spring+boot"
          },
          {
            "type": "article",
            "label": "Baeldung: micrometer prometheus",
            "url": "https://www.baeldung.com/?s=micrometer+prometheus"
          }
        ]
      },
      {
        "id": "dev-07",
        "title": "Centralized Logging (ELK / Loki)",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Ship structured JSON logs from a multi-container app into a local ELK or Loki stack and search across services by correlation ID.",
        "mistakes": [
          "Logging unstructured plain text, making cross-service searching nearly impossible",
          "Logging sensitive data (passwords, tokens, PII) in plaintext logs"
        ],
        "questions": [
          "Why is structured (JSON) logging important in a microservices setup?",
          "How would you correlate a single user request across multiple services in your logs?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: elk stack tutorial",
            "url": "https://www.youtube.com/results?search_query=elk+stack+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: centralized logging microservices",
            "url": "https://www.baeldung.com/?s=centralized+logging+microservices"
          }
        ]
      }
    ],
    "topicCount": 7,
    "totalHours": 19,
    "totalXp": 225
  },
  {
    "id": "system-design",
    "num": "09",
    "name": "System Design & Scalability",
    "icon": "layers",
    "color": "#F5A623",
    "description": "This is the interview round \u2014 and the real-world skill \u2014 that separates senior engineers from everyone else.",
    "project": "Design and partially prototype a URL shortener that can handle 10M writes/day: schema, caching, sharding strategy.",
    "docs": {
      "type": "docs",
      "label": "system-design-primer (GitHub)",
      "url": "https://github.com/donnemartin/system-design-primer"
    },
    "repo": {
      "type": "repo",
      "label": "donnemartin/system-design-primer",
      "url": "https://github.com/donnemartin/system-design-primer"
    },
    "topics": [
      {
        "id": "sys-01",
        "title": "Load Balancing Strategies",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "High",
        "xp": 25,
        "exercise": "Compare round-robin, least-connections, and consistent hashing on paper for a stateful vs stateless service.",
        "mistakes": [
          "Assuming round-robin is always fine, even when backend instances have very different capacities",
          "Forgetting sticky sessions break horizontal scaling assumptions if not designed for"
        ],
        "questions": [
          "When would consistent hashing be preferred over round-robin?",
          "How does a load balancer detect and route around an unhealthy instance?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: load balancing algorithms explained",
            "url": "https://www.youtube.com/results?search_query=load+balancing+algorithms+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: load balancing",
            "url": "https://www.baeldung.com/?s=load+balancing"
          }
        ]
      },
      {
        "id": "sys-02",
        "title": "Caching Strategies at Scale",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "High",
        "xp": 50,
        "exercise": "Design the caching layer for a news feed: what's cached, where, TTL, and how invalidation happens on a new post.",
        "mistakes": [
          "Caching everything with the same TTL regardless of how often the data actually changes",
          "Not planning for cache stampede when a hot key expires under high concurrent load"
        ],
        "questions": [
          "Compare cache-aside, write-through, and write-behind caching.",
          "How do you prevent a cache stampede on a popular key's expiry?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: caching strategies system design",
            "url": "https://www.youtube.com/results?search_query=caching+strategies+system+design"
          },
          {
            "type": "article",
            "label": "Baeldung: caching strategies",
            "url": "https://www.baeldung.com/?s=caching+strategies"
          }
        ]
      },
      {
        "id": "sys-03",
        "title": "Database Sharding & Replication",
        "difficulty": "Expert",
        "hours": 3,
        "frequency": "Medium",
        "xp": 100,
        "exercise": "Design a sharding key for a multi-tenant SaaS database and identify the query patterns that would break across shards.",
        "mistakes": [
          "Choosing a shard key that causes hot-spotting (e.g. sequential IDs all landing on one shard)",
          "Assuming replication solves write scaling \u2014 it only helps reads"
        ],
        "questions": [
          "Why does replication help read scaling but not write scaling?",
          "What makes a good sharding key?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: database sharding replication explained",
            "url": "https://www.youtube.com/results?search_query=database+sharding+replication+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: database sharding",
            "url": "https://www.baeldung.com/?s=database+sharding"
          }
        ]
      },
      {
        "id": "sys-04",
        "title": "CAP Theorem & Consistency Models",
        "difficulty": "Advanced",
        "hours": 2,
        "frequency": "High",
        "xp": 50,
        "exercise": "Classify 3 real systems you've used (a bank ledger, a social feed, a DNS system) by where they land on the CAP tradeoff, and justify it.",
        "mistakes": [
          "Treating CAP as 'pick exactly one of three' instead of understanding it's about tradeoffs during a network partition specifically",
          "Assuming eventual consistency is always 'wrong' instead of a deliberate, often correct, tradeoff"
        ],
        "questions": [
          "Explain CAP theorem precisely \u2014 what does it actually claim?",
          "Give a real example where eventual consistency is the right choice."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: cap theorem explained simply",
            "url": "https://www.youtube.com/results?search_query=cap+theorem+explained+simply"
          },
          {
            "type": "article",
            "label": "Baeldung: cap theorem",
            "url": "https://www.baeldung.com/?s=cap+theorem"
          }
        ]
      },
      {
        "id": "sys-05",
        "title": "Design Exercise: Rate Limiter",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "High",
        "xp": 50,
        "exercise": "Design a distributed rate limiter for an API gateway serving millions of requests/day \u2014 algorithm, storage, and failure mode.",
        "mistakes": [
          "Designing a rate limiter that works on one instance but not across a distributed fleet",
          "Not considering what happens when the shared state store (e.g. Redis) itself is briefly unavailable"
        ],
        "questions": [
          "Compare token bucket vs sliding window log for rate limiting.",
          "What should happen to your rate limiter if Redis goes down for 5 seconds?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: design rate limiter system design interview",
            "url": "https://www.youtube.com/results?search_query=design+rate+limiter+system+design+interview"
          },
          {
            "type": "article",
            "label": "Baeldung: rate limiter system design",
            "url": "https://www.baeldung.com/?s=rate+limiter+system+design"
          }
        ]
      },
      {
        "id": "sys-06",
        "title": "Design Exercise: URL Shortener",
        "difficulty": "Intermediate",
        "hours": 3,
        "frequency": "High",
        "xp": 25,
        "exercise": "Design the full system: schema, ID generation strategy, read/write path, and caching \u2014 then estimate storage for 1B URLs.",
        "mistakes": [
          "Using auto-increment IDs naively without considering collision/predictability concerns",
          "Not accounting for the read-heavy nature (redirects vastly outnumber shortens) in the caching design"
        ],
        "questions": [
          "How would you generate short, unique, non-sequential IDs at scale?",
          "Why is this system almost always read-heavy, and how does that shape your design?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: design url shortener system design interview",
            "url": "https://www.youtube.com/results?search_query=design+url+shortener+system+design+interview"
          },
          {
            "type": "article",
            "label": "Baeldung: url shortener system design",
            "url": "https://www.baeldung.com/?s=url+shortener+system+design"
          }
        ]
      },
      {
        "id": "sys-07",
        "title": "Design Exercise: Notification System",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "Medium",
        "xp": 50,
        "exercise": "Design a system that fans out a single event (e.g. 'order shipped') to email, push, and SMS \u2014 with retries and delivery tracking.",
        "mistakes": [
          "Coupling notification delivery directly into the request path of the triggering action, slowing it down",
          "Not designing for partial failure \u2014 one channel failing shouldn't block the others"
        ],
        "questions": [
          "How would you decouple the triggering event from actual notification delivery?",
          "How do you track and retry a failed notification without duplicating successful ones?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: design notification system interview",
            "url": "https://www.youtube.com/results?search_query=design+notification+system+interview"
          },
          {
            "type": "article",
            "label": "Baeldung: notification system design",
            "url": "https://www.baeldung.com/?s=notification+system+design"
          }
        ]
      },
      {
        "id": "sys-08",
        "title": "Design Exercise: E-Commerce Order Flow",
        "difficulty": "Expert",
        "hours": 4,
        "frequency": "High",
        "xp": 100,
        "exercise": "Design the order-placement flow across inventory, payment, and shipping services \u2014 including what happens when payment succeeds but inventory reservation fails.",
        "mistakes": [
          "Designing only the happy path and hand-waving 'we'll handle failures later'",
          "Not distinguishing between a hard inventory reservation and a soft one, causing overselling under concurrent load"
        ],
        "questions": [
          "Walk through what happens, step by step, if payment succeeds but the shipping service is down.",
          "How would you prevent overselling the last unit of a popular item under concurrent orders?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: design e-commerce system interview",
            "url": "https://www.youtube.com/results?search_query=design+e-commerce+system+interview"
          },
          {
            "type": "article",
            "label": "Baeldung: ecommerce system design",
            "url": "https://www.baeldung.com/?s=ecommerce+system+design"
          }
        ]
      }
    ],
    "topicCount": 8,
    "totalHours": 23,
    "totalXp": 450
  },
  {
    "id": "capstone-interview",
    "num": "10",
    "name": "Capstone Projects & Interview Prep",
    "icon": "trophy",
    "color": "#FFB84D",
    "description": "Where everything gets proven \u2014 real projects, real interviews, no more theory.",
    "project": "Ship two portfolio-quality projects and run at least 3 mock interviews before applying anywhere.",
    "docs": {
      "type": "docs",
      "label": "system-design-primer",
      "url": "https://github.com/donnemartin/system-design-primer"
    },
    "repo": {
      "type": "repo",
      "label": "NeetCode Roadmap",
      "url": "https://neetcode.io/roadmap"
    },
    "topics": [
      {
        "id": "cap-01",
        "title": "Capstone 1: Microservices E-Commerce/Booking Platform",
        "difficulty": "Expert",
        "hours": 20,
        "frequency": "High",
        "xp": 100,
        "exercise": "Ship a real multi-service app end to end: auth, catalog/inventory service, order service, gateway, containerized, deployed.",
        "mistakes": [
          "Building it as a monolith and calling it 'microservices' because it has multiple modules",
          "Never deploying it anywhere \u2014 a project only running on localhost is much less convincing to an interviewer"
        ],
        "questions": [
          "Be ready to explain every architectural decision you made and what you'd change with more time.",
          "Be ready to explain how a request flows through your entire system, service by service."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: full stack java microservices project tutorial",
            "url": "https://www.youtube.com/results?search_query=full+stack+java+microservices+project+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: microservices project",
            "url": "https://www.baeldung.com/?s=microservices+project"
          }
        ]
      },
      {
        "id": "cap-02",
        "title": "Capstone 2: Real-Time Notification/Chat System",
        "difficulty": "Expert",
        "hours": 15,
        "frequency": "High",
        "xp": 100,
        "exercise": "Build a WebSocket-based real-time feature (chat or live notifications) backed by Spring, with message persistence.",
        "mistakes": [
          "Not handling reconnection/dropped-connection scenarios, which happen constantly in real usage",
          "Skipping message persistence, losing data on a server restart"
        ],
        "questions": [
          "How does WebSocket differ from a request/response HTTP model at the protocol level?",
          "How would you scale WebSocket connections across multiple server instances?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring boot websocket chat tutorial",
            "url": "https://www.youtube.com/results?search_query=spring+boot+websocket+chat+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: spring boot websocket",
            "url": "https://www.baeldung.com/?s=spring+boot+websocket"
          }
        ]
      },
      {
        "id": "cap-03",
        "title": "DSA Practice \u2014 Patterns, Not Grinding",
        "difficulty": "Intermediate",
        "hours": 20,
        "frequency": "High",
        "xp": 25,
        "exercise": "Work through the core patterns (two pointers, sliding window, BFS/DFS, DP) with 3-5 problems each rather than random grinding.",
        "mistakes": [
          "Grinding hundreds of random problems without recognizing the ~15 underlying patterns they map to",
          "Memorizing solutions instead of being able to derive the approach under interview pressure"
        ],
        "questions": [
          "Be ready to think out loud through an unfamiliar problem, not just recite a memorized solution.",
          "Be ready to state and justify the time/space complexity of your solution."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: neetcode 150 patterns",
            "url": "https://www.youtube.com/results?search_query=neetcode+150+patterns"
          },
          {
            "type": "article",
            "label": "Baeldung: leetcode patterns",
            "url": "https://www.baeldung.com/?s=leetcode+patterns"
          }
        ]
      },
      {
        "id": "cap-04",
        "title": "Mock System Design Interviews",
        "difficulty": "Advanced",
        "hours": 6,
        "frequency": "High",
        "xp": 50,
        "exercise": "Run at least 3 mock system design interviews (with a peer, mentor, or structured self-practice) and record what you'd improve.",
        "mistakes": [
          "Jumping straight to a detailed design without first clarifying requirements and scale with the interviewer",
          "Designing in silence instead of narrating your reasoning, which is what's actually being evaluated"
        ],
        "questions": [
          "Be ready to clarify scope and scale before designing anything.",
          "Be ready to defend tradeoffs when the interviewer pushes back on a choice."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: mock system design interview",
            "url": "https://www.youtube.com/results?search_query=mock+system+design+interview"
          },
          {
            "type": "article",
            "label": "Baeldung: system design interview prep",
            "url": "https://www.baeldung.com/?s=system+design+interview+prep"
          }
        ]
      },
      {
        "id": "cap-05",
        "title": "Behavioral / STAR-Method Prep",
        "difficulty": "Beginner",
        "hours": 4,
        "frequency": "High",
        "xp": 10,
        "exercise": "Prepare 5-6 STAR stories (Situation, Task, Action, Result) covering conflict, failure, leadership, and a technical deep-dive.",
        "mistakes": [
          "Preparing vague, generic answers that don't include specific numbers or outcomes",
          "Not preparing a genuine failure story \u2014 'I don't really have any weaknesses' reads as unprepared, not strong"
        ],
        "questions": [
          "Be ready to describe a time you disagreed with a technical decision and what you did.",
          "Be ready to describe a project failure and what you changed afterward."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: star method interview answers",
            "url": "https://www.youtube.com/results?search_query=star+method+interview+answers"
          },
          {
            "type": "article",
            "label": "Baeldung: behavioral interview prep",
            "url": "https://www.baeldung.com/?s=behavioral+interview+prep"
          }
        ]
      },
      {
        "id": "cap-06",
        "title": "Resume & GitHub Portfolio Polish",
        "difficulty": "Beginner",
        "hours": 3,
        "frequency": "High",
        "xp": 10,
        "exercise": "Rewrite your resume bullets to lead with impact/metrics, and clean up your GitHub so your best 2-3 repos are pinned and well-documented.",
        "mistakes": [
          "Listing technologies used instead of what you built and what impact it had",
          "Leaving unfinished, uncommented, README-less projects as the first thing an interviewer sees on your profile"
        ],
        "questions": [
          "Be ready to walk through any line on your resume in detail \u2014 nothing should be there you can't defend.",
          "Be ready to explain a technical decision visible in your pinned repo's code."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: tech resume tips",
            "url": "https://www.youtube.com/results?search_query=tech+resume+tips"
          },
          {
            "type": "article",
            "label": "Baeldung: developer portfolio tips",
            "url": "https://www.baeldung.com/?s=developer+portfolio+tips"
          }
        ]
      },
      {
        "id": "cap-07",
        "title": "Optional: One Real Open-Source Contribution",
        "difficulty": "Intermediate",
        "hours": 6,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Find a 'good first issue' on a Java/Spring project you actually use, and get one real PR merged.",
        "mistakes": [
          "Only opening trivial typo-fix PRs to pad a contributions graph, without engaging with real code",
          "Not reading the project's contribution guidelines before opening a PR, causing avoidable back-and-forth"
        ],
        "questions": [
          "Be ready to explain what the change did and why the maintainers accepted your approach.",
          "Be ready to describe how you navigated an unfamiliar codebase to make the change."
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: first open source contribution guide",
            "url": "https://www.youtube.com/results?search_query=first+open+source+contribution+guide"
          },
          {
            "type": "article",
            "label": "Baeldung: open source contribution guide",
            "url": "https://www.baeldung.com/?s=open+source+contribution+guide"
          }
        ]
      },
      {
        "id": "cap-08",
        "title": "Interview Prep Question Bank",
        "difficulty": "Intermediate",
        "hours": 5,
        "frequency": "High",
        "xp": 25,
        "exercise": "Review and practice the most important backend interview question topics with labeled sections.",
        "mistakes": [
          "Studying questions without grouping them into clear topic areas",
          "Trying to memorize answers instead of practicing concise explanations"
        ],
        "questionSections": [
          {
            "label": "Design Principles & Design Patterns",
            "groups": [
              {
                "tag": "Easy",
                "questions": [
                  "What do the SOLID principles stand for?",
                  "Why are DRY and KISS important in software design?",
                  "What problem does the Factory Pattern solve?",
                  "When should you use the Singleton Design Pattern?",
                  "What does the Strategy Pattern do?",
                  "What is the Observer Pattern used for?",
                  "How does the Adapter Pattern simplify integration?",
                  "Why is loose coupling important in object-oriented design?",
                  "What is the difference between composition and inheritance?",
                  "What does cohesion mean in a class or module?"
                ]
              },
              {
                "tag": "Medium",
                "questions": [
                  "How do SOLID principles improve maintainability?",
                  "Give an example of breaking the DRY principle and its impact.",
                  "Compare the Factory Pattern and the Builder Pattern.",
                  "How do you implement a thread-safe Singleton in Java?",
                  "When is Strategy Pattern better than if/else branching?",
                  "What are the pros and cons of the Observer Pattern?",
                  "Describe a real use case for the Adapter Pattern.",
                  "How do you apply the Open/Closed Principle in practice?",
                  "What is a violation of the Liskov Substitution Principle?",
                  "How does Dependency Inversion help testability?"
                ]
              },
              {
                "tag": "Hard",
                "questions": [
                  "How would you refactor a large class that violates multiple SOLID principles?",
                  "Explain how DRY can conflict with KISS and how to balance them.",
                  "Design a flexible plugin system using design patterns.",
                  "What pitfalls arise when using Singleton in distributed systems?",
                  "How can the Strategy Pattern be combined with Java lambdas?",
                  "How do you avoid memory leaks with the Observer Pattern?",
                  "Compare Adapter to Facade and Decorator patterns.",
                  "Explain how to apply the Open/Closed Principle in a modular system.",
                  "How can you enforce Dependency Inversion in a legacy codebase?",
                  "What are the limits of pattern overuse in clean architecture?"
                ]
              }
            ]
          },
          {
            "label": "Java Collections",
            "groups": [
              {
                "tag": "Easy",
                "questions": [
                  "What are the main interfaces in the Java Collections Framework?",
                  "When should you use ArrayList instead of LinkedList?",
                  "What is the difference between List and Set?",
                  "What does HashMap store internally?",
                  "How does HashSet prevent duplicates?",
                  "Why is ConcurrentHashMap used?",
                  "What are the common collection iteration options in Java?",
                  "What is the difference between Queue and Deque?",
                  "When would you use TreeMap instead of HashMap?",
                  "What does Collections.unmodifiableList do?"
                ]
              },
              {
                "tag": "Medium",
                "questions": [
                  "How does HashMap compute bucket index from a key?",
                  "What happens inside HashSet when two objects have the same hash code?",
                  "How does ConcurrentHashMap achieve thread safety?",
                  "What is fail-fast iteration and which collections support it?",
                  "How does ArrayList grow when it runs out of capacity?",
                  "What is the difference between HashMap and LinkedHashMap?",
                  "How do you choose between ConcurrentHashMap and Collections.synchronizedMap?",
                  "What is the cost of containsKey on a HashMap?",
                  "How does TreeSet maintain sorted order?",
                  "Why is ConcurrentSkipListMap useful in concurrent applications?"
                ]
              },
              {
                "tag": "Hard",
                "questions": [
                  "Explain HashMap resize behavior and rehashing cost.",
                  "How do hash collisions affect HashMap performance?",
                  "What is the difference between ConcurrentHashMap segmentation and bucket locking?",
                  "How does Java 8's HashMap treeify buckets?",
                  "How would you implement a custom collection with predictable iteration order?",
                  "How does CopyOnWriteArrayList behave under heavy writes?",
                  "What are the tradeoffs of using WeakHashMap?",
                  "How do you debug memory issues caused by collections?",
                  "Why is identityHashMap different from HashMap?",
                  "How does a LinkedHashMap preserve insertion order?"
                ]
              }
            ]
          },
          {
            "label": "Spring & Transactions",
            "groups": [
              {
                "tag": "Easy",
                "questions": [
                  "What is the purpose of the @Transactional annotation?",
                  "What is a transaction in Spring?",
                  "What does propagation behavior control?",
                  "What is the default rollback policy in @Transactional?",
                  "What does isolation level mean?",
                  "How do you declare a transaction on a service method?",
                  "What is a transaction manager in Spring?",
                  "Can @Transactional be applied to a class?",
                  "What does read-only=true mean in @Transactional?",
                  "What is the difference between @Component and @Service?"
                ]
              },
              {
                "tag": "Medium",
                "questions": [
                  "Can @Transactional be applied to private or static methods?",
                  "How does Spring proxy-based transaction management work?",
                  "What exceptions trigger rollback by default?",
                  "How do you change rollback behavior for checked exceptions?",
                  "What is transaction propagation REQUIRED vs REQUIRES_NEW?",
                  "How does isolation level affect phantom reads?",
                  "What is the role of PlatformTransactionManager?",
                  "Why should transactional methods be public?",
                  "How does transaction synchronization work with the persistence context?",
                  "What issues arise when calling a @Transactional method from the same class?"
                ]
              },
              {
                "tag": "Hard",
                "questions": [
                  "How does Spring manage transactions across multiple data sources?",
                  "Explain the difference between local and global transactions.",
                  "How do nested transactions behave in Spring?",
                  "What are the implications of transaction boundaries in microservices?",
                  "How do you handle long-running transactions in a Spring application?",
                  "What does isolation=SERIALIZABLE do and when should you use it?",
                  "How can you use TransactionTemplate instead of @Transactional?",
                  "What are common pitfalls when using @Transactional with async methods?",
                  "How does the persistence context flush interact with transactions?",
                  "How do you test transactional behavior in Spring Boot?"
                ]
              }
            ]
          },
          {
            "label": "Singleton Design Pattern",
            "groups": [
              {
                "tag": "Easy",
                "questions": [
                  "What is a Singleton?",
                  "When is a Singleton useful?",
                  "How do you create a Singleton in Java?",
                  "What is eager initialization for a Singleton?",
                  "What is lazy initialization for a Singleton?",
                  "Why is thread safety important for Singleton?",
                  "What is the Enum Singleton approach?",
                  "What is a Spring singleton bean scope?",
                  "How is Spring singleton different from a Java singleton?",
                  "When should you not use the Singleton pattern?"
                ]
              },
              {
                "tag": "Medium",
                "questions": [
                  "How do you implement a thread-safe Singleton using double-checked locking?",
                  "Why is volatile needed in a double-checked locking Singleton?",
                  "How does the Enum Singleton avoid serialization issues?",
                  "How does Spring manage singleton beans by default?",
                  "Can Spring singleton beans have prototype dependencies?",
                  "What are the lifecycle differences between Java singleton and Spring singleton?",
                  "How do you test a Singleton class?",
                  "What is the Bill Pugh Singleton implementation?",
                  "How can Singleton cause hidden dependencies in code?",
                  "How do you avoid global state problems with Singletons?"
                ]
              },
              {
                "tag": "Hard",
                "questions": [
                  "How does classloader behavior affect Singleton instances?",
                  "What happens to Singleton during serialization and deserialization?",
                  "How do you make a Singleton safe in a clustered environment?",
                  "Explain the difference between Spring singleton scope and application scope.",
                  "How can lazy initialization of a Singleton impact performance?",
                  "What are the implications of Singleton on test isolation?",
                  "How do you refactor a Singleton-heavy design to improve modularity?",
                  "In what cases is a Spring singleton bean not actually a JVM singleton?",
                  "How does CDI/Java EE singleton differ from Spring singleton?",
                  "How do you use @Scope(\"prototype\") inside a singleton bean safely?"
                ]
              }
            ]
          },
          {
            "label": "Coding Question",
            "groups": [
              {
                "tag": "Easy",
                "questions": [
                  "How do you filter a List<Employee> by experience using Java Streams?",
                  "How do you sort employees by salary in ascending order?",
                  "How do you sort employees by salary in descending order?",
                  "How do you map Employee objects to a list of names?",
                  "What is the difference between filter and map in streams?",
                  "How do you find the highest salary in a list of employees?",
                  "How would you calculate the average salary using streams?",
                  "How do you collect stream results into a List?",
                  "What is a Predicate in Java and how is it used?",
                  "How do you perform a basic null-safe stream operation?"
                ]
              },
              {
                "tag": "Medium",
                "questions": [
                  "How do you filter employees using multiple criteria?",
                  "How do you group employees by experience level?",
                  "How do you use Comparator.comparing for sorting?",
                  "How do you build a custom comparator for salary then experience?",
                  "How do you handle optional values returned by stream operations?",
                  "How do you convert a stream to a Map keyed by employee ID?",
                  "How would you use Collectors.partitioningBy on employee salary?",
                  "How do you implement pagination on a list with streams?",
                  "How do you filter and sort employees in one stream pipeline?",
                  "How do you avoid modifying the original list when filtering?"
                ]
              },
              {
                "tag": "Hard",
                "questions": [
                  "How do you implement a stable sort across multiple employee fields?",
                  "How do you design a reusable filter specification for employees?",
                  "How would you process a large employee list without loading all entries into memory?",
                  "What are the performance implications of parallel streams on employee filtering?",
                  "How do you create a comparator that handles null salary values?",
                  "How do you use Collector.of to build a custom result structure?",
                  "How would you implement a dynamic sort order based on user input?",
                  "How do you design an employee filter that supports salary ranges and experience bands?",
                  "How do you test stream-based employee filtering logic?",
                  "What are common pitfalls when using streams with mutable state?"
                ]
              }
            ]
          },
          {
            "label": "Backend Interview Topics",
            "groups": [
              {
                "tag": "Easy",
                "questions": [
                  "What is the difference between HashMap and ConcurrentHashMap?",
                  "What are Virtual Threads in Java?",
                  "What is the Java Memory Model?",
                  "How is String different from StringBuilder?",
                  "How is StringBuilder different from StringBuffer?",
                  "What is Optional used for?",
                  "What is the difference between Runnable and Callable?",
                  "What is a REST API?",
                  "What does HTTP status 200 mean?",
                  "What is a Spring Boot application?"
                ]
              },
              {
                "tag": "Medium",
                "questions": [
                  "How do virtual threads improve concurrency?",
                  "How do you optimize Spring Boot startup time?",
                  "What is the role of a controller in Spring MVC?",
                  "How do you handle global exceptions in Spring Boot?",
                  "What HTTP methods are used for REST CRUD operations?",
                  "How does Kafka fit into a microservices architecture?",
                  "What SQL optimization techniques have you used?",
                  "How do you design an endpoint for idempotent operations?",
                  "How does the Java Memory Model affect multi-threaded code?",
                  "How do you use Swagger/OpenAPI in Spring Boot?"
                ]
              },
              {
                "tag": "Hard",
                "questions": [
                  "How do you diagnose and fix a Spring Boot memory leak?",
                  "How do virtual threads impact existing thread-local usage?",
                  "How would you design a Kafka-based event-driven backend?",
                  "How do you scale REST APIs across multiple instances?",
                  "What are best practices for database indexing in backend services?",
                  "How do you secure REST endpoints in Spring Boot?",
                  "How do you manage schema migrations in a microservices environment?",
                  "What are the tradeoffs between synchronous and asynchronous communication?",
                  "How do you monitor and trace requests across microservices?",
                  "What are the risks of using global exception handlers in Spring Boot?"
                ]
              }
            ]
          }
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: interview prep for backend developers",
            "url": "https://www.youtube.com/results?search_query=backend+interview+prep"
          },
          {
            "type": "article",
            "label": "Baeldung: interview preparation for Java developers",
            "url": "https://www.baeldung.com/?s=java+interview+preparation"
          }
        ]
      }
    ],
    "topicCount": 8,
    "totalHours": 79,
    "totalXp": 345
  },
  {
    "id": "ai-integration",
    "num": "11",
    "name": "AI Integration for Backend Engineers",
    "icon": "sparkles",
    "color": "#B983FF",
    "description": "The newest hard requirement \u2014 teams want backend engineers who can wire LLMs into real, production services.",
    "project": "Build a RAG-powered support endpoint: ingest docs into a vector store, retrieve relevant chunks, and generate grounded answers via Spring AI.",
    "docs": {
      "type": "docs",
      "label": "Spring AI Reference Docs",
      "url": "https://docs.spring.io/spring-ai/reference/"
    },
    "repo": {
      "type": "repo",
      "label": "spring-ai-community/awesome-spring-ai",
      "url": "https://github.com/spring-ai-community/awesome-spring-ai"
    },
    "topics": [
      {
        "id": "ai-01",
        "title": "LLM Fundamentals: Tokens, Context Windows, Prompting",
        "difficulty": "Beginner",
        "hours": 2,
        "frequency": "High",
        "xp": 10,
        "exercise": "Send the same task to a model with a vague prompt vs a precise, structured prompt and compare output quality.",
        "mistakes": [
          "Assuming a bigger context window means you should stuff in everything 'just in case' \u2014 it costs money and can hurt accuracy",
          "Not accounting for token cost when designing a feature that calls an LLM per request"
        ],
        "questions": [
          "Why does prompt structure meaningfully affect output quality and consistency?",
          "How would you estimate the token cost of a feature before shipping it?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: llm prompting fundamentals for developers",
            "url": "https://www.youtube.com/results?search_query=llm+prompting+fundamentals+for+developers"
          },
          {
            "type": "article",
            "label": "Baeldung: llm prompt engineering",
            "url": "https://www.baeldung.com/?s=llm+prompt+engineering"
          }
        ]
      },
      {
        "id": "ai-02",
        "title": "Spring AI ChatClient & the Advisors API",
        "difficulty": "Intermediate",
        "hours": 3,
        "frequency": "High",
        "xp": 25,
        "exercise": "Wire a ChatClient bean into a REST endpoint, then add an Advisor that injects conversation memory across requests.",
        "mistakes": [
          "Instantiating a new client/config per request instead of configuring it once as a Spring bean",
          "Not handling provider timeouts/errors, letting an LLM outage take down an unrelated endpoint"
        ],
        "questions": [
          "What does the Advisors API let you intercept in a Spring AI request/response flow?",
          "How would you add a timeout and fallback for an LLM call in a Spring service?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring ai chatclient tutorial",
            "url": "https://www.youtube.com/results?search_query=spring+ai+chatclient+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: spring ai tutorial",
            "url": "https://www.baeldung.com/?s=spring+ai+tutorial"
          }
        ]
      },
      {
        "id": "ai-03",
        "title": "Function/Tool Calling",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "High",
        "xp": 50,
        "exercise": "Expose a Java method (e.g. 'checkOrderStatus') as a callable tool the LLM can invoke, and trace a full tool-call round trip.",
        "mistakes": [
          "Exposing a tool with no input validation, trusting whatever arguments the model generates",
          "Giving the model tools with overlapping, ambiguous purposes, causing it to pick the wrong one"
        ],
        "questions": [
          "Walk through what actually happens on the wire during a tool call.",
          "Why does a tool function still need input validation even though 'the AI generated it'?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring ai function calling tutorial",
            "url": "https://www.youtube.com/results?search_query=spring+ai+function+calling+tutorial"
          },
          {
            "type": "article",
            "label": "Baeldung: llm function calling java",
            "url": "https://www.baeldung.com/?s=llm+function+calling+java"
          }
        ]
      },
      {
        "id": "ai-04",
        "title": "Structured Output",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Map an LLM's response directly to a Java record and handle the case where the model returns malformed JSON.",
        "mistakes": [
          "Not handling occasional malformed structured output \u2014 even good models fail sometimes",
          "Designing an overly complex nested record schema that increases parse failure rate"
        ],
        "questions": [
          "How does Spring AI generate a schema from a Java record to guide the model's output?",
          "What's your fallback when the model returns output that doesn't match the expected schema?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: spring ai structured output records",
            "url": "https://www.youtube.com/results?search_query=spring+ai+structured+output+records"
          },
          {
            "type": "article",
            "label": "Baeldung: llm structured output java",
            "url": "https://www.baeldung.com/?s=llm+structured+output+java"
          }
        ]
      },
      {
        "id": "ai-05",
        "title": "RAG Pipelines: Embeddings & Vector Stores",
        "difficulty": "Advanced",
        "hours": 4,
        "frequency": "High",
        "xp": 50,
        "exercise": "Ingest a small document set into pgvector, embed a user query, retrieve top-k chunks, and feed them into the prompt.",
        "mistakes": [
          "Chunking documents without regard to semantic boundaries, splitting a single idea across chunks",
          "Not re-ranking or filtering retrieved chunks, feeding irrelevant context to the model"
        ],
        "questions": [
          "Why does RAG reduce hallucination compared to relying on the model's training data alone?",
          "What's the impact of chunk size on retrieval quality?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: rag tutorial spring ai vector database",
            "url": "https://www.youtube.com/results?search_query=rag+tutorial+spring+ai+vector+database"
          },
          {
            "type": "article",
            "label": "Baeldung: retrieval augmented generation java",
            "url": "https://www.baeldung.com/?s=retrieval+augmented+generation+java"
          }
        ]
      },
      {
        "id": "ai-06",
        "title": "Model Context Protocol (MCP)",
        "difficulty": "Advanced",
        "hours": 3,
        "frequency": "Medium",
        "xp": 50,
        "exercise": "Stand up a minimal MCP server exposing one tool, and connect it to an MCP-compatible client to call it end to end.",
        "mistakes": [
          "Treating MCP as just another REST API instead of understanding its tool-discovery/schema model",
          "Exposing overly broad tools (e.g. raw DB access) through MCP without scoping permissions"
        ],
        "questions": [
          "What problem does MCP solve that a custom API integration per tool doesn't?",
          "How would you scope an MCP tool so it can't perform unintended actions?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: model context protocol mcp explained",
            "url": "https://www.youtube.com/results?search_query=model+context+protocol+mcp+explained"
          },
          {
            "type": "article",
            "label": "Baeldung: model context protocol tutorial",
            "url": "https://www.baeldung.com/?s=model+context+protocol+tutorial"
          }
        ]
      },
      {
        "id": "ai-07",
        "title": "Agentic Patterns",
        "difficulty": "Expert",
        "hours": 4,
        "frequency": "Medium",
        "xp": 100,
        "exercise": "Build a simple multi-step agent that plans, calls a tool, observes the result, and decides the next step \u2014 not just one LLM call.",
        "mistakes": [
          "Letting an agent loop indefinitely with no step limit or cost cap",
          "Giving an agent too much autonomy over side-effecting actions (payments, deletions) without a human-approval gate"
        ],
        "questions": [
          "What distinguishes an 'agent' from a single-shot LLM call?",
          "How would you put safety rails around an agent that can take real actions?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: ai agents tutorial java",
            "url": "https://www.youtube.com/results?search_query=ai+agents+tutorial+java"
          },
          {
            "type": "article",
            "label": "Baeldung: llm agent patterns",
            "url": "https://www.baeldung.com/?s=llm+agent+patterns"
          }
        ]
      },
      {
        "id": "ai-08",
        "title": "LangChain4j as an Alternative to Spring AI",
        "difficulty": "Intermediate",
        "hours": 2,
        "frequency": "Medium",
        "xp": 25,
        "exercise": "Rebuild one small Spring AI feature using LangChain4j instead, and write down the concrete differences you noticed.",
        "mistakes": [
          "Assuming the two frameworks are interchangeable in philosophy \u2014 one is Spring-idiomatic, the other framework-agnostic",
          "Picking a framework based on hype instead of your team's actual stack and needs"
        ],
        "questions": [
          "What's the core philosophical difference between Spring AI and LangChain4j?",
          "When would LangChain4j be the better choice over Spring AI?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: langchain4j vs spring ai comparison",
            "url": "https://www.youtube.com/results?search_query=langchain4j+vs+spring+ai+comparison"
          },
          {
            "type": "article",
            "label": "Baeldung: langchain4j tutorial",
            "url": "https://www.baeldung.com/?s=langchain4j+tutorial"
          }
        ]
      },
      {
        "id": "ai-09",
        "title": "Observability & Cost Control for AI Features",
        "difficulty": "Advanced",
        "hours": 2,
        "frequency": "Medium",
        "xp": 50,
        "exercise": "Add logging/metrics around an LLM-calling endpoint tracking token usage, latency, and cost per request.",
        "mistakes": [
          "Shipping an AI feature with no visibility into per-request token cost until the bill arrives",
          "Not setting per-user or per-endpoint usage limits, letting one bad actor or bug run up unbounded cost"
        ],
        "questions": [
          "What metrics would you track specifically for an LLM-backed endpoint?",
          "How would you cap runaway cost from a single misbehaving client?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: llm observability cost monitoring",
            "url": "https://www.youtube.com/results?search_query=llm+observability+cost+monitoring"
          },
          {
            "type": "article",
            "label": "Baeldung: llm cost optimization",
            "url": "https://www.baeldung.com/?s=llm+cost+optimization"
          }
        ]
      },
      {
        "id": "ai-10",
        "title": "Using AI Coding Tools as Leverage, Not a Crutch",
        "difficulty": "Beginner",
        "hours": 2,
        "frequency": "Medium",
        "xp": 10,
        "exercise": "Use an AI coding assistant to implement one feature, then manually review and explain every line before merging it.",
        "mistakes": [
          "Merging AI-generated code without understanding it well enough to debug it later",
          "Using AI tools only for boilerplate instead of also for design review, test generation, and code review"
        ],
        "questions": [
          "Be ready to explain, in an interview, any code an AI tool helped you write.",
          "Where does an AI coding assistant tend to be wrong or overconfident?"
        ],
        "resources": [
          {
            "type": "video",
            "label": "YouTube: using ai coding assistants effectively",
            "url": "https://www.youtube.com/results?search_query=using+ai+coding+assistants+effectively"
          },
          {
            "type": "article",
            "label": "Baeldung: ai pair programming best practices",
            "url": "https://www.baeldung.com/?s=ai+pair+programming+best+practices"
          }
        ]
      }
    ],
    "topicCount": 10,
    "totalHours": 27,
    "totalXp": 395
  }
];

if (typeof module !== 'undefined') { module.exports = MODULES; }
