// iphone  increment decrement function call
//function(button id, count element id, phone price element id, pass per prise, set index for items );
incrementHandler('iphone-increment-btn', 'iphone-items-count', 'phone-price', 1219, 0);
decrementHandler('iphone-decrement-btn', 'iphone-items-count', 'phone-price', 1219, 0);

// cover increment decrement function call
//arguments(button id, count element id, phone price element id, pass per prise, set index for items );
incrementHandler('cover-increment-btn', 'cover-items-count', 'cover-price', 59, 1);
decrementHandler('cover-decrement-btn', 'cover-items-count', 'cover-price', 59, 1);


//assign default value for item count with array for different items
let count = [1, 1];

// increment handler 
function incrementHandler(btnId, countItemId, priceId, perPrice, itemId) {
    let totalPrice = perPrice;
    const incrementBtn = document.getElementById(btnId);
    const countItem = document.getElementById(countItemId);
    incrementBtn.addEventListener('click', function (event) {
        countItem.value = ++count[itemId];
        calculateSelfPrice(countItem, priceId, totalPrice, perPrice);
        calculateTotalPrice();
    })
}

// decrement handler  
function decrementHandler(btnId, countItemId, priceId, perPrice, itemId) {
    let totalPrice = perPrice;
    const incrementBtn = document.getElementById(btnId);
    const countItem = document.getElementById(countItemId);
    incrementBtn.addEventListener('click', function (event) {
        if (count[itemId] > 0) {
            countItem.value = --count[itemId];
            calculateSelfPrice(countItem, priceId, totalPrice, perPrice);
            calculateTotalPrice();
        }

    })
}

// key value set and calculate
function inputItemCalculate(event) {
    const countItem = event.target;
    console.log(event.target.id);
    if(countItem.id == 'iphone-items-count'){
        calculateSelfPrice(countItem, 'phone-price', 1219, 1219);
    }else{
        calculateSelfPrice(countItem, 'cover-price', 59, 59);
    }
    calculateTotalPrice();
}

//calculate self price 
function calculateSelfPrice(countItem, priceId, totalPrice, perPrice) {
    let countItemString = countItem.value;
    if(countItemString == ''){
        countItemString = '0';
    }
    const countItemNum = parseInt(countItemString);
    totalPrice = perPrice * countItemNum;
    const amount = document.getElementById(priceId);
    amount.innerHTML = totalPrice;
}

// calculate total price
function calculateTotalPrice() {
    const totalPhoneAmount = document.getElementById('phone-price').innerText;
    const totalPhoneAmountNum = parseInt(totalPhoneAmount);

    const totalCoverAmount = document.getElementById('cover-price').innerText;
    const totalCoverAmountNum = parseInt(totalCoverAmount);

    const subtotalAmount = totalPhoneAmountNum + totalCoverAmountNum;
    document.getElementById('subtotal-amount').innerHTML = subtotalAmount;

    const texAmount = Math.round(subtotalAmount * .05);// for 5 % tax 
    document.getElementById('tex-amount').innerText = texAmount;

    document.getElementById('total-amount').innerHTML = subtotalAmount + texAmount;
}