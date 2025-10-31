<<<<<<< HEAD
const vueQuestions = [
    { question: "What is Vue.js?", choices: ["a. A back-end framework", "b. A front-end framework", "c. A database management system", "d. A version control system"], answer: 1 },
    { question: "What is the command to create a new Vue project using Vue CLI?", choices: ["a. vue create my-project", "b. vue new my-project", "c. vue init my-project", "d. vue start my-project"], answer: 0 },
    { question: "Which directive is used for conditional rendering in Vue?", choices: ["a. v-bind", "b. v-if", "c. v-for", "d. v-on"], answer: 1 },
    { question: "How do you bind an attribute to an expression in Vue?", choices: ["a. v-bind:", "b. v-attr:", "c. v-on:", "d. v-if:"], answer: 0 },
    { question: "What is the shorthand for v-bind?", choices: ["a. @", "b. :", "c. #", "d. &"], answer: 1 },
    { question: "Which of these is used for looping through items in Vue?", choices: ["a. v-if", "b. v-for", "c. v-loop", "d. v-while"], answer: 1 },
    { question: "What is a Vue instance?", choices: ["a. A function", "b. An object", "c. A method", "d. A component"], answer: 1 },
    { question: "How do you listen to events in Vue?", choices: ["a. v-bind:", "b. v-on:", "c. v-if:", "d. v-for:"], answer: 1 },
    { question: "What is the shorthand for v-on?", choices: ["a. :", "b. @", "c. #", "d. &"], answer: 1 },
    { question: "How do you create a computed property in Vue?", choices: ["a. Inside the methods object", "b. Inside the data object", "c. Inside the computed object", "d. Inside the watch object"], answer: 2 },
    { question: "What is Vue Router?", choices: ["a. A state management library", "b. A library for building UI", "c. A library for routing", "d. A testing library"], answer: 2 },
    { question: "How do you create a two-way binding in Vue?", choices: ["a. v-on", "b. v-bind", "c. v-model", "d. v-if"], answer: 2 },
    { question: "Which lifecycle hook is called after the instance has been created?", choices: ["a. created", "b. mounted", "c. updated", "d. destroyed"], answer: 0 },
    { question: "Which lifecycle hook is called after the instance has been mounted?", choices: ["a. created", "b. mounted", "c. updated", "d. destroyed"], answer: 1 },
    { question: "How do you pass data from a parent component to a child component?", choices: ["a. Using props", "b. Using state", "c. Using getters", "d. Using methods"], answer: 0 },
    { question: "What is Vuex?", choices: ["a. A router library", "b. A component library", "c. A state management library", "d. A testing library"], answer: 2 },
    { question: "Which Vue CLI command is used to serve a project?", choices: ["a. npm serve", "b. npm run serve", "c. vue serve", "d. vue run serve"], answer: 1 },
    { question: "How do you handle forms in Vue?", choices: ["a. Using v-bind", "b. Using v-if", "c. Using v-model", "d. Using v-on"], answer: 2 },
    { question: "Which of these is not a valid Vue directive?", choices: ["a. v-model", "b. v-if", "c. v-for", "d. v-route"], answer: 3 },
    { question: "How do you register a global component in Vue?", choices: ["a. Vue.component()", "b. Vue.registerComponent()", "c. Vue.globalComponent()", "d. Vue.useComponent()"], answer: 0 },
    { question: "How do you import a component in Vue?", choices: ["a. import Component from './Component.vue'", "b. require Component from './Component.vue'", "c. include Component from './Component.vue'", "d. load Component from './Component.vue'"], answer: 0 },
    { question: "Which command is used to install Vue Router?", choices: ["a. npm install vue-router", "b. npm install vue-route", "c. npm install vue-routing", "d. npm install vue-routes"], answer: 0 },
    { question: "Which of the following is not a Vue instance property?", choices: ["a. $data", "b. $props", "c. $methods", "d. $emit"], answer: 2 },
    { question: "What is the purpose of the 'key' attribute in Vue?", choices: ["a. To bind data", "b. To keep track of nodes", "c. To handle events", "d. To create computed properties"], answer: 1 },
    { question: "Which directive is used to dynamically switch between components?", choices: ["a. v-if", "b. v-for", "c. v-show", "d. v-bind"], answer: 0 },
    { question: "What is a Vue component?", choices: ["a. A reusable Vue instance", "b. A Vue method", "c. A Vue directive", "d. A Vue filter"], answer: 0 },
    { question: "Which of the following is not a valid Vue CLI command?", choices: ["a. vue create", "b. vue serve", "c. vue build", "d. vue run"], answer: 3 },
    { question: "How do you emit an event from a child component?", choices: ["a. this.emit()", "b. this.$emit()", "c. this.dispatch()", "d. this.$dispatch()"], answer: 1 },
    { question: "Which Vue directive is used for rendering an element only if the condition is true?", choices: ["a. v-if", "b. v-show", "c. v-bind", "d. v-model"], answer: 0 },
    { question: "What does SPA stand for in the context of Vue?", choices: ["a. Single Page Application", "b. Single Point Application", "c. Single Page App", "d. Single Point App"], answer: 0 },
    { question: "How do you bind a class to an element in Vue?", choices: ["a. v-bind:class", "b. v-on:class", "c. v-class", "d. v-if:class"], answer: 0 },
    { question: "What is the purpose of the 'computed' property in Vue?", choices: ["a. To compute a method", "b. To compute a directive", "c. To compute a state", "d. To compute a property"], answer: 3 },
    { question: "How do you bind a style to an element in Vue?", choices: ["a. v-bind:style", "b. v-style", "c. v-on:style", "d. v-if:style"], answer: 0 },
    { question: "Which Vue instance property is used to access the root instance?", choices: ["a. $root", "b. $parent", "c. $child", "d. $instance"], answer: 0 },
    { question: "What is the default mode of Vue Router?", choices: ["a. hash", "b. history", "c. abstract", "d. default"], answer: 0 },
    { question: "Which method is used to navigate to a different route in Vue Router?", choices: ["a. this.$router.push()", "b. this.$router.go()", "c. this.$route.push()", "d. this.$route.go()"], answer: 0 },
    { question: "Which of these is not a Vue directive?", choices: ["a. v-html", "b. v-text", "c. v-bind", "d. v-hide"], answer: 3 },
    { question: "What is the purpose of the 'watch' property in Vue?", choices: ["a. To watch a directive", "b. To watch a method", "c. To watch a data property", "d. To watch a filter"], answer: 3 },
    { question: "How do you create a local component in Vue?", choices: ["a. Using Vue.component", "b. Using the components option in the Vue instance", "c. Using Vue.extend", "d. Using the component option in the Vue instance"], answer: 1 },
    { question: "Which Vue directive is used for binding an input element to a variable?", choices: ["a. v-bind", "b. v-model", "c. v-if", "d. v-for"], answer: 1 },
    { question: "How do you access a child component's method from a parent component?", choices: ["a. Using refs", "b. Using props", "c. Using state", "d. Using emit"], answer: 0 },
    { question: "Which command is used to build a Vue project for production?", choices: ["a. npm run build", "b. npm run serve", "c. vue build", "d. vue serve"], answer: 0 },
    { question: "Which of these is a built-in Vue directive?", choices: ["a. v-for", "b. v-loop", "c. v-if-else", "d. v-once"], answer: 0 },
    { question: "How do you create a method in Vue?", choices: ["a. Inside the data object", "b. Inside the methods object", "c. Inside the computed object", "d. Inside the watch object"], answer: 1 },
    { question: "Which of these is not a Vue.js feature?", choices: ["a. Virtual DOM", "b. Reactive data binding", "c. Component-based architecture", "d. Server-side rendering only"], answer: 3 },
    { question: "How do you define a prop in a Vue component?", choices: ["a. Inside the data object", "b. Inside the props object", "c. Inside the methods object", "d. Inside the props array"], answer: 3 },
    { question: "Which of these is a Vue instance method?", choices: ["a. $on", "b. $off", "c. $emit", "d. All of the above"], answer: 3 },
    { question: "How do you conditionally apply a class in Vue?", choices: ["a. :class", "b. :class-if", "c. v-class-if", "d. v-class"], answer: 0 },
    { question: "Which method is used to force Vue to re-render a component?", choices: ["a. this.$forceUpdate()", "b. this.$update()", "c. this.$refresh()", "d. this.$render()"], answer: 0 },
    { question: "What is the purpose of a mixin in Vue?", choices: ["a. To mix styles", "b. To mix HTML and JavaScript", "c. To reuse component logic", "d. To create global components"], answer: 3 }
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
    const indices = Array.from(Array(vueQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => vueQuestions[index]);
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
const vueQuestions = [
    { question: "What is Vue.js?", choices: ["a. A back-end framework", "b. A front-end framework", "c. A database management system", "d. A version control system"], answer: 1 },
    { question: "What is the command to create a new Vue project using Vue CLI?", choices: ["a. vue create my-project", "b. vue new my-project", "c. vue init my-project", "d. vue start my-project"], answer: 0 },
    { question: "Which directive is used for conditional rendering in Vue?", choices: ["a. v-bind", "b. v-if", "c. v-for", "d. v-on"], answer: 1 },
    { question: "How do you bind an attribute to an expression in Vue?", choices: ["a. v-bind:", "b. v-attr:", "c. v-on:", "d. v-if:"], answer: 0 },
    { question: "What is the shorthand for v-bind?", choices: ["a. @", "b. :", "c. #", "d. &"], answer: 1 },
    { question: "Which of these is used for looping through items in Vue?", choices: ["a. v-if", "b. v-for", "c. v-loop", "d. v-while"], answer: 1 },
    { question: "What is a Vue instance?", choices: ["a. A function", "b. An object", "c. A method", "d. A component"], answer: 1 },
    { question: "How do you listen to events in Vue?", choices: ["a. v-bind:", "b. v-on:", "c. v-if:", "d. v-for:"], answer: 1 },
    { question: "What is the shorthand for v-on?", choices: ["a. :", "b. @", "c. #", "d. &"], answer: 1 },
    { question: "How do you create a computed property in Vue?", choices: ["a. Inside the methods object", "b. Inside the data object", "c. Inside the computed object", "d. Inside the watch object"], answer: 2 },
    { question: "What is Vue Router?", choices: ["a. A state management library", "b. A library for building UI", "c. A library for routing", "d. A testing library"], answer: 2 },
    { question: "How do you create a two-way binding in Vue?", choices: ["a. v-on", "b. v-bind", "c. v-model", "d. v-if"], answer: 2 },
    { question: "Which lifecycle hook is called after the instance has been created?", choices: ["a. created", "b. mounted", "c. updated", "d. destroyed"], answer: 0 },
    { question: "Which lifecycle hook is called after the instance has been mounted?", choices: ["a. created", "b. mounted", "c. updated", "d. destroyed"], answer: 1 },
    { question: "How do you pass data from a parent component to a child component?", choices: ["a. Using props", "b. Using state", "c. Using getters", "d. Using methods"], answer: 0 },
    { question: "What is Vuex?", choices: ["a. A router library", "b. A component library", "c. A state management library", "d. A testing library"], answer: 2 },
    { question: "Which Vue CLI command is used to serve a project?", choices: ["a. npm serve", "b. npm run serve", "c. vue serve", "d. vue run serve"], answer: 1 },
    { question: "How do you handle forms in Vue?", choices: ["a. Using v-bind", "b. Using v-if", "c. Using v-model", "d. Using v-on"], answer: 2 },
    { question: "Which of these is not a valid Vue directive?", choices: ["a. v-model", "b. v-if", "c. v-for", "d. v-route"], answer: 3 },
    { question: "How do you register a global component in Vue?", choices: ["a. Vue.component()", "b. Vue.registerComponent()", "c. Vue.globalComponent()", "d. Vue.useComponent()"], answer: 0 },
    { question: "How do you import a component in Vue?", choices: ["a. import Component from './Component.vue'", "b. require Component from './Component.vue'", "c. include Component from './Component.vue'", "d. load Component from './Component.vue'"], answer: 0 },
    { question: "Which command is used to install Vue Router?", choices: ["a. npm install vue-router", "b. npm install vue-route", "c. npm install vue-routing", "d. npm install vue-routes"], answer: 0 },
    { question: "Which of the following is not a Vue instance property?", choices: ["a. $data", "b. $props", "c. $methods", "d. $emit"], answer: 2 },
    { question: "What is the purpose of the 'key' attribute in Vue?", choices: ["a. To bind data", "b. To keep track of nodes", "c. To handle events", "d. To create computed properties"], answer: 1 },
    { question: "Which directive is used to dynamically switch between components?", choices: ["a. v-if", "b. v-for", "c. v-show", "d. v-bind"], answer: 0 },
    { question: "What is a Vue component?", choices: ["a. A reusable Vue instance", "b. A Vue method", "c. A Vue directive", "d. A Vue filter"], answer: 0 },
    { question: "Which of the following is not a valid Vue CLI command?", choices: ["a. vue create", "b. vue serve", "c. vue build", "d. vue run"], answer: 3 },
    { question: "How do you emit an event from a child component?", choices: ["a. this.emit()", "b. this.$emit()", "c. this.dispatch()", "d. this.$dispatch()"], answer: 1 },
    { question: "Which Vue directive is used for rendering an element only if the condition is true?", choices: ["a. v-if", "b. v-show", "c. v-bind", "d. v-model"], answer: 0 },
    { question: "What does SPA stand for in the context of Vue?", choices: ["a. Single Page Application", "b. Single Point Application", "c. Single Page App", "d. Single Point App"], answer: 0 },
    { question: "How do you bind a class to an element in Vue?", choices: ["a. v-bind:class", "b. v-on:class", "c. v-class", "d. v-if:class"], answer: 0 },
    { question: "What is the purpose of the 'computed' property in Vue?", choices: ["a. To compute a method", "b. To compute a directive", "c. To compute a state", "d. To compute a property"], answer: 3 },
    { question: "How do you bind a style to an element in Vue?", choices: ["a. v-bind:style", "b. v-style", "c. v-on:style", "d. v-if:style"], answer: 0 },
    { question: "Which Vue instance property is used to access the root instance?", choices: ["a. $root", "b. $parent", "c. $child", "d. $instance"], answer: 0 },
    { question: "What is the default mode of Vue Router?", choices: ["a. hash", "b. history", "c. abstract", "d. default"], answer: 0 },
    { question: "Which method is used to navigate to a different route in Vue Router?", choices: ["a. this.$router.push()", "b. this.$router.go()", "c. this.$route.push()", "d. this.$route.go()"], answer: 0 },
    { question: "Which of these is not a Vue directive?", choices: ["a. v-html", "b. v-text", "c. v-bind", "d. v-hide"], answer: 3 },
    { question: "What is the purpose of the 'watch' property in Vue?", choices: ["a. To watch a directive", "b. To watch a method", "c. To watch a data property", "d. To watch a filter"], answer: 3 },
    { question: "How do you create a local component in Vue?", choices: ["a. Using Vue.component", "b. Using the components option in the Vue instance", "c. Using Vue.extend", "d. Using the component option in the Vue instance"], answer: 1 },
    { question: "Which Vue directive is used for binding an input element to a variable?", choices: ["a. v-bind", "b. v-model", "c. v-if", "d. v-for"], answer: 1 },
    { question: "How do you access a child component's method from a parent component?", choices: ["a. Using refs", "b. Using props", "c. Using state", "d. Using emit"], answer: 0 },
    { question: "Which command is used to build a Vue project for production?", choices: ["a. npm run build", "b. npm run serve", "c. vue build", "d. vue serve"], answer: 0 },
    { question: "Which of these is a built-in Vue directive?", choices: ["a. v-for", "b. v-loop", "c. v-if-else", "d. v-once"], answer: 0 },
    { question: "How do you create a method in Vue?", choices: ["a. Inside the data object", "b. Inside the methods object", "c. Inside the computed object", "d. Inside the watch object"], answer: 1 },
    { question: "Which of these is not a Vue.js feature?", choices: ["a. Virtual DOM", "b. Reactive data binding", "c. Component-based architecture", "d. Server-side rendering only"], answer: 3 },
    { question: "How do you define a prop in a Vue component?", choices: ["a. Inside the data object", "b. Inside the props object", "c. Inside the methods object", "d. Inside the props array"], answer: 3 },
    { question: "Which of these is a Vue instance method?", choices: ["a. $on", "b. $off", "c. $emit", "d. All of the above"], answer: 3 },
    { question: "How do you conditionally apply a class in Vue?", choices: ["a. :class", "b. :class-if", "c. v-class-if", "d. v-class"], answer: 0 },
    { question: "Which method is used to force Vue to re-render a component?", choices: ["a. this.$forceUpdate()", "b. this.$update()", "c. this.$refresh()", "d. this.$render()"], answer: 0 },
    { question: "What is the purpose of a mixin in Vue?", choices: ["a. To mix styles", "b. To mix HTML and JavaScript", "c. To reuse component logic", "d. To create global components"], answer: 3 }
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
    const indices = Array.from(Array(vueQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => vueQuestions[index]);
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