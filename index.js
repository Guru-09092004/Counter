// Get the elements
const numberLabel = document.getElementById("number");
const decreaseBtn = document.getElementById("dbtn");
const resetBtn = document.getElementById("rbtn");
const increaseBtn = document.getElementById("ibtn");

// Initial count value
let count = 0;

// Update the number label with the current count
function updateNumberLabel() {
  numberLabel.textContent = count;
}

// Event listener for the "Decrease" button
decreaseBtn.addEventListener("click", function () {
  count--;
  updateNumberLabel();
});

// Event listener for the "Reset" button
resetBtn.addEventListener("click", function () {
  count = 0;
  updateNumberLabel();
});

// Event listener for the "Increase" button
increaseBtn.addEventListener("click", function () {
  count++;
  updateNumberLabel();
});

// Initial update of the number label
updateNumberLabel();
    