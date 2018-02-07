const holes = document.querySelectorAll('.hole');
const scoreBord = document.querySelector('.score');
const moles = document.querySelectorAll('.moles');
let lastHole;
let timeUp = false;

function randomTime(min, max) { // fn that gives us random amount of time between hover min and max
    return Math.round(Math.round() * (max - min) + min)
}

function randomHole(holes) { // fn that's going to pick a random hole fot the mole to pop up
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole == lastHole) {
        console.log('Ah nah thats the same hole bud!');
        return randomHole(holes);
    }
    lastHole = hole;// save the reference to what one got popped last time
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole =randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) peep();
    }, time);
}