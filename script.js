
function toggleBullet(element) {
    if (element.classList.contains('bullet-button')) {
        element.classList.toggle('clicked');
    } else {
        const tickIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
        stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
        class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        
        if (element.querySelector('.tick-icon')) {
            element.removeChild(element.querySelector('.tick-icon'));
        } else {
            const tick = document.createElement('div');
            tick.classList.add('tick-icon');
            tick.innerHTML = tickIcon;
            element.appendChild(tick);
        }
    }
}

function increase() {
    var numberDisplay = document.getElementById("numberDisplay");
    var currentNumber = parseInt(numberDisplay.textContent);
    numberDisplay.textContent = currentNumber + 1;
}

function decrease() {
    var numberDisplay = document.getElementById("numberDisplay");
    var currentNumber = parseInt(numberDisplay.textContent);
    if (currentNumber > 1) {
        numberDisplay.textContent = currentNumber - 1;
    }
}


document.getElementById("addtocart").addEventListener("click", function() {
    // Create a new div element for the message
    var messageDiv = document.createElement("div");
    messageDiv.textContent = "Product added to cart";
    messageDiv.classList.add("message");

    // Append the message div to the document body
    document.body.appendChild(messageDiv);

    // Remove the message after 3 seconds
    setTimeout(function() {
        messageDiv.remove();
    }, 3000);
});
