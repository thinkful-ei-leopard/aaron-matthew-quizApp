'use strict';

const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'How many innings are in a normal length MLB game?',
      answers: [
        '6',
        '10',
        '9',
        '15'
      ],
      correctAnswer: '9'
    },
    {
      question: 'How many players are on the field during a baseball game?',
      answers: [
        '11',
        '12',
        '7',
        '9'
      ],
      correctAnswer: '9'
    },
    {
      question: 'How many strikes does a batter get per at-bat?',
      answers: [
        '5',
        '8',
        '3',
        '2'
      ],
      correctAnswer: '3'
    },
    {
      question: 'What is the term for when a ball is hit over the outfield fence?',
      answers: [
        'Touchdown',
        'Home Run',
        'Slam Dunk',
        'Birdie'
      ],
      correctAnswer: 'Home Run'
    },
    {
      question: 'What does MLB stand for?',
      answers: [
        'Major League Baseball',
        'My Little Batter',
        'Matt Likes Baseball',
        'Minor League Baseball'
      ],
      correctAnswer: 'Major League Baseball'
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
  