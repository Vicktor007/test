let modalContainers = document.querySelectorAll('#modal-container');

for(let mod of modalContainers) {
    mod.addEventListener('click', none2);
}

function none2(e) {
    if(e.target === this) {
        this.style.display = 'none';
    }
}

let closeBtns = document.querySelectorAll('#close-btn');

for(let cl of closeBtns) {
    cl.addEventListener('click', none);
}

function none() {
    for(let mod of modalContainers) {
        mod.style.display = "none";
    }
}

const openBtns = document.querySelectorAll("#open-btn");

for(let op of openBtns) {
    op.addEventListener('click', block);
}

function block() {
    for(let mod of modalContainers) {
        mod.style.display = 'block';
    }
}
