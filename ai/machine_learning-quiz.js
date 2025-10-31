<<<<<<< HEAD
const mlQuestions = [
    { question: "What is machine learning?", choices: ["a. The study of algorithms that improve automatically through experience", "b. The development of hardware systems", "c. The creation of network protocols", "d. The design of operating systems"], answer: 0 },
    { question: "Which of the following is a type of supervised learning?", choices: ["a. Clustering", "b. Regression", "c. Association", "d. Dimensionality reduction"], answer: 1 },
    { question: "What is the purpose of a validation set?", choices: ["a. To train the model", "b. To test the model", "c. To fine-tune the model", "d. To validate the training data"], answer: 2 },
    { question: "What is overfitting in machine learning?", choices: ["a. When the model performs well on unseen data", "b. When the model performs poorly on training data", "c. When the model performs well on training data but poorly on unseen data", "d. When the model performs poorly on both training and unseen data"], answer: 2 },
    { question: "What is a neural network?", choices: ["a. A type of linear regression model", "b. A set of algorithms modeled loosely after the human brain", "c. A statistical hypothesis test", "d. A method for dimensionality reduction"], answer: 1 },
    { question: "Which algorithm is used for classification?", choices: ["a. Linear regression", "b. Logistic regression", "c. K-means clustering", "d. PCA"], answer: 1 },
    { question: "What does PCA stand for?", choices: ["a. Principal Component Analysis", "b. Primary Component Analysis", "c. Principal Correlation Analysis", "d. Primary Correlation Analysis"], answer: 0 },
    { question: "What is a hyperparameter?", choices: ["a. A parameter that is learned from data", "b. A parameter that is set before the learning process begins", "c. A parameter that is updated during training", "d. A parameter that is irrelevant to the model"], answer: 1 },
    { question: "What is a decision tree?", choices: ["a. A supervised learning algorithm used for classification and regression", "b. An unsupervised learning algorithm used for clustering", "c. A reinforcement learning algorithm", "d. A deep learning algorithm"], answer: 0 },
    { question: "What is ensemble learning?", choices: ["a. Using multiple learning algorithms to obtain better predictive performance", "b. Using a single learning algorithm for better performance", "c. Combining supervised and unsupervised learning", "d. Using reinforcement learning in a supervised learning task"], answer: 0 },
    { question: "What is a support vector machine (SVM)?", choices: ["a. A clustering algorithm", "b. A regression algorithm", "c. A classification algorithm", "d. A dimensionality reduction algorithm"], answer: 3 },
    { question: "What is the purpose of a confusion matrix?", choices: ["a. To summarize the performance of a classification algorithm", "b. To visualize the relationship between features", "c. To detect outliers in the data", "d. To identify missing values in the dataset"], answer: 0 },
    { question: "What is the difference between classification and regression?", choices: ["a. Classification predicts continuous values, regression predicts categories", "b. Classification predicts categories, regression predicts continuous values", "c. Classification is unsupervised, regression is supervised", "d. Classification is for numeric data, regression is for categorical data"], answer: 1 },
    { question: "What is a random forest?", choices: ["a. A single decision tree", "b. A linear regression model", "c. An ensemble of decision trees", "d. A neural network model"], answer: 2 },
    { question: "What is cross-validation?", choices: ["a. A technique for evaluating the performance of a model", "b. A method for splitting the dataset into training and test sets", "c. A way to prevent overfitting", "d. All of the above"], answer: 3 },
    { question: "What is feature scaling?", choices: ["a. Adjusting the range of features in the data", "b. Selecting important features", "c. Creating new features from existing ones", "d. Removing irrelevant features"], answer: 0 },
    { question: "What is a loss function?", choices: ["a. A function that measures the distance between the true and predicted values", "b. A function that measures the distance between features", "c. A function that reduces the dimensionality of data", "d. A function that selects important features"], answer: 0 },
    { question: "What is the bias-variance tradeoff?", choices: ["a. Balancing the error due to bias and variance to minimize total error", "b. Choosing between a high-bias model and a high-variance model", "c. Adjusting the bias term in a model", "d. Selecting the best features for a model"], answer: 0 },
    { question: "What is the purpose of regularization?", choices: ["a. To prevent overfitting by adding a penalty term to the loss function", "b. To improve the model's performance on the training data", "c. To reduce the number of features in the dataset", "d. To increase the complexity of the model"], answer: 0 },
    { question: "What is a kernel in SVM?", choices: ["a. A function used to transform the data into a higher-dimensional space", "b. A parameter that controls the learning rate", "c. A measure of the distance between points", "d. A type of regularization technique"], answer: 0 },
    { question: "What is deep learning?", choices: ["a. A subset of machine learning that uses neural networks with many layers", "b. A type of reinforcement learning", "c. A type of unsupervised learning", "d. A method for feature selection"], answer: 0 },
    { question: "What is the purpose of an activation function in a neural network?", choices: ["a. To introduce non-linearity into the model", "b. To scale the input data", "c. To initialize the weights", "d. To reduce the dimensionality of the data"], answer: 0 },
    { question: "What is gradient descent?", choices: ["a. An optimization algorithm used to minimize the loss function", "b. A method for initializing weights", "c. A technique for feature selection", "d. A clustering algorithm"], answer: 0 },
    { question: "What is backpropagation?", choices: ["a. An algorithm for training neural networks by updating weights", "b. A method for feature selection", "c. A technique for dimensionality reduction", "d. A clustering algorithm"], answer: 0 },
    { question: "What is a convolutional neural network (CNN) commonly used for?", choices: ["a. Natural language processing", "b. Image recognition and processing", "c. Time series forecasting", "d. Clustering tasks"], answer: 1 },
    { question: "What is the purpose of dropout in neural networks?", choices: ["a. To prevent overfitting by randomly setting some weights to zero during training", "b. To increase the learning rate", "c. To improve the model's performance on the training data", "d. To select important features"], answer: 0 },
    { question: "What is reinforcement learning?", choices: ["a. Learning by interacting with an environment to maximize cumulative reward", "b. Learning from labeled data", "c. Learning from unlabeled data", "d. Learning by reducing dimensionality"], answer: 0 },
    { question: "What is Q-learning?", choices: ["a. A type of unsupervised learning algorithm", "b. A type of supervised learning algorithm", "c. A type of reinforcement learning algorithm", "d. A type of deep learning algorithm"], answer: 2 },
    { question: "What is transfer learning?", choices: ["a. Applying knowledge gained from one task to a different but related task", "b. Learning from unlabeled data", "c. Learning from scratch for each new task", "d. Combining supervised and unsupervised learning"], answer: 0 },
    { question: "What is the purpose of a confusion matrix?", choices: ["a. To measure the performance of a classification model", "b. To visualize feature importance", "c. To select hyperparameters", "d. To perform dimensionality reduction"], answer: 0 },
    { question: "What is AUC-ROC?", choices: ["a. A performance measurement for classification problems", "b. A method for feature selection", "c. A clustering algorithm", "d. A regularization technique"], answer: 0 },
    { question: "What is a hidden layer in a neural network?", choices: ["a. A layer between the input layer and the output layer", "b. The first layer of the network", "c. The last layer of the network", "d. A layer that does not participate in training"], answer: 0 },
    { question: "What is the purpose of one-hot encoding?", choices: ["a. To convert categorical variables into a binary format", "b. To scale numerical features", "c. To reduce the dimensionality of data", "d. To combine features"], answer: 0 },
    { question: "What is a common use case for recurrent neural networks (RNN)?", choices: ["a. Image recognition", "b. Text and sequence data", "c. Clustering tasks", "d. Dimensionality reduction"], answer: 1 },
    { question: "What is batch normalization?", choices: ["a. A technique to improve training speed and stability by normalizing inputs of each layer", "b. A method for initializing weights", "c. A technique for feature selection", "d. A type of regularization"], answer: 0 },
    { question: "What is the purpose of a learning rate in gradient descent?", choices: ["a. To control the size of the steps taken towards the minimum of the loss function", "b. To scale the input data", "c. To initialize weights", "d. To prevent overfitting"], answer: 0 },
    { question: "What is an autoencoder?", choices: ["a. A type of neural network used for unsupervised learning", "b. A type of neural network used for supervised learning", "c. A clustering algorithm", "d. A regression algorithm"], answer: 0 },
    { question: "What is the purpose of k-fold cross-validation?", choices: ["a. To evaluate the performance of a model by dividing the data into k subsets", "b. To initialize weights", "c. To select important features", "d. To reduce the dimensionality of the data"], answer: 0 },
    { question: "What is the purpose of the softmax function?", choices: ["a. To convert the output of a model into a probability distribution", "b. To initialize weights", "c. To scale numerical features", "d. To perform clustering"], answer: 0 },
    { question: "What is the difference between bagging and boosting?", choices: ["a. Bagging reduces variance, boosting reduces bias", "b. Bagging reduces bias, boosting reduces variance", "c. Bagging and boosting are the same", "d. Bagging is used for clustering, boosting is used for classification"], answer: 0 },
    { question: "What is a common application of natural language processing (NLP)?", choices: ["a. Image recognition", "b. Sentiment analysis", "c. Time series forecasting", "d. Clustering tasks"], answer: 1 },
    { question: "What is a generative adversarial network (GAN)?", choices: ["a. A type of neural network used for generating new data", "b. A type of clustering algorithm", "c. A type of regression model", "d. A type of dimensionality reduction technique"], answer: 0 },
    { question: "What is the purpose of an embedding layer?", choices: ["a. To convert categorical variables into dense vectors", "b. To scale numerical features", "c. To initialize weights", "d. To perform clustering"], answer: 0 },
    { question: "What is the purpose of the LSTM (Long Short-Term Memory) layer?", choices: ["a. To handle long-term dependencies in sequence data", "b. To reduce the dimensionality of data", "c. To scale numerical features", "d. To initialize weights"], answer: 0 },
    { question: "What is the purpose of dropout in neural networks?", choices: ["a. To prevent overfitting by randomly setting some units to zero during training", "b. To increase the learning rate", "c. To improve the model's performance on the training data", "d. To select important features"], answer: 0 },
    { question: "What is a hyperparameter optimization?", choices: ["a. The process of finding the best hyperparameters for a model", "b. The process of selecting important features", "c. The process of reducing the dimensionality of data", "d. The process of splitting the data into training and test sets"], answer: 0 },
    { question: "What is a learning curve?", choices: ["a. A graph showing the performance of a model over time or iterations", "b. A method for initializing weights", "c. A technique for feature selection", "d. A clustering algorithm"], answer: 0 },
    { question: "What is a confusion matrix?", choices: ["a. A table used to evaluate the performance of a classification model", "b. A technique for dimensionality reduction", "c. A method for feature selection", "d. A type of clustering algorithm"], answer: 0 },
    { question: "What is an epoch in machine learning?", choices: ["a. One complete pass through the entire training dataset", "b. The number of layers in a neural network", "c. The number of features in the data", "d. The number of hyperparameters in a model"], answer: 0 },
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
    const indices = Array.from(Array(mlQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => mlQuestions[index]);
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
const mlQuestions = [
    { question: "What is machine learning?", choices: ["a. The study of algorithms that improve automatically through experience", "b. The development of hardware systems", "c. The creation of network protocols", "d. The design of operating systems"], answer: 0 },
    { question: "Which of the following is a type of supervised learning?", choices: ["a. Clustering", "b. Regression", "c. Association", "d. Dimensionality reduction"], answer: 1 },
    { question: "What is the purpose of a validation set?", choices: ["a. To train the model", "b. To test the model", "c. To fine-tune the model", "d. To validate the training data"], answer: 2 },
    { question: "What is overfitting in machine learning?", choices: ["a. When the model performs well on unseen data", "b. When the model performs poorly on training data", "c. When the model performs well on training data but poorly on unseen data", "d. When the model performs poorly on both training and unseen data"], answer: 2 },
    { question: "What is a neural network?", choices: ["a. A type of linear regression model", "b. A set of algorithms modeled loosely after the human brain", "c. A statistical hypothesis test", "d. A method for dimensionality reduction"], answer: 1 },
    { question: "Which algorithm is used for classification?", choices: ["a. Linear regression", "b. Logistic regression", "c. K-means clustering", "d. PCA"], answer: 1 },
    { question: "What does PCA stand for?", choices: ["a. Principal Component Analysis", "b. Primary Component Analysis", "c. Principal Correlation Analysis", "d. Primary Correlation Analysis"], answer: 0 },
    { question: "What is a hyperparameter?", choices: ["a. A parameter that is learned from data", "b. A parameter that is set before the learning process begins", "c. A parameter that is updated during training", "d. A parameter that is irrelevant to the model"], answer: 1 },
    { question: "What is a decision tree?", choices: ["a. A supervised learning algorithm used for classification and regression", "b. An unsupervised learning algorithm used for clustering", "c. A reinforcement learning algorithm", "d. A deep learning algorithm"], answer: 0 },
    { question: "What is ensemble learning?", choices: ["a. Using multiple learning algorithms to obtain better predictive performance", "b. Using a single learning algorithm for better performance", "c. Combining supervised and unsupervised learning", "d. Using reinforcement learning in a supervised learning task"], answer: 0 },
    { question: "What is a support vector machine (SVM)?", choices: ["a. A clustering algorithm", "b. A regression algorithm", "c. A classification algorithm", "d. A dimensionality reduction algorithm"], answer: 3 },
    { question: "What is the purpose of a confusion matrix?", choices: ["a. To summarize the performance of a classification algorithm", "b. To visualize the relationship between features", "c. To detect outliers in the data", "d. To identify missing values in the dataset"], answer: 0 },
    { question: "What is the difference between classification and regression?", choices: ["a. Classification predicts continuous values, regression predicts categories", "b. Classification predicts categories, regression predicts continuous values", "c. Classification is unsupervised, regression is supervised", "d. Classification is for numeric data, regression is for categorical data"], answer: 1 },
    { question: "What is a random forest?", choices: ["a. A single decision tree", "b. A linear regression model", "c. An ensemble of decision trees", "d. A neural network model"], answer: 2 },
    { question: "What is cross-validation?", choices: ["a. A technique for evaluating the performance of a model", "b. A method for splitting the dataset into training and test sets", "c. A way to prevent overfitting", "d. All of the above"], answer: 3 },
    { question: "What is feature scaling?", choices: ["a. Adjusting the range of features in the data", "b. Selecting important features", "c. Creating new features from existing ones", "d. Removing irrelevant features"], answer: 0 },
    { question: "What is a loss function?", choices: ["a. A function that measures the distance between the true and predicted values", "b. A function that measures the distance between features", "c. A function that reduces the dimensionality of data", "d. A function that selects important features"], answer: 0 },
    { question: "What is the bias-variance tradeoff?", choices: ["a. Balancing the error due to bias and variance to minimize total error", "b. Choosing between a high-bias model and a high-variance model", "c. Adjusting the bias term in a model", "d. Selecting the best features for a model"], answer: 0 },
    { question: "What is the purpose of regularization?", choices: ["a. To prevent overfitting by adding a penalty term to the loss function", "b. To improve the model's performance on the training data", "c. To reduce the number of features in the dataset", "d. To increase the complexity of the model"], answer: 0 },
    { question: "What is a kernel in SVM?", choices: ["a. A function used to transform the data into a higher-dimensional space", "b. A parameter that controls the learning rate", "c. A measure of the distance between points", "d. A type of regularization technique"], answer: 0 },
    { question: "What is deep learning?", choices: ["a. A subset of machine learning that uses neural networks with many layers", "b. A type of reinforcement learning", "c. A type of unsupervised learning", "d. A method for feature selection"], answer: 0 },
    { question: "What is the purpose of an activation function in a neural network?", choices: ["a. To introduce non-linearity into the model", "b. To scale the input data", "c. To initialize the weights", "d. To reduce the dimensionality of the data"], answer: 0 },
    { question: "What is gradient descent?", choices: ["a. An optimization algorithm used to minimize the loss function", "b. A method for initializing weights", "c. A technique for feature selection", "d. A clustering algorithm"], answer: 0 },
    { question: "What is backpropagation?", choices: ["a. An algorithm for training neural networks by updating weights", "b. A method for feature selection", "c. A technique for dimensionality reduction", "d. A clustering algorithm"], answer: 0 },
    { question: "What is a convolutional neural network (CNN) commonly used for?", choices: ["a. Natural language processing", "b. Image recognition and processing", "c. Time series forecasting", "d. Clustering tasks"], answer: 1 },
    { question: "What is the purpose of dropout in neural networks?", choices: ["a. To prevent overfitting by randomly setting some weights to zero during training", "b. To increase the learning rate", "c. To improve the model's performance on the training data", "d. To select important features"], answer: 0 },
    { question: "What is reinforcement learning?", choices: ["a. Learning by interacting with an environment to maximize cumulative reward", "b. Learning from labeled data", "c. Learning from unlabeled data", "d. Learning by reducing dimensionality"], answer: 0 },
    { question: "What is Q-learning?", choices: ["a. A type of unsupervised learning algorithm", "b. A type of supervised learning algorithm", "c. A type of reinforcement learning algorithm", "d. A type of deep learning algorithm"], answer: 2 },
    { question: "What is transfer learning?", choices: ["a. Applying knowledge gained from one task to a different but related task", "b. Learning from unlabeled data", "c. Learning from scratch for each new task", "d. Combining supervised and unsupervised learning"], answer: 0 },
    { question: "What is the purpose of a confusion matrix?", choices: ["a. To measure the performance of a classification model", "b. To visualize feature importance", "c. To select hyperparameters", "d. To perform dimensionality reduction"], answer: 0 },
    { question: "What is AUC-ROC?", choices: ["a. A performance measurement for classification problems", "b. A method for feature selection", "c. A clustering algorithm", "d. A regularization technique"], answer: 0 },
    { question: "What is a hidden layer in a neural network?", choices: ["a. A layer between the input layer and the output layer", "b. The first layer of the network", "c. The last layer of the network", "d. A layer that does not participate in training"], answer: 0 },
    { question: "What is the purpose of one-hot encoding?", choices: ["a. To convert categorical variables into a binary format", "b. To scale numerical features", "c. To reduce the dimensionality of data", "d. To combine features"], answer: 0 },
    { question: "What is a common use case for recurrent neural networks (RNN)?", choices: ["a. Image recognition", "b. Text and sequence data", "c. Clustering tasks", "d. Dimensionality reduction"], answer: 1 },
    { question: "What is batch normalization?", choices: ["a. A technique to improve training speed and stability by normalizing inputs of each layer", "b. A method for initializing weights", "c. A technique for feature selection", "d. A type of regularization"], answer: 0 },
    { question: "What is the purpose of a learning rate in gradient descent?", choices: ["a. To control the size of the steps taken towards the minimum of the loss function", "b. To scale the input data", "c. To initialize weights", "d. To prevent overfitting"], answer: 0 },
    { question: "What is an autoencoder?", choices: ["a. A type of neural network used for unsupervised learning", "b. A type of neural network used for supervised learning", "c. A clustering algorithm", "d. A regression algorithm"], answer: 0 },
    { question: "What is the purpose of k-fold cross-validation?", choices: ["a. To evaluate the performance of a model by dividing the data into k subsets", "b. To initialize weights", "c. To select important features", "d. To reduce the dimensionality of the data"], answer: 0 },
    { question: "What is the purpose of the softmax function?", choices: ["a. To convert the output of a model into a probability distribution", "b. To initialize weights", "c. To scale numerical features", "d. To perform clustering"], answer: 0 },
    { question: "What is the difference between bagging and boosting?", choices: ["a. Bagging reduces variance, boosting reduces bias", "b. Bagging reduces bias, boosting reduces variance", "c. Bagging and boosting are the same", "d. Bagging is used for clustering, boosting is used for classification"], answer: 0 },
    { question: "What is a common application of natural language processing (NLP)?", choices: ["a. Image recognition", "b. Sentiment analysis", "c. Time series forecasting", "d. Clustering tasks"], answer: 1 },
    { question: "What is a generative adversarial network (GAN)?", choices: ["a. A type of neural network used for generating new data", "b. A type of clustering algorithm", "c. A type of regression model", "d. A type of dimensionality reduction technique"], answer: 0 },
    { question: "What is the purpose of an embedding layer?", choices: ["a. To convert categorical variables into dense vectors", "b. To scale numerical features", "c. To initialize weights", "d. To perform clustering"], answer: 0 },
    { question: "What is the purpose of the LSTM (Long Short-Term Memory) layer?", choices: ["a. To handle long-term dependencies in sequence data", "b. To reduce the dimensionality of data", "c. To scale numerical features", "d. To initialize weights"], answer: 0 },
    { question: "What is the purpose of dropout in neural networks?", choices: ["a. To prevent overfitting by randomly setting some units to zero during training", "b. To increase the learning rate", "c. To improve the model's performance on the training data", "d. To select important features"], answer: 0 },
    { question: "What is a hyperparameter optimization?", choices: ["a. The process of finding the best hyperparameters for a model", "b. The process of selecting important features", "c. The process of reducing the dimensionality of data", "d. The process of splitting the data into training and test sets"], answer: 0 },
    { question: "What is a learning curve?", choices: ["a. A graph showing the performance of a model over time or iterations", "b. A method for initializing weights", "c. A technique for feature selection", "d. A clustering algorithm"], answer: 0 },
    { question: "What is a confusion matrix?", choices: ["a. A table used to evaluate the performance of a classification model", "b. A technique for dimensionality reduction", "c. A method for feature selection", "d. A type of clustering algorithm"], answer: 0 },
    { question: "What is an epoch in machine learning?", choices: ["a. One complete pass through the entire training dataset", "b. The number of layers in a neural network", "c. The number of features in the data", "d. The number of hyperparameters in a model"], answer: 0 },
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
    const indices = Array.from(Array(mlQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => mlQuestions[index]);
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