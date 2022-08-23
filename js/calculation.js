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
const x_y = 0;

function calculatePlayerTotalValue() {
    const totalPlayer = playerList.querySelectorAll('li').length;
    const expense = parseFloat(perPlayer.value) * totalPlayer;
    playerExpenseTotal.textContent = expense;
    return expense;
}

document.getElementById('player-value-calculate').addEventListener('click', calculatePlayerTotalValue);

document.getElementById('calculate-total').addEventListener('click', function () {
    const perManagerString = perManager.value;
    const managerInputFieldValue = parseFloat(perManagerString);
    const perCoachString = perCoach.value;
    const coachinputFieldValue = parseFloat(perCoachString);
    const totalPlayerlength = playerList.querySelectorAll('li').length;
    const allPlayersCost = parseFloat(perPlayer.value) * totalPlayerlength;
    const managerCoachTotalExpenses = managerInputFieldValue + coachinputFieldValue + allPlayersCost;
    innerTextValueOfTotalExpenses.innerText = managerCoachTotalExpenses
    
});

