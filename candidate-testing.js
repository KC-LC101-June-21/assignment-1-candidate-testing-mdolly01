const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name candidate?: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  questionOne = input.question("\n" + "Who was the first American woman in space? ")

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  score = 0;
  correctAnswerOne = "Sally Ride";
  correctAnswerTwo = "True";
  correctAnswerThree = "40";
  correctAnswerFour = "Trajectory";
  correctAnswerFive = "3"

  let grade;
  if (questionOne === "Sally Ride"){
    console.log("Your anwser: " + questionOne + "\n" + "Correct answer: " + correctAnswerOne)
  } else {
    console.log("Your anwser: " + questionOne + "\n" + "Correct anwser: " + correctAnswerOne)
  }
  questionTwo = input.question("\n" + "True or false: 5 kilometer = 5000 meters? ")
  if (questionTwo === "True"){
    console.log("Your anwser: " + questionTwo + "\n" + "Correct answer: " + correctAnswerTwo)
  } else {
    console.log("\n" + "Your anwser: " + questionTwo + "\n" + "Correct anwser: " + correctAnswerTwo)
  }
  questionThree = input.question("\n" + "(5 + 3)/2 * 10 = ? ")
  if (questionThree === "40"){
    console.log("\n" + "Your anwser: " + questionThree + "\n" + "Correct answer: " + correctAnswerThree)
  } else {
    console.log("\n" + "Your anwser: " + questionThree + "\n" + "Correct anwser: " + correctAnswerThree)
    }
    questionFour = input.question("\n" + "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ")
  if (questionFour === "40"){
    console.log("\n" + "Your anwser: " + questionFour + "\n" + "Correct answer: " + correctAnswerFour)
  } else {
    console.log("\n" + "Your anwser: " + questionFour + "\n" + "Correct anwser: " + correctAnswerFour)
    }
  questionFive = input.question("\n" + "What is the minimum crew size for the ISS? ")
  if (questionFive === "3"){
    console.log("\n" + "Your anwser: " + questionFive + "\n" + "Correct answer: " + correctAnswerFive)
  } else {
    console.log("\n" + "Your anwser: " + questionFive + "\n" + "Correct anwser: " + correctAnswerFive)
    }

  if (questionOne === correctAnswerOne) {
    score += 1
  }  else {
    score += 0
  }
  if (questionTwo === correctAnswerTwo) {
    score += 1
  }  else {
    score += 0
  }
  if (questionThree === correctAnswerThree) {
    score += 1
  }  else {
    score += 0
  }
  if (questionFour === correctAnswerFour) {
    score += 1
  }  else {
    score += 0
  }
  if (questionFive === correctAnswerFive) {
    score += 1
  }  else {
    score += 0
  }
  if (score > 3) {
    passOrFail = "PASSED"
  } else {
    passOrFail = "FAILED"
  }
  console.log("\n" + ">>> Overall Grade: " + (score / 5) * 100 + "% (" + score + " of 5 responses correct)" + "\n" + ">>> Status:" + passOrFail + " <<<")

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};