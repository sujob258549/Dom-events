

const newblue = document.getElementById('blue');
const  newWhite = document.getElementById('width');
const  newyellow = document.getElementById('yellow');
const  newred = document.getElementById('red');
const  newblack = document.getElementById('black');
// const  newpurple = document.getElementById('purple');
const newgreen = document.getElementById('green');

newgreen.addEventListener('click', function greenButtons(){
    document.body.style.backgroundColor = "green";
})


newblue.onclick = mekblue;
newWhite.onclick = mkewhite;
newyellow.onclick = mkeyellow;
newred.onclick = mkered;
// option 4
newblack.addEventListener('click' ,mkeblack);
//newyellow.onclick = mkeyellow;


function mekblue(){
    document.body.style.backgroundColor = "blue";
};

function mkewhite(){
    document.body.style.backgroundColor = "gray";
}

function mkeblack(){
    document.body.style.backgroundColor = "#000";
}

function mkered(){
    document.body.style.backgroundColor = "red";
}

function mkeyellow(){
    document.body.style.backgroundColor = "yellow";
}

function mkepurple(){
    document.body.style.backgroundColor = "purple";
}




// const newblue = document.getElementById('blue');

// newblue.onclick = mekblue; // Remove the quotes around mekblue

// function mekblue() {
//     document.body.style.backgroundColor = "blue";
// };
