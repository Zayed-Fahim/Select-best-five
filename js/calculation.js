// // let flag = true;
// document.getElementById('player-value-calculate').addEventListener('click', function () {
//     const value = calculatePlayerTotalValue('per-player-value');
//     // console.log(value)
//     // if (isNaN(value) === '') {
//     //     flag = true;
//     //     alert('Please enter a valid player expenses!!');
//     // }
//     // if(flag == true) {
//         const innerFieldValue = seetTextValueById('player-expenses-total');
//         const playerTotalValue = value + innerFieldValue;
//         const innerTextValue = document.getElementById('player-expenses-total');
//         innerTextValue.innerText = playerTotalValue;
//         const calculateValue = innerTextValue.innerText;
//         // flag = false;
//     // }
// })
// document.getElementById('calculate-total').addEventListener('click', function () {
//     const managerValue = getValueById('manager-value');
//     const coachValue = getValueById('coach-value');
//     const totalPlayerExpenses = calculatePlayerTotalValue('per-player-value');
//     const totalExpenses = managerValue + coachValue+totalPlayerExpenses;
//     const innerTextValue = document.getElementById('total-amount');
//     innerTextValue.innerText = totalExpenses;
//     const allTotal = innerTextValue.innerText;
// })
// document.getElementsByClassName('player-choose-btn').addEventListener('click', function () {
    
// })
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


function calculatePlayerTotalValue() {
    const totalPlayer = playerList.querySelectorAll('li').length;
    const expense = parseInt(perPlayer.value) * totalPlayer;
    playerExpenseTotal.textContent = expense;
    perPlayer.value = '';
    return expense;
}

document.getElementById('player-value-calculate').addEventListener('click', calculatePlayerTotalValue);

document.getElementById('calculate-total').addEventListener('click', function () {
    
});

