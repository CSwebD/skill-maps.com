<<<<<<< HEAD
const dockerQuestions = [
    { question: "What is Docker?", choices: ["a. A virtualization platform", "b. A containerization platform", "c. A cloud service", "d. A programming language"], answer: 1 },
    { question: "Which command is used to create a new Docker container?", choices: ["a. docker create", "b. docker start", "c. docker run", "d. docker build"], answer: 2 },
    { question: "What is a Docker image?", choices: ["a. A running instance of a container", "b. A template used to create containers", "c. A file storage format", "d. A network configuration"], answer: 1 },
    { question: "Which file is used to define a Docker image?", choices: ["a. Dockerfile", "b. Dockerimage", "c. Dockerconfig", "d. Dockercompose"], answer: 0 },
    { question: "Which command is used to build a Docker image from a Dockerfile?", choices: ["a. docker build", "b. docker create", "c. docker run", "d. docker start"], answer: 0 },
    { question: "What does the 'docker ps' command do?", choices: ["a. Lists all Docker images", "b. Lists all running Docker containers", "c. Lists all Docker networks", "d. Lists all Docker volumes"], answer: 1 },
    { question: "Which of the following is a valid base image for a Dockerfile?", choices: ["a. FROM ubuntu", "b. BASE ubuntu", "c. IMAGE ubuntu", "d. START ubuntu"], answer: 0 },
    { question: "How do you remove a Docker container?", choices: ["a. docker delete [container_id]", "b. docker rm [container_id]", "c. docker remove [container_id]", "d. docker destroy [container_id]"], answer: 1 },
    { question: "Which command is used to push an image to Docker Hub?", choices: ["a. docker upload", "b. docker push", "c. docker send", "d. docker transfer"], answer: 1 },
    { question: "What is the default network driver for Docker?", choices: ["a. host", "b. bridge", "c. overlay", "d. none"], answer: 1 },
    { question: "How do you stop a running Docker container?", choices: ["a. docker stop [container_id]", "b. docker terminate [container_id]", "c. docker end [container_id]", "d. docker kill [container_id]"], answer: 0 },
    { question: "Which command is used to log in to Docker Hub?", choices: ["a. docker login", "b. docker signin", "c. docker enter", "d. docker connect"], answer: 0 },
    { question: "What is the purpose of the 'ENTRYPOINT' instruction in a Dockerfile?", choices: ["a. To specify the base image", "b. To set environment variables", "c. To define the executable that runs when a container starts", "d. To copy files into the container"], answer: 3 },
    { question: "Which command is used to list all Docker images on your local machine?", choices: ["a. docker images", "b. docker list", "c. docker ps", "d. docker view"], answer: 0 },
    { question: "How do you create a new tag for a Docker image?", choices: ["a. docker tag [image_id] [new_tag]", "b. docker label [image_id] [new_tag]", "c. docker add [image_id] [new_tag]", "d. docker name [image_id] [new_tag]"], answer: 0 },
    { question: "What does 'docker-compose.yml' file define?", choices: ["a. The configuration for a single Docker container", "b. The network settings for Docker", "c. The configuration for a multi-container Docker application", "d. The security settings for Docker"], answer: 2 },
    { question: "Which command is used to start all services defined in a docker-compose.yml file?", choices: ["a. docker-compose start", "b. docker-compose run", "c. docker-compose up", "d. docker-compose init"], answer: 2 },
    { question: "What is the purpose of the 'VOLUME' instruction in a Dockerfile?", choices: ["a. To increase container size", "b. To define mount points for external storage", "c. To set environment variables", "d. To specify the base image"], answer: 1 },
    { question: "Which command is used to see the logs of a running container?", choices: ["a. docker view [container_id]", "b. docker logs [container_id]", "c. docker output [container_id]", "d. docker show [container_id]"], answer: 1 },
    { question: "How do you run a Docker container in the background?", choices: ["a. docker run -b", "b. docker run -d", "c. docker run -bg", "d. docker run -back"], answer: 1 },
    { question: "Which of these is NOT a valid Docker network driver?", choices: ["a. bridge", "b. overlay", "c. host", "d. virtual"], answer: 3 },
    { question: "What is Docker Hub?", choices: ["a. A cloud storage service", "b. A registry for Docker images", "c. A development environment for Docker", "d. A monitoring tool for Docker"], answer: 1 },
    { question: "Which command is used to remove a Docker image?", choices: ["a. docker delete [image_id]", "b. docker rmi [image_id]", "c. docker remove [image_id]", "d. docker destroy [image_id]"], answer: 1 },
    { question: "How do you update a Docker container to use a new image?", choices: ["a. docker update [container_id]", "b. docker upgrade [container_id]", "c. docker commit [container_id] [new_image]", "d. docker replace [container_id] [new_image]"], answer: 2 },
    { question: "What is a Docker volume used for?", choices: ["a. Networking", "b. Logging", "c. Data persistence", "d. Scaling"], answer: 2 },
    { question: "How can you view the configuration of a Docker container?", choices: ["a. docker inspect [container_id]", "b. docker config [container_id]", "c. docker details [container_id]", "d. docker view [container_id]"], answer: 0 },
    { question: "Which Docker command is used to pause all processes within a container?", choices: ["a. docker stop", "b. docker kill", "c. docker pause", "d. docker hold"], answer: 2 },
    { question: "What is the purpose of the 'EXPOSE' instruction in a Dockerfile?", choices: ["a. To expose environment variables", "b. To specify ports to be exposed by the container", "c. To expose the container's filesystem", "d. To expose container logs"], answer: 1 },
    { question: "Which command is used to remove all stopped containers?", choices: ["a. docker clean", "b. docker rm -a", "c. docker prune", "d. docker system prune"], answer: 3 },
    { question: "What does the 'docker network ls' command do?", choices: ["a. Lists all Docker containers", "b. Lists all Docker images", "c. Lists all Docker networks", "d. Lists all Docker volumes"], answer: 2 },
    { question: "How do you attach to a running Docker container?", choices: ["a. docker attach [container_id]", "b. docker connect [container_id]", "c. docker join [container_id]", "d. docker exec [container_id]"], answer: 0 },
    { question: "Which command is used to create a new Docker network?", choices: ["a. docker network new", "b. docker network create", "c. docker network init", "d. docker network add"], answer: 1 },
    { question: "What does 'docker-compose down' do?", choices: ["a. Stops and removes all containers and networks defined in the docker-compose.yml file", "b. Stops all running containers", "c. Removes the docker-compose.yml file", "d. Shuts down the Docker engine"], answer: 0 },
    { question: "What is the purpose of the 'CMD' instruction in a Dockerfile?", choices: ["a. To set environment variables", "b. To specify the default command to run when the container starts", "c. To define mount points", "d. To specify the base image"], answer: 1 },
    { question: "How do you restart a stopped Docker container?", choices: ["a. docker restart [container_id]", "b. docker start [container_id]", "c. docker run [container_id]", "d. docker up [container_id]"], answer: 1 },
    { question: "Which command is used to save an image to a tar file?", choices: ["a. docker save [image_id] -o [filename]", "b. docker export [image_id] -o [filename]", "c. docker backup [image_id] -o [filename]", "d. docker store [image_id] -o [filename]"], answer: 0 },
    { question: "What is a multi-stage build in Docker?", choices: ["a. A Docker image with multiple stages", "b. A Docker build process with multiple FROM instructions", "c. A Docker container with multiple stages", "d. A Docker build with multiple networks"], answer: 1 },
    { question: "Which command is used to import a tar file as a Docker image?", choices: ["a. docker load -i [filename]", "b. docker import -i [filename]", "c. docker add -i [filename]", "d. docker insert -i [filename]"], answer: 0 },
    { question: "How do you update an existing Docker service?", choices: ["a. docker update [service_name]", "b. docker upgrade [service_name]", "c. docker service update [service_name]", "d. docker service upgrade [service_name]"], answer: 2 },
    { question: "What does 'docker exec' do?", choices: ["a. Executes a command in a new container", "b. Executes a command in a running container", "c. Executes a command in all containers", "d. Executes a command in the Docker engine"], answer: 1 },
    { question: "Which command is used to create a Docker service?", choices: ["a. docker create service [service_name]", "b. docker service create [service_name]", "c. docker new service [service_name]", "d. docker build service [service_name]"], answer: 1 },
    { question: "What is the default storage driver for Docker on Linux?", choices: ["a. overlay2", "b. aufs", "c. btrfs", "d. zfs"], answer: 0 },
    { question: "Which of the following is not a Docker object?", choices: ["a. Container", "b. Image", "c. Volume", "d. Server"], answer: 3 },
    { question: "How do you create a Docker volume?", choices: ["a. docker volume create [volume_name]", "b. docker create volume [volume_name]", "c. docker new volume [volume_name]", "d. docker build volume [volume_name]"], answer: 0 },
    { question: "What does 'docker system df' show?", choices: ["a. Disk usage of Docker objects", "b. Docker network details", "c. Dockerfile syntax errors", "d. Docker container logs"], answer: 0 },
    { question: "Which command is used to change the configuration of a Docker container?", choices: ["a. docker update [container_id]", "b. docker modify [container_id]", "c. docker configure [container_id]", "d. docker set [container_id]"], answer: 0 },
    { question: "What is the primary purpose of Docker Swarm?", choices: ["a. To manage Docker images", "b. To manage Docker volumes", "c. To orchestrate Docker containers", "d. To monitor Docker logs"], answer: 2 },
    { question: "Which command is used to scale a Docker service?", choices: ["a. docker service scale [service_name]=[replica_count]", "b. docker scale [service_name]=[replica_count]", "c. docker service set [service_name]=[replica_count]", "d. docker set scale [service_name]=[replica_count]"], answer: 0 },
    { question: "What is a Docker context?", choices: ["a. A way to manage multiple Docker configurations", "b. A container's environment", "c. A Docker network type", "d. A Docker storage driver"], answer: 0 },
    { question: "Which command is used to display the version of Docker installed?", choices: ["a. docker -v", "b. docker --version", "c. docker version", "d. docker info"], answer: 2 },
    { question: "What is the primary configuration file for Docker Compose?", choices: ["a. dockerfile", "b. docker-compose.yml", "c. compose.yml", "d. dockerconfig.yml"], answer: 1 },
    { question: "How do you detach from a running Docker container without stopping it?", choices: ["a. Ctrl + C", "b. Ctrl + P + Q", "c. docker detach", "d. docker quit"], answer: 1 },
    { question: "Which command is used to list the tasks of a Docker service?", choices: ["a. docker service ps [service_name]", "b. docker service list [service_name]", "c. docker service tasks [service_name]", "d. docker service details [service_name]"], answer: 0 },
    { question: "What is the purpose of Docker Secrets?", choices: ["a. To store sensitive data", "b. To store container logs", "c. To store Docker images", "d. To store environment variables"], answer: 0 }
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
    const indices = Array.from(Array(dockerQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => dockerQuestions[index]);
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
const dockerQuestions = [
    { question: "What is Docker?", choices: ["a. A virtualization platform", "b. A containerization platform", "c. A cloud service", "d. A programming language"], answer: 1 },
    { question: "Which command is used to create a new Docker container?", choices: ["a. docker create", "b. docker start", "c. docker run", "d. docker build"], answer: 2 },
    { question: "What is a Docker image?", choices: ["a. A running instance of a container", "b. A template used to create containers", "c. A file storage format", "d. A network configuration"], answer: 1 },
    { question: "Which file is used to define a Docker image?", choices: ["a. Dockerfile", "b. Dockerimage", "c. Dockerconfig", "d. Dockercompose"], answer: 0 },
    { question: "Which command is used to build a Docker image from a Dockerfile?", choices: ["a. docker build", "b. docker create", "c. docker run", "d. docker start"], answer: 0 },
    { question: "What does the 'docker ps' command do?", choices: ["a. Lists all Docker images", "b. Lists all running Docker containers", "c. Lists all Docker networks", "d. Lists all Docker volumes"], answer: 1 },
    { question: "Which of the following is a valid base image for a Dockerfile?", choices: ["a. FROM ubuntu", "b. BASE ubuntu", "c. IMAGE ubuntu", "d. START ubuntu"], answer: 0 },
    { question: "How do you remove a Docker container?", choices: ["a. docker delete [container_id]", "b. docker rm [container_id]", "c. docker remove [container_id]", "d. docker destroy [container_id]"], answer: 1 },
    { question: "Which command is used to push an image to Docker Hub?", choices: ["a. docker upload", "b. docker push", "c. docker send", "d. docker transfer"], answer: 1 },
    { question: "What is the default network driver for Docker?", choices: ["a. host", "b. bridge", "c. overlay", "d. none"], answer: 1 },
    { question: "How do you stop a running Docker container?", choices: ["a. docker stop [container_id]", "b. docker terminate [container_id]", "c. docker end [container_id]", "d. docker kill [container_id]"], answer: 0 },
    { question: "Which command is used to log in to Docker Hub?", choices: ["a. docker login", "b. docker signin", "c. docker enter", "d. docker connect"], answer: 0 },
    { question: "What is the purpose of the 'ENTRYPOINT' instruction in a Dockerfile?", choices: ["a. To specify the base image", "b. To set environment variables", "c. To define the executable that runs when a container starts", "d. To copy files into the container"], answer: 3 },
    { question: "Which command is used to list all Docker images on your local machine?", choices: ["a. docker images", "b. docker list", "c. docker ps", "d. docker view"], answer: 0 },
    { question: "How do you create a new tag for a Docker image?", choices: ["a. docker tag [image_id] [new_tag]", "b. docker label [image_id] [new_tag]", "c. docker add [image_id] [new_tag]", "d. docker name [image_id] [new_tag]"], answer: 0 },
    { question: "What does 'docker-compose.yml' file define?", choices: ["a. The configuration for a single Docker container", "b. The network settings for Docker", "c. The configuration for a multi-container Docker application", "d. The security settings for Docker"], answer: 2 },
    { question: "Which command is used to start all services defined in a docker-compose.yml file?", choices: ["a. docker-compose start", "b. docker-compose run", "c. docker-compose up", "d. docker-compose init"], answer: 2 },
    { question: "What is the purpose of the 'VOLUME' instruction in a Dockerfile?", choices: ["a. To increase container size", "b. To define mount points for external storage", "c. To set environment variables", "d. To specify the base image"], answer: 1 },
    { question: "Which command is used to see the logs of a running container?", choices: ["a. docker view [container_id]", "b. docker logs [container_id]", "c. docker output [container_id]", "d. docker show [container_id]"], answer: 1 },
    { question: "How do you run a Docker container in the background?", choices: ["a. docker run -b", "b. docker run -d", "c. docker run -bg", "d. docker run -back"], answer: 1 },
    { question: "Which of these is NOT a valid Docker network driver?", choices: ["a. bridge", "b. overlay", "c. host", "d. virtual"], answer: 3 },
    { question: "What is Docker Hub?", choices: ["a. A cloud storage service", "b. A registry for Docker images", "c. A development environment for Docker", "d. A monitoring tool for Docker"], answer: 1 },
    { question: "Which command is used to remove a Docker image?", choices: ["a. docker delete [image_id]", "b. docker rmi [image_id]", "c. docker remove [image_id]", "d. docker destroy [image_id]"], answer: 1 },
    { question: "How do you update a Docker container to use a new image?", choices: ["a. docker update [container_id]", "b. docker upgrade [container_id]", "c. docker commit [container_id] [new_image]", "d. docker replace [container_id] [new_image]"], answer: 2 },
    { question: "What is a Docker volume used for?", choices: ["a. Networking", "b. Logging", "c. Data persistence", "d. Scaling"], answer: 2 },
    { question: "How can you view the configuration of a Docker container?", choices: ["a. docker inspect [container_id]", "b. docker config [container_id]", "c. docker details [container_id]", "d. docker view [container_id]"], answer: 0 },
    { question: "Which Docker command is used to pause all processes within a container?", choices: ["a. docker stop", "b. docker kill", "c. docker pause", "d. docker hold"], answer: 2 },
    { question: "What is the purpose of the 'EXPOSE' instruction in a Dockerfile?", choices: ["a. To expose environment variables", "b. To specify ports to be exposed by the container", "c. To expose the container's filesystem", "d. To expose container logs"], answer: 1 },
    { question: "Which command is used to remove all stopped containers?", choices: ["a. docker clean", "b. docker rm -a", "c. docker prune", "d. docker system prune"], answer: 3 },
    { question: "What does the 'docker network ls' command do?", choices: ["a. Lists all Docker containers", "b. Lists all Docker images", "c. Lists all Docker networks", "d. Lists all Docker volumes"], answer: 2 },
    { question: "How do you attach to a running Docker container?", choices: ["a. docker attach [container_id]", "b. docker connect [container_id]", "c. docker join [container_id]", "d. docker exec [container_id]"], answer: 0 },
    { question: "Which command is used to create a new Docker network?", choices: ["a. docker network new", "b. docker network create", "c. docker network init", "d. docker network add"], answer: 1 },
    { question: "What does 'docker-compose down' do?", choices: ["a. Stops and removes all containers and networks defined in the docker-compose.yml file", "b. Stops all running containers", "c. Removes the docker-compose.yml file", "d. Shuts down the Docker engine"], answer: 0 },
    { question: "What is the purpose of the 'CMD' instruction in a Dockerfile?", choices: ["a. To set environment variables", "b. To specify the default command to run when the container starts", "c. To define mount points", "d. To specify the base image"], answer: 1 },
    { question: "How do you restart a stopped Docker container?", choices: ["a. docker restart [container_id]", "b. docker start [container_id]", "c. docker run [container_id]", "d. docker up [container_id]"], answer: 1 },
    { question: "Which command is used to save an image to a tar file?", choices: ["a. docker save [image_id] -o [filename]", "b. docker export [image_id] -o [filename]", "c. docker backup [image_id] -o [filename]", "d. docker store [image_id] -o [filename]"], answer: 0 },
    { question: "What is a multi-stage build in Docker?", choices: ["a. A Docker image with multiple stages", "b. A Docker build process with multiple FROM instructions", "c. A Docker container with multiple stages", "d. A Docker build with multiple networks"], answer: 1 },
    { question: "Which command is used to import a tar file as a Docker image?", choices: ["a. docker load -i [filename]", "b. docker import -i [filename]", "c. docker add -i [filename]", "d. docker insert -i [filename]"], answer: 0 },
    { question: "How do you update an existing Docker service?", choices: ["a. docker update [service_name]", "b. docker upgrade [service_name]", "c. docker service update [service_name]", "d. docker service upgrade [service_name]"], answer: 2 },
    { question: "What does 'docker exec' do?", choices: ["a. Executes a command in a new container", "b. Executes a command in a running container", "c. Executes a command in all containers", "d. Executes a command in the Docker engine"], answer: 1 },
    { question: "Which command is used to create a Docker service?", choices: ["a. docker create service [service_name]", "b. docker service create [service_name]", "c. docker new service [service_name]", "d. docker build service [service_name]"], answer: 1 },
    { question: "What is the default storage driver for Docker on Linux?", choices: ["a. overlay2", "b. aufs", "c. btrfs", "d. zfs"], answer: 0 },
    { question: "Which of the following is not a Docker object?", choices: ["a. Container", "b. Image", "c. Volume", "d. Server"], answer: 3 },
    { question: "How do you create a Docker volume?", choices: ["a. docker volume create [volume_name]", "b. docker create volume [volume_name]", "c. docker new volume [volume_name]", "d. docker build volume [volume_name]"], answer: 0 },
    { question: "What does 'docker system df' show?", choices: ["a. Disk usage of Docker objects", "b. Docker network details", "c. Dockerfile syntax errors", "d. Docker container logs"], answer: 0 },
    { question: "Which command is used to change the configuration of a Docker container?", choices: ["a. docker update [container_id]", "b. docker modify [container_id]", "c. docker configure [container_id]", "d. docker set [container_id]"], answer: 0 },
    { question: "What is the primary purpose of Docker Swarm?", choices: ["a. To manage Docker images", "b. To manage Docker volumes", "c. To orchestrate Docker containers", "d. To monitor Docker logs"], answer: 2 },
    { question: "Which command is used to scale a Docker service?", choices: ["a. docker service scale [service_name]=[replica_count]", "b. docker scale [service_name]=[replica_count]", "c. docker service set [service_name]=[replica_count]", "d. docker set scale [service_name]=[replica_count]"], answer: 0 },
    { question: "What is a Docker context?", choices: ["a. A way to manage multiple Docker configurations", "b. A container's environment", "c. A Docker network type", "d. A Docker storage driver"], answer: 0 },
    { question: "Which command is used to display the version of Docker installed?", choices: ["a. docker -v", "b. docker --version", "c. docker version", "d. docker info"], answer: 2 },
    { question: "What is the primary configuration file for Docker Compose?", choices: ["a. dockerfile", "b. docker-compose.yml", "c. compose.yml", "d. dockerconfig.yml"], answer: 1 },
    { question: "How do you detach from a running Docker container without stopping it?", choices: ["a. Ctrl + C", "b. Ctrl + P + Q", "c. docker detach", "d. docker quit"], answer: 1 },
    { question: "Which command is used to list the tasks of a Docker service?", choices: ["a. docker service ps [service_name]", "b. docker service list [service_name]", "c. docker service tasks [service_name]", "d. docker service details [service_name]"], answer: 0 },
    { question: "What is the purpose of Docker Secrets?", choices: ["a. To store sensitive data", "b. To store container logs", "c. To store Docker images", "d. To store environment variables"], answer: 0 }
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
    const indices = Array.from(Array(dockerQuestions.length).keys());
    indices.sort(() => Math.random() - 0.5);
    selectedQuestions = indices.slice(0, 10).map(index => dockerQuestions[index]);
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