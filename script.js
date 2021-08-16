const content = document.querySelector('.container');

buildGrid(16);



function random_rgba() {
    
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let allCellsOS = document.querySelectorAll('.cell');
allCellsOS.forEach((cellOs) => {
    cellOs.onmouseover = function (){
        cellOs.setAttribute('style', `background-color: ${random_rgba()}`);
    };
})


function changeGrid(){
    let value = prompt("Choose a number, preferably less than 100");
    while(value >= 100){
        prompt("LMAO, I SAID less than 100");
    }
;

    while(content.hasChildNodes()){
        content.removeChild(content.lastChild);
    }

    buildGrid(value);
}

function buildGrid(value){
    for(j = 0; j < value; j++){
        for(i = 0; i < value; i++){
            console.log(i);
            let row = document.createElement('div');
            row.classList.add('cell');
            content.appendChild(row);
        }
    }

    let percentage = 100/value;

    let allCells = document.querySelectorAll('.cell');
    allCells.forEach((cell) => {
        cell.setAttribute('style', `width: ${percentage}%; height: ${percentage}%; background-color: ${random_rgba()}`);
    })


}

let buttino = document.querySelector('button');
buttino.addEventListener("click", changeGrid);





