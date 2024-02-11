

const newblue = document.getElementById('blue');
const newWhite = document.getElementById('width');
const newyellow = document.getElementById('yellow');
const newred = document.getElementById('red');
const newblack = document.getElementById('black');
// const  newpurple = document.getElementById('purple');
const newgreen = document.getElementById('green');

newgreen.addEventListener('click', function greenButtons() {
    document.body.style.backgroundColor = "green";
});

// use for all times 
document.getElementById('golden').addEventListener('click', function () {
    document.body.style.backgroundColor = "goldenrod";
});



newblue.onclick = mekblue;
newWhite.onclick = mkewhite;
newyellow.onclick = mkeyellow;
newred.onclick = mkered;
// option 4
newblack.addEventListener('click', mkeblack);
//newyellow.onclick = mkeyellow;


function mekblue() {
    document.body.style.backgroundColor = "blue";
};

function mkewhite() {
    document.body.style.backgroundColor = "gray";
}

function mkeblack() {
    document.body.style.backgroundColor = "#000";
}

function mkered() {
    document.body.style.backgroundColor = "red";
}

function mkeyellow() {
    document.body.style.backgroundColor = "yellow";
}

function mkepurple() {
    document.body.style.backgroundColor = "purple";
}




// const newblue = document.getElementById('blue');

// newblue.onclick = mekblue; // Remove the quotes around mekblue

// function mekblue() {
//     document.body.style.backgroundColor = "blue";
// };





// টেক্স চেন্জ করা 

document.getElementById('text-al').addEventListener('click', function () {
    let newtext = document.getElementById('text-cheng');
    newtext.innerText = " I am a sujon mia sujon"
});

document.getElementById('text01').addEventListener('click', function () {
    let retext = document.getElementById('text-cheng');
    retext.style.color = 'red';
});

document.getElementById('text02').addEventListener('click', function () {
    let retext1 = document.getElementById('text-cheng');
    retext1.style.color = 'green';
    retext1.style.marginLeft = '150px'
    retext1.style.fontSize = '50px'
});


// text cheng.................................

document.getElementById('text-al1').addEventListener('click', function(){
    let textC1 = document.getElementById('text-cheng');
    textC1.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquam eos";
    textC1.style.color = 'yellow';
    textC1.style.fontSize = '30px';
})

document.getElementById('text-al2').addEventListener('click', function(){
    let textC2 = document.getElementById('text-cheng');
    textC2.innerText = "commodi explicabo voluptatem. Reiciendis magni ex tempora";
    textC2.style.color = 'goldenrod';
    textC2.style.fontSize = '35px';
})

document.getElementById('text-al3').addEventListener('click', function(){
    let textC3 = document.getElementById('text-cheng');
    textC3.innerText = " culpa doloremque laudantium, sint, inventore modi, earum dicta ipsa officia. Nulla, hic?";
    textC3.style.color = 'gray';
    textC3.style.fontSize = '25px';
})

// document.getElementById('text-a').addEventListener('click', function(){
//     let textC1 = document.getElementById('text-cheng');
//     textC1.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquam eos";
// })
