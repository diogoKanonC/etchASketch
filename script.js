const content = document.querySelector('.container');
const numerion = document.querySelector('.numerino');

let value = 16;
let percentage = 100/value;
buildgrid();

let nbyf = document.createElement('h1');
nbyf.textContent = value + " X " + value;
numerion.appendChild(nbyf);

function random_rgba() {    
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function buildgrid(){
    for(j = 0; j < value; j++){
        for(i = 0; i < value; i++){
            let cellzy = document.createElement('div');
            cellzy.classList.add('cell');
            content.appendChild(cellzy);
            cellzy.style.width = `${percentage}%`;
            cellzy.style.height = `${percentage}%`;
            
            cellzy.addEventListener('mouseover', () => {
                cellzy.style.backgroundColor = `${random_rgba()}`;  
            });
        }
    }
}


let buttino = document.querySelector('button');
buttino.addEventListener("click", () => {
    value = prompt("Choose a number, preferably less than 100");
    while(value >= 60 || value == null || value < 0){
        prompt("LMAO");
    }

    nbyf.textContent = value + " X " + value;
    percentage = 100/value;
    content.innerHTML = '';
    buildgrid();
});




