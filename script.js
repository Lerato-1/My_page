const questions = [
    {
        question: "Do I only have one name?",
        answers: ["yes", "no"],
        correct: "yes"
    },
    {
        question: "How many siblings do I have?",
        answers: ["1", "2", "3", "4"],
        correct: "2"
    },
    {
        question: "Do I have sisters or brothers?",
        answers: ["sisters", "brothers"],
        correct: "sisters"
    },
    {
        question: "Am I the first, second or third born?",
        answers: ["first", "second", "third"],
        correct: "third"
    },
    {
        question: "What is my favorite color?",
        answers: ["Grey", "Maroon", "Black", "Navy Blue"],
        correct: "Grey"
    },
    {
        question: "What is my nickname?",
        answers: ["Peyoyo", "Mankodi7", "Nopi", "Kunku"],
        correct: "Nopi"
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

document.getElementById('startQuiz').addEventListener('click', startQuiz);
document.getElementById('nextQuestion').addEventListener('click', nextQuestion);

function startQuiz() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = '';
    const question = questions[currentQuestionIndex];
    const questionElement = document.createElement('h3');
    questionElement.textContent = question.question;
    questionContainer.appendChild(questionElement);
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(answer));
        questionContainer.appendChild(button);
    });
}

function selectAnswer(answer) {
    userAnswers[currentQuestionIndex] = answer;
    document.getElementById('nextQuestion').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('nextQuestion').style.display = 'none';
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '<h3>Your Answers:</h3>';
    questions.forEach((question, index) => {
        const result = document.createElement('p');
        result.innerHTML = `${question.question} <br> Your answer: <strong>${userAnswers[index]}</strong> <br> Correct answer: <strong>${question.correct}</strong>`;
        resultsContainer.appendChild(result);
    });
}
