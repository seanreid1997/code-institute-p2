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
let choices = Array.from(document.querySelectorAll('.choice-text'));
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