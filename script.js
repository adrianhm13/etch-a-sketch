
const squareMain = document.querySelector("#squareContainer")
    
for(let i = 0; i <= 256; i++){
const squareDiv = document.createElement('div');

squareDiv.classList.toggle("square");

squareMain.appendChild(squareDiv);
console.log(i);
}