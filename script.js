(function(){ //IIFE START - So basically what I learned, is that other programer can paste this code and it won't interfere with his code variables etc.
//That s user defined object type///////////////////
function Question(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}
//////Object prototype question and answers//////////////////////////////////
Question.prototype.outputAnswers = function()
{
    console.log(questions[random].question);
    for (i=0; i<questions[random].answers.length; i++)
    {
        console.log(i+': '+questions[random].answers[i]);
    }
}
//////Object prototype Answer Checking//////////////////////////////////
Question.prototype.checkReply = function ()
{
    let reply = parseInt(prompt('What is your answer? 0 or 1 or 2?'));
    if (reply === questions[random].correctAnswer){
        console.log('Great! That\'s a good answer!');
    }
    else{
        console.log('That\'s a wrong answer!');
    } 
}
//My instances of object///////////////////////////////
let q1 = new Question('What is 2+2?',['4','2', '999'] , 0);
let q2 = new Question('What is the point of life?', ['Procrastination','Breeding','Playing minecraft'], 1);
let q3 = new Question('Who doeas meow moew?', ['A dog','A cat','An apple'], 1);
//////////////array, random and execution//////////////////////////////////////////////////////////////////////////////////////////////////
let questions = [q1,q2,q3];
let random = Math.floor(Math.random()*questions.length);
questions[random].outputAnswers();
questions[random].checkReply();
/////////////////////////////////////////////////////////////////////////
})(); //IIFE END





/* That s worse version but works
(function(){ //IIFE START
/////////Random question////////////////////////////////////////
let random = Math.abs(Math.round(Math.random()*3-1)); ////////////
/////Questions roulette/////////////////////////////////////
function answers(){
    if (random === 0){
        console.log('0: It\'s 4 ');
        console.log('1: It\'s 2 ');
        console.log('2: It\'s 999');
    }
    else if (random === 1){
        console.log('0: Procrastination');
        console.log('1: Breeding ');
        console.log('2: Playing minecraft');
    }
    else if (random === 2){
        console.log('0: A dog! ');
        console.log('1: A cat! ');
        console.log('2: An apple!');
    }
    else {
        console.log('error');
    }
}
let questions = ['What is 2+2?', 'What is the point of life?', 'Who doeas meow moew?'];
console.log(questions[random]);
answers(random);
////////////////Good Answers//////////////////////////////
let goodAnswers = ['0','1','1'];
////////////Answer Checking//////////////////////////////////////
let reply = prompt('What is your answer? 0 or 1 or 2?');
function checkReply(){
    if (reply === goodAnswers[random]){
        console.log('Great! That\'s a good answer!');
    }
    else{
        console.log('That\'s a wrong answer!');
    }
}
checkReply();
/////////////////////////////////////////////////////////////
})(); //IIFE END
*/



/*
0.
console.log('What is 2+2?');
console.log('0: It\'s 4 ');
console.log('1: It\'s 2 ');
console.log('2: It\'s 999');
1.
console.log('What is the point of life?');
console.log('0: Procrastination');
console.log('1: Breeding ');
console.log('2: Playing minecraft');
2.
console.log('Who doeas meow moew?');
console.log('0: A dog! ');
console.log('1: A cat! ');
console.log('2: An apple!');
*/


//zbiór pytań, zbiór odp do każdego pytania.
//losowanie randomowego pytania
//zebranie odpowiedzi
//jeśli odp jest równa dobraj odpowiedzi wyświetl "dobrze"