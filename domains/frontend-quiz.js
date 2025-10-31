<<<<<<< HEAD
const frontendQuestions = [
    { question: "What does HTML stand for?", choices: ["a. Hyper Text Markup Language", "b. Home Tool Markup Language", "c. Hyperlinks and Text Markup Language", "d. Hyperlinking Textual Markup Language"], answer: 0 },
    { question: "Which HTML element is used for the largest heading?", choices: ["a. <heading>", "b. <h6>", "c. <h1>", "d. <head>"], answer: 2 },
    { question: "What is the correct HTML element for inserting a line break?", choices: ["a. <break>", "b. <lb>", "c. <br>", "d. <line>"], answer: 2 },
    { question: "What does CSS stand for?", choices: ["a. Creative Style Sheets", "b. Colorful Style Sheets", "c. Cascading Style Sheets", "d. Computer Style Sheets"], answer: 2 },
    { question: "Which property is used to change the background color?", choices: ["a. bgcolor", "b. background-color", "c. color", "d. bg-color"], answer: 1 },
    { question: "Which CSS property controls the text size?", choices: ["a. font-style", "b. text-size", "c. font-size", "d. text-style"], answer: 2 },
    { question: "How do you make each word in a text start with a capital letter?", choices: ["a. text-transform: capitalize", "b. text-transform: uppercase", "c. text-transform: lowercase", "d. text-transform: none"], answer: 0 },
    { question: "Which HTML attribute is used to define inline styles?", choices: ["a. style", "b. styles", "c. class", "d. font"], answer: 0 },
    { question: "How do you add a background color for all <h1> elements?", choices: ["a. h1.all {background-color:#FFFFFF;}", "b. all.h1 {background-color:#FFFFFF;}", "c. h1 {background-color:#FFFFFF;}", "d. h1.background {color:#FFFFFF;}"], answer: 2 },
    { question: "Which CSS property is used to change the text color of an element?", choices: ["a. fgcolor", "b. color", "c. text-color", "d. font-color"], answer: 1 },
    { question: "Which HTML element is used to specify a footer for a document or section?", choices: ["a. <footer>", "b. <bottom>", "c. <section>", "d. <foot>"], answer: 0 },
    { question: "How can you make a numbered list?", choices: ["a. <list>", "b. <ul>", "c. <ol>", "d. <dl>"], answer: 2 },
    { question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", choices: ["a. src", "b. longdesc", "c. alt", "d. title"], answer: 2 },
    { question: "In HTML, which attribute is used to specify that an input field must be filled out?", choices: ["a. required", "b. placeholder", "c. validate", "d. formvalidate"], answer: 0 },
    { question: "Which CSS property is used to set the spacing between lines of text?", choices: ["a. line-height", "b. linespacing", "c. linespacer", "d. line-spacing"], answer: 0 },
    { question: "Which HTML element defines navigation links?", choices: ["a. <navigate>", "b. <navigation>", "c. <nav>", "d. <navigate-links>"], answer: 2 },
    { question: "What is the correct HTML for making a checkbox?", choices: ["a. <input type=\"check\">", "b. <input type=\"checkbox\">", "c. <check>", "d. <checkbox>"], answer: 1 },
    { question: "Which HTML element is used to define important text?", choices: ["a. <strong>", "b. <b>", "c. <important>", "d. <i>"], answer: 0 },
    { question: "What is the correct HTML for adding a background color?", choices: ["a. <body style=\"background-color:yellow;\">", "b. <body bg=\"yellow\">", "c. <background>yellow</background>", "d. <body style=\"bg-color:yellow;\">"], answer: 0 },
    { question: "How do you make a list that lists its items with bullets?", choices: ["a. <ol>", "b. <ul>", "c. <dl>", "d. <list>"], answer: 1 },
    { question: "What is the correct HTML for creating a hyperlink?", choices: ["a. <a url=\"http://example.com\">Example</a>", "b. <a>http://example.com</a>", "c. <a href=\"http://example.com\">Example</a>", "d. <link href=\"http://example.com\">Example</link>"], answer: 2 },
    { question: "Which HTML element is used to specify a header for a document or section?", choices: ["a. <head>", "b. <header>", "c. <section>", "d. <top>"], answer: 1 },
    { question: "Which input type defines a slider control?", choices: ["a. slider", "b. range", "c. controls", "d. input"], answer: 1 },
    { question: "Which CSS property is used to make the text bold?", choices: ["a. font-weight: bold;", "b. font: bold;", "c. style: bold;", "d. text-style: bold;"], answer: 0 },
    { question: "Which HTML element is used to specify a table header?", choices: ["a. <th>", "b. <thead>", "c. <header>", "d. <head>"], answer: 0 },
    { question: "How do you display hyperlinks without an underline in CSS?", choices: ["a. a {text-decoration:none;}", "b. a {decoration:no-underline;}", "c. a {underline:none;}", "d. a {text-decoration:no-underline;}"], answer: 0 },
    { question: "Which property is used to change the font of an element?", choices: ["a. font-family", "b. font-style", "c. font-size", "d. font-weight"], answer: 0 },
    { question: "Which HTML element defines the title of a document?", choices: ["a. <meta>", "b. <title>", "c. <head>", "d. <heading>"], answer: 1 },
    { question: "How do you create a dropdown list in HTML?", choices: ["a. <input type=\"dropdown\">", "b. <select>", "c. <input type=\"select\">", "d. <dropdown>"], answer: 1 },
    { question: "What is the correct HTML for making a text area?", choices: ["a. <textarea>", "b. <input type=\"textarea\">", "c. <input type=\"text\">", "d. <text>"], answer: 0 },
    { question: "Which HTML element is used to define a description list?", choices: ["a. <dl>", "b. <list>", "c. <description>", "d. <dd>"], answer: 0 },
    { question: "How do you select elements with class name \"test\" in CSS?", choices: ["a. .test", "b. #test", "c. *test", "d. test"], answer: 0 },
    { question: "What is the default value of the position property in CSS?", choices: ["a. static", "b. relative", "c. fixed", "d. absolute"], answer: 0 },
    { question: "Which HTML element is used to play video files?", choices: ["a. <video>", "b. <movie>", "c. <media>", "d. <play>"], answer: 0 },
    { question: "How can you make a list that lists its items with numbers?", choices: ["a. <ol>", "b. <ul>", "c. <dl>", "d. <list>"], answer: 0 },
    { question: "Which HTML element is used to specify a paragraph?", choices: ["a. <para>", "b. <p>", "c. <pg>", "d. <paragraph>"], answer: 1 },
    { question: "Which CSS property is used to change the left margin of an element?", choices: ["a. margin-left", "b. padding-left", "c. indent-left", "d. space-left"], answer: 0 },
    { question: "What is the correct HTML element for inserting a horizontal rule?", choices: ["a. <hr>", "b. <line>", "c. <break>", "d. <rule>"], answer: 0 },
    { question: "Which HTML element is used to specify a section in a document?", choices: ["a. <sec>", "b. <section>", "c. <div>", "d. <article>"], answer: 1 },
    { question: "How do you make a comment in HTML?", choices: ["a. <!-- Comment -->", "b. // Comment", "c. /* Comment */", "d. # Comment"], answer: 0 },
    { question: "Which HTML attribute specifies the initial value of an input field?", choices: ["a. init", "b. initial", "c. placeholder", "d. value"], answer: 3 },
    { question: "What is the correct HTML for making a radio button?", choices: ["a. <input type=\"radio\">", "b. <input type=\"radiobutton\">", "c. <radio>", "d. <radiobutton>"], answer: 0 },
    { question: "Which HTML element is used to define a table row?", choices: ["a. <tablerow>", "b. <tr>", "c. <td>", "d. <row>"], answer: 1 },
    { question: "What does the <a> HTML element do?", choices: ["a. Creates a hyperlink", "b. Creates an anchor", "c. Creates a link", "d. Creates an article"], answer: 0 },
    { question: "Which CSS property controls the text alignment?", choices: ["a. alignment", "b. text-align", "c. text-alignment", "d. align"], answer: 1 },
    { question: "Which HTML element is used to specify a table cell?", choices: ["a. <td>", "b. <tr>", "c. <table>", "d. <cell>"], answer: 0 },
    { question: "How do you display a border like this: The top border = 10px, the bottom border = 5px, the left border = 20px, and the right border = 1px?", choices: ["a. border-width: 10px 20px 5px 1px;", "b. border-width: 10px 1px 5px 20px;", "c. border-width: 10px 5px 20px 1px;", "d. border-width: 10px 20px 1px 5px;"], answer: 1 },
    { question: "How do you group selectors in CSS?", choices: ["a. Separate each selector with a comma", "b. Separate each selector with a plus sign", "c. Separate each selector with a space", "d. Separate each selector with a colon"], answer: 0 },
    { question: "Which HTML element is used to define emphasized text?", choices: ["a. <em>", "b. <i>", "c. <italic>", "d. <strong>"], answer: 0 }
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
    const indices = Array.from(Array(frontendQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => frontendQuestions[index]);
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
const frontendQuestions = [
    { question: "What does HTML stand for?", choices: ["a. Hyper Text Markup Language", "b. Home Tool Markup Language", "c. Hyperlinks and Text Markup Language", "d. Hyperlinking Textual Markup Language"], answer: 0 },
    { question: "Which HTML element is used for the largest heading?", choices: ["a. <heading>", "b. <h6>", "c. <h1>", "d. <head>"], answer: 2 },
    { question: "What is the correct HTML element for inserting a line break?", choices: ["a. <break>", "b. <lb>", "c. <br>", "d. <line>"], answer: 2 },
    { question: "What does CSS stand for?", choices: ["a. Creative Style Sheets", "b. Colorful Style Sheets", "c. Cascading Style Sheets", "d. Computer Style Sheets"], answer: 2 },
    { question: "Which property is used to change the background color?", choices: ["a. bgcolor", "b. background-color", "c. color", "d. bg-color"], answer: 1 },
    { question: "Which CSS property controls the text size?", choices: ["a. font-style", "b. text-size", "c. font-size", "d. text-style"], answer: 2 },
    { question: "How do you make each word in a text start with a capital letter?", choices: ["a. text-transform: capitalize", "b. text-transform: uppercase", "c. text-transform: lowercase", "d. text-transform: none"], answer: 0 },
    { question: "Which HTML attribute is used to define inline styles?", choices: ["a. style", "b. styles", "c. class", "d. font"], answer: 0 },
    { question: "How do you add a background color for all <h1> elements?", choices: ["a. h1.all {background-color:#FFFFFF;}", "b. all.h1 {background-color:#FFFFFF;}", "c. h1 {background-color:#FFFFFF;}", "d. h1.background {color:#FFFFFF;}"], answer: 2 },
    { question: "Which CSS property is used to change the text color of an element?", choices: ["a. fgcolor", "b. color", "c. text-color", "d. font-color"], answer: 1 },
    { question: "Which HTML element is used to specify a footer for a document or section?", choices: ["a. <footer>", "b. <bottom>", "c. <section>", "d. <foot>"], answer: 0 },
    { question: "How can you make a numbered list?", choices: ["a. <list>", "b. <ul>", "c. <ol>", "d. <dl>"], answer: 2 },
    { question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", choices: ["a. src", "b. longdesc", "c. alt", "d. title"], answer: 2 },
    { question: "In HTML, which attribute is used to specify that an input field must be filled out?", choices: ["a. required", "b. placeholder", "c. validate", "d. formvalidate"], answer: 0 },
    { question: "Which CSS property is used to set the spacing between lines of text?", choices: ["a. line-height", "b. linespacing", "c. linespacer", "d. line-spacing"], answer: 0 },
    { question: "Which HTML element defines navigation links?", choices: ["a. <navigate>", "b. <navigation>", "c. <nav>", "d. <navigate-links>"], answer: 2 },
    { question: "What is the correct HTML for making a checkbox?", choices: ["a. <input type=\"check\">", "b. <input type=\"checkbox\">", "c. <check>", "d. <checkbox>"], answer: 1 },
    { question: "Which HTML element is used to define important text?", choices: ["a. <strong>", "b. <b>", "c. <important>", "d. <i>"], answer: 0 },
    { question: "What is the correct HTML for adding a background color?", choices: ["a. <body style=\"background-color:yellow;\">", "b. <body bg=\"yellow\">", "c. <background>yellow</background>", "d. <body style=\"bg-color:yellow;\">"], answer: 0 },
    { question: "How do you make a list that lists its items with bullets?", choices: ["a. <ol>", "b. <ul>", "c. <dl>", "d. <list>"], answer: 1 },
    { question: "What is the correct HTML for creating a hyperlink?", choices: ["a. <a url=\"http://example.com\">Example</a>", "b. <a>http://example.com</a>", "c. <a href=\"http://example.com\">Example</a>", "d. <link href=\"http://example.com\">Example</link>"], answer: 2 },
    { question: "Which HTML element is used to specify a header for a document or section?", choices: ["a. <head>", "b. <header>", "c. <section>", "d. <top>"], answer: 1 },
    { question: "Which input type defines a slider control?", choices: ["a. slider", "b. range", "c. controls", "d. input"], answer: 1 },
    { question: "Which CSS property is used to make the text bold?", choices: ["a. font-weight: bold;", "b. font: bold;", "c. style: bold;", "d. text-style: bold;"], answer: 0 },
    { question: "Which HTML element is used to specify a table header?", choices: ["a. <th>", "b. <thead>", "c. <header>", "d. <head>"], answer: 0 },
    { question: "How do you display hyperlinks without an underline in CSS?", choices: ["a. a {text-decoration:none;}", "b. a {decoration:no-underline;}", "c. a {underline:none;}", "d. a {text-decoration:no-underline;}"], answer: 0 },
    { question: "Which property is used to change the font of an element?", choices: ["a. font-family", "b. font-style", "c. font-size", "d. font-weight"], answer: 0 },
    { question: "Which HTML element defines the title of a document?", choices: ["a. <meta>", "b. <title>", "c. <head>", "d. <heading>"], answer: 1 },
    { question: "How do you create a dropdown list in HTML?", choices: ["a. <input type=\"dropdown\">", "b. <select>", "c. <input type=\"select\">", "d. <dropdown>"], answer: 1 },
    { question: "What is the correct HTML for making a text area?", choices: ["a. <textarea>", "b. <input type=\"textarea\">", "c. <input type=\"text\">", "d. <text>"], answer: 0 },
    { question: "Which HTML element is used to define a description list?", choices: ["a. <dl>", "b. <list>", "c. <description>", "d. <dd>"], answer: 0 },
    { question: "How do you select elements with class name \"test\" in CSS?", choices: ["a. .test", "b. #test", "c. *test", "d. test"], answer: 0 },
    { question: "What is the default value of the position property in CSS?", choices: ["a. static", "b. relative", "c. fixed", "d. absolute"], answer: 0 },
    { question: "Which HTML element is used to play video files?", choices: ["a. <video>", "b. <movie>", "c. <media>", "d. <play>"], answer: 0 },
    { question: "How can you make a list that lists its items with numbers?", choices: ["a. <ol>", "b. <ul>", "c. <dl>", "d. <list>"], answer: 0 },
    { question: "Which HTML element is used to specify a paragraph?", choices: ["a. <para>", "b. <p>", "c. <pg>", "d. <paragraph>"], answer: 1 },
    { question: "Which CSS property is used to change the left margin of an element?", choices: ["a. margin-left", "b. padding-left", "c. indent-left", "d. space-left"], answer: 0 },
    { question: "What is the correct HTML element for inserting a horizontal rule?", choices: ["a. <hr>", "b. <line>", "c. <break>", "d. <rule>"], answer: 0 },
    { question: "Which HTML element is used to specify a section in a document?", choices: ["a. <sec>", "b. <section>", "c. <div>", "d. <article>"], answer: 1 },
    { question: "How do you make a comment in HTML?", choices: ["a. <!-- Comment -->", "b. // Comment", "c. /* Comment */", "d. # Comment"], answer: 0 },
    { question: "Which HTML attribute specifies the initial value of an input field?", choices: ["a. init", "b. initial", "c. placeholder", "d. value"], answer: 3 },
    { question: "What is the correct HTML for making a radio button?", choices: ["a. <input type=\"radio\">", "b. <input type=\"radiobutton\">", "c. <radio>", "d. <radiobutton>"], answer: 0 },
    { question: "Which HTML element is used to define a table row?", choices: ["a. <tablerow>", "b. <tr>", "c. <td>", "d. <row>"], answer: 1 },
    { question: "What does the <a> HTML element do?", choices: ["a. Creates a hyperlink", "b. Creates an anchor", "c. Creates a link", "d. Creates an article"], answer: 0 },
    { question: "Which CSS property controls the text alignment?", choices: ["a. alignment", "b. text-align", "c. text-alignment", "d. align"], answer: 1 },
    { question: "Which HTML element is used to specify a table cell?", choices: ["a. <td>", "b. <tr>", "c. <table>", "d. <cell>"], answer: 0 },
    { question: "How do you display a border like this: The top border = 10px, the bottom border = 5px, the left border = 20px, and the right border = 1px?", choices: ["a. border-width: 10px 20px 5px 1px;", "b. border-width: 10px 1px 5px 20px;", "c. border-width: 10px 5px 20px 1px;", "d. border-width: 10px 20px 1px 5px;"], answer: 1 },
    { question: "How do you group selectors in CSS?", choices: ["a. Separate each selector with a comma", "b. Separate each selector with a plus sign", "c. Separate each selector with a space", "d. Separate each selector with a colon"], answer: 0 },
    { question: "Which HTML element is used to define emphasized text?", choices: ["a. <em>", "b. <i>", "c. <italic>", "d. <strong>"], answer: 0 }
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
    const indices = Array.from(Array(frontendQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => frontendQuestions[index]);
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