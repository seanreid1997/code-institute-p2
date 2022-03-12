let questions = [
    {
        question: 'What is the name of the queen of England?',
        choice1: 'Megan',
        choice2: 'Elizabeth',
        choice3: 'Courtney',
        choice4: 'Vanessa',
        answer: 2,
    },
    {
        question:
            "Which country is London located in?",
        choice1: "England",
        choice2: "New York",
        choice3: "China",
        choice4: "None of the above",
        answer: 1,
    },
    {
        question: "What do cows eat?",
        choice1: "Chicken",
        choice2: "Pizza",
        choice3: "Grass",
        choice4: "Fish",
        answer: 3,
    },
    {
        question: "Which of the following is a gas?",
        choice1: "Hydrogen",
        choice2: "Water",
        choice3: "Petroleum",
        choice4: "Juice",
        answer: 1,
    },
    {
        question: "Approximately what percentage of the world is made up of water?",
        choice1: "20%",
        choice2: "100%",
        choice3: "55%",
        choice4: "71%",
        answer: 4,
    },
    {    
        question: "What is the capital of Jamaica?",
        choice1: "London",
        choice2: "Kingston",
        choice3: "Brussels",
        choice4: "Clarendon",
        answer: 2,
    },
    {    
        question: "Which of the following is true?",
        choice1: "Earth has two axis",
        choice2: "Las Vegas is a town in England",
        choice3: "Men can fly",
        choice4: "Chickens can speak",
        answer: 1,
    },
    {    
        question: "How many days are in a year?",
        choice1: "365",
        choice2: "100",
        choice3: "245",
        choice4: "400",
        answer: 1,
    },
    {    
        question: "What time is 00:00 on a 12hr clock?",
        choice1: "12am",
        choice2: "12pm",
        choice3: "3pm",
        choice4: "none of the above",
        answer: 1,
    },
    {    
        question: "What do you call a baby cow?",
        choice1: "Calf",
        choice2: "Horse",
        choice3: "Puppy",
        choice4: "Kitten",
        answer: 1,
    },
];

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
        return window.location.assign('end.html');
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