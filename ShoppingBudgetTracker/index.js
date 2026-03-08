let total = 0;

const item = document.getElementById('item');
const price = document.getElementById('price');

function AddItem(){
    const itemPrice = Number(price.value);
    const itemName = item.value.trim();
    if(itemName === " " || isNaN(itemPrice) || itemPrice < 0){
        alert("Please enter a valid item name and price.");
        return;
    }
    total = total + itemPrice;

    const newLi = document.createElement('li');
    newLi.textContent = itemName + " - $" + itemPrice.toFixed(2);
    document.getElementById('displayItems').appendChild(newLi);


    newLi.onclick = function(){
        

        if(newLi.style.textDecoration != "line-through"){
            newLi.style.textDecoration = "line-through";
            newLi.style.color = 'gray';
            total = total - itemPrice;
        }
        else{
            newLi.style.textDecoration = "none";
            newLi.style.color = 'black';
            total = total + itemPrice;
        }
        document.getElementById('displayTotal').textContent = "Total: $" + total;
    }

    document.getElementById('displayTotal').textContent = "Total: $" + total;

    item.value = "";
    price.value = "";
}