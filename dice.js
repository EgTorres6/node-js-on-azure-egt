function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
function rollDice() {
    const diceValues = [];
    for (let i = 1; i <= 5; i++) {
        diceValues.push(getRandomNumber());
    }
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`dice${i}`).textContent = diceValues[i - 1];
    }
}
window.onload = function() {
    rollDice();
    document.getElementById("rollButton").focus();
};
