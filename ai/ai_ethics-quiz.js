<<<<<<< HEAD
const aiEthicsQuestions = [
    { question: "What is AI ethics?", choices: ["a. The study of moral issues and decisions surrounding AI technologies", "b. The development of AI algorithms", "c. The analysis of AI performance metrics", "d. The creation of AI hardware"], answer: 0 },
    { question: "What is algorithmic bias?", choices: ["a. When AI systems make decisions that are systematically unfair to certain groups", "b. When an algorithm performs optimally", "c. When AI fails to learn", "d. When AI outperforms human intelligence"], answer: 0 },
    { question: "What is the purpose of fairness in AI?", choices: ["a. To ensure that AI systems treat all individuals and groups equitably", "b. To improve AI speed", "c. To enhance AI accuracy", "d. To reduce computational complexity"], answer: 0 },
    { question: "What is transparency in AI?", choices: ["a. The degree to which AI decision-making processes can be understood and interpreted by humans", "b. The clarity of AI predictions", "c. The openness of AI source code", "d. The speed of AI processing"], answer: 0 },
    { question: "What is explainability in AI?", choices: ["a. The ability to explain how an AI system arrives at its decisions", "b. The process of training AI models", "c. The integration of AI systems", "d. The reduction of AI errors"], answer: 0 },
    { question: "What is the purpose of accountability in AI?", choices: ["a. To hold individuals or organizations responsible for the outcomes of AI systems", "b. To track AI performance", "c. To develop AI algorithms", "d. To monitor AI usage"], answer: 0 },
    { question: "What is the importance of privacy in AI?", choices: ["a. To protect individuals' personal data from unauthorized access and misuse", "b. To enhance AI performance", "c. To improve AI efficiency", "d. To reduce AI costs"], answer: 0 },
    { question: "What is data privacy?", choices: ["a. Ensuring that personal data is collected, stored, and used in a secure manner", "b. Sharing personal data with third parties", "c. Making data publicly available", "d. Analyzing large datasets"], answer: 0 },
    { question: "What is informed consent in AI?", choices: ["a. Obtaining explicit permission from individuals before collecting or using their data", "b. Collecting data without user knowledge", "c. Storing data securely", "d. Analyzing data for insights"], answer: 0 },
    { question: "What is the role of ethics boards in AI development?", choices: ["a. To oversee and ensure that AI technologies are developed and used ethically", "b. To develop AI algorithms", "c. To enhance AI performance", "d. To market AI products"], answer: 0 },
    { question: "What is AI governance?", choices: ["a. The framework of policies and procedures to ensure responsible AI development and deployment", "b. The coding of AI algorithms", "c. The improvement of AI accuracy", "d. The training of AI models"], answer: 0 },
    { question: "What is the purpose of AI regulation?", choices: ["a. To establish laws and guidelines for the safe and ethical use of AI technologies", "b. To create new AI algorithms", "c. To enhance AI speed", "d. To develop AI hardware"], answer: 0 },
    { question: "What is the precautionary principle in AI?", choices: ["a. The approach of erring on the side of caution when deploying AI technologies", "b. The optimization of AI models", "c. The acceleration of AI adoption", "d. The reduction of AI training time"], answer: 0 },
    { question: "What is the purpose of AI ethics frameworks?", choices: ["a. To provide guidelines for ethical AI development and usage", "b. To increase AI processing speed", "c. To reduce AI costs", "d. To enhance AI accuracy"], answer: 0 },
    { question: "What is the importance of stakeholder engagement in AI ethics?", choices: ["a. To involve diverse perspectives in the development and deployment of AI systems", "b. To speed up AI training", "c. To reduce AI costs", "d. To enhance AI accuracy"], answer: 0 },
    { question: "What is the impact of AI on employment?", choices: ["a. AI can both displace jobs and create new job opportunities", "b. AI eliminates all jobs", "c. AI has no impact on jobs", "d. AI only creates jobs"], answer: 0 },
    { question: "What is digital divide in the context of AI?", choices: ["a. The gap between those who have access to AI technologies and those who do not", "b. The speed of internet connectivity", "c. The cost of digital devices", "d. The variety of digital content"], answer: 0 },
    { question: "What is the concern of AI surveillance?", choices: ["a. The potential misuse of AI for mass surveillance and infringement on privacy rights", "b. The enhancement of security systems", "c. The improvement of AI accuracy", "d. The reduction of AI costs"], answer: 0 },
    { question: "What is deepfake technology?", choices: ["a. AI-generated synthetic media where a person in an existing image or video is replaced with someone else's likeness", "b. AI algorithms for deep learning", "c. AI models for text analysis", "d. AI systems for data encryption"], answer: 0 },
    { question: "What is the importance of ethical AI design?", choices: ["a. To ensure AI systems are designed to uphold ethical principles and avoid harm", "b. To increase AI processing speed", "c. To reduce AI costs", "d. To enhance AI accuracy"], answer: 0 },
    { question: "What is the role of human oversight in AI?", choices: ["a. To monitor and guide the actions and decisions of AI systems", "b. To automate AI processes", "c. To speed up AI computations", "d. To enhance AI storage"], answer: 0 },
    { question: "What is a black-box model in AI?", choices: ["a. An AI model whose internal workings are not easily understood by humans", "b. An AI model with transparent operations", "c. An AI model used for data storage", "d. An AI model for image processing"], answer: 0 },
    { question: "What is the importance of AI accountability?", choices: ["a. To ensure that the creators and users of AI systems can be held responsible for their outcomes", "b. To speed up AI computations", "c. To reduce AI costs", "d. To enhance AI storage"], answer: 0 },
    { question: "What is the risk of AI in autonomous weapons?", choices: ["a. The potential for AI-controlled weapons to operate without human intervention, leading to ethical and legal concerns", "b. The enhancement of military strategies", "c. The improvement of AI accuracy", "d. The reduction of AI costs"], answer: 0 },
    { question: "What is AI discrimination?", choices: ["a. When AI systems make biased decisions that disadvantage certain groups", "b. When AI systems fail to make predictions", "c. When AI systems enhance performance", "d. When AI systems reduce costs"], answer: 0 },
    { question: "What is AI inclusivity?", choices: ["a. Ensuring that AI systems are designed and used in ways that include and benefit diverse groups of people", "b. Reducing AI training time", "c. Increasing AI storage", "d. Enhancing AI processing speed"], answer: 0 },
    { question: "What is AI transparency?", choices: ["a. Making the workings and decision-making processes of AI systems clear and understandable to humans", "b. Reducing AI training time", "c. Increasing AI storage", "d. Enhancing AI processing speed"], answer: 0 },
    { question: "What is the importance of ethical AI deployment?", choices: ["a. To ensure that AI technologies are used in ways that are fair, just, and beneficial to society", "b. To speed up AI computations", "c. To reduce AI costs", "d. To enhance AI storage"], answer: 0 },
    { question: "What is the risk of AI in decision-making?", choices: ["a. AI systems making biased or erroneous decisions that can have significant impacts on people's lives", "b. Speeding up decision-making processes", "c. Enhancing decision accuracy", "d. Reducing decision costs"], answer: 0 },
    { question: "What is the concern of AI in healthcare?", choices: ["a. Ensuring that AI systems do not make biased or harmful medical decisions", "b. Reducing healthcare costs", "c. Speeding up medical treatments", "d. Enhancing medical storage"], answer: 0 },
    { question: "What is ethical AI research?", choices: ["a. Conducting AI research in ways that uphold ethical standards and principles", "b. Reducing research costs", "c. Speeding up research processes", "d. Enhancing research storage"], answer: 0 },
    { question: "What is the importance of AI ethics education?", choices: ["a. To educate individuals about the ethical implications and responsibilities of using AI", "b. To reduce educational costs", "c. To speed up educational processes", "d. To enhance educational storage"], answer: 0 },
    { question: "What is AI misuse?", choices: ["a. The inappropriate or harmful use of AI technologies", "b. The optimization of AI systems", "c. The enhancement of AI performance", "d. The reduction of AI costs"], answer: 0 },
    { question: "What is AI fairness?", choices: ["a. Ensuring that AI systems do not unfairly disadvantage any individual or group", "b. Enhancing AI speed", "c. Reducing AI storage", "d. Increasing AI costs"], answer: 0 },
    { question: "What is AI accountability?", choices: ["a. Holding individuals and organizations responsible for the ethical use of AI", "b. Speeding up AI computations", "c. Reducing AI costs", "d. Enhancing AI storage"], answer: 0 },
    { question: "What is AI bias?", choices: ["a. When AI systems make unfair decisions due to biased data or algorithms", "b. When AI systems perform optimally", "c. When AI systems fail to learn", "d. When AI systems outperform human intelligence"], answer: 0 },
    { question: "What is the precautionary principle in AI ethics?", choices: ["a. Taking precautionary measures to avoid potential harms of AI technologies", "b. Increasing AI speed", "c. Reducing AI storage", "d. Enhancing AI costs"], answer: 0 },
    { question: "What is AI regulation?", choices: ["a. Implementing laws and policies to govern the ethical use of AI technologies", "b. Speeding up AI computations", "c. Reducing AI costs", "d. Enhancing AI storage"], answer: 0 },
    { question: "What is AI governance?", choices: ["a. The framework of policies and procedures to ensure responsible AI development and deployment", "b. Speeding up AI computations", "c. Reducing AI costs", "d. Enhancing AI storage"], answer: 0 },
    { question: "What is AI transparency?", choices: ["a. Making the workings and decision-making processes of AI systems clear and understandable to humans", "b. Reducing AI training time", "c. Increasing AI storage", "d. Enhancing AI processing speed"], answer: 0 },
    { question: "What is the role of ethics boards in AI?", choices: ["a. To oversee and ensure that AI technologies are developed and used ethically", "b. Developing AI algorithms", "c. Enhancing AI performance", "d. Marketing AI products"], answer: 0 },
    { question: "What is the risk of AI in surveillance?", choices: ["a. The potential misuse of AI for mass surveillance and infringement on privacy rights", "b. Enhancing security systems", "c. Improving AI accuracy", "d. Reducing AI costs"], answer: 0 },
    { question: "What is the impact of AI on employment?", choices: ["a. AI can both displace jobs and create new job opportunities", "b. AI eliminates all jobs", "c. AI has no impact on jobs", "d. AI only creates jobs"], answer: 0 },
    { question: "What is the digital divide in the context of AI?", choices: ["a. The gap between those who have access to AI technologies and those who do not", "b. The speed of internet connectivity", "c. The cost of digital devices", "d. The variety of digital content"], answer: 0 },
    { question: "What is AI inclusivity?", choices: ["a. Ensuring that AI systems are designed and used in ways that include and benefit diverse groups of people", "b. Reducing AI training time", "c. Increasing AI storage", "d. Enhancing AI processing speed"], answer: 0 },
    { question: "What is AI discrimination?", choices: ["a. When AI systems make biased decisions that disadvantage certain groups", "b. When AI systems fail to make predictions", "c. When AI systems enhance performance", "d. When AI systems reduce costs"], answer: 0 },
    { question: "What is ethical AI design?", choices: ["a. Ensuring AI systems are designed to uphold ethical principles and avoid harm", "b. Increasing AI processing speed", "c. Reducing AI costs", "d. Enhancing AI accuracy"], answer: 0 },
    { question: "What is the risk of AI in decision-making?", choices: ["a. AI systems making biased or erroneous decisions that can have significant impacts on people's lives", "b. Speeding up decision-making processes", "c. Enhancing decision accuracy", "d. Reducing decision costs"], answer: 0 }
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
    const indices = Array.from(Array(aiEthicsQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => aiEthicsQuestions[index]);
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
const aiEthicsQuestions = [
    { question: "What is AI ethics?", choices: ["a. The study of moral issues and decisions surrounding AI technologies", "b. The development of AI algorithms", "c. The analysis of AI performance metrics", "d. The creation of AI hardware"], answer: 0 },
    { question: "What is algorithmic bias?", choices: ["a. When AI systems make decisions that are systematically unfair to certain groups", "b. When an algorithm performs optimally", "c. When AI fails to learn", "d. When AI outperforms human intelligence"], answer: 0 },
    { question: "What is the purpose of fairness in AI?", choices: ["a. To ensure that AI systems treat all individuals and groups equitably", "b. To improve AI speed", "c. To enhance AI accuracy", "d. To reduce computational complexity"], answer: 0 },
    { question: "What is transparency in AI?", choices: ["a. The degree to which AI decision-making processes can be understood and interpreted by humans", "b. The clarity of AI predictions", "c. The openness of AI source code", "d. The speed of AI processing"], answer: 0 },
    { question: "What is explainability in AI?", choices: ["a. The ability to explain how an AI system arrives at its decisions", "b. The process of training AI models", "c. The integration of AI systems", "d. The reduction of AI errors"], answer: 0 },
    { question: "What is the purpose of accountability in AI?", choices: ["a. To hold individuals or organizations responsible for the outcomes of AI systems", "b. To track AI performance", "c. To develop AI algorithms", "d. To monitor AI usage"], answer: 0 },
    { question: "What is the importance of privacy in AI?", choices: ["a. To protect individuals' personal data from unauthorized access and misuse", "b. To enhance AI performance", "c. To improve AI efficiency", "d. To reduce AI costs"], answer: 0 },
    { question: "What is data privacy?", choices: ["a. Ensuring that personal data is collected, stored, and used in a secure manner", "b. Sharing personal data with third parties", "c. Making data publicly available", "d. Analyzing large datasets"], answer: 0 },
    { question: "What is informed consent in AI?", choices: ["a. Obtaining explicit permission from individuals before collecting or using their data", "b. Collecting data without user knowledge", "c. Storing data securely", "d. Analyzing data for insights"], answer: 0 },
    { question: "What is the role of ethics boards in AI development?", choices: ["a. To oversee and ensure that AI technologies are developed and used ethically", "b. To develop AI algorithms", "c. To enhance AI performance", "d. To market AI products"], answer: 0 },
    { question: "What is AI governance?", choices: ["a. The framework of policies and procedures to ensure responsible AI development and deployment", "b. The coding of AI algorithms", "c. The improvement of AI accuracy", "d. The training of AI models"], answer: 0 },
    { question: "What is the purpose of AI regulation?", choices: ["a. To establish laws and guidelines for the safe and ethical use of AI technologies", "b. To create new AI algorithms", "c. To enhance AI speed", "d. To develop AI hardware"], answer: 0 },
    { question: "What is the precautionary principle in AI?", choices: ["a. The approach of erring on the side of caution when deploying AI technologies", "b. The optimization of AI models", "c. The acceleration of AI adoption", "d. The reduction of AI training time"], answer: 0 },
    { question: "What is the purpose of AI ethics frameworks?", choices: ["a. To provide guidelines for ethical AI development and usage", "b. To increase AI processing speed", "c. To reduce AI costs", "d. To enhance AI accuracy"], answer: 0 },
    { question: "What is the importance of stakeholder engagement in AI ethics?", choices: ["a. To involve diverse perspectives in the development and deployment of AI systems", "b. To speed up AI training", "c. To reduce AI costs", "d. To enhance AI accuracy"], answer: 0 },
    { question: "What is the impact of AI on employment?", choices: ["a. AI can both displace jobs and create new job opportunities", "b. AI eliminates all jobs", "c. AI has no impact on jobs", "d. AI only creates jobs"], answer: 0 },
    { question: "What is digital divide in the context of AI?", choices: ["a. The gap between those who have access to AI technologies and those who do not", "b. The speed of internet connectivity", "c. The cost of digital devices", "d. The variety of digital content"], answer: 0 },
    { question: "What is the concern of AI surveillance?", choices: ["a. The potential misuse of AI for mass surveillance and infringement on privacy rights", "b. The enhancement of security systems", "c. The improvement of AI accuracy", "d. The reduction of AI costs"], answer: 0 },
    { question: "What is deepfake technology?", choices: ["a. AI-generated synthetic media where a person in an existing image or video is replaced with someone else's likeness", "b. AI algorithms for deep learning", "c. AI models for text analysis", "d. AI systems for data encryption"], answer: 0 },
    { question: "What is the importance of ethical AI design?", choices: ["a. To ensure AI systems are designed to uphold ethical principles and avoid harm", "b. To increase AI processing speed", "c. To reduce AI costs", "d. To enhance AI accuracy"], answer: 0 },
    { question: "What is the role of human oversight in AI?", choices: ["a. To monitor and guide the actions and decisions of AI systems", "b. To automate AI processes", "c. To speed up AI computations", "d. To enhance AI storage"], answer: 0 },
    { question: "What is a black-box model in AI?", choices: ["a. An AI model whose internal workings are not easily understood by humans", "b. An AI model with transparent operations", "c. An AI model used for data storage", "d. An AI model for image processing"], answer: 0 },
    { question: "What is the importance of AI accountability?", choices: ["a. To ensure that the creators and users of AI systems can be held responsible for their outcomes", "b. To speed up AI computations", "c. To reduce AI costs", "d. To enhance AI storage"], answer: 0 },
    { question: "What is the risk of AI in autonomous weapons?", choices: ["a. The potential for AI-controlled weapons to operate without human intervention, leading to ethical and legal concerns", "b. The enhancement of military strategies", "c. The improvement of AI accuracy", "d. The reduction of AI costs"], answer: 0 },
    { question: "What is AI discrimination?", choices: ["a. When AI systems make biased decisions that disadvantage certain groups", "b. When AI systems fail to make predictions", "c. When AI systems enhance performance", "d. When AI systems reduce costs"], answer: 0 },
    { question: "What is AI inclusivity?", choices: ["a. Ensuring that AI systems are designed and used in ways that include and benefit diverse groups of people", "b. Reducing AI training time", "c. Increasing AI storage", "d. Enhancing AI processing speed"], answer: 0 },
    { question: "What is AI transparency?", choices: ["a. Making the workings and decision-making processes of AI systems clear and understandable to humans", "b. Reducing AI training time", "c. Increasing AI storage", "d. Enhancing AI processing speed"], answer: 0 },
    { question: "What is the importance of ethical AI deployment?", choices: ["a. To ensure that AI technologies are used in ways that are fair, just, and beneficial to society", "b. To speed up AI computations", "c. To reduce AI costs", "d. To enhance AI storage"], answer: 0 },
    { question: "What is the risk of AI in decision-making?", choices: ["a. AI systems making biased or erroneous decisions that can have significant impacts on people's lives", "b. Speeding up decision-making processes", "c. Enhancing decision accuracy", "d. Reducing decision costs"], answer: 0 },
    { question: "What is the concern of AI in healthcare?", choices: ["a. Ensuring that AI systems do not make biased or harmful medical decisions", "b. Reducing healthcare costs", "c. Speeding up medical treatments", "d. Enhancing medical storage"], answer: 0 },
    { question: "What is ethical AI research?", choices: ["a. Conducting AI research in ways that uphold ethical standards and principles", "b. Reducing research costs", "c. Speeding up research processes", "d. Enhancing research storage"], answer: 0 },
    { question: "What is the importance of AI ethics education?", choices: ["a. To educate individuals about the ethical implications and responsibilities of using AI", "b. To reduce educational costs", "c. To speed up educational processes", "d. To enhance educational storage"], answer: 0 },
    { question: "What is AI misuse?", choices: ["a. The inappropriate or harmful use of AI technologies", "b. The optimization of AI systems", "c. The enhancement of AI performance", "d. The reduction of AI costs"], answer: 0 },
    { question: "What is AI fairness?", choices: ["a. Ensuring that AI systems do not unfairly disadvantage any individual or group", "b. Enhancing AI speed", "c. Reducing AI storage", "d. Increasing AI costs"], answer: 0 },
    { question: "What is AI accountability?", choices: ["a. Holding individuals and organizations responsible for the ethical use of AI", "b. Speeding up AI computations", "c. Reducing AI costs", "d. Enhancing AI storage"], answer: 0 },
    { question: "What is AI bias?", choices: ["a. When AI systems make unfair decisions due to biased data or algorithms", "b. When AI systems perform optimally", "c. When AI systems fail to learn", "d. When AI systems outperform human intelligence"], answer: 0 },
    { question: "What is the precautionary principle in AI ethics?", choices: ["a. Taking precautionary measures to avoid potential harms of AI technologies", "b. Increasing AI speed", "c. Reducing AI storage", "d. Enhancing AI costs"], answer: 0 },
    { question: "What is AI regulation?", choices: ["a. Implementing laws and policies to govern the ethical use of AI technologies", "b. Speeding up AI computations", "c. Reducing AI costs", "d. Enhancing AI storage"], answer: 0 },
    { question: "What is AI governance?", choices: ["a. The framework of policies and procedures to ensure responsible AI development and deployment", "b. Speeding up AI computations", "c. Reducing AI costs", "d. Enhancing AI storage"], answer: 0 },
    { question: "What is AI transparency?", choices: ["a. Making the workings and decision-making processes of AI systems clear and understandable to humans", "b. Reducing AI training time", "c. Increasing AI storage", "d. Enhancing AI processing speed"], answer: 0 },
    { question: "What is the role of ethics boards in AI?", choices: ["a. To oversee and ensure that AI technologies are developed and used ethically", "b. Developing AI algorithms", "c. Enhancing AI performance", "d. Marketing AI products"], answer: 0 },
    { question: "What is the risk of AI in surveillance?", choices: ["a. The potential misuse of AI for mass surveillance and infringement on privacy rights", "b. Enhancing security systems", "c. Improving AI accuracy", "d. Reducing AI costs"], answer: 0 },
    { question: "What is the impact of AI on employment?", choices: ["a. AI can both displace jobs and create new job opportunities", "b. AI eliminates all jobs", "c. AI has no impact on jobs", "d. AI only creates jobs"], answer: 0 },
    { question: "What is the digital divide in the context of AI?", choices: ["a. The gap between those who have access to AI technologies and those who do not", "b. The speed of internet connectivity", "c. The cost of digital devices", "d. The variety of digital content"], answer: 0 },
    { question: "What is AI inclusivity?", choices: ["a. Ensuring that AI systems are designed and used in ways that include and benefit diverse groups of people", "b. Reducing AI training time", "c. Increasing AI storage", "d. Enhancing AI processing speed"], answer: 0 },
    { question: "What is AI discrimination?", choices: ["a. When AI systems make biased decisions that disadvantage certain groups", "b. When AI systems fail to make predictions", "c. When AI systems enhance performance", "d. When AI systems reduce costs"], answer: 0 },
    { question: "What is ethical AI design?", choices: ["a. Ensuring AI systems are designed to uphold ethical principles and avoid harm", "b. Increasing AI processing speed", "c. Reducing AI costs", "d. Enhancing AI accuracy"], answer: 0 },
    { question: "What is the risk of AI in decision-making?", choices: ["a. AI systems making biased or erroneous decisions that can have significant impacts on people's lives", "b. Speeding up decision-making processes", "c. Enhancing decision accuracy", "d. Reducing decision costs"], answer: 0 }
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
    const indices = Array.from(Array(aiEthicsQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => aiEthicsQuestions[index]);
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