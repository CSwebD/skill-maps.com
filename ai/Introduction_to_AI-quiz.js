<<<<<<< HEAD
const aiQuestions = [
    { question: "What year did the term 'Artificial Intelligence' get coined?", choices: ["a. 1950", "b. 1956", "c. 1965", "d. 1972"], answer: 1 },
    { question: "Who is considered the father of Artificial Intelligence?", choices: ["a. Alan Turing", "b. John McCarthy", "c. Marvin Minsky", "d. Herbert Simon"], answer: 1 },
    { question: "Which conference is recognized as the birth of AI?", choices: ["a. Dartmouth Conference", "b. Turing Conference", "c. MIT AI Conference", "d. Stanford AI Symposium"], answer: 0 },
    { question: "In what decade did AI experience its first 'AI winter'?", choices: ["a. 1960s", "b. 1970s", "c. 1980s", "d. 1990s"], answer: 1 },
    { question: "What was the name of the first AI program, written by Allen Newell and Herbert A. Simon?", choices: ["a. ELIZA", "b. SHRDLU", "c. Logic Theorist", "d. Deep Blue"], answer: 2 },
    { question: "Which AI system famously defeated Garry Kasparov in chess in 1997?", choices: ["a. Watson", "b. AlphaGo", "c. Deep Blue", "d. Eliza"], answer: 2 },
    { question: "What was the first chatbot program developed in the 1960s?", choices: ["a. ELIZA", "b. Alice", "c. Siri", "d. Cortana"], answer: 0 },
    { question: "Who introduced the Turing Test, a test of a machine's ability to exhibit intelligent behavior?", choices: ["a. John McCarthy", "b. Alan Turing", "c. Marvin Minsky", "d. Claude Shannon"], answer: 1 },
    { question: "Which field of AI involves the simulation of human thought processes in a computerized model?", choices: ["a. Machine Learning", "b. Neural Networks", "c. Cognitive Computing", "d. Natural Language Processing"], answer: 2 },
    { question: "What is the name of the AI that won the game show Jeopardy! in 2011?", choices: ["a. Watson", "b. AlphaGo", "c. Siri", "d. DeepMind"], answer: 0 },
    { question: "What is the focus of narrow AI?", choices: ["a. Performing a single task", "b. Mimicking human intelligence", "c. Self-awareness", "d. Emotional intelligence"], answer: 0 },
    { question: "Which AI technology is commonly used for voice assistants like Siri and Alexa?", choices: ["a. Neural Networks", "b. Expert Systems", "c. Natural Language Processing", "d. Genetic Algorithms"], answer: 2 },
    { question: "What is the primary goal of General AI?", choices: ["a. To excel in one specific task", "b. To surpass human intelligence in all aspects", "c. To understand and learn any intellectual task that a human can", "d. To mimic natural language processing"], answer: 2 },
    { question: "Which of the following is a trend in AI development?", choices: ["a. Decrease in AI research funding", "b. Increased use of AI in healthcare", "c. Reduction in AI applications", "d. Decline in machine learning advancements"], answer: 1 },
    { question: "What future AI concept involves machines having consciousness and self-awareness?", choices: ["a. Narrow AI", "b. General AI", "c. Superintelligent AI", "d. Reactive AI"], answer: 2 },
    { question: "Which industry is expected to be significantly transformed by AI technologies in the coming years?", choices: ["a. Agriculture", "b. Manufacturing", "c. Retail", "d. All of the above"], answer: 3 },
    { question: "Which type of AI is focused on learning and adapting from experience without being explicitly programmed?", choices: ["a. Symbolic AI", "b. Machine Learning", "c. Expert Systems", "d. Genetic Algorithms"], answer: 1 },
    { question: "What is the role of AI in autonomous vehicles?", choices: ["a. Managing engine performance", "b. Controlling infotainment systems", "c. Enabling self-driving capabilities", "d. Enhancing fuel efficiency"], answer: 3 },
    { question: "Which AI technology is used for detecting patterns and anomalies in data?", choices: ["a. Neural Networks", "b. Genetic Algorithms", "c. Expert Systems", "d. Fuzzy Logic"], answer: 0 },
    { question: "What ethical concern is associated with the development of AI?", choices: ["a. AI's impact on employment", "b. AI's role in climate change", "c. AI's contribution to urban planning", "d. AI's influence on fashion trends"], answer: 0 },
    { question: "What is the definition of Artificial Intelligence?", choices: ["a. Machines with self-awareness", "b. Systems that think and act like humans", "c. Devices with superior physical strength", "d. Programs that can only perform arithmetic operations"], answer: 1 },
    { question: "Which of the following best describes Machine Learning?", choices: ["a. Hardcoding all possible scenarios", "b. Enabling machines to learn from data", "c. Pre-programming responses to stimuli", "d. Using only statistical methods for AI"], answer: 1 },
    { question: "What is the key characteristic of Narrow AI?", choices: ["a. It can perform a wide range of tasks", "b. It specializes in a specific task", "c. It possesses self-awareness", "d. It can understand and generate human language"], answer: 1 },
    { question: "Which concept describes AI's ability to perform tasks that typically require human intelligence?", choices: ["a. Automation", "b. Machine Learning", "c. Artificial Intelligence", "d. Deep Learning"], answer: 3 },
    { question: "What is Deep Learning?", choices: ["a. A subset of machine learning that uses neural networks with many layers", "b. A programming language", "c. A form of narrow AI", "d. A type of symbolic AI"], answer: 0 },
    { question: "What is an example of AI in healthcare?", choices: ["a. Autonomous vehicles", "b. Fraud detection", "c. Disease diagnosis", "d. Virtual assistants"], answer: 3 },
    { question: "Which AI technology is essential for speech recognition systems?", choices: ["a. Neural Networks", "b. Expert Systems", "c. Natural Language Processing", "d. Genetic Algorithms"], answer: 2 },
    { question: "What does General AI aim to achieve?", choices: ["a. Solve specific tasks", "b. Understand and perform any intellectual task a human can", "c. Perform tasks faster than humans", "d. Specialize in one field"], answer: 1 },
    { question: "What is a neural network?", choices: ["a. A network of computers", "b. A type of machine learning algorithm modeled after the human brain", "c. A database management system", "d. An AI programming language"], answer: 1 },
    { question: "Which AI technology is used for image and video analysis?", choices: ["a. Natural Language Processing", "b. Machine Learning", "c. Computer Vision", "d. Expert Systems"], answer: 2 },
    { question: "What is reinforcement learning?", choices: ["a. Learning from labeled data", "b. Learning by trial and error", "c. Learning from a teacher", "d. Learning from a database"], answer: 1 },
    { question: "Which of the following is an application of AI in finance?", choices: ["a. Autonomous driving", "b. Fraud detection", "c. Disease diagnosis", "d. Virtual assistants"], answer: 1 },
    { question: "What is the primary goal of AI?", choices: ["a. To replace human workers", "b. To simulate human intelligence in machines", "c. To create advanced databases", "d. To build faster computers"], answer: 2 },
    { question: "Which of the following is a characteristic of strong AI?", choices: ["a. Limited to specific tasks", "b. Possesses general cognitive abilities", "c. Cannot learn from experience", "d. Requires constant human supervision"], answer: 1 },
    { question: "What is an AI algorithm?", choices: ["a. A set of rules or instructions given to an AI system to help it learn on its own", "b. A database", "c. A type of computer hardware", "d. A programming language"], answer: 0 },
    { question: "Which AI technology is used in recommendation systems like Netflix or Amazon?", choices: ["a. Neural Networks", "b. Genetic Algorithms", "c. Collaborative Filtering", "d. Natural Language Processing"], answer: 2 },
    { question: "What is the purpose of Natural Language Processing (NLP)?", choices: ["a. To enable machines to understand and respond to human language", "b. To simulate neural activity", "c. To process visual information", "d. To perform arithmetic operations"], answer: 0 },
    { question: "Which AI technology is essential for self-driving cars?", choices: ["a. Genetic Algorithms", "b. Natural Language Processing", "c. Computer Vision", "d. Expert Systems"], answer: 2 },
    { question: "What is supervised learning?", choices: ["a. Learning from unlabeled data", "b. Learning with the help of a teacher", "c. Learning through trial and error", "d. Learning from reinforcement"], answer: 1 },
    { question: "Which AI field focuses on machines that can recognize and process human language?", choices: ["a. Neural Networks", "b. Expert Systems", "c. Natural Language Processing", "d. Genetic Algorithms"], answer: 2 },
    { question: "What is the significance of Turing Test?", choices: ["a. To evaluate the physical abilities of AI", "b. To measure the computational power of AI", "c. To determine if a machine can exhibit intelligent behavior indistinguishable from a human", "d. To assess the speed of AI algorithms"], answer: 2 },
    { question: "Which AI technology enables computers to understand and interact with human language?", choices: ["a. Computer Vision", "b. Natural Language Processing", "c. Robotics", "d. Expert Systems"], answer: 1 },
    { question: "What is the difference between supervised and unsupervised learning?", choices: ["a. Supervised learning uses labeled data, while unsupervised learning uses unlabeled data", "b. Supervised learning is faster", "c. Unsupervised learning requires a teacher", "d. There is no difference"], answer: 0 },
    { question: "Which AI field deals with creating machines that can understand and generate human speech?", choices: ["a. Neural Networks", "b. Expert Systems", "c. Speech Recognition", "d. Genetic Algorithms"], answer: 2 },
    { question: "What is the main goal of AI in healthcare?", choices: ["a. To build faster computers", "b. To replace doctors", "c. To improve patient outcomes through data analysis and decision support", "d. To create entertainment applications"], answer: 2 },
    { question: "What is the primary focus of reinforcement learning?", choices: ["a. Learning from a teacher", "b. Learning from labeled data", "c. Learning through rewards and punishments", "d. Learning from a database"], answer: 2 },
    { question: "Which AI technology helps in understanding and interpreting large volumes of text data?", choices: ["a. Neural Networks", "b. Expert Systems", "c. Natural Language Processing", "d. Genetic Algorithms"], answer: 2 },
    { question: "What is the function of a neural network in AI?", choices: ["a. To store data", "b. To process visual information", "c. To simulate human brain processes and solve complex problems", "d. To perform arithmetic operations"], answer: 2 },
    { question: "Which AI field focuses on creating machines that can perform tasks requiring human intelligence?", choices: ["a. Machine Learning", "b. Artificial Intelligence", "c. Robotics", "d. Data Science"], answer: 1 },
    { question: "What is the purpose of AI in autonomous systems?", choices: ["a. To enhance physical strength", "b. To enable decision-making and self-control", "c. To improve battery life", "d. To provide entertainment"], answer: 1 }
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
    const indices = Array.from(Array(aiQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => aiQuestions[index]);
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
const aiQuestions = [
    { question: "What year did the term 'Artificial Intelligence' get coined?", choices: ["a. 1950", "b. 1956", "c. 1965", "d. 1972"], answer: 1 },
    { question: "Who is considered the father of Artificial Intelligence?", choices: ["a. Alan Turing", "b. John McCarthy", "c. Marvin Minsky", "d. Herbert Simon"], answer: 1 },
    { question: "Which conference is recognized as the birth of AI?", choices: ["a. Dartmouth Conference", "b. Turing Conference", "c. MIT AI Conference", "d. Stanford AI Symposium"], answer: 0 },
    { question: "In what decade did AI experience its first 'AI winter'?", choices: ["a. 1960s", "b. 1970s", "c. 1980s", "d. 1990s"], answer: 1 },
    { question: "What was the name of the first AI program, written by Allen Newell and Herbert A. Simon?", choices: ["a. ELIZA", "b. SHRDLU", "c. Logic Theorist", "d. Deep Blue"], answer: 2 },
    { question: "Which AI system famously defeated Garry Kasparov in chess in 1997?", choices: ["a. Watson", "b. AlphaGo", "c. Deep Blue", "d. Eliza"], answer: 2 },
    { question: "What was the first chatbot program developed in the 1960s?", choices: ["a. ELIZA", "b. Alice", "c. Siri", "d. Cortana"], answer: 0 },
    { question: "Who introduced the Turing Test, a test of a machine's ability to exhibit intelligent behavior?", choices: ["a. John McCarthy", "b. Alan Turing", "c. Marvin Minsky", "d. Claude Shannon"], answer: 1 },
    { question: "Which field of AI involves the simulation of human thought processes in a computerized model?", choices: ["a. Machine Learning", "b. Neural Networks", "c. Cognitive Computing", "d. Natural Language Processing"], answer: 2 },
    { question: "What is the name of the AI that won the game show Jeopardy! in 2011?", choices: ["a. Watson", "b. AlphaGo", "c. Siri", "d. DeepMind"], answer: 0 },
    { question: "What is the focus of narrow AI?", choices: ["a. Performing a single task", "b. Mimicking human intelligence", "c. Self-awareness", "d. Emotional intelligence"], answer: 0 },
    { question: "Which AI technology is commonly used for voice assistants like Siri and Alexa?", choices: ["a. Neural Networks", "b. Expert Systems", "c. Natural Language Processing", "d. Genetic Algorithms"], answer: 2 },
    { question: "What is the primary goal of General AI?", choices: ["a. To excel in one specific task", "b. To surpass human intelligence in all aspects", "c. To understand and learn any intellectual task that a human can", "d. To mimic natural language processing"], answer: 2 },
    { question: "Which of the following is a trend in AI development?", choices: ["a. Decrease in AI research funding", "b. Increased use of AI in healthcare", "c. Reduction in AI applications", "d. Decline in machine learning advancements"], answer: 1 },
    { question: "What future AI concept involves machines having consciousness and self-awareness?", choices: ["a. Narrow AI", "b. General AI", "c. Superintelligent AI", "d. Reactive AI"], answer: 2 },
    { question: "Which industry is expected to be significantly transformed by AI technologies in the coming years?", choices: ["a. Agriculture", "b. Manufacturing", "c. Retail", "d. All of the above"], answer: 3 },
    { question: "Which type of AI is focused on learning and adapting from experience without being explicitly programmed?", choices: ["a. Symbolic AI", "b. Machine Learning", "c. Expert Systems", "d. Genetic Algorithms"], answer: 1 },
    { question: "What is the role of AI in autonomous vehicles?", choices: ["a. Managing engine performance", "b. Controlling infotainment systems", "c. Enabling self-driving capabilities", "d. Enhancing fuel efficiency"], answer: 3 },
    { question: "Which AI technology is used for detecting patterns and anomalies in data?", choices: ["a. Neural Networks", "b. Genetic Algorithms", "c. Expert Systems", "d. Fuzzy Logic"], answer: 0 },
    { question: "What ethical concern is associated with the development of AI?", choices: ["a. AI's impact on employment", "b. AI's role in climate change", "c. AI's contribution to urban planning", "d. AI's influence on fashion trends"], answer: 0 },
    { question: "What is the definition of Artificial Intelligence?", choices: ["a. Machines with self-awareness", "b. Systems that think and act like humans", "c. Devices with superior physical strength", "d. Programs that can only perform arithmetic operations"], answer: 1 },
    { question: "Which of the following best describes Machine Learning?", choices: ["a. Hardcoding all possible scenarios", "b. Enabling machines to learn from data", "c. Pre-programming responses to stimuli", "d. Using only statistical methods for AI"], answer: 1 },
    { question: "What is the key characteristic of Narrow AI?", choices: ["a. It can perform a wide range of tasks", "b. It specializes in a specific task", "c. It possesses self-awareness", "d. It can understand and generate human language"], answer: 1 },
    { question: "Which concept describes AI's ability to perform tasks that typically require human intelligence?", choices: ["a. Automation", "b. Machine Learning", "c. Artificial Intelligence", "d. Deep Learning"], answer: 3 },
    { question: "What is Deep Learning?", choices: ["a. A subset of machine learning that uses neural networks with many layers", "b. A programming language", "c. A form of narrow AI", "d. A type of symbolic AI"], answer: 0 },
    { question: "What is an example of AI in healthcare?", choices: ["a. Autonomous vehicles", "b. Fraud detection", "c. Disease diagnosis", "d. Virtual assistants"], answer: 3 },
    { question: "Which AI technology is essential for speech recognition systems?", choices: ["a. Neural Networks", "b. Expert Systems", "c. Natural Language Processing", "d. Genetic Algorithms"], answer: 2 },
    { question: "What does General AI aim to achieve?", choices: ["a. Solve specific tasks", "b. Understand and perform any intellectual task a human can", "c. Perform tasks faster than humans", "d. Specialize in one field"], answer: 1 },
    { question: "What is a neural network?", choices: ["a. A network of computers", "b. A type of machine learning algorithm modeled after the human brain", "c. A database management system", "d. An AI programming language"], answer: 1 },
    { question: "Which AI technology is used for image and video analysis?", choices: ["a. Natural Language Processing", "b. Machine Learning", "c. Computer Vision", "d. Expert Systems"], answer: 2 },
    { question: "What is reinforcement learning?", choices: ["a. Learning from labeled data", "b. Learning by trial and error", "c. Learning from a teacher", "d. Learning from a database"], answer: 1 },
    { question: "Which of the following is an application of AI in finance?", choices: ["a. Autonomous driving", "b. Fraud detection", "c. Disease diagnosis", "d. Virtual assistants"], answer: 1 },
    { question: "What is the primary goal of AI?", choices: ["a. To replace human workers", "b. To simulate human intelligence in machines", "c. To create advanced databases", "d. To build faster computers"], answer: 2 },
    { question: "Which of the following is a characteristic of strong AI?", choices: ["a. Limited to specific tasks", "b. Possesses general cognitive abilities", "c. Cannot learn from experience", "d. Requires constant human supervision"], answer: 1 },
    { question: "What is an AI algorithm?", choices: ["a. A set of rules or instructions given to an AI system to help it learn on its own", "b. A database", "c. A type of computer hardware", "d. A programming language"], answer: 0 },
    { question: "Which AI technology is used in recommendation systems like Netflix or Amazon?", choices: ["a. Neural Networks", "b. Genetic Algorithms", "c. Collaborative Filtering", "d. Natural Language Processing"], answer: 2 },
    { question: "What is the purpose of Natural Language Processing (NLP)?", choices: ["a. To enable machines to understand and respond to human language", "b. To simulate neural activity", "c. To process visual information", "d. To perform arithmetic operations"], answer: 0 },
    { question: "Which AI technology is essential for self-driving cars?", choices: ["a. Genetic Algorithms", "b. Natural Language Processing", "c. Computer Vision", "d. Expert Systems"], answer: 2 },
    { question: "What is supervised learning?", choices: ["a. Learning from unlabeled data", "b. Learning with the help of a teacher", "c. Learning through trial and error", "d. Learning from reinforcement"], answer: 1 },
    { question: "Which AI field focuses on machines that can recognize and process human language?", choices: ["a. Neural Networks", "b. Expert Systems", "c. Natural Language Processing", "d. Genetic Algorithms"], answer: 2 },
    { question: "What is the significance of Turing Test?", choices: ["a. To evaluate the physical abilities of AI", "b. To measure the computational power of AI", "c. To determine if a machine can exhibit intelligent behavior indistinguishable from a human", "d. To assess the speed of AI algorithms"], answer: 2 },
    { question: "Which AI technology enables computers to understand and interact with human language?", choices: ["a. Computer Vision", "b. Natural Language Processing", "c. Robotics", "d. Expert Systems"], answer: 1 },
    { question: "What is the difference between supervised and unsupervised learning?", choices: ["a. Supervised learning uses labeled data, while unsupervised learning uses unlabeled data", "b. Supervised learning is faster", "c. Unsupervised learning requires a teacher", "d. There is no difference"], answer: 0 },
    { question: "Which AI field deals with creating machines that can understand and generate human speech?", choices: ["a. Neural Networks", "b. Expert Systems", "c. Speech Recognition", "d. Genetic Algorithms"], answer: 2 },
    { question: "What is the main goal of AI in healthcare?", choices: ["a. To build faster computers", "b. To replace doctors", "c. To improve patient outcomes through data analysis and decision support", "d. To create entertainment applications"], answer: 2 },
    { question: "What is the primary focus of reinforcement learning?", choices: ["a. Learning from a teacher", "b. Learning from labeled data", "c. Learning through rewards and punishments", "d. Learning from a database"], answer: 2 },
    { question: "Which AI technology helps in understanding and interpreting large volumes of text data?", choices: ["a. Neural Networks", "b. Expert Systems", "c. Natural Language Processing", "d. Genetic Algorithms"], answer: 2 },
    { question: "What is the function of a neural network in AI?", choices: ["a. To store data", "b. To process visual information", "c. To simulate human brain processes and solve complex problems", "d. To perform arithmetic operations"], answer: 2 },
    { question: "Which AI field focuses on creating machines that can perform tasks requiring human intelligence?", choices: ["a. Machine Learning", "b. Artificial Intelligence", "c. Robotics", "d. Data Science"], answer: 1 },
    { question: "What is the purpose of AI in autonomous systems?", choices: ["a. To enhance physical strength", "b. To enable decision-making and self-control", "c. To improve battery life", "d. To provide entertainment"], answer: 1 }
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
    const indices = Array.from(Array(aiQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => aiQuestions[index]);
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