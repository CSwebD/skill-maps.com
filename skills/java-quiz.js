<<<<<<< HEAD
const javaQuestions = [
    { question: "What is the correct file extension for Java files?", choices: ["a. .java", "b. .jav", "c. .jv", "d. .jva"], answer: 0 },
    { question: "Which of these is not a primitive data type in Java?", choices: ["a. int", "b. float", "c. boolean", "d. String"], answer: 3 },
    { question: "Which method is used to start a thread in Java?", choices: ["a. start()", "b. run()", "c. execute()", "d. init()"], answer: 0 },
    { question: "Which keyword is used to define a constant in Java?", choices: ["a. constant", "b. final", "c. static", "d. const"], answer: 1 },
    { question: "What is the default value of a boolean variable in Java?", choices: ["a. true", "b. false", "c. 0", "d. null"], answer: 1 },
    { question: "What does JVM stand for?", choices: ["a. Java Very Machine", "b. Java Virtual Machine", "c. Java Verification Machine", "d. Java Visual Machine"], answer: 1 },
    { question: "Which of these is used to handle exceptions in Java?", choices: ["a. try-catch", "b. if-else", "c. for loop", "d. switch-case"], answer: 0 },
    { question: "Which of these is not a Java access modifier?", choices: ["a. public", "b. private", "c. protected", "d. package"], answer: 3 },
    { question: "Which of the following is not an OOP concept in Java?", choices: ["a. Inheritance", "b. Encapsulation", "c. Polymorphism", "d. Compilation"], answer: 4 },
    { question: "Which collection class allows you to grow or shrink its size and provides indexed access to its elements, but whose methods are not synchronized?", choices: ["a. java.util.HashSet", "b. java.util.LinkedList", "c. java.util.ArrayList", "d. java.util.Vector"], answer: 2 },
    { question: "Which of the following is a marker interface?", choices: ["a. Serializable", "b. Comparator", "c. Cloneable", "d. Runnable"], answer: 0 },
    { question: "Which method is used to compare two strings in Java?", choices: ["a. equals()", "b. compare()", "c. compareTo()", "d. contains()"], answer: 0 },
    { question: "Which operator is used to concatenate strings in Java?", choices: ["a. +", "b. &", "c. |", "d. &&"], answer: 0 },
    { question: "Which package contains the Random class?", choices: ["a. java.util", "b. java.lang", "c. java.io", "d. java.net"], answer: 0 },
    { question: "Which keyword is used to inherit a class in Java?", choices: ["a. implements", "b. extends", "c. inherits", "d. super"], answer: 1 },
    { question: "Which method must be implemented by all threads?", choices: ["a. start()", "b. stop()", "c. run()", "d. main()"], answer: 2 },
    { question: "Which of these cannot be used for a variable name in Java?", choices: ["a. identifier", "b. keyword", "c. variable", "d. letter"], answer: 1 },
    { question: "What is the size of an int variable in Java?", choices: ["a. 8 bits", "b. 16 bits", "c. 32 bits", "d. 64 bits"], answer: 2 },
    { question: "What is the default value of a local variable in Java?", choices: ["a. 0", "b. null", "c. undefined", "d. No default value"], answer: 3 },
    { question: "Which keyword is used to define a subclass in Java?", choices: ["a. extend", "b. inherit", "c. subclass", "d. extends"], answer: 3 },
    { question: "Which exception is thrown when a division by zero occurs?", choices: ["a. NullPointerException", "b. ArithmeticException", "c. NumberFormatException", "d. IndexOutOfBoundsException"], answer: 1 },
    { question: "What is the output of 9/2 in Java?", choices: ["a. 4", "b. 4.5", "c. 5", "d. 4.0"], answer: 0 },
    { question: "Which keyword is used to prevent inheritance of a class?", choices: ["a. final", "b. static", "c. abstract", "d. const"], answer: 0 },
    { question: "Which of these classes is immutable?", choices: ["a. StringBuilder", "b. StringBuffer", "c. String", "d. CharArray"], answer: 2 },
    { question: "Which method can be used to obtain the length of an array?", choices: ["a. length()", "b. size()", "c. length", "d. getSize()"], answer: 2 },
    { question: "Which of the following is used to perform clean-up processing just before an object is garbage collected?", choices: ["a. finalize()", "b. finally()", "c. finalize", "d. finally"], answer: 0 },
    { question: "What is the return type of the hashCode() method in Java?", choices: ["a. int", "b. long", "c. float", "d. double"], answer: 0 },
    { question: "Which of these is not a feature of Java?", choices: ["a. Object-oriented", "b. Platform independent", "c. Use of pointers", "d. Dynamic"], answer: 2 },
    { question: "Which of the following is not a valid Java keyword?", choices: ["a. static", "b. Boolean", "c. void", "d. volatile"], answer: 1 },
    { question: "What is the base class of all classes in Java?", choices: ["a. java.lang.String", "b. java.util.Scanner", "c. java.lang.Object", "d. java.util.Collection"], answer: 2 },
    { question: "What is the implicit return type of a constructor?", choices: ["a. void", "b. int", "c. Object", "d. No return type"], answer: 3 },
    { question: "Which of these can be used to create an instance of an array?", choices: ["a. new", "b. malloc", "c. alloc", "d. instance"], answer: 0 },
    { question: "Which operator is used to find the remainder in Java?", choices: ["a. /", "b. %", "c. //", "d. ^"], answer: 1 },
    { question: "Which method is called when an object is created in Java?", choices: ["a. class()", "b. constructor()", "c. create()", "d. init()"], answer: 1 },
    { question: "Which of these cannot be declared static?", choices: ["a. variable", "b. method", "c. class", "d. constructor"], answer: 3 },
    { question: "What is the size of a byte variable in Java?", choices: ["a. 8 bits", "b. 16 bits", "c. 32 bits", "d. 64 bits"], answer: 0 },
    { question: "Which method is used to terminate an applet?", choices: ["a. terminate()", "b. stop()", "c. end()", "d. destroy()"], answer: 3 },
    { question: "Which method in Java is used to get the class of an object?", choices: ["a. getClass()", "b. getObjectClass()", "c. getObjectType()", "d. getType()"], answer: 0 },
    { question: "Which of these is not a valid comment in Java?", choices: ["a. // comment", "b. /* comment */", "c. /** comment */", "d. / comment"], answer: 3 },
    { question: "What does the 'super' keyword in Java do?", choices: ["a. It refers to the superclass of the current object.", "b. It is used to initialize objects.", "c. It is used to call a static method.", "d. It is used to call a private method."], answer: 0 },
    { question: "Which keyword is used to declare an abstract class in Java?", choices: ["a. abstract", "b. interface", "c. implements", "d. extends"], answer: 0 },
    { question: "Which method is used to get a substring of a string in Java?", choices: ["a. substring()", "b. subString()", "c. substr()", "d. subStr()"], answer: 0 },
    { question: "What is the output of 2 + 3 + 'Hello'?", choices: ["a. 5Hello", "b. 23Hello", "c. 5 Hello", "d. Error"], answer: 0 },
    { question: "Which method is used to check if a string starts with a specific prefix?", choices: ["a. startsWith()", "b. beginsWith()", "c. starts()", "d. begins()"], answer: 0 },
    { question: "Which class is used to handle file input and output in Java?", choices: ["a. FileInputStream", "b. FileReader", "c. FileWriter", "d. All of the above"], answer: 3 },
    { question: "Which of these is a loop construct in Java?", choices: ["a. for", "b. if", "c. switch", "d. try"], answer: 0 },
    { question: "Which of these is a logical operator in Java?", choices: ["a. &&", "b. &", "c. ||", "d. ^"], answer: 0 },
    { question: "Which of the following is not an interface in Java?", choices: ["a. Runnable", "b. Serializable", "c. Comparable", "d. ArrayList"], answer: 3 },
    { question: "Which method can be used to convert all characters in a string to upper case?", choices: ["a. toUpperCase()", "b. convertToUpperCase()", "c. changeToUpperCase()", "d. upperCase()"], answer: 0 },
    { question: "What is the default value of a static variable in Java?", choices: ["a. 0", "b. null", "c. Depends on the data type", "d. No default value"], answer: 2 },
    { question: "Which method can be used to create a new instance of a class?", choices: ["a. instance()", "b. create()", "c. newInstance()", "d. class()"], answer: 2 }
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
    const indices = Array.from(Array(javaQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => javaQuestions[index]);
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
const javaQuestions = [
    { question: "What is the correct file extension for Java files?", choices: ["a. .java", "b. .jav", "c. .jv", "d. .jva"], answer: 0 },
    { question: "Which of these is not a primitive data type in Java?", choices: ["a. int", "b. float", "c. boolean", "d. String"], answer: 3 },
    { question: "Which method is used to start a thread in Java?", choices: ["a. start()", "b. run()", "c. execute()", "d. init()"], answer: 0 },
    { question: "Which keyword is used to define a constant in Java?", choices: ["a. constant", "b. final", "c. static", "d. const"], answer: 1 },
    { question: "What is the default value of a boolean variable in Java?", choices: ["a. true", "b. false", "c. 0", "d. null"], answer: 1 },
    { question: "What does JVM stand for?", choices: ["a. Java Very Machine", "b. Java Virtual Machine", "c. Java Verification Machine", "d. Java Visual Machine"], answer: 1 },
    { question: "Which of these is used to handle exceptions in Java?", choices: ["a. try-catch", "b. if-else", "c. for loop", "d. switch-case"], answer: 0 },
    { question: "Which of these is not a Java access modifier?", choices: ["a. public", "b. private", "c. protected", "d. package"], answer: 3 },
    { question: "Which of the following is not an OOP concept in Java?", choices: ["a. Inheritance", "b. Encapsulation", "c. Polymorphism", "d. Compilation"], answer: 4 },
    { question: "Which collection class allows you to grow or shrink its size and provides indexed access to its elements, but whose methods are not synchronized?", choices: ["a. java.util.HashSet", "b. java.util.LinkedList", "c. java.util.ArrayList", "d. java.util.Vector"], answer: 2 },
    { question: "Which of the following is a marker interface?", choices: ["a. Serializable", "b. Comparator", "c. Cloneable", "d. Runnable"], answer: 0 },
    { question: "Which method is used to compare two strings in Java?", choices: ["a. equals()", "b. compare()", "c. compareTo()", "d. contains()"], answer: 0 },
    { question: "Which operator is used to concatenate strings in Java?", choices: ["a. +", "b. &", "c. |", "d. &&"], answer: 0 },
    { question: "Which package contains the Random class?", choices: ["a. java.util", "b. java.lang", "c. java.io", "d. java.net"], answer: 0 },
    { question: "Which keyword is used to inherit a class in Java?", choices: ["a. implements", "b. extends", "c. inherits", "d. super"], answer: 1 },
    { question: "Which method must be implemented by all threads?", choices: ["a. start()", "b. stop()", "c. run()", "d. main()"], answer: 2 },
    { question: "Which of these cannot be used for a variable name in Java?", choices: ["a. identifier", "b. keyword", "c. variable", "d. letter"], answer: 1 },
    { question: "What is the size of an int variable in Java?", choices: ["a. 8 bits", "b. 16 bits", "c. 32 bits", "d. 64 bits"], answer: 2 },
    { question: "What is the default value of a local variable in Java?", choices: ["a. 0", "b. null", "c. undefined", "d. No default value"], answer: 3 },
    { question: "Which keyword is used to define a subclass in Java?", choices: ["a. extend", "b. inherit", "c. subclass", "d. extends"], answer: 3 },
    { question: "Which exception is thrown when a division by zero occurs?", choices: ["a. NullPointerException", "b. ArithmeticException", "c. NumberFormatException", "d. IndexOutOfBoundsException"], answer: 1 },
    { question: "What is the output of 9/2 in Java?", choices: ["a. 4", "b. 4.5", "c. 5", "d. 4.0"], answer: 0 },
    { question: "Which keyword is used to prevent inheritance of a class?", choices: ["a. final", "b. static", "c. abstract", "d. const"], answer: 0 },
    { question: "Which of these classes is immutable?", choices: ["a. StringBuilder", "b. StringBuffer", "c. String", "d. CharArray"], answer: 2 },
    { question: "Which method can be used to obtain the length of an array?", choices: ["a. length()", "b. size()", "c. length", "d. getSize()"], answer: 2 },
    { question: "Which of the following is used to perform clean-up processing just before an object is garbage collected?", choices: ["a. finalize()", "b. finally()", "c. finalize", "d. finally"], answer: 0 },
    { question: "What is the return type of the hashCode() method in Java?", choices: ["a. int", "b. long", "c. float", "d. double"], answer: 0 },
    { question: "Which of these is not a feature of Java?", choices: ["a. Object-oriented", "b. Platform independent", "c. Use of pointers", "d. Dynamic"], answer: 2 },
    { question: "Which of the following is not a valid Java keyword?", choices: ["a. static", "b. Boolean", "c. void", "d. volatile"], answer: 1 },
    { question: "What is the base class of all classes in Java?", choices: ["a. java.lang.String", "b. java.util.Scanner", "c. java.lang.Object", "d. java.util.Collection"], answer: 2 },
    { question: "What is the implicit return type of a constructor?", choices: ["a. void", "b. int", "c. Object", "d. No return type"], answer: 3 },
    { question: "Which of these can be used to create an instance of an array?", choices: ["a. new", "b. malloc", "c. alloc", "d. instance"], answer: 0 },
    { question: "Which operator is used to find the remainder in Java?", choices: ["a. /", "b. %", "c. //", "d. ^"], answer: 1 },
    { question: "Which method is called when an object is created in Java?", choices: ["a. class()", "b. constructor()", "c. create()", "d. init()"], answer: 1 },
    { question: "Which of these cannot be declared static?", choices: ["a. variable", "b. method", "c. class", "d. constructor"], answer: 3 },
    { question: "What is the size of a byte variable in Java?", choices: ["a. 8 bits", "b. 16 bits", "c. 32 bits", "d. 64 bits"], answer: 0 },
    { question: "Which method is used to terminate an applet?", choices: ["a. terminate()", "b. stop()", "c. end()", "d. destroy()"], answer: 3 },
    { question: "Which method in Java is used to get the class of an object?", choices: ["a. getClass()", "b. getObjectClass()", "c. getObjectType()", "d. getType()"], answer: 0 },
    { question: "Which of these is not a valid comment in Java?", choices: ["a. // comment", "b. /* comment */", "c. /** comment */", "d. / comment"], answer: 3 },
    { question: "What does the 'super' keyword in Java do?", choices: ["a. It refers to the superclass of the current object.", "b. It is used to initialize objects.", "c. It is used to call a static method.", "d. It is used to call a private method."], answer: 0 },
    { question: "Which keyword is used to declare an abstract class in Java?", choices: ["a. abstract", "b. interface", "c. implements", "d. extends"], answer: 0 },
    { question: "Which method is used to get a substring of a string in Java?", choices: ["a. substring()", "b. subString()", "c. substr()", "d. subStr()"], answer: 0 },
    { question: "What is the output of 2 + 3 + 'Hello'?", choices: ["a. 5Hello", "b. 23Hello", "c. 5 Hello", "d. Error"], answer: 0 },
    { question: "Which method is used to check if a string starts with a specific prefix?", choices: ["a. startsWith()", "b. beginsWith()", "c. starts()", "d. begins()"], answer: 0 },
    { question: "Which class is used to handle file input and output in Java?", choices: ["a. FileInputStream", "b. FileReader", "c. FileWriter", "d. All of the above"], answer: 3 },
    { question: "Which of these is a loop construct in Java?", choices: ["a. for", "b. if", "c. switch", "d. try"], answer: 0 },
    { question: "Which of these is a logical operator in Java?", choices: ["a. &&", "b. &", "c. ||", "d. ^"], answer: 0 },
    { question: "Which of the following is not an interface in Java?", choices: ["a. Runnable", "b. Serializable", "c. Comparable", "d. ArrayList"], answer: 3 },
    { question: "Which method can be used to convert all characters in a string to upper case?", choices: ["a. toUpperCase()", "b. convertToUpperCase()", "c. changeToUpperCase()", "d. upperCase()"], answer: 0 },
    { question: "What is the default value of a static variable in Java?", choices: ["a. 0", "b. null", "c. Depends on the data type", "d. No default value"], answer: 2 },
    { question: "Which method can be used to create a new instance of a class?", choices: ["a. instance()", "b. create()", "c. newInstance()", "d. class()"], answer: 2 }
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
    const indices = Array.from(Array(javaQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => javaQuestions[index]);
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