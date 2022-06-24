// handle deposite button event 
document.getElementById('deposite-button').addEventListener('click', function(){
    
    // get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeText);
    
    // update deposite total
    const depositeTotal = document.getElementById('deposite-total');
    
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);

    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;

    depositeTotal.innerText = newDepositeTotal;
    // End


    
    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear the deposite input feild
    depositeInput.value = '';
});


// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrowAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrowAmountText);

    
    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;



    // update balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;


    // clear the withdraw input field
    withdrawInput.value = '';
})