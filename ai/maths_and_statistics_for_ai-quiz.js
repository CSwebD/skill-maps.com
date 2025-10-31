<<<<<<< HEAD
const mathStatsQuestions = [
    // Basic Mathematics
    { question: "What is the derivative of f(x) = x^2?", choices: ["a. 1", "b. 2x", "c. x", "d. x^2"], answer: 1 },
    { question: "What is the integral of f(x) = 3x^2?", choices: ["a. x^3", "b. x^3 + C", "c. 3x", "d. x^2"], answer: 1 },
    { question: "Which of the following is a method to solve linear equations?", choices: ["a. Integration", "b. Differentiation", "c. Gaussian elimination", "d. Convolution"], answer: 2 },
    { question: "What is the solution to the equation 2x + 3 = 7?", choices: ["a. x = 1", "b. x = 2", "c. x = 3", "d. x = 4"], answer: 1 },
    { question: "What is the value of sin(90 degrees)?", choices: ["a. 0", "b. 1", "c. -1", "d. √2/2"], answer: 1 },
    
    // Linear Algebra
    { question: "What is a matrix?", choices: ["a. A scalar", "b. A vector", "c. A two-dimensional array of numbers", "d. A complex number"], answer: 2 },
    { question: "What is the determinant of a 2x2 matrix [[a, b], [c, d]]?", choices: ["a. ad - bc", "b. ab + cd", "c. a + d", "d. ac - bd"], answer: 0 },
    { question: "What is the identity matrix?", choices: ["a. A matrix filled with ones", "b. A diagonal matrix with ones on the diagonal", "c. A zero matrix", "d. A matrix with equal rows and columns"], answer: 1 },
    { question: "What is the transpose of a matrix?", choices: ["a. A matrix with rows and columns swapped", "b. A matrix with inverted values", "c. A matrix with added rows", "d. A matrix with added columns"], answer: 0 },
    { question: "What is an eigenvalue?", choices: ["a. A scalar associated with a linear system of equations", "b. A matrix that can be inverted", "c. A vector that remains unchanged under a linear transformation", "d. A matrix determinant"], answer: 0 },
    
    // Probability
    { question: "What is the probability of getting heads in a fair coin toss?", choices: ["a. 0.25", "b. 0.5", "c. 0.75", "d. 1"], answer: 1 },
    { question: "What is a random variable?", choices: ["a. A fixed value", "b. A variable that can take different values randomly", "c. A constant", "d. A probability distribution"], answer: 1 },
    { question: "What is the expected value of a random variable?", choices: ["a. The sum of all possible values", "b. The average of all possible values", "c. The most likely value", "d. The value with the highest probability"], answer: 1 },
    { question: "What does a probability distribution describe?", choices: ["a. The possible outcomes of an experiment", "b. The frequency of outcomes", "c. The likelihood of different outcomes", "d. All of the above"], answer: 3 },
    { question: "What is Bayes' theorem used for?", choices: ["a. Calculating the probability of a hypothesis given evidence", "b. Calculating the mean of a distribution", "c. Calculating the variance of a distribution", "d. Calculating the probability of independent events"], answer: 0 },
    
    // Statistics
    { question: "What is a population in statistics?", choices: ["a. A subset of data", "b. The entire set of data", "c. A sample of data", "d. A statistical measure"], answer: 1 },
    { question: "What is a sample?", choices: ["a. The entire set of data", "b. A subset of the population", "c. A statistical measure", "d. A hypothesis"], answer: 1 },
    { question: "What is the mean of the data set [2, 4, 6, 8]?", choices: ["a. 4", "b. 5", "c. 6", "d. 10"], answer: 2 },
    { question: "What is the median of the data set [3, 5, 7, 9, 11]?", choices: ["a. 5", "b. 7", "c. 9", "d. 11"], answer: 1 },
    { question: "What is the mode of the data set [1, 2, 2, 3, 4]?", choices: ["a. 1", "b. 2", "c. 3", "d. 4"], answer: 1 },
    
    // Hypothesis Testing
    { question: "What is a null hypothesis?", choices: ["a. A hypothesis that there is an effect", "b. A hypothesis that there is no effect", "c. A hypothesis that cannot be tested", "d. A hypothesis that is always true"], answer: 1 },
    { question: "What is a p-value?", choices: ["a. The probability of the null hypothesis being true", "b. The probability of obtaining the observed data given that the null hypothesis is true", "c. The probability of the alternative hypothesis being true", "d. The probability of a type II error"], answer: 1 },
    { question: "What does it mean if a p-value is less than 0.05?", choices: ["a. The null hypothesis is rejected", "b. The null hypothesis is accepted", "c. The alternative hypothesis is rejected", "d. The alternative hypothesis is accepted"], answer: 0 },
    { question: "What is a type I error?", choices: ["a. Rejecting the null hypothesis when it is true", "b. Failing to reject the null hypothesis when it is false", "c. Rejecting the alternative hypothesis when it is true", "d. Failing to reject the alternative hypothesis when it is false"], answer: 0 },
    { question: "What is a type II error?", choices: ["a. Rejecting the null hypothesis when it is true", "b. Failing to reject the null hypothesis when it is false", "c. Rejecting the alternative hypothesis when it is true", "d. Failing to reject the alternative hypothesis when it is false"], answer: 1 },
    
    // Descriptive Statistics
    { question: "What is variance?", choices: ["a. The average of the data set", "b. The spread of the data set", "c. The difference between the highest and lowest values", "d. The square root of the standard deviation"], answer: 1 },
    { question: "What is standard deviation?", choices: ["a. The average of the data set", "b. The spread of the data set", "c. The square root of the variance", "d. The difference between the highest and lowest values"], answer: 2 },
    { question: "What is a histogram?", choices: ["a. A graphical representation of data using bars", "b. A plot of data points", "c. A table of frequencies", "d. A measure of central tendency"], answer: 0 },
    { question: "What does the interquartile range measure?", choices: ["a. The range of the entire data set", "b. The range within which the middle 50% of the data falls", "c. The range of the lowest 25% of the data", "d. The range of the highest 25% of the data"], answer: 1 },
    { question: "What is a box plot?", choices: ["a. A plot that displays the five-number summary of a data set", "b. A plot of data points", "c. A table of frequencies", "d. A measure of central tendency"], answer: 0 },
    
    // Correlation and Regression
    { question: "What does correlation measure?", choices: ["a. The relationship between two variables", "b. The difference between two variables", "c. The variance of a data set", "d. The central tendency of a data set"], answer: 0 },
    { question: "What is the range of a correlation coefficient?", choices: ["a. 0 to 1", "b. -1 to 1", "c. -∞ to ∞", "d. 0 to ∞"], answer: 1 },
    { question: "What does a correlation coefficient of 1 indicate?", choices: ["a. No correlation", "b. Perfect positive correlation", "c. Perfect negative correlation", "d. Weak correlation"], answer: 1 },
    { question: "What is linear regression used for?", choices: ["a. Predicting the value of a dependent variable based on an independent variable", "b. Measuring the spread of a data set", "c. Testing a hypothesis", "d. Calculating probabilities"], answer: 0 },
    { question: "What is the formula for a simple linear regression line?", choices: ["a. y = mx + b", "b. y = x^2", "c. y = a/x", "d. y = e^x"], answer: 0 },
    
    // Distributions
    { question: "What is a normal distribution?", choices: ["a. A distribution with a single peak", "b. A distribution with two peaks", "c. A distribution with uniform probability", "d. A distribution with no variability"], answer: 0 },
    { question: "What is the mean of a standard normal distribution?", choices: ["a. 0", "b. 1", "c. -1", "d. ∞"], answer: 0 },
    { question: "What is the standard deviation of a standard normal distribution?", choices: ["a. 0", "b. 1", "c. -1", "d. ∞"], answer: 1 },
    { question: "What is the shape of a normal distribution curve?", choices: ["a. Bell-shaped", "b. U-shaped", "c. Flat", "d. Skewed"], answer: 0 },
    { question: "What percentage of data falls within one standard deviation of the mean in a normal distribution?", choices: ["a. 50%", "b. 68%", "c. 95%", "d. 99%"], answer: 1 },
    
    // Advanced Topics
    { question: "What is gradient descent?", choices: ["a. A method to find the minimum of a function", "b. A method to find the maximum of a function", "c. A type of probability distribution", "d. A statistical test"], answer: 0 },
    { question: "What is the purpose of regularization in machine learning?", choices: ["a. To increase the complexity of the model", "b. To reduce overfitting", "c. To optimize the model for large data sets", "d. To calculate the variance"], answer: 1 },
    { question: "What is a confusion matrix used for?", choices: ["a. Evaluating the performance of a classification model", "b. Calculating the variance", "c. Measuring central tendency", "d. Predicting future values"], answer: 0 },
    { question: "What is overfitting?", choices: ["a. When a model performs well on training data but poorly on new data", "b. When a model performs well on all data", "c. When a model cannot capture the data's trends", "d. When a model is too simple"], answer: 0 },
    { question: "What is cross-validation?", choices: ["a. A method to split data into training and test sets", "b. A technique to assess the performance of a model", "c. A type of probability distribution", "d. A statistical test"], answer: 1 }
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
    const indices = Array.from(Array(mathStatsQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => mathStatsQuestions[index]);
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
const mathStatsQuestions = [
    // Basic Mathematics
    { question: "What is the derivative of f(x) = x^2?", choices: ["a. 1", "b. 2x", "c. x", "d. x^2"], answer: 1 },
    { question: "What is the integral of f(x) = 3x^2?", choices: ["a. x^3", "b. x^3 + C", "c. 3x", "d. x^2"], answer: 1 },
    { question: "Which of the following is a method to solve linear equations?", choices: ["a. Integration", "b. Differentiation", "c. Gaussian elimination", "d. Convolution"], answer: 2 },
    { question: "What is the solution to the equation 2x + 3 = 7?", choices: ["a. x = 1", "b. x = 2", "c. x = 3", "d. x = 4"], answer: 1 },
    { question: "What is the value of sin(90 degrees)?", choices: ["a. 0", "b. 1", "c. -1", "d. √2/2"], answer: 1 },
    
    // Linear Algebra
    { question: "What is a matrix?", choices: ["a. A scalar", "b. A vector", "c. A two-dimensional array of numbers", "d. A complex number"], answer: 2 },
    { question: "What is the determinant of a 2x2 matrix [[a, b], [c, d]]?", choices: ["a. ad - bc", "b. ab + cd", "c. a + d", "d. ac - bd"], answer: 0 },
    { question: "What is the identity matrix?", choices: ["a. A matrix filled with ones", "b. A diagonal matrix with ones on the diagonal", "c. A zero matrix", "d. A matrix with equal rows and columns"], answer: 1 },
    { question: "What is the transpose of a matrix?", choices: ["a. A matrix with rows and columns swapped", "b. A matrix with inverted values", "c. A matrix with added rows", "d. A matrix with added columns"], answer: 0 },
    { question: "What is an eigenvalue?", choices: ["a. A scalar associated with a linear system of equations", "b. A matrix that can be inverted", "c. A vector that remains unchanged under a linear transformation", "d. A matrix determinant"], answer: 0 },
    
    // Probability
    { question: "What is the probability of getting heads in a fair coin toss?", choices: ["a. 0.25", "b. 0.5", "c. 0.75", "d. 1"], answer: 1 },
    { question: "What is a random variable?", choices: ["a. A fixed value", "b. A variable that can take different values randomly", "c. A constant", "d. A probability distribution"], answer: 1 },
    { question: "What is the expected value of a random variable?", choices: ["a. The sum of all possible values", "b. The average of all possible values", "c. The most likely value", "d. The value with the highest probability"], answer: 1 },
    { question: "What does a probability distribution describe?", choices: ["a. The possible outcomes of an experiment", "b. The frequency of outcomes", "c. The likelihood of different outcomes", "d. All of the above"], answer: 3 },
    { question: "What is Bayes' theorem used for?", choices: ["a. Calculating the probability of a hypothesis given evidence", "b. Calculating the mean of a distribution", "c. Calculating the variance of a distribution", "d. Calculating the probability of independent events"], answer: 0 },
    
    // Statistics
    { question: "What is a population in statistics?", choices: ["a. A subset of data", "b. The entire set of data", "c. A sample of data", "d. A statistical measure"], answer: 1 },
    { question: "What is a sample?", choices: ["a. The entire set of data", "b. A subset of the population", "c. A statistical measure", "d. A hypothesis"], answer: 1 },
    { question: "What is the mean of the data set [2, 4, 6, 8]?", choices: ["a. 4", "b. 5", "c. 6", "d. 10"], answer: 2 },
    { question: "What is the median of the data set [3, 5, 7, 9, 11]?", choices: ["a. 5", "b. 7", "c. 9", "d. 11"], answer: 1 },
    { question: "What is the mode of the data set [1, 2, 2, 3, 4]?", choices: ["a. 1", "b. 2", "c. 3", "d. 4"], answer: 1 },
    
    // Hypothesis Testing
    { question: "What is a null hypothesis?", choices: ["a. A hypothesis that there is an effect", "b. A hypothesis that there is no effect", "c. A hypothesis that cannot be tested", "d. A hypothesis that is always true"], answer: 1 },
    { question: "What is a p-value?", choices: ["a. The probability of the null hypothesis being true", "b. The probability of obtaining the observed data given that the null hypothesis is true", "c. The probability of the alternative hypothesis being true", "d. The probability of a type II error"], answer: 1 },
    { question: "What does it mean if a p-value is less than 0.05?", choices: ["a. The null hypothesis is rejected", "b. The null hypothesis is accepted", "c. The alternative hypothesis is rejected", "d. The alternative hypothesis is accepted"], answer: 0 },
    { question: "What is a type I error?", choices: ["a. Rejecting the null hypothesis when it is true", "b. Failing to reject the null hypothesis when it is false", "c. Rejecting the alternative hypothesis when it is true", "d. Failing to reject the alternative hypothesis when it is false"], answer: 0 },
    { question: "What is a type II error?", choices: ["a. Rejecting the null hypothesis when it is true", "b. Failing to reject the null hypothesis when it is false", "c. Rejecting the alternative hypothesis when it is true", "d. Failing to reject the alternative hypothesis when it is false"], answer: 1 },
    
    // Descriptive Statistics
    { question: "What is variance?", choices: ["a. The average of the data set", "b. The spread of the data set", "c. The difference between the highest and lowest values", "d. The square root of the standard deviation"], answer: 1 },
    { question: "What is standard deviation?", choices: ["a. The average of the data set", "b. The spread of the data set", "c. The square root of the variance", "d. The difference between the highest and lowest values"], answer: 2 },
    { question: "What is a histogram?", choices: ["a. A graphical representation of data using bars", "b. A plot of data points", "c. A table of frequencies", "d. A measure of central tendency"], answer: 0 },
    { question: "What does the interquartile range measure?", choices: ["a. The range of the entire data set", "b. The range within which the middle 50% of the data falls", "c. The range of the lowest 25% of the data", "d. The range of the highest 25% of the data"], answer: 1 },
    { question: "What is a box plot?", choices: ["a. A plot that displays the five-number summary of a data set", "b. A plot of data points", "c. A table of frequencies", "d. A measure of central tendency"], answer: 0 },
    
    // Correlation and Regression
    { question: "What does correlation measure?", choices: ["a. The relationship between two variables", "b. The difference between two variables", "c. The variance of a data set", "d. The central tendency of a data set"], answer: 0 },
    { question: "What is the range of a correlation coefficient?", choices: ["a. 0 to 1", "b. -1 to 1", "c. -∞ to ∞", "d. 0 to ∞"], answer: 1 },
    { question: "What does a correlation coefficient of 1 indicate?", choices: ["a. No correlation", "b. Perfect positive correlation", "c. Perfect negative correlation", "d. Weak correlation"], answer: 1 },
    { question: "What is linear regression used for?", choices: ["a. Predicting the value of a dependent variable based on an independent variable", "b. Measuring the spread of a data set", "c. Testing a hypothesis", "d. Calculating probabilities"], answer: 0 },
    { question: "What is the formula for a simple linear regression line?", choices: ["a. y = mx + b", "b. y = x^2", "c. y = a/x", "d. y = e^x"], answer: 0 },
    
    // Distributions
    { question: "What is a normal distribution?", choices: ["a. A distribution with a single peak", "b. A distribution with two peaks", "c. A distribution with uniform probability", "d. A distribution with no variability"], answer: 0 },
    { question: "What is the mean of a standard normal distribution?", choices: ["a. 0", "b. 1", "c. -1", "d. ∞"], answer: 0 },
    { question: "What is the standard deviation of a standard normal distribution?", choices: ["a. 0", "b. 1", "c. -1", "d. ∞"], answer: 1 },
    { question: "What is the shape of a normal distribution curve?", choices: ["a. Bell-shaped", "b. U-shaped", "c. Flat", "d. Skewed"], answer: 0 },
    { question: "What percentage of data falls within one standard deviation of the mean in a normal distribution?", choices: ["a. 50%", "b. 68%", "c. 95%", "d. 99%"], answer: 1 },
    
    // Advanced Topics
    { question: "What is gradient descent?", choices: ["a. A method to find the minimum of a function", "b. A method to find the maximum of a function", "c. A type of probability distribution", "d. A statistical test"], answer: 0 },
    { question: "What is the purpose of regularization in machine learning?", choices: ["a. To increase the complexity of the model", "b. To reduce overfitting", "c. To optimize the model for large data sets", "d. To calculate the variance"], answer: 1 },
    { question: "What is a confusion matrix used for?", choices: ["a. Evaluating the performance of a classification model", "b. Calculating the variance", "c. Measuring central tendency", "d. Predicting future values"], answer: 0 },
    { question: "What is overfitting?", choices: ["a. When a model performs well on training data but poorly on new data", "b. When a model performs well on all data", "c. When a model cannot capture the data's trends", "d. When a model is too simple"], answer: 0 },
    { question: "What is cross-validation?", choices: ["a. A method to split data into training and test sets", "b. A technique to assess the performance of a model", "c. A type of probability distribution", "d. A statistical test"], answer: 1 }
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
    const indices = Array.from(Array(mathStatsQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => mathStatsQuestions[index]);
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