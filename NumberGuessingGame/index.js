const minNum = 50;
const maxNum = 100;
const answer=Math.floor(Math.random() * (maxNum - minNum + 1))+minNum;


// console.log(answer)

let guess;
let played = true;
let attempts = 0;
while(played){
    guess = window.prompt(`Guess the number between ${minNum}-${maxNum}:`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert(`${guess} is not a number`)
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`${guess} is not within the range`)
    }
    else{
        attempts++;
        if(guess > answer){
            window.alert(`${guess} is big`);
        }
        else if(guess < answer){
            window.alert(`${guess} is small`);
        }
        else{
            window.alert(`${guess} is correct`);
            played = false;
        }
    }
    
}

