<<<<<<< HEAD
const softwareArchitectQuestions = [
    { question: "What is the primary role of a Software Architect?", choices: ["a. Designing the overall structure of software systems", "b. Writing code for applications", "c. Managing project schedules", "d. Testing software products"], answer: 0 },
    { question: "What is a design pattern in software architecture?", choices: ["a. A reusable solution to a common problem in software design", "b. A visual representation of a software system", "c. A programming language syntax", "d. A data structure"], answer: 0 },
    { question: "Which of the following is a key principle of microservices architecture?", choices: ["a. Single Responsibility", "b. Monolithic deployment", "c. Tight coupling", "d. Centralized data management"], answer: 0 },
    { question: "What does the SOLID acronym stand for in object-oriented design?", choices: ["a. Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion", "b. Simple, Organized, Low-coupling, Independent, Decentralized", "c. Secure, Optimized, Linked, Integrated, Deployed", "d. Structured, Object-Oriented, Layered, Iterative, Documented"], answer: 0 },
    { question: "Which architectural style is characterized by a single central repository of data?", choices: ["a. Client-Server", "b. Layered Architecture", "c. Microservices", "d. Monolithic Architecture"], answer: 0 },
    { question: "What is a RESTful API?", choices: ["a. An API that follows REST principles, using HTTP requests to access and manipulate data", "b. An API designed exclusively for SOAP protocols", "c. A synchronous messaging API", "d. An API that requires a stateful connection"], answer: 0 },
    { question: "What is the purpose of an Enterprise Service Bus (ESB) in software architecture?", choices: ["a. To facilitate communication between different services and applications", "b. To store data", "c. To manage web application security", "d. To handle front-end rendering"], answer: 0 },
    { question: "What is meant by 'scalability' in a software system?", choices: ["a. The ability to handle increased load by adding resources", "b. The ability to operate on multiple operating systems", "c. The ease of maintaining the system", "d. The level of security of the system"], answer: 0 },
    { question: "Which design pattern is used to provide a simplified interface to a complex system?", choices: ["a. Facade", "b. Adapter", "c. Proxy", "d. Singleton"], answer: 0 },
    { question: "What is a 'monolithic' application?", choices: ["a. An application where all components are interlinked and deployed together", "b. An application that is built using a single programming language", "c. A cloud-based application", "d. An application with a user-friendly interface"], answer: 0 },
    { question: "What does 'decoupling' mean in the context of software architecture?", choices: ["a. Reducing dependencies between components", "b. Combining multiple systems into one", "c. Enhancing data security", "d. Increasing the complexity of a system"], answer: 0 },
    { question: "Which cloud service model provides the most control over the computing resources?", choices: ["a. Infrastructure as a Service (IaaS)", "b. Platform as a Service (PaaS)", "c. Software as a Service (SaaS)", "d. Function as a Service (FaaS)"], answer: 0 },
    { question: "What is the role of an API Gateway in a microservices architecture?", choices: ["a. To act as a single entry point for all clients accessing microservices", "b. To manage data storage", "c. To handle user authentication", "d. To deploy microservices"], answer: 0 },
    { question: "What is a 'container' in software development?", choices: ["a. A lightweight, stand-alone, executable package that includes everything needed to run a piece of software", "b. A component in object-oriented programming", "c. A physical server", "d. A type of database schema"], answer: 0 },
    { question: "What does 'CQRS' stand for in software architecture?", choices: ["a. Command Query Responsibility Segregation", "b. Continuous Query and Response System", "c. Command Queue and Resource Scheduler", "d. Centralized Query and Reporting System"], answer: 0 },
    { question: "What is the primary benefit of using microservices architecture?", choices: ["a. It allows for independent deployment and scaling of services", "b. It ensures all services are tightly integrated", "c. It simplifies database management", "d. It reduces the need for version control"], answer: 0 },
    { question: "Which type of database is best suited for storing hierarchical data?", choices: ["a. Graph database", "b. Relational database", "c. Document database", "d. Key-value store"], answer: 0 },
    { question: "What is the 'CAP theorem' in distributed systems?", choices: ["a. Consistency, Availability, Partition Tolerance", "b. Control, Analysis, Processing", "c. Capacity, Accessibility, Performance", "d. Computational, Analytical, Predictive"], answer: 0 },
    { question: "What does 'serverless' computing mean?", choices: ["a. A cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources", "b. A system without any servers", "c. A type of virtual private network", "d. A method of storing data"], answer: 0 },
    { question: "What is the purpose of a 'load balancer' in system architecture?", choices: ["a. To distribute incoming network traffic across multiple servers", "b. To store large amounts of data", "c. To monitor system security", "d. To encrypt data in transit"], answer: 0 },
    { question: "Which of the following is a principle of the Twelve-Factor App methodology?", choices: ["a. Dependencies are explicitly declared and isolated", "b. Application and system logs are mixed", "c. Environment configurations are hard-coded", "d. Multiple codebases are used per application"], answer: 0 },
    { question: "What is a 'service mesh'?", choices: ["a. A dedicated infrastructure layer for managing service-to-service communication", "b. A type of microservice", "c. A database model", "d. A method for deploying applications"], answer: 0 },
    { question: "What is 'event-driven architecture'?", choices: ["a. A software architecture paradigm promoting the production, detection, consumption of, and reaction to events", "b. A type of monolithic architecture", "c. A system for scheduling tasks", "d. An approach for UI design"], answer: 0 },
    { question: "What is 'asynchronous programming'?", choices: ["a. A method of programming that allows multiple tasks to run independently of each other", "b. A synchronous, linear execution of tasks", "c. A way to write software for specific hardware", "d. A programming paradigm for real-time systems"], answer: 0 },
    { question: "Which architectural pattern separates the data access layer from the business logic layer?", choices: ["a. Repository Pattern", "b. Singleton Pattern", "c. Factory Pattern", "d. Decorator Pattern"], answer: 0 },
    { question: "What does 'CI/CD' stand for in software development?", choices: ["a. Continuous Integration/Continuous Deployment", "b. Code Integration/Code Deployment", "c. Component Integration/Component Delivery", "d. Critical Infrastructure/Continuous Development"], answer: 0 },
    { question: "What is the purpose of a 'domain model' in software design?", choices: ["a. To represent the real-world entities and relationships within a software application", "b. To manage user authentication", "c. To define the UI layout", "d. To optimize database queries"], answer: 0 },
    { question: "What is 'OAuth' used for?", choices: ["a. Open standard for access delegation, commonly used for token-based authentication", "b. A type of database query language", "c. A software development framework", "d. A programming language"], answer: 0 },
    { question: "What is the main characteristic of a 'loosely coupled' system?", choices: ["a. Components can be changed independently without affecting others", "b. All components are closely integrated", "c. A high level of interdependence among components", "d. Difficulty in scaling the system"], answer: 0 },
    { question: "What is 'middleware' in software architecture?", choices: ["a. Software that connects different components or applications", "b. A type of database", "c. A front-end user interface", "d. A server hardware component"], answer: 0 },
    { question: "Which architectural pattern is used to isolate application business logic from the external world?", choices: ["a. Hexagonal Architecture", "b. Layered Architecture", "c. Microservices Architecture", "d. Monolithic Architecture"], answer: 0 },
    { question: "What does 'scaling vertically' mean?", choices: ["a. Adding more power (CPU, memory) to an existing machine", "b. Increasing the number of machines in a system", "c. Reducing the number of services in a microservice architecture", "d. Decreasing the system's load capacity"], answer: 0 },
    { question: "What is a 'data lake'?", choices: ["a. A centralized repository for storing all structured and unstructured data at any scale", "b. A relational database", "c. A cloud-based data analytics tool", "d. A data backup solution"], answer: 0 },
    { question: "What is the main benefit of using 'container orchestration' tools like Kubernetes?", choices: ["a. Automating the deployment, scaling, and management of containerized applications", "b. Writing code in multiple programming languages", "c. Managing network security", "d. Designing user interfaces"], answer: 0 },
    { question: "What is a 'message queue' used for?", choices: ["a. Decoupling applications and enabling asynchronous communication", "b. Storing relational data", "c. Managing user sessions", "d. Handling real-time data streaming"], answer: 0 },
    { question: "What does 'DevOps' aim to achieve in software development?", choices: ["a. Integration and automation of software development and IT operations", "b. Developing complex mathematical models", "c. Creating front-end applications", "d. Enhancing graphic design capabilities"], answer: 0 },
    { question: "What is 'cloud-native architecture'?", choices: ["a. An approach to building and running applications that exploit the advantages of the cloud computing delivery model", "b. An architecture for on-premises data centers", "c. A traditional monolithic system", "d. A method for offline application development"], answer: 0 },
    { question: "What is the 'event sourcing' pattern?", choices: ["a. A design pattern where state changes are stored as a sequence of events", "b. A method for querying databases", "c. A process for handling user authentication", "d. A technique for managing UI components"], answer: 0 },
    { question: "What does 'zero downtime deployment' refer to?", choices: ["a. Deploying new software versions without stopping the application", "b. Shutting down the system during deployment", "c. Ensuring the system operates only during specific hours", "d. Disabling system logs during deployment"], answer: 0 },
    { question: "What is a 'monorepo'?", choices: ["a. A single repository that holds the code for multiple projects", "b. A database schema", "c. A type of server", "d. A microservice"], answer: 0 },
    { question: "What is the primary goal of using a 'proxy server'?", choices: ["a. To act as an intermediary between a client and a server, often for anonymity or to bypass restrictions", "b. To store data securely", "c. To optimize database queries", "d. To manage cloud resources"], answer: 0 },
    { question: "What is 'infrastructure as code' (IaC)?", choices: ["a. Managing and provisioning computing infrastructure through machine-readable configuration files", "b. Coding practices for creating infrastructure software", "c. Writing code for front-end development", "d. A cloud-based code editor"], answer: 0 },
    { question: "What does 'blue-green deployment' involve?", choices: ["a. Maintaining two identical production environments, one live (blue) and one idle (green), to reduce downtime during updates", "b. Using two different programming languages", "c. Splitting database reads and writes", "d. Managing different network layers"], answer: 0 },
    { question: "What is 'API versioning'?", choices: ["a. Managing multiple versions of an API to ensure backward compatibility", "b. A method for encrypting API requests", "c. A technique for monitoring API performance", "d. A way to integrate different APIs"], answer: 0 },
    { question: "What is the purpose of 'unit testing'?", choices: ["a. Testing individual components or units of code for correctness", "b. Ensuring the entire system works together", "c. Verifying the user interface", "d. Validating database integrity"], answer: 0 },
    { question: "What does 'middleware' do in the context of a web application?", choices: ["a. Acts as an intermediary processing layer between the client and the server", "b. Handles static content delivery", "c. Manages database connections", "d. Optimizes network traffic"], answer: 0 },
    { question: "What is a 'distributed system'?", choices: ["a. A system in which components located on networked computers communicate and coordinate their actions by passing messages", "b. A single computer running multiple applications", "c. A database spread across multiple locations", "d. A method for distributing software licenses"], answer: 0 },
    { question: "What is the purpose of a 'data warehouse'?", choices: ["a. To store and manage large volumes of historical data for analysis and reporting", "b. To host real-time transactional data", "c. To cache frequently accessed data", "d. To store application logs"], answer: 0 },
    { question: "What does 'ACID' stand for in database systems?", choices: ["a. Atomicity, Consistency, Isolation, Durability", "b. Availability, Consistency, Integrity, Durability", "c. Authentication, Compression, Isolation, Distribution", "d. Access, Control, Isolation, Distribution"], answer: 0 },
    { question: "What is 'message-driven architecture'?", choices: ["a. An architecture that uses messages as the primary means of communication between components", "b. A design focused on user interface messaging", "c. A method for managing error handling", "d. A pattern for database schema design"], answer: 0 },
    { question: "What is 'domain-driven design' (DDD)?", choices: ["a. An approach to software development that focuses on modeling the domain based on input from domain experts", "b. A method for optimizing database queries", "c. A programming language", "d. A cloud deployment strategy"], answer: 0 },
    { question: "What does 'sharding' mean in database systems?", choices: ["a. Partitioning a database into smaller, more manageable pieces that can be spread across multiple servers", "b. Replicating the database across multiple regions", "c. Encrypting data for security", "d. Compressing database data"], answer: 0 },
    { question: "What is the role of 'continuous monitoring' in a CI/CD pipeline?", choices: ["a. To detect and respond to operational issues in real time", "b. To automate the deployment of applications", "c. To manage user access controls", "d. To compile and build software"], answer: 0 },
    { question: "What is a 'service level agreement' (SLA)?", choices: ["a. A contract between a service provider and a customer specifying the level of service expected", "b. A plan for scaling software systems", "c. A document outlining development best practices", "d. A security protocol for data transmission"], answer: 0 },
    { question: "What is the purpose of 'elasticity' in cloud computing?", choices: ["a. To dynamically adjust resources based on the workload", "b. To provide a fixed amount of resources regardless of demand", "c. To manually scale resources", "d. To offer unlimited data storage"], answer: 0 },
    { question: "What does 'ETL' stand for in data processing?", choices: ["a. Extract, Transform, Load", "b. Encrypt, Transmit, Log", "c. Evaluate, Test, Launch", "d. Execute, Transform, Link"], answer: 0 },
    { question: "What is 'polyglot persistence'?", choices: ["a. Using multiple types of databases or storage technologies within a single application", "b. Developing an application in multiple programming languages", "c. A method for internationalizing software", "d. A protocol for secure data storage"], answer: 0 },
    { question: "What is the main advantage of using 'NoSQL' databases?", choices: ["a. Flexibility in storing unstructured and semi-structured data", "b. Guaranteed ACID compliance", "c. Strong consistency models", "d. Traditional SQL-based querying"], answer: 0 },
    { question: "What is a 'data pipeline'?", choices: ["a. A series of data processing steps, often automated, that move data from one place to another", "b. A tool for visualizing data", "c. A method for encrypting data", "d. A type of database index"], answer: 0 },
    { question: "What is the purpose of a 'cache' in software systems?", choices: ["a. To temporarily store frequently accessed data for faster access", "b. To back up data", "c. To secure data during transmission", "d. To manage network connections"], answer: 0 },
];

let selectedQuestions = [];
let currentQuestion = 0;
let selectedAnswers = [];
let timer;
let redemptionTimer;
let certificateRedeemed = false; // Flag to track certificate redemption
const totalQuizTime = 10 * 60 * 1000; // 10 minutes in milliseconds
const redemptionTime = 1 * 60 * 1000; // 1 minutes in milliseconds

function startRedemptionTimer() {
    let timeRemaining = redemptionTime;
    const redemptionTimerElement = document.getElementById('redemption-timer');
    redemptionTimerElement.classList.remove('hide');

    redemptionTimer = setInterval(() => {
        const minutes = Math.floor(timeRemaining / (60 * 1000));
        const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

        redemptionTimerElement.textContent = `Time left to redeem: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(redemptionTimer);
            alert("Time to redeem the certificate has expired. The quiz will be reset.");
            restartQuiz();
        }

        timeRemaining -= 1000;
    }, 1000);
}

function getRandomQuestions() {
    const indices = Array.from(Array(softwareArchitectQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => softwareArchitectQuestions[index]);
}

function showQuestion(index) {
    const questionElement = document.getElementById('question');
    const choices = document.getElementsByClassName('choice');
    const questionCountElement = document.getElementById('question-count');
    questionCountElement.textContent = `Question ${index + 1}/10`;
    questionElement.textContent = selectedQuestions[index].question;
    for (let i = 0; i < choices.length; i++) {
        choices[i].textContent = selectedQuestions[index].choices[i];
        choices[i].classList.remove('selected');
        if (selectedAnswers[index] === i) {
            choices[i].classList.add('selected');
        }
    }
    document.getElementById('prev-btn').classList.toggle('hide', index === 0);
}

function selectAnswer(choice) {
    selectedAnswers[currentQuestion] = choice;
    const choices = document.getElementsByClassName('choice');
    for (let i = 0; i < choices.length; i++) {
        choices[i].classList.remove('selected');
    }
    choices[choice].classList.add('selected');
}

function nextQuestion() {
    if (currentQuestion < selectedQuestions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function showResult() {
    clearInterval(timer);
    const quizElement = document.getElementById('quiz');
    const resultElement = document.getElementById('result');
    quizElement.classList.add('hide');
    resultElement.classList.remove('hide');

    let correctAnswers = 0;

    for (let i = 0; i < selectedAnswers.length; i++) {
        if (selectedAnswers[i] === selectedQuestions[i].answer) {
            correctAnswers++;
        }
    }

    const resultMessageElement = document.getElementById('result-message');
    if (correctAnswers >= 8) {
        resultMessageElement.textContent = "Congratulations! You passed the quiz. You have 5 minutes to redeem your certificate.";
        if (!certificateRedeemed) {
            document.getElementById('redeem-certificate').classList.remove('hide');
            startRedemptionTimer();
        } else {
            resultMessageElement.textContent += " You have already redeemed your certificate.";
        }
    } else {
        resultMessageElement.textContent = "You didn't pass the quiz. Try again!";
    }

    document.getElementById('score').textContent = correctAnswers;
}

function restartQuiz() {
    clearTimeout(redemptionTimer); // Clear the redemption timer if it exists
    currentQuestion = 0;
    selectedAnswers = [];
    certificateRedeemed = false; // Reset certificate redeemed flag
    getRandomQuestions();
    document.getElementById('quiz').classList.remove('hide');
    document.getElementById('result').classList.add('hide');
    document.getElementById('redeem-certificate').classList.add('hide');
    document.getElementById('redemption-timer').classList.add('hide');
    startTimer(totalQuizTime);
    showQuestion(currentQuestion);
}

function startTimer(duration) {
    const timerElement = document.getElementById('timer');
    let timeRemaining = duration;

    timer = setInterval(() => {
        const minutes = Math.floor(timeRemaining / (60 * 1000));
        const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

        timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            showResult();
        }

        timeRemaining -= 1000;
    }, 1000);
}

function generateCertificate() {
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        alert("Please enter your name to generate the certificate.");
        return;
    }

    // Generate and download the certificate using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Certificate of Achievement", 105, 50, null, null, 'center');
    doc.text(`This is to certify that ${name}`, 105, 70, null, null, 'center');
    doc.text("has successfully passed the Python quiz.", 105, 90, null, null, 'center');
    doc.save(`${name}_certificate.pdf`);

    // Hide the redeem certificate section and show reset message
    certificateRedeemed = true; // Set certificate redeemed flag to true
    clearInterval(redemptionTimer);
    document.getElementById('redeem-certificate').classList.add('hide');
    document.getElementById('redemption-timer').classList.add('hide');
    alert("Your certificate has been generated. To redeem another certificate, you need to reset and pass the test again.");
}

// Initialize the quiz
getRandomQuestions();
showQuestion(currentQuestion);
=======
const softwareArchitectQuestions = [
    { question: "What is the primary role of a Software Architect?", choices: ["a. Designing the overall structure of software systems", "b. Writing code for applications", "c. Managing project schedules", "d. Testing software products"], answer: 0 },
    { question: "What is a design pattern in software architecture?", choices: ["a. A reusable solution to a common problem in software design", "b. A visual representation of a software system", "c. A programming language syntax", "d. A data structure"], answer: 0 },
    { question: "Which of the following is a key principle of microservices architecture?", choices: ["a. Single Responsibility", "b. Monolithic deployment", "c. Tight coupling", "d. Centralized data management"], answer: 0 },
    { question: "What does the SOLID acronym stand for in object-oriented design?", choices: ["a. Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion", "b. Simple, Organized, Low-coupling, Independent, Decentralized", "c. Secure, Optimized, Linked, Integrated, Deployed", "d. Structured, Object-Oriented, Layered, Iterative, Documented"], answer: 0 },
    { question: "Which architectural style is characterized by a single central repository of data?", choices: ["a. Client-Server", "b. Layered Architecture", "c. Microservices", "d. Monolithic Architecture"], answer: 0 },
    { question: "What is a RESTful API?", choices: ["a. An API that follows REST principles, using HTTP requests to access and manipulate data", "b. An API designed exclusively for SOAP protocols", "c. A synchronous messaging API", "d. An API that requires a stateful connection"], answer: 0 },
    { question: "What is the purpose of an Enterprise Service Bus (ESB) in software architecture?", choices: ["a. To facilitate communication between different services and applications", "b. To store data", "c. To manage web application security", "d. To handle front-end rendering"], answer: 0 },
    { question: "What is meant by 'scalability' in a software system?", choices: ["a. The ability to handle increased load by adding resources", "b. The ability to operate on multiple operating systems", "c. The ease of maintaining the system", "d. The level of security of the system"], answer: 0 },
    { question: "Which design pattern is used to provide a simplified interface to a complex system?", choices: ["a. Facade", "b. Adapter", "c. Proxy", "d. Singleton"], answer: 0 },
    { question: "What is a 'monolithic' application?", choices: ["a. An application where all components are interlinked and deployed together", "b. An application that is built using a single programming language", "c. A cloud-based application", "d. An application with a user-friendly interface"], answer: 0 },
    { question: "What does 'decoupling' mean in the context of software architecture?", choices: ["a. Reducing dependencies between components", "b. Combining multiple systems into one", "c. Enhancing data security", "d. Increasing the complexity of a system"], answer: 0 },
    { question: "Which cloud service model provides the most control over the computing resources?", choices: ["a. Infrastructure as a Service (IaaS)", "b. Platform as a Service (PaaS)", "c. Software as a Service (SaaS)", "d. Function as a Service (FaaS)"], answer: 0 },
    { question: "What is the role of an API Gateway in a microservices architecture?", choices: ["a. To act as a single entry point for all clients accessing microservices", "b. To manage data storage", "c. To handle user authentication", "d. To deploy microservices"], answer: 0 },
    { question: "What is a 'container' in software development?", choices: ["a. A lightweight, stand-alone, executable package that includes everything needed to run a piece of software", "b. A component in object-oriented programming", "c. A physical server", "d. A type of database schema"], answer: 0 },
    { question: "What does 'CQRS' stand for in software architecture?", choices: ["a. Command Query Responsibility Segregation", "b. Continuous Query and Response System", "c. Command Queue and Resource Scheduler", "d. Centralized Query and Reporting System"], answer: 0 },
    { question: "What is the primary benefit of using microservices architecture?", choices: ["a. It allows for independent deployment and scaling of services", "b. It ensures all services are tightly integrated", "c. It simplifies database management", "d. It reduces the need for version control"], answer: 0 },
    { question: "Which type of database is best suited for storing hierarchical data?", choices: ["a. Graph database", "b. Relational database", "c. Document database", "d. Key-value store"], answer: 0 },
    { question: "What is the 'CAP theorem' in distributed systems?", choices: ["a. Consistency, Availability, Partition Tolerance", "b. Control, Analysis, Processing", "c. Capacity, Accessibility, Performance", "d. Computational, Analytical, Predictive"], answer: 0 },
    { question: "What does 'serverless' computing mean?", choices: ["a. A cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources", "b. A system without any servers", "c. A type of virtual private network", "d. A method of storing data"], answer: 0 },
    { question: "What is the purpose of a 'load balancer' in system architecture?", choices: ["a. To distribute incoming network traffic across multiple servers", "b. To store large amounts of data", "c. To monitor system security", "d. To encrypt data in transit"], answer: 0 },
    { question: "Which of the following is a principle of the Twelve-Factor App methodology?", choices: ["a. Dependencies are explicitly declared and isolated", "b. Application and system logs are mixed", "c. Environment configurations are hard-coded", "d. Multiple codebases are used per application"], answer: 0 },
    { question: "What is a 'service mesh'?", choices: ["a. A dedicated infrastructure layer for managing service-to-service communication", "b. A type of microservice", "c. A database model", "d. A method for deploying applications"], answer: 0 },
    { question: "What is 'event-driven architecture'?", choices: ["a. A software architecture paradigm promoting the production, detection, consumption of, and reaction to events", "b. A type of monolithic architecture", "c. A system for scheduling tasks", "d. An approach for UI design"], answer: 0 },
    { question: "What is 'asynchronous programming'?", choices: ["a. A method of programming that allows multiple tasks to run independently of each other", "b. A synchronous, linear execution of tasks", "c. A way to write software for specific hardware", "d. A programming paradigm for real-time systems"], answer: 0 },
    { question: "Which architectural pattern separates the data access layer from the business logic layer?", choices: ["a. Repository Pattern", "b. Singleton Pattern", "c. Factory Pattern", "d. Decorator Pattern"], answer: 0 },
    { question: "What does 'CI/CD' stand for in software development?", choices: ["a. Continuous Integration/Continuous Deployment", "b. Code Integration/Code Deployment", "c. Component Integration/Component Delivery", "d. Critical Infrastructure/Continuous Development"], answer: 0 },
    { question: "What is the purpose of a 'domain model' in software design?", choices: ["a. To represent the real-world entities and relationships within a software application", "b. To manage user authentication", "c. To define the UI layout", "d. To optimize database queries"], answer: 0 },
    { question: "What is 'OAuth' used for?", choices: ["a. Open standard for access delegation, commonly used for token-based authentication", "b. A type of database query language", "c. A software development framework", "d. A programming language"], answer: 0 },
    { question: "What is the main characteristic of a 'loosely coupled' system?", choices: ["a. Components can be changed independently without affecting others", "b. All components are closely integrated", "c. A high level of interdependence among components", "d. Difficulty in scaling the system"], answer: 0 },
    { question: "What is 'middleware' in software architecture?", choices: ["a. Software that connects different components or applications", "b. A type of database", "c. A front-end user interface", "d. A server hardware component"], answer: 0 },
    { question: "Which architectural pattern is used to isolate application business logic from the external world?", choices: ["a. Hexagonal Architecture", "b. Layered Architecture", "c. Microservices Architecture", "d. Monolithic Architecture"], answer: 0 },
    { question: "What does 'scaling vertically' mean?", choices: ["a. Adding more power (CPU, memory) to an existing machine", "b. Increasing the number of machines in a system", "c. Reducing the number of services in a microservice architecture", "d. Decreasing the system's load capacity"], answer: 0 },
    { question: "What is a 'data lake'?", choices: ["a. A centralized repository for storing all structured and unstructured data at any scale", "b. A relational database", "c. A cloud-based data analytics tool", "d. A data backup solution"], answer: 0 },
    { question: "What is the main benefit of using 'container orchestration' tools like Kubernetes?", choices: ["a. Automating the deployment, scaling, and management of containerized applications", "b. Writing code in multiple programming languages", "c. Managing network security", "d. Designing user interfaces"], answer: 0 },
    { question: "What is a 'message queue' used for?", choices: ["a. Decoupling applications and enabling asynchronous communication", "b. Storing relational data", "c. Managing user sessions", "d. Handling real-time data streaming"], answer: 0 },
    { question: "What does 'DevOps' aim to achieve in software development?", choices: ["a. Integration and automation of software development and IT operations", "b. Developing complex mathematical models", "c. Creating front-end applications", "d. Enhancing graphic design capabilities"], answer: 0 },
    { question: "What is 'cloud-native architecture'?", choices: ["a. An approach to building and running applications that exploit the advantages of the cloud computing delivery model", "b. An architecture for on-premises data centers", "c. A traditional monolithic system", "d. A method for offline application development"], answer: 0 },
    { question: "What is the 'event sourcing' pattern?", choices: ["a. A design pattern where state changes are stored as a sequence of events", "b. A method for querying databases", "c. A process for handling user authentication", "d. A technique for managing UI components"], answer: 0 },
    { question: "What does 'zero downtime deployment' refer to?", choices: ["a. Deploying new software versions without stopping the application", "b. Shutting down the system during deployment", "c. Ensuring the system operates only during specific hours", "d. Disabling system logs during deployment"], answer: 0 },
    { question: "What is a 'monorepo'?", choices: ["a. A single repository that holds the code for multiple projects", "b. A database schema", "c. A type of server", "d. A microservice"], answer: 0 },
    { question: "What is the primary goal of using a 'proxy server'?", choices: ["a. To act as an intermediary between a client and a server, often for anonymity or to bypass restrictions", "b. To store data securely", "c. To optimize database queries", "d. To manage cloud resources"], answer: 0 },
    { question: "What is 'infrastructure as code' (IaC)?", choices: ["a. Managing and provisioning computing infrastructure through machine-readable configuration files", "b. Coding practices for creating infrastructure software", "c. Writing code for front-end development", "d. A cloud-based code editor"], answer: 0 },
    { question: "What does 'blue-green deployment' involve?", choices: ["a. Maintaining two identical production environments, one live (blue) and one idle (green), to reduce downtime during updates", "b. Using two different programming languages", "c. Splitting database reads and writes", "d. Managing different network layers"], answer: 0 },
    { question: "What is 'API versioning'?", choices: ["a. Managing multiple versions of an API to ensure backward compatibility", "b. A method for encrypting API requests", "c. A technique for monitoring API performance", "d. A way to integrate different APIs"], answer: 0 },
    { question: "What is the purpose of 'unit testing'?", choices: ["a. Testing individual components or units of code for correctness", "b. Ensuring the entire system works together", "c. Verifying the user interface", "d. Validating database integrity"], answer: 0 },
    { question: "What does 'middleware' do in the context of a web application?", choices: ["a. Acts as an intermediary processing layer between the client and the server", "b. Handles static content delivery", "c. Manages database connections", "d. Optimizes network traffic"], answer: 0 },
    { question: "What is a 'distributed system'?", choices: ["a. A system in which components located on networked computers communicate and coordinate their actions by passing messages", "b. A single computer running multiple applications", "c. A database spread across multiple locations", "d. A method for distributing software licenses"], answer: 0 },
    { question: "What is the purpose of a 'data warehouse'?", choices: ["a. To store and manage large volumes of historical data for analysis and reporting", "b. To host real-time transactional data", "c. To cache frequently accessed data", "d. To store application logs"], answer: 0 },
    { question: "What does 'ACID' stand for in database systems?", choices: ["a. Atomicity, Consistency, Isolation, Durability", "b. Availability, Consistency, Integrity, Durability", "c. Authentication, Compression, Isolation, Distribution", "d. Access, Control, Isolation, Distribution"], answer: 0 },
    { question: "What is 'message-driven architecture'?", choices: ["a. An architecture that uses messages as the primary means of communication between components", "b. A design focused on user interface messaging", "c. A method for managing error handling", "d. A pattern for database schema design"], answer: 0 },
    { question: "What is 'domain-driven design' (DDD)?", choices: ["a. An approach to software development that focuses on modeling the domain based on input from domain experts", "b. A method for optimizing database queries", "c. A programming language", "d. A cloud deployment strategy"], answer: 0 },
    { question: "What does 'sharding' mean in database systems?", choices: ["a. Partitioning a database into smaller, more manageable pieces that can be spread across multiple servers", "b. Replicating the database across multiple regions", "c. Encrypting data for security", "d. Compressing database data"], answer: 0 },
    { question: "What is the role of 'continuous monitoring' in a CI/CD pipeline?", choices: ["a. To detect and respond to operational issues in real time", "b. To automate the deployment of applications", "c. To manage user access controls", "d. To compile and build software"], answer: 0 },
    { question: "What is a 'service level agreement' (SLA)?", choices: ["a. A contract between a service provider and a customer specifying the level of service expected", "b. A plan for scaling software systems", "c. A document outlining development best practices", "d. A security protocol for data transmission"], answer: 0 },
    { question: "What is the purpose of 'elasticity' in cloud computing?", choices: ["a. To dynamically adjust resources based on the workload", "b. To provide a fixed amount of resources regardless of demand", "c. To manually scale resources", "d. To offer unlimited data storage"], answer: 0 },
    { question: "What does 'ETL' stand for in data processing?", choices: ["a. Extract, Transform, Load", "b. Encrypt, Transmit, Log", "c. Evaluate, Test, Launch", "d. Execute, Transform, Link"], answer: 0 },
    { question: "What is 'polyglot persistence'?", choices: ["a. Using multiple types of databases or storage technologies within a single application", "b. Developing an application in multiple programming languages", "c. A method for internationalizing software", "d. A protocol for secure data storage"], answer: 0 },
    { question: "What is the main advantage of using 'NoSQL' databases?", choices: ["a. Flexibility in storing unstructured and semi-structured data", "b. Guaranteed ACID compliance", "c. Strong consistency models", "d. Traditional SQL-based querying"], answer: 0 },
    { question: "What is a 'data pipeline'?", choices: ["a. A series of data processing steps, often automated, that move data from one place to another", "b. A tool for visualizing data", "c. A method for encrypting data", "d. A type of database index"], answer: 0 },
    { question: "What is the purpose of a 'cache' in software systems?", choices: ["a. To temporarily store frequently accessed data for faster access", "b. To back up data", "c. To secure data during transmission", "d. To manage network connections"], answer: 0 },
];

let selectedQuestions = [];
let currentQuestion = 0;
let selectedAnswers = [];
let timer;
let redemptionTimer;
let certificateRedeemed = false; // Flag to track certificate redemption
const totalQuizTime = 10 * 60 * 1000; // 10 minutes in milliseconds
const redemptionTime = 1 * 60 * 1000; // 1 minutes in milliseconds

function startRedemptionTimer() {
    let timeRemaining = redemptionTime;
    const redemptionTimerElement = document.getElementById('redemption-timer');
    redemptionTimerElement.classList.remove('hide');

    redemptionTimer = setInterval(() => {
        const minutes = Math.floor(timeRemaining / (60 * 1000));
        const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

        redemptionTimerElement.textContent = `Time left to redeem: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(redemptionTimer);
            alert("Time to redeem the certificate has expired. The quiz will be reset.");
            restartQuiz();
        }

        timeRemaining -= 1000;
    }, 1000);
}

function getRandomQuestions() {
    const indices = Array.from(Array(softwareArchitectQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => softwareArchitectQuestions[index]);
}

function showQuestion(index) {
    const questionElement = document.getElementById('question');
    const choices = document.getElementsByClassName('choice');
    const questionCountElement = document.getElementById('question-count');
    questionCountElement.textContent = `Question ${index + 1}/10`;
    questionElement.textContent = selectedQuestions[index].question;
    for (let i = 0; i < choices.length; i++) {
        choices[i].textContent = selectedQuestions[index].choices[i];
        choices[i].classList.remove('selected');
        if (selectedAnswers[index] === i) {
            choices[i].classList.add('selected');
        }
    }
    document.getElementById('prev-btn').classList.toggle('hide', index === 0);
}

function selectAnswer(choice) {
    selectedAnswers[currentQuestion] = choice;
    const choices = document.getElementsByClassName('choice');
    for (let i = 0; i < choices.length; i++) {
        choices[i].classList.remove('selected');
    }
    choices[choice].classList.add('selected');
}

function nextQuestion() {
    if (currentQuestion < selectedQuestions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function showResult() {
    clearInterval(timer);
    const quizElement = document.getElementById('quiz');
    const resultElement = document.getElementById('result');
    quizElement.classList.add('hide');
    resultElement.classList.remove('hide');

    let correctAnswers = 0;

    for (let i = 0; i < selectedAnswers.length; i++) {
        if (selectedAnswers[i] === selectedQuestions[i].answer) {
            correctAnswers++;
        }
    }

    const resultMessageElement = document.getElementById('result-message');
    if (correctAnswers >= 8) {
        resultMessageElement.textContent = "Congratulations! You passed the quiz. You have 5 minutes to redeem your certificate.";
        if (!certificateRedeemed) {
            document.getElementById('redeem-certificate').classList.remove('hide');
            startRedemptionTimer();
        } else {
            resultMessageElement.textContent += " You have already redeemed your certificate.";
        }
    } else {
        resultMessageElement.textContent = "You didn't pass the quiz. Try again!";
    }

    document.getElementById('score').textContent = correctAnswers;
}

function restartQuiz() {
    clearTimeout(redemptionTimer); // Clear the redemption timer if it exists
    currentQuestion = 0;
    selectedAnswers = [];
    certificateRedeemed = false; // Reset certificate redeemed flag
    getRandomQuestions();
    document.getElementById('quiz').classList.remove('hide');
    document.getElementById('result').classList.add('hide');
    document.getElementById('redeem-certificate').classList.add('hide');
    document.getElementById('redemption-timer').classList.add('hide');
    startTimer(totalQuizTime);
    showQuestion(currentQuestion);
}

function startTimer(duration) {
    const timerElement = document.getElementById('timer');
    let timeRemaining = duration;

    timer = setInterval(() => {
        const minutes = Math.floor(timeRemaining / (60 * 1000));
        const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

        timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            showResult();
        }

        timeRemaining -= 1000;
    }, 1000);
}

function generateCertificate() {
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        alert("Please enter your name to generate the certificate.");
        return;
    }

    // Generate and download the certificate using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Certificate of Achievement", 105, 50, null, null, 'center');
    doc.text(`This is to certify that ${name}`, 105, 70, null, null, 'center');
    doc.text("has successfully passed the Python quiz.", 105, 90, null, null, 'center');
    doc.save(`${name}_certificate.pdf`);

    // Hide the redeem certificate section and show reset message
    certificateRedeemed = true; // Set certificate redeemed flag to true
    clearInterval(redemptionTimer);
    document.getElementById('redeem-certificate').classList.add('hide');
    document.getElementById('redemption-timer').classList.add('hide');
    alert("Your certificate has been generated. To redeem another certificate, you need to reset and pass the test again.");
}

// Initialize the quiz
getRandomQuestions();
showQuestion(currentQuestion);
>>>>>>> c6c1c3b1e383bca6621f08454d7295c3a6b65d5b
startTimer(totalQuizTime);