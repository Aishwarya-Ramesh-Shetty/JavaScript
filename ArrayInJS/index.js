const grades = [2,15,23,35,43,50, 80, 70, 60, 50];
const list = document.getElementById("scoreList");
let total = 0;
for(let grade of grades){
    total += grade;
    if(grade >=50){
        const li = document.createElement('li');
        li.textContent =  `Grade: ${grade} - Pass`;
        list.appendChild(li);
        li.style.color = 'green';
    }
    else{
        const li = document.createElement('li');
        li.textContent = `Grade: ${grade} - Fail`;
        list.appendChild(li);
        li.style.color = 'red';
    }
}
let average = total / grades.length;
const avgValue = document.getElementById("avgValue");
const displayAvg = () =>{
    avgValue.textContent = `The average grade is ${average}`;
}