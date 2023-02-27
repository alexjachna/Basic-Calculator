var displayVal = document.getElementsByName('display')[0];

insertNumber = (num) => {

    if (['/', '*', '+', '-'].includes(displayVal.value.slice(-1))) {
        displayVal.value += num;
    }
    else {
        if (eval(displayVal.value)) {
            displayVal.value += num;
        }
        else {
            clearDisplay();
            displayVal.value = num;
        }
    } 
}

clearDisplay = () => {
    displayVal.value = '';
}

deleteNumber = () => {
    displayVal.value = displayVal.value.slice(0, -1)
}

evalDisplay = () => {
    displayVal.value = eval(displayVal.value);
}