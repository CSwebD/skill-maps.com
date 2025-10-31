<<<<<<< HEAD
const nlpQuestions = [
    { question: "What is Natural Language Processing (NLP)?", choices: ["a. A field of computer science focused on understanding human language", "b. A method for sorting data", "c. A type of unsupervised learning", "d. A statistical test for significance"], answer: 0 },
    { question: "What is tokenization in NLP?", choices: ["a. Breaking text into words, sentences, or subwords", "b. Encoding categorical variables", "c. Reducing the number of dimensions in data", "d. Identifying the part of speech of a word"], answer: 0 },
    { question: "What is stemming?", choices: ["a. Reducing words to their base or root form", "b. Converting text to lowercase", "c. Removing stopwords", "d. Identifying named entities"], answer: 0 },
    { question: "What is lemmatization?", choices: ["a. Reducing words to their base or dictionary form", "b. Converting text to lowercase", "c. Removing punctuation from text", "d. Identifying the sentiment of text"], answer: 0 },
    { question: "What are stopwords?", choices: ["a. Common words that are usually removed from text", "b. Rare words that are emphasized in text analysis", "c. Words used to stop a process in NLP", "d. Words used to denote sentiment"], answer: 0 },
    { question: "What is part-of-speech tagging?", choices: ["a. Labeling words in a sentence with their parts of speech", "b. Translating text from one language to another", "c. Finding synonyms of words", "d. Clustering words into topics"], answer: 0 },
    { question: "What is named entity recognition (NER)?", choices: ["a. Identifying and classifying key information in text", "b. Translating text from one language to another", "c. Finding the root form of words", "d. Removing common words from text"], answer: 0 },
    { question: "What is sentiment analysis?", choices: ["a. Determining the sentiment expressed in text", "b. Translating text from one language to another", "c. Removing punctuation from text", "d. Clustering text into topics"], answer: 0 },
    { question: "What is word embedding?", choices: ["a. Representing words in continuous vector space", "b. Removing common words from text", "c. Finding the root form of words", "d. Translating text from one language to another"], answer: 0 },
    { question: "What is the purpose of TF-IDF?", choices: ["a. To weigh the importance of words in a document relative to a corpus", "b. To encode categorical variables", "c. To reduce the dimensionality of data", "d. To cluster documents into topics"], answer: 0 },
    { question: "What does TF in TF-IDF stand for?", choices: ["a. Term Frequency", "b. Text Frequency", "c. Total Frequency", "d. Temporal Frequency"], answer: 0 },
    { question: "What does IDF in TF-IDF stand for?", choices: ["a. Inverse Document Frequency", "b. Internal Data Frequency", "c. Important Data Factor", "d. Indexed Data Frequency"], answer: 0 },
    { question: "What is the bag-of-words model?", choices: ["a. A representation of text that describes the occurrence of words within a document", "b. A method for word stemming", "c. A technique for text translation", "d. A method for text clustering"], answer: 0 },
    { question: "What is the n-gram model?", choices: ["a. A contiguous sequence of n items from a given text", "b. A technique for named entity recognition", "c. A method for stemming words", "d. A type of text translation"], answer: 0 },
    { question: "What is word2vec?", choices: ["a. A group of related models used to produce word embeddings", "b. A technique for stemming words", "c. A method for part-of-speech tagging", "d. A type of text clustering"], answer: 0 },
    { question: "What is a common use of the LSTM model in NLP?", choices: ["a. Handling long-term dependencies in sequence data", "b. Removing common words from text", "c. Translating text from one language to another", "d. Clustering text into topics"], answer: 0 },
    { question: "What is a transformer model?", choices: ["a. A model architecture primarily used in NLP for tasks like translation and text generation", "b. A method for text tokenization", "c. A technique for stemming words", "d. A type of text clustering"], answer: 0 },
    { question: "What is BERT?", choices: ["a. A pre-trained deep learning model for natural language understanding", "b. A technique for text tokenization", "c. A method for text translation", "d. A type of text clustering"], answer: 0 },
    { question: "What is the GPT model?", choices: ["a. A generative pre-trained transformer model for text generation", "b. A method for text tokenization", "c. A technique for text translation", "d. A type of text clustering"], answer: 0 },
    { question: "What is fine-tuning in NLP?", choices: ["a. Adapting a pre-trained model to a specific task", "b. Removing punctuation from text", "c. Finding the root form of words", "d. Translating text from one language to another"], answer: 0 },
    { question: "What is sequence-to-sequence modeling?", choices: ["a. A method for converting sequences from one domain to sequences in another domain", "b. A technique for text tokenization", "c. A method for text translation", "d. A type of text clustering"], answer: 0 },
    { question: "What is attention mechanism in NLP?", choices: ["a. A technique to focus on important parts of the input sequence", "b. A method for stemming words", "c. A technique for text translation", "d. A type of text clustering"], answer: 0 },
    { question: "What is a language model?", choices: ["a. A model that predicts the next word in a sequence", "b. A technique for text tokenization", "c. A method for stemming words", "d. A type of text clustering"], answer: 0 },
    { question: "What is the purpose of the BLEU score?", choices: ["a. To evaluate the quality of machine-translated text", "b. To measure the sentiment of text", "c. To tokenize text", "d. To remove stopwords"], answer: 0 },
    { question: "What is word sense disambiguation?", choices: ["a. Determining which sense of a word is used in a context", "b. Translating text from one language to another", "c. Finding the root form of words", "d. Removing common words from text"], answer: 0 },
    { question: "What is co-reference resolution?", choices: ["a. Determining when different words refer to the same entity", "b. Translating text from one language to another", "c. Finding synonyms of words", "d. Clustering words into topics"], answer: 0 },
    { question: "What is a word cloud?", choices: ["a. A visual representation of text data where the size of each word indicates its frequency", "b. A method for stemming words", "c. A technique for text translation", "d. A type of text clustering"], answer: 0 },
    { question: "What is a unigram?", choices: ["a. A single item from a sequence of text", "b. A technique for named entity recognition", "c. A method for stemming words", "d. A type of text translation"], answer: 0 },
    { question: "What is topic modeling?", choices: ["a. A method for discovering abstract topics within a collection of documents", "b. A technique for text tokenization", "c. A method for stemming words", "d. A type of text translation"], answer: 0 },
    { question: "What is Latent Dirichlet Allocation (LDA)?", choices: ["a. A generative statistical model for topic modeling", "b. A technique for named entity recognition", "c. A method for stemming words", "d. A type of text translation"], answer: 0 },
    { question: "What is the purpose of the perplexity score in NLP?", choices: ["a. To measure how well a probability model predicts a sample", "b. To measure the sentiment of text", "c. To tokenize text", "d. To remove stopwords"], answer: 0 },
    { question: "What is the goal of machine translation?", choices: ["a. To automatically translate text from one language to another", "b. To tokenize text", "c. To stem words", "d. To identify named entities"], answer: 0 },
    { question: "What is the Universal Dependencies project?", choices: ["a. A framework for consistent annotation of grammar across different languages", "b. A method for text tokenization", "c. A technique for stemming words", "d. A type of text clustering"], answer: 0 },
    { question: "What is a corpus in NLP?", choices: ["a. A large collection of texts used for training and evaluating models", "b. A method for text tokenization", "c. A technique for stemming words", "d. A type of text clustering"], answer: 0 },
    { question: "What is the Penn Treebank?", choices: ["a. A corpus of annotated text for linguistic research", "b. A method for text tokenization", "c. A technique for stemming words", "d. A type of text clustering"], answer: 0 },
    { question: "What is dependency parsing?", choices: ["a. Analyzing the grammatical structure of a sentence", "b. Translating text from one language to another", "c. Finding synonyms of words", "d. Clustering words into topics"], answer: 0 },
    { question: "What is the purpose of word alignment in machine translation?", choices: ["a. To map words in the source language to their corresponding words in the target language", "b. To tokenize text", "c. To stem words", "d. To identify named entities"], answer: 0 },
    { question: "What is the goal of text summarization?", choices: ["a. To create a concise and coherent version of a longer document", "b. To tokenize text", "c. To stem words", "d. To identify named entities"], answer: 0 },
    { question: "What is a language model pre-training?", choices: ["a. Training a model on a large corpus of text before fine-tuning on a specific task", "b. Removing punctuation from text", "c. Finding the root form of words", "d. Translating text from one language to another"], answer: 0 },
    { question: "What is transfer learning in NLP?", choices: ["a. Applying knowledge gained from one task to improve performance on a related task", "b. Translating text from one language to another", "c. Removing common words from text", "d. Identifying named entities"], answer: 0 },
    { question: "What is the purpose of a vector space model in NLP?", choices: ["a. To represent text as vectors of identifiers", "b. To reduce the dimensionality of text data", "c. To remove stopwords from text", "d. To cluster documents into topics"], answer: 0 },
    { question: "What is cosine similarity?", choices: ["a. A measure of similarity between two non-zero vectors", "b. A technique for named entity recognition", "c. A method for stemming words", "d. A type of text translation"], answer: 0 },
    { question: "What is a convolutional neural network (CNN) used for in NLP?", choices: ["a. Extracting local features from text", "b. Removing common words from text", "c. Translating text from one language to another", "d. Clustering text into topics"], answer: 0 },
    { question: "What is a recurrent neural network (RNN) used for in NLP?", choices: ["a. Modeling sequence data such as text", "b. Removing punctuation from text", "c. Finding the root form of words", "d. Translating text from one language to another"], answer: 0 },
    { question: "What is a bidirectional LSTM?", choices: ["a. An LSTM that processes data in both forward and backward directions", "b. A technique for named entity recognition", "c. A method for stemming words", "d. A type of text translation"], answer: 0 },
    { question: "What is a language generation task in NLP?", choices: ["a. Creating coherent and contextually relevant text", "b. Tokenizing text", "c. Stemming words", "d. Identifying named entities"], answer: 0 },
    { question: "What is the purpose of data augmentation in NLP?", choices: ["a. To artificially expand the training dataset by generating new samples", "b. To reduce the dimensionality of text data", "c. To remove stopwords from text", "d. To cluster documents into topics"], answer: 0 }
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
    const indices = Array.from(Array(nlpQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => nlpQuestions[index]);
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
const nlpQuestions = [
    { question: "What is Natural Language Processing (NLP)?", choices: ["a. A field of computer science focused on understanding human language", "b. A method for sorting data", "c. A type of unsupervised learning", "d. A statistical test for significance"], answer: 0 },
    { question: "What is tokenization in NLP?", choices: ["a. Breaking text into words, sentences, or subwords", "b. Encoding categorical variables", "c. Reducing the number of dimensions in data", "d. Identifying the part of speech of a word"], answer: 0 },
    { question: "What is stemming?", choices: ["a. Reducing words to their base or root form", "b. Converting text to lowercase", "c. Removing stopwords", "d. Identifying named entities"], answer: 0 },
    { question: "What is lemmatization?", choices: ["a. Reducing words to their base or dictionary form", "b. Converting text to lowercase", "c. Removing punctuation from text", "d. Identifying the sentiment of text"], answer: 0 },
    { question: "What are stopwords?", choices: ["a. Common words that are usually removed from text", "b. Rare words that are emphasized in text analysis", "c. Words used to stop a process in NLP", "d. Words used to denote sentiment"], answer: 0 },
    { question: "What is part-of-speech tagging?", choices: ["a. Labeling words in a sentence with their parts of speech", "b. Translating text from one language to another", "c. Finding synonyms of words", "d. Clustering words into topics"], answer: 0 },
    { question: "What is named entity recognition (NER)?", choices: ["a. Identifying and classifying key information in text", "b. Translating text from one language to another", "c. Finding the root form of words", "d. Removing common words from text"], answer: 0 },
    { question: "What is sentiment analysis?", choices: ["a. Determining the sentiment expressed in text", "b. Translating text from one language to another", "c. Removing punctuation from text", "d. Clustering text into topics"], answer: 0 },
    { question: "What is word embedding?", choices: ["a. Representing words in continuous vector space", "b. Removing common words from text", "c. Finding the root form of words", "d. Translating text from one language to another"], answer: 0 },
    { question: "What is the purpose of TF-IDF?", choices: ["a. To weigh the importance of words in a document relative to a corpus", "b. To encode categorical variables", "c. To reduce the dimensionality of data", "d. To cluster documents into topics"], answer: 0 },
    { question: "What does TF in TF-IDF stand for?", choices: ["a. Term Frequency", "b. Text Frequency", "c. Total Frequency", "d. Temporal Frequency"], answer: 0 },
    { question: "What does IDF in TF-IDF stand for?", choices: ["a. Inverse Document Frequency", "b. Internal Data Frequency", "c. Important Data Factor", "d. Indexed Data Frequency"], answer: 0 },
    { question: "What is the bag-of-words model?", choices: ["a. A representation of text that describes the occurrence of words within a document", "b. A method for word stemming", "c. A technique for text translation", "d. A method for text clustering"], answer: 0 },
    { question: "What is the n-gram model?", choices: ["a. A contiguous sequence of n items from a given text", "b. A technique for named entity recognition", "c. A method for stemming words", "d. A type of text translation"], answer: 0 },
    { question: "What is word2vec?", choices: ["a. A group of related models used to produce word embeddings", "b. A technique for stemming words", "c. A method for part-of-speech tagging", "d. A type of text clustering"], answer: 0 },
    { question: "What is a common use of the LSTM model in NLP?", choices: ["a. Handling long-term dependencies in sequence data", "b. Removing common words from text", "c. Translating text from one language to another", "d. Clustering text into topics"], answer: 0 },
    { question: "What is a transformer model?", choices: ["a. A model architecture primarily used in NLP for tasks like translation and text generation", "b. A method for text tokenization", "c. A technique for stemming words", "d. A type of text clustering"], answer: 0 },
    { question: "What is BERT?", choices: ["a. A pre-trained deep learning model for natural language understanding", "b. A technique for text tokenization", "c. A method for text translation", "d. A type of text clustering"], answer: 0 },
    { question: "What is the GPT model?", choices: ["a. A generative pre-trained transformer model for text generation", "b. A method for text tokenization", "c. A technique for text translation", "d. A type of text clustering"], answer: 0 },
    { question: "What is fine-tuning in NLP?", choices: ["a. Adapting a pre-trained model to a specific task", "b. Removing punctuation from text", "c. Finding the root form of words", "d. Translating text from one language to another"], answer: 0 },
    { question: "What is sequence-to-sequence modeling?", choices: ["a. A method for converting sequences from one domain to sequences in another domain", "b. A technique for text tokenization", "c. A method for text translation", "d. A type of text clustering"], answer: 0 },
    { question: "What is attention mechanism in NLP?", choices: ["a. A technique to focus on important parts of the input sequence", "b. A method for stemming words", "c. A technique for text translation", "d. A type of text clustering"], answer: 0 },
    { question: "What is a language model?", choices: ["a. A model that predicts the next word in a sequence", "b. A technique for text tokenization", "c. A method for stemming words", "d. A type of text clustering"], answer: 0 },
    { question: "What is the purpose of the BLEU score?", choices: ["a. To evaluate the quality of machine-translated text", "b. To measure the sentiment of text", "c. To tokenize text", "d. To remove stopwords"], answer: 0 },
    { question: "What is word sense disambiguation?", choices: ["a. Determining which sense of a word is used in a context", "b. Translating text from one language to another", "c. Finding the root form of words", "d. Removing common words from text"], answer: 0 },
    { question: "What is co-reference resolution?", choices: ["a. Determining when different words refer to the same entity", "b. Translating text from one language to another", "c. Finding synonyms of words", "d. Clustering words into topics"], answer: 0 },
    { question: "What is a word cloud?", choices: ["a. A visual representation of text data where the size of each word indicates its frequency", "b. A method for stemming words", "c. A technique for text translation", "d. A type of text clustering"], answer: 0 },
    { question: "What is a unigram?", choices: ["a. A single item from a sequence of text", "b. A technique for named entity recognition", "c. A method for stemming words", "d. A type of text translation"], answer: 0 },
    { question: "What is topic modeling?", choices: ["a. A method for discovering abstract topics within a collection of documents", "b. A technique for text tokenization", "c. A method for stemming words", "d. A type of text translation"], answer: 0 },
    { question: "What is Latent Dirichlet Allocation (LDA)?", choices: ["a. A generative statistical model for topic modeling", "b. A technique for named entity recognition", "c. A method for stemming words", "d. A type of text translation"], answer: 0 },
    { question: "What is the purpose of the perplexity score in NLP?", choices: ["a. To measure how well a probability model predicts a sample", "b. To measure the sentiment of text", "c. To tokenize text", "d. To remove stopwords"], answer: 0 },
    { question: "What is the goal of machine translation?", choices: ["a. To automatically translate text from one language to another", "b. To tokenize text", "c. To stem words", "d. To identify named entities"], answer: 0 },
    { question: "What is the Universal Dependencies project?", choices: ["a. A framework for consistent annotation of grammar across different languages", "b. A method for text tokenization", "c. A technique for stemming words", "d. A type of text clustering"], answer: 0 },
    { question: "What is a corpus in NLP?", choices: ["a. A large collection of texts used for training and evaluating models", "b. A method for text tokenization", "c. A technique for stemming words", "d. A type of text clustering"], answer: 0 },
    { question: "What is the Penn Treebank?", choices: ["a. A corpus of annotated text for linguistic research", "b. A method for text tokenization", "c. A technique for stemming words", "d. A type of text clustering"], answer: 0 },
    { question: "What is dependency parsing?", choices: ["a. Analyzing the grammatical structure of a sentence", "b. Translating text from one language to another", "c. Finding synonyms of words", "d. Clustering words into topics"], answer: 0 },
    { question: "What is the purpose of word alignment in machine translation?", choices: ["a. To map words in the source language to their corresponding words in the target language", "b. To tokenize text", "c. To stem words", "d. To identify named entities"], answer: 0 },
    { question: "What is the goal of text summarization?", choices: ["a. To create a concise and coherent version of a longer document", "b. To tokenize text", "c. To stem words", "d. To identify named entities"], answer: 0 },
    { question: "What is a language model pre-training?", choices: ["a. Training a model on a large corpus of text before fine-tuning on a specific task", "b. Removing punctuation from text", "c. Finding the root form of words", "d. Translating text from one language to another"], answer: 0 },
    { question: "What is transfer learning in NLP?", choices: ["a. Applying knowledge gained from one task to improve performance on a related task", "b. Translating text from one language to another", "c. Removing common words from text", "d. Identifying named entities"], answer: 0 },
    { question: "What is the purpose of a vector space model in NLP?", choices: ["a. To represent text as vectors of identifiers", "b. To reduce the dimensionality of text data", "c. To remove stopwords from text", "d. To cluster documents into topics"], answer: 0 },
    { question: "What is cosine similarity?", choices: ["a. A measure of similarity between two non-zero vectors", "b. A technique for named entity recognition", "c. A method for stemming words", "d. A type of text translation"], answer: 0 },
    { question: "What is a convolutional neural network (CNN) used for in NLP?", choices: ["a. Extracting local features from text", "b. Removing common words from text", "c. Translating text from one language to another", "d. Clustering text into topics"], answer: 0 },
    { question: "What is a recurrent neural network (RNN) used for in NLP?", choices: ["a. Modeling sequence data such as text", "b. Removing punctuation from text", "c. Finding the root form of words", "d. Translating text from one language to another"], answer: 0 },
    { question: "What is a bidirectional LSTM?", choices: ["a. An LSTM that processes data in both forward and backward directions", "b. A technique for named entity recognition", "c. A method for stemming words", "d. A type of text translation"], answer: 0 },
    { question: "What is a language generation task in NLP?", choices: ["a. Creating coherent and contextually relevant text", "b. Tokenizing text", "c. Stemming words", "d. Identifying named entities"], answer: 0 },
    { question: "What is the purpose of data augmentation in NLP?", choices: ["a. To artificially expand the training dataset by generating new samples", "b. To reduce the dimensionality of text data", "c. To remove stopwords from text", "d. To cluster documents into topics"], answer: 0 }
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
    const indices = Array.from(Array(nlpQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => nlpQuestions[index]);
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