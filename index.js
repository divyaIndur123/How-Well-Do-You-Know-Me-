/**
 * Module required
 */
 const readLineSync = require('readline-sync');

 /**
  *  greeting User
  */
 const username  =readLineSync.question('Hey Buddy ! May I know your Name? ');
 console.log('Welcome '+ username+'\n');

/**
 * value Storage
 */
var questionList = [
  {
    question: "What is my last name?",
    correctAnswer: "indur"
  },
  {
    question: "In which month my birthday falls on?",
    correctAnswer: "august"
  },
    {
    question: "What am I insecure about?",
    correctAnswer: "nothing"
  },
    {
    question: "What is my favorite food? ",
    correctAnswer: "panipuri"
  },
    {
    question: "What food do I hate? ",
    correctAnswer: "mutton"
  },
    {
    question: "What's something that always cheers me up when I'm sad?",
    correctAnswer: "dance"
  },
  {
    question: "If I could travel anywhere, where would I go? ",
    correctAnswer: "himalaya"
  },
   {
    question: "What is my favorite song or artist? ",
    correctAnswer: "KK"
  },
  {
    question: "What is my mother name?",
    correctAnswer: "gouramma"
  },

  {
    question: "If I could be any animal, what would it be?",
    correctAnswer: "dolphin"
  },
 {
    question: "Am I more of an extrovert or an introvert?",
    correctAnswer: "both"
  },
  {
    question: "My Favorite Animal?",
    correctAnswer: "panda"
  },
  {
    question: "What's my favorite season? ",
    correctAnswer: "rainy"
  },
  {
    question: "What's my favrourite fruit?",
    correctAnswer: "litchi"
  },
  {
    question: "Who is my best friend?",
    correctAnswer: "krishna"
  },
  {
    question: "What is my favorite color?",
    correctAnswer: "peach"
  }

  
];

var score =0;
/**
 * Processing
 */
function questionAndAnswer(answer, correctAnswer) {
    
  if(currentUserAns==currentCorrectAns){
       console.log("you are right :) ");
       score = score + 1;
        console.log('your current score is '+score+'\n');

     }else{
       console.log("You are wrong :( ");
       console.log('your current score is '+score+'\n')
       
     }
  
  }

/**
 * looping through storage
 */
for (var i = 0; i <= questionList.length - 1; i++) {
  
  var currentQuestion = questionList[i].question;

  // user Input
  userAnswer = readLineSync.question("Q. "+currentQuestion +" ");
  var currentCorrectAns = questionList[i].correctAnswer.toUpperCase();
  var currentUserAns = userAnswer.toUpperCase();

  questionAndAnswer(currentCorrectAns, currentUserAns);

}

/**
 * Final result / Output
 */
console.log('your final score is '+score);
console.log("Phir Milenge!! SAYONARA");
