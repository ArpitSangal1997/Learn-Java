/**
 * JVM & Concurrency module – runtime internals and parallel programming
 */
const MODULE_JVM = {
  id: 'jvm-concurrency',
  name: 'JVM & Concurrency',
  icon: '⚙️',
  description: 'Understand how the JVM executes your code, how memory is managed, and how to write correct concurrent Java — topics that separate junior from senior backend engineers.',
  estimatedHours: 35,
  practiceProject: 'Build a multi-threaded web crawler with a fixed thread pool, CompletableFuture-based URL fetching, proper shutdown hooks, and metrics for GC pauses and thread pool utilization.',
  topics: [
    {
      id: 'jvm-architecture',
      title: 'JVM Architecture',
      difficulty: 'Intermediate',
      estimatedTime: '6 hours',
      interviewFrequency: 'High',
      description: 'Class loading, bytecode, JIT compilation, runtime data areas (heap, stack, metaspace), and the execution engine. Essential for debugging production issues and answering system design follow-ups.',
      tags: ['jvm', 'classloader', 'bytecode', 'jit', 'heap', 'stack'],
      resources: [
        { type: 'doc', title: 'Oracle – JVM Specification', url: 'https://docs.oracle.com/javase/specs/jvms/se17/html/index.html' },
        { type: 'doc', title: 'Oracle Java Tutorial – The Java Virtual Machine', url: 'https://docs.oracle.com/javase/tutorial/essential/environment/index.html' },
        { type: 'video', title: 'Java Brains – Java JVM Architecture', url: 'https://www.youtube.com/watch?v=U0F1keyQ6ck' },
        { type: 'video', title: 'Telusko – JVM Architecture', url: 'https://www.youtube.com/watch?v=U0F1keyQ6ck' },
        { type: 'article', title: 'Baeldung – JVM Architecture', url: 'https://www.baeldung.com/jvm' },
        { type: 'article', title: 'Baeldung – Class Loaders in Java', url: 'https://www.baeldung.com/java-classloaders' },
        { type: 'github', title: 'eugenp/tutorials – JVM Module', url: 'https://github.com/eugenp/tutorials/tree/master/core-java-modules/core-java-jvm' }
      ],
      exercises: [
        'Trace the class loading sequence for a simple HelloWorld program (loading, linking, initialization).',
        'Use javap -c to disassemble a class and identify bytecode for a method call.',
        'Write a custom ClassLoader that loads a .class file from disk at runtime.',
        'Demonstrate StackOverflowError with infinite recursion and OutOfMemoryError on heap.',
        'List JVM process info using jps, jinfo, and jstat on a running Java application.'
      ],
      miniProjects: [
        'Mini classloader demo that hot-swaps a Calculator implementation at runtime.',
        'JVM memory visualizer script that logs heap usage at intervals during batch processing.',
        'Bytecode inspection tool that prints method signatures from a given .class file.'
      ],
      interviewQuestions: [
        'Explain the JVM memory areas: heap, stack, metaspace, and program counter.',
        'What are the phases of class loading?',
        'Difference between JDK, JRE, and JVM?',
        'What is JIT compilation and when does it kick in?',
        'How does the bootstrap, extension, and application classloader hierarchy work?',
        'What is the difference between PermGen and Metaspace?'
      ],
      commonMistakes: [
        'Confusing stack memory (per thread) with heap memory (shared).',
        'Thinking Java source code runs directly — ignoring compile-time vs runtime phases.',
        'Not knowing which errors are recoverable (OOM on heap) vs thread-local (StackOverflow).',
        'Assuming all class loaders follow the same delegation model without understanding parent-first.',
        'Ignoring -Xmx/-Xms flags until production runs out of memory.'
      ]
    },
    {
      id: 'jvm-gc',
      title: 'Garbage Collection',
      difficulty: 'Advanced',
      estimatedTime: '8 hours',
      interviewFrequency: 'Very High',
      description: 'GC algorithms (Serial, Parallel, G1, ZGC), generational hypothesis, GC roots, stop-the-world pauses, and tuning flags. Senior interviews frequently probe GC logs and tuning decisions.',
      tags: ['gc', 'g1', 'zgc', 'heap', 'memory-leak', 'tuning'],
      resources: [
        { type: 'doc', title: 'Oracle – Garbage Collection Tuning Guide', url: 'https://docs.oracle.com/en/java/javase/17/gctuning/' },
        { type: 'doc', title: 'Oracle – HotSpot Garbage Collection', url: 'https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/' },
        { type: 'video', title: 'Java Brains – Garbage Collection in Java', url: 'https://www.youtube.com/watch?v=236hXzQ8KEM' },
        { type: 'video', title: 'Amigoscode – Java Garbage Collection', url: 'https://www.youtube.com/watch?v=236hXzQ8KEM' },
        { type: 'article', title: 'Baeldung – Java Garbage Collection', url: 'https://www.baeldung.com/jvm-garbage-collectors' },
        { type: 'article', title: 'Baeldung – GC Log Analysis', url: 'https://www.baeldung.com/jvm-gc-logs' },
        { type: 'github', title: 'eugenp/tutorials – Java Memory Management', url: 'https://github.com/eugenp/tutorials/tree/master/core-java-modules/core-java-perf' }
      ],
      exercises: [
        'Run an app with -XX:+PrintGCDetails and interpret young vs old generation collections.',
        'Create a memory leak using a static HashMap and identify it with heap dump analysis.',
        'Compare throughput vs latency by switching between Parallel GC and G1GC.',
        'Use jmap -dump to capture a heap dump and find dominator objects.',
        'Configure -Xms and -Xmx and observe heap expansion behavior.'
      ],
      miniProjects: [
        'GC log analyzer that parses logs and reports pause times and allocation rates.',
        'Memory leak simulator with intentional leaks and a fix using WeakReference.',
        'Benchmark comparing object allocation patterns (object pooling vs create-and-discard).'
      ],
      interviewQuestions: [
        'Explain how generational garbage collection works.',
        'Difference between minor GC and major/full GC?',
        'What are GC roots?',
        'Compare G1GC, ZGC, and Parallel GC — when would you choose each?',
        'How do you detect and fix a memory leak in Java?',
        'What is the role of finalize() and why is it deprecated?'
      ],
      commonMistakes: [
        'Setting -Xmx too high without understanding pause time impact.',
        'Calling System.gc() expecting immediate cleanup (hint: don\'t).',
        'Holding references to unused objects in static collections (memory leaks).',
        'Not closing streams/listeners causing native memory or heap retention.',
        'Choosing the wrong GC algorithm for latency-sensitive vs throughput workloads.'
      ]
    },
    {
      id: 'jvm-multithreading',
      title: 'Multithreading Basics',
      difficulty: 'Intermediate',
      estimatedTime: '8 hours',
      interviewFrequency: 'Very High',
      description: 'Thread lifecycle, Runnable vs Callable, thread pools intro, synchronized keyword, volatile, and basic concurrency pitfalls. Foundation before Executor framework and JMM deep dives.',
      tags: ['threads', 'runnable', 'synchronized', 'volatile', 'lifecycle'],
      resources: [
        { type: 'doc', title: 'Oracle Java Tutorial – Concurrency', url: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/index.html' },
        { type: 'video', title: 'Telusko – Java Multithreading', url: 'https://www.youtube.com/playlist?list=PLsyeobzWxl7oJ-br-n-7nM1GptpaIhfx-' },
        { type: 'video', title: 'Java Brains – Java Multithreading', url: 'https://www.youtube.com/playlist?list=PLsyeobzWxl7oJ-br-n-7nM1GptpaIhfx-' },
        { type: 'article', title: 'Baeldung – Java Thread Basics', url: 'https://www.baeldung.com/thread-safety' },
        { type: 'article', title: 'Baeldung – Runnable vs Callable', url: 'https://www.baeldung.com/java-runnable-callable' },
        { type: 'github', title: 'eugenp/tutorials – Java Concurrency', url: 'https://github.com/eugenp/tutorials/tree/master/core-java-modules/core-java-concurrency-basic' }
      ],
      exercises: [
        'Create two threads printing numbers 1-100 alternately using wait/notify.',
        'Implement a thread-safe counter with synchronized increment vs AtomicInteger comparison.',
        'Demonstrate race condition on a shared variable and fix with volatile vs synchronized.',
        'Use Callable and Future to compute sum of squares of numbers in parallel.',
        'Build a producer-consumer queue with bounded buffer using wait/notify.'
      ],
      miniProjects: [
        'Multi-threaded file downloader splitting file into chunks processed by worker threads.',
        'Bank account transfer simulator demonstrating race conditions and synchronized fixes.',
        'Thread-safe cache with read-write lock pattern for high read / low write workloads.'
      ],
      interviewQuestions: [
        'Difference between Thread and Runnable?',
        'What does synchronized do at the JVM level?',
        'Difference between volatile and synchronized?',
        'Can you start a thread twice? What happens?',
        'Explain thread states: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED.',
        'What is a daemon thread?'
      ],
      commonMistakes: [
        'Synchronizing on the wrong object (e.g., Integer autoboxing creating new locks).',
        'Assuming volatile makes compound operations atomic (i++ is NOT atomic).',
        'Creating unbounded threads instead of using thread pools.',
        'Deadlocks from inconsistent lock ordering across threads.',
        'Not handling InterruptedException properly (swallowing interrupt flag).'
      ]
    },
    {
      id: 'jvm-executor',
      title: 'Executor Framework & CompletableFuture',
      difficulty: 'Advanced',
      estimatedTime: '8 hours',
      interviewFrequency: 'Very High',
      description: 'ExecutorService, thread pool types, Future, CompletableFuture composition, async pipelines, and graceful shutdown. Modern Java backend code relies heavily on these APIs.',
      tags: ['executor', 'thread-pool', 'completablefuture', 'async', 'future'],
      resources: [
        { type: 'doc', title: 'Oracle – java.util.concurrent Package', url: 'https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/package-summary.html' },
        { type: 'doc', title: 'Oracle – CompletableFuture JavaDoc', url: 'https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html' },
        { type: 'video', title: 'Amigoscode – CompletableFuture in Java', url: 'https://www.youtube.com/watch?v=OlcZd5q9z7Y' },
        { type: 'video', title: 'Java Brains – Java ExecutorService', url: 'https://www.youtube.com/watch?v=6OoCUCBS0tY' },
        { type: 'article', title: 'Baeldung – ExecutorService Tutorial', url: 'https://www.baeldung.com/java-executor-service-tutorial' },
        { type: 'article', title: 'Baeldung – CompletableFuture Guide', url: 'https://www.baeldung.com/java-completablefuture' },
        { type: 'github', title: 'eugenp/tutorials – Java CompletableFuture', url: 'https://github.com/eugenp/tutorials/tree/master/core-java-modules/core-java-concurrency-advanced' }
      ],
      exercises: [
        'Configure a FixedThreadPool and submit 20 tasks measuring throughput vs CachedThreadPool.',
        'Chain CompletableFuture: fetch user, then orders, then compute total asynchronously.',
        'Implement timeout on a Future using Future.get(timeout, TimeUnit).',
        'Use CompletableFuture.allOf to wait for parallel API calls and combine results.',
        'Write graceful shutdown logic: shutdown(), awaitTermination(), shutdownNow().'
      ],
      miniProjects: [
        'Async order service calling inventory, payment, and shipping APIs in parallel with CompletableFuture.',
        'Batch job processor using ExecutorService with configurable pool size and retry on failure.',
        'Micro-benchmark comparing sequential vs parallel stream vs CompletableFuture for I/O-bound tasks.'
      ],
      interviewQuestions: [
        'Difference between Executors.newFixedThreadPool and newCachedThreadPool?',
        'How do you handle exceptions in CompletableFuture?',
        'What is the difference between thenApply and thenCompose?',
        'How to implement a custom ThreadPoolExecutor with a bounded queue?',
        'Explain CompletableFuture supplyAsync vs runAsync.',
        'How do you cancel a running task in ExecutorService?'
      ],
      commonMistakes: [
        'Using the common ForkJoinPool for blocking I/O (starves other async work).',
        'Not shutting down ExecutorService leading to JVM hanging on exit.',
        'Blocking inside CompletableFuture callbacks (thenApply) negating async benefits.',
        'Ignoring exceptionally()/handle() and losing async exceptions silently.',
        'Oversizing thread pools for CPU-bound work (context switch overhead).'
      ]
    },
    {
      id: 'jvm-jmm',
      title: 'Java Memory Model & Synchronization',
      difficulty: 'Expert',
      estimatedTime: '10 hours',
      interviewFrequency: 'High',
      description: 'Happens-before relationships, visibility, reordering, locks, java.util.concurrent utilities (CountDownLatch, Semaphore, ReentrantLock, ConcurrentHashMap), and lock-free patterns. Expert-level interview differentiator.',
      tags: ['jmm', 'happens-before', 'reentrantlock', 'concurrent-hashmap', 'atomic'],
      resources: [
        { type: 'doc', title: 'Oracle – Java Memory Model Specification', url: 'https://docs.oracle.com/javase/specs/jls/se17/html/jls-17.html#jls-17.4' },
        { type: 'doc', title: 'Oracle – java.util.concurrent Locks', url: 'https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/locks/package-summary.html' },
        { type: 'video', title: 'Java Brains – Java Memory Model', url: 'https://www.youtube.com/watch?v=ZDxL2EbH9UM' },
        { type: 'article', title: 'Baeldung – Java Memory Model', url: 'https://www.baeldung.com/java-memory-model' },
        { type: 'article', title: 'Baeldung – ReentrantLock vs synchronized', url: 'https://www.baeldung.com/java-reentrant-lock' },
        { type: 'article', title: 'Baeldung – CountDownLatch vs CyclicBarrier', url: 'https://www.baeldung.com/java-countdown-latch-vs-cyclic-barrier' },
        { type: 'github', title: 'eugenp/tutorials – Java Concurrent Collections', url: 'https://github.com/eugenp/tutorials/tree/master/core-java-modules/core-java-concurrency-collections' }
      ],
      exercises: [
        'Demonstrate double-checked locking bug and fix with volatile (singleton pattern).',
        'Implement a rate limiter using Semaphore (max N concurrent requests).',
        'Use CountDownLatch to coordinate startup of multiple services before accepting traffic.',
        'Compare synchronized vs ReentrantLock with tryLock and fairness settings.',
        'Build a thread-safe LRU cache using ConcurrentHashMap and atomic operations.'
      ],
      miniProjects: [
        'Concurrent task scheduler with priority queue and ReentrantLock per resource.',
        'Distributed-style in-memory event bus using BlockingQueue and worker threads.',
        'Performance comparison: synchronized, ReentrantReadWriteLock, and StampedLock on read-heavy workload.'
      ],
      interviewQuestions: [
        'What is the happens-before relationship? Give examples.',
        'Why is double-checked locking broken without volatile?',
        'Difference between ConcurrentHashMap and Collections.synchronizedMap?',
        'When would you use ReentrantLock over synchronized?',
        'Explain visibility vs atomicity — are they the same?',
        'What is false sharing and how does it affect performance?'
      ],
      commonMistakes: [
        'Using non-thread-safe collections in multi-threaded code without external synchronization.',
        'Incorrect double-checked locking without volatile on the instance reference.',
        'Holding locks during I/O operations causing thread starvation.',
        'Using wait()/notify() without holding the correct monitor lock.',
        'Assuming ConcurrentHashMap compound operations are atomic without compute/merge methods.'
      ]
    }
  ]
};
