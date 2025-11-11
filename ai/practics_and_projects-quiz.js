<<<<<<< HEAD
const aiPracticesProjectsQuestions = [
    { question: "What does CNN stand for in AI?", choices: ["a. Convolutional Neural Network", "b. Central Neural Network", "c. Circular Neural Network", "d. Converging Neural Network"], answer: 0 },
    { question: "What is the primary use of a Convolutional Neural Network (CNN)?", choices: ["a. Image recognition and processing", "b. Text analysis", "c. Speech recognition", "d. Data clustering"], answer: 0 },
    { question: "What is NLTK?", choices: ["a. Natural Language Toolkit", "b. Neural Language Training Kit", "c. Natural Learning Training Kit", "d. Neural Learning Toolkit"], answer: 0 },
    { question: "What is the main purpose of NLTK?", choices: ["a. To process and analyze human language data", "b. To train image recognition models", "c. To develop hardware for AI", "d. To create reinforcement learning algorithms"], answer: 0 },
    { question: "What is tokenization in NLP?", choices: ["a. Splitting text into smaller units like words or sentences", "b. Combining smaller text units into larger chunks", "c. Encrypting text data", "d. Translating text from one language to another"], answer: 0 },
    { question: "What is stemming in NLP?", choices: ["a. Reducing words to their base or root form", "b. Finding synonyms for words", "c. Counting the frequency of words", "d. Translating text from one language to another"], answer: 0 },
    { question: "What is the purpose of a Recurrent Neural Network (RNN)?", choices: ["a. To process sequential data like time series or text", "b. To process images", "c. To perform clustering", "d. To enhance data privacy"], answer: 0 },
    { question: "What is a common application of RNNs?", choices: ["a. Language modeling", "b. Image segmentation", "c. Object detection", "d. Data encryption"], answer: 0 },
    { question: "What is transfer learning?", choices: ["a. Applying a pre-trained model to a new but related task", "b. Training a model from scratch", "c. Enhancing model performance with additional data", "d. Reducing model size"], answer: 0 },
    { question: "What is the purpose of a Generative Adversarial Network (GAN)?", choices: ["a. To generate new data samples that resemble the training data", "b. To classify data", "c. To cluster data", "d. To enhance image resolution"], answer: 0 },
    { question: "What is an autoencoder used for?", choices: ["a. Data compression and feature learning", "b. Image classification", "c. Text generation", "d. Reinforcement learning"], answer: 0 },
    { question: "What is the main goal of reinforcement learning?", choices: ["a. To learn optimal actions through trial and error", "b. To classify data", "c. To generate text", "d. To segment images"], answer: 0 },
    { question: "What is Q-learning?", choices: ["a. A model-free reinforcement learning algorithm", "b. A supervised learning algorithm", "c. An unsupervised learning algorithm", "d. A natural language processing technique"], answer: 0 },
    { question: "What is the main objective of supervised learning?", choices: ["a. To learn a mapping from inputs to outputs using labeled data", "b. To cluster data", "c. To reduce data dimensionality", "d. To generate new data samples"], answer: 0 },
    { question: "What is the purpose of unsupervised learning?", choices: ["a. To find hidden patterns or structures in unlabeled data", "b. To classify labeled data", "c. To enhance image quality", "d. To improve text translation"], answer: 0 },
    { question: "What is k-means clustering?", choices: ["a. A method to partition data into k distinct clusters", "b. A technique to classify data", "c. A process to reduce data noise", "d. A method to enhance image quality"], answer: 0 },
    { question: "What is a decision tree?", choices: ["a. A model used for classification and regression tasks", "b. A neural network architecture", "c. A data preprocessing technique", "d. A clustering algorithm"], answer: 0 },
    { question: "What is random forest?", choices: ["a. An ensemble learning method using multiple decision trees", "b. A type of neural network", "c. A clustering algorithm", "d. A data normalization technique"], answer: 0 },
    { question: "What is overfitting?", choices: ["a. When a model performs well on training data but poorly on new data", "b. When a model performs well on both training and test data", "c. When a model underperforms on training data", "d. When a model underperforms on test data"], answer: 0 },
    { question: "What is dropout in neural networks?", choices: ["a. A regularization technique to prevent overfitting", "b. A method to reduce data size", "c. A way to enhance image quality", "d. A technique for text tokenization"], answer: 0 },
    { question: "What is gradient descent?", choices: ["a. An optimization algorithm used to minimize the loss function", "b. A technique for image classification", "c. A method for text generation", "d. A clustering algorithm"], answer: 0 },
    { question: "What is a confusion matrix?", choices: ["a. A table used to evaluate the performance of a classification algorithm", "b. A type of neural network", "c. A data preprocessing technique", "d. A clustering algorithm"], answer: 0 },
    { question: "What is precision in classification?", choices: ["a. The ratio of true positives to the total number of predicted positives", "b. The ratio of true positives to the total number of actual positives", "c. The overall accuracy of the model", "d. The ratio of true negatives to the total number of predicted negatives"], answer: 0 },
    { question: "What is recall in classification?", choices: ["a. The ratio of true positives to the total number of actual positives", "b. The ratio of true positives to the total number of predicted positives", "c. The overall accuracy of the model", "d. The ratio of true negatives to the total number of predicted negatives"], answer: 0 },
    { question: "What is F1 score?", choices: ["a. The harmonic mean of precision and recall", "b. The ratio of true positives to the total number of predicted positives", "c. The overall accuracy of the model", "d. The ratio of true negatives to the total number of predicted negatives"], answer: 0 },
    { question: "What is cross-validation?", choices: ["a. A technique to evaluate the performance of a model by splitting the data into training and test sets multiple times", "b. A method to increase training data", "c. A technique to reduce overfitting", "d. A method for feature extraction"], answer: 0 },
    { question: "What is a learning rate in machine learning?", choices: ["a. A hyperparameter that controls how much to change the model in response to the estimated error each time the model weights are updated", "b. The size of the training dataset", "c. The number of layers in a neural network", "d. The amount of data preprocessing required"], answer: 0 },
    { question: "What is a neural network?", choices: ["a. A computational model inspired by the human brain, consisting of layers of interconnected nodes", "b. A type of clustering algorithm", "c. A method for data normalization", "d. A technique for dimensionality reduction"], answer: 0 },
    { question: "What is backpropagation?", choices: ["a. A training algorithm for neural networks that propagates errors backward through the network", "b. A technique for data normalization", "c. A clustering algorithm", "d. A method for feature extraction"], answer: 0 },
    { question: "What is the purpose of an activation function in neural networks?", choices: ["a. To introduce non-linearity into the network", "b. To normalize data", "c. To cluster data", "d. To reduce data dimensionality"], answer: 0 },
    { question: "What is the most commonly used activation function in deep learning?", choices: ["a. ReLU (Rectified Linear Unit)", "b. Sigmoid", "c. Tanh", "d. Softmax"], answer: 0 },
    { question: "What is overfitting in machine learning?", choices: ["a. When a model performs well on training data but poorly on new data", "b. When a model performs well on both training and test data", "c. When a model underperforms on training data", "d. When a model underperforms on test data"], answer: 0 },
    { question: "What is the purpose of a validation set?", choices: ["a. To tune hyperparameters and avoid overfitting", "b. To train the model", "c. To test the final model", "d. To preprocess data"], answer: 0 },
    { question: "What is a hyperparameter in machine learning?", choices: ["a. A parameter whose value is set before the learning process begins", "b. A parameter learned from the training data", "c. A type of feature extraction", "d. A method of data normalization"], answer: 0 },
    { question: "What is a loss function?", choices: ["a. A function that measures how well the model's predictions match the actual data", "b. A type of activation function", "c. A method for data preprocessing", "d. A technique for clustering"], answer: 0 },
    { question: "What is regularization in machine learning?", choices: ["a. Techniques to prevent overfitting by adding information to the model", "b. A method for data normalization", "c. A technique for feature extraction", "d. A type of clustering algorithm"], answer: 0 },
    { question: "What is LSTM in neural networks?", choices: ["a. Long Short-Term Memory, a type of recurrent neural network", "b. Linear Short-Term Memory", "c. Long Standard-Time Model", "d. Layered Short-Term Memory"], answer: 0 },
    { question: "What is the purpose of dropout in neural networks?", choices: ["a. To prevent overfitting by randomly dropping units during training", "b. To reduce the size of the training data", "c. To increase the speed of training", "d. To enhance the accuracy of the model"], answer: 0 },
    { question: "What is an epoch in the context of training a neural network?", choices: ["a. One complete pass through the entire training dataset", "b. A single update of the model's weights", "c. A type of activation function", "d. A method of data normalization"], answer: 0 },
    { question: "What is batch normalization?", choices: ["a. A technique to improve training speed and stability by normalizing inputs of each layer", "b. A method to increase the size of the training data", "c. A type of activation function", "d. A clustering algorithm"], answer: 0 },
    { question: "What is the main advantage of using pre-trained models?", choices: ["a. They save time and computational resources by leveraging previously learned features", "b. They always outperform models trained from scratch", "c. They require no further training", "d. They are more accurate for any task"], answer: 0 },
    { question: "What is a word embedding?", choices: ["a. A representation of words in a continuous vector space", "b. A method to tokenize text", "c. A technique to normalize text data", "d. A type of clustering algorithm"], answer: 0 },
    { question: "What is the purpose of sentiment analysis?", choices: ["a. To determine the emotional tone behind a body of text", "b. To translate text", "c. To cluster documents", "d. To normalize text data"], answer: 0 },
    { question: "What is the difference between a shallow and a deep neural network?", choices: ["a. A deep neural network has more layers than a shallow neural network", "b. A shallow neural network has more layers than a deep neural network", "c. There is no difference in the number of layers", "d. A shallow neural network is more accurate"], answer: 0 },
    { question: "What is a feature in machine learning?", choices: ["a. An individual measurable property or characteristic of a phenomenon being observed", "b. A type of activation function", "c. A method of data normalization", "d. A clustering algorithm"], answer: 0 },
    { question: "What is the purpose of feature scaling?", choices: ["a. To normalize the range of independent variables or features of data", "b. To increase the number of features", "c. To reduce the number of features", "d. To extract new features"], answer: 0 },
    { question: "What is the purpose of a confusion matrix?", choices: ["a. To evaluate the performance of a classification algorithm", "b. To train a neural network", "c. To normalize data", "d. To cluster data"], answer: 0 }
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
    const indices = Array.from(Array(aiPracticesProjectsQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => aiPracticesProjectsQuestions[index]);
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
const aiPracticesProjectsQuestions = [
    { question: "What does CNN stand for in AI?", choices: ["a. Convolutional Neural Network", "b. Central Neural Network", "c. Circular Neural Network", "d. Converging Neural Network"], answer: 0 },
    { question: "What is the primary use of a Convolutional Neural Network (CNN)?", choices: ["a. Image recognition and processing", "b. Text analysis", "c. Speech recognition", "d. Data clustering"], answer: 0 },
    { question: "What is NLTK?", choices: ["a. Natural Language Toolkit", "b. Neural Language Training Kit", "c. Natural Learning Training Kit", "d. Neural Learning Toolkit"], answer: 0 },
    { question: "What is the main purpose of NLTK?", choices: ["a. To process and analyze human language data", "b. To train image recognition models", "c. To develop hardware for AI", "d. To create reinforcement learning algorithms"], answer: 0 },
    { question: "What is tokenization in NLP?", choices: ["a. Splitting text into smaller units like words or sentences", "b. Combining smaller text units into larger chunks", "c. Encrypting text data", "d. Translating text from one language to another"], answer: 0 },
    { question: "What is stemming in NLP?", choices: ["a. Reducing words to their base or root form", "b. Finding synonyms for words", "c. Counting the frequency of words", "d. Translating text from one language to another"], answer: 0 },
    { question: "What is the purpose of a Recurrent Neural Network (RNN)?", choices: ["a. To process sequential data like time series or text", "b. To process images", "c. To perform clustering", "d. To enhance data privacy"], answer: 0 },
    { question: "What is a common application of RNNs?", choices: ["a. Language modeling", "b. Image segmentation", "c. Object detection", "d. Data encryption"], answer: 0 },
    { question: "What is transfer learning?", choices: ["a. Applying a pre-trained model to a new but related task", "b. Training a model from scratch", "c. Enhancing model performance with additional data", "d. Reducing model size"], answer: 0 },
    { question: "What is the purpose of a Generative Adversarial Network (GAN)?", choices: ["a. To generate new data samples that resemble the training data", "b. To classify data", "c. To cluster data", "d. To enhance image resolution"], answer: 0 },
    { question: "What is an autoencoder used for?", choices: ["a. Data compression and feature learning", "b. Image classification", "c. Text generation", "d. Reinforcement learning"], answer: 0 },
    { question: "What is the main goal of reinforcement learning?", choices: ["a. To learn optimal actions through trial and error", "b. To classify data", "c. To generate text", "d. To segment images"], answer: 0 },
    { question: "What is Q-learning?", choices: ["a. A model-free reinforcement learning algorithm", "b. A supervised learning algorithm", "c. An unsupervised learning algorithm", "d. A natural language processing technique"], answer: 0 },
    { question: "What is the main objective of supervised learning?", choices: ["a. To learn a mapping from inputs to outputs using labeled data", "b. To cluster data", "c. To reduce data dimensionality", "d. To generate new data samples"], answer: 0 },
    { question: "What is the purpose of unsupervised learning?", choices: ["a. To find hidden patterns or structures in unlabeled data", "b. To classify labeled data", "c. To enhance image quality", "d. To improve text translation"], answer: 0 },
    { question: "What is k-means clustering?", choices: ["a. A method to partition data into k distinct clusters", "b. A technique to classify data", "c. A process to reduce data noise", "d. A method to enhance image quality"], answer: 0 },
    { question: "What is a decision tree?", choices: ["a. A model used for classification and regression tasks", "b. A neural network architecture", "c. A data preprocessing technique", "d. A clustering algorithm"], answer: 0 },
    { question: "What is random forest?", choices: ["a. An ensemble learning method using multiple decision trees", "b. A type of neural network", "c. A clustering algorithm", "d. A data normalization technique"], answer: 0 },
    { question: "What is overfitting?", choices: ["a. When a model performs well on training data but poorly on new data", "b. When a model performs well on both training and test data", "c. When a model underperforms on training data", "d. When a model underperforms on test data"], answer: 0 },
    { question: "What is dropout in neural networks?", choices: ["a. A regularization technique to prevent overfitting", "b. A method to reduce data size", "c. A way to enhance image quality", "d. A technique for text tokenization"], answer: 0 },
    { question: "What is gradient descent?", choices: ["a. An optimization algorithm used to minimize the loss function", "b. A technique for image classification", "c. A method for text generation", "d. A clustering algorithm"], answer: 0 },
    { question: "What is a confusion matrix?", choices: ["a. A table used to evaluate the performance of a classification algorithm", "b. A type of neural network", "c. A data preprocessing technique", "d. A clustering algorithm"], answer: 0 },
    { question: "What is precision in classification?", choices: ["a. The ratio of true positives to the total number of predicted positives", "b. The ratio of true positives to the total number of actual positives", "c. The overall accuracy of the model", "d. The ratio of true negatives to the total number of predicted negatives"], answer: 0 },
    { question: "What is recall in classification?", choices: ["a. The ratio of true positives to the total number of actual positives", "b. The ratio of true positives to the total number of predicted positives", "c. The overall accuracy of the model", "d. The ratio of true negatives to the total number of predicted negatives"], answer: 0 },
    { question: "What is F1 score?", choices: ["a. The harmonic mean of precision and recall", "b. The ratio of true positives to the total number of predicted positives", "c. The overall accuracy of the model", "d. The ratio of true negatives to the total number of predicted negatives"], answer: 0 },
    { question: "What is cross-validation?", choices: ["a. A technique to evaluate the performance of a model by splitting the data into training and test sets multiple times", "b. A method to increase training data", "c. A technique to reduce overfitting", "d. A method for feature extraction"], answer: 0 },
    { question: "What is a learning rate in machine learning?", choices: ["a. A hyperparameter that controls how much to change the model in response to the estimated error each time the model weights are updated", "b. The size of the training dataset", "c. The number of layers in a neural network", "d. The amount of data preprocessing required"], answer: 0 },
    { question: "What is a neural network?", choices: ["a. A computational model inspired by the human brain, consisting of layers of interconnected nodes", "b. A type of clustering algorithm", "c. A method for data normalization", "d. A technique for dimensionality reduction"], answer: 0 },
    { question: "What is backpropagation?", choices: ["a. A training algorithm for neural networks that propagates errors backward through the network", "b. A technique for data normalization", "c. A clustering algorithm", "d. A method for feature extraction"], answer: 0 },
    { question: "What is the purpose of an activation function in neural networks?", choices: ["a. To introduce non-linearity into the network", "b. To normalize data", "c. To cluster data", "d. To reduce data dimensionality"], answer: 0 },
    { question: "What is the most commonly used activation function in deep learning?", choices: ["a. ReLU (Rectified Linear Unit)", "b. Sigmoid", "c. Tanh", "d. Softmax"], answer: 0 },
    { question: "What is overfitting in machine learning?", choices: ["a. When a model performs well on training data but poorly on new data", "b. When a model performs well on both training and test data", "c. When a model underperforms on training data", "d. When a model underperforms on test data"], answer: 0 },
    { question: "What is the purpose of a validation set?", choices: ["a. To tune hyperparameters and avoid overfitting", "b. To train the model", "c. To test the final model", "d. To preprocess data"], answer: 0 },
    { question: "What is a hyperparameter in machine learning?", choices: ["a. A parameter whose value is set before the learning process begins", "b. A parameter learned from the training data", "c. A type of feature extraction", "d. A method of data normalization"], answer: 0 },
    { question: "What is a loss function?", choices: ["a. A function that measures how well the model's predictions match the actual data", "b. A type of activation function", "c. A method for data preprocessing", "d. A technique for clustering"], answer: 0 },
    { question: "What is regularization in machine learning?", choices: ["a. Techniques to prevent overfitting by adding information to the model", "b. A method for data normalization", "c. A technique for feature extraction", "d. A type of clustering algorithm"], answer: 0 },
    { question: "What is LSTM in neural networks?", choices: ["a. Long Short-Term Memory, a type of recurrent neural network", "b. Linear Short-Term Memory", "c. Long Standard-Time Model", "d. Layered Short-Term Memory"], answer: 0 },
    { question: "What is the purpose of dropout in neural networks?", choices: ["a. To prevent overfitting by randomly dropping units during training", "b. To reduce the size of the training data", "c. To increase the speed of training", "d. To enhance the accuracy of the model"], answer: 0 },
    { question: "What is an epoch in the context of training a neural network?", choices: ["a. One complete pass through the entire training dataset", "b. A single update of the model's weights", "c. A type of activation function", "d. A method of data normalization"], answer: 0 },
    { question: "What is batch normalization?", choices: ["a. A technique to improve training speed and stability by normalizing inputs of each layer", "b. A method to increase the size of the training data", "c. A type of activation function", "d. A clustering algorithm"], answer: 0 },
    { question: "What is the main advantage of using pre-trained models?", choices: ["a. They save time and computational resources by leveraging previously learned features", "b. They always outperform models trained from scratch", "c. They require no further training", "d. They are more accurate for any task"], answer: 0 },
    { question: "What is a word embedding?", choices: ["a. A representation of words in a continuous vector space", "b. A method to tokenize text", "c. A technique to normalize text data", "d. A type of clustering algorithm"], answer: 0 },
    { question: "What is the purpose of sentiment analysis?", choices: ["a. To determine the emotional tone behind a body of text", "b. To translate text", "c. To cluster documents", "d. To normalize text data"], answer: 0 },
    { question: "What is the difference between a shallow and a deep neural network?", choices: ["a. A deep neural network has more layers than a shallow neural network", "b. A shallow neural network has more layers than a deep neural network", "c. There is no difference in the number of layers", "d. A shallow neural network is more accurate"], answer: 0 },
    { question: "What is a feature in machine learning?", choices: ["a. An individual measurable property or characteristic of a phenomenon being observed", "b. A type of activation function", "c. A method of data normalization", "d. A clustering algorithm"], answer: 0 },
    { question: "What is the purpose of feature scaling?", choices: ["a. To normalize the range of independent variables or features of data", "b. To increase the number of features", "c. To reduce the number of features", "d. To extract new features"], answer: 0 },
    { question: "What is the purpose of a confusion matrix?", choices: ["a. To evaluate the performance of a classification algorithm", "b. To train a neural network", "c. To normalize data", "d. To cluster data"], answer: 0 }
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
    const indices = Array.from(Array(aiPracticesProjectsQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => aiPracticesProjectsQuestions[index]);
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