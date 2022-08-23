const selectPlayers = document.querySelectorAll('.player-card');
const playerList = document.querySelector('.player-list');

selectPlayers.forEach((player) => {
    const selectButton = player.querySelector('.player-choose-btn');
    const playerName = player.querySelector('.player-name');
    selectButton.addEventListener('click', () => {
        
        if (playerList.querySelectorAll('li').length < 5) {
            selectButton.disabled = true;
            selectButton.classList.add('bg-gray-400');
            const selectedPlayer = document.createElement('li');
            selectedPlayer.innerHTML = playerName.textContent;
            selectedPlayer.classList.add('m-6');
            playerList.appendChild(selectedPlayer);
        }
        else {
            alert('Reached maximum players!!');
        }
    })
})
const perPlayer = document.getElementById('per-player-value');
const playerExpenseTotal = document.querySelector('#player-expenses-total');
const perManager = document.getElementById('manager-value');
const perCoach = document.getElementById('coach-value');
const calculateTotalExpences = document.querySelector('#calculate-total');
const innerTextValueOfTotalExpenses = document.getElementById('total-amount');
function isNegative(input) {
    if (parseFloat(input) >= 0) {
        return false;
    }
    else {
        return true;
    }
}
function calculatePlayerTotalValue() {
    const totalPlayer = playerList.querySelectorAll('li').length;
    const checkPlayerValueNegative = isNegative(perPlayer.value);
    if (checkPlayerValueNegative == false) {
        const expense = parseFloat(perPlayer.value) * totalPlayer;
        playerExpenseTotal.textContent = expense;
        return expense;
    }
    else {
        alert('Enter valid player expenses!!')
        return '';
    }
    
}
document.getElementById('player-value-calculate').addEventListener('click', calculatePlayerTotalValue);
document.getElementById('calculate-total').addEventListener('click', function () {
    const perManagerString = perManager.value;
    const checkManagerValueNegative = isNegative(perManager.value);
    if (checkManagerValueNegative === true) {
        alert('Enter valid manager expenses!!')
    }
    const managerInputFieldValue = parseFloat(perManagerString);
    const perCoachString = perCoach.value;
    const checkCoachValueNegative = isNegative(perCoach.value);
    if (checkCoachValueNegative === true) {
        alert('Enter valid coach expenses!!')
    }
    const coachinputFieldValue = parseFloat(perCoachString);
    if (checkManagerValueNegative === false && checkCoachValueNegative === false) {
        const totalPlayerlength = playerList.querySelectorAll('li').length;
        const allPlayersCost = parseFloat(perPlayer.value) * totalPlayerlength;
        const managerCoachTotalExpenses = managerInputFieldValue + coachinputFieldValue + allPlayersCost;
        innerTextValueOfTotalExpenses.innerText = managerCoachTotalExpenses;
    }
});



