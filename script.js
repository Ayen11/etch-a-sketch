let gridsize = 64;
function GetGridSize() {
    gridsize = parseInt(prompt("number"));
    if (gridsize > 100) {
        gridsize=100;
    };
    console.log(gridsize);
    setupGrid(gridsize);
    };



const container = document.querySelector('#container');

for (var i = 1; i <= gridsize*gridsize; i++) {
    const content = document.createElement('div');
    content.classList.add('square')
    //content.textContent = i;
    container.appendChild(content);
    content.addEventListener("mouseover", () =>{
        content.classList.add('hovered')
    })
};

const resetBtn = document.querySelector('#reset');
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