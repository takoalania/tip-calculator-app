const bill = document.querySelector('.bill-input');
const people = document.querySelector('.people-input');
const button = document.querySelectorAll('.tip-button');
const tipAmount = document.querySelector('.tip-amount-value');
const totalAmount = document.querySelector('.total-amount-value');

button.forEach(function(item) {
    item.addEventListener('click', e => {
        e.preventDefault();
        const percentage = Number(item.innerText.slice(0,-1)) / 100;
        const billValue = Number(bill.value);
        const peopleNumber = Number(people.value);
        totalAmount.innerText = ((billValue + billValue * percentage) / peopleNumber).toFixed(2);
        tipAmount.innerText = ((billValue * percentage) / peopleNumber).toFixed(2);
    })
});