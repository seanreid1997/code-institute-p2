let questions = [{
    question: 'What is 242 + 25?',
        choice1: '269',
        choice2: '267',
        choice3: '217',
        choice4: '278',
        answer: 2,
    },
    {
        question: "What is 150 / 5?",
        choice1: "30",
        choice2: "25",
        choice3: "3",
        choice4: "20",
        answer: 1,
    },
    {
        question: "What is 36 x 42?",
        choice1: "364",
        choice2: "78",
        choice3: "1512",
        choice4: "2541",
        answer: 3,
    },
    {
        question: "What is 24 / 2?",
        choice1: "12",
        choice2: "5",
        choice3: "10",
        choice4: "6",
        answer: 1,
    },
    {
        question: "What is 4 x 10?",
        choice1: "20",
        choice2: "45",
        choice3: "55",
        choice4: "40",
        answer: 4,
    },
    {    
        question: "What is 5 x 5?",
        choice1: "20",
        choice2: "25",
        choice3: "75",
        choice4: "50",
        answer: 2,
    },
    {    
        question: "What is 10% of 200?",
        choice1: "20",
        choice2: "10",
        choice3: "15",
        choice4: "5",
        answer: 1,
    },
    {    
        question: "How many sides does a triangle have?",
        choice1: "3",
        choice2: "5",
        choice3: "4",
        choice4: "7",
        answer: 1,
    },
    {    
        question: "What percenatge of 400 is 40?",
        choice1: "10%",
        choice2: "5%",
        choice3: "20%",
        choice4: "70%",
        answer: 1,
    },
    {    
        question: "What is 6 x 7?",
        choice1: "42",
        choice2: "13",
        choice3: "49%",
        choice4: "56",
        answer: 1,
}];

/**
 * Give variables values from maths.html
 */
let question = document.querySelector('#question');
let choices = Array.from(document.querySelectorAll('.choices'));
let progressText = document.querySelector('#progressText');
let scoreText = document.querySelector('#score');
let progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let answers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let points = 10;
let maxQuestions = 10;

/**
 * Starts the game
 */
function startGame(){
   questionCounter = 0
   score = 0
   availableQuestions = [...questions]
   newQuestion();
}

 /**
 * Generates a new random question from the questions array
 */
  function newQuestion() {
    if(availableQuestions.length === 0) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('summary.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%`;

    let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        let number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1);
    answers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!answers) return

        answers = false
        let selectedChoice = e.target
        let selectedAnswer = selectedChoice.dataset['number']
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(points);
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            newQuestion()

        }, 100)
    })
})

/**
 * function that Increments the score of the user
 */
function incrementScore(num) {
    score +=num;
    scoreText.innerText = score;
}

startGame();