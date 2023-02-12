document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-amount');
    const depositAmount = parseFloat(depositField.value);
    if (isNaN(depositAmount)) {
        return;
    }
    // console.log(typeof depositAmount)
    const depositTotalElement = document.getElementById('deposit-total');
    let previousDepositTotal = parseFloat(depositTotalElement.innerText);
    // console.log(typeof depositTotalElement.innerText)
    const currentDeposit = depositAmount;
    const depositTotal = previousDepositTotal + currentDeposit;
    depositTotalElement.innerText = depositTotal;
    depositField.value = '';

    const totalField = document.getElementById('total-balance');
    const previousBalance = parseFloat(totalField.innerText);
    const newBalance = depositAmount + previousBalance;
    totalField.innerText = newBalance;
    totalField.value = '';
})