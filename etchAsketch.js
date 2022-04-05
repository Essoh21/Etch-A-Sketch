let squaresContainer = document.querySelector(".squaresContainer");

let numberOfSquares = 15;
let squaresContainerWidth = 410;
let squaresContainerHeight = 410;
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
drawSquares(numberOfSquares, squaresContainer);