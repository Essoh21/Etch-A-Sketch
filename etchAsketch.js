let squaresContainer = document.querySelector(".squaresContainer");
let buttonToDraw = document.querySelector(".buttonToDraw");
let buttonToClear = document.querySelector(".buttonToClear");
let erase = document.querySelector(".erase");
let rainbow = document.querySelector(".rainbow");
let colorContainer = document.querySelector(".colorContainer");
let userScreenContainer = document.querySelector(".userScreenContainer");
let squaresRange = document.querySelector("#squaresRange");
let numbers = document.querySelector(".numbers");



let mouseDown = false;
let colorPicker = colorContainer.value;
let color = colorPicker;
let numberOfSquares = squaresRange.value;

// let get the width and height values in order to make easy the responsive part
let squaresContainerCssStyleDeclarationObj = window.getComputedStyle(squaresContainer);
let sqContainerWidth = squaresContainerCssStyleDeclarationObj.getPropertyValue('width');
let widthLenght = sqContainerWidth.length;

let sqContainerHeight = squaresContainerCssStyleDeclarationObj.getPropertyValue('height');
let heightLenght = sqContainerWidth.length;

let squaresContainerWidth = sqContainerWidth.substring(0, widthLenght - 2);
let squaresContainerHeight = sqContainerHeight.substring(0, widthLenght - 2);
let squaresContainerArea = squaresContainerHeight * squaresContainerWidth;

// function to draw squares when number of squares is inputed
function drawSquares(numberOfSquares, surfaceToUse) {
    let numberOfsquaresSquare = numberOfSquares * numberOfSquares;
    let squareLength = (Math.sqrt(squaresContainerArea)) / numberOfSquares;
    for (let i = 1; i <= numberOfsquaresSquare; i++) {
        let div = document.createElement("div");
        div.className = "square";
        div.style.width = squareLength;
        div.style.height = squareLength;
        surfaceToUse.appendChild(div);

    }
    surfaceToUse.style.display = "grid";
    surfaceToUse.style.gridTemplateColumns = `repeat(${numberOfSquares},${squareLength}px)`;
}

// a fonction to blank the screen
function clearDiv() {
    let nsquare = numberOfSquares * numberOfSquares;
    for (let i = 1; i <= nsquare; i++) {
        let square = document.querySelector(".square");
        square.remove();
    }
}
// function to chose mode 



// adding events to buttons

squaresRange.addEventListener('input', () => {
    numberOfSquares = squaresRange.value;
    numbers.textContent = `${numberOfSquares}x${numberOfSquares}`;
});
buttonToDraw.addEventListener("click", () => {

    numberOfSquares = squaresRange.value;
    drawSquares(numberOfSquares, squaresContainer);
    let squaresNodeList = document.querySelectorAll('.square');
    let squaresNodeListLength = squaresNodeList.length;
    for (let i = 0; i < squaresNodeListLength; i++) {
        squaresNodeList[i].addEventListener('click', () => {

            squaresNodeList[i].style.backgroundColor =
                color;

        })

        squaresNodeList[i].onmousemove = () => {
            squaresContainer.onmousedown = () => { mouseDown = true };
            squaresContainer.onmouseup = () => { mouseDown = false };
            if (!mouseDown) return;
            color = color;
            squaresNodeList[i].style.backgroundColor =
                color;
        }
    }


});


buttonToClear.addEventListener('click', () =>
    clearDiv());


colorContainer.addEventListener('input', () => {
    colorPicker = colorContainer.value;
    color = colorPicker;
    userScreenContainer.style.setProperty("--picked-color", `${color}`);


});

colorContainer.addEventListener('change', () => {
    colorPicker = colorContainer.value;
    color = colorPicker;
    userScreenContainer.style.setProperty("--picked-color", `${color}`);


});

rainbow.onclick = () => {
    let amountOfRed = Math.floor(Math.random() * 255 + 1);
    let amountOfGreen = Math.floor(Math.random() * 255 + 1);
    let amountOfBlue = Math.floor(Math.random() * 255 + 1);
    color = `rgb(${amountOfRed}, ${amountOfGreen}, ${amountOfBlue})`;
};
erase.onmousedown = () => { color = '#fff' };
// cercle animation event
let disc = document.querySelector('.disc');
disc.addEventListener('click', () => {
    disc.style.width = '150px';
    disc.style.height = '150px';
})
disc.addEventListener('mouseover', () => {
    disc.style.width = '100px';
    disc.style.height = '50px';

});

// title animation event
//let squareAnim = document.querySelector('.squareAnim');
//squareAnim.addEventListener('click', () => {
//  squareAnim.style.transform = 'rotate(360deg)';
//});
//squareAnim.addEventListener('mouseover', () => {
//  alert('hi');
//})
//alert(squaresContainerCssStyleDeclarationObj.getPropertyValue('width').substring(0, widthLenght - 2));