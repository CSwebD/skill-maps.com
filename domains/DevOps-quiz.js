<<<<<<< HEAD
const devOpsQuestions = [
    { question: "What is DevOps?", choices: ["a. A software development methodology", "b. A set of practices for collaboration between development and operations teams", "c. A type of software license", "d. A programming language"], answer: 1 },
    { question: "Which of the following tools is commonly used for Continuous Integration?", choices: ["a. Jenkins", "b. Git", "c. Docker", "d. Ansible"], answer: 0 },
    { question: "What does CI/CD stand for?", choices: ["a. Continuous Integration / Continuous Delivery", "b. Continuous Improvement / Continuous Deployment", "c. Continuous Installation / Continuous Deployment", "d. Continuous Integration / Continuous Deployment"], answer: 3 },
    { question: "Which tool is used for container orchestration?", choices: ["a. Docker", "b. Kubernetes", "c. GitLab", "d. Jenkins"], answer: 1 },
    { question: "What is Infrastructure as Code (IaC)?", choices: ["a. Writing software to manage infrastructure", "b. Programming infrastructure using code", "c. Managing infrastructure using machine learning", "d. Automating infrastructure management using code"], answer: 3 },
    { question: "What is a container?", choices: ["a. A lightweight, standalone, executable package that includes everything needed to run a piece of software", "b. A type of virtual machine", "c. A storage unit for application logs", "d. A method for securing code"], answer: 0 },
    { question: "Which of the following is a configuration management tool?", choices: ["a. Ansible", "b. Jenkins", "c. Docker", "d. Nagios"], answer: 0 },
    { question: "What does the 'pipeline' refer to in DevOps?", choices: ["a. A set of automated processes that allows developers to build, test, and deploy their code", "b. A method of managing team workflows", "c. A network connection between servers", "d. A type of database schema"], answer: 0 },
    { question: "What is the main benefit of using version control systems?", choices: ["a. To manage different versions of code and collaborate effectively", "b. To secure applications from attacks", "c. To monitor the performance of servers", "d. To deploy applications in the cloud"], answer: 0 },
    { question: "Which of the following is a popular version control system?", choices: ["a. Git", "b. Docker", "c. Kubernetes", "d. Chef"], answer: 0 },
    { question: "Which tool is commonly used for log monitoring in DevOps?", choices: ["a. Splunk", "b. Docker", "c. Jenkins", "d. Git"], answer: 0 },
    { question: "What does YAML stand for?", choices: ["a. Yet Another Markup Language", "b. YAML Ain't Markup Language", "c. YAML Markup Language", "d. Yet Another Management Language"], answer: 1 },
    { question: "What is Docker?", choices: ["a. A platform for developing, shipping, and running applications in containers", "b. A type of cloud storage", "c. A CI/CD tool", "d. A configuration management tool"], answer: 0 },
    { question: "Which tool is used to automate configuration management?", choices: ["a. Puppet", "b. Docker", "c. Kubernetes", "d. Grafana"], answer: 0 },
    { question: "What is a microservice?", choices: ["a. A small, independent service that performs a specific function", "b. A type of virtual machine", "c. A cloud service provider", "d. A monolithic application"], answer: 0 },
    { question: "Which of the following is a key practice in DevOps?", choices: ["a. Continuous Delivery", "b. Waterfall Development", "c. Manual Testing", "d. Big Bang Deployment"], answer: 0 },
    { question: "What is Jenkins primarily used for?", choices: ["a. Continuous Integration", "b. Monitoring infrastructure", "c. Configuration management", "d. Container orchestration"], answer: 0 },
    { question: "Which language is commonly used to write Dockerfiles?", choices: ["a. YAML", "b. JSON", "c. Shell script", "d. Python"], answer: 2 },
    { question: "What is the purpose of Ansible?", choices: ["a. To automate deployment, configuration management, and task automation", "b. To monitor server performance", "c. To provide cloud services", "d. To create virtual machines"], answer: 0 },
    { question: "What does 'immutable infrastructure' mean?", choices: ["a. Infrastructure that does not change after it is deployed", "b. Infrastructure that can be easily modified", "c. Temporary infrastructure for testing", "d. A backup infrastructure system"], answer: 0 },
    { question: "Which tool is known for infrastructure provisioning and managing cloud resources?", choices: ["a. Terraform", "b. Jenkins", "c. Docker", "d. Grafana"], answer: 0 },
    { question: "What is the role of a reverse proxy in a web server setup?", choices: ["a. To distribute incoming requests to different servers", "b. To block unauthorized access", "c. To serve static files", "d. To monitor server health"], answer: 0 },
    { question: "Which of the following is a benefit of using containers?", choices: ["a. Isolation of applications", "b. Increased resource usage", "c. Increased latency", "d. Limited scalability"], answer: 0 },
    { question: "What is a key feature of Kubernetes?", choices: ["a. Container orchestration", "b. Configuration management", "c. Continuous integration", "d. Log aggregation"], answer: 0 },
    { question: "Which tool is used for monitoring and alerting in DevOps?", choices: ["a. Prometheus", "b. Docker", "c. Git", "d. Jenkins"], answer: 0 },
    { question: "What is the purpose of a load balancer?", choices: ["a. To distribute network or application traffic across multiple servers", "b. To monitor application performance", "c. To manage server configurations", "d. To backup data"], answer: 0 },
    { question: "Which of the following is a benefit of continuous delivery?", choices: ["a. Faster time to market", "b. Increased code quality", "c. Reduced deployment risk", "d. All of the above"], answer: 3 },
    { question: "What is a 'blue-green deployment'?", choices: ["a. A method for minimizing downtime and risk by running two identical production environments", "b. A type of container orchestration", "c. A method for testing new features", "d. A strategy for rolling out database updates"], answer: 0 },
    { question: "Which of the following best describes 'infrastructure as code'?", choices: ["a. Automating infrastructure management using scripts", "b. A method of manual infrastructure setup", "c. A type of cloud computing service", "d. A software licensing model"], answer: 0 },
    { question: "What is a 'canary release'?", choices: ["a. A technique to reduce the risk of deploying a new software version", "b. A method of scaling databases", "c. A type of monitoring tool", "d. A strategy for rolling back changes"], answer: 0 },
    { question: "Which of the following tools is used for source code management?", choices: ["a. Git", "b. Docker", "c. Ansible", "d. Jenkins"], answer: 0 },
    { question: "What is a key characteristic of microservices architecture?", choices: ["a. Services are loosely coupled and independently deployable", "b. Services are tightly coupled and interdependent", "c. All services run on the same server", "d. Services are deployed as part of a monolithic application"], answer: 0 },
    { question: "Which tool is commonly used for automated testing in CI/CD pipelines?", choices: ["a. Selenium", "b. Docker", "c. Git", "d. Nagios"], answer: 0 },
    { question: "What is a primary advantage of using cloud computing in DevOps?", choices: ["a. Scalability and flexibility of resources", "b. Increased cost", "c. Less control over infrastructure", "d. Inability to automate tasks"], answer: 0 },
    { question: "Which of the following is a common practice in DevOps?", choices: ["a. Continuous Monitoring", "b. Big Bang Deployment", "c. Waterfall Development", "d. Manual Integration"], answer: 0 },
    { question: "What is the purpose of a build tool like Maven or Gradle?", choices: ["a. To automate the build process, including compiling code and managing dependencies", "b. To monitor application performance", "c. To provision infrastructure", "d. To orchestrate containers"], answer: 0 },
    { question: "What is a 'pipeline as code'?", choices: ["a. Managing the CI/CD pipeline configuration using code", "b. Writing the entire application as a single script", "c. A type of network configuration", "d. A monitoring tool for network traffic"], answer: 0 },
    { question: "Which of the following is a key component of DevOps culture?", choices: ["a. Collaboration between development and operations teams", "b. Siloed team structures", "c. Strict role demarcation", "d. Manual deployment processes"], answer: 0 },
    { question: "What is a 'rolling update'?", choices: ["a. A method of updating applications incrementally without downtime", "b. A method of scaling applications", "c. A strategy for monitoring system health", "d. A type of network security protocol"], answer: 0 },
    { question: "Which tool is used for continuous delivery and continuous deployment?", choices: ["a. GitLab CI/CD", "b. Nagios", "c. Docker", "d. Terraform"], answer: 0 },
    { question: "What does 'auto-scaling' refer to?", choices: ["a. Automatically adjusting the number of active instances based on demand", "b. Manually adjusting server capacity", "c. Automating the scaling of databases", "d. A feature for monitoring application performance"], answer: 0 },
    { question: "What is a 'service mesh'?", choices: ["a. A dedicated infrastructure layer for managing service-to-service communication", "b. A type of network architecture", "c. A method for deploying applications", "d. A container orchestration tool"], answer: 0 },
    { question: "What is 'prometheus' commonly used for?", choices: ["a. Monitoring and alerting", "b. Source code management", "c. Continuous integration", "d. Infrastructure provisioning"], answer: 0 },
    { question: "What is the role of 'SRE' (Site Reliability Engineering) in a DevOps context?", choices: ["a. Ensuring the reliability and availability of systems", "b. Writing application code", "c. Designing user interfaces", "d. Managing human resources"], answer: 0 },
    { question: "Which tool is known for continuous monitoring and observability?", choices: ["a. Grafana", "b. Ansible", "c. Git", "d. Docker"], answer: 0 },
    { question: "What is 'serverless computing'?", choices: ["a. A cloud computing model where the cloud provider manages the infrastructure and scaling", "b. A type of virtual server", "c. An on-premises data center solution", "d. A method for running applications on bare-metal servers"], answer: 0 },
    { question: "What is a key benefit of using containers?", choices: ["a. Consistent environments across different stages of development", "b. Reduced application performance", "c. Increased application size", "d. Incompatibility across different systems"], answer: 0 },
    { question: "What does 'APM' stand for in a DevOps context?", choices: ["a. Application Performance Monitoring", "b. Automated Process Management", "c. Active Packet Monitoring", "d. Application Programming Model"], answer: 0 }
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
    const indices = Array.from(Array(devOpsQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => devOpsQuestions[index]);
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
const devOpsQuestions = [
    { question: "What is DevOps?", choices: ["a. A software development methodology", "b. A set of practices for collaboration between development and operations teams", "c. A type of software license", "d. A programming language"], answer: 1 },
    { question: "Which of the following tools is commonly used for Continuous Integration?", choices: ["a. Jenkins", "b. Git", "c. Docker", "d. Ansible"], answer: 0 },
    { question: "What does CI/CD stand for?", choices: ["a. Continuous Integration / Continuous Delivery", "b. Continuous Improvement / Continuous Deployment", "c. Continuous Installation / Continuous Deployment", "d. Continuous Integration / Continuous Deployment"], answer: 3 },
    { question: "Which tool is used for container orchestration?", choices: ["a. Docker", "b. Kubernetes", "c. GitLab", "d. Jenkins"], answer: 1 },
    { question: "What is Infrastructure as Code (IaC)?", choices: ["a. Writing software to manage infrastructure", "b. Programming infrastructure using code", "c. Managing infrastructure using machine learning", "d. Automating infrastructure management using code"], answer: 3 },
    { question: "What is a container?", choices: ["a. A lightweight, standalone, executable package that includes everything needed to run a piece of software", "b. A type of virtual machine", "c. A storage unit for application logs", "d. A method for securing code"], answer: 0 },
    { question: "Which of the following is a configuration management tool?", choices: ["a. Ansible", "b. Jenkins", "c. Docker", "d. Nagios"], answer: 0 },
    { question: "What does the 'pipeline' refer to in DevOps?", choices: ["a. A set of automated processes that allows developers to build, test, and deploy their code", "b. A method of managing team workflows", "c. A network connection between servers", "d. A type of database schema"], answer: 0 },
    { question: "What is the main benefit of using version control systems?", choices: ["a. To manage different versions of code and collaborate effectively", "b. To secure applications from attacks", "c. To monitor the performance of servers", "d. To deploy applications in the cloud"], answer: 0 },
    { question: "Which of the following is a popular version control system?", choices: ["a. Git", "b. Docker", "c. Kubernetes", "d. Chef"], answer: 0 },
    { question: "Which tool is commonly used for log monitoring in DevOps?", choices: ["a. Splunk", "b. Docker", "c. Jenkins", "d. Git"], answer: 0 },
    { question: "What does YAML stand for?", choices: ["a. Yet Another Markup Language", "b. YAML Ain't Markup Language", "c. YAML Markup Language", "d. Yet Another Management Language"], answer: 1 },
    { question: "What is Docker?", choices: ["a. A platform for developing, shipping, and running applications in containers", "b. A type of cloud storage", "c. A CI/CD tool", "d. A configuration management tool"], answer: 0 },
    { question: "Which tool is used to automate configuration management?", choices: ["a. Puppet", "b. Docker", "c. Kubernetes", "d. Grafana"], answer: 0 },
    { question: "What is a microservice?", choices: ["a. A small, independent service that performs a specific function", "b. A type of virtual machine", "c. A cloud service provider", "d. A monolithic application"], answer: 0 },
    { question: "Which of the following is a key practice in DevOps?", choices: ["a. Continuous Delivery", "b. Waterfall Development", "c. Manual Testing", "d. Big Bang Deployment"], answer: 0 },
    { question: "What is Jenkins primarily used for?", choices: ["a. Continuous Integration", "b. Monitoring infrastructure", "c. Configuration management", "d. Container orchestration"], answer: 0 },
    { question: "Which language is commonly used to write Dockerfiles?", choices: ["a. YAML", "b. JSON", "c. Shell script", "d. Python"], answer: 2 },
    { question: "What is the purpose of Ansible?", choices: ["a. To automate deployment, configuration management, and task automation", "b. To monitor server performance", "c. To provide cloud services", "d. To create virtual machines"], answer: 0 },
    { question: "What does 'immutable infrastructure' mean?", choices: ["a. Infrastructure that does not change after it is deployed", "b. Infrastructure that can be easily modified", "c. Temporary infrastructure for testing", "d. A backup infrastructure system"], answer: 0 },
    { question: "Which tool is known for infrastructure provisioning and managing cloud resources?", choices: ["a. Terraform", "b. Jenkins", "c. Docker", "d. Grafana"], answer: 0 },
    { question: "What is the role of a reverse proxy in a web server setup?", choices: ["a. To distribute incoming requests to different servers", "b. To block unauthorized access", "c. To serve static files", "d. To monitor server health"], answer: 0 },
    { question: "Which of the following is a benefit of using containers?", choices: ["a. Isolation of applications", "b. Increased resource usage", "c. Increased latency", "d. Limited scalability"], answer: 0 },
    { question: "What is a key feature of Kubernetes?", choices: ["a. Container orchestration", "b. Configuration management", "c. Continuous integration", "d. Log aggregation"], answer: 0 },
    { question: "Which tool is used for monitoring and alerting in DevOps?", choices: ["a. Prometheus", "b. Docker", "c. Git", "d. Jenkins"], answer: 0 },
    { question: "What is the purpose of a load balancer?", choices: ["a. To distribute network or application traffic across multiple servers", "b. To monitor application performance", "c. To manage server configurations", "d. To backup data"], answer: 0 },
    { question: "Which of the following is a benefit of continuous delivery?", choices: ["a. Faster time to market", "b. Increased code quality", "c. Reduced deployment risk", "d. All of the above"], answer: 3 },
    { question: "What is a 'blue-green deployment'?", choices: ["a. A method for minimizing downtime and risk by running two identical production environments", "b. A type of container orchestration", "c. A method for testing new features", "d. A strategy for rolling out database updates"], answer: 0 },
    { question: "Which of the following best describes 'infrastructure as code'?", choices: ["a. Automating infrastructure management using scripts", "b. A method of manual infrastructure setup", "c. A type of cloud computing service", "d. A software licensing model"], answer: 0 },
    { question: "What is a 'canary release'?", choices: ["a. A technique to reduce the risk of deploying a new software version", "b. A method of scaling databases", "c. A type of monitoring tool", "d. A strategy for rolling back changes"], answer: 0 },
    { question: "Which of the following tools is used for source code management?", choices: ["a. Git", "b. Docker", "c. Ansible", "d. Jenkins"], answer: 0 },
    { question: "What is a key characteristic of microservices architecture?", choices: ["a. Services are loosely coupled and independently deployable", "b. Services are tightly coupled and interdependent", "c. All services run on the same server", "d. Services are deployed as part of a monolithic application"], answer: 0 },
    { question: "Which tool is commonly used for automated testing in CI/CD pipelines?", choices: ["a. Selenium", "b. Docker", "c. Git", "d. Nagios"], answer: 0 },
    { question: "What is a primary advantage of using cloud computing in DevOps?", choices: ["a. Scalability and flexibility of resources", "b. Increased cost", "c. Less control over infrastructure", "d. Inability to automate tasks"], answer: 0 },
    { question: "Which of the following is a common practice in DevOps?", choices: ["a. Continuous Monitoring", "b. Big Bang Deployment", "c. Waterfall Development", "d. Manual Integration"], answer: 0 },
    { question: "What is the purpose of a build tool like Maven or Gradle?", choices: ["a. To automate the build process, including compiling code and managing dependencies", "b. To monitor application performance", "c. To provision infrastructure", "d. To orchestrate containers"], answer: 0 },
    { question: "What is a 'pipeline as code'?", choices: ["a. Managing the CI/CD pipeline configuration using code", "b. Writing the entire application as a single script", "c. A type of network configuration", "d. A monitoring tool for network traffic"], answer: 0 },
    { question: "Which of the following is a key component of DevOps culture?", choices: ["a. Collaboration between development and operations teams", "b. Siloed team structures", "c. Strict role demarcation", "d. Manual deployment processes"], answer: 0 },
    { question: "What is a 'rolling update'?", choices: ["a. A method of updating applications incrementally without downtime", "b. A method of scaling applications", "c. A strategy for monitoring system health", "d. A type of network security protocol"], answer: 0 },
    { question: "Which tool is used for continuous delivery and continuous deployment?", choices: ["a. GitLab CI/CD", "b. Nagios", "c. Docker", "d. Terraform"], answer: 0 },
    { question: "What does 'auto-scaling' refer to?", choices: ["a. Automatically adjusting the number of active instances based on demand", "b. Manually adjusting server capacity", "c. Automating the scaling of databases", "d. A feature for monitoring application performance"], answer: 0 },
    { question: "What is a 'service mesh'?", choices: ["a. A dedicated infrastructure layer for managing service-to-service communication", "b. A type of network architecture", "c. A method for deploying applications", "d. A container orchestration tool"], answer: 0 },
    { question: "What is 'prometheus' commonly used for?", choices: ["a. Monitoring and alerting", "b. Source code management", "c. Continuous integration", "d. Infrastructure provisioning"], answer: 0 },
    { question: "What is the role of 'SRE' (Site Reliability Engineering) in a DevOps context?", choices: ["a. Ensuring the reliability and availability of systems", "b. Writing application code", "c. Designing user interfaces", "d. Managing human resources"], answer: 0 },
    { question: "Which tool is known for continuous monitoring and observability?", choices: ["a. Grafana", "b. Ansible", "c. Git", "d. Docker"], answer: 0 },
    { question: "What is 'serverless computing'?", choices: ["a. A cloud computing model where the cloud provider manages the infrastructure and scaling", "b. A type of virtual server", "c. An on-premises data center solution", "d. A method for running applications on bare-metal servers"], answer: 0 },
    { question: "What is a key benefit of using containers?", choices: ["a. Consistent environments across different stages of development", "b. Reduced application performance", "c. Increased application size", "d. Incompatibility across different systems"], answer: 0 },
    { question: "What does 'APM' stand for in a DevOps context?", choices: ["a. Application Performance Monitoring", "b. Automated Process Management", "c. Active Packet Monitoring", "d. Application Programming Model"], answer: 0 }
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
    const indices = Array.from(Array(devOpsQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => devOpsQuestions[index]);
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