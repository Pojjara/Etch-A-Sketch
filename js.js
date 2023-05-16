let container = document.querySelector('#container');

const gridSize = prompt('Size: ')

for(let i = 0; i < gridSize; i++){
    const div = document.createElement('div');
    div.classList.add('Rows');
    container.appendChild(div);
}

const rows = document.querySelectorAll('.Rows');

for(let i = 0; i < gridSize; i++){
    for(let k = 0; k < gridSize; k++) {
    let currentcontainer = rows[i] 
    var div = document.createElement('div');
    div.classList.add('square');
    currentcontainer.appendChild(div)
    }
}


const squares = document.querySelectorAll('.square');

squares.forEach((square)=> {

    square.addEventListener('mouseover', function(){
        square.style.backgroundColor = "black";
    })
})