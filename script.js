const questions = [
    { question: "Кое от следните е твърдо вещество?", answers: ["Въздух", "Камък", "Вода"], correctIndex: 1 },
    { question: "Кое от изброените е течност?", answers: ["Лед", "Мляко", "Прах"], correctIndex: 1 },
    // Добавете останалите въпроси тук
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    document.getElementById('question-text').innerText = questions[currentQuestionIndex].question;
    const answerButtons = document.querySelectorAll('.answer-btn');
    questions[currentQuestionIndex].answers.forEach((answer, index) => {
        answerButtons[index].innerText = answer;
        answerButtons[index].className = 'answer-btn';
    });
    document.getElementById('next-button').style.display = 'none';
}

function selectAnswer(index) {
    const correctIndex = questions[currentQuestionIndex].correctIndex;
    const answerButtons = document.querySelectorAll('.answer-btn');
    if (index === correctIndex) {
        answerButtons[index].classList.add('correct');
        score++;
        document.getElementById('score').innerText = score;
    } else {
        answerButtons[index].classList.add('wrong');
        answerButtons[correctIndex].classList.add('correct');
    }
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('question-box').style.display = 'none';
    document.getElementById('next-button-container').style.display = 'none';
    document.getElementById('end-message').style.display = 'block';
    
    let message;
    let emojiSrc;
    if (score >= 9) {
        message = "Справихте се отлично!";
        emojiSrc = "happy.png";
    } else if (score >= 7) {
        message = "Справихте се много добре!";
        emojiSrc = "happy.png";
    } else if (score >= 5) {
        message = "Справихте се добре!";
        emojiSrc = "happy.png";
    } else {
        message = "Прочети още по темата и играй отново!";
        emojiSrc = "sad.png";
    }
    
    document.getElementById('final-score-message').innerText = `Вие събрахте общо ${score} точки. ${message}`;
    document.getElementById('emoji').src = emojiSrc;
}

document.addEventListener("DOMContentLoaded", loadQuestion);
