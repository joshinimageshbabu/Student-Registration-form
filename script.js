// Get the result input field
const resultField = document.getElementById("Result");

// Function to display numbers and operators in the result field
function display(value) {
    resultField.value += value;
}

// Function to clear the result field
function clearResult() {
    resultField.value = "";
}

// Function to delete the last character from the result field
function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

// Function to calculate percentage
function percentage() {
    resultField.value = eval(resultField.value) / 100;
}

// Function to perform the actual calculation
function calculate() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = "Error";
    }
}

// Disable right-click context menu on the calculator
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});
