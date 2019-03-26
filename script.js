// getting the number element in the DOM
const numElem = document.getElementById('num');

// adding a CUSTOM event on the number element
numElem.addEventListener('numAndColChange', function(e) {
    // to change the number of the element
    numElem.textContent = e.detail.number;
    // to change the color of the elemert
    numElem.style.color = e.detail.textColor;
    // to change the bg-color of the elemert
    numElem.style.backgroundColor = e.detail.bgColor;
});

// making the CUSTOM event
function changeNumAndCol(n, c, b) {
    const event = new CustomEvent('numAndColChange', {
        detail: {
            number: n,
            textColor: c,
            bgColor: b
        }
    });

    // displatching the newly created CUSTOM event / making it availble for use in JS
    numElem.dispatchEvent(event);
}