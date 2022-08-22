function calculatePlayerTotalValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);
    const totalValue = inputFieldValue * 5;
    return totalValue;
}
function getValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);
    return inputFieldValue;
}
