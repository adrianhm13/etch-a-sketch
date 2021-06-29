function generateGrid(gridSize) {
    let gridTotalSquares = gridSize * gridSize; //Total Squares that will fill the square main Div
    const squareMain = document.querySelector("#squareContainer")

    squareMain.style.setProperty('grid-template-columns', 'repeat(' + gridSize + ', 1fr)');  
    squareMain.style.setProperty('grid-template-rows', 'repeat(' + gridSize + ', 1fr)');
    for (let i = 0; i < gridTotalSquares; i++) {
        const squareDiv = document.createElement('div'); //Small Squares

        squareDiv.classList.toggle("square");
        squareDiv.setAttribute('id', 'squareDraw');

        squareMain.appendChild(squareDiv);
        console.log(i);
    };

};


function changeGrid() {

    let userInput = prompt("Write the size of the grid you want", 16);

    if (userInput > 64) {
        alert("Please, write a number below 64, if you try to create a bigger grid could cause perfomance issues in your browser");
    }
    else {
        gridSize = userInput;
        console.log(gridSize);

        //Delete Grid first
        const gridPrevious = document.querySelectorAll(".square");
        console.log(gridPrevious);
        gridPrevious.forEach(element => element.parentNode.removeChild(element));

        //Generate new Grid
        generateGrid(gridSize);
    }
};

function pickColor() {
    
};

function clearGrid() {
    const squareDraws = document.querySelectorAll('.square');
    squareDraws.forEach(element => element.style.setProperty('background-color', 'white'));
};

//When click and hover, squares change color
function mouseDown() {
    mainDiv.addEventListener('mouseover', changeColor);
    mainDiv.addEventListener('mouseup', () => {
        mainDiv.removeEventListener('mouseover', changeColor);
        console.log("released")
    });
};

function changeColor(e) {
    e.target.style.setProperty('background-color', ' '+ btnPickColor.value +' ');
}

const mainDiv = document.querySelector(".drawContent");

mainDiv.addEventListener('mousedown', mouseDown);


const btnGrid = document.getElementById("btnGrid");

btnGrid.addEventListener('click', () => {
    changeGrid();
});

const btnPickColor = document.getElementById("colorpicker");

console.log(btnPickColor.value);

const btnClear = document.getElementById("btnClear");

btnClear.addEventListener('click', () => {
    clearGrid();
});



let gridSize = 16;  //We start with the value 16x16 as gridSize, we can change it with the New Grid button

generateGrid(gridSize);