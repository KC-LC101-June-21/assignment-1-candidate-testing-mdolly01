const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let question2 = "True or false: 5 kilometer = 5000 meters? ";
let question3 = "(5 + 3)/2 * 10 = ?";
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?";
let question5 = "What is the minimum crew size for the ISS?";
let correctAnswer = 'Sally Ride';
let correctAnswer1 = 'True';
let correctAnswer2 = '40';
let correctAnswer3 = 'Trajectory';
let correctAnswer4 = '3';
let candidateAnswer = '';
let questions = [question, 'True or false: 5 kilometer = 5000 meters? ', '(5 + 3)/2 * 10 = ?', '[\'Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2?', 'What is the minimum crew size for the ISS?'];
let correctAnswers = [correctAnswer.toUpperCase(), correctAnswer1.toUpperCase(), correctAnswer2.toUpperCase(), correctAnswer3.toUpperCase(), correctAnswer4.toUpperCase()];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name candidate?: \n")
}

function askQuestion(question) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question)
  for(i = 0; i < questions.length; i++) {
    let answer = input.question(`${i + 1}) ${questions[i]}`);
    candidateAnswers.push(answer);
  }
  return candidateAnswer
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade = 0;
  for(i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i].toUpperCase() === candidateAnswers[i].toUpperCase()) {
    grade += 1
    } 
  }
  
  if (grade > 3) {
    passOrFail = "PASSED"
  } else {
    passOrFail = "FAILED"
  }
  console.log(candidateName)
  for(i = 0; i < questions.length; i++) {
    console.log("\n")
    console.log(`${i + 1}) ${questions[i]}`);
    console.log("Your answer: " + candidateAnswers[i] + "\n" + "Correct answer: " + correctAnswers[i])
  }

  console.log("\n" + ">>> Overall Grade: " + (grade / 5) * 100 + "% (" + grade + " of 5 responses correct)" + "\n" + ">>> Status:" + passOrFail + " <<<")
  return candidateAnswers;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //

  askQuestion();
  grade = gradeQuiz(this.candidateAnswers);
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