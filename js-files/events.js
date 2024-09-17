console.log('This is separate file to js')

// Option-1 directly added events inline of html elements 

// option-2 most of the time we'll use this model
function makeDef(){
    document.body.style.backgroundColor='white';
}
// option-3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick= makeBlue
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option-3 another [wwe'll use it sometimes]
const buttonPurple = document.getElementById('make-purple');
buttonPurple.onclick = function makePurple(){
    document.body.style.backgroundColor='purple';
}

// Option-4
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink)
function makePink(){
    document.body.style.backgroundColor = 'pink'
}
// Option-4 another
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})
// Option-4 final 
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})