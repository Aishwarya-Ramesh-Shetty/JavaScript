let total = 0;

const billAmount = document.getElementById("billAmount");
const tipPercentage = document.getElementById("tipAmount");
const totalPeople = document.getElementById("totalPeople")
const calculateButton = document.getElementById("calculateTip");

calculateButton.addEventListener("click", CalculateTip);

function CalculateTip(){
    let bill = Number(billAmount.value);
    let tip = Number(tipPercentage.value);
    let people = Number(totalPeople.value);
    if(isNaN(bill) || isNaN(people) || bill <=0  || people <=0){
        alert("Please enter valid values for bill, tip percentage, and number of people.");
        return;
    }
    let totalTip = (bill * tip) / 100;
    let totalBill = bill + totalTip;
    let billperPerson = totalBill / people;

    
    document.getElementById('displayTotal').textContent = `Total Bill: $${totalBill.toFixed(2)}`;

    
    document.getElementById('displayPerPersonBill').textContent = `Bill per Person: $${billperPerson.toFixed(2)}`;

 
}