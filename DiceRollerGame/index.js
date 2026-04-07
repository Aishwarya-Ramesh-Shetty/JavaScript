


let answer = document.getElementById("answer");
let roll = document.getElementById("roll");
let img = document.getElementById("displayimg")

roll.onclick = function rollDice(){
    let number = Math.floor(Math.random() * 6)+1;

    img.src = `./images/dice${number}.png`
    img.style.display = "block";
    answer.value = number;

}


// roll.onclick = function rollDice(){
//     let number = Math.floor(Math.random() * 6)+1;

//     document.getElementById("one").style.display = "none";
//     document.getElementById("two").style.display = "none";
//     document.getElementById("three").style.display = "none";
//     document.getElementById("four").style.display = "none";
//     document.getElementById("five").style.display = "none";
//     document.getElementById("six").style.display = "none";

//     switch(number){
//         case 1 : let img1 = document.getElementById("one");
//                 img1.style.display = "block";
                
//                 break;
//         case 2 : let img2 = document.getElementById("two");
//                 img2.style.display = "block";
                
//                 break;
//         case 3 : let img3 = document.getElementById("three");
//                 img3.style.display = "block";
                
//                 break;
//         case 4 : let img4 = document.getElementById("four");
//                 img4.style.display = "block";
                
//                 break;
//         case 5 : let img5 = document.getElementById("five");
//                 img5.style.display = "block";
                
//                 break;
//         case 6 : let img6 = document.getElementById("six");
//                 img6.style.display = "block";
                
//                 break;
//         default :
//                 console.log("error occured")
//                 break;
//     }
//     answer.value = number;
// }