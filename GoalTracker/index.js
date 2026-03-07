const goalList = document.getElementById('goalList');
const inputGoal = document.getElementById('inputGoal');

addGoal.onclick = function(){
    
    const goal = inputGoal.value;

    if(goal == " ") return;

    const newLi = document.createElement('li');
    newLi.textContent = goal;

    newLi.onclick = function(){
        if(newLi.style.textDecoration === "line-through"){
            newLi.style.textDecoration = "none";
            newLi.style.color = 'black';
        }
        else{
            newLi.style.textDecoration = "line-through";
            newLi.style.color = 'gray';
        }
        
        
    }
    goalList.appendChild(newLi);

    inputGoal.value = " ";
}