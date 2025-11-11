<<<<<<< HEAD
const pythonQuestions = [
    { question: "What is the correct file extension for Python files?", choices: ["a. .py", "b. .pt", "c. .pyt", "d. .pyth"], answer: 0 },
    { question: "What data type is the result of: 3 / 2 in Python?", choices: ["a. int", "b. float", "c. str", "d. bool"], answer: 1 },
    { question: "How do you create a variable with the floating number 2.8?", choices: ["a. x = float(2.8)", "b. x = 2.8f", "c. x = 2.8", "d. x = float(2,8)"], answer: 2 },
    { question: "Which method can be used to return a string in upper case letters?", choices: ["a. upper()", "b. uppercase()", "c. toUpperCase()", "d. caps()"], answer: 0 },
    { question: "Which of the following is a mutable data type in Python?", choices: ["a. tuple", "b. string", "c. list", "d. int"], answer: 2 },
    { question: "What is the output of: print('Hello' + 'World')?", choices: ["a. Hello World", "b. HelloWorld", "c. Hello+World", "d. SyntaxError"], answer: 1 },
    { question: "How do you start writing a comment in Python?", choices: ["a. //", "b. <!--", "c. #", "d. /*"], answer: 2 },
    { question: "Which keyword is used to define a function in Python?", choices: ["a. func", "b. define", "c. def", "d. function"], answer: 2 },
    { question: "How can you create a dictionary in Python?", choices: ["a. dict = {}", "b. dict = []", "c. dict = ()", "d. dict = ||"], answer: 0 },
    { question: "Which module in Python is used for regular expressions?", choices: ["a. re", "b. regex", "c. reg", "d. pyre"], answer: 0 },
    { question: "How do you check the data type of a variable in Python?", choices: ["a. type(x)", "b. isinstance(x)", "c. checktype(x)", "d. dtype(x)"], answer: 0 },
    { question: "What is the output of: print(10 % 3)?", choices: ["a. 1", "b. 3", "c. 10", "d. 0.3"], answer: 0 },
    { question: "How do you create a set in Python?", choices: ["a. set = []", "b. set = {}", "c. set = ()", "d. set = set()"], answer: 3 },
    { question: "Which of the following is the correct way to import a module named 'math'?", choices: ["a. import math", "b. import.Math", "c. import 'math'", "d. importMath"], answer: 0 },
    { question: "Which function converts a string to an integer in Python?", choices: ["a. int()", "b. str()", "c. float()", "d. chr()"], answer: 0 },
    { question: "Which statement is used to handle exceptions in Python?", choices: ["a. handle", "b. except", "c. catch", "d. try"], answer: 3 },
    { question: "What is the output of: print(type([]))?", choices: ["a. <class 'tuple'>", "b. <class 'dict'>", "c. <class 'list'>", "d. <class 'set'>"], answer: 3 },
    { question: "How do you write a conditional expression in Python?", choices: ["a. if x > y:", "b. if (x > y)", "c. if x > y then:", "d. if x > y { }"], answer: 0 },
    { question: "What is the output of: print('5' + '5')?", choices: ["a. 10", "b. 55", "c. Error", "d. '5 5'"], answer: 1 },
    { question: "Which method is used to remove whitespace from the beginning and end of a string?", choices: ["a. strip()", "b. trim()", "c. ltrim()", "d. rtrim()"], answer: 0 },
    { question: "How do you insert COMMENTS in Python code?", choices: ["a. //", "b. <!--", "c. #", "d. /*"], answer: 2 },
    { question: "How do you define an empty class in Python?", choices: ["a. class ClassName: pass", "b. class ClassName: {}", "c. class ClassName()", "d. class ClassName: []"], answer: 0 },
    { question: "Which of the following is the correct syntax to create a new dictionary in Python?", choices: ["a. mydict = {}", "b. mydict = dict()", "c. mydict = {'key': 'value'}", "d. All of the above"], answer: 3 },
    { question: "Which keyword is used to create an iterator in Python?", choices: ["a. iter", "b. generate", "c. yield", "d. iterate"], answer: 2 },
    { question: "What is the output of: print(bool(0))?", choices: ["a. True", "b. False", "c. 0", "d. None"], answer: 1 },
    { question: "Which of the following is used to define a block of code in Python?", choices: ["a. Indentation", "b. Brackets", "c. Parentheses", "d. Quotation marks"], answer: 0 },
    { question: "Which of the following is the correct way to call a function in Python?", choices: ["a. function_name", "b. function_name()", "c. function name()", "d. function name"], answer: 1 },
    { question: "Which built-in function returns the length of a string?", choices: ["a. length()", "b. size()", "c. len()", "d. count()"], answer: 3 },
    { question: "What does the following list comprehension produce? [x for x in range(5)]", choices: ["a. [0, 1, 2, 3, 4]", "b. [1, 2, 3, 4, 5]", "c. [5, 4, 3, 2, 1]", "d. [0, 1, 2, 3, 4, 5]"], answer: 0 },
    { question: "How do you open a file for reading in Python?", choices: ["a. open('file.txt')", "b. open('file.txt', 'r')", "c. open('file.txt', 'read')", "d. open('file.txt', 'rb')"], answer: 1 },
    { question: "Which method is used to find the position of a substring in a string?", choices: ["a. locate()", "b. find()", "c. indexof()", "d. search()"], answer: 1 },
    { question: "How do you start a for loop in Python?", choices: ["a. for x in y:", "b. for (x in y)", "c. for x in y {", "d. for (x = 0; x < y; x++)"], answer: 0 },
    { question: "What is the correct syntax to check if a key exists in a dictionary?", choices: ["a. if key in dict", "b. if key exists in dict", "c. if key in dict.keys()", "d. if key exists dict"], answer: 0 },
    { question: "Which keyword is used to return a value inside a function?", choices: ["a. return", "b. yield", "c. send", "d. fetch"], answer: 0 },
    { question: "How do you declare a variable in Python?", choices: ["a. x = 10", "b. var x = 10", "c. int x = 10", "d. declare x = 10"], answer: 0 },
    { question: "Which function can be used to get the ASCII value of a character?", choices: ["a. chr()", "b. ord()", "c. ascii()", "d. char()"], answer: 1 },
    { question: "What is the output of: print(type({}))?", choices: ["a. <class 'dict'>", "b. <class 'set'>", "c. <class 'list'>", "d. <class 'tuple'>"], answer: 0 },
    { question: "What is the correct syntax to create a class in Python?", choices: ["a. class ClassName:", "b. class ClassName[]", "c. class ClassName{}", "d. class ClassName()"], answer: 0 },
    { question: "How do you create an instance of a class?", choices: ["a. instance = ClassName()", "b. instance = new ClassName()", "c. instance = ClassName{}", "d. instance = ClassName[]"], answer: 0 },
    { question: "How do you define a private variable in a class?", choices: ["a. __var", "b. _var", "c. private var", "d. var__"], answer: 0 },
    { question: "Which of the following is not a valid escape character in Python?", choices: ["a. \\n", "b. \\t", "c. \\r", "d. \\x"], answer: 3 },
    { question: "How do you generate random numbers in Python?", choices: ["a. import random", "b. import randint", "c. import randomize", "d. import rand"], answer: 0 },
    { question: "Which function is used to get the maximum value from a list?", choices: ["a. max()", "b. maximum()", "c. high()", "d. top()"], answer: 0 },
    { question: "What is the correct syntax to check if a list is empty?", choices: ["a. if not list", "b. if len(list) == 0", "c. if list == []", "d. All of the above"], answer: 3 },
    { question: "How do you copy a list in Python?", choices: ["a. new_list = old_list.copy()", "b. new_list = old_list", "c. new_list = copy(old_list)", "d. new_list = old_list.clone()"], answer: 0 },
    { question: "Which function converts a list of strings into a single string with a specified delimiter?", choices: ["a. join()", "b. split()", "c. concat()", "d. append()"], answer: 0 },
    { question: "How do you add an element to the end of a list?", choices: ["a. list.add(x)", "b. list.append(x)", "c. list.insert(x)", "d. list.extend(x)"], answer: 1 },
    { question: "What is the correct way to import only the sqrt function from the math module?", choices: ["a. from math import sqrt", "b. import math.sqrt", "c. import sqrt from math", "d. from math import all sqrt"], answer: 0 },
    { question: "Which statement is used to terminate a loop prematurely?", choices: ["a. break", "b. stop", "c. exit", "d. terminate"], answer: 0 },
    { question: "What is the correct way to create a tuple?", choices: ["a. tuple = ()", "b. tuple = []", "c. tuple = {}", "d. tuple = ||"], answer: 0 },
    { question: "How do you define a lambda function?", choices: ["a. lambda x: x + 1", "b. lambda(x): x + 1", "c. lambda(x) x + 1", "d. lambda x x + 1"], answer: 0 },
    { question: "How do you access the first element of a list?", choices: ["a. list[0]", "b. list(0)", "c. list.first()", "d. list[1]"], answer: 0 },
    { question: "Which function is used to remove an element from a list by value?", choices: ["a. remove()", "b. del()", "c. pop()", "d. discard()"], answer: 0 }
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
    const indices = Array.from(Array(pythonQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => pythonQuestions[index]);
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
const pythonQuestions = [
    { question: "What is the correct file extension for Python files?", choices: ["a. .py", "b. .pt", "c. .pyt", "d. .pyth"], answer: 0 },
    { question: "What data type is the result of: 3 / 2 in Python?", choices: ["a. int", "b. float", "c. str", "d. bool"], answer: 1 },
    { question: "How do you create a variable with the floating number 2.8?", choices: ["a. x = float(2.8)", "b. x = 2.8f", "c. x = 2.8", "d. x = float(2,8)"], answer: 2 },
    { question: "Which method can be used to return a string in upper case letters?", choices: ["a. upper()", "b. uppercase()", "c. toUpperCase()", "d. caps()"], answer: 0 },
    { question: "Which of the following is a mutable data type in Python?", choices: ["a. tuple", "b. string", "c. list", "d. int"], answer: 2 },
    { question: "What is the output of: print('Hello' + 'World')?", choices: ["a. Hello World", "b. HelloWorld", "c. Hello+World", "d. SyntaxError"], answer: 1 },
    { question: "How do you start writing a comment in Python?", choices: ["a. //", "b. <!--", "c. #", "d. /*"], answer: 2 },
    { question: "Which keyword is used to define a function in Python?", choices: ["a. func", "b. define", "c. def", "d. function"], answer: 2 },
    { question: "How can you create a dictionary in Python?", choices: ["a. dict = {}", "b. dict = []", "c. dict = ()", "d. dict = ||"], answer: 0 },
    { question: "Which module in Python is used for regular expressions?", choices: ["a. re", "b. regex", "c. reg", "d. pyre"], answer: 0 },
    { question: "How do you check the data type of a variable in Python?", choices: ["a. type(x)", "b. isinstance(x)", "c. checktype(x)", "d. dtype(x)"], answer: 0 },
    { question: "What is the output of: print(10 % 3)?", choices: ["a. 1", "b. 3", "c. 10", "d. 0.3"], answer: 0 },
    { question: "How do you create a set in Python?", choices: ["a. set = []", "b. set = {}", "c. set = ()", "d. set = set()"], answer: 3 },
    { question: "Which of the following is the correct way to import a module named 'math'?", choices: ["a. import math", "b. import.Math", "c. import 'math'", "d. importMath"], answer: 0 },
    { question: "Which function converts a string to an integer in Python?", choices: ["a. int()", "b. str()", "c. float()", "d. chr()"], answer: 0 },
    { question: "Which statement is used to handle exceptions in Python?", choices: ["a. handle", "b. except", "c. catch", "d. try"], answer: 3 },
    { question: "What is the output of: print(type([]))?", choices: ["a. <class 'tuple'>", "b. <class 'dict'>", "c. <class 'list'>", "d. <class 'set'>"], answer: 3 },
    { question: "How do you write a conditional expression in Python?", choices: ["a. if x > y:", "b. if (x > y)", "c. if x > y then:", "d. if x > y { }"], answer: 0 },
    { question: "What is the output of: print('5' + '5')?", choices: ["a. 10", "b. 55", "c. Error", "d. '5 5'"], answer: 1 },
    { question: "Which method is used to remove whitespace from the beginning and end of a string?", choices: ["a. strip()", "b. trim()", "c. ltrim()", "d. rtrim()"], answer: 0 },
    { question: "How do you insert COMMENTS in Python code?", choices: ["a. //", "b. <!--", "c. #", "d. /*"], answer: 2 },
    { question: "How do you define an empty class in Python?", choices: ["a. class ClassName: pass", "b. class ClassName: {}", "c. class ClassName()", "d. class ClassName: []"], answer: 0 },
    { question: "Which of the following is the correct syntax to create a new dictionary in Python?", choices: ["a. mydict = {}", "b. mydict = dict()", "c. mydict = {'key': 'value'}", "d. All of the above"], answer: 3 },
    { question: "Which keyword is used to create an iterator in Python?", choices: ["a. iter", "b. generate", "c. yield", "d. iterate"], answer: 2 },
    { question: "What is the output of: print(bool(0))?", choices: ["a. True", "b. False", "c. 0", "d. None"], answer: 1 },
    { question: "Which of the following is used to define a block of code in Python?", choices: ["a. Indentation", "b. Brackets", "c. Parentheses", "d. Quotation marks"], answer: 0 },
    { question: "Which of the following is the correct way to call a function in Python?", choices: ["a. function_name", "b. function_name()", "c. function name()", "d. function name"], answer: 1 },
    { question: "Which built-in function returns the length of a string?", choices: ["a. length()", "b. size()", "c. len()", "d. count()"], answer: 3 },
    { question: "What does the following list comprehension produce? [x for x in range(5)]", choices: ["a. [0, 1, 2, 3, 4]", "b. [1, 2, 3, 4, 5]", "c. [5, 4, 3, 2, 1]", "d. [0, 1, 2, 3, 4, 5]"], answer: 0 },
    { question: "How do you open a file for reading in Python?", choices: ["a. open('file.txt')", "b. open('file.txt', 'r')", "c. open('file.txt', 'read')", "d. open('file.txt', 'rb')"], answer: 1 },
    { question: "Which method is used to find the position of a substring in a string?", choices: ["a. locate()", "b. find()", "c. indexof()", "d. search()"], answer: 1 },
    { question: "How do you start a for loop in Python?", choices: ["a. for x in y:", "b. for (x in y)", "c. for x in y {", "d. for (x = 0; x < y; x++)"], answer: 0 },
    { question: "What is the correct syntax to check if a key exists in a dictionary?", choices: ["a. if key in dict", "b. if key exists in dict", "c. if key in dict.keys()", "d. if key exists dict"], answer: 0 },
    { question: "Which keyword is used to return a value inside a function?", choices: ["a. return", "b. yield", "c. send", "d. fetch"], answer: 0 },
    { question: "How do you declare a variable in Python?", choices: ["a. x = 10", "b. var x = 10", "c. int x = 10", "d. declare x = 10"], answer: 0 },
    { question: "Which function can be used to get the ASCII value of a character?", choices: ["a. chr()", "b. ord()", "c. ascii()", "d. char()"], answer: 1 },
    { question: "What is the output of: print(type({}))?", choices: ["a. <class 'dict'>", "b. <class 'set'>", "c. <class 'list'>", "d. <class 'tuple'>"], answer: 0 },
    { question: "What is the correct syntax to create a class in Python?", choices: ["a. class ClassName:", "b. class ClassName[]", "c. class ClassName{}", "d. class ClassName()"], answer: 0 },
    { question: "How do you create an instance of a class?", choices: ["a. instance = ClassName()", "b. instance = new ClassName()", "c. instance = ClassName{}", "d. instance = ClassName[]"], answer: 0 },
    { question: "How do you define a private variable in a class?", choices: ["a. __var", "b. _var", "c. private var", "d. var__"], answer: 0 },
    { question: "Which of the following is not a valid escape character in Python?", choices: ["a. \\n", "b. \\t", "c. \\r", "d. \\x"], answer: 3 },
    { question: "How do you generate random numbers in Python?", choices: ["a. import random", "b. import randint", "c. import randomize", "d. import rand"], answer: 0 },
    { question: "Which function is used to get the maximum value from a list?", choices: ["a. max()", "b. maximum()", "c. high()", "d. top()"], answer: 0 },
    { question: "What is the correct syntax to check if a list is empty?", choices: ["a. if not list", "b. if len(list) == 0", "c. if list == []", "d. All of the above"], answer: 3 },
    { question: "How do you copy a list in Python?", choices: ["a. new_list = old_list.copy()", "b. new_list = old_list", "c. new_list = copy(old_list)", "d. new_list = old_list.clone()"], answer: 0 },
    { question: "Which function converts a list of strings into a single string with a specified delimiter?", choices: ["a. join()", "b. split()", "c. concat()", "d. append()"], answer: 0 },
    { question: "How do you add an element to the end of a list?", choices: ["a. list.add(x)", "b. list.append(x)", "c. list.insert(x)", "d. list.extend(x)"], answer: 1 },
    { question: "What is the correct way to import only the sqrt function from the math module?", choices: ["a. from math import sqrt", "b. import math.sqrt", "c. import sqrt from math", "d. from math import all sqrt"], answer: 0 },
    { question: "Which statement is used to terminate a loop prematurely?", choices: ["a. break", "b. stop", "c. exit", "d. terminate"], answer: 0 },
    { question: "What is the correct way to create a tuple?", choices: ["a. tuple = ()", "b. tuple = []", "c. tuple = {}", "d. tuple = ||"], answer: 0 },
    { question: "How do you define a lambda function?", choices: ["a. lambda x: x + 1", "b. lambda(x): x + 1", "c. lambda(x) x + 1", "d. lambda x x + 1"], answer: 0 },
    { question: "How do you access the first element of a list?", choices: ["a. list[0]", "b. list(0)", "c. list.first()", "d. list[1]"], answer: 0 },
    { question: "Which function is used to remove an element from a list by value?", choices: ["a. remove()", "b. del()", "c. pop()", "d. discard()"], answer: 0 }
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
    const indices = Array.from(Array(pythonQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => pythonQuestions[index]);
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