document.getElementById('player-value-calculate').addEventListener('click', function () {
    const value = calculatePlayerTotalValue('per-player-value');

    const innerField = document.getElementById('player-expenses-total');
    const innerFieldValueString = innerField.innerText;
    const innerFieldValue = parseInt(innerFieldValueString);
    
    const playerTotalValue = value + innerFieldValue;
    const innerTextValue = document.getElementById('player-expenses-total');
    innerTextValue.innerText = playerTotalValue;
    const calculateValue = innerTextValue.innerText;
})
document.getElementById('calculate-total').addEventListener('click', function () {
    const managerValue = getValueById('manager-value');
    const coachValue = getValueById('coach-value');
    
    const totalExpenses = managerValue + coachValue;
    const innerTextValue = document.getElementById('total-amount');
    innerTextValue.innerText = totalExpenses;
    const allTotal = innerTextValue.innerText;
})