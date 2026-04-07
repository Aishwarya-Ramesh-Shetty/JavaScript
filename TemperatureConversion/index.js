const temperature = document.getElementById("temperature");
const submit = document.getElementById("submit");
const degree = document.getElementById("degree");
const farenheit = document.getElementById("farenheit");
const answer = document.getElementById("answer");

submit.onclick = function submitForm(event){
    event.preventDefault();
    if(degree.checked){
        const result = degreeToFarenheit(Number(temperature.value)).toFixed(2);
        answer.textContent = `Temperature in Farenheit is ${result} F`;

    }
    else if(farenheit.checked){
        const result = farenheitToDegree(Number(temperature.value)).toFixed(2);
         answer.textContent = `Temperature in Celsius is ${result} C`;
    }
    else{
         answer.textContent = `Choose one option for conversion`;
    }
}


function degreeToFarenheit(temperature){
    const result = (temperature * (9/5)) + 32;
    return result;
}

function farenheitToDegree(temperature){
    const result = (temperature - 32) * (5/9);
    return result;
}