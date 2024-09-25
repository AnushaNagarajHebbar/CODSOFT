let display = document.getElementById('display');

// Append number or operator to the display
function appendNumber(number) {
    display.value += number;
}

// Append operators (+, -, *, /)
function appendOperator(operator) {
    // Prevent entering multiple operators consecutively
    if (display.value !== '' && !isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
