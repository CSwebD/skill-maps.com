<<<<<<< HEAD
const dlQuestions = [
    { question: "What is deep learning?", choices: ["a. A type of machine learning with shallow neural networks", "b. A subset of machine learning with neural networks having multiple layers", "c. A type of supervised learning algorithm", "d. A technique for feature selection"], answer: 1 },
    { question: "What is a neural network?", choices: ["a. A statistical method for regression analysis", "b. A computational model inspired by the human brain", "c. A type of clustering algorithm", "d. A method for data normalization"], answer: 1 },
    { question: "What is an activation function?", choices: ["a. A function that initializes the weights of a neural network", "b. A function that determines the output of a neural network node", "c. A function that normalizes the input data", "d. A function that measures the error of a model"], answer: 1 },
    { question: "What is the purpose of backpropagation?", choices: ["a. To initialize the weights of a neural network", "b. To optimize the learning rate", "c. To update the weights in a neural network during training", "d. To select important features"], answer: 2 },
    { question: "What is a convolutional neural network (CNN) used for?", choices: ["a. Time series forecasting", "b. Image recognition and processing", "c. Natural language processing", "d. Clustering tasks"], answer: 1 },
    { question: "What is a recurrent neural network (RNN) commonly used for?", choices: ["a. Image recognition", "b. Text and sequence data", "c. Clustering tasks", "d. Dimensionality reduction"], answer: 1 },
    { question: "What is the purpose of a dropout layer?", choices: ["a. To prevent overfitting by randomly setting some units to zero during training", "b. To initialize the weights of the network", "c. To scale the input data", "d. To reduce the dimensionality of the data"], answer: 0 },
    { question: "What is a generative adversarial network (GAN)?", choices: ["a. A type of neural network used for generating new data", "b. A type of clustering algorithm", "c. A type of regression model", "d. A technique for dimensionality reduction"], answer: 0 },
    { question: "What is transfer learning?", choices: ["a. Applying knowledge gained from one task to a different but related task", "b. Learning from scratch for each new task", "c. Learning without labeled data", "d. Combining supervised and unsupervised learning"], answer: 0 },
    { question: "What is the purpose of an embedding layer?", choices: ["a. To convert categorical variables into dense vectors", "b. To scale numerical features", "c. To initialize weights", "d. To perform clustering"], answer: 0 },
    { question: "What is the purpose of the softmax function?", choices: ["a. To convert the output of a model into a probability distribution", "b. To scale numerical features", "c. To initialize weights", "d. To perform clustering"], answer: 0 },
    { question: "What is the purpose of the LSTM (Long Short-Term Memory) layer?", choices: ["a. To handle long-term dependencies in sequence data", "b. To reduce the dimensionality of data", "c. To scale numerical features", "d. To initialize weights"], answer: 0 },
    { question: "What is the purpose of batch normalization?", choices: ["a. To improve training speed and stability by normalizing inputs of each layer", "b. To initialize weights", "c. To select important features", "d. To prevent overfitting"], answer: 0 },
    { question: "What is the purpose of a loss function in a neural network?", choices: ["a. To measure the error between the predicted and actual values", "b. To initialize the weights", "c. To scale the input data", "d. To select important features"], answer: 0 },
    { question: "What is an epoch in deep learning?", choices: ["a. One complete pass through the entire training dataset", "b. The number of layers in a neural network", "c. The number of features in the data", "d. The number of hyperparameters in a model"], answer: 0 },
    { question: "What is gradient descent?", choices: ["a. An optimization algorithm used to minimize the loss function", "b. A method for initializing weights", "c. A technique for feature selection", "d. A clustering algorithm"], answer: 0 },
    { question: "What is a vanishing gradient problem?", choices: ["a. When gradients become too small, making the learning process slow", "b. When gradients become too large, causing the weights to explode", "c. When gradients are not updated", "d. When gradients are not used"], answer: 0 },
    { question: "What is a rectified linear unit (ReLU)?", choices: ["a. An activation function used in neural networks", "b. A type of loss function", "c. A type of optimization algorithm", "d. A method for weight initialization"], answer: 0 },
    { question: "What is a fully connected layer in a neural network?", choices: ["a. A layer where each node is connected to every other node in the previous layer", "b. A layer with no connections", "c. A layer that performs convolution", "d. A layer that reduces the dimensionality of data"], answer: 0 },
    { question: "What is the purpose of a pooling layer in CNNs?", choices: ["a. To reduce the spatial dimensions of the input volume", "b. To increase the spatial dimensions of the input volume", "c. To initialize weights", "d. To perform feature selection"], answer: 0 },
    { question: "What is a stride in the context of CNNs?", choices: ["a. The number of pixels by which the filter moves across the input image", "b. The size of the filter", "c. The number of filters used", "d. The depth of the input volume"], answer: 0 },
    { question: "What is the purpose of weight initialization?", choices: ["a. To set the initial values of weights before training", "b. To scale the input data", "c. To measure the error of a model", "d. To select important features"], answer: 0 },
    { question: "What is the vanishing gradient problem?", choices: ["a. When gradients become very small during backpropagation, making training difficult", "b. When gradients become very large, causing the weights to explode", "c. When gradients do not update", "d. When gradients are not used"], answer: 0 },
    { question: "What is a Boltzmann machine?", choices: ["a. A type of stochastic recurrent neural network", "b. A clustering algorithm", "c. A dimensionality reduction technique", "d. A type of loss function"], answer: 0 },
    { question: "What is a learning rate in the context of gradient descent?", choices: ["a. The size of the steps taken towards the minimum of the loss function", "b. The number of epochs", "c. The number of layers in a neural network", "d. The size of the input data"], answer: 0 },
    { question: "What is a sigmoid function?", choices: ["a. An activation function that maps any real-valued number to a value between 0 and 1", "b. A loss function", "c. A type of layer in a neural network", "d. A type of optimization algorithm"], answer: 0 },
    { question: "What is an autoencoder?", choices: ["a. A type of neural network used for unsupervised learning", "b. A type of neural network used for supervised learning", "c. A clustering algorithm", "d. A regression algorithm"], answer: 0 },
    { question: "What is Xavier initialization?", choices: ["a. A method for initializing the weights of a neural network to ensure the variance of the outputs is the same as the inputs", "b. A type of loss function", "c. A type of activation function", "d. A type of optimization algorithm"], answer: 0 },
    { question: "What is the purpose of an attention mechanism in neural networks?", choices: ["a. To focus on important parts of the input sequence", "b. To initialize weights", "c. To reduce the dimensionality of data", "d. To perform clustering"], answer: 0 },
    { question: "What is the purpose of a GRU (Gated Recurrent Unit)?", choices: ["a. To handle long-term dependencies in sequence data", "b. To perform convolution", "c. To initialize weights", "d. To scale numerical features"], answer: 0 },
    { question: "What is the purpose of a learning rate scheduler?", choices: ["a. To adjust the learning rate during training to improve convergence", "b. To initialize weights", "c. To select important features", "d. To reduce the dimensionality of data"], answer: 0 },
    { question: "What is the Adam optimizer?", choices: ["a. An optimization algorithm that combines the advantages of two other extensions of stochastic gradient descent", "b. A type of loss function", "c. A type of activation function", "d. A type of layer in a neural network"], answer: 0 },
    { question: "What is a max pooling layer?", choices: ["a. A pooling layer that takes the maximum value from the input region", "b. A pooling layer that takes the average value from the input region", "c. A layer that performs convolution", "d. A layer that initializes weights"], answer: 0 },
    { question: "What is a softmax layer?", choices: ["a. A layer that converts the output to a probability distribution", "b. A layer that performs convolution", "c. A layer that initializes weights", "d. A layer that reduces the dimensionality of data"], answer: 0 },
    { question: "What is the purpose of data augmentation in deep learning?", choices: ["a. To artificially increase the size of the training dataset by creating modified versions of existing data", "b. To reduce the dimensionality of data", "c. To initialize weights", "d. To scale numerical features"], answer: 0 },
    { question: "What is the purpose of a cost function?", choices: ["a. To measure the error between the predicted and actual values", "b. To initialize weights", "c. To scale the input data", "d. To select important features"], answer: 0 },
    { question: "What is the purpose of early stopping?", choices: ["a. To stop training when the model's performance on a validation set stops improving", "b. To initialize weights", "c. To select important features", "d. To reduce the dimensionality of data"], answer: 0 },
    { question: "What is a deep belief network?", choices: ["a. A type of generative neural network with multiple layers of hidden units", "b. A type of clustering algorithm", "c. A type of loss function", "d. A type of optimization algorithm"], answer: 0 },
    { question: "What is the purpose of weight regularization?", choices: ["a. To prevent overfitting by adding a penalty to the loss function based on the magnitude of the weights", "b. To initialize weights", "c. To scale numerical features", "d. To perform clustering"], answer: 0 },
    { question: "What is the purpose of a dense layer?", choices: ["a. A layer where each node is connected to every other node in the previous layer", "b. A layer with no connections", "c. A layer that performs convolution", "d. A layer that reduces the dimensionality of data"], answer: 0 },
    { question: "What is the purpose of zero-padding in CNNs?", choices: ["a. To keep the spatial dimensions of the input the same after convolution", "b. To reduce the spatial dimensions of the input", "c. To initialize weights", "d. To scale numerical features"], answer: 0 },
    { question: "What is a residual neural network (ResNet)?", choices: ["a. A neural network that includes shortcut connections to jump over some layers", "b. A neural network without any hidden layers", "c. A neural network that performs clustering", "d. A neural network that reduces the dimensionality of data"], answer: 0 },
    { question: "What is the purpose of a recurrent layer?", choices: ["a. To process sequential data by maintaining a hidden state", "b. To perform convolution", "c. To reduce the dimensionality of data", "d. To initialize weights"], answer: 0 },
    { question: "What is the purpose of the ReLU activation function?", choices: ["a. To introduce non-linearity by outputting the input directly if it is positive; otherwise, it outputs zero", "b. To initialize weights", "c. To scale the input data", "d. To reduce the dimensionality of data"], answer: 0 },
    { question: "What is the purpose of the softmax activation function?", choices: ["a. To convert the output of a model into a probability distribution", "b. To initialize weights", "c. To scale the input data", "d. To perform clustering"], answer: 0 },
    { question: "What is a vanishing gradient problem?", choices: ["a. When gradients become very small during backpropagation, making training difficult", "b. When gradients become very large, causing the weights to explode", "c. When gradients do not update", "d. When gradients are not used"], answer: 0 },
    { question: "What is Xavier initialization?", choices: ["a. A method for initializing the weights of a neural network to ensure the variance of the outputs is the same as the inputs", "b. A type of loss function", "c. A type of activation function", "d. A type of optimization algorithm"], answer: 0 },
    { question: "What is the purpose of batch normalization?", choices: ["a. To improve training speed and stability by normalizing inputs of each layer", "b. To initialize weights", "c. To select important features", "d. To prevent overfitting"], answer: 0 },
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
    const indices = Array.from(Array(dlQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => dlQuestions[index]);
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
const dlQuestions = [
    { question: "What is deep learning?", choices: ["a. A type of machine learning with shallow neural networks", "b. A subset of machine learning with neural networks having multiple layers", "c. A type of supervised learning algorithm", "d. A technique for feature selection"], answer: 1 },
    { question: "What is a neural network?", choices: ["a. A statistical method for regression analysis", "b. A computational model inspired by the human brain", "c. A type of clustering algorithm", "d. A method for data normalization"], answer: 1 },
    { question: "What is an activation function?", choices: ["a. A function that initializes the weights of a neural network", "b. A function that determines the output of a neural network node", "c. A function that normalizes the input data", "d. A function that measures the error of a model"], answer: 1 },
    { question: "What is the purpose of backpropagation?", choices: ["a. To initialize the weights of a neural network", "b. To optimize the learning rate", "c. To update the weights in a neural network during training", "d. To select important features"], answer: 2 },
    { question: "What is a convolutional neural network (CNN) used for?", choices: ["a. Time series forecasting", "b. Image recognition and processing", "c. Natural language processing", "d. Clustering tasks"], answer: 1 },
    { question: "What is a recurrent neural network (RNN) commonly used for?", choices: ["a. Image recognition", "b. Text and sequence data", "c. Clustering tasks", "d. Dimensionality reduction"], answer: 1 },
    { question: "What is the purpose of a dropout layer?", choices: ["a. To prevent overfitting by randomly setting some units to zero during training", "b. To initialize the weights of the network", "c. To scale the input data", "d. To reduce the dimensionality of the data"], answer: 0 },
    { question: "What is a generative adversarial network (GAN)?", choices: ["a. A type of neural network used for generating new data", "b. A type of clustering algorithm", "c. A type of regression model", "d. A technique for dimensionality reduction"], answer: 0 },
    { question: "What is transfer learning?", choices: ["a. Applying knowledge gained from one task to a different but related task", "b. Learning from scratch for each new task", "c. Learning without labeled data", "d. Combining supervised and unsupervised learning"], answer: 0 },
    { question: "What is the purpose of an embedding layer?", choices: ["a. To convert categorical variables into dense vectors", "b. To scale numerical features", "c. To initialize weights", "d. To perform clustering"], answer: 0 },
    { question: "What is the purpose of the softmax function?", choices: ["a. To convert the output of a model into a probability distribution", "b. To scale numerical features", "c. To initialize weights", "d. To perform clustering"], answer: 0 },
    { question: "What is the purpose of the LSTM (Long Short-Term Memory) layer?", choices: ["a. To handle long-term dependencies in sequence data", "b. To reduce the dimensionality of data", "c. To scale numerical features", "d. To initialize weights"], answer: 0 },
    { question: "What is the purpose of batch normalization?", choices: ["a. To improve training speed and stability by normalizing inputs of each layer", "b. To initialize weights", "c. To select important features", "d. To prevent overfitting"], answer: 0 },
    { question: "What is the purpose of a loss function in a neural network?", choices: ["a. To measure the error between the predicted and actual values", "b. To initialize the weights", "c. To scale the input data", "d. To select important features"], answer: 0 },
    { question: "What is an epoch in deep learning?", choices: ["a. One complete pass through the entire training dataset", "b. The number of layers in a neural network", "c. The number of features in the data", "d. The number of hyperparameters in a model"], answer: 0 },
    { question: "What is gradient descent?", choices: ["a. An optimization algorithm used to minimize the loss function", "b. A method for initializing weights", "c. A technique for feature selection", "d. A clustering algorithm"], answer: 0 },
    { question: "What is a vanishing gradient problem?", choices: ["a. When gradients become too small, making the learning process slow", "b. When gradients become too large, causing the weights to explode", "c. When gradients are not updated", "d. When gradients are not used"], answer: 0 },
    { question: "What is a rectified linear unit (ReLU)?", choices: ["a. An activation function used in neural networks", "b. A type of loss function", "c. A type of optimization algorithm", "d. A method for weight initialization"], answer: 0 },
    { question: "What is a fully connected layer in a neural network?", choices: ["a. A layer where each node is connected to every other node in the previous layer", "b. A layer with no connections", "c. A layer that performs convolution", "d. A layer that reduces the dimensionality of data"], answer: 0 },
    { question: "What is the purpose of a pooling layer in CNNs?", choices: ["a. To reduce the spatial dimensions of the input volume", "b. To increase the spatial dimensions of the input volume", "c. To initialize weights", "d. To perform feature selection"], answer: 0 },
    { question: "What is a stride in the context of CNNs?", choices: ["a. The number of pixels by which the filter moves across the input image", "b. The size of the filter", "c. The number of filters used", "d. The depth of the input volume"], answer: 0 },
    { question: "What is the purpose of weight initialization?", choices: ["a. To set the initial values of weights before training", "b. To scale the input data", "c. To measure the error of a model", "d. To select important features"], answer: 0 },
    { question: "What is the vanishing gradient problem?", choices: ["a. When gradients become very small during backpropagation, making training difficult", "b. When gradients become very large, causing the weights to explode", "c. When gradients do not update", "d. When gradients are not used"], answer: 0 },
    { question: "What is a Boltzmann machine?", choices: ["a. A type of stochastic recurrent neural network", "b. A clustering algorithm", "c. A dimensionality reduction technique", "d. A type of loss function"], answer: 0 },
    { question: "What is a learning rate in the context of gradient descent?", choices: ["a. The size of the steps taken towards the minimum of the loss function", "b. The number of epochs", "c. The number of layers in a neural network", "d. The size of the input data"], answer: 0 },
    { question: "What is a sigmoid function?", choices: ["a. An activation function that maps any real-valued number to a value between 0 and 1", "b. A loss function", "c. A type of layer in a neural network", "d. A type of optimization algorithm"], answer: 0 },
    { question: "What is an autoencoder?", choices: ["a. A type of neural network used for unsupervised learning", "b. A type of neural network used for supervised learning", "c. A clustering algorithm", "d. A regression algorithm"], answer: 0 },
    { question: "What is Xavier initialization?", choices: ["a. A method for initializing the weights of a neural network to ensure the variance of the outputs is the same as the inputs", "b. A type of loss function", "c. A type of activation function", "d. A type of optimization algorithm"], answer: 0 },
    { question: "What is the purpose of an attention mechanism in neural networks?", choices: ["a. To focus on important parts of the input sequence", "b. To initialize weights", "c. To reduce the dimensionality of data", "d. To perform clustering"], answer: 0 },
    { question: "What is the purpose of a GRU (Gated Recurrent Unit)?", choices: ["a. To handle long-term dependencies in sequence data", "b. To perform convolution", "c. To initialize weights", "d. To scale numerical features"], answer: 0 },
    { question: "What is the purpose of a learning rate scheduler?", choices: ["a. To adjust the learning rate during training to improve convergence", "b. To initialize weights", "c. To select important features", "d. To reduce the dimensionality of data"], answer: 0 },
    { question: "What is the Adam optimizer?", choices: ["a. An optimization algorithm that combines the advantages of two other extensions of stochastic gradient descent", "b. A type of loss function", "c. A type of activation function", "d. A type of layer in a neural network"], answer: 0 },
    { question: "What is a max pooling layer?", choices: ["a. A pooling layer that takes the maximum value from the input region", "b. A pooling layer that takes the average value from the input region", "c. A layer that performs convolution", "d. A layer that initializes weights"], answer: 0 },
    { question: "What is a softmax layer?", choices: ["a. A layer that converts the output to a probability distribution", "b. A layer that performs convolution", "c. A layer that initializes weights", "d. A layer that reduces the dimensionality of data"], answer: 0 },
    { question: "What is the purpose of data augmentation in deep learning?", choices: ["a. To artificially increase the size of the training dataset by creating modified versions of existing data", "b. To reduce the dimensionality of data", "c. To initialize weights", "d. To scale numerical features"], answer: 0 },
    { question: "What is the purpose of a cost function?", choices: ["a. To measure the error between the predicted and actual values", "b. To initialize weights", "c. To scale the input data", "d. To select important features"], answer: 0 },
    { question: "What is the purpose of early stopping?", choices: ["a. To stop training when the model's performance on a validation set stops improving", "b. To initialize weights", "c. To select important features", "d. To reduce the dimensionality of data"], answer: 0 },
    { question: "What is a deep belief network?", choices: ["a. A type of generative neural network with multiple layers of hidden units", "b. A type of clustering algorithm", "c. A type of loss function", "d. A type of optimization algorithm"], answer: 0 },
    { question: "What is the purpose of weight regularization?", choices: ["a. To prevent overfitting by adding a penalty to the loss function based on the magnitude of the weights", "b. To initialize weights", "c. To scale numerical features", "d. To perform clustering"], answer: 0 },
    { question: "What is the purpose of a dense layer?", choices: ["a. A layer where each node is connected to every other node in the previous layer", "b. A layer with no connections", "c. A layer that performs convolution", "d. A layer that reduces the dimensionality of data"], answer: 0 },
    { question: "What is the purpose of zero-padding in CNNs?", choices: ["a. To keep the spatial dimensions of the input the same after convolution", "b. To reduce the spatial dimensions of the input", "c. To initialize weights", "d. To scale numerical features"], answer: 0 },
    { question: "What is a residual neural network (ResNet)?", choices: ["a. A neural network that includes shortcut connections to jump over some layers", "b. A neural network without any hidden layers", "c. A neural network that performs clustering", "d. A neural network that reduces the dimensionality of data"], answer: 0 },
    { question: "What is the purpose of a recurrent layer?", choices: ["a. To process sequential data by maintaining a hidden state", "b. To perform convolution", "c. To reduce the dimensionality of data", "d. To initialize weights"], answer: 0 },
    { question: "What is the purpose of the ReLU activation function?", choices: ["a. To introduce non-linearity by outputting the input directly if it is positive; otherwise, it outputs zero", "b. To initialize weights", "c. To scale the input data", "d. To reduce the dimensionality of data"], answer: 0 },
    { question: "What is the purpose of the softmax activation function?", choices: ["a. To convert the output of a model into a probability distribution", "b. To initialize weights", "c. To scale the input data", "d. To perform clustering"], answer: 0 },
    { question: "What is a vanishing gradient problem?", choices: ["a. When gradients become very small during backpropagation, making training difficult", "b. When gradients become very large, causing the weights to explode", "c. When gradients do not update", "d. When gradients are not used"], answer: 0 },
    { question: "What is Xavier initialization?", choices: ["a. A method for initializing the weights of a neural network to ensure the variance of the outputs is the same as the inputs", "b. A type of loss function", "c. A type of activation function", "d. A type of optimization algorithm"], answer: 0 },
    { question: "What is the purpose of batch normalization?", choices: ["a. To improve training speed and stability by normalizing inputs of each layer", "b. To initialize weights", "c. To select important features", "d. To prevent overfitting"], answer: 0 },
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
    const indices = Array.from(Array(dlQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => dlQuestions[index]);
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