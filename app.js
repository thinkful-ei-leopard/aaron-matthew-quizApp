'use strict';

const STORE = {
  questions: [
    {
      question: 'How many innings are in a normal length MLB game?',
      answers: [
        '6',
        '10',
        '9',
        '15'
      ],
      correctAnswer: '9',
      imageAlt: 'Image of scorebard from baseball game'
    },
    {
      question: 'How many players are on the field during a baseball game?',
      answers: [
        '11',
        '12',
        '7',
        '9'
      ],
      correctAnswer: '9',
      imageAlt: 'Image of a mesh of players on a Baseball Field'
    },
    {
      question: 'How many strikes does a batter get per at-bat?',
      answers: [
        '5',
        '8',
        '3',
        '2'
      ],
      correctAnswer: '3',
      imageAlt: 'Image of a batter swinging and missing a pitch'
    },
    {
      question: 'What is the term for when a ball is hit over the outfield fence?',
      answers: [
        'Touchdown',
        'Home Run',
        'Slam Dunk',
        'Birdie'
      ],
      correctAnswer: 'Home Run',
      imageAlt: 'Image of crowd trying to catch ball in outfield seats'
    },
    {
      question: 'What does MLB stand for?',
      answers: [
        'Major League Baseball',
        'My Little Batter',
        'Matt Likes Baseball',
        'Minor League Baseball'
      ],
      correctAnswer: 'Major League Baseball',
      imageAlt: 'Image of the MLB Logo'
    },
  ],
  questionNumber: 0,
  score: 0
};
  
/**
   *
   * Your app should include a render() function, that regenerates
   * the view each time the store is updated. See your course
   * material, consult your instructor, and reference the slides
   * for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   */

// Handles event for when 'Play Ball' button is clicked on Start Page
function handleStartQuiz() {
  $('main').on('click', '.start-button', event => {
    event.preventDefault();
    STORE.questionNumber++;
    render(generateQuestionPageString());
  });
}

// Handles event for when 'Submit' button is clicked on Question Page
function handleQuestionSubmit() {
  $('main').on('submit', '#quiz-question', event => {
    event.preventDefault();
    let userChoice = $('input[name=answer]:checked', '#quiz-question').val();
    let correct = STORE.questions[STORE.questionNumber - 1].correctAnswer;
    if(userChoice === correct) {
      STORE.score++;
      render(generateCorrectPageString());
    } else {
      render(generateWrongPageString());
    }
  });
}

// Handles event for when 'Next' button is clicked on either
// the Correct Page or Wrong Page
function handleNextQuestion() {
  $('main').on('click', '.next-button', event => {
    event.preventDefault();
    STORE.questionNumber++;
    if(STORE.questionNumber > STORE.questions.length) {
      render(generateEndPageString());
    } else {
      render(generateQuestionPageString());
    }
  });
}

// Handles event for when 'Play Again' button is clicked at the End Page
function handlePlayAgain() {
  $('main').on('click', '.again-button', event => {
    event.preventDefault();
    STORE.questionNumber = 0;
    STORE.score = 0;
    render(generateStartPageString());
  });
}

// Generates the HTML String for the Start Page
function generateStartPageString() {
  return `<div class="quiz-container">
  <img src="../imgs/startpage-min.png" alt="Image of Baseball Quiz Logo"/>
  <p class="question">How well do YOU know baseball?</p>
  <button class="start-button">
      <label class="button-label" for="next-button">Play Ball!</label>
  </button>
</div>`;
}

// Generates the HTML String for the Question Page
function generateQuestionPageString() {
  let questionIndex = STORE.questions[STORE.questionNumber - 1];
  return `<div class="quiz-container">
  <h1> Question ${STORE.questionNumber} of ${STORE.questions.length}</h1>
  <img src="../imgs/question${STORE.questionNumber}-min.jpg" alt="${questionIndex.imageAlt}"/>
   
  <form id=quiz-question>
    
    <p class="question">${questionIndex.question}</p>
    
    <label for="answer1" class="answer">
      <input id="answer1" type="radio" name="answer" value="${questionIndex.answers[0]}" required> 
      A: ${questionIndex.answers[0]}
    </label>
    <label for="answer2" class="answer">
      <input id="answer2" type="radio" name="answer" value="${questionIndex.answers[1]}" required> 
      B: ${questionIndex.answers[1]}
    </label>
    <label for="answer3" class="answer">
      <input id="answer3" type="radio" name="answer" value="${questionIndex.answers[2]}" required> 
      C: ${questionIndex.answers[2]}
    </label>
    <label for="answer4" class="answer">
      <input id="answer4" type="radio" name="answer" value="${questionIndex.answers[3]}" required> 
      D: ${questionIndex.answers[3]}
    </label>

    <input class="submit-button" type="submit" value="Submit">
  </form>
</div>`;
}

// Generates the HTML String for the Correct Page
function generateCorrectPageString() {
  return `<div class="quiz-container">
  <h1>Correct!</h1>

  <img src="../imgs/correctpage-min.jpg" alt="Image of Crowd Cheering at Baseball Stadium"/>
 
  <p class="score">SCORE: ${STORE.score} / ${STORE.questionNumber}</p>

  <button class="next-button"> 
      <span class="button-label">Next</span>
  </button>
</div>`;
}

// Generates the HTML String for the Wrong Page
function generateWrongPageString() {
  return `<div class="quiz-container">
  <h1>Incorrect!</h1>

  <img src="../imgs/wrongpage-min.png" alt="Image of Baseball player frowning"/>
 
  <p class="correct-answer">The Correct answer was ${STORE.questions[STORE.questionNumber - 1].correctAnswer}</p>

  <p class="score">SCORE: ${STORE.score} / ${STORE.questionNumber}</p>

  <button class="next-button"> 
      <span class="button-label">Next</span>
  </button>
</div>`;
}

// Generates the HTML String for the End Page
function generateEndPageString() {
  return `<div class="quiz-container">
  <h1>Game Over!</h1>

  <img src="../imgs/endpage-min.jpg" alt="Image of Derek Jeter saying his farewells"/>
 
  <h2>Answers Correct: ${STORE.score}</h2>
  <h2>Answers Incorrect: ${STORE.questions.length - STORE.score}</h2>

  <button class="again-button">
      <span class="button-label">Play Again?</span>
  </button>
</div>`;
}

// Renders the Page with the given HTML String
function render(page) {
  $('main').html(page);
}

// Main function
function main() {
  render(generateStartPageString());
  handleStartQuiz();
  handleQuestionSubmit();
  handleNextQuestion();
  handlePlayAgain();
}

$(main);