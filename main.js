// handler product change
function handelProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-items-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productNewCount + 1;
    }
    if (isIncrease == false && productNewCount > 0) {
        productNewCount = productNewCount - 1;
    }
    productInput.value = productNewCount < 10 ? '0' + productNewCount : productNewCount;
    let totalPrice = 0;
    if (product == 'phone') {
        totalPrice = productNewCount * 1219;
    } else {
        totalPrice = productNewCount * 59;
    }
    document.getElementById(product + '-price').innerText = totalPrice;
    calculateTotalAmount();
}

// input handler when keypress 
function inputItemCalculate(event){
    
    let productCount = parseInt(event.target.value);
    if(event.target.value == ""){
        productCount = 0;
        document.getElementById(event.target.id).value = 0;
    }
    if(event.target.id == 'phone-items-count'){
        const phonePrice = productCount * 1219;
        document.getElementById('phone-price').innerText = phonePrice;
    }else{
        const coverPrice = productCount * 59;
        document.getElementById('cover-price').innerText = coverPrice;
    }
    calculateTotalAmount();
}

// total amount calculate
function calculateTotalAmount() {
    phoneAmount = getInputValue('phone-price');
    coverAmount = getInputValue('cover-price');

    const subtotalAmount = phoneAmount  + coverAmount ;
    document.getElementById('subtotal-amount').innerText = subtotalAmount;
    
    const texAmount = subtotalAmount * .05;
    document.getElementById('tex-amount').innerText = Math.round(texAmount);

    const totalAmount = subtotalAmount + texAmount;
    document.getElementById('total-amount').innerText = Math.round(totalAmount);
}

// get input value
function getInputValue(product) {
    const productInput = document.getElementById(product);
    const productAmount = parseInt(productInput.innerText);
    return productAmount;
}


