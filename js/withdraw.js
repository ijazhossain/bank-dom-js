document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawAmount = parseFloat(withdrawField.value);
    if (isNaN(withdrawAmount)) {
        return;
    }
    const totalField = document.getElementById('total-balance');
    // console.log(typeof withdrawAmount)
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
    // console.log(typeof withdrawTotalElement.innerText)
    const currentWithdraw = withdrawAmount;
    const withdrawTotal = previousWithdrawTotal + currentWithdraw;
    const previousBalance = parseFloat(totalField.innerText);
    if (withdrawTotal > previousBalance) {
        alert('you can not withdraw more than your balance');
        return;
    }
    withdrawTotalElement.innerText = withdrawTotal;
    withdrawField.value = '';

    const newBalance = previousBalance - withdrawAmount;
    totalField.innerText = newBalance;
    totalField.value = '';
})