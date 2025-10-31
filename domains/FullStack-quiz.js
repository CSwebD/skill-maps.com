<<<<<<< HEAD
const fullStackQuestions = [
    { question: "What does REST stand for?", choices: ["a. Representational State Transfer", "b. Remote Server Transaction", "c. Reliable Standard Transfer", "d. Real-time State Transfer"], answer: 0 },
    { question: "Which of the following is a front-end framework?", choices: ["a. Angular", "b. Django", "c. Flask", "d. Laravel"], answer: 0 },
    { question: "What is the purpose of a middleware in a web application?", choices: ["a. To handle requests between a web server and database", "b. To handle static file serving", "c. To serve as a database layer", "d. To perform background jobs"], answer: 0 },
    { question: "Which language is primarily used for styling web pages?", choices: ["a. CSS", "b. HTML", "c. JavaScript", "d. Python"], answer: 0 },
    { question: "Which of the following is a NoSQL database?", choices: ["a. MongoDB", "b. MySQL", "c. PostgreSQL", "d. SQLite"], answer: 0 },
    { question: "What is the role of a web server?", choices: ["a. To serve web pages to clients", "b. To execute front-end code", "c. To provide security for network traffic", "d. To store multimedia files"], answer: 0 },
    { question: "Which of the following is a JavaScript runtime environment?", choices: ["a. Node.js", "b. Ruby on Rails", "c. Django", "d. Flask"], answer: 0 },
    { question: "What does 'CRUD' stand for?", choices: ["a. Create, Read, Update, Delete", "b. Connect, Read, Update, Delete", "c. Compute, Render, Update, Deploy", "d. Create, Retrieve, Update, Deploy"], answer: 0 },
    { question: "Which tool is commonly used for version control?", choices: ["a. Git", "b. Docker", "c. Jenkins", "d. Kubernetes"], answer: 0 },
    { question: "What is React?", choices: ["a. A JavaScript library for building user interfaces", "b. A front-end framework for styling", "c. A database management system", "d. A back-end server"], answer: 0 },
    { question: "Which protocol is commonly used for secure communication over a computer network?", choices: ["a. HTTPS", "b. HTTP", "c. FTP", "d. SMTP"], answer: 0 },
    { question: "What is the purpose of an API?", choices: ["a. To allow different systems to communicate with each other", "b. To store data in a database", "c. To style web pages", "d. To manage user authentication"], answer: 0 },
    { question: "Which of the following is a relational database management system?", choices: ["a. MySQL", "b. MongoDB", "c. Redis", "d. Cassandra"], answer: 0 },
    { question: "What does DOM stand for in web development?", choices: ["a. Document Object Model", "b. Data Object Module", "c. Data Orientation Module", "d. Document Orientation Model"], answer: 0 },
    { question: "Which JavaScript framework is known for its virtual DOM feature?", choices: ["a. React", "b. Vue.js", "c. Angular", "d. Ember.js"], answer: 0 },
    { question: "What is Bootstrap used for?", choices: ["a. Front-end component library for designing responsive web pages", "b. Back-end development framework", "c. Database management", "d. Web server configuration"], answer: 0 },
    { question: "Which of the following is a CSS preprocessor?", choices: ["a. SASS", "b. JavaScript", "c. PHP", "d. Python"], answer: 0 },
    { question: "What does 'MVC' stand for in software architecture?", choices: ["a. Model View Controller", "b. Model View Component", "c. Modular View Controller", "d. Main View Controller"], answer: 0 },
    { question: "Which technology is used to make web pages interactive?", choices: ["a. JavaScript", "b. HTML", "c. CSS", "d. XML"], answer: 0 },
    { question: "What is Express.js commonly used for?", choices: ["a. Web application framework for Node.js", "b. CSS framework for responsive design", "c. JavaScript library for building UI", "d. Database management"], answer: 0 },
    { question: "Which language is commonly used for server-side scripting?", choices: ["a. PHP", "b. CSS", "c. SQL", "d. HTML"], answer: 0 },
    { question: "What is AJAX used for?", choices: ["a. Asynchronous JavaScript and XML for updating web pages without reloading", "b. Database querying", "c. Server-side rendering", "d. Styling web pages"], answer: 0 },
    { question: "What does SQL stand for?", choices: ["a. Structured Query Language", "b. Simple Query Language", "c. Structured Query Logic", "d. Simplified Query Language"], answer: 0 },
    { question: "Which of the following is a key feature of RESTful APIs?", choices: ["a. Statelessness", "b. Stateful sessions", "c. Tight coupling", "d. Use of SOAP protocol"], answer: 0 },
    { question: "What is the purpose of JWT (JSON Web Tokens)?", choices: ["a. Secure transmission of information between parties as a JSON object", "b. Data storage", "c. Styling web pages", "d. Server-side scripting"], answer: 0 },
    { question: "Which of the following is a popular cloud service provider?", choices: ["a. AWS", "b. Django", "c. Vue.js", "d. SQLite"], answer: 0 },
    { question: "What is the primary purpose of a CDN (Content Delivery Network)?", choices: ["a. To deliver content to users with high availability and performance", "b. To store user data securely", "c. To host web applications", "d. To manage database transactions"], answer: 0 },
    { question: "What does the 'async' keyword do in JavaScript?", choices: ["a. Declares an asynchronous function", "b. Creates a synchronous function", "c. Declares a variable", "d. Logs an error"], answer: 0 },
    { question: "Which of the following is a NoSQL database?", choices: ["a. CouchDB", "b. PostgreSQL", "c. Oracle", "d. MariaDB"], answer: 0 },
    { question: "What is the purpose of a linter in programming?", choices: ["a. To analyze code for potential errors and enforce coding standards", "b. To execute code", "c. To compile code", "d. To manage databases"], answer: 0 },
    { question: "Which HTTP method is used to create a new resource?", choices: ["a. POST", "b. GET", "c. PUT", "d. DELETE"], answer: 0 },
    { question: "What is a single-page application (SPA)?", choices: ["a. A web application that interacts with the user by dynamically rewriting the current page", "b. A website with only one page", "c. An application that runs on a single server", "d. A web application built using only HTML"], answer: 0 },
    { question: "Which of the following is a version of ECMAScript?", choices: ["a. ES6", "b. HTML5", "c. CSS3", "d. PHP7"], answer: 0 },
    { question: "What is the purpose of webpack in web development?", choices: ["a. To bundle JavaScript files for use in a browser", "b. To manage databases", "c. To style web pages", "d. To optimize images"], answer: 0 },
    { question: "Which language is commonly used for writing backend applications in Django?", choices: ["a. Python", "b. JavaScript", "c. Ruby", "d. PHP"], answer: 0 },
    { question: "What does the acronym HTTP stand for?", choices: ["a. Hypertext Transfer Protocol", "b. Hyperlink Transfer Protocol", "c. Hypertext Transmission Protocol", "d. Hyperlink Transmission Protocol"], answer: 0 },
    { question: "Which of the following is a popular JavaScript library for building user interfaces?", choices: ["a. React", "b. Django", "c. Flask", "d. Laravel"], answer: 0 },
    { question: "What is the use of Redux in a React application?", choices: ["a. State management", "b. UI rendering", "c. API integration", "d. Styling"], answer: 0 },
    { question: "Which of the following is a feature of GraphQL?", choices: ["a. Allows clients to request only the data they need", "b. Strictly RESTful", "c. Uses SQL for queries", "d. Requires XML for data interchange"], answer: 0 },
    { question: "Which tag is used to include JavaScript in an HTML document?", choices: ["a. <script>", "b. <style>", "c. <meta>", "d. <link>"], answer: 0 },
    { question: "What does CORS stand for?", choices: ["a. Cross-Origin Resource Sharing", "b. Client-Origin Resource Sharing", "c. Cross-Original Resource Security", "d. Client-Original Resource Security"], answer: 0 },
    { question: "What is the purpose of using a reverse proxy?", choices: ["a. To distribute client requests to multiple servers", "b. To compile frontend code", "c. To manage databases", "d. To handle client-side routing"], answer: 0 },
    { question: "Which of the following is a Python web framework?", choices: ["a. Flask", "b. React", "c. Angular", "d. Vue.js"], answer: 0 },
    { question: "What is the primary use of WebSockets?", choices: ["a. To enable real-time, two-way communication between a client and server", "b. To serve static content", "c. To manage user authentication", "d. To style web pages"], answer: 0 },
    { question: "What is the purpose of a package manager like npm or yarn?", choices: ["a. To manage and install dependencies for a project", "b. To compile code", "c. To deploy applications", "d. To monitor server performance"], answer: 0 },
    { question: "Which of the following is a characteristic of a PWA (Progressive Web App)?", choices: ["a. Offline capabilities and improved performance", "b. Requires a native app store installation", "c. Only works on specific operating systems", "d. Cannot be added to a home screen"], answer: 0 },
    { question: "What does JSON stand for?", choices: ["a. JavaScript Object Notation", "b. JavaScript Online Notation", "c. Java Simple Object Notation", "d. Java Syntax Object Notation"], answer: 0 },
    { question: "Which of the following is a database query language?", choices: ["a. SQL", "b. HTML", "c. CSS", "d. HTTP"], answer: 0 }
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
    const indices = Array.from(Array(fullStackQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => fullStackQuestions[index]);
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
const fullStackQuestions = [
    { question: "What does REST stand for?", choices: ["a. Representational State Transfer", "b. Remote Server Transaction", "c. Reliable Standard Transfer", "d. Real-time State Transfer"], answer: 0 },
    { question: "Which of the following is a front-end framework?", choices: ["a. Angular", "b. Django", "c. Flask", "d. Laravel"], answer: 0 },
    { question: "What is the purpose of a middleware in a web application?", choices: ["a. To handle requests between a web server and database", "b. To handle static file serving", "c. To serve as a database layer", "d. To perform background jobs"], answer: 0 },
    { question: "Which language is primarily used for styling web pages?", choices: ["a. CSS", "b. HTML", "c. JavaScript", "d. Python"], answer: 0 },
    { question: "Which of the following is a NoSQL database?", choices: ["a. MongoDB", "b. MySQL", "c. PostgreSQL", "d. SQLite"], answer: 0 },
    { question: "What is the role of a web server?", choices: ["a. To serve web pages to clients", "b. To execute front-end code", "c. To provide security for network traffic", "d. To store multimedia files"], answer: 0 },
    { question: "Which of the following is a JavaScript runtime environment?", choices: ["a. Node.js", "b. Ruby on Rails", "c. Django", "d. Flask"], answer: 0 },
    { question: "What does 'CRUD' stand for?", choices: ["a. Create, Read, Update, Delete", "b. Connect, Read, Update, Delete", "c. Compute, Render, Update, Deploy", "d. Create, Retrieve, Update, Deploy"], answer: 0 },
    { question: "Which tool is commonly used for version control?", choices: ["a. Git", "b. Docker", "c. Jenkins", "d. Kubernetes"], answer: 0 },
    { question: "What is React?", choices: ["a. A JavaScript library for building user interfaces", "b. A front-end framework for styling", "c. A database management system", "d. A back-end server"], answer: 0 },
    { question: "Which protocol is commonly used for secure communication over a computer network?", choices: ["a. HTTPS", "b. HTTP", "c. FTP", "d. SMTP"], answer: 0 },
    { question: "What is the purpose of an API?", choices: ["a. To allow different systems to communicate with each other", "b. To store data in a database", "c. To style web pages", "d. To manage user authentication"], answer: 0 },
    { question: "Which of the following is a relational database management system?", choices: ["a. MySQL", "b. MongoDB", "c. Redis", "d. Cassandra"], answer: 0 },
    { question: "What does DOM stand for in web development?", choices: ["a. Document Object Model", "b. Data Object Module", "c. Data Orientation Module", "d. Document Orientation Model"], answer: 0 },
    { question: "Which JavaScript framework is known for its virtual DOM feature?", choices: ["a. React", "b. Vue.js", "c. Angular", "d. Ember.js"], answer: 0 },
    { question: "What is Bootstrap used for?", choices: ["a. Front-end component library for designing responsive web pages", "b. Back-end development framework", "c. Database management", "d. Web server configuration"], answer: 0 },
    { question: "Which of the following is a CSS preprocessor?", choices: ["a. SASS", "b. JavaScript", "c. PHP", "d. Python"], answer: 0 },
    { question: "What does 'MVC' stand for in software architecture?", choices: ["a. Model View Controller", "b. Model View Component", "c. Modular View Controller", "d. Main View Controller"], answer: 0 },
    { question: "Which technology is used to make web pages interactive?", choices: ["a. JavaScript", "b. HTML", "c. CSS", "d. XML"], answer: 0 },
    { question: "What is Express.js commonly used for?", choices: ["a. Web application framework for Node.js", "b. CSS framework for responsive design", "c. JavaScript library for building UI", "d. Database management"], answer: 0 },
    { question: "Which language is commonly used for server-side scripting?", choices: ["a. PHP", "b. CSS", "c. SQL", "d. HTML"], answer: 0 },
    { question: "What is AJAX used for?", choices: ["a. Asynchronous JavaScript and XML for updating web pages without reloading", "b. Database querying", "c. Server-side rendering", "d. Styling web pages"], answer: 0 },
    { question: "What does SQL stand for?", choices: ["a. Structured Query Language", "b. Simple Query Language", "c. Structured Query Logic", "d. Simplified Query Language"], answer: 0 },
    { question: "Which of the following is a key feature of RESTful APIs?", choices: ["a. Statelessness", "b. Stateful sessions", "c. Tight coupling", "d. Use of SOAP protocol"], answer: 0 },
    { question: "What is the purpose of JWT (JSON Web Tokens)?", choices: ["a. Secure transmission of information between parties as a JSON object", "b. Data storage", "c. Styling web pages", "d. Server-side scripting"], answer: 0 },
    { question: "Which of the following is a popular cloud service provider?", choices: ["a. AWS", "b. Django", "c. Vue.js", "d. SQLite"], answer: 0 },
    { question: "What is the primary purpose of a CDN (Content Delivery Network)?", choices: ["a. To deliver content to users with high availability and performance", "b. To store user data securely", "c. To host web applications", "d. To manage database transactions"], answer: 0 },
    { question: "What does the 'async' keyword do in JavaScript?", choices: ["a. Declares an asynchronous function", "b. Creates a synchronous function", "c. Declares a variable", "d. Logs an error"], answer: 0 },
    { question: "Which of the following is a NoSQL database?", choices: ["a. CouchDB", "b. PostgreSQL", "c. Oracle", "d. MariaDB"], answer: 0 },
    { question: "What is the purpose of a linter in programming?", choices: ["a. To analyze code for potential errors and enforce coding standards", "b. To execute code", "c. To compile code", "d. To manage databases"], answer: 0 },
    { question: "Which HTTP method is used to create a new resource?", choices: ["a. POST", "b. GET", "c. PUT", "d. DELETE"], answer: 0 },
    { question: "What is a single-page application (SPA)?", choices: ["a. A web application that interacts with the user by dynamically rewriting the current page", "b. A website with only one page", "c. An application that runs on a single server", "d. A web application built using only HTML"], answer: 0 },
    { question: "Which of the following is a version of ECMAScript?", choices: ["a. ES6", "b. HTML5", "c. CSS3", "d. PHP7"], answer: 0 },
    { question: "What is the purpose of webpack in web development?", choices: ["a. To bundle JavaScript files for use in a browser", "b. To manage databases", "c. To style web pages", "d. To optimize images"], answer: 0 },
    { question: "Which language is commonly used for writing backend applications in Django?", choices: ["a. Python", "b. JavaScript", "c. Ruby", "d. PHP"], answer: 0 },
    { question: "What does the acronym HTTP stand for?", choices: ["a. Hypertext Transfer Protocol", "b. Hyperlink Transfer Protocol", "c. Hypertext Transmission Protocol", "d. Hyperlink Transmission Protocol"], answer: 0 },
    { question: "Which of the following is a popular JavaScript library for building user interfaces?", choices: ["a. React", "b. Django", "c. Flask", "d. Laravel"], answer: 0 },
    { question: "What is the use of Redux in a React application?", choices: ["a. State management", "b. UI rendering", "c. API integration", "d. Styling"], answer: 0 },
    { question: "Which of the following is a feature of GraphQL?", choices: ["a. Allows clients to request only the data they need", "b. Strictly RESTful", "c. Uses SQL for queries", "d. Requires XML for data interchange"], answer: 0 },
    { question: "Which tag is used to include JavaScript in an HTML document?", choices: ["a. <script>", "b. <style>", "c. <meta>", "d. <link>"], answer: 0 },
    { question: "What does CORS stand for?", choices: ["a. Cross-Origin Resource Sharing", "b. Client-Origin Resource Sharing", "c. Cross-Original Resource Security", "d. Client-Original Resource Security"], answer: 0 },
    { question: "What is the purpose of using a reverse proxy?", choices: ["a. To distribute client requests to multiple servers", "b. To compile frontend code", "c. To manage databases", "d. To handle client-side routing"], answer: 0 },
    { question: "Which of the following is a Python web framework?", choices: ["a. Flask", "b. React", "c. Angular", "d. Vue.js"], answer: 0 },
    { question: "What is the primary use of WebSockets?", choices: ["a. To enable real-time, two-way communication between a client and server", "b. To serve static content", "c. To manage user authentication", "d. To style web pages"], answer: 0 },
    { question: "What is the purpose of a package manager like npm or yarn?", choices: ["a. To manage and install dependencies for a project", "b. To compile code", "c. To deploy applications", "d. To monitor server performance"], answer: 0 },
    { question: "Which of the following is a characteristic of a PWA (Progressive Web App)?", choices: ["a. Offline capabilities and improved performance", "b. Requires a native app store installation", "c. Only works on specific operating systems", "d. Cannot be added to a home screen"], answer: 0 },
    { question: "What does JSON stand for?", choices: ["a. JavaScript Object Notation", "b. JavaScript Online Notation", "c. Java Simple Object Notation", "d. Java Syntax Object Notation"], answer: 0 },
    { question: "Which of the following is a database query language?", choices: ["a. SQL", "b. HTML", "c. CSS", "d. HTTP"], answer: 0 }
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
    const indices = Array.from(Array(fullStackQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => fullStackQuestions[index]);
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