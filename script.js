'use strict';
const  myNo=document.querySelector('.guess').textContent;
const questionMark=document.querySelector('.number');
const btn=document.querySelector('.check');
const scores=document.querySelector('.score');
const highSc=document.querySelector('.highscore');
function randomNo(min,max){
    return 
}

let randomGuess=Math.trunc(Math.random() * 20) + 1;
console.log(randomGuess);
btn.addEventListener('click', function () {
    const guessValue = Number(document.querySelector('.guess').value);
    document.querySelector('.message').textContent='🎉 Correct Number!';
    if (guessValue === randomGuess) {
      questionMark.textContent = randomGuess;

      scores.textContent = guessValue;
      highSc.textContent = guessValue;
      var bodyElement = document.body;
      bodyElement.style.backgroundColor = "#00FF00";
    } else if (guessValue !== randomGuess) {
          if(scores.textContent>1){
            document.querySelector('.message').textContent =guessValue>randomGuess ? '📈 Too high!' : '📉 Too low!';
            scores.textContent--;
            document.querySelector('.score').textContent =  scores.textContent;
          }else{
          
                document.querySelector('.message').textContent = '💥 You lost the game!';
                // displayMessage('💥 You lost the game!');
                scores.textContent = 0;
            
          }
    }
   
});


document.querySelector('.again').addEventListener('click', function () {
    scores.textContent = 20;
    randomGuess = Math.trunc(Math.random() * 20) + 1;
  
    document.querySelector('.message').textContent = 'Start guessing...';
 
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });


