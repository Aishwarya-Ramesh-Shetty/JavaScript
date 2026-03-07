let score = 0;
const displayScore = document.getElementById('displayScore');
const feedback = document.getElementById('displayFeedback');
const addScore = document.getElementById('addScore');

addScore.onclick = function(){
    console.log("Button clicked");
    score = score + 1;
    displayScore.textContent = score;
    if(score >=10 && score < 20){
        feedback.textContent = "Great job! Keep up the good work!";
    }
    else if(score >=20){
        feedback.textContent = "Excellent! You're doing amazing!";
    }
}
