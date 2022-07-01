function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
};

function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

function updateTotal(fieldId, amoount){
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);
    const previousTotal = getInnerTextValue(fieldId);  // getInnerTextValue() this function use here.
    const newTotal = previousTotal + amoount;
    document.getElementById(fieldId).innerText = newTotal;
};

function updateBalance(amoount, isAdding){
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInText);
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if(isAdding == true){
        newBalance = previousBalance + amoount;
    }
    else{
        newBalance = previousBalance - amoount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}

// update deposite
document.getElementById('deposite-button').addEventListener('click', function(){
    const amoount =  getInputValue('deposite-input');
    if(amoount > 0){
        updateTotal('deposite-total', amoount);
        updateBalance(amoount, true);
    }
});

// handle withdraw 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amoount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if(amoount > 0 && amoount <= balance){
        updateTotal('withdraw-total', amoount);
        updateBalance(amoount, false);
    }
})