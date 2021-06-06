const container = document.querySelector('#container');

function gridGeneration(n) {
    document.getElementById('container').innerHTML = ""; 
    elementSize = "auto ";
    container.style.gridTemplateRows = elementSize.repeat(n);
    container.style.gridTemplateColumns = elementSize.repeat(n); 
    for (let i = 0; i < n**2; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.id = i;
        container.appendChild(grid);  
    }
    let grid = document.querySelectorAll('.grid');
    let array = new Array(n**2); for (let i=0; i<(n**2); ++i) array[i] = 0; 
    grid.forEach(element => {
        element.addEventListener("mouseover", function(){
            array[element.id]++;
            element.setAttribute("style", randomColor(array[element.id])); 
    })})}

function refresh() {
    let sideLength = prompt("How many squares per side?");
    if (sideLength >= 2 && sideLength <= 100) {
        sideLength = Number(sideLength);
        gridGeneration(sideLength);
    } 
    else {
        alert("You must pick a number between 2 and 100.");
    }
}

function randomColor(numberOfPasses) {
    let a = new Array(3); for (let i=0; i<(3); ++i) a[i] = Math.floor(Math.random() * 256);
    if (numberOfPasses <= 10) {
        return("background-color:rgb(" + a[0] + ", " + a[1] + ", " + a[2] + ");filter:brightness(" + (100-(numberOfPasses*10)) + "%)")
    }
    else {
        return("background-color:rgb(" + a[0] + ", " + a[1] + ", " + a[2] + ");filter:brightness(" + 0 + "%)")
    }
}
gridGeneration(16);