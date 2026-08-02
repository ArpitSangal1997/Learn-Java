/**
 * Core Java module – fundamentals every backend developer needs
 */
const MODULE_CORE_JAVA = {
  id: 'core-java',
  name: 'Core Java',
  icon: '☕',
  description: 'Master Java syntax, OOP, collections, exceptions, and modern Java 8+ features.',
  estimatedHours: 45,
  practiceProject: 'Build a CLI Library Management System using OOP, collections, file I/O, and exception handling.',
  topics: [
    {
      id: 'java-syntax-variables',
      title: 'Java Syntax & Variables',
      difficulty: 'Beginner',
      estimatedTime: '4 hours',
      interviewFrequency: 'High',
      description: 'Learn Java fundamentals including data types, variables, operators, control flow, and method basics.',
      tags: ['syntax', 'variables', 'basics'],
      resources: [
        { type: 'doc', title: 'Oracle Java Tutorials – Language Basics', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/' },
        { type: 'video', title: 'Java Full Course for Beginners – Programming with Mosh', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' },
        { type: 'article', title: 'Java Basic Syntax – Baeldung', url: 'https://www.baeldung.com/java-basic-syntax' },
        { type: 'github', title: 'Java Programming Exercises', url: 'https://github.com/w3resource/java-exercises' }
      ],
      exercises: [
        'Write a program that converts Celsius to Fahrenheit and vice versa',
        'Implement FizzBuzz with switch expressions (Java 14+)',
        'Create a number guessing game using while loops and Scanner',
        'Build a simple calculator supporting +, -, *, / with input validation'
      ],
      miniProjects: ['Console-based grade calculator with weighted averages', 'ATM simulation with account balance operations'],
      interviewQuestions: [
        'What is the difference between == and .equals() in Java?',
        'Explain pass-by-value in Java with an example',
        'What are wrapper classes and autoboxing?',
        'Difference between String, StringBuilder, and StringBuffer'
      ],
      commonMistakes: [
        'Using == to compare String contents instead of .equals()',
        'Not initializing local variables before use',
        'Confusing int division (5/2 = 2) with floating-point division',
        'Forgetting that char is a numeric type in Java'
      ]
    },
    {
      id: 'oop-fundamentals',
      title: 'OOP – Classes, Objects & Inheritance',
      difficulty: 'Beginner',
      estimatedTime: '6 hours',
      interviewFrequency: 'Very High',
      description: 'Understand encapsulation, inheritance, polymorphism, and abstraction – the pillars of object-oriented programming.',
      tags: ['oop', 'inheritance', 'polymorphism'],
      resources: [
        { type: 'doc', title: 'Oracle – Object-Oriented Programming Concepts', url: 'https://docs.oracle.com/javase/tutorial/java/concepts/' },
        { type: 'video', title: 'Java OOP – Telusko', url: 'https://www.youtube.com/watch?v=6T_HgnjoMqY' },
        { type: 'article', title: 'Inheritance in Java – Baeldung', url: 'https://www.baeldung.com/java-inheritance' },
        { type: 'article', title: 'Polymorphism in Java – Baeldung', url: 'https://www.baeldung.com/java-polymorphism' }
      ],
      exercises: [
        'Design a class hierarchy: Animal → Dog, Cat with overridden methods',
        'Implement a BankAccount class with deposit, withdraw, and transfer',
        'Create an abstract Shape class with Circle and Rectangle implementations',
        'Use interfaces to define Flyable and Swimmable behaviors'
      ],
      miniProjects: ['Employee management system with inheritance and polymorphism', 'Vehicle rental system with abstract Vehicle class'],
      interviewQuestions: [
        'Explain the four pillars of OOP with Java examples',
        'Difference between abstract class and interface (Java 8+)',
        'What is method overriding vs overloading?',
        'Can you override static methods in Java? Why or why not?'
      ],
      commonMistakes: [
        'Calling overridden methods from constructors (safe construction issue)',
        'Exposing internal mutable state through getters',
        'Overusing inheritance when composition is better',
        'Not marking overridden methods with @Override annotation'
      ]
    },
    {
      id: 'collections-framework',
      title: 'Collections Framework',
      difficulty: 'Intermediate',
      estimatedTime: '8 hours',
      interviewFrequency: 'Very High',
      description: 'Master List, Set, Map, Queue implementations and know when to use ArrayList vs LinkedList vs HashMap.',
      tags: ['collections', 'hashmap', 'arraylist'],
      resources: [
        { type: 'doc', title: 'Oracle – Collections Framework', url: 'https://docs.oracle.com/javase/tutorial/collections/' },
        { type: 'video', title: 'Java Collections Framework – Java Brains', url: 'https://www.youtube.com/watch?v=Ma7q6BCTSlA' },
        { type: 'article', title: 'Guide to Java Collections – Baeldung', url: 'https://www.baeldung.com/java-collections' },
        { type: 'article', title: 'HashMap Internal Working – Baeldung', url: 'https://www.baeldung.com/java-hashmap' }
      ],
      exercises: [
        'Implement word frequency counter using HashMap',
        'Find the first non-repeating character in a string using LinkedHashMap',
        'Sort a list of custom objects using Comparator and Comparable',
        'Implement LRU cache using LinkedHashMap'
      ],
      miniProjects: ['Contact book with search, sort, and duplicate detection', 'Inventory tracker with concurrent access simulation'],
      interviewQuestions: [
        'How does HashMap work internally in Java?',
        'ArrayList vs LinkedList – when to use each?',
        'Difference between HashMap, TreeMap, and LinkedHashMap',
        'What happens when two keys have the same hashCode?',
        'Why is HashMap not thread-safe? How to make it thread-safe?'
      ],
      commonMistakes: [
        'Modifying a collection while iterating without Iterator.remove()',
        'Using raw types instead of generics with collections',
        'Assuming HashMap iteration order is consistent',
        'Using null keys in TreeMap (throws NullPointerException)'
      ]
    },
    {
      id: 'exception-handling',
      title: 'Exception Handling',
      difficulty: 'Intermediate',
      estimatedTime: '4 hours',
      interviewFrequency: 'High',
      description: 'Learn checked vs unchecked exceptions, try-with-resources, custom exceptions, and best practices.',
      tags: ['exceptions', 'try-catch', 'error-handling'],
      resources: [
        { type: 'doc', title: 'Oracle – Exceptions', url: 'https://docs.oracle.com/javase/tutorial/essential/exceptions/' },
        { type: 'video', title: 'Exception Handling in Java – Telusko', url: 'https://www.youtube.com/watch?v=LD1MZe_gGuA' },
        { type: 'article', title: 'Java Exceptions – Baeldung', url: 'https://www.baeldung.com/java-exceptions' },
        { type: 'article', title: 'Try-with-resources – Baeldung', url: 'https://www.baeldung.com/java-try-with-resources' }
      ],
      exercises: [
        'Create custom InsufficientFundsException for a banking app',
        'Refactor file reading code to use try-with-resources',
        'Implement a retry mechanism with exponential backoff',
        'Build exception hierarchy for a validation framework'
      ],
      miniProjects: ['File parser with detailed error reporting per line', 'API client wrapper with typed exception mapping'],
      interviewQuestions: [
        'Checked vs unchecked exceptions – when to use each?',
        'What is the exception hierarchy in Java?',
        'Can you have finally without catch?',
        'Difference between throw and throws',
        'What is exception chaining/suppression?'
      ],
      commonMistakes: [
        'Catching Exception broadly and swallowing errors',
        'Using exceptions for normal control flow',
        'Not closing resources in finally (use try-with-resources)',
        'Creating overly deep exception hierarchies'
      ]
    },
    {
      id: 'java8-features',
      title: 'Java 8+ Features – Streams & Lambda',
      difficulty: 'Intermediate',
      estimatedTime: '8 hours',
      interviewFrequency: 'Very High',
      description: 'Master lambda expressions, Stream API, Optional, method references, and functional programming in Java.',
      tags: ['streams', 'lambda', 'optional', 'functional'],
      resources: [
        { type: 'doc', title: 'Oracle – Lambda Expressions', url: 'https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html' },
        { type: 'video', title: 'Java 8 Streams – Java Brains', url: 'https://www.youtube.com/watch?v=t1_Y9YoD6fU' },
        { type: 'article', title: 'Java 8 Stream API – Baeldung', url: 'https://www.baeldung.com/java-8-streams' },
        { type: 'article', title: 'Guide to Optional – Baeldung', url: 'https://www.baeldung.com/java-optional' }
      ],
      exercises: [
        'Filter and sort a list of employees by department and salary using Streams',
        'Group transactions by category and compute totals with Collectors',
        'Convert a list to Map using toMap collector with merge function',
        'Implement parallel stream processing and measure performance'
      ],
      miniProjects: ['Data analytics dashboard processing CSV with Streams', 'Event log analyzer with grouping and statistics'],
      interviewQuestions: [
        'What are lambda expressions and functional interfaces?',
        'Difference between map, flatMap, and filter in Streams?',
        'Intermediate vs terminal operations in Stream API',
        'When to use parallel streams? What are the pitfalls?',
        'How does Optional help avoid NullPointerException?'
      ],
      commonMistakes: [
        'Using Optional as method parameters or fields',
        'Calling .get() on Optional without checking isPresent()',
        'Reusing streams after terminal operation',
        'Using parallel streams on small datasets (overhead > benefit)'
      ]
    },
    {
      id: 'generics',
      title: 'Generics',
      difficulty: 'Advanced',
      estimatedTime: '5 hours',
      interviewFrequency: 'High',
      description: 'Understand type parameters, bounded wildcards, type erasure, and generic methods for type-safe code.',
      tags: ['generics', 'type-erasure', 'wildcards'],
      resources: [
        { type: 'doc', title: 'Oracle – Generics', url: 'https://docs.oracle.com/javase/tutorial/java/generics/' },
        { type: 'video', title: 'Java Generics – Telusko', url: 'https://www.youtube.com/watch?v=K1iu1kXk6Ac' },
        { type: 'article', title: 'Java Generics – Baeldung', url: 'https://www.baeldung.com/java-generics' },
        { type: 'article', title: 'PECS Principle – Baeldung', url: 'https://www.baeldung.com/java-generics-pecs' }
      ],
      exercises: [
        'Create a generic Pair<T, U> class with factory methods',
        'Implement a generic Repository interface with CRUD operations',
        'Write a method using bounded wildcards: copy(List<? extends T>, List<? super T>)',
        'Build a type-safe event bus using generics'
      ],
      miniProjects: ['Generic cache with TTL support', 'Type-safe builder pattern with generics'],
      interviewQuestions: [
        'What is type erasure and how does it affect runtime?',
        'Explain PECS: Producer Extends, Consumer Super',
        'Can you create generic arrays in Java? Why not?',
        'Difference between <T> and <? extends T>',
        'How do generics work with inheritance?'
      ],
      commonMistakes: [
        'Using raw types instead of parameterized types',
        'Confusing List<Object> with List<?>',
        'Not understanding heap pollution warnings',
        'Overcomplicating generic signatures unnecessarily'
      ]
    }
  ]
};
