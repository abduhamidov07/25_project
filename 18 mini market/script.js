let count = document.querySelector('#count')

 function btnElem() {
    let currentNumber = parseInt(count.innerHTML);
    let newNumber = currentNumber + 1;
    count.innerHTML = newNumber;
    if (newNumber > 0) {
        count.innerHTML +=
    `
    <button type="button" id="cancel-btn" onclick="cancel()">x</button>
    `;
    }
};

function cancel() {
    count.innerHTML = 0;
}
