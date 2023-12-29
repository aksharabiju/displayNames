const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let currentIndex = 0;

function updateNameDisplay() {
    const nameDisplay = document.getElementById('nameDisplay');
    nameDisplay.textContent = names[currentIndex];
}

function showNext() {
    currentIndex = (currentIndex + 1) % names.length;
    updateNameDisplay();
}

function showPrevious() {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    updateNameDisplay();
}
updateNameDisplay();
