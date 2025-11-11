<<<<<<< HEAD
const angularQuestions = [
    { question: "What is Angular?", choices: ["a. A backend framework", "b. A front-end web framework", "c. A database", "d. A programming language"], answer: 1 },
    { question: "Which of the following is a key feature of Angular?", choices: ["a. Two-way data binding", "b. Virtual DOM", "c. Server-side rendering", "d. Declarative templates"], answer: 0 },
    { question: "What is a component in Angular?", choices: ["a. A class with a template and metadata", "b. A database model", "c. A type of service", "d. A CSS style"], answer: 0 },
    { question: "Which decorator is used to define a component in Angular?", choices: ["a. @NgModule", "b. @Injectable", "c. @Component", "d. @Directive"], answer: 2 },
    { question: "What is the CLI command to create a new Angular project?", choices: ["a. ng new", "b. ng create", "c. ng init", "d. ng generate"], answer: 0 },
    { question: "How do you create a new component using Angular CLI?", choices: ["a. ng create component [name]", "b. ng new component [name]", "c. ng generate component [name]", "d. ng add component [name]"], answer: 2 },
    { question: "What is Angular CLI?", choices: ["a. A code editor", "b. A command line interface tool to scaffold and build Angular apps", "c. A testing framework", "d. A module loader"], answer: 1 },
    { question: "What is a directive in Angular?", choices: ["a. A function that adds behavior to an existing DOM element", "b. A service for HTTP requests", "c. A router configuration", "d. A data model"], answer: 0 },
    { question: "Which directive is used for conditional rendering in Angular?", choices: ["a. *ngFor", "b. *ngIf", "c. *ngSwitch", "d. *ngStyle"], answer: 1 },
    { question: "How do you bind data from component to the template in Angular?", choices: ["a. Using interpolation {{}}", "b. Using square brackets []", "c. Using parentheses ()", "d. Using curly braces {}"], answer: 0 },
    { question: "What is a service in Angular?", choices: ["a. A reusable code for data fetching, logging, etc.", "b. A type of component", "c. A module for routing", "d. A CSS file"], answer: 0 },
    { question: "Which decorator is used to define a service in Angular?", choices: ["a. @Component", "b. @NgModule", "c. @Injectable", "d. @Directive"], answer: 2 },
    { question: "What is the purpose of a module in Angular?", choices: ["a. To group related components, directives, pipes, and services", "b. To define routing rules", "c. To create HTTP requests", "d. To manage state"], answer: 0 },
    { question: "Which decorator is used to define a module in Angular?", choices: ["a. @Component", "b. @NgModule", "c. @Injectable", "d. @Directive"], answer: 1 },
    { question: "What is a pipe in Angular?", choices: ["a. A way to write display-value transformations", "b. A CSS style", "c. A type of directive", "d. A form control"], answer: 0 },
    { question: "Which CLI command is used to serve an Angular application?", choices: ["a. ng start", "b. ng serve", "c. ng build", "d. ng run"], answer: 1 },
    { question: "What is a router in Angular?", choices: ["a. A service that enables navigation between views", "b. A component for HTTP requests", "c. A type of directive", "d. A way to style components"], answer: 0 },
    { question: "How do you define a route in Angular?", choices: ["a. Using RouterConfig", "b. Using RouteService", "c. Using RouterModule.forRoot()", "d. Using RouteProvider"], answer: 2 },
    { question: "What is Angular's ChangeDetectionStrategy?", choices: ["a. A mechanism to update the DOM", "b. A way to debug applications", "c. A method to handle HTTP requests", "d. A routing technique"], answer: 0 },
    { question: "Which of these is a valid Angular lifecycle hook?", choices: ["a. ngOnInit", "b. ngOnStart", "c. ngOnCreate", "d. ngOnDestroy"], answer: 0 },
    { question: "How do you create a form in Angular?", choices: ["a. Using ngForm", "b. Using FormBuilder", "c. Using FormService", "d. Using ReactiveForms"], answer: 1 },
    { question: "What is dependency injection in Angular?", choices: ["a. A way to create dependencies", "b. A design pattern to manage dependencies", "c. A method to handle events", "d. A technique for routing"], answer: 1 },
    { question: "Which command is used to build an Angular project for production?", choices: ["a. ng build --prod", "b. ng serve --prod", "c. ng create --prod", "d. ng compile --prod"], answer: 0 },
    { question: "How do you handle events in Angular?", choices: ["a. Using square brackets []", "b. Using parentheses ()", "c. Using curly braces {}", "d. Using double quotes \"\""], answer: 1 },
    { question: "What is Angular Universal?", choices: ["a. A library for server-side rendering", "b. A CSS framework", "c. A database service", "d. A routing module"], answer: 0 },
    { question: "How do you define a template in Angular?", choices: ["a. Using the templateUrl property", "b. Using the template property", "c. Using the selector property", "d. Both a and b"], answer: 3 },
    { question: "What is the purpose of Angular CLI?", choices: ["a. To create and manage Angular projects", "b. To create backend services", "c. To manage databases", "d. To style Angular applications"], answer: 0 },
    { question: "What does the 'ngModel' directive do?", choices: ["a. Binds data to the form", "b. Binds data to the view", "c. Binds data to the component", "d. Binds data to the router"], answer: 1 },
    { question: "Which command is used to update Angular CLI?", choices: ["a. ng update", "b. ng upgrade", "c. npm update -g @angular/cli", "d. npm install -g @angular/cli@latest"], answer: 3 },
    { question: "What is a resolver in Angular?", choices: ["a. A service that resolves data before a route is activated", "b. A service that handles HTTP requests", "c. A component for form validation", "d. A directive for conditional rendering"], answer: 0 },
    { question: "What is the purpose of the 'HttpClientModule' in Angular?", choices: ["a. To handle HTTP requests", "b. To manage routing", "c. To create forms", "d. To style components"], answer: 0 },
    { question: "Which lifecycle hook is called after Angular initializes the component's views?", choices: ["a. ngOnInit", "b. ngAfterViewInit", "c. ngAfterContentInit", "d. ngOnDestroy"], answer: 1 },
    { question: "What is lazy loading in Angular?", choices: ["a. Loading components on demand", "b. Loading data on demand", "c. Loading services on demand", "d. Loading routes on demand"], answer: 3 },
    { question: "How do you create a singleton service in Angular?", choices: ["a. Provide it in the component", "b. Provide it in the module", "c. Provide it in the root injector", "d. Provide it in the directive"], answer: 2 },
    { question: "Which of these is a reactive form directive?", choices: ["a. ngForm", "b. formControl", "c. ngControl", "d. ngModel"], answer: 1 },
    { question: "What does 'ng-content' do?", choices: ["a. Projects content into a component", "b. Binds data to the component", "c. Styles the component", "d. Handles events"], answer: 0 },
    { question: "What is an Angular module?", choices: ["a. A mechanism to group components, directives, pipes, and services", "b. A service for HTTP requests", "c. A type of directive", "d. A CSS file"], answer: 0 },
    { question: "Which Angular directive is used to bind an attribute to an element?", choices: ["a. *ngIf", "b. [attr]", "c. *ngFor", "d. [ngClass]"], answer: 1 },
    { question: "What does the 'async' pipe do in Angular?", choices: ["a. Transforms data asynchronously", "b. Handles HTTP requests", "c. Subscribes to an observable and returns the latest value", "d. Transforms data synchronously"], answer: 2 },
    { question: "Which command is used to add a library to an Angular project?", choices: ["a. ng add [library]", "b. ng install [library]", "c. npm add [library]", "d. npm install [library]"], answer: 0 },
    { question: "What is the primary purpose of the 'RouterModule'?", choices: ["a. To handle HTTP requests", "b. To manage routing", "c. To create forms", "d. To style components"], answer: 1 },
    { question: "Which of the following is a valid Angular binding syntax?", choices: ["a. {{ }}", "b. [ ]", "c. ( )", "d. All of the above"], answer: 3 },
    { question: "What is the purpose of 'ngOnDestroy' lifecycle hook?", choices: ["a. To clean up before the component is destroyed", "b. To initialize the component", "c. To update the DOM", "d. To handle routing"], answer: 0 },
    { question: "What is Angular Ivy?", choices: ["a. A new Angular router", "b. A new Angular template compiler", "c. A new Angular service", "d. A new Angular form module"], answer: 1 },
    { question: "Which Angular service is used to make HTTP requests?", choices: ["a. HttpClient", "b. HttpService", "c. HttpRequest", "d. HttpModule"], answer: 0 },
    { question: "How do you enable production mode in Angular?", choices: ["a. Using ng build --prod", "b. Setting environment.production to true", "c. Using enableProdMode() method", "d. All of the above"], answer: 3 },
    { question: "What does 'ngOnChanges' lifecycle hook do?", choices: ["a. Executes when the component's input properties change", "b. Executes when the component is initialized", "c. Executes when the component's views are initialized", "d. Executes when the component is destroyed"], answer: 0 },
    { question: "Which command is used to run unit tests in Angular?", choices: ["a. ng test", "b. ng run tests", "c. ng unit-test", "d. ng serve --test"], answer: 0 },
    { question: "What is the purpose of Angular's 'zone.js' library?", choices: ["a. To handle asynchronous operations", "b. To manage routing", "c. To create forms", "d. To style components"], answer: 0 },
    { question: "What does 'ngAfterContentInit' lifecycle hook do?", choices: ["a. Executes after the component's content has been initialized", "b. Executes after the component's views have been initialized", "c. Executes after the component is destroyed", "d. Executes after the component's input properties change"], answer: 0 }
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
    const indices = Array.from(Array(angularQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => angularQuestions[index]);
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
const angularQuestions = [
    { question: "What is Angular?", choices: ["a. A backend framework", "b. A front-end web framework", "c. A database", "d. A programming language"], answer: 1 },
    { question: "Which of the following is a key feature of Angular?", choices: ["a. Two-way data binding", "b. Virtual DOM", "c. Server-side rendering", "d. Declarative templates"], answer: 0 },
    { question: "What is a component in Angular?", choices: ["a. A class with a template and metadata", "b. A database model", "c. A type of service", "d. A CSS style"], answer: 0 },
    { question: "Which decorator is used to define a component in Angular?", choices: ["a. @NgModule", "b. @Injectable", "c. @Component", "d. @Directive"], answer: 2 },
    { question: "What is the CLI command to create a new Angular project?", choices: ["a. ng new", "b. ng create", "c. ng init", "d. ng generate"], answer: 0 },
    { question: "How do you create a new component using Angular CLI?", choices: ["a. ng create component [name]", "b. ng new component [name]", "c. ng generate component [name]", "d. ng add component [name]"], answer: 2 },
    { question: "What is Angular CLI?", choices: ["a. A code editor", "b. A command line interface tool to scaffold and build Angular apps", "c. A testing framework", "d. A module loader"], answer: 1 },
    { question: "What is a directive in Angular?", choices: ["a. A function that adds behavior to an existing DOM element", "b. A service for HTTP requests", "c. A router configuration", "d. A data model"], answer: 0 },
    { question: "Which directive is used for conditional rendering in Angular?", choices: ["a. *ngFor", "b. *ngIf", "c. *ngSwitch", "d. *ngStyle"], answer: 1 },
    { question: "How do you bind data from component to the template in Angular?", choices: ["a. Using interpolation {{}}", "b. Using square brackets []", "c. Using parentheses ()", "d. Using curly braces {}"], answer: 0 },
    { question: "What is a service in Angular?", choices: ["a. A reusable code for data fetching, logging, etc.", "b. A type of component", "c. A module for routing", "d. A CSS file"], answer: 0 },
    { question: "Which decorator is used to define a service in Angular?", choices: ["a. @Component", "b. @NgModule", "c. @Injectable", "d. @Directive"], answer: 2 },
    { question: "What is the purpose of a module in Angular?", choices: ["a. To group related components, directives, pipes, and services", "b. To define routing rules", "c. To create HTTP requests", "d. To manage state"], answer: 0 },
    { question: "Which decorator is used to define a module in Angular?", choices: ["a. @Component", "b. @NgModule", "c. @Injectable", "d. @Directive"], answer: 1 },
    { question: "What is a pipe in Angular?", choices: ["a. A way to write display-value transformations", "b. A CSS style", "c. A type of directive", "d. A form control"], answer: 0 },
    { question: "Which CLI command is used to serve an Angular application?", choices: ["a. ng start", "b. ng serve", "c. ng build", "d. ng run"], answer: 1 },
    { question: "What is a router in Angular?", choices: ["a. A service that enables navigation between views", "b. A component for HTTP requests", "c. A type of directive", "d. A way to style components"], answer: 0 },
    { question: "How do you define a route in Angular?", choices: ["a. Using RouterConfig", "b. Using RouteService", "c. Using RouterModule.forRoot()", "d. Using RouteProvider"], answer: 2 },
    { question: "What is Angular's ChangeDetectionStrategy?", choices: ["a. A mechanism to update the DOM", "b. A way to debug applications", "c. A method to handle HTTP requests", "d. A routing technique"], answer: 0 },
    { question: "Which of these is a valid Angular lifecycle hook?", choices: ["a. ngOnInit", "b. ngOnStart", "c. ngOnCreate", "d. ngOnDestroy"], answer: 0 },
    { question: "How do you create a form in Angular?", choices: ["a. Using ngForm", "b. Using FormBuilder", "c. Using FormService", "d. Using ReactiveForms"], answer: 1 },
    { question: "What is dependency injection in Angular?", choices: ["a. A way to create dependencies", "b. A design pattern to manage dependencies", "c. A method to handle events", "d. A technique for routing"], answer: 1 },
    { question: "Which command is used to build an Angular project for production?", choices: ["a. ng build --prod", "b. ng serve --prod", "c. ng create --prod", "d. ng compile --prod"], answer: 0 },
    { question: "How do you handle events in Angular?", choices: ["a. Using square brackets []", "b. Using parentheses ()", "c. Using curly braces {}", "d. Using double quotes \"\""], answer: 1 },
    { question: "What is Angular Universal?", choices: ["a. A library for server-side rendering", "b. A CSS framework", "c. A database service", "d. A routing module"], answer: 0 },
    { question: "How do you define a template in Angular?", choices: ["a. Using the templateUrl property", "b. Using the template property", "c. Using the selector property", "d. Both a and b"], answer: 3 },
    { question: "What is the purpose of Angular CLI?", choices: ["a. To create and manage Angular projects", "b. To create backend services", "c. To manage databases", "d. To style Angular applications"], answer: 0 },
    { question: "What does the 'ngModel' directive do?", choices: ["a. Binds data to the form", "b. Binds data to the view", "c. Binds data to the component", "d. Binds data to the router"], answer: 1 },
    { question: "Which command is used to update Angular CLI?", choices: ["a. ng update", "b. ng upgrade", "c. npm update -g @angular/cli", "d. npm install -g @angular/cli@latest"], answer: 3 },
    { question: "What is a resolver in Angular?", choices: ["a. A service that resolves data before a route is activated", "b. A service that handles HTTP requests", "c. A component for form validation", "d. A directive for conditional rendering"], answer: 0 },
    { question: "What is the purpose of the 'HttpClientModule' in Angular?", choices: ["a. To handle HTTP requests", "b. To manage routing", "c. To create forms", "d. To style components"], answer: 0 },
    { question: "Which lifecycle hook is called after Angular initializes the component's views?", choices: ["a. ngOnInit", "b. ngAfterViewInit", "c. ngAfterContentInit", "d. ngOnDestroy"], answer: 1 },
    { question: "What is lazy loading in Angular?", choices: ["a. Loading components on demand", "b. Loading data on demand", "c. Loading services on demand", "d. Loading routes on demand"], answer: 3 },
    { question: "How do you create a singleton service in Angular?", choices: ["a. Provide it in the component", "b. Provide it in the module", "c. Provide it in the root injector", "d. Provide it in the directive"], answer: 2 },
    { question: "Which of these is a reactive form directive?", choices: ["a. ngForm", "b. formControl", "c. ngControl", "d. ngModel"], answer: 1 },
    { question: "What does 'ng-content' do?", choices: ["a. Projects content into a component", "b. Binds data to the component", "c. Styles the component", "d. Handles events"], answer: 0 },
    { question: "What is an Angular module?", choices: ["a. A mechanism to group components, directives, pipes, and services", "b. A service for HTTP requests", "c. A type of directive", "d. A CSS file"], answer: 0 },
    { question: "Which Angular directive is used to bind an attribute to an element?", choices: ["a. *ngIf", "b. [attr]", "c. *ngFor", "d. [ngClass]"], answer: 1 },
    { question: "What does the 'async' pipe do in Angular?", choices: ["a. Transforms data asynchronously", "b. Handles HTTP requests", "c. Subscribes to an observable and returns the latest value", "d. Transforms data synchronously"], answer: 2 },
    { question: "Which command is used to add a library to an Angular project?", choices: ["a. ng add [library]", "b. ng install [library]", "c. npm add [library]", "d. npm install [library]"], answer: 0 },
    { question: "What is the primary purpose of the 'RouterModule'?", choices: ["a. To handle HTTP requests", "b. To manage routing", "c. To create forms", "d. To style components"], answer: 1 },
    { question: "Which of the following is a valid Angular binding syntax?", choices: ["a. {{ }}", "b. [ ]", "c. ( )", "d. All of the above"], answer: 3 },
    { question: "What is the purpose of 'ngOnDestroy' lifecycle hook?", choices: ["a. To clean up before the component is destroyed", "b. To initialize the component", "c. To update the DOM", "d. To handle routing"], answer: 0 },
    { question: "What is Angular Ivy?", choices: ["a. A new Angular router", "b. A new Angular template compiler", "c. A new Angular service", "d. A new Angular form module"], answer: 1 },
    { question: "Which Angular service is used to make HTTP requests?", choices: ["a. HttpClient", "b. HttpService", "c. HttpRequest", "d. HttpModule"], answer: 0 },
    { question: "How do you enable production mode in Angular?", choices: ["a. Using ng build --prod", "b. Setting environment.production to true", "c. Using enableProdMode() method", "d. All of the above"], answer: 3 },
    { question: "What does 'ngOnChanges' lifecycle hook do?", choices: ["a. Executes when the component's input properties change", "b. Executes when the component is initialized", "c. Executes when the component's views are initialized", "d. Executes when the component is destroyed"], answer: 0 },
    { question: "Which command is used to run unit tests in Angular?", choices: ["a. ng test", "b. ng run tests", "c. ng unit-test", "d. ng serve --test"], answer: 0 },
    { question: "What is the purpose of Angular's 'zone.js' library?", choices: ["a. To handle asynchronous operations", "b. To manage routing", "c. To create forms", "d. To style components"], answer: 0 },
    { question: "What does 'ngAfterContentInit' lifecycle hook do?", choices: ["a. Executes after the component's content has been initialized", "b. Executes after the component's views have been initialized", "c. Executes after the component is destroyed", "d. Executes after the component's input properties change"], answer: 0 }
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
    const indices = Array.from(Array(angularQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => angularQuestions[index]);
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