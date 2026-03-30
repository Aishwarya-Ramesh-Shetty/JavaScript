const myCheckbox = document.getElementById('myCheckbox');
const submitBtn = document.getElementById('submitBtn');
const visaBtn = document.getElementById('visa');
const mastercardBtn = document.getElementById('mastercard');
const amexBtn = document.getElementById('amex');
const subresult = document.getElementById('subresult');
const payresult = document.getElementById('payresult');

submitBtn.onclick = function(){
    if(myCheckbox.checked){
        subresult.textContent = `You are subscribed`;
    }
    if(visaBtn.checked){
        payresult.textContent = `You have selected Visa`;
    }
    else if(mastercardBtn.checked){
        payresult.textContent = `You have selected Mastercard`;
    }
    else if(amexBtn.checked){
        payresult.textContent = `You have selected Amex`;
    }
    else{
        payresult.textContent = `No payment method selected`;
    }
}