const btnDepo = document.getElementById('btnDepo');
let totalAmount = 0;
function getInputValueById(inputId){
    const inputElement = document.getElementById(inputId);
    const inputValue = inputElement.value;
    const numToConvert = parseInt(inputValue);
    return numToConvert;
}


btnDepo.addEventListener('click', function(){
    const depositInputField = getInputValueById('input-depo');
    const depositSpan = document.getElementById('depo-span');
    totalAmount += depositInputField;
    depositSpan.innerText = totalAmount;
    const balanceSpan = document.getElementById('balance-span');
    const balance = parseInt(balanceSpan.innerText);
    const currentBalance = balance + depositInputField;
    balanceSpan.innerText = currentBalance;
})

const btnWithdraw = document.getElementById('btn-withdraw');
btnWithdraw.addEventListener('click', function(){
    const withdrawInputField = getInputValueById('input-with');
    const withdrawSpan = document.getElementById('with-span');
    totalAmount += withdrawInputField;
    withdrawSpan.innerText = totalAmount;
    const balanceSpan = document.getElementById('balance-span');
    const balance = parseInt(balanceSpan.innerText);
    const currentBalance = balance - withdrawInputField;
    balanceSpan.innerText = currentBalance;
})