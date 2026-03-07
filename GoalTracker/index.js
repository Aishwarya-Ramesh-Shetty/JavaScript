const goalList = document.getElementById('goalList');
const inputGoal = document.getElementById('inputGoal');

addGoal.onclick = function(){
    
    const goal = inputGoal.value;

    if(goal == " ") return;

    const newLi = document.createElement('li');
    newLi.textContent = goal;

    newLi.onclick = function(){
        newLi.remove();
    }
    goalList.appendChild(newLi);

    inputGoal.value = " ";
}