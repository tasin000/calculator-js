let inputField = document.getElementById('number-input-box');

insert = (val) => {
    let existingNumber = inputField.value;
    inputField.value = existingNumber + val;
}

total = () => {
    let totalValue = eval(inputField.value);
    inputField.value = totalValue;
}

document.getElementById('clear-btn').addEventListener('click', () => {
    inputField.value = '';
})