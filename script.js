
const squareMain = document.querySelector("#squareContainer")
    
for(let i = 0; i < 256; i++){
const squareDiv = document.createElement('div');

squareDiv.classList.toggle("square");
squareDiv.setAttribute('id', 'squareDraw');
squareMain.appendChild(squareDiv);
console.log(i);
};

function changeColor(){
    this.style.backgroundColor = 'red';
    console.log(this);
};

const drawSquares = document.querySelectorAll(".square");

drawSquares.forEach(element => {
    element.addEventListener("mouseover", changeColor);
    
});