
const squareMain = document.querySelector("#squareContainer")

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');

    squareDiv.classList.toggle("square");
    squareDiv.setAttribute('id', 'squareDraw');
    squareMain.appendChild(squareDiv);
    console.log(i);
};

const mainDiv = document.querySelector(".drawContent");

mainDiv.addEventListener('mousedown', mouseDown);

function mouseDown() {
    mainDiv.addEventListener('mouseover', mouseOver);
    mainDiv.addEventListener('touchstart', mouseOver);
    mainDiv.addEventListener('mouseup', () => {
        mainDiv.removeEventListener('mouseover', mouseOver);
        console.log("released")
    });
};

function mouseOver(e) {
    e.target.style.backgroundColor = 'red';
};