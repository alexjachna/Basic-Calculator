var displayVal = document.getElementsByName('display')[0];

insertNumber = (num) => {
    displayVal.value += num;
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