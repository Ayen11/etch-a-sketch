let gridsize = 64;
let drawMode = 0;

function GetGridSize() {
    gridsize = parseInt(prompt("Choose grid size from 1 to 200"));
    if (gridsize > 200) {
        gridsize=200;
    };
    console.log(gridsize);
    setupGrid(gridsize);
    };

function setDrawMode(number) {
    drawMode = number
};    

function drawDiv(e) {
    if (drawMode === 0) {   
        e.target.classList.add('hovered');
        }
        else if (drawMode === 1){
        e.target.classList.remove('hovered');
        console.log('remove');
            };
};

const container = document.querySelector('#container');

for (var i = 1; i <= gridsize*gridsize; i++) {
    const content = document.createElement('div');
    content.classList.add('square')
    //content.textContent = i;
    container.appendChild(content);
    content.addEventListener("mouseover",drawDiv);
};


const eraserBtn = document.querySelector('#eraser');
eraserBtn.onclick = function () {
    setDrawMode(1);
    console.log('remove');
};

const penBtn = document.querySelector('#pen');
penBtn.onclick = function () {
    setDrawMode(0);
};


const resetBtn = document.querySelector('#changeSize');
resetBtn.onclick = function () {
    GetGridSize();
};




function setupGrid(gridsize) {
    container.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`
    container.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`
    container.innerHTML = ''

for (var i = 1; i <= gridsize*gridsize; i++) {
    const content = document.createElement('div');
    content.classList.add('square')
    //content.textContent = i;
    container.appendChild(content);
    content.addEventListener("mouseover", () =>{
        content.classList.remove('hovered');
        content.classList.add('hovered');
    })
}};

//https://www.youtube.com/watch?v=TzcmyP5MfpQ