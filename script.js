const container = document.querySelector('#container');

for (var i = 1; i <= 256; i++) {
    const content = document.createElement('div');
    content.classList.add('square')
    //content.textContent = i;
    container.appendChild(content);
    content.addEventListener("mouseover", () =>{
        content.classList.add('hovered')
    })
};